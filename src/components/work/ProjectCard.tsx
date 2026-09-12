import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-t border-rule pt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        {/* Left: Number + Meta */}
        <div className="md:col-span-4">
          <span className="font-mono text-display text-rule font-bold">
            {project.number}
          </span>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="default">{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:col-span-8">
          <h3 className="text-subheading text-ink mb-3">
            {project.title}
          </h3>
          <p className="text-body text-ink-secondary mb-4 max-w-prose">
            {project.problem}
          </p>
          <p className="text-body-lg text-ink-secondary mb-6 max-w-prose leading-relaxed">
            {project.tagline}
          </p>

          {/* Key decision teaser */}
          {project.decisions[0] && (
            <div className="border-l-2 border-accent pl-4 mb-6">
              <p className="font-mono text-label text-accent mb-1">Key Question</p>
              <p className="text-caption text-ink-secondary">
                {project.decisions[0].question}
              </p>
            </div>
          )}

          <a
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-mono text-label text-ink hover:text-accent transition-colors group/link"
          >
            Read Case Study
            <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
