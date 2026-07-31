export const chapter = {
  slug: "figma-interface",
  title: "Interface & Workspace",
  description: "Kenali antarmuka Figma: toolbar, layers panel, properties panel, dan shortcuts.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["figma-introduction"],
  tags: ["figma", "interface", "workspace", "tools"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Layout Figma

\`\`\`
┌─────────────────────────────────────────────────┐
│  Toolbar (atas)                                  │
│  [Main Menu] [Tools] [View Options] [Share]     │
├──────────┬──────────────────────┬───────────────┤
│          │                      │               │
│  Layers  │                      │   Properties  │
│  Panel   │      CANVAS          │   Panel       │
│  (kiri)  │                      │   (kanan)     │
│          │                      │               │
└──────────┴──────────────────────┴───────────────┘
\`\`\`

## Toolbar Utama

| Tool | Shortcut | Fungsi |
|------|----------|--------|
| **Move** | V | Pindah/select |
| **Frame** | F | Buat artboard |
| **Rectangle** | R | Kotak |
| **Ellipse** | O | Lingkaran |
| **Line** | L | Garis |
| **Pen** | P | Vector path |
| **Text** | T | Teks |
| **Hand** | H | Pan canvas |
| **Comment** | C | Komentar |

## Essential Shortcuts

\`\`\`
V       → Move tool
F       → Frame
R       → Rectangle
T       → Text
Ctrl+G  → Group
Ctrl+D  → Duplicate
Ctrl+/  → Search commands
Alt     → Measure distance
Ctrl+\\  → Show/Hide UI
\`\`\`

## Layers Panel

- **Pages**: Halaman terpisah dalam 1 file
- **Frames**: Artboard/container
- **Groups**: Group elemen
- **Layers**: Setiap object (shape, text, image)

## Properties Panel

- **Design**: Warna, typography, effects
- **Prototype**: Interactions, animations
- **Inspect**: Code, measurements (Dev Mode)
  `,

  quiz: [
    { question: "Shortcut Frame tool?", options: ["R", "F", "T", "V"], correctAnswer: 1 },
    { question: "Shortcut Move tool?", options: ["M", "V", "G", "H"], correctAnswer: 1 }
  ],

  codeExamples: []
};