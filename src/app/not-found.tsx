import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="content-wrapper text-center py-section">
          <span className="font-mono text-[clamp(4rem,10vw,8rem)] font-bold text-rule/60 leading-none select-none block mb-4">
            404
          </span>
          <h1 className="text-heading text-ink mb-4">Page not found</h1>
          <p className="text-body text-ink-secondary mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-label text-ink hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span> Back to home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
