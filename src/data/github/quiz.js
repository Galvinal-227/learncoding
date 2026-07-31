export const chapter = {
  slug: "github-quiz",
  title: "Quiz Akhir GitHub",
  description: "Uji pemahamanmu tentang GitHub.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["github-security"],
  tags: ["github", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir GitHub\n\n15 soal.`,
  quiz: [
    { question: "Git vs GitHub?", options: ["Sama", "Git: VCS; GitHub: hosting", "GitHub lebih tua", "Tidak berhubungan"], correctAnswer: 1 },
    { question: "Fork?", options: ["Clone", "Copy repo orang ke akun sendiri", "Delete", "Merge"], correctAnswer: 1 },
    { question: "PR workflow?", options: ["Push main", "Branch→PR→review→merge", "Fork→delete", "Clone→push"], correctAnswer: 1 },
    { question: "Closes #123?", options: ["Hiasan", "Auto-close issue saat PR merge", "Mention", "Label"], correctAnswer: 1 },
    { question: "Actions file location?", options: [".github/workflows/", "actions/", "root", "src/"], correctAnswer: 0 },
    { question: "Secrets di?", options: ["YAML", "Settings→Secrets", ".env", "package.json"], correctAnswer: 1 },
    { question: "Pages URL?", options: ["myapp.com", "username.github.io/repo", "github.io", "pages.com"], correctAnswer: 1 },
    { question: "Pages: backend?", options: ["Ya", "Tidak (static only)", "Plugin", "Node.js"], correctAnswer: 1 },
    { question: "Dependabot?", options: ["Test", "Auto-update deps + security", "Deploy", "Monitor"], correctAnswer: 1 },
    { question: "Secret scanning?", options: ["Debug", "Deteksi API keys ter-commit", "Encrypt", "Format"], correctAnswer: 1 },
    { question: "Squash & merge?", options: ["Merge semua", "Semua commit jadi 1", "Hapus", "Rebase"], correctAnswer: 1 },
    { question: "Profile README?", options: ["profile", "README", "sama username", "about"], correctAnswer: 2 },
    { question: "SSH key?", options: ["Encrypt", "Push tanpa password", "Deploy", "Test"], correctAnswer: 1 },
    { question: "Gist?", options: ["Repo", "Code snippet sharing", "Issue", "PR"], correctAnswer: 1 },
    { question: "Branch protection?", options: ["Debug", "Require PR review", "Hapus", "Rename"], correctAnswer: 1 }
  ]
};