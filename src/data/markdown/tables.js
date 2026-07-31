export const chapter = {
  slug: "markdown-tables",
  title: "Tables",
  description: "Buat tabel di Markdown dengan alignment dan formatting.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["markdown-syntax"],
  tags: ["markdown", "tables", "alignment", "data"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Table

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Info 1   |
| Row 2    | Data 2   | Info 2   |
| Row 3    | Data 3   | Info 3   |
\`\`\`

## Alignment

\`\`\`markdown
| Left     | Center   | Right    |
|:---------|:--------:|---------:|
| L-text   | C-text   | R-text   |
| Longer L | Center   | Longer R |
\`\`\`

## Formatted Content in Tables

\`\`\`markdown
| Feature | Status | Notes |
|---------|--------|-------|
| Login   | ✅ Done | **v2.0** |
| Payments| 🚧 WIP  | *Q3 2026* |
| Search  | ❌ Todo | ~~v1.0~~ |
\`\`\`

## Tips

\`\`\`
✅ Gunakan alignment untuk readability
✅ Pipe | tidak perlu sejajar (tapi lebih rapi)
✅ Minimal 3 dash --- untuk separator
✅ Bisa pakai bold, italic, code di dalam sel
❌ Tidak support colspan/rowspan native
❌ Tidak support nested tables
\`\`\`
  `,

  quiz: [
    { question: "Center alignment?", options: [":---", ":---:", "---:", "---"], correctAnswer: 1 },
    { question: "Right alignment?", options: [":---", ":---:", "---:", "---"], correctAnswer: 2 }
  ],

  codeExamples: []
};