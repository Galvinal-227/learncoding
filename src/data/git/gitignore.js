export const chapter = {
  slug: "git-gitignore",
  title: ".gitignore",
  description: "Abaikan file yang tidak perlu di-track dengan .gitignore.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["git-basic-commands"],
  tags: ["git", "gitignore", "ignore", "config"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa .gitignore?

Tidak semua file perlu di-track: dependencies, build output, secrets, OS files.

## Contoh .gitignore (Node.js)

\`\`\`gitignore
# Dependencies
node_modules/

# Build output
dist/
.next/
build/

# Environment variables
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/
\`\`\`

## Pattern .gitignore

\`\`\`gitignore
node_modules/    # Abaikan folder
*.log            # Abaikan semua file .log
!important.log   # Kecuali important.log
dist/**/*.js     # Abaikan .js di semua subfolder dist
\`\`\`

## Global .gitignore

\`\`\`bash
git config --global core.excludesfile ~/.gitignore_global
\`\`\`
  `,

  quiz: [
    { question: ".gitignore untuk?", options: ["Track file", "Abaikan file dari Git", "Hapus file", "Rename file"], correctAnswer: 1 },
    { question: "Pattern abaikan semua .log KECUALI important.log?", options: ["*.log", "*.log\\n!important.log", "!*.log", "*.log -important"], correctAnswer: 1 }
  ],

  codeExamples: []
};