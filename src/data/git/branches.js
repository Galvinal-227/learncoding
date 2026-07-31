export const chapter = {
  slug: "git-branches",
  title: "Branching",
  description: "Kuasai branching di Git untuk development paralel.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["git-basic-commands"],
  tags: ["git", "branch", "checkout", "switch"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Branch?

Branch memungkinkan kamu bekerja di **fitur/bugfix terpisah** tanpa mengganggu kode utama (main).

## Perintah Branch

\`\`\`bash
git branch                  # Lihat semua branch
git branch <nama>           # Buat branch baru
git switch <nama>           # Pindah branch (modern)
git checkout <nama>         # Pindah branch (lama)
git switch -c <nama>        # Buat + pindah
git branch -d <nama>        # Hapus branch
git branch -m <baru>        # Rename branch
\`\`\`

## Branching Strategies

### Git Flow
\`\`\`
main ───────────────────── ● ── ● (releases)
  └── develop ──●──●──●──●
       └── feature/login ──●──●
       └── feature/checkout ──●
\`\`\`

### GitHub Flow (Lebih Simpel)
\`\`\`
main ───────────────────── ● (production)
  └── feature-1 ──●──●──● (PR → merge)
  └── feature-2 ──●──● (PR → merge)
\`\`\`

## Naming Convention

\`\`\`
feature/checkout-page
bugfix/login-validation
hotfix/security-patch
release/v2.1.0
chore/update-deps
\`\`\`
  `,

  quiz: [
    { question: "Buat + pindah branch baru?", options: ["git new -b", "git switch -c", "git create", "git move"], correctAnswer: 1 },
    { question: "GitHub Flow vs Git Flow?", options: ["Sama", "GitHub Flow lebih simpel (feature → main)", "Git Flow lebih simpel", "Tidak ada beda"], correctAnswer: 1 }
  ],

  codeExamples: []
};