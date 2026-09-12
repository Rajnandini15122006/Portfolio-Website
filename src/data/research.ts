import { ResearchPaper } from '@/types';

export const papers: ResearchPaper[] = [
  {
    id: 'paper-1',
    title: 'Autonomous Data Scientist Agent: A Multi-Agent System for End-to-End Machine Learning Automation',
    conference: 'Hinweis Research — Scopus Indexed (EID: 105047264702)',
    location: 'International Publication',
    year: 2025,
    question: 'How can complex end-to-end machine learning workflows — from data ingestion, cleaning, and feature engineering to model selection, hyperparameter tuning, and validation — be autonomously executed using cooperative multi-agent architectures?',
    method: 'Designed and implemented a cooperative multi-agent system where specialized LLM agents collaborate on distinct stages of the ML pipeline, utilizing structured schema communication, tool execution, and iterative evaluation loops.',
    result: 'Successfully indexed in Scopus (EID: 105047264702), demonstrating autonomous completion of end-to-end tabular and predictive modeling workflows with minimal human intervention.',
    contribution: 'Core architecture design, multi-agent coordination protocol, automated prompt engineering workflows, and pipeline validation.',
  },
  {
    id: 'paper-2',
    title: 'Graph Neural Networks for Illicit Financial Pattern Detection in Decentralized Transaction Graphs',
    conference: 'International Conference on Advances in Communication, Network, and Computing (CNC 2025)',
    location: 'Bengaluru, India',
    year: 2025,
    question: 'How can relational graph structure and temporal transaction dynamics be captured to identify illicit financial activities in high-throughput blockchain networks?',
    method: 'Formulated transaction history as an attributed directed graph, evaluating Graph Convolutional Networks (GCN) and Graph Attention Networks (GAT) coupled with unsupervised anomaly scoring on the Elliptic transaction benchmark.',
    result: 'Demonstrated superior precision-recall trade-offs over baseline tabular classification by encoding topological node neighborhoods and transaction flow semantics.',
    contribution: 'Graph construction pipeline, neighborhood aggregation experiments, and evaluation benchmark.',
  },
  {
    id: 'paper-3',
    title: 'Automated Rule Synthesis & Structured Schema Induction from Unstructured Technical Specifications',
    conference: 'International Conference on Advances in Communication, Network, and Computing (CNC 2025)',
    location: 'Bengaluru, India',
    year: 2025,
    question: 'How can deterministic business and engineering constraints be faithfully extracted and verified from ambiguous, unstructured natural language documentation?',
    method: 'Engineered a Retrieval-Augmented Generation (RAG) pipeline leveraging dense vector retrieval with schema-constrained LLM generation, enforcing strict JSON schema typing and cyclic validation.',
    result: 'Established reliable, schema-validated automated extraction with zero schema violation errors across complex technical compliance documents.',
    contribution: 'Retrieval pipeline design, JSON schema specification, validation harness, and LLM prompt engineering.',
  },
];
