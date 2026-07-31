export const chapter = {
  slug: "git-tags",
  title: "Tags & Releases",
  description: "Gunakan tag untuk menandai versi release.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["git-basic-commands"],
  tags: ["git", "tag", "release", "version"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Tag?

Tag menandai titik spesifik di history, biasanya untuk **versi release**.

## Perintah Tag

\`\`\`bash
git tag                          # Lihat semua tag
git tag v1.0.0                   # Buat lightweight tag
git tag -a v1.0.0 -m "Release v1" # Buat annotated tag (recommended)
git tag -d v1.0.0                # Hapus tag lokal
git push origin v1.0.0           # Push tag ke remote
git push origin --tags           # Push semua tag
\`\`\`

## Semantic Versioning

\`\`\`
vMAJOR.MINOR.PATCH
v1.2.3

MAJOR = Breaking changes
MINOR = New feature (backward compatible)
PATCH = Bug fix
\`\`\`
  `,

  quiz: [
    { question: "Annotated tag dibuat dengan?", options: ["git tag v1", "git tag -a v1 -m 'msg'", "git tag -l", "git tag create"], correctAnswer: 1 },
    { question: "Semantic versioning: patch untuk?", options: ["Breaking change", "Bug fix", "New feature", "Rewrite"], correctAnswer: 1 }
  ],

  codeExamples: []
};