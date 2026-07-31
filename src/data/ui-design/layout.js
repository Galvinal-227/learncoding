export const chapter = {
  slug: "ui-design-layout",
  title: "Layout & Grid",
  description: "Bangun layout yang terstruktur dengan grid system dan visual hierarchy.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["ui-design-introduction"],
  tags: ["ui-design", "layout", "grid", "spacing"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Grid System

Grid adalah **struktur kolom** yang membantu alignment konsisten.

## Common Grid Systems

| Grid | Columns | Use Case |
|------|---------|----------|
| 4-col | Mobile | Simple mobile apps |
| 8-col | Tablet | Tablet, small desktop |
| 12-col | Desktop | Most common (Bootstrap) |
| 24-col | Desktop | Ant Design |

## CSS Grid Layout

\`\`\`css
/* 12-column grid */
.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

.col-6 { grid-column: span 6; }  /* 50% */
.col-4 { grid-column: span 4; }  /* 33% */
.col-3 { grid-column: span 3; }  /* 25% */
\`\`\`

## Visual Hierarchy

| Technique | Effect |
|-----------|--------|
| **Size** | Besar = penting |
| **Color** | Kontras = menonjol |
| **Position** | Atas = prioritas |
| **Whitespace** | Isolasi = fokus |
| **Alignment** | Pattern = readable |

## Common Layout Patterns

### F-Pattern (Text-heavy)
\`\`\`
┌──────────────────────┐
│ Header               │
├──────────┬───────────┤
│ Nav      │ Content   │
│          │           │
│          │           │
└──────────┴───────────┘
└ Footer ──────────────┘
\`\`\`

### Z-Pattern (Landing page)
\`\`\`
┌──────────────────────┐
│ Logo      [CTA]      │ ← Scan horizontal
├──────────────────────┤
│ Hero Image           │
├──────────────────────┤
│ Feature 1 Feature 2  │ ← Scan horizontal
└──────────────────────┘
\`\`\`

## Responsive Design

\`\`\`css
/* Mobile first */
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}
\`\`\`
  `,

  quiz: [
    { question: "12-column grid?", options: ["Mobile only", "Most common desktop grid", "Print only", "Not used"], correctAnswer: 1 },
    { question: "F-Pattern?", options: ["Gaming UI", "Text-heavy pages (blog, article)", "Dashboard", "Mobile only"], correctAnswer: 1 }
  ],

  codeExamples: []
};