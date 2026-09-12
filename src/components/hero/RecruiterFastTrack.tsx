'use client';

import { useState } from 'react';

export function RecruiterFastTrack() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="content-wrapper mb-10">
      <div className="border-2 border-accent/40 bg-surface-card p-5 md:p-6 transition-all duration-300 hover:border-accent">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
            <div>
              <p className="font-mono text-label text-accent font-bold uppercase tracking-wider">
                Recruiter Fast-Track (30-Second Executive Summary)
              </p>
              <h3 className="text-body font-bold text-ink">
                Rajnandini Patil · B.Tech AI &amp; DS (VIT Pune, 2028) · CGPA 9.65
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <a
              href="/Rajnandini_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label px-3.5 py-1.5 bg-ink text-surface hover:bg-accent transition-colors font-medium flex items-center gap-1"
            >
              Resume PDF ↓
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="font-mono text-label px-3 py-1.5 border border-rule hover:border-ink transition-colors text-ink"
            >
              {isOpen ? 'Collapse Overview ↑' : 'Expand Quick Intel ↓'}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-6 pt-5 border-t border-rule/70 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {/* Core Capability 1 */}
            <div className="border-l-2 border-accent pl-4">
              <p className="font-mono text-label text-accent font-semibold uppercase">01. Algorithmic Rigor</p>
              <p className="text-caption text-ink font-bold mt-1">1150+ DSA Solved · 1550+ Contest Rating</p>
              <p className="text-caption text-ink-secondary mt-1 leading-relaxed">
                3★ CodeChef contestant with verified mastery across complex Graph algorithms (Tarjan bridges), Dynamic Programming, and Tree diameter invariants.
              </p>
            </div>

            {/* Core Capability 2 */}
            <div className="border-l-2 border-accent pl-4">
              <p className="font-mono text-label text-accent font-semibold uppercase">02. Systems &amp; Backend</p>
              <p className="text-caption text-ink font-bold mt-1">FastAPI · Redis Inverted Index · Docker</p>
              <p className="text-caption text-ink-secondary mt-1 leading-relaxed">
                Shipped an end-to-end distributed search engine featuring sub-millisecond in-memory inverted indices, multi-threaded crawlers, and debounced real-time React UI.
              </p>
            </div>

            {/* Core Capability 3 */}
            <div className="border-l-2 border-accent pl-4">
              <p className="font-mono text-label text-accent font-semibold uppercase">03. Machine Learning &amp; Research</p>
              <p className="text-caption text-ink font-bold mt-1">3 Published Papers · 1 Scopus Indexed</p>
              <p className="text-caption text-ink-secondary mt-1 leading-relaxed">
                Published autonomous multi-agent ML research (Scopus EID: 105047264702) &amp; built GNN fraud detection on the Elliptic Bitcoin dataset (200,000+ nodes).
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
