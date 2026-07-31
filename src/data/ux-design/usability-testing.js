export const chapter = {
  slug: "ux-design-usability-testing",
  title: "Usability Testing",
  description: "Uji produk dengan user nyata untuk menemukan masalah.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ux-design-wireframing"],
  tags: ["ux-design", "usability", "testing", "observation"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Usability Testing?

Usability testing adalah **mengobservasi user nyata** saat menggunakan produk untuk menemukan masalah usability.

## Testing Methods

| Method | Sample | Waktu | Kapan |
|--------|--------|-------|-------|
| **Moderated** | 5 users | 30-60 min | Sepanjang development |
| **Unmoderated** | 20-50 users | Async | Validasi cepat |
| **Guerrilla** | Random people | 10-15 min | Early stage |
| **A/B Testing** | 1000+ users | Days-weeks | Optimization |

## Test Script Template

\`\`\`
1. Introduction: "Terima kasih sudah hadir. Kami sedang menguji..."
2. Pre-test questions: "Seberapa sering Anda..."
3. Tasks: "Coba daftar akun baru"
4. Think aloud: "Tolong ceritakan apa yang Anda pikirkan"
5. Post-test: "Bagaimana pengalaman Anda?"
\`\`\`

## Key Metrics

| Metric | Deskripsi |
|--------|-----------|
| **Success Rate** | % user menyelesaikan task |
| **Time on Task** | Waktu untuk menyelesaikan |
| **Error Rate** | Jumlah kesalahan |
| **SUS Score** | System Usability Scale (0-100) |

## 5 Users Rule (Nielsen)

\`\`\`
5 users cukup untuk menemukan 85% usability problems.
Lebih dari 5 = diminishing returns.
\`\`\`

## Tools

| Tool | Type |
|------|------|
| **Maze** | Unmoderated testing |
| **UserTesting** | Moderated + unmoderated |
| **Lookback** | Moderated with recording |
| **Hotjar** | Heatmaps + recordings |
\`\`\`
  `,

  quiz: [
    { question: "Usability test?", options: ["Guess work", "Observe real users using product", "Survey only", "Internal review"], correctAnswer: 1 },
    { question: "5 users rule?", options: ["Random", "5 users find 85% of problems (Nielsen)", "50 users needed", "1 user enough"], correctAnswer: 1 }
  ],

  codeExamples: []
};