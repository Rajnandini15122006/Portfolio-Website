import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience" label="02 — Professional Experience" title="Where I've Built &amp; Shipped">
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className="border border-rule p-6 md:p-8 bg-surface hover:border-accent/80 hover:shadow-sm transition-all duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              {/* Left: Date + Company + Badges */}
              <div className="md:col-span-4">
                <p className="font-mono text-caption font-semibold text-accent">
                  {exp.company}
                </p>
                <h3 className="text-body font-bold text-ink mt-0.5">
                  {exp.role}
                </h3>
                <p className="font-mono text-label text-ink-tertiary mt-2">
                  {exp.dateRange}
                </p>
                {exp.type && (
                  <span className="inline-block mt-2 font-mono text-label text-ink-secondary bg-surface-alt px-2 py-0.5 border border-rule">
                    {exp.type}
                  </span>
                )}
              </div>

              {/* Right: Technical Deliverables & Stack */}
              <div className="md:col-span-8">
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-caption text-ink-secondary pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-4 border-t border-rule/60">
                  <span className="font-mono text-label text-ink-tertiary mr-2">Technologies:</span>
                  {exp.stack.map((tech) => (
                    <Badge key={tech} variant="default">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
