export const chapter = {
  slug: "javascript-map-set",
  title: "Map & Set",
  description: "Pelajari Map dan Set - struktur data modern yang lebih powerful dari Object dan Array.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-arrays", "javascript-objects"],
  tags: ["javascript", "map", "set", "data-structure"],
  order: 16,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Map

Map adalah struktur data **key-value** di mana key bisa tipe data apa pun (beda dengan Object yang key-nya harus string/Symbol).

### Membuat Map
\`\`\`javascript
const map = new Map();

// Set nilai
map.set('nama', 'Budi');
map.set(1, 'satu');
map.set(true, 'boolean');
map.set({id: 1}, 'object sebagai key!');
\`\`\`

### Method Map
\`\`\`javascript
map.get('nama');       // 'Budi'
map.has('nama');       // true
map.size;              // 4
map.delete('nama');    // Hapus
map.clear();           // Hapus semua

// Iterasi
for (const [key, value] of map) {
    console.log(key, value);
}

map.forEach((value, key) => console.log(key, value));

// Konversi
[...map.keys()];    // Array of keys
[...map.values()];  // Array of values
[...map.entries()]; // Array of [key, value]
\`\`\`

### Map vs Object

| Fitur | Map | Object |
|-------|-----|--------|
| Tipe key | Semua tipe | Hanya string/Symbol |
| Urutan | Sesuai insert | Tidak terjamin |
| Size | map.size | Object.keys(obj).length |
| Iterasi | Langsung forEach | Perlu Object.entries() |
| Performa | Lebih cepat untuk add/delete | - |
| JSON | Tidak langsung | ✅ JSON.stringify() |

## Set

Set adalah kumpulan nilai **unik** (tidak ada duplikat).

### Membuat Set
\`\`\`javascript
const set = new Set();

set.add(1);
set.add(2);
set.add(2); // Tidak berpengaruh (sudah ada)
set.add(3);

console.log(set); // Set(3) {1, 2, 3}
\`\`\`

### Method Set
\`\`\`javascript
set.has(2);       // true
set.size;         // 3
set.delete(2);    // Hapus
set.clear();      // Hapus semua

// Iterasi
for (const value of set) {
    console.log(value);
}

set.forEach(value => console.log(value));
\`\`\`

### Use Cases Set

**Menghilangkan duplikat array:**
\`\`\`javascript
const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)]; // [1, 2, 3, 4]
\`\`\`

**Cek keanggotaan:**
\`\`\`javascript
const blacklist = new Set(['user1', 'user2']);
console.log(blacklist.has('user1')); // true (O(1)!)
\`\`\`

**Operasi himpunan:**
\`\`\`javascript
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Intersection
const intersection = new Set([...a].filter(x => b.has(x)));
// Union
const union = new Set([...a, ...b]);
// Difference
const difference = new Set([...a].filter(x => !b.has(x)));
\`\`\`
  `,

  quiz: [
    {
      question: "Apa keunggulan Map dibanding Object?",
      options: [
        "Map lebih kecil",
        "Key Map bisa tipe data apa pun, bukan hanya string",
        "Map selalu lebih cepat",
        "Tidak ada keunggulan"
      ],
      correctAnswer: 1,
      explanation: "Map memperbolehkan key dengan tipe data apa pun (object, number, boolean), sementara Object hanya string dan Symbol."
    },
    {
      question: "Bagaimana cara cepat menghilangkan duplikat dari array?",
      options: [
        "arr.unique()",
        "arr.filter()",
        "[...new Set(arr)]",
        "arr.distinct()"
      ],
      correctAnswer: 2,
      explanation: "Set hanya menyimpan nilai unik. [...new Set(arr)] mengkonversi Set kembali ke array tanpa duplikat."
    }
  ],

  codeExamples: [
    {
      title: "Demo Map & Set",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Map & Set</title></head>
<body>
    <h1>Demo Map & Set</h1>
    <p>Buka Console (F12)</p>
    
    <script>
        // MAP
        const userMap = new Map();
        userMap.set(1, { nama: 'Budi', role: 'admin' });
        userMap.set(2, { nama: 'Siti', role: 'user' });
        
        console.log('Map size:', userMap.size);
        console.log('User 1:', userMap.get(1));
        
        // SET
        const angka = [1, 2, 3, 2, 4, 3, 5, 1];
        const unique = [...new Set(angka)];
        console.log('Original:', angka);
        console.log('Unique:', unique);
        
        // Operasi Set
        const timA = new Set(['Budi', 'Siti', 'Agus']);
        const timB = new Set(['Siti', 'Agus', 'Dewi']);
        
        const intersection = new Set([...timA].filter(x => timB.has(x)));
        console.log('Di kedua tim:', [...intersection]);
    </script>
</body>
</html>`
    }
  ]
};