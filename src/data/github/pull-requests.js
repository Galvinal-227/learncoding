export const chapter = {
  slug: "github-pull-requests",
  title: "Pull Requests & Code Review",
  description: "Kuasai Pull Request workflow: create, review, comment, dan merge.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["github-repository"],
  tags: ["github", "pull-request", "code-review", "collaboration"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Pull Request Workflow

\`\`\`
1. Buat branch dari main
2. Commit perubahan
3. Push branch ke GitHub
4. Buka Pull Request
5. Code Review (rekan tim review)
6. Revisi (jika perlu)
7. Merge ke main
8. Hapus branch
\`\`\`

## Create Pull Request

\`\`\`bash
git switch -c feature/login-page
# ... coding ...
git add .
git commit -m "feat: add login page with Google OAuth"
git push -u origin feature/login-page
\`\`\`

\`\`\`
# Di GitHub:
# 1. Buka repo → "Compare & pull request"
# 2. Base: main ← Compare: feature/login-page
# 3. Judul PR: feat: add login page
# 4. Deskripsi: apa, kenapa, screenshot, how to test
# 5. Assign reviewer
# 6. Create pull request
\`\`\`

## PR Description Template

\`\`\`markdown
## What
Add login page with Google OAuth integration

## Why
Users need authentication to access dashboard

## Screenshots
[image]

## How to Test
1. Go to /login
2. Click "Login with Google"
3. Should redirect to Google OAuth
4. After auth, redirect to /dashboard

## Checklist
- [ ] Tested on Chrome, Firefox
- [ ] Mobile responsive
- [ ] Unit tests added

Closes #123
\`\`\`

## Code Review

### Sebagai Reviewer:
\`\`\`
✅ Cek logika kode (bukan style)
✅ Cek edge cases
✅ Cek security (input validation)
✅ Cek performance
✅ Comment constructive, bukan personal
✅ Approve atau Request Changes
\`\`\`

### Sebagai Author:
\`\`\`
✅ Terima feedback dengan terbuka
✅ Jangan defensif
✅ Revisi sesuai feedback
✅ Diskusi jika tidak setuju (profesional)
✅ Resolve conversation setelah fix
✅ Re-request review setelah revisi
\`\`\`

## Merge Strategies

| Strategy | Hasil | Kapan |
|----------|-------|------|
| **Merge Commit** | Commit merge terpisah | Preserve history lengkap |
| **Squash & Merge** | Semua commit jadi 1 | History bersih |
| **Rebase & Merge** | Linear history | Tanpa merge commit |

## PR Best Practices

\`\`\`
✅ PR kecil (<400 baris) - mudah di-review
✅ Satu PR = satu fitur/fix
✅ Deskripsi jelas (what, why, how to test)
✅ Screenshot untuk UI changes
✅ Link issue terkait (Closes #123)
✅ Draft PR untuk work-in-progress
✅ Self-review sebelum minta review
\`\`\`
  `,

  quiz: [
    { question: "PR workflow?", options: ["Push langsung ke main", "Branch → commit → push → PR → review → merge", "Fork → delete", "Clone → push"], correctAnswer: 1 },
    { question: "Squash & merge?", options: ["Merge semua commit", "Semua commit jadi 1 (history bersih)", "Hapus branch", "Rebase"], correctAnswer: 1 }
  ],

  codeExamples: []
};