export const chapter = {
  slug: "algorithms-divide-conquer",
  title: "Divide & Conquer",
  description: "Pahami strategi memecah masalah menjadi bagian kecil lalu menggabungkan solusinya.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["algorithms-recursion"],
  tags: ["algoritma", "divide-conquer", "merge-sort", "binary-search"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Divide & Conquer?

Strategi memecah masalah besar menjadi **sub-masalah yang lebih kecil**, menyelesaikannya, lalu **menggabungkan** solusinya.

## 3 Langkah

1. **Divide** - Bagi masalah jadi sub-masalah
2. **Conquer** - Selesaikan sub-masalah (rekursif)
3. **Combine** - Gabungkan solusi

## Contoh: Merge Sort

\`\`\`javascript
// Divide & Conquer in action
function mergeSort(arr) {
    // Base: jika 1 elemen, sudah terurut
    if (arr.length <= 1) return arr;
    
    // Divide: bagi 2
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    // Conquer & Combine: gabungkan yang sudah terurut
    return merge(left, right);
}
\`\`\`

## Algoritma Divide & Conquer Lainnya

| Algoritma | Divide | Combine | Kompleksitas |
|-----------|--------|---------|--------------|
| Merge Sort | Bagi 2 | Merge | O(n log n) |
| Quick Sort | Pivot partition | Concatenate | O(n log n) |
| Binary Search | Bagi 2 | Return | O(log n) |
| Karatsuba | Bagi angka | Multiply | O(n^1.58) |

## Ciri Khas Divide & Conquer

✅ Masalah bisa dipecah menjadi sub-masalah independen
✅ Solusi sub-masalah bisa digabungkan
✅ Biasanya rekursif
✅ Kompleksitas sering O(n log n)
  `,

  quiz: [
    { question: "3 langkah Divide & Conquer?", options: ["Sort, Search, Return", "Divide, Conquer, Combine", "Input, Process, Output", "Start, Loop, End"], correctAnswer: 1 },
    { question: "Contoh algoritma Divide & Conquer?", options: ["Bubble Sort", "Merge Sort", "Linear Search", "Selection Sort"], correctAnswer: 1 }
  ],

  codeExamples: []
};