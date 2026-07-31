export const chapter = {
  slug: "agile-scrum-tools",
  title: "Tools untuk Agile",
  description: "Kenali tools populer untuk manajemen proyek Agile dan Scrum.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["agile-scrum-introduction"],
  tags: ["agile", "tools", "jira", "trello", "project-management"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Tools Manajemen Proyek Agile

### 1. Jira (Atlassian)
- 🏢 **Paling populer** di perusahaan menengah-besar
- 📊 Scrum & Kanban board
- 📈 Reporting: burndown chart, velocity
- 🔗 Integrasi dengan Bitbucket, GitHub, Confluence

### 2. Linear
- 🚀 **Cepat & modern**, favorit startup
- 🎨 UI simpel dan bersih
- ⌨️ Keyboard-first (power user friendly)
- 📱 Desktop + mobile app

### 3. Trello
- 🟢 **Simpel & gratis**, untuk tim kecil
- 📋 Kanban-style board
- 🎯 Cocok untuk personal project atau tim <10 orang
- 🔌 Power-ups untuk tambah fitur

### 4. Asana
- 📋 Fleksibel (list, board, timeline, calendar view)
- 👥 Kolaborasi non-developer friendly
- 🎯 Goals & milestone tracking

### 5. Notion
- 📝 All-in-one: docs + wiki + project tracker
- 🧩 Customizable templates
- 💰 Gratis untuk tim kecil

### 6. GitHub Projects
- 🐙 Terintegrasi dengan repository GitHub
- 📋 Board view, table view, roadmap
- 🔗 Issues + PRs langsung terhubung

## Untuk Developer: Mulai dari Mana?

\`\`\`
🏠 Personal project: Trello atau Notion
🚀 Startup: Linear
🏢 Perusahaan: Jira (pasti)
📚 Documentation: Confluence atau Notion
\`\`\`

## Tips Menggunakan Tools

\`\`\`
✅ Update status task setiap hari (sebelum/setelah daily)
✅ Jangan biarkan task di "In Progress" terlalu lama
✅ Gunakan labels/tags untuk kategori
✅ Link pull request ke task
✅ Komentar di task untuk diskusi, bukan di chat
✅ Sprint board harus mencerminkan realita
\`\`\`
  `,

  quiz: [
    { question: "Tools project management paling populer di perusahaan besar?", options: ["Trello", "Jira", "Notion", "Linear"], correctAnswer: 1, explanation: "Jira adalah standar industri di perusahaan menengah-besar untuk manajemen proyek Agile." },
    { question: "Apa keunggulan Linear?", options: ["Gratis", "Cepat, modern, keyboard-first", "Paling populer", "Hanya untuk enterprise"], correctAnswer: 1, explanation: "Linear populer di startup karena UI modern, performa cepat, dan keyboard-first navigation." }
  ],

  codeExamples: []
};