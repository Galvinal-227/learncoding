export const chapter = {
  slug: "algorithms-introduction",
  title: "Pengenalan Algoritma",
  description: "Pahami apa itu algoritma, kenapa penting, dan bagaimana belajar algoritma secara efektif.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["algoritma", "problem-solving", "interview", "coding"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Algoritma?

Algoritma adalah **langkah-langkah terstruktur** untuk menyelesaikan masalah. Dalam programming, algoritma adalah instruksi yang dijalankan komputer untuk mencapai tujuan tertentu.

## Contoh Sederhana

**Masalah:** Mencari angka terbesar dalam array
**Algoritma:**
\`\`\`
1. Anggap elemen pertama sebagai yang terbesar
2. Loop semua elemen
3. Jika ketemu yang lebih besar, update
4. Kembalikan yang terbesar
\`\`\`

\`\`\`javascript
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
\`\`\`

## Kenapa Developer Perlu Belajar Algoritma?

- 🎯 **Problem solving skill** - Memecah masalah kompleks
- 💼 **Coding interview** - Perusahaan tech menguji algoritma
- ⚡ **Optimasi performa** - Pilih algoritma yang tepat
- 🧠 **Cara berpikir** - Sistematis dan logis
- 📈 **Karir** - Membedakan developer biasa vs engineer

## Kategori Algoritma

| Kategori | Contoh | Use Case |
|----------|--------|----------|
| **Sorting** | Bubble, Quick, Merge | Urutkan data |
| **Searching** | Binary, Linear | Cari data |
| **Graph** | BFS, DFS, Dijkstra | Rute terpendek |
| **Dynamic Programming** | Fibonacci, Knapsack | Optimasi |
| **Greedy** | Huffman, Kruskal | Pilihan optimal lokal |
| **Recursion** | Factorial, Tree traversal | Masalah berulang |

## Cara Belajar Algoritma Efektif

\`\`\`
1. Pahami konsep, jangan hafal kode
2. Visualisasi (gunakan diagram, animasi)
3. Tulis kode sendiri (jangan copy-paste)
4. Analisis kompleksitas (Big O)
5. Latihan rutin (LeetCode, HackerRank)
6. Ajarkan ke orang lain (terbaik!)
\`\`\`

## Platform Latihan

- 💻 **LeetCode** - Paling populer untuk interview
- 🏆 **HackerRank** - Banyak tantangan
- 🧩 **Codewars** - Gamified learning
- 📚 **AlgoExpert** - Khusus interview prep
- 🎯 **Codeforces** - Competitive programming
  `,

  quiz: [
    { question: "Apa itu algoritma?", options: ["Bahasa pemrograman", "Langkah terstruktur menyelesaikan masalah", "Framework", "Database"], correctAnswer: 1 },
    { question: "Platform paling populer untuk latihan coding interview?", options: ["GitHub", "LeetCode", "StackOverflow", "CodePen"], correctAnswer: 1 },
    { question: "Kenapa developer perlu belajar algoritma?", options: ["Hanya formalitas", "Problem solving, interview, optimasi", "Tidak penting", "Hanya untuk akademisi"], correctAnswer: 1 }
  ],

  codeExamples: []
};