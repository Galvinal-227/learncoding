export const chapter = {
  slug: "interview-technical-interviews",
  title: "Technical Interviews",
  description: "Strategi menghadapi technical interview: framework, cara menjawab, dan tips sukses.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["interview-introduction"],
  tags: ["interview", "technical", "coding", "strategy"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Framework UMPIRE

Gunakan framework terstruktur untuk menjawab soal coding:

| Step | Deskripsi | Waktu |
|------|-----------|-------|
| **U**nderstand | Pahami soal, tanya klarifikasi | 2-3 menit |
| **M**atch | Hubungkan dengan DS/algo yang relevan | 2-3 menit |
| **P**lan | Buat rencana/pseudocode | 3-5 menit |
| **I**mplement | Tulis kode | 15-20 menit |
| **R**eview | Test dengan contoh, cek edge cases | 5 menit |
| **E**valuate | Analisis time/space complexity | 2-3 menit |

## U - Understand (Pahami)

\`\`\`
✅ Tanya clarifying questions:
- "Apakah input selalu sorted?"
- "Apakah ada duplicate?"
- "Bagaimana handle input kosong/null?"
- "Ada batasan memory/time?"

✅ Ulangi soal dengan kata-kata sendiri
✅ Konfirmasi pemahaman ke interviewer
\`\`\`

## M - Match (Hubungkan)

\`\`\`
Kenali pola soal:
- Array/string → Two pointers, sliding window
- Graph/tree → DFS, BFS
- Optimization → Dynamic Programming, Greedy
- Top K → Heap
- Lookup cepat → Hash Map
- Recent/reverse → Stack
- Dependency/order → Topological Sort
\`\`\`

## P - Plan (Rencanakan)

\`\`\`
✅ Tulis pseudocode / jelaskan approach
✅ "Saya akan pakai HashMap untuk O(1) lookup..."
✅ Gambar diagram (tree, graph)
✅ Diskusikan trade-offs sebelum coding
\`\`\`

## I - Implement (Tulis Kode)

\`\`\`
✅ Bicara sambil menulis (THINK OUT LOUD!)
✅ Tulis clean code (nama variabel jelas)
✅ Modularize (extract ke function)
✅ Handle edge cases
✅ "Saya akan test dengan contoh ini..."
\`\`\`

## R - Review (Test)

\`\`\`
✅ Test dengan example input
✅ Test edge cases: empty, null, single, large
✅ Walk through kode baris per baris
✅ "Jika input [], output seharusnya [] → benar"
\`\`\`

## E - Evaluate (Analisis)

\`\`\`
✅ Time Complexity: O(n) karena...
✅ Space Complexity: O(1) karena...
✅ "Bisa dioptimasi dari O(n²) ke O(n) dengan HashMap"
✅ Diskusikan trade-offs
\`\`\`

## Common Mistakes

\`\`\`
❌ Langsung coding tanpa diskusi
❌ Diam saat menulis kode
❌ Tidak test setelah selesai
❌ Tidak mention complexity
❌ Panik saat stuck (tanya hint!)
❌ Over-engineer solusi
\`\`\`
  `,

  quiz: [
    { question: "UMPIRE: U?", options: ["Understand (pahami soal)", "Undo", "Update", "Use"], correctAnswer: 0 },
    { question: "Saat coding harus?", options: ["Diam", "Think out loud (bicara sambil coding)", "Cepat-cepat", "Hafal kode"], correctAnswer: 1 },
    { question: "Setelah selesai coding?", options: ["Langsung submit", "Review + test + analisis complexity", "Diam", "Minta pujian"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Contoh UMPIRE: Two Sum",
      language: "text",
      code: `// U - Understand
"Given array nums dan target, return indices of two numbers 
that add up to target. Asumsi: exactly one solution, 
tidak boleh pakai element yang sama 2x."
Q: Apakah array sorted? → Tidak
Q: Ada duplicate? → Mungkin
Q: Boleh return indices dalam urutan apa? → Ya

// M - Match
"Lookup cepat → HashMap untuk O(n)"

// P - Plan
"1. Iterasi array
2. Cek apakah (target - nums[i]) ada di HashMap
3. Jika ya → return [index_sekarang, index_di_map]
4. Jika tidak → simpan nums[i] → i ke HashMap"

// I - Implement
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
}

// R - Review
Test: nums=[2,7,11,15], target=9 → [0,1] ✓
Test: nums=[3,3], target=6 → [0,1] ✓
Test: nums=[], target=5 → [] ✓

// E - Evaluate
Time: O(n) - single pass
Space: O(n) - HashMap worst case simpan semua`
    }
  ]
};