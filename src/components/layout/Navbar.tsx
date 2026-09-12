'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'DSA', href: '#problem-solving' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-surface/90 backdrop-blur-md border-b border-rule shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="content-wrapper flex items-center justify-between">
          {/* Wordmark with micro-interaction */}
          <a
            href="#"
            className="font-mono text-caption font-bold tracking-wider text-ink hover:text-accent transition-colors flex items-center gap-2 group"
            aria-label="Rajnandini Patil - Home"
          >
            <span className="w-2 h-2 bg-ink group-hover:bg-accent transition-colors" />
            <span>RAJNANDINI PATIL</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-label text-ink-secondary hover:text-ink transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/Rajnandini_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label text-ink hover:text-accent border border-rule hover:border-accent px-3 py-1.5 transition-all duration-200 flex items-center gap-1.5 group"
            >
              <span>Resume</span>
              <span className="text-accent group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ink hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={cn(
                  'block h-px bg-current transition-transform duration-200',
                  isMobileMenuOpen && 'translate-y-[3.5px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-px bg-current transition-opacity duration-200',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-px bg-current transition-transform duration-200',
                  isMobileMenuOpen && '-translate-y-[3.5px] -rotate-45'
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-surface flex flex-col items-start justify-center px-8 animate-fade-in"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col gap-6 w-full max-w-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-display text-ink hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-rule">
              <a
                href="/Rajnandini_Patil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-caption uppercase text-accent font-semibold py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download Resume (PDF) ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
