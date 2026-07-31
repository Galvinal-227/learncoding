export const chapter = {
  slug: "markdown-syntax",
  title: "Basic Syntax",
  description: "Kuasai semua basic syntax Markdown: bold, italic, strikethrough, dan lainnya.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["markdown-introduction"],
  tags: ["markdown", "syntax", "formatting", "basics"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Text Formatting

\`\`\`markdown
**Bold text**
__Also bold__

*Italic text*
_Also italic_

***Bold & Italic***
___Also bold & italic___

~~Strikethrough~~

` + "`inline code`" + `
\`\`\`

**Bold text**
__Also bold__

*Italic text*
_Also italic_

***Bold & Italic***

~~Strikethrough~~

\`inline code\`

## Headings

\`\`\`markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
#### H4
##### H5
###### H6

Alternate H1
============

Alternate H2
------------
\`\`\`

## Paragraphs & Line Breaks

\`\`\`markdown
This is paragraph 1.

This is paragraph 2.

Line break without paragraph:  
Two spaces at end →  
New line.

---

Horizontal rule (above)
\`\`\`

## Blockquotes

\`\`\`markdown
> Single blockquote

> Nested blockquote
>> Inner blockquote

> **Bold in blockquote**
>
> - List in blockquote
> - Item 2
\`\`\`

## Escaping

\`\`\`markdown
\\*literal asterisks\\*
\\# not a heading
\\[not a link\\]
\`\`\`
  `,

  quiz: [
    { question: "Bold text?", options: ["*text*", "**text**", "`text`", "[text]"], correctAnswer: 1 },
    { question: "Line break tanpa paragraf?", options: ["Enter", "Two spaces di akhir baris", "\\n", "<br>"], correctAnswer: 1 }
  ],

  codeExamples: []
};