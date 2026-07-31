export const chapter = {
  slug: "git-collaboration",
  title: "Kolaborasi dengan Git",
  description: "Workflow kolaborasi tim dengan Pull Request dan code review.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["git-remote-repos"],
  tags: ["git", "collaboration", "pull-request", "workflow"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Workflow Kolaborasi

\`\`\`bash
# 1. Dapatkan update terbaru
git switch main
git pull origin main

# 2. Buat branch fitur
git switch -c feature/my-feature

# 3. Kerja, commit secara berkala
git add .
git commit -m "feat: add new feature"

# 4. Push branch ke remote
git push -u origin feature/my-feature

# 5. Buat Pull Request di GitHub/GitLab
# 6. Code review → revisi → push lagi
# 7. Merge ke main
# 8. Hapus branch
git switch main
git pull origin main
git branch -d feature/my-feature
\`\`\`

## Pull Request Best Practices

\`\`\`
✅ PR kecil (<400 baris)
✅ Deskripsi jelas (apa, kenapa, how to test)
✅ Link issue/ticket
✅ Screenshot untuk UI changes
✅ Minta review dari 1-2 orang
✅ Respond to feedback
\`\`\`
  `,

  quiz: [
    { question: "PR singkatan?", options: ["Push Request", "Pull Request", "Public Review", "Project Report"], correctAnswer: 1 },
    { question: "PR yang baik?", options: ["Besar", "Kecil, deskripsi jelas, link issue", "Tanpa deskripsi", "Langsung merge"], correctAnswer: 1 }
  ],

  codeExamples: []
};