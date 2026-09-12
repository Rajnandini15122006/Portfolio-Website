'use client';

import { Button } from '@/components/ui/Button';
import { HeroMetrics } from './HeroMetrics';
import { SearchBar } from '@/components/search/SearchBar';
import { GraphAnimation } from './GraphAnimation';

const identityTags = [
  { name: 'AI/ML & GNN', note: 'Graph Architectures & Multi-Agent Systems' },
  { name: 'Backend & Systems', note: 'FastAPI, Redis Inverted Indices, Docker' },
  { name: 'DSA Specialist', note: '1150+ Solved, 1550+ Contest Rating' },
  { name: 'Published Researcher', note: '3 Peer-Reviewed Papers (1 Scopus Indexed)' },
];

export function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Interactive Graph Animation Background */}
      <GraphAnimation />

      {/* Subtle structural corner indicators */}
      <div className="absolute top-24 right-8 md:right-16 hidden lg:block opacity-40 font-mono text-label text-ink-tertiary select-none z-10">
        <span className="text-accent">{'//'}</span> ENGINEERING WORKBENCH · V2026.09
      </div>

      <div className="content-wrapper py-12 md:py-20 relative z-10">
        {/* Availability / Status Pill */}
        <div className="hero-reveal-wrap mb-6">
          <div className="animate-mask-reveal-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-alt border border-rule text-caption font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-status-dot" />
              <span className="text-ink-secondary text-label">
                AVAILABLE FOR SOFTWARE ENGINEERING &amp; AI SYSTEMS ROLES
              </span>
              <span className="text-ink-tertiary">·</span>
              <span className="text-ink-tertiary text-label">PUNE, INDIA</span>
            </div>
          </div>
        </div>

        {/* Large Typography Name with Masked Reveal & Micro-Interaction */}
        <div className="hero-reveal-wrap mb-4 md:mb-6">
          <h1 className="animate-mask-reveal-2 text-display-xl tracking-tight text-ink max-w-4xl">
            <span className="hero-name-link cursor-pointer">
              Rajnandini Patil
            </span>
            <span className="text-accent font-serif font-normal">.</span>
          </h1>
        </div>

        {/* Engineering Headline with Masked Reveal */}
        <div className="hero-reveal-wrap mb-3">
          <p className="animate-mask-reveal-3 text-heading text-ink max-w-3xl font-medium leading-tight">
            Software engineer building intelligent distributed systems, graph neural networks, and algorithmic engines.
          </p>
        </div>

        {/* Supporting Description with Masked Reveal */}
        <div className="hero-reveal-wrap mb-8">
          <p className="animate-mask-reveal-4 text-body-lg text-ink-secondary max-w-2xl leading-relaxed">
            Pre-final year B.Tech student in Artificial Intelligence &amp; Data Science at VIT Pune (CGPA 9.65). 
            Focused on end-to-end technical execution: from low-latency Redis-indexed search engines to multi-agent ML automation and Scopus-indexed research.
          </p>
        </div>

        {/* Interactive Capability Badges with Expanding Line Hover */}
        <div className="hero-reveal-wrap mb-10">
          <div className="animate-mask-reveal-5 flex flex-wrap gap-2.5">
            {identityTags.map((tag) => (
              <div
                key={tag.name}
                className="tech-tag-item border border-rule bg-surface/90 backdrop-blur-sm px-3 py-1.5 cursor-default group"
              >
                <span className="font-mono text-label text-ink font-semibold tracking-wider">
                  {tag.name}
                </span>
                <span className="text-ink-tertiary mx-1.5 font-mono text-label hidden sm:inline">|</span>
                <span className="font-sans text-caption text-ink-secondary hidden sm:inline group-hover:text-ink">
                  {tag.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTAs & Socials (Including Resume Direct Download) */}
        <div className="hero-reveal-wrap mb-12 md:mb-16">
          <div className="animate-mask-reveal-6 flex flex-wrap items-center gap-4">
            <Button href="#work" variant="primary">
              Explore Systems Work ↓
            </Button>
            <a
              href="/Rajnandini_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-caption tracking-wide uppercase transition-all duration-200 border border-ink bg-transparent text-ink hover:bg-ink hover:text-surface font-medium group"
            >
              <span>Download Resume</span>
              <span className="font-mono text-accent group-hover:text-surface transition-colors">↓</span>
            </a>
            <Button href="#research" variant="ghost">
              Published Research (3) →
            </Button>
            <div className="flex items-center gap-4 ml-0 sm:ml-2">
              <a
                href="https://github.com/Rajnandini15122006"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label text-ink-tertiary hover:text-accent transition-colors flex items-center gap-1"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/rajnandini-patil-ba964a302"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label text-ink-tertiary hover:text-accent transition-colors flex items-center gap-1"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://leetcode.com/u/rajnandini15122006"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label text-ink-tertiary hover:text-accent transition-colors flex items-center gap-1"
              >
                LeetCode ↗
              </a>
            </div>
          </div>
        </div>

        {/* Signature Interactive Search */}
        <div className="mb-12 md:mb-16">
          <SearchBar />
        </div>

        {/* Live Metrics Grid */}
        <div>
          <HeroMetrics />
        </div>
      </div>
    </section>
  );
}
