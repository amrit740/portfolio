import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-cursor');
      const customLabel = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (interactive) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }

      if (customLabel) {
        setCursorText(customLabel);
      } else {
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (isTouch) return;

    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Central Dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 pointer-events-none transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: cursorText ? '0px' : isPointer ? '8px' : '5px',
          height: cursorText ? '0px' : isPointer ? '8px' : '5px',
        }}
      />

      {/* Trailing Ring / Text Capsule */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none flex items-center justify-center transition-[border-color,background-color,width,height] duration-200 ${
          cursorText
            ? 'px-3 py-1.5 bg-cyan-500 text-slate-950 font-bold text-[10px] tracking-wider rounded-full shadow-lg shadow-cyan-500/25'
            : isPointer
            ? 'w-10 h-10 border border-cyan-400/80 bg-cyan-500/10 scale-110'
            : 'w-7 h-7 border border-slate-500/40'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {cursorText && <span className="uppercase whitespace-nowrap">{cursorText}</span>}
      </div>
    </div>
  );
}
