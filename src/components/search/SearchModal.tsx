'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { search, searchSuggestions } from '@/lib/search';
import { SearchEntry } from '@/types';
import { getCategoryColor, getCategoryLabel } from '@/lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Fast indexing indicator + instant search execution
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const res = search(query);
      setResults(res);
      setSelectedIndex(0);
      setIsSearching(false);
    }, 45); // Micro 45ms indexing transition for instant fluid feel

    return () => clearTimeout(timer);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selected = resultsRef.current.children[selectedIndex] as HTMLElement;
      selected?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  const navigateToResult = useCallback(
    (result: SearchEntry) => {
      onClose();
      if (result.href.startsWith('/')) {
        window.location.href = result.href;
      } else {
        const el = document.querySelector(result.href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
      }
    },
    [results, selectedIndex, navigateToResult]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] md:pt-[14vh]"
      role="dialog"
      aria-label="Search portfolio"
      aria-modal="true"
    >
      {/* Backdrop with fade-in */}
      <div
        className="absolute inset-0 bg-ink/45 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Workbench Search Container with smooth entrance */}
      <div className="relative w-full max-w-2xl mx-4 bg-surface border border-rule shadow-2xl transition-all animate-fade-up">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-rule bg-surface-card">
          <svg
            className={`w-4 h-4 transition-colors ${
              isSearching ? 'text-accent animate-spin' : 'text-ink-tertiary'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, technologies, algorithms, papers..."
            className="flex-1 bg-transparent text-body font-sans text-ink outline-none placeholder:text-ink-tertiary text-base"
            aria-label="Search query"
            autoComplete="off"
          />

          {isSearching && (
            <span className="font-mono text-label text-accent uppercase tracking-wider text-[10px] animate-pulse">
              INDEXING...
            </span>
          )}

          <kbd className="font-mono text-label text-ink-tertiary border border-rule px-1.5 py-0.5 select-none text-[11px]">
            ESC
          </kbd>
        </div>

        {/* Results Stream */}
        <div
          ref={resultsRef}
          className="max-h-[55vh] overflow-y-auto divide-y divide-rule/50"
          role="listbox"
          aria-label="Search results"
        >
          {query && !isSearching && results.length === 0 && (
            <div className="px-6 py-10 text-center">
              <p className="text-body font-medium text-ink">No exact matches found</p>
              <p className="text-caption text-ink-tertiary mt-1">
                Try searching technical concepts like: {searchSuggestions.slice(0, 4).join(', ')}
              </p>
            </div>
          )}

          {results.map((result, i) => {
            const isSelected = i === selectedIndex;
            return (
              <button
                key={result.id}
                onClick={() => navigateToResult(result)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`w-full text-left px-5 py-3.5 flex items-start gap-4 transition-all duration-150 ${
                  isSelected
                    ? 'bg-surface-alt border-l-4 border-l-accent pl-4'
                    : 'hover:bg-surface-alt/60 border-l-4 border-l-transparent'
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <span className="font-mono text-label text-ink-tertiary mt-0.5 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-caption font-semibold truncate ${isSelected ? 'text-accent' : 'text-ink'}`}>
                      {result.title}
                    </p>
                  </div>
                  <p className="text-caption text-ink-secondary mt-0.5 line-clamp-1">
                    {result.description}
                  </p>
                </div>

                <span
                  className={`flex-shrink-0 font-mono text-label px-2 py-0.5 rounded-none border border-transparent ${getCategoryColor(
                    result.category
                  )}`}
                >
                  {getCategoryLabel(result.category)}
                </span>
              </button>
            );
          })}

          {!query && (
            <div className="px-5 py-6">
              <div className="flex items-center justify-between mb-3">
                <p className="section-label">Quick Indexed Keywords</p>
                <span className="font-mono text-label text-ink-tertiary">Fuzzy Indexed</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchSuggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="font-mono text-label text-ink-secondary hover:text-accent border border-rule px-2.5 py-1 hover:border-accent hover:bg-surface-card transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Technical Navigation Footer */}
        <div className="px-5 py-2.5 border-t border-rule bg-surface flex items-center justify-between text-ink-tertiary font-mono text-label text-[11px]">
          <div className="flex items-center gap-4">
            <span>
              <kbd className="border border-rule px-1 py-0.5 mr-1 bg-surface-card">↑↓</kbd> navigate
            </span>
            <span>
              <kbd className="border border-rule px-1 py-0.5 mr-1 bg-surface-card">↵</kbd> select
            </span>
            <span>
              <kbd className="border border-rule px-1 py-0.5 mr-1 bg-surface-card">esc</kbd> close
            </span>
          </div>
          {results.length > 0 && (
            <span className="text-ink-secondary">
              {results.length} results indexed
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
