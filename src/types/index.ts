// ─── Project Types ───────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  stack: string[];
  problem: string;
  architecture: ArchitectureStep[];
  decisions: TechnicalDecision[];
  tradeoffs: string[];
  result: string;
  learnings: string[];
  github?: string;
  liveDemo?: string;
}

export interface ArchitectureStep {
  label: string;
  description?: string;
}

export interface TechnicalDecision {
  question: string;
  answer: string;
  alternatives?: string;
}

// ─── Experience Types ────────────────────────────────────────────────────────

export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  type?: string;
  bullets: string[];
  stack: string[];
}

// ─── Research Types ──────────────────────────────────────────────────────────

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  location: string;
  year: number;
  question: string;
  method: string;
  result: string;
  contribution: string;
  paperLink?: string;
}

// ─── DSA Types ───────────────────────────────────────────────────────────────

export interface DSAStats {
  leetcodeProblems: string;
  contestRating: string;
  platforms: PlatformStat[];
}

export interface PlatformStat {
  name: string;
  stat: string;
  link?: string;
}

export interface RepresentativeProblem {
  name: string;
  category: string;
  whyInteresting: string;
  approach: string;
  complexity: string;
  link?: string;
}

// ─── Skills Types ────────────────────────────────────────────────────────────

export interface SkillCategory {
  name: string;
  items: string[];
}

// ─── Achievement Types ───────────────────────────────────────────────────────

export interface Achievement {
  title: string;
  detail: string;
  type: 'research' | 'open-source' | 'competition' | 'award';
}

// ─── Search Types ────────────────────────────────────────────────────────────

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  category: 'project' | 'experience' | 'research' | 'skill' | 'dsa' | 'achievement';
  tags: string[];
  href: string;
}
