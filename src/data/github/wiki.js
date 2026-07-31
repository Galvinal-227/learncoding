export const chapter = {
  slug: "github-wiki",
  title: "GitHub Wiki & Documentation",
  description: "Dokumentasi project dengan GitHub Wiki.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["github-repository"],
  tags: ["github", "wiki", "documentation"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitHub Wiki

Wiki adalah **dokumentasi terpisah** yang bisa diedit via web atau clone sebagai Git repo.

## Enable Wiki

\`\`\`
Settings → Features → Wikis (centang)
\`\`\`

## Struktur Wiki

\`\`\`
Home.md
├── Getting-Started.md
├── Installation.md
├── API-Reference.md
├── Contributing.md
└── FAQ.md
\`\`\`

## Markdown + Link

\`\`\`markdown
# Home
Welcome to the [MyApp] wiki!

## Pages
- [[Getting Started]]
- [[Installation]]
- [[API Reference]]
- [[FAQ]]
\`\`\`

## Clone Wiki

\`\`\`bash
git clone https://github.com/username/repo.wiki.git
# Edit, commit, push seperti repo biasa!
\`\`\`
  `,

  quiz: [
    { question: "GitHub Wiki bisa di-clone?", options: ["Tidak", "Ya (repo.wiki.git)", "Hanya web", "Hanya admin"], correctAnswer: 1 }
  ],

  codeExamples: []
};