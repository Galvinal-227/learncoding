export const chapter = {
  slug: "git-rebasing",
  title: "Rebasing",
  description: "Pahami rebase vs merge dan kapan menggunakannya.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["git-merging"],
  tags: ["git", "rebase", "history", "squash"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Merge vs Rebase

| Merge | Rebase |
|-------|--------|
| Preserve history asli | Rewrite history |
| Buat merge commit | Linear history |
| Aman untuk public branch | ⚠️ Jangan rebase public branch! |

## Rebase Basic

\`\`\`bash
git switch feature/login
git rebase main
# Ambil perubahan dari main, taruh ulang commit feature di atasnya
\`\`\`

## Interactive Rebase (Powerful!)

\`\`\`bash
git rebase -i HEAD~3
\`\`\`

\`\`\`
pick abc123 feat: add login
pick def456 fix: typo
pick ghi789 fix: another typo

# Commands:
# p, pick = gunakan commit
# r, reword = ubah pesan commit
# s, squash = gabung dengan commit sebelumnya
# f, fixup = gabung, buang pesan
# d, drop = hapus commit
\`\`\`

## Squash Commits

\`\`\`bash
git rebase -i HEAD~3
# Ubah "pick" jadi "squash" untuk commit 2 & 3
# Hasil: 1 commit bersih berisi semua perubahan
\`\`\`

## Golden Rule of Rebasing

> **JANGAN PERNAH rebase branch yang sudah di-push ke remote (public)!**
> 
> Hanya rebase branch lokal yang belum dishare.
  `,

  quiz: [
    { question: "Rebase vs Merge?", options: ["Sama", "Rebase rewrite history; Merge preserve history", "Merge lebih bersih", "Rebase tidak aman"], correctAnswer: 1 },
    { question: "Golden rule rebase?", options: ["Selalu rebase", "Jangan rebase public branch", "Rebase setiap hari", "Rebase = merge"], correctAnswer: 1 }
  ],

  codeExamples: []
};