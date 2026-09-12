'use client';

import { useEffect, useRef, useState } from 'react';

interface MetricItem {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  context: string;
}

const metrics: MetricItem[] = [
  {
    numericValue: 1150,
    suffix: '+',
    label: 'DSA Solved',
    context: '1550+ Contest Rating · 3★ CodeChef',
  },
  {
    numericValue: 9.65,
    decimals: 2,
    label: 'Academic CGPA',
    context: 'VIT Pune · AI & Data Science',
  },
  {
    numericValue: 3,
    label: 'Research Papers',
    context: '1 Scopus Indexed (EID: 105047264702)',
  },
  {
    numericValue: 5,
    suffix: '+',
    label: 'Industry & Research Roles',
    context: 'HCL, BlockseBlock, Codveda',
  },
];

export function HeroMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200; // 1.2s smooth count up
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for realistic deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              metrics.map((m) => {
                const current = m.numericValue * easeProgress;
                return m.decimals ? parseFloat(current.toFixed(m.decimals)) : Math.floor(current);
              })
            );

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCounts(metrics.map((m) => m.numericValue));
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="border-t border-rule pt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, idx) => {
          const displayVal = hasAnimated
            ? metric.decimals
              ? counts[idx]?.toFixed(metric.decimals)
              : counts[idx]
            : metric.decimals
            ? metric.numericValue.toFixed(metric.decimals)
            : metric.numericValue;

          return (
            <div
              key={metric.label}
              className="p-4 border border-transparent hover:border-rule hover:bg-surface-alt/70 transition-all duration-300 group"
            >
              <p className="font-mono text-display font-bold text-ink tracking-tight group-hover:text-accent transition-colors tabular-nums">
                {metric.prefix}
                {displayVal}
                {metric.suffix}
              </p>
              <p className="font-mono text-caption font-semibold text-ink mt-1 uppercase tracking-wider">
                {metric.label}
              </p>
              <p className="font-mono text-label text-ink-tertiary mt-1 line-clamp-1 group-hover:text-ink-secondary transition-colors">
                {metric.context}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
