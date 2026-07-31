export const chapter = {
  slug: "markdown-extended-syntax",
  title: "Extended Syntax (GFM)",
  description: "Pelajari GitHub Flavored Markdown: task lists, footnotes, emoji, alerts, mentions.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["markdown-syntax"],
  tags: ["markdown", "gfm", "github", "extended"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Task Lists

\`\`\`markdown
- [x] Learn HTML
- [x] Learn CSS
- [ ] Learn JavaScript
- [ ] Learn React
\`\`\`

## Footnotes

\`\`\`markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
\`\`\`

## Emoji

\`\`\`markdown
:smile: :rocket: :fire: :heart:
✅ ❌ ⚠️ 💡 🎉
\`\`\`

## Alerts / Callouts (GitHub)

\`\`\`markdown
> [!NOTE]
> Useful information that users should know.

> [!TIP]
> Helpful advice for doing things better.

> [!IMPORTANT]
> Key information users need to know.

> [!WARNING]
> Urgent info that needs immediate attention.

> [!CAUTION]
> Advises about risks or negative outcomes.
\`\`\`

## Mentions

\`\`\`markdown
@username will be notified
@team/developers for team mention
\`\`\`

## Auto-linking

\`\`\`markdown
https://www.example.com - auto-linked
\`\`\`

## Details/Summary (Collapsible)

\`\`\`markdown
<details>
<summary>Click to expand</summary>

Hidden content here!
</details>
\`\`\`

## Mermaid Diagrams (GitHub)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
  `,

  quiz: [
    { question: "Task list?", options: ["- [ ] item", "- item", "* item", "1. item"], correctAnswer: 0 },
    { question: "GitHub alerts?", options: ["**NOTE**", "> [!NOTE]", "> NOTE:", "> **NOTE**"], correctAnswer: 1 }
  ],

  codeExamples: []
};