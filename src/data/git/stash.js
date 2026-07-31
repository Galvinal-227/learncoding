export const chapter = {
  slug: "git-stash",
  title: "Stash",
  description: "Simpan perubahan sementara tanpa commit dengan git stash.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["git-staging"],
  tags: ["git", "stash", "temporary", "save"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Stash?

Butuh pindah branch tapi ada perubahan yang belum siap di-commit? **Stash!**

## Perintah Stash

\`\`\`bash
git stash                  # Simpan perubahan
git stash save "pesan"     # Simpan dengan pesan
git stash list             # Lihat daftar stash
git stash pop              # Ambil stash terakhir + hapus
git stash apply            # Ambil stash terakhir (tetap simpan)
git stash drop             # Hapus stash
git stash clear            # Hapus semua stash
\`\`\`

## Workflow Stash

\`\`\`bash
# Lagi kerja di feature branch...
git status  # Ada perubahan belum di-commit

# Tiba-tiba harus fix bug di main
git stash save "WIP: login feature"
git switch main
# Fix bug...
git commit -m "fix: critical bug"
git switch feature/login
git stash pop  # Lanjut kerja
\`\`\`
  `,

  quiz: [
    { question: "Simpan perubahan sementara?", options: ["git save", "git stash", "git temp", "git hold"], correctAnswer: 1 },
    { question: "stash pop vs apply?", options: ["Sama", "pop: ambil+hapus; apply: ambil saja", "apply lebih cepat", "pop tidak aman"], correctAnswer: 1 }
  ],

  codeExamples: []
};