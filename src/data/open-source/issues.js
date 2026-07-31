export const chapter = {
  slug: "open-source-issues",
  title: "Issues & Bug Reports",
  description: "Buat bug report yang jelas dan helpful untuk maintainer.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["open-source-contributing"],
  tags: ["open-source", "issues", "bug-report", "communication"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Bug Report Template

\`\`\`markdown
### Describe the bug
A clear and concise description of what the bug is.

### To Reproduce
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

### Expected behavior
A clear description of what you expected to happen.

### Screenshots
If applicable, add screenshots to help explain.

### Environment
- OS: [e.g. macOS 14.2]
- Browser: [e.g. Chrome 120]
- Version: [e.g. v2.1.0]
- Node.js: [e.g. v20.5.0]

### Additional context
Add any other context about the problem here.
\`\`\`

## Feature Request Template

\`\`\`markdown
### Is your feature request related to a problem?
A clear description of what the problem is. Ex. I'm always frustrated when [...]

### Describe the solution you'd like
A clear description of what you want to happen.

### Describe alternatives you've considered
Alternative solutions or features you've considered.

### Additional context
Add any other context or screenshots about the feature request.
\`\`\`

## Tips Bug Report

\`\`\`
✅ Cek apakah bug sudah dilaporkan (search issues)
✅ Gunakan template yang disediakan
✅ Beri steps to reproduce yang jelas
✅ Sertakan environment (OS, browser, version)
✅ Lampirkan screenshot/error log
✅ Minimal reproducible example (CodeSandbox, StackBlitz)
✅ Satu issue = satu bug/feature
❌ Jangan "Ini rusak, tolong dibenerin"
❌ Jangan +1 spam ("Sama, saya juga")
\`\`\`

## Mengambil Issue untuk Dikerjakan

\`\`\`
1. Cari issue dengan label "good first issue" / "help wanted"
2. Baca diskusi di issue
3. Tanya: "I'd like to work on this. Is it still available?"
4. Tunggu maintainer assign issue ke kamu
5. Mulai kerja setelah di-assign!
\`\`\`
  `,

  quiz: [
    { question: "Bug report: paling penting?", options: ["Judul", "Steps to reproduce (jelas)", "Emoji", "Panjang"], correctAnswer: 1 },
    { question: "Sebelum ambil issue?", options: ["Langsung kerja", "Tanya apakah masih available", "Skip", "Assign sendiri"], correctAnswer: 1 }
  ],

  codeExamples: []
};