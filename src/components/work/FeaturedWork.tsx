import { Section } from '@/components/layout/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export function FeaturedWork() {
  return (
    <Section id="work" label="Selected Work">
      <div className="space-y-16 md:space-y-24">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
