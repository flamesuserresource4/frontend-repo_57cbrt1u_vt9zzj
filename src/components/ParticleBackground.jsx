import React, { useEffect, useRef } from 'react';

// Smooth particle background with subtle glow
export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const dprRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      dprRef.current = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dprRef.current);
      canvas.height = Math.floor(window.innerHeight * dprRef.current);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 18000);
      particlesRef.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.12 * dprRef.current,
        vy: (Math.random() - 0.5) * 0.12 * dprRef.current,
        r: (1 + Math.random() * 1.5) * dprRef.current,
      }));
    };

    const step = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // subtle grainy fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // draw connections
      const maxDist = 120 * dprRef.current;
      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // particle
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, 'rgba(108,0,255,0.8)');
        grad.addColorStop(1, 'rgba(0,194,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // connections
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const q = particlesRef.current[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const alpha = 1 - d2 / (maxDist * maxDist);
            // purple-blue gradient mix
            const g = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
            g.addColorStop(0, `rgba(108,0,255,${0.18 * alpha})`);
            g.addColorStop(1, `rgba(0,194,255,${0.18 * alpha})`);
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.8 * dprRef.current;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener('resize', resize);
    animationRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-0 opacity-70 pointer-events-none"
      style={{ filter: 'blur(0.2px)' }}
      aria-hidden
    />
  );
}
