export const chapter = {
  slug: "algorithms-sorting",
  title: "Sorting Algorithms",
  description: "Pelajari algoritma pengurutan: Bubble, Selection, Insertion, Merge, Quick sort.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["algorithms-complexity-analysis"],
  tags: ["algoritma", "sorting", "bubble", "quick", "merge"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Algoritma Sorting

Sorting adalah algoritma paling fundamental dalam computer science. Memilih sorting yang tepat bisa jadi pembeda di interview.

## Perbandingan

| Algoritma | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ |

## 1. Bubble Sort

Paling sederhana, bandingkan dan tukar pasangan.

\`\`\`javascript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Optimasi: sudah urut
    }
    return arr;
}
\`\`\`

## 2. Selection Sort

Cari yang terkecil, taruh di depan.

\`\`\`javascript
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
\`\`\`

## 3. Insertion Sort

Ambil satu per satu, sisipkan ke posisi yang tepat.

\`\`\`javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
\`\`\`

## 4. Merge Sort (Divide & Conquer) ⭐

Bagi dua, urutkan, gabungkan.

\`\`\`javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}
\`\`\`

## 5. Quick Sort ⭐ (Paling Cepat Rata-rata)

Pilih pivot, pisah kecil dan besar, rekursi.

\`\`\`javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
\`\`\`

## Kapan Pakai?

\`\`\`
Data kecil (<50)       → Insertion Sort
Data besar, stabil     → Merge Sort
Data besar, in-place   → Quick Sort
Hampir terurut         → Insertion Sort
Built-in (praktis)     → Array.sort((a,b)=>a-b)
\`\`\`
  `,

  quiz: [
    { question: "Kompleksitas rata-rata Merge Sort?", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correctAnswer: 1 },
    { question: "Algoritma sorting paling cepat rata-rata?", options: ["Bubble", "Insertion", "Quick Sort", "Selection"], correctAnswer: 2 },
    { question: "Mana yang stable sort?", options: ["Quick Sort", "Merge Sort", "Selection Sort", "Semua"], correctAnswer: 1, explanation: "Merge Sort menjaga urutan relatif elemen yang sama (stable). Quick Sort tidak." }
  ],

  codeExamples: []
};