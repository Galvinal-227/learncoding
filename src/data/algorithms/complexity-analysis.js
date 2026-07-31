export const chapter = {
  slug: "algorithms-complexity-analysis",
  title: "Complexity Analysis (Big O)",
  description: "Pahami Big O Notation untuk menganalisis efisiensi algoritma.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["algorithms-introduction"],
  tags: ["algoritma", "big-o", "kompleksitas", "analisis"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Big O Notation?

Big O adalah notasi matematika yang menggambarkan **batas atas** waktu/ruang yang dibutuhkan algoritma seiring pertumbuhan input (n).

## Kenapa Big O Penting?

- 📊 Membandingkan efisiensi algoritma
- 📈 Memprediksi performa untuk input besar
- 🎯 Memilih algoritma yang tepat

## Kompleksitas Waktu (Time Complexity)

Dari tercepat ke terlambat:

| Big O | Nama | Contoh | n=100 | n=1000 |
|-------|------|--------|-------|--------|
| **O(1)** | Constant | Akses array by index | 1 | 1 |
| **O(log n)** | Logarithmic | Binary search | ~7 | ~10 |
| **O(n)** | Linear | Loop sederhana | 100 | 1000 |
| **O(n log n)** | Linearithmic | Merge sort, Quick sort | ~664 | ~9966 |
| **O(n²)** | Quadratic | Nested loop, Bubble sort | 10.000 | 1.000.000 |
| **O(2ⁿ)** | Exponential | Fibonacci rekursif | ~10³⁰ | 💀 |

## Grafik Pertumbuhan

\`\`\`
Waktu
 ↑
 │                              O(2ⁿ) /
 │                                   /
 │                        O(n²)     /
 │                              ───/
 │                   O(n log n)───
 │              O(n)───────────
 │         O(log n)────────────
 │    O(1)─────────────────────
 └────────────────────────────→ n (ukuran input)
\`\`\`

## Contoh Perhitungan

### O(1) - Constant
\`\`\`javascript
function getFirst(arr) {
    return arr[0]; // Satu operasi selalu
}
\`\`\`

### O(n) - Linear
\`\`\`javascript
function sum(arr) {
    let total = 0;
    for (let num of arr) { // Loop n kali
        total += num;
    }
    return total;
}
\`\`\`

### O(n²) - Quadratic
\`\`\`javascript
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {        // n kali
        for (let j = 0; j < arr.length; j++) {    // n kali
            console.log(arr[i], arr[j]);           // n × n = n²
        }
    }
}
\`\`\`

### O(log n) - Logarithmic
\`\`\`javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {           // Membagi 2 setiap iterasi
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
\`\`\`

## Kompleksitas Ruang (Space Complexity)

\`\`\`javascript
// O(1) space - tidak buat data baru
function sum(arr) {
    let total = 0;
    for (let n of arr) total += n;
    return total;
}

// O(n) space - buat array baru
function double(arr) {
    return arr.map(n => n * 2); // Array baru ukuran n
}
\`\`\`

## Aturan Menghitung Big O

1. **Drop constants**: O(2n) → O(n)
2. **Drop non-dominants**: O(n² + n) → O(n²)
3. **Different inputs**: O(a + b) bukan O(n)
4. **Drop smaller terms**: O(n³ + n²) → O(n³)

## Cheatsheet

\`\`\`
Loop sederhana              → O(n)
Nested loop                 → O(n²)
Binary search               → O(log n)
Divide & conquer            → O(n log n)
Permutasi/kombinasi         → O(2ⁿ)
Akses array by index        → O(1)
Sorting (optimal)           → O(n log n)
\`\`\`
  `,

  quiz: [
    { question: "Loop sederhana satu kali sepanjang array memiliki kompleksitas?", options: ["O(1)", "O(n)", "O(n²)", "O(log n)"], correctAnswer: 1 },
    { question: "Binary search memiliki kompleksitas?", options: ["O(1)", "O(n)", "O(n²)", "O(log n)"], correctAnswer: 3, explanation: "Binary search membagi data menjadi 2 setiap iterasi, menghasilkan O(log n)." },
    { question: "Mana yang paling efisien untuk input besar?", options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"], correctAnswer: 3 }
  ],

  codeExamples: []
};