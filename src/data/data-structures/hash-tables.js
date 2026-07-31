export const chapter = {
  slug: "data-structures-hash-tables",
  title: "Hash Tables",
  description: "Hash Table: implementasi, collision handling, dan use cases.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["data-structures-arrays"],
  tags: ["data-structures", "hash-table", "map", "collision"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Hash Table

Hash table menyimpan **key-value pairs** dengan lookup **O(1) average**. Key di-hash menjadi index array.

## Cara Kerja

\`\`\`
Key "nama" → Hash Function → Index 3 → Array[3] = "Budi"
\`\`\`

## Implementasi Sederhana

\`\`\`javascript
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            total = (total * PRIME + key.charCodeAt(i)) % this.keyMap.length;
        }
        return total;
    }
    
    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]); // Separate chaining
    }
    
    get(key) {
        const index = this._hash(key);
        const bucket = this.keyMap[index];
        if (!bucket) return undefined;
        return bucket.find(([k]) => k === key)?.[1];
    }
}
\`\`\`

## Collision Handling

1. **Separate Chaining**: Array di setiap index (pakai array/linked list)
2. **Open Addressing**: Cari slot kosong lain (linear probing)

## JavaScript: Map vs Object

| | Map | Object |
|---|-----|--------|
| Key type | Any type | String/Symbol only |
| Order | Insertion order | Not guaranteed |
| Size | map.size | Object.keys(obj).length |
| Iteration | for...of langsung | Object.entries() |
| Performance | Better for frequent add/delete | Better for static data |
  `,

  quiz: [
    { question: "Hash table lookup average?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "Separate chaining untuk?", options: ["Enkripsi", "Handle collision", "Sorting", "Searching"], correctAnswer: 1 }
  ],

  codeExamples: []
};