export const chapter = {
  slug: "interview-whiteboarding",
  title: "Whiteboarding & Communication",
  description: "Teknik whiteboarding, komunikasi efektif, dan presentasi solusi.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["interview-technical-interviews"],
  tags: ["interview", "whiteboarding", "communication", "presentation"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Whiteboarding Tips

### Physical Whiteboard (On-site)
\`\`\`
✅ Tulis dari kiri ke kanan
✅ Sisakan ruang untuk revisi
✅ Tulis cukup besar (bisa dibaca)
✅ Gunakan warna berbeda (optional)
✅ Hapus yang tidak perlu (jangan berantakan)
\`\`\`

### Virtual Whiteboard (Remote)
\`\`\`
✅ Excalidraw / Miro / Google Jamboard
✅ Zoom annotation
✅ Shared editor (codesandbox)
✅ Screen share + diagram tool
\`\`\`

## Think Out Loud

Interviewer ingin melihat **PROSES BERPIKIR**, bukan cuma hasil akhir.

\`\`\`
❌ Diam 5 menit → "Ini solusinya"
✅ "Saya akan coba brute force dulu..."
✅ "Hmm, O(n²), bisa dioptimasi dengan HashMap..."
✅ "Edge case: array kosong → return []"
✅ "Saya pilih rekursi karena tree natural-nya recursive..."
\`\`\`

## Saat Stuck

\`\`\`
✅ Jujur: "Saya stuck di sini, boleh minta hint?"
✅ Mundur: "Mari kita lihat dari angle berbeda..."
✅ Simplify: "Jika input kecil/sorted, solusinya..."
✅ Contoh konkret: "Dengan input [1,2,3], output seharusnya..."
\`\`\`

## Komunikasi Efektif

\`\`\`
✅ Ringkas di awal, detail saat diminta
✅ "Apakah saya sudah menjawab pertanyaan?"
✅ Eye contact (virtual: lihat kamera)
✅ Antusias tapi tenang
✅ Akui jika tidak tahu (jangan ngarang!)
\`\`\`
  `,

  quiz: [
    { question: "Whiteboarding: paling penting?", options: ["Kecepatan", "Proses berpikir (think out loud)", "Hafalan kode", "Tulisan rapi"], correctAnswer: 1 },
    { question: "Saat stuck?", options: ["Pura-pura bisa", "Jujur + minta hint", "Diam saja", "Ganti soal"], correctAnswer: 1 }
  ],

  codeExamples: []
};