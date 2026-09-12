import { DSAStats, RepresentativeProblem } from '@/types';

export const dsaStats: DSAStats = {
  leetcodeProblems: '1150+',
  contestRating: '1550+',
  platforms: [
    { name: 'LeetCode', stat: '1150+ solved (1550+ rating)', link: 'https://leetcode.com/u/rajnandini15122006' },
    { name: 'CodeChef', stat: '3★ (1553+ rating)', link: 'https://www.codechef.com/users/free_lily_41' },
    { name: 'Codeforces', stat: 'Active Contestant', link: 'https://codeforces.com' },
  ],
};

export const strongAreas = [
  'Graphs',
  'Dynamic Programming',
  'Trees & BST',
  'Binary Search',
  'Sliding Window',
  'Bit Manipulation',
];

export const representativeProblems: RepresentativeProblem[] = [
  {
    name: 'Critical Connections in a Network (Bridges in a Graph)',
    category: 'Graphs',
    whyInteresting: 'Requires detecting single points of failure in distributed networks using depth-first search timestamps rather than brute-force edge removal.',
    approach: "Implemented Tarjan's bridge-finding algorithm using discovery time and lowest reachable ancestor (`tin` and `low` arrays) in a single DFS traversal.",
    complexity: 'Time: O(V + E) · Space: O(V + E)',
    link: 'https://leetcode.com/problems/critical-connections-in-a-network/',
  },
  {
    name: 'Word Break II (Sentence Generation with Memoization)',
    category: 'Dynamic Programming',
    whyInteresting: 'Exposes the boundary between combinatorial explosion and optimal substructure when generating all valid segmentations of a string.',
    approach: 'Top-down DP with hash-map memoization to prune subproblems, combined with trie prefix lookups to avoid unnecessary slice computations.',
    complexity: 'Time: O(N² + 2^N in worst case, heavily pruned) · Space: O(2^N)',
    link: 'https://leetcode.com/problems/word-break-ii/',
  },
  {
    name: 'Binary Tree Maximum Path Sum',
    category: 'Trees & BST',
    whyInteresting: 'Path can turn at any arbitrary node, demanding separation between what value a node contributes to its parent versus the global maximum subtree diameter.',
    approach: 'Post-order traversal computing max gain contributed upwards while simultaneously updating a global path maximum that bridges left and right subtrees.',
    complexity: 'Time: O(N) · Space: O(H) recursion stack',
    link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
  },
  {
    name: 'Median of Two Sorted Arrays',
    category: 'Binary Search',
    whyInteresting: 'Classic algorithmic milestone: achieving logarithmic time across two disjoint sorted datasets without merging them.',
    approach: 'Binary search on the partition cut of the smaller array to establish equal halves with valid boundary conditions (`maxLeftX <= minRightY`).',
    complexity: 'Time: O(log(min(M, N))) · Space: O(1)',
    link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  },
  {
    name: 'Subarrays with K Different Integers',
    category: 'Sliding Window',
    whyInteresting: 'Exact count constraints (`exactly K`) are notoriously difficult with sliding window because windows are non-monotonic, but can be decomposed elegantly.',
    approach: 'Reduced the problem to `atMost(K) - atMost(K - 1)` using two-pointer frequency map tracking, converting a non-monotonic search into two monotonic passes.',
    complexity: 'Time: O(N) · Space: O(K)',
    link: 'https://leetcode.com/problems/subarrays-with-k-different-integers/',
  },
];
