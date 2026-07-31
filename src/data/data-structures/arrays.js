export const chapter = {
  slug: "data-structures-arrays",
  title: "Arrays",
  description: "Array sebagai struktur data fundamental: operasi, kompleksitas, dan teknik.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["data-structures-introduction"],
  tags: ["data-structures", "array", "fundamental"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Array

Array adalah kumpulan elemen **terurut** yang disimpan di **lokasi memori berurutan (contiguous)**. Setiap elemen punya **index** (mulai dari 0).

## Karakteristik

| Operasi | Big O | Keterangan |
|---------|-------|------------|
| Access by index | O(1) | Langsung lompat ke alamat |
| Search (unsorted) | O(n) | Cek satu per satu |
| Insert di akhir | O(1)* | *Amortized (dynamic array) |
| Insert di awal/tengah | O(n) | Harus geser elemen |
| Delete di akhir | O(1) | |
| Delete di awal/tengah | O(n) | Harus geser elemen |

## Operasi Dasar JavaScript

\`\`\`javascript
const arr = [10, 20, 30, 40, 50];

// Access - O(1)
arr[2]; // 30

// Insert
arr.push(60);      // Akhir - O(1)
arr.unshift(0);    // Awal - O(n)
arr.splice(2, 0, 25); // Tengah - O(n)

// Delete
arr.pop();         // Akhir - O(1)
arr.shift();       // Awal - O(n)
arr.splice(2, 1);  // Tengah - O(n)

// Search
arr.indexOf(30);   // O(n)
arr.includes(20);  // O(n)
arr.find(x => x > 25); // O(n)
\`\`\`

## Teknik Penting

### Two Pointers
\`\`\`javascript
// Reverse array in-place
function reverse(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
\`\`\`

### Sliding Window
\`\`\`javascript
// Maximum sum subarray of size k
function maxSum(arr, k) {
    let maxSum = 0, windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
\`\`\`

### Prefix Sum
\`\`\`javascript
const prefix = [arr[0]];
for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i-1] + arr[i];
}
// Sum arr[2..5] = prefix[5] - prefix[1]
\`\`\`
  `,

  quiz: [
    { question: "Array access by index: Big O?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0 },
    { question: "Insert di awal array: Big O?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 1, explanation: "Harus menggeser semua elemen ke kanan." }
  ],

  codeExamples: []
};