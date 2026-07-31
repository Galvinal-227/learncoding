export const chapter = {
  slug: "algorithms-quiz",
  title: "Quiz Akhir Algorithms",
  description: "Uji pemahamanmu tentang algoritma.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["algorithms-practice"],
  tags: ["algoritma", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Algorithms\n\n15 soal.`,

  quiz: [
    { question: "Algoritma adalah?", options: ["Bahasa", "Langkah terstruktur", "Framework", "Database"], correctAnswer: 1 },
    { question: "Kompleksitas Binary Search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correctAnswer: 2 },
    { question: "Nested loop O(?)?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correctAnswer: 1 },
    { question: "Merge Sort kompleksitas?", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correctAnswer: 1 },
    { question: "Syarat Binary Search?", options: ["Data random", "Data terurut", "Data kecil", "Data besar"], correctAnswer: 1 },
    { question: "Dua komponen rekursi?", options: ["Loop+if", "Base case+recursive case", "Input+output", "Start+end"], correctAnswer: 1 },
    { question: "DP singkatan?", options: ["Data Processing", "Dynamic Programming", "Divide Partition", "Double Pointer"], correctAnswer: 1 },
    { question: "Strategi Divide & Conquer?", options: ["Sort saja", "Divide-Conquer-Combine", "Loop saja", "Search saja"], correctAnswer: 1 },
    { question: "Greedy selalu optimal?", options: ["Ya", "Tidak, hanya masalah tertentu", "Ya di semua", "Tergantung"], correctAnswer: 1 },
    { question: "Fibonacci dengan DP O(?)?", options: ["O(2ⁿ)", "O(n log n)", "O(n)", "O(1)"], correctAnswer: 2 },
    { question: "Big O terbaik?", options: ["O(n²)", "O(n log n)", "O(1)", "O(n)"], correctAnswer: 2 },
    { question: "Two Sum optimal?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], correctAnswer: 2 },
    { question: "Struktur data Valid Parentheses?", options: ["Queue", "Stack", "Tree", "Array"], correctAnswer: 1 },
    { question: "Sorting paling cepat rata-rata?", options: ["Bubble", "Selection", "Quick Sort", "Insertion"], correctAnswer: 2 },
    { question: "Platform latihan algoritma?", options: ["GitHub", "LeetCode", "StackOverflow", "CodePen"], correctAnswer: 1 }
  ],

  codeExamples: []
};