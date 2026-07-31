export const chapter = {
  slug: "javascript-weakmap-weakset",
  title: "WeakMap & WeakSet",
  description: "Pelajari WeakMap dan WeakSet untuk manajemen memori yang lebih efisien.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-map-set"],
  tags: ["javascript", "weakmap", "weakset", "memory"],
  order: 17,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## WeakMap

WeakMap mirip Map tapi **key harus object** dan tidak mencegah **garbage collection**.

\`\`\`javascript
const weakMap = new WeakMap();
const obj = { id: 1 };

weakMap.set(obj, 'data rahasia');
weakMap.get(obj);  // 'data rahasia'
weakMap.has(obj);  // true
weakMap.delete(obj);
\`\`\`

### Map vs WeakMap

| Fitur | Map | WeakMap |
|-------|-----|---------|
| Key | Semua tipe | Hanya object |
| Iterasi | ✅ forEach, keys() | ❌ Tidak bisa |
| Size | ✅ .size | ❌ Tidak ada |
| Garbage Collection | ❌ Mencegah | ✅ Tidak mencegah |

### Use Case: Private Data
\`\`\`javascript
const privateData = new WeakMap();

class User {
    constructor(nama, password) {
        privateData.set(this, { password });
        this.nama = nama;
    }
    cekPassword(pass) {
        return privateData.get(this).password === pass;
    }
}
\`\`\`

## WeakSet

WeakSet mirip Set tapi **nilai harus object** dan tidak mencegah garbage collection.

\`\`\`javascript
const weakSet = new WeakSet();
const user = { nama: 'Budi' };

weakSet.add(user);
weakSet.has(user);  // true
weakSet.delete(user);
\`\`\`

### Use Case: Tracking Objects
\`\`\`javascript
const visitedNodes = new WeakSet();

function traverse(node) {
    if (visitedNodes.has(node)) return;
    visitedNodes.add(node);
    // Proses node...
}
\`\`\`
  `,

  quiz: [
    { question: "Kenapa WeakMap tidak bisa diiterasi?", options: ["Bug", "Karena key bisa di-garbage collect kapan saja", "Belum diimplementasi", "Hanya di Node.js"], correctAnswer: 1, explanation: "Karena WeakMap membiarkan key di-garbage collect, isinya bisa berubah tanpa pemberitahuan, sehingga iterasi tidak aman." },
    { question: "Apa tipe data yang bisa jadi key WeakMap?", options: ["Semua tipe", "Hanya object", "Hanya string", "Hanya number"], correctAnswer: 1 }
  ]
};