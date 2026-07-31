export const chapter = {
  slug: "git-hooks",
  title: "Git Hooks",
  description: "Otomatisasi task dengan Git Hooks: pre-commit, pre-push, commit-msg.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["git-basic-commands"],
  tags: ["git", "hooks", "automation", "husky"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Git Hooks?

Script yang dijalankan otomatis saat event Git tertentu (commit, push, merge).

## Hooks Penting

| Hook | Trigger | Use Case |
|------|---------|----------|
| **pre-commit** | Sebelum commit | Lint, format, test |
| **commit-msg** | Saat commit | Validasi format pesan |
| **pre-push** | Sebelum push | Test, build check |
| **post-merge** | Setelah merge | Install deps |

## Husky (Modern Git Hooks)

\`\`\`bash
npm install --save-dev husky lint-staged
npx husky init
\`\`\`

\`\`\`bash
# .husky/pre-commit
npm run lint-staged
\`\`\`

\`\`\`json
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{css,scss,md}": [
      "prettier --write"
    ]
  }
}
\`\`\`

## Contoh: Validasi Commit Message

\`\`\`bash
# .husky/commit-msg
npx --no -- commitlint --edit $1
\`\`\`

\`\`\`javascript
// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']]
    }
};
\`\`\`
  `,

  quiz: [
    { question: "pre-commit hook untuk?", options: ["Setelah commit", "Sebelum commit (lint, format)", "Saat push", "Setelah merge"], correctAnswer: 1 },
    { question: "Husky untuk?", options: ["Testing", "Manage Git hooks dengan mudah", "Database", "Deploy"], correctAnswer: 1 }
  ],

  codeExamples: []
};