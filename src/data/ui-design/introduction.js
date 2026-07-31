export const chapter = {
  slug: "ui-design-introduction",
  title: "Pengenalan UI Design",
  description: "Pahami apa itu UI Design, perbedaannya dengan UX, dan prinsip dasarnya.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["ui-design", "visual", "interface", "design"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu UI Design?

UI (User Interface) Design adalah **seni mendesain tampilan visual** aplikasi. Fokus pada **warna, tipografi, layout, ikon, spacing** - semua yang dilihat user.

## UI vs UX

| UI Design | UX Design |
|-----------|-----------|
| **Visual** (look) | **Functional** (feel) |
| Warna, font, ikon | User flow, research |
| "Terlihat bagus" | "Mudah digunakan" |
| Brand identity | Problem solving |
| Component design | Information architecture |

## Prinsip Dasar UI Design

| Prinsip | Deskripsi |
|---------|-----------|
| **Hierarchy** | Element penting lebih menonjol |
| **Consistency** | Pola yang sama di seluruh app |
| **Alignment** | Semua sejajar, tidak acak |
| **Contrast** | Membedakan elemen (warna, ukuran) |
| **Whitespace** | Ruang kosong = breathing room |
| **Simplicity** | Less is more |
| **Feedback** | Respons visual untuk aksi user |

## Tools UI Design

| Tool | Type | Price |
|------|------|-------|
| **Figma** | Browser + Desktop | Free tier |
| **Sketch** | Mac only | $99/year |
| **Adobe XD** | Desktop | Free tier |
| **Framer** | Browser | Free tier |
| **Penpot** | Open source | Free |

## UI Design Process

\`\`\`
1. Brief & Requirements
2. Research & Inspiration
3. Wireframes (low-fidelity)
4. Mockups (high-fidelity)
5. Prototype (interactive)
6. Developer Handoff
\`\`\`

## Kenapa Developer Perlu Belajar UI?

- 🎨 **Bisa bikin UI tanpa designer**
- 🤝 **Komunikasi lebih baik dengan designer**
- ⚡ **Implementasi lebih cepat (tahu apa yang mungkin)**
- 💼 **Skill yang dicari (full-stack = FE + BE + UI)**
  `,

  quiz: [
    { question: "UI vs UX?", options: ["Same", "UI: visual; UX: functional", "UX: visual", "No difference"], correctAnswer: 1 },
    { question: "Prinsip: whitespace?", options: ["Hiasan", "Breathing room (jarak antar elemen)", "Error", "Warna"], correctAnswer: 1 },
    { question: "Figma?", options: ["Code editor", "UI/UX design tool", "Database", "Framework"], correctAnswer: 1 }
  ],

  codeExamples: []
};