import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    company: 'HCL Technologies',
    role: 'NLP/LLM Intern',
    dateRange: 'Sep 2025 – Present',
    type: 'Part-time / Research',
    bullets: [
      'Built RAG-RuleSync — an LLM pipeline that extracts structured rules from unstructured technical documents and outputs validated JSON schemas.',
      'Designed structured JSON schema for representing extracted rules, enabling downstream automation.',
      'Worked with LangChain, Groq API, and retrieval-augmented generation patterns for production-adjacent NLP workflows.',
    ],
    stack: ['LangChain', 'Groq API', 'RAG', 'Python', 'JSON Schema'],
  },
  {
    company: 'BlockseBlock',
    role: 'AI & Decentralized Systems Intern',
    dateRange: 'Jul 2025 – Sep 2025',
    bullets: [
      'Developed AI-powered workflows for decentralized identity verification on blockchain infrastructure.',
      'Built automated identity verification pipelines combining Python-based AI with decentralized protocols.',
    ],
    stack: ['Python', 'Blockchain', 'AI', 'Decentralized Identity'],
  },
  {
    company: 'Codveda Technologies',
    role: 'Machine Learning Intern',
    dateRange: 'Sep 2025 – Nov 2025',
    bullets: [
      'Built end-to-end predictive analytics pipelines from data ingestion to model deployment.',
      'Worked across the full ML lifecycle: data cleaning, feature engineering, model training, and evaluation using Scikit-learn.',
    ],
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
  },
  {
    company: 'Infotact Solutions',
    role: 'Data Science & ML Intern',
    dateRange: 'Jan 2026 – Feb 2026',
    bullets: [
      'Built predictive models using Python and Scikit-learn for business analytics use cases.',
      'Gained hands-on experience with real-world data preprocessing and model evaluation workflows.',
    ],
    stack: ['Python', 'Scikit-learn'],
  },
];
