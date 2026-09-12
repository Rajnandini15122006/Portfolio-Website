export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    project: 'bg-accent/10 text-accent',
    experience: 'bg-blue-50 text-blue-700',
    research: 'bg-emerald-50 text-emerald-700',
    skill: 'bg-violet-50 text-violet-700',
    dsa: 'bg-amber-50 text-amber-700',
    achievement: 'bg-rose-50 text-rose-700',
  };
  return colors[category] || 'bg-gray-50 text-gray-700';
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    project: 'Project',
    experience: 'Experience',
    research: 'Research',
    skill: 'Technology',
    dsa: 'Problem Solving',
    achievement: 'Achievement',
  };
  return labels[category] || category;
}
