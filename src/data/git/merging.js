export const chapter = {
  slug: "git-merging",
  title: "Merging & Merge Conflicts",
  description: "Gabungkan branch dan atasi konflik merge dengan percaya diri.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["git-branches"],
  tags: ["git", "merge", "conflict", "resolve"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Merge

\`\`\`bash
git switch main
git merge feature/login
\`\`\`

### Fast-Forward Merge
Jika tidak ada commit baru di main, pointer pindah saja.

### Three-Way Merge
Jika ada commit di kedua branch, Git buat **merge commit**.

## Merge Conflict

Terjadi jika dua branch mengubah **baris yang sama**.

### Contoh Conflict:
\`\`\`
<<<<<<< HEAD
<h1>Judul dari main</h1>
=======
<h1>Judul dari feature</h1>
>>>>>>> feature/login
\`\`\`

### Cara Resolve:
1. Buka file yang conflict
2. Pilih kode yang benar (hapus marker <<< === >>>)
3. \`git add <file>\`
4. \`git commit\` (atau \`git merge --continue\`)

### Tools Bantu:
\`\`\`bash
git mergetool  # Buka visual merge tool (VS Code, Meld, etc)
\`\`\`

## Mencegah Conflict

\`\`\`
✅ Sering pull dari main ke feature branch
✅ Commit kecil & sering
✅ Komunikasi dengan tim
✅ Jangan ubah file yang sama bersamaan
\`\`\`
  `,

  quiz: [
    { question: "Merge conflict terjadi jika?", options: ["File berbeda", "Dua branch ubah baris yang sama", "Branch banyak", "Commit banyak"], correctAnswer: 1 },
    { question: "Langkah resolve conflict?", options: ["Abaikan", "Edit file → add → commit", "Hapus branch", "Reset semua"], correctAnswer: 1 }
  ],

  codeExamples: []
};