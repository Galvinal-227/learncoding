export const chapter = {
  slug: "algorithms-greedy-algorithms",
  title: "Greedy Algorithms",
  description: "Pahami algoritma greedy - pilih optimal lokal untuk mencapai optimal global.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["algorithms-complexity-analysis"],
  tags: ["algoritma", "greedy", "optimasi", "heuristic"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Greedy Algorithm?

Algoritma yang membuat **pilihan optimal lokal** di setiap langkah dengan harapan mencapai **solusi optimal global**.

⚠️ Tidak selalu menghasilkan solusi optimal, tapi untuk beberapa masalah spesifik, greedy adalah solusi terbaik.

## Contoh: Coin Change

**Masalah:** Beri kembalian Rp27 dengan pecahan Rp10, Rp5, Rp1 (jumlah koin minimal).

\`\`\`javascript
function coinChange(coins, amount) {
    coins.sort((a, b) => b - a); // Urut terbesar dulu
    let result = [];
    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    return result; // [10, 10, 5, 1, 1] = 5 koin
}
\`\`\`

## Contoh: Activity Selection

Pilih aktivitas sebanyak mungkin tanpa overlap:

\`\`\`javascript
function activitySelection(activities) {
    // Urutkan berdasarkan waktu selesai
    activities.sort((a, b) => a.end - b.end);
    
    const selected = [activities[0]];
    let lastEnd = activities[0].end;
    
    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastEnd) {
            selected.push(activities[i]);
            lastEnd = activities[i].end;
        }
    }
    return selected;
}
\`\`\`

## Algoritma Greedy Terkenal

| Algoritma | Masalah |
|-----------|---------|
| Kruskal | Minimum Spanning Tree |
| Prim | Minimum Spanning Tree |
| Dijkstra | Shortest Path |
| Huffman | Data Compression |

## Kapan Greedy Optimal?

✅ Coin Change (dengan pecahan standar)
✅ Activity Selection
✅ Minimum Spanning Tree
✅ Huffman Coding

❌ Knapsack (butuh DP)
❌ Shortest path dengan negative edge
  `,

  quiz: [
    { question: "Apa itu greedy algorithm?", options: ["Algoritma tercepat", "Pilih optimal lokal untuk capai optimal global", "Algoritma acak", "Algoritma sorting"], correctAnswer: 1 },
    { question: "Apakah greedy selalu menghasilkan solusi optimal?", options: ["Ya, selalu", "Tidak, hanya untuk masalah tertentu", "Ya, jika data besar", "Tergantung bahasa"], correctAnswer: 1 }
  ],

  codeExamples: []
};