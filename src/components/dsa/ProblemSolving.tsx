'use client';

import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { dsaStats, strongAreas, representativeProblems } from '@/data/dsa';

export function ProblemSolving() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const filteredProblems = selectedTopic
    ? representativeProblems.filter((p) =>
        p.category.toLowerCase().includes(selectedTopic.toLowerCase())
      )
    : representativeProblems;

  return (
    <Section id="problem-solving" label="04 — Problem Solving" title="Algorithmic Engineering &amp; DSA">
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="border border-rule p-6 bg-surface hover:border-accent transition-colors">
          <span className="font-mono text-label text-accent uppercase tracking-wider">LeetCode</span>
          <p className="font-mono text-display font-bold text-ink mt-2">
            {dsaStats.leetcodeProblems}
          </p>
          <p className="font-mono text-caption text-ink-secondary mt-1">
            Problems Solved Across Graphs, Trees, DP &amp; Search
          </p>
        </div>

        <div className="border border-rule p-6 bg-surface hover:border-accent transition-colors">
          <span className="font-mono text-label text-accent uppercase tracking-wider">Contest Rating</span>
          <p className="font-mono text-display font-bold text-ink mt-2">
            {dsaStats.contestRating}
          </p>
          <p className="font-mono text-caption text-ink-secondary mt-1">
            LeetCode Contest Performance Rating
          </p>
        </div>

        <div className="border border-rule p-6 bg-surface hover:border-accent transition-colors">
          <span className="font-mono text-label text-accent uppercase tracking-wider">Platforms &amp; Profiles</span>
          <div className="flex flex-col gap-2.5 mt-3">
            {dsaStats.platforms.map((p) => (
              <a
                key={p.name}
                href={p.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-caption text-ink hover:text-accent transition-colors flex items-center justify-between group"
              >
                <span>
                  <strong className="text-ink font-semibold">{p.name}:</strong>{' '}
                  <span className="text-ink-secondary">{p.stat}</span>
                </span>
                <span className="text-ink-tertiary group-hover:text-accent group-hover:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Topic Filters */}
      <div className="mb-12 border-t border-rule pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <p className="section-label">Core Specialization Areas</p>
          {selectedTopic && (
            <button
              type="button"
              onClick={() => setSelectedTopic(null)}
              className="font-mono text-label text-accent hover:underline self-start sm:self-auto"
            >
              Reset filter (Showing all {representativeProblems.length})
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {strongAreas.map((area) => {
            const isSelected = selectedTopic === area;
            return (
              <button
                type="button"
                key={area}
                onClick={() => setSelectedTopic(isSelected ? null : area)}
                className={`font-mono text-caption px-3 py-1.5 border transition-all duration-200 ${
                  isSelected
                    ? 'border-accent bg-accent text-white font-medium'
                    : 'border-rule bg-surface text-ink-secondary hover:border-ink-secondary hover:text-ink'
                }`}
              >
                {area}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Technical Problem Walkthroughs */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="section-label">Representative Deep-Dive Problems</p>
          <span className="font-mono text-label text-ink-tertiary">
            Showing {filteredProblems.length} of {representativeProblems.length}
          </span>
        </div>

        <div className="space-y-4">
          {filteredProblems.map((problem) => (
            <div
              key={problem.name}
              className="border border-rule p-6 bg-surface hover:border-accent hover:bg-surface-alt/40 transition-all duration-200 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="accent">{problem.category}</Badge>
                    <span className="font-mono text-label text-ink-tertiary">
                      {problem.complexity}
                    </span>
                  </div>

                  <h4 className="text-body-lg font-semibold text-ink group-hover:text-accent transition-colors">
                    {problem.name}
                  </h4>

                  <div className="mt-3 space-y-2">
                    <div className="border-l-2 border-rule pl-3 py-0.5">
                      <p className="font-mono text-label text-ink-tertiary uppercase">Technical Challenge</p>
                      <p className="text-caption text-ink-secondary mt-0.5 leading-relaxed">
                        {problem.whyInteresting}
                      </p>
                    </div>

                    <div className="border-l-2 border-accent pl-3 py-0.5">
                      <p className="font-mono text-label text-accent uppercase">Algorithmic Formulation</p>
                      <p className="text-caption text-ink font-medium mt-0.5 leading-relaxed">
                        {problem.approach}
                      </p>
                    </div>
                  </div>
                </div>

                {problem.link && (
                  <a
                    href={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start md:self-center px-4 py-2 border border-rule font-mono text-label text-ink hover:border-accent hover:text-accent transition-all flex items-center gap-1.5 whitespace-nowrap group-hover:border-ink-secondary"
                  >
                    Solve on LeetCode <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 border border-rule bg-surface-alt/50 flex items-center justify-between flex-wrap gap-4">
          <p className="text-caption text-ink-secondary font-mono">
            &ldquo;Not just volume — each problem is an opportunity to understand a pattern, optimize invariants, and eliminate edge cases.&rdquo;
          </p>
          <a
            href="https://leetcode.com/u/rajnandini15122006"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-label text-accent hover:underline flex items-center gap-1"
          >
            Inspect Full LeetCode Profile (1150+) ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
