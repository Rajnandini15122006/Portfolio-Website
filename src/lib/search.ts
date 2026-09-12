import Fuse, { IFuseOptions } from 'fuse.js';
import { SearchEntry } from '@/types';
import { searchEntries } from '@/data/searchIndex';

const fuseOptions: IFuseOptions<SearchEntry> = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'tags', weight: 0.35 },
    { name: 'description', weight: 0.2 },
    { name: 'category', weight: 0.05 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
};

const fuse = new Fuse(searchEntries, fuseOptions);

export function search(query: string): SearchEntry[] {
  if (!query.trim()) return [];
  const results = fuse.search(query, { limit: 10 });
  return results.map((r) => r.item);
}

export const searchSuggestions = [
  'Redis',
  'GNN',
  'RAG',
  'DSA',
  'FastAPI',
  'LightGBM',
  'Docker',
  'System Design',
];
