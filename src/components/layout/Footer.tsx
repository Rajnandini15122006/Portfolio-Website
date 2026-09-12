export function Footer() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="content-wrapper py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-mono text-caption font-bold tracking-wider text-ink mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent" />
              RAJNANDINI PATIL
            </p>
            <p className="text-caption text-ink-secondary">
              Software Engineering · AI/ML Systems · Distributed Architectures
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/Rajnandini15122006"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label text-ink-secondary hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/rajnandini-patil-ba964a302"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label text-ink-secondary hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://leetcode.com/u/rajnandini15122006"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label text-ink-secondary hover:text-accent transition-colors"
            >
              LeetCode ↗
            </a>
            <a
              href="/Rajnandini_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label text-accent hover:underline flex items-center gap-1 font-semibold"
            >
              Resume (PDF) ↓
            </a>
            <a
              href="mailto:rajnandini15122006@gmail.com"
              className="font-mono text-label text-ink-secondary hover:text-ink transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-label text-ink-tertiary">
            © 2026 Rajnandini Patil · Engineered with Next.js, TypeScript &amp; Tailwind CSS
          </p>
          <span className="font-mono text-label text-ink-tertiary">
            Pune, India · +91 9511831350
          </span>
        </div>
      </div>
    </footer>
  );
}
