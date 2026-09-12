import { Section } from '@/components/layout/Section';
import { papers } from '@/data/research';

export function Research() {
  return (
    <Section id="research" label="03 — Academic Research" title="Published Research Papers (3)">
      <div className="space-y-6">
        {papers.map((paper, i) => (
          <article
            key={paper.id}
            className="border border-rule p-6 md:p-8 bg-surface hover:border-accent/80 hover:shadow-sm transition-all duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              {/* Left: Index + Conference / Indexing Metadata */}
              <div className="md:col-span-4">
                <span className="font-mono text-display text-rule/80 font-bold select-none block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-mono text-caption font-semibold text-accent mt-2">
                  {paper.conference}
                </p>
                <p className="font-mono text-label text-ink-tertiary mt-1">
                  {paper.location} · {paper.year}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-alt border border-rule font-mono text-label text-ink-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  PEER-REVIEWED &amp; ACCEPTED
                </div>
              </div>

              {/* Right: Paper Content Breakdown */}
              <div className="md:col-span-8">
                <h3 className="text-subheading font-bold text-ink mb-4 leading-snug">
                  {paper.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border-l-2 border-rule pl-3 py-1">
                    <p className="font-mono text-label text-accent uppercase font-semibold">Research Question</p>
                    <p className="text-caption text-ink-secondary mt-1 leading-relaxed">
                      {paper.question}
                    </p>
                  </div>

                  <div className="border-l-2 border-rule pl-3 py-1">
                    <p className="font-mono text-label text-accent uppercase font-semibold">Methodology</p>
                    <p className="text-caption text-ink-secondary mt-1 leading-relaxed">
                      {paper.method}
                    </p>
                  </div>

                  <div className="border-l-2 border-rule pl-3 py-1">
                    <p className="font-mono text-label text-accent uppercase font-semibold">Key Findings</p>
                    <p className="text-caption text-ink-secondary mt-1 leading-relaxed">
                      {paper.result}
                    </p>
                  </div>

                  <div className="border-l-2 border-rule pl-3 py-1">
                    <p className="font-mono text-label text-accent uppercase font-semibold">Primary Contribution</p>
                    <p className="text-caption text-ink font-medium mt-1 leading-relaxed">
                      {paper.contribution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
