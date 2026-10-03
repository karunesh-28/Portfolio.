import React, { useEffect, useRef } from 'react';

export const CyberMatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Characters for cyber stream
    const chars = '0123456789ABCDEF01010101XYZ0123456789';
    const fontSize = 15;
    const columns = Math.ceil(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * -100);

    // Render loop
    const render = () => {
      // Semi-transparent fade to create phosphor trail
      ctx.fillStyle = 'rgba(2, 4, 8, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Color coding for cyber streams: Cyan, Ice Blue, and glowing White head
        if (Math.random() > 0.94) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 8;
        } else if (Math.random() > 0.5) {
          ctx.fillStyle = 'rgba(0, 240, 255, 0.45)';
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Digital Rain Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20" />

      {/* Modern Ambient Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>

      {/* Subtle smooth vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,4,8,0.2)_0%,rgba(2,4,8,0.92)_100%)]"></div>
    </div>
  );
};
