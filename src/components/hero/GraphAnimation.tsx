'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  label?: string;
}

const TECHNICAL_LABELS = ['GNN', 'REDIS', 'FASTAPI', 'TF-IDF', 'GAT', 'INDEX', 'DAG', 'O(V+E)'];

export function GraphAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Pause canvas execution when hero scrolls out of view to preserve 100% CPU/GPU for the rest of the page
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Efficient node count (max 18 nodes)
    const nodeCount = Math.min(Math.floor((width * height) / 32000), 18);
    const nodes: Node[] = [];

    for (let i = 0; i < Math.max(nodeCount, 12); i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 2,
        baseRadius: Math.random() * 1.5 + 2,
        pulsePhase: Math.random() * Math.PI * 2,
        label: i < TECHNICAL_LABELS.length ? TECHNICAL_LABELS[i] : undefined,
      });
    }

    let t = 0;

    const render = () => {
      if (!isVisible) return;
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle architectural coordinate grid
      ctx.strokeStyle = 'rgba(229, 229, 227, 0.35)';
      ctx.lineWidth = 0.5;
      const gridSize = 72;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Node movement & soft gravity
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            node.x += (dx / dist) * force * 0.6;
            node.y += (dy / dist) * force * 0.6;
          }
        }
      });

      // 3. Edges & message packet signals
      const maxConnectDist = 150;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(196, 93, 62, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            if (dist < 110 && (i + j) % 3 === 0) {
              const packetPos = (Math.sin(t * 1.5 + i + j) + 1) / 2;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * packetPos;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * packetPos;

              ctx.beginPath();
              ctx.arc(px, py, 1.6, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(196, 93, 62, 0.7)';
              ctx.fill();
            }
          }
        }
      }

      // 4. Render Nodes & Labels
      nodes.forEach((node) => {
        const pulse = Math.sin(t + node.pulsePhase) * 0.6;
        const currentRadius = Math.max(1, node.baseRadius + pulse);

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius + 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(196, 93, 62, 0.08)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#C45D3E';
        ctx.fill();

        if (node.label) {
          ctx.font = '9px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
          ctx.fillStyle = 'rgba(107, 107, 107, 0.75)';
          ctx.fillText(node.label, node.x + 7, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-65 pointer-events-auto"
      />
    </div>
  );
}
