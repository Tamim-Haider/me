import React, { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  enabled: boolean;
  theme: 'matrix' | 'amber' | 'cyan' | 'red';
}

export const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ enabled, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Characters: Katakana, hex numbers, mathematical and cyber symbols
    const chars = '0123456789ABCDEF<>/{};:_$#~*+=-!%&|[]';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    const getColor = (alpha: number) => {
      switch (theme) {
        case 'amber':
          return `rgba(245, 158, 11, ${alpha})`;
        case 'cyan':
          return `rgba(6, 182, 212, ${alpha})`;
        case 'red':
          return `rgba(239, 68, 68, ${alpha})`;
        case 'matrix':
        default:
          return `rgba(16, 185, 129, ${alpha})`;
      }
    };

    let lastDrawTime = 0;
    const fpsInterval = 1000 / 24; // 24 FPS for authentic retro feel & lightweight CPU

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = currentTime - lastDrawTime;
      if (elapsed < fpsInterval) return;
      lastDrawTime = currentTime - (elapsed % fpsInterval);

      // Subtle fade effect for persistence trails
      ctx.fillStyle = 'rgba(6, 9, 13, 0.18)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright head character
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff';
        } else {
          ctx.fillStyle = getColor(0.7);
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled, theme]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-25"
      aria-hidden="true"
    />
  );
};
