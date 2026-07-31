export const chapter = {
  slug: "ux-design-user-research",
  title: "User Research",
  description: "Metode riset user: interview, survey, observation, dan analytics.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ux-design-introduction"],
  tags: ["ux-design", "research", "interview", "survey"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Why User Research?

Tanpa riset = asumsi. Riset = **data-driven decisions**.

## Research Methods

### Qualitative (Kenapa & Bagaimana)
| Method | Deskripsi | Waktu |
|--------|-----------|-------|
| **User Interview** | 1-on-1 deep conversation | 30-60 menit |
| **Usability Test** | Observasi user pakai produk | 30-60 menit |
| **Focus Group** | Diskusi group 5-10 orang | 1-2 jam |
| **Diary Study** | User catat pengalaman | 1-4 minggu |

### Quantitative (Berapa Banyak)
| Method | Deskripsi | Sample |
|--------|-----------|--------|
| **Survey** | Kuesioner online | 50-1000+ |
| **Analytics** | Data usage (GA, Mixpanel) | All users |
| **A/B Testing** | Bandingkan 2 versi | 1000+ |
| **Heatmaps** | Di mana user klik/scroll | All users |

## Interview Questions Template

\`\`\`
1. Ceritakan tentang diri Anda dan pekerjaan Anda
2. Bagaimana Anda [melakukan task X] saat ini?
3. Apa tantangan terbesar dalam [task X]?
4. Tools apa yang Anda gunakan?
5. Jika ada 1 hal yang bisa diubah, apa itu?
\`\`\`

## Survey Tips

\`\`\`
✅ Pertanyaan singkat & jelas
✅ Max 10-15 pertanyaan
✅ Mix open + closed questions
✅ Hindari leading questions
✅ Pilot test dulu ke 5 orang
\`\`\`
  `,

  quiz: [
    { question: "User interview?", options: ["Survey massal", "1-on-1 deep conversation", "A/B test", "Heatmap"], correctAnswer: 1 },
    { question: "Qualitative vs Quantitative?", options: ["Same", "Qual: why/how; Quant: how many", "Quant: why", "Both same"], correctAnswer: 1 }
  ],

  codeExamples: []
};