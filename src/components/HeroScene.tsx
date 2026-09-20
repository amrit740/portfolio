import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [interactiveMsg, setInteractiveMsg] = useState<string | null>(null);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the digital workspace
    const workspaceGroup = new THREE.Group();
    scene.add(workspaceGroup);

    // 1. Central Icosahedron Wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(3.5, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.75,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    workspaceGroup.add(icoMesh);

    // 2. Inner Core Dodecahedron
    const coreGeometry = new THREE.DodecahedronGeometry(1.8, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    workspaceGroup.add(coreMesh);

    // 3. Surrounding Floating Network Nodes
    const nodeCount = 28;
    const nodesGroup = new THREE.Group();
    const nodeGeometry = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 5.2 + Math.random() * 2.5;

      const pos = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      nodePositions.push(pos);

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(pos);
      nodesGroup.add(node);
    }
    workspaceGroup.add(nodesGroup);

    // 4. Interconnecting Lines between closest nodes
    const linePositions: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 3.2) {
          linePositions.push(
            nodePositions[i].x,
            nodePositions[i].y,
            nodePositions[i].z,
            nodePositions[j].x,
            nodePositions[j].y,
            nodePositions[j].z
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.25,
    });
    const networkLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    workspaceGroup.add(networkLines);

    // 5. Subtle Ambient Particles
    const particleCount = 70;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 24;
      particlePositions[i + 1] = (Math.random() - 0.5) * 24;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.08,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 4, 30);
    pointLight.position.set(6, 6, 8);
    scene.add(pointLight);

    const secondaryLight = new THREE.PointLight(0x818cf8, 2.5, 30);
    secondaryLight.position.set(-6, -4, 5);
    scene.add(secondaryLight);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 2;
      targetY = (y - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Click on scene interaction
    const handleClick = () => {
      setInteractiveMsg('Turning concepts into code.');
      setTimeout(() => setInteractiveMsg(null), 3200);

      // Brief pulse
      workspaceGroup.scale.set(1.08, 1.08, 1.08);
      setTimeout(() => {
        workspaceGroup.scale.set(1, 1, 1);
      }, 300);
    };

    container.addEventListener('click', handleClick);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        workspaceGroup.rotation.y += delta * 0.25;
        workspaceGroup.rotation.x += delta * 0.1;

        coreMesh.rotation.y -= delta * 0.4;
        coreMesh.rotation.z += delta * 0.2;

        icoMesh.rotation.x += delta * 0.15;

        // Mouse parallax tilt
        workspaceGroup.position.x = mouseX * 1.5;
        workspaceGroup.position.y = -mouseY * 1.2;

        // Float slow
        workspaceGroup.position.y += Math.sin(time * 1.5) * 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      resizeObserver.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      icoGeometry.dispose();
      icoMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none">
      {hasWebGL ? (
        <div
          ref={containerRef}
          className="w-full h-full cursor-pointer relative"
          data-cursor-text="INTERACT"
          title="Click to interact with the Digital Workspace"
        />
      ) : (
        /* Fallback for devices without WebGL */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-900/40 rounded-3xl border border-slate-800">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-cyan-400/40 flex items-center justify-center animate-spin-slow">
            <span className="text-3xl font-display font-black text-cyan-400">AT</span>
          </div>
          <p className="mt-4 text-xs font-mono text-slate-400">The Digital Workspace</p>
        </div>
      )}

      {/* Floating Interactive Message Pill */}
      {interactiveMsg && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/80 text-cyan-200 text-xs font-mono shadow-xl shadow-cyan-950/60 transition-all animate-bounce">
          ✦ {interactiveMsg}
        </div>
      )}

      {/* Interactive Hint Indicator */}
      <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400 pointer-events-none flex items-center gap-1.5 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D Workspace
      </div>
    </div>
  );
}
