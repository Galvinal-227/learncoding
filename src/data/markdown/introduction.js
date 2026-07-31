export const chapter = {
  slug: "markdown-introduction",
  title: "Pengenalan Markdown",
  description: "Pahami apa itu Markdown, sejarahnya, dan kenapa jadi standar dokumentasi.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["markdown", "documentation", "writing", "readme"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Markdown?

Markdown adalah **lightweight markup language** yang dibuat oleh **John Gruber** tahun 2004. Dirancang untuk menulis konten yang mudah dibaca sebagai plain text, tapi bisa dikonversi ke HTML.

## Kenapa Markdown?

- ✍️ **Plain text** - Bisa ditulis di editor apa pun
- 📖 **Human-readable** - Mudah dibaca tanpa di-render
- 🌐 **Portable** - Dikonversi ke HTML, PDF, Word, dll
- 📚 **Standar dokumentasi** - GitHub, GitLab, NPM, semua pakai MD
- 🚀 **Developer-friendly** - Code blocks, syntax highlighting
- 🆓 **Vendor-neutral** - Tidak terikat tools tertentu

## Di Mana Markdown Dipakai?

| Platform | Penggunaan |
|----------|------------|
| **GitHub** | README, Issues, PRs, Wiki |
| **GitLab** | README, Issues, Merge Requests |
| **NPM** | Package documentation |
| **Discord/Slack** | Chat formatting |
| **Notion** | Notes & docs |
| **Obsidian** | Knowledge management |
| **Jekyll/Hugo/Astro** | Blog content |
| **MDN Web Docs** | Technical documentation |
| **Stack Overflow** | Questions & answers |
| **VS Code** | Preview built-in (Ctrl+Shift+V) |

## File Extension

\`\`\`
.md      Standard Markdown
.mdx     Markdown + JSX (React components)
.markdown  (jarang)
\`\`\`

## Flavors (Varian)

| Flavor | Digunakan Oleh |
|--------|---------------|
| **CommonMark** | Standar dasar |
| **GitHub Flavored Markdown (GFM)** | GitHub, GitLab |
| **MDX** | React/Next.js docs |
| **R Markdown** | Data science |
| **Pandoc Markdown** | Academic writing |

## Contoh Cepat

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- List item 1
- List item 2

[Link text](https://example.com)
![Image alt](image.jpg)

\`inline code\`

\`\`\`javascript
const greeting = "Hello World";
console.log(greeting);
\`\`\`

> Blockquote

| Table | Header |
|-------|--------|
| Row 1 | Data   |
\`\`\`
  `,

  quiz: [
    { question: "Markdown dibuat oleh?", options: ["Tim Berners-Lee", "John Gruber", "Linus Torvalds", "Mark Zuckerberg"], correctAnswer: 1 },
    { question: "GFM?", options: ["Good Format Markup", "GitHub Flavored Markdown", "General File Markup", "Global Format Manager"], correctAnswer: 1 },
    { question: "Markdown file extension?", options: [".html", ".txt", ".md", ".xml"], correctAnswer: 2 }
  ],

  codeExamples: []
};