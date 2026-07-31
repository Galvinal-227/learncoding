export const chapter = {
  slug: "ui-design-typography",
  title: "Typography",
  description: "Pilih dan atur font untuk readability dan visual hierarchy.",
  icon: "SiFigma",
  color: "#F24E1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["ui-design-introduction"],
  tags: ["ui-design", "typography", "font", "text"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Font Categories

| Category | Contoh | Use Case |
|----------|--------|----------|
| **Sans-serif** | Inter, Roboto | Body text, UI |
| **Serif** | Merriweather, Georgia | Headings, blog |
| **Monospace** | JetBrains Mono, Fira Code | Code |
| **Display** | Playfair Display | Hero, branding |

## Typography Scale

\`\`\`css
:root {
    --text-xs: 0.75rem;    /* 12px */
    --text-sm: 0.875rem;   /* 14px */
    --text-base: 1rem;     /* 16px */
    --text-lg: 1.125rem;   /* 18px */
    --text-xl: 1.25rem;    /* 20px */
    --text-2xl: 1.5rem;    /* 24px */
    --text-3xl: 1.875rem;  /* 30px */
    --text-4xl: 2.25rem;   /* 36px */
}
\`\`\`

## Font Pairing

\`\`\`css
/* Popular pairs */
/* Inter + Merriweather */
h1, h2, h3 { font-family: 'Merriweather', serif; }
body { font-family: 'Inter', sans-serif; }

/* JetBrains Mono + Inter */
code { font-family: 'JetBrains Mono', monospace; }
body { font-family: 'Inter', sans-serif; }
\`\`\`

## Line Height

\`\`\`css
body { line-height: 1.6; }    /* Body text */
h1 { line-height: 1.2; }      /* Headings */
p { line-height: 1.7; }       /* Long paragraphs */
\`\`\`

## Google Fonts

\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
\`\`\`

## Best Practices

\`\`\`
✅ Max 2 font families per project
✅ Line length: 50-75 characters
✅ Font size min 16px for body
✅ Use relative units (rem, em)
✅ Font weight for hierarchy (not size only)
\`\`\`
  `,

  quiz: [
    { question: "Sans-serif for?", options: ["Code", "Body text, UI", "Headings only", "Print"], correctAnswer: 1 },
    { question: "Max font families?", options: ["Unlimited", "2 per project", "5", "1 only"], correctAnswer: 1 }
  ],

  codeExamples: []
};