'use client';

import { useState } from 'react';
import { SearchModal } from './SearchModal';
import { searchSuggestions } from '@/lib/search';

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-w-xl">
        <p className="section-label mb-3">Search My Work</p>
        <button
          data-search-trigger
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 border border-rule bg-surface hover:border-ink-tertiary transition-colors text-left group"
          aria-label="Open search — press / to activate"
        >
          <svg
            className="w-4 h-4 text-ink-tertiary flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span className="text-body text-ink-tertiary">
            Search projects, technologies, ideas...
          </span>
          <kbd className="hidden sm:inline-flex ml-auto font-mono text-label text-ink-tertiary border border-rule px-1.5 py-0.5">
            /
          </kbd>
        </button>
        <div className="flex flex-wrap gap-2 mt-2">
          {searchSuggestions.slice(0, 5).map((s) => (
            <button
              key={s}
              onClick={() => setIsOpen(true)}
              className="font-mono text-label text-ink-tertiary hover:text-accent transition-colors"
            >
              Try {s}
            </button>
          ))}
        </div>
      </div>

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
