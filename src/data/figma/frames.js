export const chapter = {
  slug: "figma-frames",
  title: "Frames & Layout",
  description: "Kuasai frames, constraints, grids, dan layout di Figma.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["figma-interface"],
  tags: ["figma", "frames", "layout", "grid"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Frame = Artboard

Frame adalah container utama. Bisa untuk: halaman, komponen, section.

\`\`\`
Shortcut: F → pilih preset (iPhone, Desktop, dll)
\`\`\`

## Layout Grids

### Grid (Kotak-kotak)
\`\`\`
Properties → Layout Grid → Grid
- Size: 8px (standar spacing)
\`\`\`

### Columns (Seperti Bootstrap)
\`\`\`
Properties → Layout Grid → Columns
- Count: 12
- Margin: 20px
- Gutter: 16px
\`\`\`

### Rows
\`\`\`
Properties → Layout Grid → Rows
- Count: auto
- Height: 100px
\`\`\`

## Constraints (Responsive)

\`\`\`
┌──────────────────────┐
│  Left │ Right │ Center│
│  Top  │ Bottom│ Scale │
└──────────────────────┘
\`\`\`

- **Left + Top**: Fixed position
- **Left + Right**: Stretch horizontal
- **Center**: Tetap di tengah
- **Scale**: Ikut resize frame

## Tips

- ✅ Gunakan 8px grid system
- ✅ Frame untuk setiap screen/modal
- ✅ Constraints untuk responsif
- ✅ Group layer yang berhubungan
  `,

  quiz: [
    { question: "Shortcut Frame?", options: ["R", "F", "T", "V"], correctAnswer: 1 },
    { question: "Columns grid standar?", options: ["4", "8", "12", "16"], correctAnswer: 2 }
  ],

  codeExamples: []
};