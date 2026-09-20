import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        // Smooth non-linear progress
        const step = Math.max(3, Math.floor((100 - prev) * 0.25));
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="loading-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090b10] text-slate-100 transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated AT Monogram */}
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-cyan-950/40">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-transparent blur-sm" />
          <span className="relative font-display text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-cyan-400 to-slate-200">
            AT
          </span>
        </div>

        {/* Animated Name */}
        <h1 className="font-display text-xl font-bold tracking-widest text-slate-100 uppercase sm:text-2xl">
          AMRIT TIWARI
        </h1>

        {/* Subtle tagline */}
        <p className="mt-2 text-xs font-mono tracking-wider text-slate-400">
          Crafting digital experiences...
        </p>

        {/* Progress bar */}
        <div className="mt-8 w-48 overflow-hidden rounded-full bg-slate-800/80 p-0.5 border border-slate-700/50">
          <div
            className="h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numeric progress indicator */}
        <div className="mt-2.5 font-mono text-[11px] text-slate-500">
          {progress}%
        </div>
      </div>
    </div>
  );
}
