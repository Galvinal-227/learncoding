export const chapter = {
  slug: "figma-introduction",
  title: "Pengenalan Figma",
  description: "Pahami apa itu Figma dan kenapa jadi tools UI/UX design nomor 1.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["figma", "ui-design", "ux", "prototyping"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Figma?

Figma adalah **cloud-based design tool** untuk UI/UX design, prototyping, dan collaboration. Semua berjalan di browser (ada juga desktop app).

## Kenapa Figma?

- 🌐 **Browser-based** - Tidak perlu install, akses di mana saja
- 👥 **Real-time collaboration** - Multiple designer kerja bareng (seperti Google Docs!)
- 🧩 **Components & Variants** - Design system yang powerful
- 🔄 **Auto Layout** - Flexbox-nya Figma, responsif
- 🎯 **Prototyping** - Buat prototype interaktif tanpa coding
- 📐 **Dev Mode** - Developer bisa inspect code (CSS, SwiftUI, Compose)
- 🆓 **Free tier** - 3 project, unlimited collaborators

## Figma vs Tools Lain

| | Figma | Sketch | Adobe XD |
|---|-------|--------|----------|
| Platform | Browser + Desktop | Mac only | Mac + Windows |
| Collaboration | Real-time | Via plugin | Via cloud |
| Components | ✅ Powerful | ✅ | ✅ |
| Prototyping | ✅ Advanced | ✅ Basic | ✅ |
| Dev handoff | ✅ Built-in | Via plugin | ✅ |
| Price | Free tier | $99/year | Free tier |

## Kenapa Developer Perlu Belajar Figma?

- 🎨 **Baca design specs** - Ukuran, warna, spacing, font
- 📐 **Export assets** - SVG, PNG untuk development
- 🔍 **Inspect mode** - Lihat CSS, values, measurements
- 🤝 **Kolaborasi** - Diskusi langsung di design file
- 🚀 **Prototype review** - Test flow sebelum coding
  `,

  quiz: [
    { question: "Figma berjalan di?", options: ["Desktop only", "Browser + Desktop", "Mobile only", "Terminal"], correctAnswer: 1 },
    { question: "Figma vs Sketch?", options: ["Sama", "Figma: browser, real-time collab; Sketch: Mac only", "Sketch lebih murah", "Figma deprecated"], correctAnswer: 1 },
    { question: "Dev Mode untuk?", options: ["Design", "Developer inspect code & specs", "Prototyping", "Animation"], correctAnswer: 1 }
  ],

  codeExamples: []
};