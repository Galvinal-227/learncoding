export const chapter = {
  slug: "markdown-code-blocks",
  title: "Code & Syntax Highlighting",
  description: "Tampilkan kode dengan syntax highlighting di Markdown.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["markdown-syntax"],
  tags: ["markdown", "code", "syntax-highlighting", "fenced"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Inline Code

\`\`\`markdown
Use \`console.log()\` to debug.

Use \`const\` for immutable variables.
\`\`\`

Use \`console.log()\` to debug.

## Fenced Code Blocks

### Basic (no language)
\`\`\`markdown
\`\`\`
function hello() {
    return "Hello";
}
\`\`\`
\`\`\`

### With Language (syntax highlighting)
\`\`\`markdown
\`\`\`javascript
function hello() {
    return "Hello World";
}
\`\`\`

\`\`\`python
def hello():
    return "Hello World"
\`\`\`

\`\`\`bash
npm install express
\`\`\`
\`\`\`

### With Title (some renderers)
\`\`\`markdown
\`\`\`javascript title="hello.js"
function hello() {
    return "Hello";
}
\`\`\`
\`\`\`

## Supported Languages

\`\`\`
javascript, js, jsx, typescript, ts, tsx
python, py
html, css, scss
bash, shell, sh
json, yaml, xml
sql
dockerfile
markdown, md
graphql
java, c, cpp, csharp, go, rust, php, ruby
\`\`\`

## Diff Syntax

\`\`\`diff
- const oldVariable = "old";
+ const newVariable = "new";
  const unchanged = "same";
\`\`\`

## Line Highlighting (GFM)

\`\`\`javascript {1,3-5}
function hello() {   // highlighted
    return "Hello";
}                     // highlighted
\`\`\`
  `,

  quiz: [
    { question: "Inline code?", options: ["**code**", "`code`", "[code]", "(code)"], correctAnswer: 1 },
    { question: "Fenced code block?", options: ["``````", "```", "---", "==="], correctAnswer: 1 }
  ],

  codeExamples: []
};