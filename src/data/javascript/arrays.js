export const chapter = {
  slug: "javascript-arrays",
  title: "Array",
  description: "Kuasai array di JavaScript: manipulasi, iteration methods, dan tips performa.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-data-types"],
  tags: ["javascript", "array", "iteration", "methods"],
  order: 15,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Array?

Array adalah struktur data untuk menyimpan **kumpulan data terurut** dalam satu variabel.

## Membuat Array

\`\`\`javascript
// Array literal
const fruits = ["apel", "jeruk", "mangga"];

// Constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Array kosong
const empty = [];
\`\`\`

## Mengakses & Memodifikasi

\`\`\`javascript
const fruits = ["apel", "jeruk", "mangga"];

console.log(fruits[0]);    // "apel"
console.log(fruits.length); // 3

fruits[1] = "anggur";      // Ubah
fruits.push("pisang");     // Tambah di akhir
fruits.unshift("stroberi"); // Tambah di awal
\`\`\`

## Iteration Methods (PENTING!)

### forEach
\`\`\`javascript
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});
\`\`\`

### map() - Transformasi
\`\`\`javascript
const uppercased = fruits.map(f => f.toUpperCase());
// ["APEL", "ANGGUR", "MANGGA", "PISANG"]
\`\`\`

### filter() - Menyaring
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]
\`\`\`

### find() - Mencari satu
\`\`\`javascript
const user = users.find(u => u.id === 3);
\`\`\`

### findIndex()
\`\`\`javascript
const index = fruits.findIndex(f => f === "mangga");
\`\`\`

### some() & every()
\`\`\`javascript
const hasEven = numbers.some(n => n % 2 === 0); // true
const allPositive = numbers.every(n => n > 0);   // true
\`\`\`

### reduce() - Akumulasi (POWERFUL!)
\`\`\`javascript
const sum = numbers.reduce((total, n) => total + n, 0);
// 21

const grouped = users.reduce((acc, user) => {
    acc[user.role] = acc[user.role] || [];
    acc[user.role].push(user);
    return acc;
}, {});
\`\`\`

### flat() & flatMap()
\`\`\`javascript
const nested = [1, [2, 3], [4, [5]]];
nested.flat();     // [1, 2, 3, 4, [5]]
nested.flat(2);    // [1, 2, 3, 4, 5]
\`\`\`

## Menambah & Menghapus

\`\`\`javascript
// Akhir
arr.push(item);   // Tambah akhir
arr.pop();        // Hapus akhir

// Awal
arr.unshift(item); // Tambah awal
arr.shift();       // Hapus awal

// Di tengah
arr.splice(index, deleteCount, ...items);
\`\`\`

## Lainnya

\`\`\`javascript
arr.includes(item);     // Cek keberadaan
arr.indexOf(item);      // Cari index
arr.join(separator);    // Gabung jadi string
arr.reverse();          // Balik urutan (mutate!)
arr.sort((a, b) => a - b); // Urutkan
arr.slice(start, end);  // Potong (tidak mutate)
arr.concat(arr2);       // Gabung array
\`\`\`

## Spread & Destructuring

\`\`\`javascript
// Spread
const combined = [...arr1, ...arr2];

// Destructuring
const [first, second, ...rest] = fruits;
\`\`\`
  `,

  quiz: [
    {
      question: "Apa beda map() dan forEach()?",
      options: [
        "Tidak ada beda",
        "map() mengembalikan array baru, forEach() tidak",
        "forEach() lebih cepat",
        "map() hanya untuk angka"
      ],
      correctAnswer: 1,
      explanation: "map() membuat array baru hasil transformasi. forEach() hanya menjalankan fungsi tanpa mengembalikan nilai."
    },
    {
      question: "Method apa untuk menghitung total dari array angka?",
      options: ["sum()", "total()", "reduce()", "accumulate()"],
      correctAnswer: 2,
      explanation: "reduce() digunakan untuk mengakumulasi nilai array menjadi satu nilai, seperti menjumlahkan semua elemen."
    }
  ],

  codeExamples: [
    {
      title: "Demo Array Methods",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Array JS</title></head>
<body>
    <h1>Demo Array JavaScript</h1>
    <p>Buka Console (F12)</p>
    
    <script>
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        
        console.log("Data:", numbers);
        
        // map
        console.log("x2:", numbers.map(n => n * 2));
        
        // filter
        console.log("Genap:", numbers.filter(n => n % 2 === 0));
        
        // reduce
        console.log("Total:", numbers.reduce((a, b) => a + b, 0));
        console.log("Rata-rata:", numbers.reduce((a, b) => a + b) / numbers.length);
        
        // find
        console.log("Pertama >5:", numbers.find(n => n > 5));
        
        // some & every
        console.log("Ada >8?:", numbers.some(n => n > 8));
        console.log("Semua <20?:", numbers.every(n => n < 20));
        
        // Chaining
        const result = numbers
            .filter(n => n % 2 === 0)
            .map(n => n * 10)
            .reduce((a, b) => a + b);
        console.log("Genap x10 dijumlahkan:", result);
    </script>
</body>
</html>`
    }
  ]
};