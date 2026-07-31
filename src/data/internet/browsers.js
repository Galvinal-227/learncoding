export const chapter = {
  slug: "internet-browsers",
  title: "Browser & Rendering",
  description: "Cara kerja browser: rendering engine, JavaScript engine, dan proses menampilkan halaman.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["internet-how-internet-works"],
  tags: ["internet", "browser", "rendering", "engine"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Rendering Pipeline

\`\`\`
HTML ──▶ DOM Tree ──┐
                     ├──▶ Render Tree ──▶ Layout ──▶ Paint ──▶ Display
CSS  ──▶ CSSOM ─────┘
\`\`\`

## Browser Engines

| Browser | Rendering Engine | JS Engine |
|---------|-----------------|-----------|
| Chrome | Blink | V8 |
| Firefox | Gecko | SpiderMonkey |
| Safari | WebKit | JavaScriptCore |
| Edge | Blink | V8 |

## Critical Rendering Path

\`\`\`
1. HTML → DOM Tree
2. CSS → CSSOM Tree
3. DOM + CSSOM = Render Tree
4. Layout (hitung posisi & ukuran)
5. Paint (gambar piksel)
6. Composite (gabung layers → layar)
\`\`\`
  `,

  quiz: [
    { question: "Chrome JS engine?", options: ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"], correctAnswer: 1 },
    { question: "DOM + CSSOM = ?", options: ["Layout", "Render Tree", "Paint", "Composite"], correctAnswer: 1 }
  ],

  codeExamples: []
};