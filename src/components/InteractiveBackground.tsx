import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse position tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Grid details (weaving threads)
    const threadCount = 18;
    const threads: Array<{
      axis: 'horizontal' | 'vertical';
      positionRatio: number;
      amplitude: number;
      speed: number;
      phase: number;
      color: string;
      thickness: number;
    }> = [];

    // Initialize horizontal threads
    for (let i = 0; i < threadCount; i++) {
      const isHorizontal = i < threadCount / 2;
      const ratio = (i % (threadCount / 2)) / (threadCount / 2 - 1);
      threads.push({
        axis: isHorizontal ? 'horizontal' : 'vertical',
        positionRatio: ratio * 0.9 + 0.05,
        amplitude: Math.random() * 8 + 4,
        speed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.6 
          ? 'rgba(255, 194, 25, 0.08)' // Yellow Gold
          : 'rgba(30, 42, 56, 0.04)',  // Navy Slate
        thickness: Math.random() * 1.5 + 0.5,
      });
    }

    // Animation Loop
    const animate = () => {
      // Ease mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Soft clear background
      ctx.fillStyle = '#F8F6F2';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid texture
      ctx.strokeStyle = 'rgba(26, 42, 64, 0.01)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw active floating threads
      threads.forEach((t) => {
        t.phase += t.speed;
        ctx.beginPath();
        ctx.strokeStyle = t.color;
        ctx.lineWidth = t.thickness;

        const isH = t.axis === 'horizontal';
        const startVal = isH ? width : height;
        const baseline = t.positionRatio * (isH ? height : width);

        for (let i = 0; i <= startVal; i += 15) {
          // Sine wave modulation
          let offset = Math.sin(i * 0.005 + t.phase) * t.amplitude;

          // Mouse gravity pull (bend threads toward the mouse)
          const px = isH ? i : baseline;
          const py = isH ? baseline : i;
          
          if (mouse.x !== -1000) {
            const dx = mouse.x - px;
            const dy = mouse.y - py;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < mouse.radius) {
              const force = (1 - dist / mouse.radius) * 25;
              if (isH) {
                offset += (dy > 0 ? 1 : -1) * force * 0.8;
              } else {
                offset += (dx > 0 ? 1 : -1) * force * 0.8;
              }
            }
          }

          const drawX = isH ? i : baseline + offset;
          const drawY = isH ? baseline + offset : i;

          if (i === 0) {
            ctx.moveTo(drawX, drawY);
          } else {
            ctx.lineTo(drawX, drawY);
          }
        }
        ctx.stroke();
      });

      // Draw subtle mouse cursor glow circle (Liquid Glass indicator)
      if (mouse.x !== -1000) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius * 0.8
        );
         gradient.addColorStop(0, 'rgba(255, 194, 25, 0.03)');
        gradient.addColorStop(0.5, 'rgba(255, 83, 61, 0.01)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
};
