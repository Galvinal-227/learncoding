export const chapter = {
  slug: "open-source-pull-requests",
  title: "Pull Requests",
  description: "Buat Pull Request yang standout: deskripsi, review, dan best practices.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["open-source-contributing"],
  tags: ["open-source", "pull-request", "review", "github"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Pull Request yang Baik

### PR Title (Conventional Commits)
\`\`\`
feat: add dark mode support
fix: resolve memory leak in event handler
docs: update API documentation
chore: upgrade dependencies
refactor: extract validation logic
test: add unit tests for user service
\`\`\`

### PR Description Template

\`\`\`markdown
## What
Add dark mode support with theme toggle

## Why
Users requested dark mode for better accessibility (#456)

## Changes
- Add ThemeProvider component
- Add CSS variables for light/dark themes
- Add theme toggle in navbar
- Persist theme preference in localStorage

## Screenshots
| Light | Dark |
|-------|------|
| ![light](light.png) | ![dark](dark.png) |

## Testing
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Responsive (mobile/tablet)
- [ ] Unit tests added
- [ ] No accessibility regression

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed
- [ ] Documentation updated
- [ ] No breaking changes

Closes #456
\`\`\`

## PR Best Practices

\`\`\`
✅ Satu PR = satu fitur/fix (small & focused)
✅ PR kecil (<400 lines) → mudah di-review
✅ Screenshot untuk UI changes
✅ Link issue terkait
✅ Self-review sebelum minta review
✅ Test lokal sebelum push
✅ Rebase ke main sebelum submit (hindari merge conflicts)
✅ Update branch setelah diskusi
\`\`\`

## Responding to Reviews

### Jika Revisi Diminta:
\`\`\`
1. Jangan defensif ("Tapi kan...")
2. Pahami feedback
3. Diskusi jika tidak setuju (profesional)
4. Revisi + commit baru
5. PR auto-update dengan commit baru
6. Resolve conversation setelah fix
\`\`\`

### Jika PR Ditolak:
\`\`\`
- Tidak masalah! Banyak alasan:
  - Fitur tidak align dengan roadmap
  - Solusi berbeda yang diinginkan
  - Sudah ada PR lain yang handle
- Tetap positif dan profesional
- Cari project lain yang lebih cocok
\`\`\`

## Review PR Orang Lain

Kamu juga bisa belajar dengan me-review PR orang lain:

\`\`\`
✅ Fokus ke logika (bukan nitpick style)
✅ Test branch locally jika memungkinkan
✅ Cek edge cases
✅ Beri constructive feedback
✅ Approve jika sudah OK
✅ Comment, jangan Request Changes untuk hal kecil
\`\`\`

## Keep Fork Updated

\`\`\`bash
# Sync fork dengan upstream
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
\`\`\`
  `,

  quiz: [
    { question: "PR title format?", options: ["Anything", "Conventional commits (feat:, fix:, docs:)", "Just title", "No format"], correctAnswer: 1 },
    { question: "PR terlalu besar?", options: ["OK", "Sulit di-review → pecah jadi PR kecil", "Lebih baik", "Tidak masalah"], correctAnswer: 1 }
  ],

  codeExamples: []
};