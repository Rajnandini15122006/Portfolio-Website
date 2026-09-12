import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { achievements } from '@/data/achievements';

export function About() {
  return (
    <Section id="about" label="06 — Engineering Identity" title="About &amp; Principles">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Bio & Practical Engineering Learnings */}
        <div className="md:col-span-7">
          <h2 className="text-subheading font-bold text-ink mb-6">
            Who is Rajnandini?
          </h2>
          <div className="space-y-4 max-w-prose">
            <p className="text-body text-ink-secondary leading-relaxed">
              I&apos;m a pre-final year AI &amp; Data Science student at VIT Pune (CGPA 9.65) dedicated to understanding how complex systems function from first principles. Rather than simply orchestrating black-box libraries, I build the core mechanisms: from low-latency Redis inverted indices and multi-threaded crawlers to graph neural networks and cooperative multi-agent workflows.
            </p>
            <p className="text-body text-ink-secondary leading-relaxed">
              My technical work centers on backend systems, AI/ML engineering, and algorithmic problem-solving (1150+ LeetCode problems solved). I prioritize architectural intentionality — selecting optimal data structures, weighing real engineering trade-offs, and building software that scales reliably under production constraints.
            </p>
          </div>

          {/* Concrete Engineering Lessons from Built Systems */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-accent" />
              <h3 className="section-label text-ink">What I&apos;ve Learned Building Production Systems</h3>
            </div>
            <div className="space-y-4">
              <div className="border border-rule p-5 bg-surface hover:border-accent transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-mono text-caption font-bold text-ink">Search &amp; Storage Architecture</p>
                  <span className="font-mono text-label text-accent">Distributed Search Engine</span>
                </div>
                <p className="text-caption text-ink-secondary leading-relaxed">
                  Inverted index lookups demand memory-tier latency. Separating transient index reads in Redis from persistent document stores in PostgreSQL, while enforcing client-side debouncing, reduces downstream server workload by 70–80%.
                </p>
              </div>

              <div className="border border-rule p-5 bg-surface hover:border-accent transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-mono text-caption font-bold text-ink">Graph ML &amp; Anomaly Detection</p>
                  <span className="font-mono text-label text-accent">AML-Shield (Bitcoin Network)</span>
                </div>
                <p className="text-caption text-ink-secondary leading-relaxed">
                  Relational graph topology provides signals that flat tabular features inherently miss. Combining supervised GCN/GAT embeddings with unsupervised Isolation Forest guards against known attack vectors as well as zero-day laundering schemas.
                </p>
              </div>

              <div className="border border-rule p-5 bg-surface hover:border-accent transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-mono text-caption font-bold text-ink">Multi-Agent &amp; RAG Systems</p>
                  <span className="font-mono text-label text-accent">Autonomous DS &amp; HCL Pipelines</span>
                </div>
                <p className="text-caption text-ink-secondary leading-relaxed">
                  LLMs must be constrained by strict, deterministic JSON schemas and verified tool execution loops to avoid hallucinated parameters in production automation pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Currently, Education & Key Achievements */}
        <div className="md:col-span-5 space-y-10">
          {/* Education Card */}
          <div className="border border-rule p-6 bg-surface hover:border-ink-secondary transition-colors">
            <span className="font-mono text-label text-accent uppercase font-semibold">Academic Foundation</span>
            <h3 className="text-body font-bold text-ink mt-2">
              B.Tech in Artificial Intelligence &amp; Data Science
            </h3>
            <p className="text-caption text-ink-secondary mt-1">
              Vishwakarma Institute of Technology, Pune
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-label">
              <span className="bg-accent/10 text-accent px-2.5 py-1 font-semibold">
                CGPA: 9.65 / 10.0
              </span>
              <span className="bg-surface-alt text-ink-secondary px-2 py-1 border border-rule">
                Class of 2028
              </span>
            </div>
            <p className="font-mono text-label text-ink-tertiary mt-3 pt-3 border-t border-rule">
              Coursework: DSA, OS, DBMS, Computer Networks, OOPS, Machine Learning, System Design
            </p>
          </div>

          {/* Currently Focused On */}
          <div className="border border-rule p-6 bg-surface hover:border-ink-secondary transition-colors">
            <span className="font-mono text-label text-accent uppercase font-semibold">Currently</span>
            <ul className="mt-3 space-y-2.5">
              {[
                'Targeting top-tier Software Engineering & Distributed Systems roles',
                'Deepening high-concurrency systems design & database internals',
                'Scaling multi-agent LLM systems & autonomous ML workflows',
                'Consistent competitive programming (1150+ DSA solved on LeetCode)',
              ].map((item, idx) => (
                <li key={idx} className="text-caption text-ink-secondary flex items-start gap-2 leading-relaxed">
                  <span className="text-accent font-bold mt-0.5" aria-hidden="true">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Selective Verified Achievements */}
          <div id="achievements" className="border border-rule p-6 bg-surface hover:border-ink-secondary transition-colors">
            <span className="font-mono text-label text-accent uppercase font-semibold">Verified Signals</span>
            <div className="mt-4 space-y-3">
              {achievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-3 pt-3 first:pt-0 border-t first:border-t-0 border-rule/60">
                  <Badge variant="accent">{ach.type}</Badge>
                  <div>
                    <p className="text-caption font-semibold text-ink">
                      {ach.title}
                    </p>
                    <p className="text-caption text-ink-secondary mt-0.5 leading-relaxed">
                      {ach.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
