export const chapter = {
  slug: "data-structures-sets-maps",
  title: "Sets & Maps (ES6)",
  description: "Manfaatkan Set dan Map bawaan JavaScript untuk kode yang lebih efisien.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["data-structures-hash-tables"],
  tags: ["data-structures", "set", "map", "es6"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Set

Set menyimpan **nilai unik**. Tidak ada duplikat.

\`\`\`javascript
const set = new Set([1, 2, 2, 3, 3, 3]); // {1, 2, 3}
set.add(4);
set.has(2); // true
set.delete(3);
set.size; // 3

// Hapus duplikat array
const unique = [...new Set([1,2,2,3])]; // [1,2,3]
\`\`\`

## Map

Map menyimpan **key-value** dengan key bisa tipe apa pun.

\`\`\`javascript
const map = new Map();
map.set('name', 'Budi');
map.set(1, 'one');
map.set({id: 1}, 'object key!');
map.get('name'); // 'Budi'
map.has(1); // true
map.size; // 3
\`\`\`

## WeakMap & WeakSet

- Hanya menyimpan **object**
- Tidak mencegah **garbage collection**
- Tidak bisa diiterasi
- Use case: private data, caching, tracking
  `,

  quiz: [
    { question: "Set vs Array?", options: ["Sama", "Set: nilai unik; Array: boleh duplikat", "Array lebih cepat", "Set deprecated"], correctAnswer: 1 },
    { question: "Map vs Object?", options: ["Sama", "Map: key any type, ordered", "Object key any type", "Map deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};