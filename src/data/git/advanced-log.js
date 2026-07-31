export const chapter = {
  slug: "git-advanced-log",
  title: "Advanced Log & History",
  description: "Gunakan git log, blame, bisect untuk investigasi history.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["git-basic-commands"],
  tags: ["git", "log", "blame", "bisect"],
  order: 14,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## git log Advanced

\`\`\`bash
# Log dengan grafik branch
git log --graph --oneline --all

# Log dengan statistik
git log --stat

# Log oleh author
git log --author="Budi"

# Log dalam range tanggal
git log --since="2026-01-01" --until="2026-01-31"

# Log dengan format kustom
git log --pretty=format:"%h - %an, %ar : %s"

# Log file spesifik
git log -- path/to/file.js
\`\`\`

## git blame

\`\`\`bash
# Lihat siapa yang mengubah setiap baris
git blame path/to/file.js

# Blame baris spesifik
git blame -L 10,20 path/to/file.js
\`\`\`

## git bisect

\`\`\`bash
# Cari commit yang menyebabkan bug
git bisect start
git bisect bad HEAD        # Versi sekarang rusak
git bisect good v1.0.0     # Versi ini masih OK

# Git akan checkout commit di tengah
# Test → git bisect good (jika OK) atau git bisect bad (jika rusak)
# Ulangi sampai ketemu commit penyebab bug

git bisect reset            # Kembali ke HEAD
\`\`\`
  `,

  quiz: [
    { question: "git blame untuk?", options: ["Menyalahkan", "Lihat siapa ubah tiap baris", "Hapus file", "Reset commit"], correctAnswer: 1 },
    { question: "git bisect untuk?", options: ["Split branch", "Cari commit penyebab bug (binary search)", "Hapus commit", "Merge"], correctAnswer: 1 }
  ],

  codeExamples: []
};