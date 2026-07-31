export const chapter = {
  slug: "git-introduction",
  title: "Pengenalan Git",
  description: "Pahami apa itu Git, kenapa penting, dan konsep dasar version control.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["git", "version-control", "vcs", "pengenalan"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Git?

Git adalah **distributed version control system** (VCS) yang melacak perubahan file dan memungkinkan kolaborasi banyak developer. Dibuat oleh **Linus Torvalds** tahun 2005.

## Kenapa Git?

- 📝 **Track changes** - Setiap perubahan tercatat
- ⏪ **Rollback** - Kembali ke versi sebelumnya kapan saja
- 🌿 **Branching** - Kerja paralel tanpa ganggu orang lain
- 👥 **Kolaborasi** - Ribuan developer di project yang sama
- 🌍 **Distributed** - Setiap developer punya full copy repository
- 🆓 **Gratis & Open Source**

## Git vs GitHub/GitLab

| Git | GitHub / GitLab |
|-----|-----------------|
| Software version control | Platform hosting repository |
| Jalan di lokal | Cloud service |
| Command line | Web UI + collaboration tools |
| Gratis, open source | Freemium |

## 3 States di Git

\`\`\`
Working Directory → Staging Area → Repository
    (modified)        (staged)      (committed)
\`\`\`

## Konfigurasi Awal

\`\`\`bash
git config --global user.name "Budi Santoso"
git config --global user.email "budi@email.com"
git config --global init.defaultBranch main
\`\`\`
  `,

  quiz: [
    { question: "Siapa pencipta Git?", options: ["Bill Gates", "Linus Torvalds", "Mark Zuckerberg", "Brendan Eich"], correctAnswer: 1 },
    { question: "3 states di Git?", options: ["Start,Run,Stop", "Working,Staging,Repository", "Local,Cloud,Server", "Add,Commit,Push"], correctAnswer: 1 },
    { question: "Git vs GitHub?", options: ["Sama", "Git: VCS; GitHub: hosting platform", "GitHub lebih tua", "Tidak berhubungan"], correctAnswer: 1 }
  ],

  codeExamples: []
};