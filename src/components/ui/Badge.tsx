interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-surface-alt text-ink-secondary',
    accent: 'bg-accent/10 text-accent',
    muted: 'bg-transparent text-ink-tertiary border border-rule',
  };

  return (
    <span
      className={`inline-block font-mono text-label px-2.5 py-1 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
