export const chapter = {
  slug: "portfolio-github-pages",
  title: "GitHub Profile",
  description: "Optimasi GitHub profile sebagai portfolio kedua.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["portfolio-introduction"],
  tags: ["portfolio", "github", "profile", "readme"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitHub Profile README

Buat repo dengan nama **sama dengan username GitHub-mu** → otomatis jadi profile README!

## Profile README Template

\`\`\`markdown
# Hi, I'm Budi 👋

Full-Stack Developer | React • Node.js • TypeScript

[![Portfolio](https://img.shields.io/badge/Portfolio-budi.dev-blue)](https://budi.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-budi-blue)](https://linkedin.com/in/budi)

## 🚀 About Me
Full-stack developer with 3+ years experience building web applications.
Passionate about performance optimization and clean code.

## 🛠️ Tech Stack
![React](https://img.shields.io/badge/React-20232A?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)

## 📊 GitHub Stats
![GitHub stats](https://github-readme-stats.vercel.app/api?username=budi&show_icons=true)

## 🌟 Featured Projects
- [E-Commerce Platform](https://github.com/budi/ecommerce) - Full-stack marketplace
- [AI Chat App](https://github.com/budi/ai-chat) - GPT-powered chatbot
- [Task Manager](https://github.com/budi/task-manager) - Drag & drop kanban

## 📝 Latest Blog Posts
- [Optimizing Next.js Performance](https://blog.budi.dev/nextjs-perf)
- [Why I Switched to TypeScript](https://blog.budi.dev/ts-switch)

## 📫 Contact
- Email: budi@email.com
- Portfolio: [budi.dev](https://budi.dev)
\`\`\`

## Pinned Repositories

\`\`\`
1. Buka profile GitHub
2. "Customize your pins"
3. Pilih 6 repositori terbaik
4. Urutkan yang paling impressive di atas
\`\`\`

## GitHub Actions for Profile

\`\`\`yaml
# .github/workflows/profile-update.yml
name: Update Profile
on:
  schedule:
    - cron: '0 0 * * *'  # Daily
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Update blog posts
        run: node scripts/fetch-blog-posts.js
      - name: Commit changes
        run: |
          git config user.name 'github-actions'
          git add README.md
          git commit -m 'Update profile' || exit 0
          git push
\`\`\`

## GitHub Profile Tools

| Tool | Fungsi |
|------|--------|
| **github-readme-stats** | Stats card |
| **github-readme-streak-stats** | Streak stats |
| **github-profile-trophy** | Trophy case |
| **shields.io** | Badges |
| **github-readme-activity-graph** | Activity graph |
  `,

  quiz: [
    { question: "Profile README?", options: ["Repo README", "Repo dengan nama username", "Gist", "Wiki"], correctAnswer: 1 },
    { question: "Pinned repos: berapa?", options: ["2", "Maksimal 6", "10", "Unlimited"], correctAnswer: 1 }
  ],

  codeExamples: []
};