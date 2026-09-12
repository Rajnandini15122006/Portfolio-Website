import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Section({
  id,
  label,
  title,
  className,
  children,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-section', className)}
    >
      <div className={cn(!fullWidth && 'content-wrapper')}>
        {(label || title) && (
          <div className="mb-12 md:mb-16">
            {label && (
              <p className="section-label mb-3">{label}</p>
            )}
            {title && (
              <h2 className="text-heading text-ink">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
