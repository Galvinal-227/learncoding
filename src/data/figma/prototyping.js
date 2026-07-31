export const chapter = {
  slug: "figma-prototyping",
  title: "Prototyping",
  description: "Buat prototype interaktif dengan navigasi, animasi, dan conditional logic.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["figma-components"],
  tags: ["figma", "prototyping", "interaction", "animation"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Prototyping di Figma

Hubungkan frame untuk membuat **navigasi interaktif** yang bisa di-preview.

## Basic Interaction

\`\`\`
1. Pilih element (button, card)
2. Tab "Prototype" di sidebar kanan
3. Drag "⊕" ke target frame
4. Set:
   - Trigger: On Click / On Hover / On Press
   - Action: Navigate to / Open Overlay / Swap Component
   - Animation: Instant / Dissolve / Smart Animate / Push
\`\`\`

## Animation Types

| Animation | Effect |
|-----------|--------|
| **Instant** | Langsung pindah |
| **Dissolve** | Fade in/out |
| **Smart Animate** | Transisi halus (sama nama layer) |
| **Push** | Slide dari arah |
| **Move In/Out** | Slide + overlay |
| **Slide In/Out** | Slide saja |

## Smart Animate

\`\`\`
Syarat:
- Nama layer HARUS SAMA di kedua frame
- Perubahan opacity, position, size, rotation → animasi halus
- Cocok untuk: tab switch, expand/collapse, loading
\`\`\`

## Overlay

\`\`\`
- Modal / Dialog
- Tooltip
- Dropdown menu
- Bottom sheet
\`\`\`

## Scroll & Fixed Position

- **Overflow scrolling**: Frame → Prototype → Overflow: Vertical/Horizontal
- **Fixed position**: Element → Constraints → Fix position when scrolling
  `,

  quiz: [
    { question: "Smart Animate syarat?", options: ["Warna sama", "Nama layer sama di kedua frame", "Ukuran sama", "Jarak sama"], correctAnswer: 1 },
    { question: "Overlay untuk?", options: ["Background", "Modal, tooltip, dropdown", "Full page", "Print"], correctAnswer: 1 }
  ],

  codeExamples: []
};