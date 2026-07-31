export const chapter = {
  slug: "algorithms-searching",
  title: "Searching Algorithms",
  description: "Kuasai Linear Search dan Binary Search untuk mencari data secara efisien.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["algorithms-complexity-analysis"],
  tags: ["algoritma", "searching", "binary", "linear"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Linear Search

Cek satu per satu. Sederhana, tapi lambat untuk data besar.

\`\`\`javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// O(n) time, O(1) space
\`\`\`

## Binary Search ⭐

Hanya untuk **data terurut**. Bagi dua terus-menerus.

### Iteratif
\`\`\`javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// O(log n) time, O(1) space
\`\`\`

### Rekursif
\`\`\`javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    return binarySearchRecursive(arr, target, left, mid - 1);
}
// O(log n) time, O(log n) space (call stack)
\`\`\`

## Binary Search Variations

### Find First Occurrence
\`\`\`javascript
function findFirst(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Cari ke kiri
        } else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}
\`\`\`

## Perbandingan

| | Linear | Binary |
|---|--------|--------|
| Kompleksitas | O(n) | O(log n) |
| Data harus terurut? | ❌ | ✅ |
| Implementasi | Sangat mudah | Mudah |
| n=1.000.000 | 1.000.000 langkah | ~20 langkah |
  `,

  quiz: [
    { question: "Syarat Binary Search?", options: ["Data random", "Data harus terurut", "Data kecil", "Data string"], correctAnswer: 1 },
    { question: "Binary search pada 1 juta data butuh berapa langkah?", options: ["1 juta", "~500 ribu", "~20", "~1000"], correctAnswer: 2, explanation: "log₂(1.000.000) ≈ 20 langkah." }
  ],

  codeExamples: []
};