import { useEffect, useRef } from "react";

/** Lightweight animated particles canvas background */
export default function Particles({ density = 70 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.scale(DPR, DPR);
    }

    const parent = canvas.parentElement!;
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    const particles: P[] = [];
    function init() {
      particles.length = 0;
      const rect = parent.getBoundingClientRect();
      const count = Math.max(24, Math.floor((rect.width * rect.height) / (12000 / density)));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.6 + 0.4,
        });
      }
    }

    function step() {
      const rect = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, "rgba(0,198,255,0.9)");
        g.addColorStop(1, "rgba(0,114,255,0.05)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }

    init();
    step();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 size-full pointer-events-none opacity-60 mix-blend-screen"
    />
  );
}
