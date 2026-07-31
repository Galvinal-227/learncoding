export const chapter = {
  slug: "react-jsx",
  title: "JSX",
  description: "Pahami JSX - syntax extension JavaScript untuk menulis HTML di React.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["react-introduction"],
  tags: ["react", "jsx", "syntax", "html"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Apa Itu JSX?

JSX = **JavaScript XML**. Syntax extension yang memungkinkan kamu menulis HTML-like code di JavaScript.

## JSX vs HTML

\`\`\`jsx
// HTML: class, for
<div class="container"><label for="email">Email</label></div>

// JSX: className, htmlFor
<div className="container"><label htmlFor="email">Email</label></div>
\`\`\`

## Embedding Expressions

\`\`\`jsx
const name = 'Budi';
const element = <h1>Hello, {name}!</h1>;
const math = <p>{2 + 2}</p>;
const user = <p>{user.name} - {user.age} tahun</p>;
\`\`\`

## Attributes & Styles

\`\`\`jsx
// Dynamic attributes
<img src={user.avatar} alt={user.name} />
<button disabled={isLoading}>Submit</button>

// Inline styles (camelCase!)
<div style={{ backgroundColor: 'blue', fontSize: '16px' }}>Styled</div>
\`\`\`

## JSX Rules

\`\`\`
✅ Satu root element (atau Fragment)
✅ Tutup semua tag (<img />, <br />)
✅ camelCase attributes (className, onClick)
✅ JavaScript di dalam {} 
✅ Comments: {/* ini komentar */}
\`\`\`
  `,

  quiz: [
    { question: "JSX: class?", options: ["class", "className", "css", "style"], correctAnswer: 1 },
    { question: "JSX expression?", options: ["{{ }}", "{ }", "{{{{ }}}}", "( )"], correctAnswer: 1 }
  ],

  codeExamples: []
};