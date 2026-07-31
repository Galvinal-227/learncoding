export const chapter = {
  slug: "ui-design-spacing",
  title: "Spacing & Sizing",
  description: "Atur spacing dan sizing yang konsisten dengan spacing scale.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["ui-design-layout"],
  tags: ["ui-design", "spacing", "padding", "margin"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Spacing Scale (8px System)

\`\`\`css
:root {
    --space-1: 4px;    /* 0.25rem */
    --space-2: 8px;    /* 0.5rem */
    --space-3: 12px;   /* 0.75rem */
    --space-4: 16px;   /* 1rem */
    --space-5: 20px;   /* 1.25rem */
    --space-6: 24px;   /* 1.5rem */
    --space-8: 32px;   /* 2rem */
    --space-10: 40px;  /* 2.5rem */
    --space-12: 48px;  /* 3rem */
    --space-16: 64px;  /* 4rem */
}
\`\`\`

## Why 8px System?

- ✅ Mudah diingat (kelipatan 8)
- ✅ Konsisten di seluruh app
- ✅ Responsif dengan rem units
- ✅ Standar industri (Google, Airbnb)

## Padding vs Margin

| Padding | Margin |
|---------|--------|
| Di dalam element | Di luar element |
| Background ikut | Background tidak |
| Tidak collapse | Bisa collapse |
| Gunakan untuk spacing internal | Gunakan untuk spacing antar element |

## Proximity Principle

\`\`\`
Item terkait → dekat (small gap)
Group berbeda → jauh (large gap)

┌────────────────────┐
│ Group A            │
│ [Item] [Item]      │ ← gap-2 (8px)
│                    │
│                    │ ← gap-6 (24px)
│                    │
│ Group B            │
│ [Item] [Item]      │ ← gap-2 (8px)
└────────────────────┘
\`\`\`

## Responsive Spacing

\`\`\`css
.section {
    padding: clamp(20px, 5vw, 60px) clamp(16px, 3vw, 40px);
}
\`\`\`
  `,

  quiz: [
    { question: "8px system?", options: ["Random", "Spacing scale based on multiples of 8", "Only for mobile", "Typography"], correctAnswer: 1 },
    { question: "Padding vs Margin?", options: ["Same", "Padding: inside; Margin: outside", "Margin: inside", "No difference"], correctAnswer: 1 }
  ],

  codeExamples: []
};