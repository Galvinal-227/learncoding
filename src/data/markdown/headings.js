export const chapter = {
  slug: "markdown-headings",
  title: "Headings & Paragraphs",
  description: "Struktur dokumen dengan headings dan paragraphs di Markdown.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["markdown-syntax"],
  tags: ["markdown", "headings", "paragraphs", "structure"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Headings

\`\`\`markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
#### H4
##### H5
###### H6
\`\`\`

**Rendered:**

# H1 - Main Title
## H2 - Section
### H3 - Subsection
#### H4
##### H5
###### H6

## Alternate Syntax

\`\`\`markdown
H1 Alternate
============

H2 Alternate
------------
\`\`\`

## Best Practices

\`\`\`
✅ H1 = judul utama (satu per halaman)
✅ H2 = section utama
✅ H3-H6 = sub-sections
✅ Jangan loncat level (H1 → H3 tanpa H2)
✅ Heading = struktur, bukan untuk styling
\`\`\`

## Paragraphs

\`\`\`markdown
Ini paragraf pertama.
Baris ini masih di paragraf yang sama.

Ini paragraf kedua (dipisahkan baris kosong).
\`\`\`

## Line Breaks

\`\`\`markdown
Baris pertama (akhiri dengan 2 spasi)  
Baris kedua.

Bisa juga pakai <br> tag:
Baris pertama<br>Baris kedua
\`\`\`

## Horizontal Rules

\`\`\`markdown
---

***

___
\`\`\`
  `,

  quiz: [
    { question: "Heading level: berapa maksimal?", options: ["H3", "H6", "H4", "Tidak terbatas"], correctAnswer: 1 },
    { question: "Paragraf baru?", options: ["Enter", "Baris kosong (blank line)", "2 spasi", "<br>"], correctAnswer: 1 }
  ],

  codeExamples: []
};