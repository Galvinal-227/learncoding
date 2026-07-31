export const chapter = {
  slug: "data-structures-heaps",
  title: "Heaps & Priority Queues",
  description: "Heap: Min Heap, Max Heap, operasi, dan Priority Queue.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["data-structures-trees"],
  tags: ["data-structures", "heap", "priority-queue"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Heap

Heap adalah **complete binary tree** yang memenuhi **heap property**:
- **Min Heap**: Parent ≤ children (root = minimum)
- **Max Heap**: Parent ≥ children (root = maximum)

## Operasi

| Operasi | Big O |
|---------|-------|
| insert() | O(log n) |
| extractMin/Max() | O(log n) |
| peek() | O(1) |
| heapify() | O(n) |

## Use Cases

- 📊 **Priority Queue** (task scheduler, Dijkstra)
- 📈 **Top K elements**
- 🏥 **Median finder**
- 💾 **Memory management** (malloc/free)

## JavaScript: Tidak Ada Built-in Heap!

Gunakan array dengan trik:
- Child left = 2i + 1
- Child right = 2i + 2
- Parent = Math.floor((i-1)/2)
  `,

  quiz: [
    { question: "Min Heap: root adalah?", options: ["Maximum", "Minimum", "Random", "Median"], correctAnswer: 1 },
    { question: "Heap insert: Big O?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correctAnswer: 1 }
  ],

  codeExamples: []
};