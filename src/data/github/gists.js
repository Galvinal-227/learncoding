export const chapter = {
  slug: "github-gists",
  title: "GitHub Gists",
  description: "Share code snippets dengan GitHub Gists.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["github-introduction"],
  tags: ["github", "gists", "snippets", "sharing"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Gist?

Gist adalah **code snippet** yang bisa dishare dengan mudah. Seperti Pastebin, tapi dengan Git versioning.

## Create Gist

\`\`\`
1. Buka gist.github.com
2. Paste kode
3. Nama file + ekstensi
4. Public / Secret (bukan private!)
5. Create gist
\`\`\`

## Embed Gist

\`\`\`html
<script src="https://gist.github.com/username/gist-id.js"></script>
\`\`\`

## Use Cases

- ✅ Share error log untuk debugging
- ✅ Blog post code examples
- ✅ Quick config sharing
- ✅ Temporary notes
\`\`\`
  `,

  quiz: [
    { question: "Gist?", options: ["Repo", "Code snippet sharing", "Issue", "PR"], correctAnswer: 1 }
  ],

  codeExamples: []
};