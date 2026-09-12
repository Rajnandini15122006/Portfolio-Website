import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'distributed-search-engine',
    number: '01',
    title: 'Distributed Search Engine — Mini Google',
    tagline: 'A search engine built from scratch with crawling, indexing, ranking, and real-time search.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    problem: 'Building a functional search engine that crawls the web, indexes content, ranks results using TF-IDF, and serves real-time queries — understanding what happens between typing a query and seeing results.',
    architecture: [
      { label: 'CRAWLER', description: 'Custom multi-threaded Python crawler that discovers and fetches web pages concurrently.' },
      { label: 'INDEXING', description: 'Processes crawled content, tokenizes text, and builds an inverted index mapping terms to documents.' },
      { label: 'REDIS INVERTED INDEX', description: 'Stores the inverted index in Redis for sub-millisecond lookup times during search.' },
      { label: 'TF-IDF RANKING', description: 'Scores and ranks documents based on term frequency–inverse document frequency relevance.' },
      { label: 'FASTAPI', description: 'REST API layer that handles search queries, retrieves ranked results, and serves them to the frontend.' },
      { label: 'REACT SEARCH UI', description: 'Clean search interface with debounced input handling and real-time result rendering.' },
    ],
    decisions: [
      {
        question: 'Why Redis instead of relying entirely on PostgreSQL for the inverted index?',
        answer: 'PostgreSQL is excellent for persistent storage but the inverted index needs sub-millisecond read latency for real-time search. Redis keeps the index in memory, making lookups significantly faster than disk-based queries. PostgreSQL still handles the canonical document store.',
        alternatives: 'Elasticsearch (too heavyweight for this scale), PostgreSQL full-text search (slower for custom ranking)',
      },
      {
        question: 'Why debounce the search input?',
        answer: 'Without debouncing, every keystroke fires an API request. With a 300ms debounce, we wait until the user pauses typing, reducing server load by roughly 70-80% while keeping the experience feeling instant.',
        alternatives: 'Throttling (still sends too many requests), no optimization (overwhelms the API)',
      },
      {
        question: 'Why multi-thread the crawler?',
        answer: 'Web crawling is I/O-bound — most time is spent waiting for HTTP responses. Multi-threading allows concurrent fetching of multiple pages, dramatically improving crawl throughput compared to sequential crawling.',
        alternatives: 'Async I/O with asyncio (valid alternative, chose threading for simplicity), sequential crawling (too slow)',
      },
    ],
    tradeoffs: [
      'Redis gives speed but requires memory — the index size is bounded by available RAM.',
      'TF-IDF is simple and interpretable but doesn\'t capture semantic similarity the way embedding-based search would.',
      'Multi-threaded crawling is faster but needs careful handling of rate limiting and duplicate URLs.',
      'Docker simplifies deployment but adds a layer of abstraction for debugging.',
    ],
    result: 'A fully functional search engine pipeline — from crawling to real-time ranked results — demonstrating how search systems actually work under the hood.',
    learnings: [
      'How inverted indices work and why they are fundamental to search.',
      'The performance difference between in-memory and disk-based data stores for read-heavy workloads.',
      'Why debouncing matters for real-time interfaces and how small UX decisions affect backend load.',
      'How TF-IDF works mathematically and where it breaks down compared to modern approaches.',
      'The practical challenges of web crawling: rate limiting, URL normalization, duplicate detection.',
    ],
    github: 'https://github.com/Rajnandini15122006',
    liveDemo: undefined,
  },
  {
    slug: 'aml-shield',
    number: '02',
    title: 'AML-Shield — Anti Money Laundering Detection',
    tagline: 'Graph neural network system for detecting illicit transaction patterns in financial networks.',
    stack: ['Python', 'GCN', 'GAT', 'FastAPI', 'Docker'],
    problem: 'Detecting money laundering in financial transaction networks — where traditional tabular ML fails because the signal lives in the relationships between entities, not just individual transactions.',
    architecture: [
      { label: 'TRANSACTION DATA', description: 'Elliptic Bitcoin Dataset: 200,000+ transactions with 49 features per node.' },
      { label: 'GRAPH CONSTRUCTION', description: 'Build transaction network where nodes are transactions and edges represent fund flows.' },
      { label: 'GCN / GAT MODELS', description: 'Graph Convolutional Networks and Graph Attention Networks learn node representations from neighborhood structure.' },
      { label: 'ANOMALY DETECTION', description: 'Isolation Forest for unsupervised anomaly detection combined with supervised GNN classification.' },
      { label: 'VISUALIZATION DASHBOARD', description: 'Interactive network visualization for real-time transaction monitoring and risk alerting.' },
    ],
    decisions: [
      {
        question: 'Why graph neural networks instead of traditional tabular ML?',
        answer: 'Money laundering patterns emerge from how transactions connect — layering, structuring, and cycling funds through intermediaries. GNNs capture this relational structure by aggregating information from neighboring nodes, which tabular models like XGBoost cannot do.',
        alternatives: 'XGBoost/LightGBM on node features only (misses graph structure), rule-based systems (too rigid, easily circumvented)',
      },
      {
        question: 'Why combine supervised GNNs with Isolation Forest?',
        answer: 'Supervised models catch known illicit patterns but miss novel laundering techniques. Isolation Forest adds an unsupervised layer that flags statistical anomalies regardless of whether they match known patterns — providing defense in depth.',
        alternatives: 'Supervised only (misses novel patterns), unsupervised only (too many false positives)',
      },
    ],
    tradeoffs: [
      'GNNs are powerful on graph data but more complex to train and debug than tabular models.',
      'The Elliptic dataset has temporal structure — later time steps have fewer labels, making evaluation on recent data harder.',
      'Combining supervised and unsupervised methods catches more patterns but requires careful threshold tuning to avoid alert fatigue.',
    ],
    result: 'A working AML detection system combining graph neural networks with anomaly detection on 200,000+ real Bitcoin transactions, with an interactive monitoring dashboard.',
    learnings: [
      'How graph neural networks propagate and aggregate information across neighborhoods.',
      'The difference between GCN (uniform aggregation) and GAT (attention-weighted aggregation).',
      'Why financial fraud detection requires both supervised and unsupervised approaches.',
      'Building interactive network visualizations for large-scale graph data.',
    ],
    github: 'https://github.com/Rajnandini15122006',
  },
  {
    slug: 'hop-traffic-simulation',
    number: '03',
    title: 'HOP Traffic Simulation',
    tagline: 'Physics-based traffic simulation using the Intelligent Driver Model for realistic vehicle behavior.',
    stack: ['Python', 'IDM Physics', 'Simulation'],
    problem: 'Simulating realistic traffic flow by implementing the Intelligent Driver Model (IDM) — a physics-based approach where each vehicle independently makes acceleration and deceleration decisions based on its surroundings.',
    architecture: [
      { label: 'TRAFFIC INPUT', description: 'Road network configuration and initial vehicle placement.' },
      { label: 'VEHICLE MODEL', description: 'Individual vehicle state: position, velocity, desired speed.' },
      { label: 'IDM PHYSICS', description: 'Intelligent Driver Model equations computing acceleration based on gap distance and velocity difference.' },
      { label: 'ACCELERATION / DECELERATION', description: 'Per-vehicle force computation each simulation step.' },
      { label: 'TRAFFIC FLOW', description: 'Emergent traffic patterns from individual vehicle interactions.' },
    ],
    decisions: [
      {
        question: 'Why the Intelligent Driver Model specifically?',
        answer: 'IDM produces realistic car-following behavior with only a few interpretable parameters (desired velocity, safe time headway, max acceleration, comfortable deceleration). It captures phenomena like traffic waves and phantom jams that emerge from simple local rules.',
        alternatives: 'Cellular automata (simpler but less realistic), Krauss model (similar but IDM has better analytical properties)',
      },
      {
        question: 'Why physics-based simulation over data-driven?',
        answer: 'Physics-based models are interpretable, require no training data, and generalize to new scenarios. Each parameter has a physical meaning, making it easier to understand and debug the simulation.',
      },
    ],
    tradeoffs: [
      'IDM is realistic for highway driving but simplifies lane-changing and intersection behavior.',
      'Physics-based approach is interpretable but may miss complex human driving patterns that data-driven models capture.',
    ],
    result: 'A working traffic simulation demonstrating emergent traffic phenomena — congestion waves, flow breakdown, and recovery — from simple per-vehicle physics.',
    learnings: [
      'How simple local rules can produce complex emergent behavior in multi-agent systems.',
      'The mathematics behind car-following models and traffic flow theory.',
      'Building simulation loops with discrete time steps and continuous state updates.',
      'The difference between microscopic (per-vehicle) and macroscopic (flow-based) traffic models.',
    ],
    github: 'https://github.com/Rajnandini15122006',
  },
];
