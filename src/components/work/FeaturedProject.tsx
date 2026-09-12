'use client';

import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Diagram } from '@/components/ui/Diagram';
import { Section } from '@/components/layout/Section';
import { SearchPipelineSimulator } from './SearchPipelineSimulator';
import { GNNTransactionVisualizer } from './GNNTransactionVisualizer';

export function FeaturedProject() {
  const project = projects[0]; // Distributed Search Engine

  return (
    <Section id="work" label="01 — Featured Architecture" className="pb-0">
      {/* Project Header with Hover Shift */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24 group/proj">
        {/* Left — Number + Stack */}
        <div className="md:col-span-4 lg:col-span-3">
          <span className="block font-mono text-[clamp(4rem,8vw,7rem)] font-bold text-rule/60 leading-none select-none transition-all duration-300 group-hover/proj:text-accent/30 group-hover/proj:translate-x-1">
            {project.number}
          </span>
          <div className="flex flex-wrap gap-1.5 mt-6">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Right — Title + Tagline */}
        <div className="md:col-span-8 lg:col-span-9">
          <h2 className="text-display text-ink mb-4 transition-transform duration-300 group-hover/proj:translate-x-1">
            {project.title}
          </h2>
          <p className="text-body-lg text-ink-secondary max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* The Problem */}
      <div className="border-t border-rule pt-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="font-mono text-label text-accent font-semibold">01 — The Problem</p>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <p className="text-body text-ink-secondary max-w-prose leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>
      </div>

      {/* The System — Interactive Architecture Flow */}
      <div className="border-t border-rule pt-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="font-mono text-label text-accent font-semibold">02 — The System</p>
            <p className="text-caption text-ink-tertiary mt-2 max-w-[220px] leading-relaxed">
              End-to-end multi-threaded crawling to real-time ranked query execution.
            </p>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <Diagram steps={project.architecture} title="End-to-End Pipeline Architecture" />
            <SearchPipelineSimulator />
          </div>
        </div>
      </div>

      {/* Key Decisions */}
      <div className="border-t border-rule pt-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="font-mono text-label text-accent font-semibold">03 — Key Decisions</p>
          </div>
          <div className="md:col-span-8 lg:col-span-9 space-y-6">
            {project.decisions.map((decision, i) => (
              <div
                key={i}
                className="border-l-2 border-rule pl-5 hover:border-accent hover:bg-surface-alt/40 p-3 transition-all duration-200"
              >
                <p className="text-body font-semibold text-ink mb-1.5">
                  {decision.question}
                </p>
                <p className="text-caption text-ink-secondary leading-relaxed mb-2">
                  {decision.answer}
                </p>
                {decision.alternatives && (
                  <p className="font-mono text-label text-ink-tertiary">
                    Alternatives considered: {decision.alternatives}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trade-offs */}
      <div className="border-t border-rule pt-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="font-mono text-label text-accent font-semibold">04 — Trade-offs</p>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <ul className="space-y-3">
              {project.tradeoffs.map((tradeoff, i) => (
                <li
                  key={i}
                  className="text-caption text-ink-secondary pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent leading-relaxed"
                >
                  {tradeoff}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* What I Learned */}
      <div className="border-t border-rule pt-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="font-mono text-label text-accent font-semibold">05 — What I Learned</p>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <ul className="space-y-3">
              {project.learnings.map((learning, i) => (
                <li
                  key={i}
                  className="text-caption text-ink-secondary pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-accent font-medium leading-relaxed"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="border-t border-rule pt-8 pb-section">
        <div className="flex flex-wrap gap-6 items-center">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-label text-ink hover:text-accent transition-colors"
            >
              View Repository on GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          <a
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-mono text-label text-accent hover:underline"
          >
            Standalone Architecture Spec Page →
          </a>
        </div>
      </div>

      {/* More Production Projects */}
      <div className="border-t border-rule pt-16 md:pt-24">
        <div className="flex items-center justify-between mb-10">
          <p className="section-label">More Projects</p>
          <span className="font-mono text-label text-ink-tertiary">Selected Implementations</span>
        </div>
        <div className="space-y-8">
          {projects.slice(1).map((proj) => (
            <article
              key={proj.slug}
              className="border border-rule p-6 md:p-8 bg-surface hover:border-accent hover:shadow-sm transition-all duration-300 group/item"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-3">
                  <span className="font-mono text-display text-rule/70 font-bold group-hover/item:text-accent/40 group-hover/item:translate-x-1 transition-all">
                    {proj.number}
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.stack.slice(0, 4).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-subheading font-bold text-ink mb-2 group-hover/item:text-accent transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-body text-ink-secondary max-w-prose mb-4 leading-relaxed">
                    {proj.tagline}
                  </p>

                  {proj.decisions[0] && (
                    <div className="border-l-2 border-rule pl-4 mb-5 group-hover/item:border-accent transition-colors">
                      <p className="font-mono text-label text-accent mb-1 font-semibold">Key Architectural Decision</p>
                      <p className="text-caption text-ink-secondary">
                        {proj.decisions[0].question}
                      </p>
                    </div>
                  )}

                  <a
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-label text-ink hover:text-accent transition-colors group/link font-semibold"
                  >
                    Read Technical Case Study
                    <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">→</span>
                  </a>

                  {proj.slug === 'aml-shield' && (
                    <div className="mt-8">
                      <GNNTransactionVisualizer />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
