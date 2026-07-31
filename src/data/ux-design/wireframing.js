export const chapter = {
  slug: "ux-design-wireframing",
  title: "Wireframing",
  description: "Buat wireframe low-fidelity untuk struktur dan layout.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["ux-design-user-research"],
  tags: ["ux-design", "wireframe", "sketch", "layout"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Wireframe?

Wireframe adalah **sketsa low-fidelity** yang fokus pada **struktur dan layout**, bukan visual detail. Seperti blueprint rumah.

## Wireframe vs Mockup vs Prototype

| | Wireframe | Mockup | Prototype |
|---|----------|--------|-----------|
| Fidelity | Low | High | High |
| Warna | Grayscale | Full color | Full color |
| Interaksi | Static | Static | Clickable |
| Tujuan | Structure | Visual design | User testing |

## Tools

| Tool | Platform | Price |
|------|----------|-------|
| **Figma** | Browser | Free |
| **Balsamiq** | Desktop | $9/bln |
| **Excalidraw** | Browser | Free |
| **Pen & Paper** | Physical | Free! |

## Wireframe Elements

\`\`\`
┌──────────────────────────────────┐
│ [Logo]         [Menu] [Login]   │ ← Header
├──────────────────────────────────┤
│ ┌────────────┐  ┌──────────────┐ │
│ │ Sidebar    │  │ Main Content │ │
│ │ - Item 1   │  │              │ │
│ │ - Item 2   │  │ [Card] [Card]│ │
│ │ - Item 3   │  │ [Card] [Card]│ │
│ └────────────┘  └──────────────┘ │
├──────────────────────────────────┤
│          Footer                  │
└──────────────────────────────────┘
\`\`\`

## Best Practices

\`\`\`
✅ Start with pen & paper
✅ Focus on structure, not beauty
✅ Gunakan grayscale (hitam, putih, abu-abu)
✅ Jangan pakai warna atau gambar real
✅ Iterasi cepat, jangan perfeksionis
✅ Minta feedback sebelum lanjut mockup
\`\`\`
  `,

  quiz: [
    { question: "Wireframe fidelity?", options: ["High", "Low (structure only)", "Full color", "Interactive"], correctAnswer: 1 },
    { question: "Wireframe: warna?", options: ["Full color", "Grayscale (black, white, gray)", "Rainbow", "Gradient"], correctAnswer: 1 }
  ],

  codeExamples: []
};