export const chapter = {
  slug: "git-staging",
  title: "Staging & Commit",
  description: "Pahami staging area dan cara commit yang baik.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["git-basic-commands"],
  tags: ["git", "staging", "commit", "add"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Staging Area

\`\`\`
Working Directory ──git add──▶ Staging Area ──git commit──▶ Repository
\`\`\`

### git add
\`\`\`bash
git add <file>           # Stage file spesifik
git add .                # Stage semua
git add -p               # Stage interaktif (pilih per hunk)
git add -u               # Stage modified & deleted (tanpa untracked)
\`\`\`

### git commit
\`\`\`bash
git commit -m "pesan"              # Commit dengan pesan
git commit -m "judul" -m "detail"  # Commit dengan deskripsi
git commit --amend                 # Edit commit terakhir
\`\`\`

## Commit Message yang Baik

\`\`\`
# Format: <type>: <subject>
# Subject max 50 karakter, imperative mood

feat: add user login with Google
fix: resolve validation error on email field
docs: update API documentation
refactor: extract payment service
test: add unit tests for user service
chore: update dependencies

# Body (opsional, setelah baris kosong)
# Detail perubahan, alasan, link issue
\`\`\`
  `,

  quiz: [
    { question: "Stage interaktif (pilih per hunk)?", options: ["git add .", "git add -p", "git add -a", "git stage --patch"], correctAnswer: 1 },
    { question: "Conventional commit untuk bug fix?", options: ["feat:", "fix:", "bug:", "patch:"], correctAnswer: 1 }
  ],

  codeExamples: []
};