export const chapter = {
  slug: "interview-coding-challenges",
  title: "Coding Challenges",
  description: "Latihan soal coding interview: array, string, tree, DP, dan strategi belajar.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  difficulty: "Advanced",
  estimatedReadingTime: 30,
  prerequisites: ["interview-technical-interviews"],
  tags: ["interview", "coding", "leetcode", "challenges"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Top 10 Soal Wajib (LeetCode)

| # | Soal | Pattern | Difficulty |
|---|------|---------|------------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Hash Map | Easy |
| 2 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Stack | Easy |
| 3 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Linked List | Easy |
| 4 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | DP / Sliding Window | Medium |
| 5 | [Binary Tree Level Order](https://leetcode.com/problems/binary-tree-level-order-traversal/) | BFS | Medium |
| 6 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | DFS/BFS | Medium |
| 7 | [Word Break](https://leetcode.com/problems/word-break/) | DP | Medium |
| 8 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | Hash Map + DLL | Medium |
| 9 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | DFS/BFS Grid | Medium |
| 10 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Sorting | Medium |

## Pattern Recognition

### Array/String → Two Pointers
\`\`\`javascript
// Valid Palindrome
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l = 0, r = s.length - 1;
    while (l < r) if (s[l++] !== s[r--]) return false;
    return true;
}
\`\`\`

### Tree/Graph → DFS/BFS
\`\`\`javascript
// Max Depth of Binary Tree
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
\`\`\`

### Stack → Parentheses/Recent
\`\`\`javascript
// Valid Parentheses
function isValid(s) {
    const stack = [], map = { ')': '(', '}': '{', ']': '[' };
    for (const c of s) {
        if (!map[c]) stack.push(c);
        else if (stack.pop() !== map[c]) return false;
    }
    return !stack.length;
}
\`\`\`

## Study Plan (3 Bulan)

\`\`\`
Bulan 1: Easy (50 soal)
- Array, String, Hash Map
- 2-3 soal/hari

Bulan 2: Medium (50 soal)
- Tree, Graph, DP, Stack/Queue
- 2 soal/hari + review

Bulan 3: Mock + System Design
- Mock interviews 2x/minggu
- System design 1x/minggu
- Review weak areas
\`\`\`
  `,

  quiz: [
    { question: "Two Sum optimal?", options: ["O(n²) brute", "O(n) Hash Map", "O(n log n)", "O(1)"], correctAnswer: 1 },
    { question: "Valid Parentheses pakai?", options: ["Queue", "Stack", "Tree", "Heap"], correctAnswer: 1 }
  ],

  codeExamples: []
};