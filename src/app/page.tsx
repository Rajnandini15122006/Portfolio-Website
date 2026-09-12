'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { RecruiterFastTrack } from '@/components/hero/RecruiterFastTrack';
import { FeaturedProject } from '@/components/work/FeaturedProject';
import { Experience } from '@/components/experience/Experience';
import { Research } from '@/components/research/Research';
import { ProblemSolving } from '@/components/dsa/ProblemSolving';
import { Skills } from '@/components/skills/Skills';
import { About } from '@/components/about/About';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  // Global "/" keyboard shortcut for search
  useEffect(() => {
    const handleSearchShortcut = () => {
      const searchButton = document.querySelector('[data-search-trigger]') as HTMLButtonElement;
      searchButton?.click();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        handleSearchShortcut();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // IntersectionObserver for staggered section entrance and horizontal line expansion
  // Using rootMargin to reveal items 80px before they reach the viewport so they are already visible when the user scrolls to them
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-on-scroll, .reveal-rule');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: '120px 0px 50px 0px',
      }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecruiterFastTrack />

        <div className="content-wrapper">
          <hr className="border-rule reveal-rule" />
        </div>

        {/* Work is immediately rendered so clicking "Explore Work" or scrolling never delays */}
        <FeaturedProject />

        <div className="content-wrapper">
          <hr className="border-rule reveal-rule" />
        </div>

        <div className="reveal-on-scroll">
          <Experience />
        </div>

        <div className="content-wrapper">
          <hr className="border-rule reveal-rule" />
        </div>

        <div className="reveal-on-scroll">
          <Research />
        </div>

        <div className="content-wrapper">
          <hr className="border-rule reveal-rule" />
        </div>

        <div className="reveal-on-scroll">
          <ProblemSolving />
        </div>

        <div className="content-wrapper">
          <hr className="border-rule reveal-rule" />
        </div>

        <div className="reveal-on-scroll">
          <Skills />
        </div>

        <div className="content-wrapper">
          <hr className="border-rule reveal-rule" />
        </div>

        <div className="reveal-on-scroll">
          <About />
        </div>

        <div className="content-wrapper">
          <hr className="border-rule reveal-rule" />
        </div>

        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
