import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Diagram } from '@/components/ui/Diagram';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchPipelineSimulator } from '@/components/work/SearchPipelineSimulator';
import { GNNTransactionVisualizer } from '@/components/work/GNNTransactionVisualizer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Rajnandini Patil`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Rajnandini Patil`,
      description: project.tagline,
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-section">
        {/* Header */}
        <div className="content-wrapper mb-16 md:mb-24">
          <a
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-label text-ink-tertiary hover:text-ink transition-colors mb-8"
          >
            <span aria-hidden="true">←</span> Back to work
          </a>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <span className="block font-mono text-[clamp(4rem,8vw,7rem)] font-bold text-rule/60 leading-none select-none">
                {project.number}
              </span>
              <div className="flex flex-wrap gap-1.5 mt-6">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <h1 className="text-display text-ink mb-4">{project.title}</h1>
              <p className="text-body-lg text-ink-secondary max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* 01 — The Problem */}
        <div className="content-wrapper border-t border-rule pt-10 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <p className="font-mono text-label text-accent">01 — The Problem</p>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <p className="text-body text-ink-secondary max-w-prose leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>
        </div>

        {/* 02 — The System */}
        <div className="content-wrapper border-t border-rule pt-10 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <p className="font-mono text-label text-accent">02 — The System</p>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <Diagram steps={project.architecture} title="Architecture" />
              {project.slug === 'distributed-search-engine' && <SearchPipelineSimulator />}
              {project.slug === 'aml-shield' && <GNNTransactionVisualizer />}
            </div>
          </div>
        </div>

        {/* 03 — Key Decisions */}
        <div className="content-wrapper border-t border-rule pt-10 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <p className="font-mono text-label text-accent">03 — Key Decisions</p>
            </div>
            <div className="md:col-span-8 lg:col-span-9 space-y-8">
              {project.decisions.map((decision, i) => (
                <div key={i} className="border-l-2 border-rule pl-5 hover:border-accent transition-colors">
                  <p className="text-body font-medium text-ink mb-2">
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

        {/* 04 — Trade-offs */}
        <div className="content-wrapper border-t border-rule pt-10 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <p className="font-mono text-label text-accent">04 — Trade-offs</p>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <ul className="space-y-3">
                {project.tradeoffs.map((tradeoff, i) => (
                  <li
                    key={i}
                    className="text-caption text-ink-secondary pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-ink-tertiary leading-relaxed"
                  >
                    {tradeoff}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 05 — What I Learned */}
        <div className="content-wrapper border-t border-rule pt-10 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <p className="font-mono text-label text-accent">05 — What I Learned</p>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <ul className="space-y-3">
                {project.learnings.map((learning, i) => (
                  <li
                    key={i}
                    className="text-caption text-ink-secondary pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-accent leading-relaxed"
                  >
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="content-wrapper border-t border-rule pt-8">
          <div className="flex flex-wrap gap-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-label text-ink hover:text-accent transition-colors"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-label text-ink hover:text-accent transition-colors"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
            <a
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-label text-ink-tertiary hover:text-ink transition-colors"
            >
              ← Back to all work
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
