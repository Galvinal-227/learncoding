export const chapter = {
  slug: "data-structures-introduction",
  title: "Pengenalan Data Structures",
  description: "Pahami apa itu struktur data, kenapa penting, dan bagaimana memilih yang tepat.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["data-structures", "pengenalan", "fundamental", "interview"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Data Structures?

Struktur data adalah **cara menyimpan dan mengorganisir data** di komputer agar bisa diakses dan dimodifikasi secara efisien.

## Kenapa Penting?

- ⚡ **Efisiensi** - Operasi yang sama bisa 1000x lebih cepat dengan struktur data yang tepat
- 🎯 **Problem solving** - Banyak masalah punya solusi natural dengan struktur data tertentu
- 💼 **Coding interview** - 80% pertanyaan interview tentang struktur data
- 🧠 **Fundamental CS** - Dasar untuk algoritma, system design, database

## Memilih Struktur Data

\`\`\`
Butuh akses by index cepat?          → Array
Butuh insert/delete di awal/akhir?   → Linked List
Butuh LIFO (Last In First Out)?      → Stack
Butuh FIFO (First In First Out)?     → Queue
Butuh key-value lookup cepat?        → Hash Table / Map
Butuh data hierarkis?                → Tree
Butuh relasi kompleks?               → Graph
Butuh akses min/max cepat?           → Heap
Butuh data unik?                     → Set
\`\`\`

## Big O Cheatsheet

| Struktur Data | Access | Search | Insert | Delete |
|---------------|--------|--------|--------|--------|
| **Array** | O(1) | O(n) | O(n) | O(n) |
| **Linked List** | O(n) | O(n) | O(1)* | O(1)* |
| **Stack** | O(n) | O(n) | O(1) | O(1) |
| **Queue** | O(n) | O(n) | O(1) | O(1) |
| **Hash Table** | - | O(1) avg | O(1) avg | O(1) avg |
| **BST** | O(log n) | O(log n) | O(log n) | O(log n) |
| **Heap** | O(1) min/max | O(n) | O(log n) | O(log n) |

*Di awal/akhir dengan pointer

## Linear vs Non-Linear

### Linear
Data tersusun berurutan:
- Array
- Linked List
- Stack
- Queue

### Non-Linear
Data tersusun hierarkis/relasional:
- Tree
- Graph
- Heap
- Hash Table
  `,

  quiz: [
    { question: "Array access by index: Big O?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "LIFO adalah prinsip?", options: ["Queue", "Stack", "Array", "Tree"], correctAnswer: 1, explanation: "Stack = Last In First Out (LIFO). Queue = First In First Out (FIFO)." },
    { question: "Key-value lookup O(1) average?", options: ["Array", "Linked List", "Hash Table", "Tree"], correctAnswer: 2 }
  ],

  codeExamples: []
};