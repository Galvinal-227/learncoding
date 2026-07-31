export const chapter = {
  slug: "ux-design-information-architecture",
  title: "Information Architecture",
  description: "Organisir konten dengan Information Architecture untuk navigasi yang intuitif.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["ux-design-user-journey"],
  tags: ["ux-design", "ia", "navigation", "sitemap"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Information Architecture (IA)?

IA adalah **seni mengorganisir dan memberi label** konten sehingga user bisa menemukan informasi dengan mudah.

## IA Components

| Component | Deskripsi |
|-----------|-----------|
| **Organization** | Bagaimana konten dikelompokkan |
| **Labeling** | Nama yang mudah dipahami |
| **Navigation** | Cara berpindah antar konten |
| **Search** | Cara mencari konten spesifik |

## Sitemap

\`\`\`
Home
├── About
│   ├── Team
│   └── History
├── Products
│   ├── Category A
│   │   ├── Product 1
│   │   └── Product 2
│   └── Category B
├── Blog
├── Pricing
└── Contact
\`\`\`

## Navigation Patterns

| Pattern | Deskripsi | Use Case |
|---------|-----------|----------|
| **Top Nav** | Horizontal bar | Simple sites (<5 items) |
| **Sidebar** | Vertical menu | Complex apps |
| **Hamburger** | Hidden menu | Mobile |
| **Breadcrumb** | Path trail | Deep hierarchies |
| **Tab** | Category switching | Content filtering |

## Card Sorting

Teknik riset untuk menentukan IA:

\`\`\`
1. Tulis fitur/konten di kartu
2. Minta user kelompokkan kartu
3. Minta user beri nama kelompok
4. Analisis pola pengelompokan
\`\`\`

## Best Practices

\`\`\`
✅ 7±2 items per level (Miller's Law)
✅ Label jelas & konsisten
✅ Deep vs Flat: Flat lebih baik (less clicks)
✅ Search untuk situs besar (>100 halaman)
✅ Test dengan real users (card sorting)
\`\`\`
  `,

  quiz: [
    { question: "IA?", options: ["AI", "Information Architecture (organize content)", "Internet access", "Interface analysis"], correctAnswer: 1 },
    { question: "Card sorting?", options: ["Game", "Research method to organize content", "Coding technique", "Design tool"], correctAnswer: 1 }
  ],

  codeExamples: []
};