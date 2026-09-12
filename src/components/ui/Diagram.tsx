'use client';

import { useState } from 'react';
import { ArchitectureStep } from '@/types';

interface DiagramProps {
  steps: ArchitectureStep[];
  title?: string;
}

export function Diagram({ steps, title }: DiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="my-8">
      {title && (
        <div className="flex items-center justify-between mb-6">
          <p className="section-label">{title}</p>
          <span className="font-mono text-label text-ink-tertiary">
            Interactive Workflow ({steps.length} Stages)
          </span>
        </div>
      )}
      <div className="flex flex-col items-center gap-0 w-full">
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <div key={i} className="flex flex-col items-center w-full max-w-lg">
              <button
                type="button"
                onClick={() => setActiveStep(isActive ? null : i)}
                onMouseEnter={() => setActiveStep(i)}
                className={`w-full text-left p-4 border transition-all duration-300 relative group ${
                  isActive
                    ? 'border-accent bg-surface-alt shadow-sm'
                    : 'border-rule bg-surface hover:border-ink-secondary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-label px-1.5 py-0.5 transition-colors ${
                        isActive
                          ? 'bg-accent text-white'
                          : 'bg-surface-alt text-ink-tertiary group-hover:text-ink'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-caption font-semibold tracking-wider text-ink">
                      {step.label}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-label transition-transform duration-200 ${
                      isActive ? 'text-accent rotate-90' : 'text-ink-tertiary'
                    }`}
                  >
                    →
                  </span>
                </div>
                {step.description && (
                  <p
                    className={`mt-2 text-caption text-ink-secondary font-sans leading-relaxed transition-all duration-200 ${
                      isActive ? 'opacity-100 max-h-32' : 'opacity-85'
                    }`}
                  >
                    {step.description}
                  </p>
                )}
              </button>

              {i < steps.length - 1 && (
                <div className="flex flex-col items-center py-2 select-none" aria-hidden="true">
                  <div className="w-px h-3 bg-rule" />
                  <span className="text-accent text-xs font-mono leading-none my-0.5">↓</span>
                  <div className="w-px h-3 bg-rule" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-center font-mono text-label text-ink-tertiary mt-4">
        Hover or tap any stage to inspect pipeline flow
      </p>
    </div>
  );
}
