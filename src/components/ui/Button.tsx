import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      'bg-ink text-surface hover:bg-ink/90 font-medium',
    secondary:
      'bg-transparent text-ink border border-ink hover:bg-ink hover:text-surface font-medium',
    ghost:
      'bg-transparent text-ink-secondary hover:text-ink font-medium',
  };

  const baseStyles = cn(
    'inline-flex items-center gap-2 px-5 py-2.5 text-caption tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent',
    variants[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseStyles}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}
