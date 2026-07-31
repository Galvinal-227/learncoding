export const chapter = {
  slug: "data-structures-graphs",
  title: "Graphs",
  description: "Graph: representasi (adjacency list/matrix), traversal (BFS/DFS), dan algoritma dasar.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["data-structures-trees"],
  tags: ["data-structures", "graph", "bfs", "dfs"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Graph

Graph adalah kumpulan **vertex (node)** dan **edge (sisi)** yang menghubungkannya.

## Jenis Graph

| Jenis | Edge | Contoh |
|-------|------|--------|
| Undirected | Dua arah | Teman Facebook |
| Directed (Digraph) | Satu arah | Follower Instagram |
| Weighted | Punya bobot | Google Maps (jarak) |
| Cyclic | Ada siklus | - |
| Acyclic | Tidak ada siklus | Tree (DAG) |

## Representasi

### Adjacency List (Paling Umum)
\`\`\`javascript
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    
    addVertex(v) { this.adjacencyList.set(v, []); }
    
    addEdge(v1, v2, directed = false) {
        this.adjacencyList.get(v1).push(v2);
        if (!directed) this.adjacencyList.get(v2).push(v1);
    }
}
\`\`\`

### Adjacency Matrix
\`\`\`javascript
const matrix = [
//   A  B  C  D
    [0, 1, 0, 1], // A
    [1, 0, 1, 0], // B
    [0, 1, 0, 1], // C
    [1, 0, 1, 0]  // D
];
\`\`\`

## Graph Traversal

### BFS (Queue-based)
\`\`\`javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    
    while (queue.length) {
        const vertex = queue.shift();
        console.log(vertex);
        for (const neighbor of graph.adjacencyList.get(vertex)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
\`\`\`

### DFS (Stack/Recursive)
\`\`\`javascript
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    for (const neighbor of graph.adjacencyList.get(start)) {
        if (!visited.has(neighbor)) dfs(graph, neighbor, visited);
    }
}
\`\`\`
  `,

  quiz: [
    { question: "Adjacency List vs Matrix: memory?", options: ["Sama", "List: O(V+E); Matrix: O(V²)", "Matrix lebih hemat", "List lebih besar"], correctAnswer: 1 },
    { question: "BFS pakai?", options: ["Stack", "Queue", "Recursion", "Array"], correctAnswer: 1 }
  ],

  codeExamples: []
};