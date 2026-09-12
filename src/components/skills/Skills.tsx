'use client';

import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { skillCategories } from '@/data/skills';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Section id="skills" label="05 — Engineering Competencies" title="Technical Toolkit &amp; Systems">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column: Quick scanning overview */}
        <div className="md:col-span-4">
          <p className="text-body text-ink-secondary leading-relaxed mb-6">
            A concrete summary of languages, distributed database technologies, neural architectures, and CS fundamentals practiced across real-world systems and competitive programming.
          </p>

          <div className="border border-rule p-5 bg-surface-alt/40 space-y-3">
            <p className="font-mono text-label text-ink font-semibold uppercase tracking-wider">
              Primary Focus Areas
            </p>
            <div className="space-y-2 font-mono text-caption text-ink-secondary">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                High-Concurrency Backend (FastAPI, Redis)
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Graph Neural Networks &amp; Autonomous Agents
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Algorithmic Performance (C++, DSA)
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Categorized Cards Grid with interactive hover */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category) => {
            const isHighlighted = activeCategory === category.name;
            return (
              <div
                key={category.name}
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-5 border transition-all duration-200 ${
                  isHighlighted
                    ? 'border-accent bg-surface-card shadow-sm'
                    : 'border-rule bg-surface hover:border-ink-secondary/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3 border-b border-rule/50 pb-2">
                  <h3 className="font-mono text-label text-accent font-bold uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <span className="font-mono text-label text-ink-tertiary">
                    {category.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-caption px-2 py-1 bg-surface-alt text-ink hover:bg-accent hover:text-white transition-colors cursor-default border border-rule/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
