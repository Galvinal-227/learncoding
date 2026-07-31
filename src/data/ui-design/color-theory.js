export const chapter = {
  slug: "ui-design-color-theory",
  title: "Color Theory",
  description: "Pahami teori warna untuk UI: palette, contrast, accessibility, dan psychology.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["ui-design-introduction"],
  tags: ["ui-design", "color", "palette", "contrast"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Color Systems

| Format | Contoh | Use |
|--------|--------|-----|
| **HEX** | #3B82F6 | Web (CSS) |
| **RGB** | rgb(59, 130, 246) | CSS |
| **HSL** | hsl(217, 91%, 60%) | Intuitive |
| **OKLCH** | oklch(0.62 0.19 255) | Modern CSS |

## Color Palette (60-30-10 Rule)

\`\`\`
60% - Dominant (background, neutral)
30% - Secondary (sections, cards)
10% - Accent (CTA, highlights)
\`\`\`

## Contoh Palette

\`\`\`css
:root {
    /* Primary (10%) */
    --primary: #3B82F6;
    --primary-dark: #2563EB;
    --primary-light: #93C5FD;
    
    /* Secondary (30%) */
    --secondary: #8B5CF6;
    
    /* Neutrals (60%) */
    --bg: #FFFFFF;
    --surface: #F9FAFB;
    --border: #E5E7EB;
    --text: #111827;
    --text-light: #6B7280;
    
    /* Semantic */
    --success: #10B981;
    --warning: #F59E0B;
    --error: #EF4444;
    --info: #3B82F6;
}
\`\`\`

## Color Accessibility (WCAG)

| Level | Normal Text | Large Text |
|-------|------------|------------|
| **AA** | 4.5:1 | 3:1 |
| **AAA** | 7:1 | 4.5:1 |

## Tools

- **Coolors.co** - Generate palette
- **Color.review** - Check contrast
- **Adobe Color** - Color wheel
- **Tailwind CSS Colors** - Pre-made palette
  `,

  quiz: [
    { question: "60-30-10 rule?", options: ["Random", "60% dominant, 30% secondary, 10% accent", "All equal", "No rule"], correctAnswer: 1 },
    { question: "WCAG AA contrast?", options: ["2:1", "4.5:1", "7:1", "1:1"], correctAnswer: 1 }
  ],

  codeExamples: []
};