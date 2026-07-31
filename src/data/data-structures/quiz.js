export const chapter = {
  slug: "data-structures-quiz",
  title: "Quiz Akhir Data Structures",
  description: "Uji pemahamanmu tentang struktur data.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["data-structures-sets-maps"],
  tags: ["data-structures", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Data Structures\n\n15 soal.`,
  quiz: [
    { question: "Array access by index?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "LIFO?", options: ["Queue", "Stack", "Array", "Tree"], correctAnswer: 1 },
    { question: "FIFO?", options: ["Stack", "Queue", "Array", "Heap"], correctAnswer: 1 },
    { question: "LL insert awal?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "BST left vs parent?", options: ["Sama", "Left < parent", "Left > parent", "Random"], correctAnswer: 1 },
    { question: "Inorder BST hasil?", options: ["Unsorted", "Sorted ascending", "Reverse", "Random"], correctAnswer: 1 },
    { question: "BFS pakai?", options: ["Stack", "Queue", "Recursion", "Array"], correctAnswer: 1 },
    { question: "Hash table lookup?", options: ["O(1) avg", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "Min Heap root?", options: ["Maximum", "Minimum", "Random", "Median"], correctAnswer: 1 },
    { question: "Set menyimpan?", options: ["Duplikat", "Unik", "Key-value", "Terurut"], correctAnswer: 1 },
    { question: "Map key type?", options: ["String only", "Any type", "Number only", "Object only"], correctAnswer: 1 },
    { question: "Adjacency List memory?", options: ["O(V+E)", "O(V²)", "O(1)", "O(n log n)"], correctAnswer: 0 },
    { question: "DFS struktur data?", options: ["Queue", "Stack/Recursion", "Array", "Heap"], correctAnswer: 1 },
    { question: "Separate chaining?", options: ["Encrypt", "Handle collision", "Sort", "Search"], correctAnswer: 1 },
    { question: "Heap insert?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correctAnswer: 1 }
  ]
};