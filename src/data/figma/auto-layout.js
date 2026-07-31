export const chapter = {
  slug: "figma-auto-layout",
  title: "Auto Layout",
  description: "Kuasai Auto Layout - Flexbox-nya Figma untuk layout responsif.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["figma-frames"],
  tags: ["figma", "auto-layout", "flexbox", "responsive"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Auto Layout = CSS Flexbox

Auto Layout membuat container yang **otomatis menyesuaikan** saat konten berubah.

## Properties Auto Layout

| Property | Opsi | Mirip CSS |
|----------|------|-----------|
| Direction | Horizontal / Vertical | flex-direction |
| Gap | Number | gap |
| Padding | Top, Right, Bottom, Left | padding |
| Alignment | Start, Center, End | align-items |
| Distribution | Packed, Space Between | justify-content |
| Resizing | Fixed, Hug, Fill | width/height |

## Hug vs Fill

- **Hug contents**: Ukuran mengikuti konten (fit-content)
- **Fill container**: Isi penuh parent (100%)
- **Fixed**: Ukuran tetap (px)

## Contoh: Button dengan Auto Layout

\`\`\`
Frame (Auto Layout)
├── Padding: 12px 24px
├── Gap: 8px
├── Direction: Horizontal
├── Alignment: Center
└── Resizing: Hug contents

Isi:
[Icon] [Text]
\`\`\`

## Tips

- ✅ Auto Layout untuk: button, card, list, navbar
- ✅ Nest auto layout untuk layout kompleks
- ✅ Hug untuk komponen yang ukurannya dinamis
- ✅ Fill untuk child yang harus penuh
  `,

  quiz: [
    { question: "Auto Layout mirip CSS?", options: ["Grid", "Flexbox", "Position", "Float"], correctAnswer: 1 },
    { question: "Hug contents artinya?", options: ["Fixed size", "Ukuran ikut konten", "Full parent", "Hidden"], correctAnswer: 1 }
  ],

  codeExamples: []
};