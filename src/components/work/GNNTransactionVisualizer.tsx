'use client';

import { useState } from 'react';

interface BitcoinTxNode {
  id: string;
  type: 'legitimate' | 'suspicious' | 'mixer_intermediary';
  btcAmount: string;
  inDegree: number;
  outDegree: number;
  anomalyScore: number;
  gatAttentionWeight: number;
  label: string;
}

const BITCOIN_NODES: BitcoinTxNode[] = [
  {
    id: 'tx_01',
    type: 'legitimate',
    btcAmount: '14.50 BTC',
    inDegree: 1,
    outDegree: 2,
    anomalyScore: 0.08,
    gatAttentionWeight: 0.12,
    label: 'Mining Reward Distribution',
  },
  {
    id: 'tx_02',
    type: 'legitimate',
    btcAmount: '8.20 BTC',
    inDegree: 2,
    outDegree: 1,
    anomalyScore: 0.14,
    gatAttentionWeight: 0.15,
    label: 'Verified Merchant Exchange',
  },
  {
    id: 'tx_03',
    type: 'suspicious',
    btcAmount: '98.45 BTC',
    inDegree: 8,
    outDegree: 12,
    anomalyScore: 0.89,
    gatAttentionWeight: 0.78,
    label: 'Rapid Layering Intermediary',
  },
  {
    id: 'tx_04',
    type: 'mixer_intermediary',
    btcAmount: '3.10 BTC',
    inDegree: 14,
    outDegree: 14,
    anomalyScore: 0.95,
    gatAttentionWeight: 0.91,
    label: 'CoinJoin / Tumbler Hop Pool',
  },
  {
    id: 'tx_05',
    type: 'suspicious',
    btcAmount: '45.00 BTC',
    inDegree: 4,
    outDegree: 6,
    anomalyScore: 0.82,
    gatAttentionWeight: 0.69,
    label: 'High-Velocity Structuring Node',
  },
];

export function GNNTransactionVisualizer() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('tx_03');
  const [filterMode, setFilterMode] = useState<'all' | 'flagged'>('all');

  const selectedNode = BITCOIN_NODES.find((n) => n.id === selectedNodeId) || BITCOIN_NODES[2];

  const displayedNodes =
    filterMode === 'flagged'
      ? BITCOIN_NODES.filter((n) => n.type === 'suspicious' || n.type === 'mixer_intermediary')
      : BITCOIN_NODES;

  return (
    <div className="border border-rule bg-surface p-6 md:p-8 mt-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-rule">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <p className="font-mono text-label text-accent font-bold uppercase tracking-wider">
              AML-Shield · Graph Neural Network Inspector
            </p>
          </div>
          <h3 className="text-body-lg font-bold text-ink mt-1">
            Elliptic Bitcoin Dataset Transaction Subgraph
          </h3>
        </div>

        <div className="flex items-center gap-1 border border-rule p-1 bg-surface-alt font-mono text-label self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setFilterMode('all')}
            className={`px-2.5 py-1 transition-colors ${
              filterMode === 'all' ? 'bg-ink text-surface font-semibold' : 'text-ink-secondary hover:text-ink'
            }`}
          >
            All Nodes ({BITCOIN_NODES.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('flagged')}
            className={`px-2.5 py-1 transition-colors ${
              filterMode === 'flagged' ? 'bg-accent text-white font-semibold' : 'text-ink-secondary hover:text-ink'
            }`}
          >
            Flagged Only
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Node Graph List */}
        <div className="lg:col-span-6 space-y-2.5">
          <p className="font-mono text-label text-ink-tertiary uppercase mb-2">
            Inspect Subgraph Transaction Nodes (Tap or Hover)
          </p>

          {displayedNodes.map((node) => {
            const isSelected = node.id === selectedNode.id;
            const isFlagged = node.type === 'suspicious' || node.type === 'mixer_intermediary';

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedNodeId(node.id)}
                className={`w-full text-left p-3.5 border transition-all duration-200 flex items-center justify-between ${
                  isSelected
                    ? 'border-accent bg-surface-alt shadow-sm'
                    : 'border-rule bg-surface hover:border-ink-secondary/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isFlagged ? 'bg-accent animate-pulse' : 'bg-emerald-600'
                    }`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-caption font-bold text-ink">{node.id}</span>
                      <span className="font-mono text-label text-ink-tertiary">[{node.btcAmount}]</span>
                    </div>
                    <p className="text-caption text-ink-secondary font-sans line-clamp-1">{node.label}</p>
                  </div>
                </div>

                <div className="text-right font-mono text-label">
                  <span className={isFlagged ? 'text-accent font-semibold' : 'text-emerald-700'}>
                    Score: {node.anomalyScore.toFixed(2)}
                  </span>
                  <span className="block text-ink-tertiary text-[10px]">
                    GAT α: {node.gatAttentionWeight.toFixed(2)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Node Graph Neighborhood Detail */}
        <div className="lg:col-span-6 border border-rule p-5 bg-surface-alt/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-rule/60">
              <span className="font-mono text-label text-accent font-semibold uppercase">
                GNN Neighborhood Feature Vectors
              </span>
              <span className="font-mono text-label bg-surface-card border border-rule px-2 py-0.5 text-ink-secondary">
                Node ID: {selectedNode.id}
              </span>
            </div>

            <h4 className="text-body font-bold text-ink mb-1">{selectedNode.label}</h4>
            <p className="font-mono text-caption text-ink-secondary mb-4">
              Volume: {selectedNode.btcAmount} · Class:{' '}
              <span
                className={`font-semibold uppercase ${
                  selectedNode.type === 'legitimate' ? 'text-emerald-700' : 'text-accent'
                }`}
              >
                {selectedNode.type}
              </span>
            </p>

            <div className="grid grid-cols-2 gap-3 mb-5 font-mono text-caption">
              <div className="p-3 bg-surface border border-rule">
                <span className="text-label text-ink-tertiary block">In-Degree (Inputs)</span>
                <span className="text-heading font-bold text-ink">{selectedNode.inDegree}</span>
              </div>
              <div className="p-3 bg-surface border border-rule">
                <span className="text-label text-ink-tertiary block">Out-Degree (Hops)</span>
                <span className="text-heading font-bold text-ink">{selectedNode.outDegree}</span>
              </div>
              <div className="p-3 bg-surface border border-rule">
                <span className="text-label text-ink-tertiary block">Isolation Forest Anomaly</span>
                <span className="text-heading font-bold text-accent">
                  {(selectedNode.anomalyScore * 100).toFixed(0)}%
                </span>
              </div>
              <div className="p-3 bg-surface border border-rule">
                <span className="text-label text-ink-tertiary block">GAT Attention Weight (α)</span>
                <span className="text-heading font-bold text-ink">
                  {selectedNode.gatAttentionWeight.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-3 bg-surface-card border border-rule text-caption text-ink-secondary leading-relaxed font-sans">
              <strong className="text-ink font-mono text-label block uppercase mb-1">
                Relational Structure Insight:
              </strong>
              {selectedNode.anomalyScore > 0.5
                ? 'High topological fan-out and rapid transaction velocity detected across 2nd-degree neighbor clusters. Isolation forest and GAT flag this entity for automated suspicious structuring review.'
                : 'Balanced input-to-output edge distribution consistent with typical non-adversarial liquidity distribution.'}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-rule/60 font-mono text-label text-ink-tertiary flex items-center justify-between">
            <span>Benchmark: Elliptic Bitcoin Dataset (200,000+ nodes)</span>
            <span className="text-accent font-semibold">GCN + GAT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
