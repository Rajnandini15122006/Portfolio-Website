'use client';

import { useState } from 'react';

interface TraceStep {
  stage: string;
  subtext: string;
  timing: string;
  output: string | string[];
}

const PRESET_QUERIES: Record<string, { docs: { id: number; title: string; score: number; match: string }[]; steps: TraceStep[] }> = {
  'distributed index': {
    docs: [
      { id: 104, title: 'Inverted Index Sharding & Memory Tiering in Redis', score: 0.942, match: 'TF-IDF: 0.942 | Matched: "distributed", "index"' },
      { id: 42, title: 'Distributed Crawling Protocols & Rate Limiting', score: 0.817, match: 'TF-IDF: 0.817 | Matched: "distributed"' },
      { id: 89, title: 'Sub-millisecond Document Retrieval with FastAPI', score: 0.705, match: 'TF-IDF: 0.705 | Matched: "index"' },
    ],
    steps: [
      {
        stage: '01. TOKENIZATION & STEMMING',
        subtext: 'Porter Stemmer + Stopword Filtering',
        timing: '0.08ms',
        output: '["distribut", "index"]',
      },
      {
        stage: '02. REDIS INVERTED INDEX LOOKUP',
        subtext: 'Concurrent in-memory key hash lookup (O(1))',
        timing: '0.34ms',
        output: 'HGETALL term:distribut -> [Doc #104, #42] | term:index -> [Doc #104, #89]',
      },
      {
        stage: '03. INTERSECTION & TF-IDF SCORING',
        subtext: 'Compute term frequency weight * inverse document frequency',
        timing: '0.21ms',
        output: 'Doc #104: 0.942 | Doc #42: 0.817 | Doc #89: 0.705',
      },
      {
        stage: '04. FASTAPI PAYLOAD SERIALIZATION',
        subtext: 'Pydantic schema validation & ranking sort',
        timing: '0.12ms',
        output: 'Payload: 3 items (Total latency: 0.75ms)',
      },
    ],
  },
  'python crawler': {
    docs: [
      { id: 42, title: 'Multi-threaded Asynchronous Web Crawler Design', score: 0.961, match: 'TF-IDF: 0.961 | Matched: "python", "crawler"' },
      { id: 18, title: 'Robots.txt Parser & Concurrent Fetch Pool', score: 0.784, match: 'TF-IDF: 0.784 | Matched: "crawler"' },
    ],
    steps: [
      {
        stage: '01. TOKENIZATION & STEMMING',
        subtext: 'Normalized lowercasing + Lemmatizer',
        timing: '0.06ms',
        output: '["python", "crawler"]',
      },
      {
        stage: '02. REDIS INVERTED INDEX LOOKUP',
        subtext: 'Hash slice for term sets',
        timing: '0.29ms',
        output: 'HGETALL term:python -> [Doc #42, #18] | term:crawler -> [Doc #42, #18]',
      },
      {
        stage: '03. INTERSECTION & TF-IDF SCORING',
        subtext: 'Cosine similarity ranking',
        timing: '0.18ms',
        output: 'Doc #42: 0.961 | Doc #18: 0.784',
      },
      {
        stage: '04. FASTAPI PAYLOAD SERIALIZATION',
        subtext: 'JSON return stream',
        timing: '0.10ms',
        output: 'Payload: 2 items (Total latency: 0.63ms)',
      },
    ],
  },
  'fastapi redis': {
    docs: [
      { id: 104, title: 'Inverted Index Sharding & Memory Tiering in Redis', score: 0.912, match: 'TF-IDF: 0.912 | Matched: "redis"' },
      { id: 89, title: 'Sub-millisecond Document Retrieval with FastAPI', score: 0.895, match: 'TF-IDF: 0.895 | Matched: "fastapi"' },
    ],
    steps: [
      {
        stage: '01. TOKENIZATION & STEMMING',
        subtext: 'Tokenizer pipeline',
        timing: '0.05ms',
        output: '["fastapi", "redi"]',
      },
      {
        stage: '02. REDIS INVERTED INDEX LOOKUP',
        subtext: 'Direct memory pointer scan',
        timing: '0.27ms',
        output: 'term:fastapi -> [Doc #89] | term:redi -> [Doc #104]',
      },
      {
        stage: '03. INTERSECTION & TF-IDF SCORING',
        subtext: 'Score distribution curve',
        timing: '0.15ms',
        output: 'Doc #104: 0.912 | Doc #89: 0.895',
      },
      {
        stage: '04. FASTAPI PAYLOAD SERIALIZATION',
        subtext: 'Transport layer response',
        timing: '0.09ms',
        output: 'Payload: 2 items (Total latency: 0.56ms)',
      },
    ],
  },
};

export function SearchPipelineSimulator() {
  const [activeQueryKey, setActiveQueryKey] = useState<string>('distributed index');
  const [executing, setExecuting] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(3);

  const queryData = PRESET_QUERIES[activeQueryKey] || PRESET_QUERIES['distributed index'];

  const runSimulation = (queryKey: string) => {
    setActiveQueryKey(queryKey);
    setExecuting(true);
    setCurrentStepIndex(0);

    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setExecuting(false);
          return 3;
        }
        return prev + 1;
      });
    }, 180);
  };

  return (
    <div className="border border-rule bg-surface p-6 md:p-8 mt-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-rule">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="font-mono text-label text-accent font-bold uppercase tracking-wider">
              Interactive Execution Inspector
            </p>
          </div>
          <h3 className="text-body-lg font-bold text-ink mt-1">
            Simulate the Inverted Index &amp; TF-IDF Pipeline
          </h3>
        </div>
        <span className="font-mono text-label text-ink-tertiary self-start sm:self-auto bg-surface-alt px-2.5 py-1 border border-rule">
          Sub-millisecond Latency Simulator
        </span>
      </div>

      {/* Preset Query Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="font-mono text-label text-ink-secondary mr-2">Query Trigger:</span>
        {Object.keys(PRESET_QUERIES).map((qKey) => (
          <button
            key={qKey}
            type="button"
            onClick={() => runSimulation(qKey)}
            disabled={executing}
            className={`font-mono text-caption px-3 py-1.5 border transition-all ${
              activeQueryKey === qKey
                ? 'border-accent bg-accent text-white font-semibold'
                : 'border-rule bg-surface-alt text-ink-secondary hover:border-ink hover:text-ink'
            }`}
          >
            &quot;{qKey}&quot;
          </button>
        ))}
      </div>

      {/* Pipeline Stage Execution Walkthrough */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Execution Stages */}
        <div className="lg:col-span-7 space-y-3">
          <p className="font-mono text-label text-ink-tertiary uppercase mb-2">
            Internal Pipeline Stages
          </p>
          {queryData.steps.map((step, idx) => {
            const isCompleted = idx <= currentStepIndex;
            const isCurrent = idx === currentStepIndex && executing;

            return (
              <div
                key={step.stage}
                className={`border p-3.5 transition-all duration-200 ${
                  isCurrent
                    ? 'border-accent bg-surface-alt shadow-sm'
                    : isCompleted
                    ? 'border-rule bg-surface'
                    : 'border-rule/40 bg-surface/40 opacity-40'
                }`}
              >
                <div className="flex items-center justify-between text-caption font-mono">
                  <span className={`font-semibold ${isCompleted ? 'text-ink' : 'text-ink-tertiary'}`}>
                    {step.stage}
                  </span>
                  <span className="text-label text-accent font-semibold">{step.timing}</span>
                </div>
                <p className="text-caption text-ink-secondary font-sans mt-0.5">{step.subtext}</p>
                <div className="mt-2 font-mono text-label bg-surface-card border border-rule/60 p-2 text-ink-secondary overflow-x-auto">
                  {step.output}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Ranked Results Stream */}
        <div className="lg:col-span-5 border border-rule p-5 bg-surface-alt/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-rule/60 pb-2">
              <p className="font-mono text-label text-ink-tertiary uppercase">
                Ranked Document Matches
              </p>
              <span className="font-mono text-label text-accent font-semibold">
                TF-IDF Sorted
              </span>
            </div>

            <div className="space-y-3">
              {queryData.docs.map((doc, i) => (
                <div
                  key={doc.id}
                  className={`p-3.5 border bg-surface transition-all duration-300 ${
                    currentStepIndex >= 2
                      ? 'border-rule opacity-100 translate-y-0'
                      : 'border-transparent opacity-30 translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-label text-ink-tertiary">
                      DocID #{doc.id}
                    </span>
                    <span className="font-mono text-label text-accent bg-accent/10 px-1.5 py-0.5">
                      Rank #{i + 1}
                    </span>
                  </div>
                  <p className="text-caption font-semibold text-ink leading-snug">
                    {doc.title}
                  </p>
                  <p className="font-mono text-[11px] text-ink-secondary mt-1">
                    {doc.match}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-rule/60 font-mono text-label text-ink-tertiary flex items-center justify-between">
            <span>Perceived Latency: &lt; 1.0ms</span>
            <span className="text-accent font-semibold">Redis In-Memory</span>
          </div>
        </div>
      </div>
    </div>
  );
}
