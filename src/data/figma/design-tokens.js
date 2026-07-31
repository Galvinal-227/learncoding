export const chapter = {
  slug: "figma-design-tokens",
  title: "Design Tokens & Variables",
  description: "Kelola design tokens, variables, dan styles untuk design system yang konsisten.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["figma-components"],
  tags: ["figma", "design-tokens", "variables", "styles"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Design Tokens?

Design tokens adalah **variabel** untuk menyimpan nilai design (warna, spacing, font). Seperti CSS custom properties.

## Styles (Cara Lama)

\`\`\`
- Color Styles: Primary, Secondary, Text
- Text Styles: H1, H2, Body, Caption
- Effect Styles: Shadow, Blur
- Layout Grid Styles
\`\`\`

## Variables (Cara Baru - 2023+)

\`\`\`
- Color variables
- Number variables (spacing, radius)
- String variables
- Boolean variables
\`\`\`

### Variable Collections
\`\`\`
Collection: "Primitives"
├── blue-500: #3B82F6
├── blue-600: #2563EB
└── ...

Collection: "Semantic" (alias ke Primitives)
├── primary: blue-500
├── primary-hover: blue-600
└── ...
\`\`\`

## Modes (Dark/Light Theme)

\`\`\`
Collection: "Colors"
├── Mode: Light
│   ├── background: #FFFFFF
│   └── text: #1A1A1A
└── Mode: Dark
    ├── background: #1A1A1A
    └── text: #FFFFFF
\`\`\`

## Sync ke Code

- **Tokens Studio** plugin → export ke JSON/CSS/SCSS
- **Style Dictionary** → transform ke platform-specific
  `,

  quiz: [
    { question: "Variables untuk?", options: ["Hiasan", "Simpan nilai reusable (warna, spacing)", "Export", "Prototype"], correctAnswer: 1 },
    { question: "Modes untuk?", options: ["Print", "Dark/Light theme switching", "Mobile", "Tablet"], correctAnswer: 1 }
  ],

  codeExamples: []
};