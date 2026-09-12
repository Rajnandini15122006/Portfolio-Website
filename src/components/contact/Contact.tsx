import { Section } from '@/components/layout/Section';

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-2xl border border-rule p-8 md:p-12 bg-surface hover:border-accent transition-colors">
        <p className="section-label mb-3">07 — Contact</p>
        <h2 className="text-display text-ink mb-4 font-bold tracking-tight">
          Working on something technically difficult?
        </h2>
        <p className="text-body-lg text-ink-secondary mb-4 leading-relaxed">
          I&apos;m actively seeking Software Engineering and AI Systems roles. Always open to discussing distributed architecture, graph neural networks, or technical challenges.
        </p>
        <p className="font-mono text-caption text-ink-tertiary mb-8">
          Pune, India · +91 9511831350 · rajnandini15122006@gmail.com
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:rajnandini15122006@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-surface font-mono text-label uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Email Directly →
          </a>
          <a
            href="/Rajnandini_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-rule font-mono text-label uppercase tracking-wider text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Download Resume (PDF) ↓
          </a>
          <a
            href="https://github.com/Rajnandini15122006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-label text-ink-tertiary hover:text-accent transition-colors ml-2"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/rajnandini-patil-ba964a302"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-label text-ink-tertiary hover:text-accent transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
