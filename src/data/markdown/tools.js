export const chapter = {
  slug: "markdown-tools",
  title: "Tools & Editors",
  description: "Editor dan tools terbaik untuk menulis Markdown.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["markdown-introduction"],
  tags: ["markdown", "tools", "editors", "preview"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Editors

| Editor | Platform | Fitur |
|--------|----------|-------|
| **VS Code** | All | Built-in preview (Ctrl+Shift+V) |
| **Obsidian** | All | Graph view, plugins |
| **Typora** | All | WYSIWYG, seamless |
| **Notion** | All | Block-based, collaboration |
| **HackMD** | Web | Real-time collaboration |
| **StackEdit** | Web | Browser-based |
| **MacDown** | Mac | Simple, fast |

## VS Code Extensions

\`\`\`
- Markdown All in One
- Markdown Preview Enhanced
- markdownlint
- Markdown Emoji
\`\`\`

## Converters

| Tool | From → To |
|------|-----------|
| **Pandoc** | MD → HTML, PDF, DOCX, EPUB |
| **md-to-pdf** | MD → PDF |
| **Marp** | MD → Slide presentation |
| **Slidev** | MD → Slide (Vue-powered) |

## Linters

\`\`\`bash
npm install -g markdownlint-cli
markdownlint "**/*.md"
\`\`\`
  `,

  quiz: [
    { question: "VS Code preview shortcut?", options: ["Ctrl+P", "Ctrl+Shift+V", "F5", "Alt+P"], correctAnswer: 1 },
    { question: "Pandoc?", options: ["Editor", "Universal document converter (MD → HTML/PDF)", "Linter", "Preview tool"], correctAnswer: 1 }
  ],

  codeExamples: []
};