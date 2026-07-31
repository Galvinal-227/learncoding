export const chapter = {
  slug: "markdown-lists",
  title: "Lists",
  description: "Buat ordered, unordered, nested lists, dan task lists di Markdown.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["markdown-headings"],
  tags: ["markdown", "lists", "ordered", "unordered"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Unordered List

\`\`\`markdown
- Item 1
- Item 2
  - Sub item 2.1
  - Sub item 2.2
- Item 3

* Also works
+ Also works
\`\`\`

**Rendered:**
- Item 1
- Item 2
  - Sub item 2.1
  - Sub item 2.2
- Item 3

## Ordered List

\`\`\`markdown
1. First
2. Second
3. Third

1. Auto-numbering
1. Still works
1. Even with same number
\`\`\`

**Rendered:**
1. First
2. Second
3. Third

## Nested Lists

\`\`\`markdown
1. Main step
   - Sub point A
   - Sub point B
     1. Sub-sub detail
2. Next main step

- Category
  1. Ordered sub-item
  2. Another
- Another category
\`\`\`

## Task Lists (GFM)

\`\`\`markdown
- [x] Completed task
- [x] Also done
- [ ] Pending task
- [ ] Another pending
\`\`\`

**Rendered:**
- [x] Completed task
- [x] Also done
- [ ] Pending task
- [ ] Another pending

## Tips

\`\`\`
✅ Indentasi 2-4 spasi untuk nested
✅ Baris kosong antar list items (opsional, untuk readability)
✅ Task lists hanya di GFM (GitHub, GitLab)
✅ Ordered list bisa pakai angka sama (auto-number)
\`\`\`
  `,

  quiz: [
    { question: "Unordered list symbol?", options: ["1.", "#", "- * +", ">"], correctAnswer: 2 },
    { question: "Nested list indent?", options: ["Tab", "2-4 spasi", "8 spasi", "Tidak perlu"], correctAnswer: 1 },
    { question: "Task list?", options: ["- ( ) item", "- [ ] item", "* [ ] item", "1. [ ] item"], correctAnswer: 1 }
  ],

  codeExamples: []
};