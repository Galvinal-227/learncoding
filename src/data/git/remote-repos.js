export const chapter = {
  slug: "git-remote-repos",
  title: "Remote Repository",
  description: "Hubungkan repo lokal dengan GitHub/GitLab dan sinkronisasi.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["git-basic-commands"],
  tags: ["git", "remote", "push", "pull", "fetch"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Remote Repository

\`\`\`bash
git remote -v                           # Lihat remote
git remote add origin <url>             # Tambah remote
git remote remove origin                # Hapus remote
git remote rename origin upstream       # Rename remote
\`\`\`

## Push & Pull

\`\`\`bash
git push origin main              # Push ke remote
git push -u origin main           # Set upstream + push
git pull origin main              # Fetch + merge
git fetch origin                  # Fetch tanpa merge
\`\`\`

## Fetch vs Pull

| Fetch | Pull |
|-------|------|
| Download perubahan saja | Download + merge |
| Aman, lihat dulu | Langsung gabung |
| \`git fetch\` → \`git diff\` → \`git merge\` | \`git pull\` |
  `,

  quiz: [
    { question: "Tambah remote repository?", options: ["git add remote", "git remote add origin <url>", "git connect", "git link"], correctAnswer: 1 },
    { question: "Fetch vs Pull?", options: ["Sama", "Fetch: download; Pull: download+merge", "Pull lebih aman", "Fetch otomatis merge"], correctAnswer: 1 }
  ],

  codeExamples: []
};