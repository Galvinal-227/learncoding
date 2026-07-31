export const chapter = {
  slug: "algorithms-dynamic-programming",
  title: "Dynamic Programming",
  description: "Kuasai DP - teknik optimasi dengan memoization dan tabulation.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["algorithms-recursion"],
  tags: ["algoritma", "dp", "memoization", "optimasi"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Dynamic Programming?

DP adalah teknik optimasi untuk masalah dengan **overlapping subproblems** dan **optimal substructure**. Simpan hasil perhitungan, jangan hitung ulang.

## Dua Pendekatan

### 1. Top-Down (Memoization)
Rekursi + cache hasil.

### 2. Bottom-Up (Tabulation)
Iterasi dari kasus terkecil ke besar.

## Contoh: Fibonacci

### Naive Recursion (O(2ⁿ)):
\`\`\`javascript
function fib(n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
\`\`\`

### Top-Down Memoization (O(n)):
\`\`\`javascript
function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
\`\`\`

### Bottom-Up Tabulation (O(n)):
\`\`\`javascript
function fib(n) {
    if (n <= 1) return n;
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Optimasi space O(1):
function fib(n) {
    if (n <= 1) return n;
    let prev2 = 0, prev1 = 1;
    for (let i = 2; i <= n; i++) {
        [prev2, prev1] = [prev1, prev1 + prev2];
    }
    return prev1;
}
\`\`\`

## Pola DP yang Sering Muncul

### 1. 0/1 Knapsack
\`\`\`
Diberikan N item dengan berat dan value.
Pilih item agar total value maksimal dengan batas berat W.
\`\`\`

### 2. Longest Common Subsequence
\`\`\`
Cari subsequence terpanjang yang muncul di dua string.
\`\`\`

### 3. Coin Change
\`\`\`
Cari jumlah minimum koin untuk mencapai jumlah tertentu.
\`\`\`

### 4. Climbing Stairs (LeetCode #70)
\`\`\`javascript
function climbStairs(n) {
    if (n <= 2) return n;
    let prev2 = 1, prev1 = 2;
    for (let i = 3; i <= n; i++) {
        [prev2, prev1] = [prev1, prev1 + prev2];
    }
    return prev1;
}
\`\`\`

## Kapan Menggunakan DP?

✅ Masalah bisa dipecah jadi sub-masalah
✅ Sub-masalah overlapping (dihitung berulang)
✅ Mencari optimal (maksimum/minimum)
✅ Mencari jumlah cara
  `,

  quiz: [
    { question: "Dua pendekatan DP?", options: ["Loop + if", "Top-down (memo) + Bottom-up (tabulation)", "Sort + search", "Divide + conquer"], correctAnswer: 1 },
    { question: "Kompleksitas Fibonacci dengan DP?", options: ["O(2ⁿ)", "O(n log n)", "O(n)", "O(1)"], correctAnswer: 2 },
    { question: "Kapan DP digunakan?", options: ["Semua masalah", "Masalah dengan overlapping subproblems", "Hanya sorting", "Hanya searching"], correctAnswer: 1 }
  ],

  codeExamples: []
};