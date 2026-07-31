export const chapter = {
  slug: "prettier-integration",
  title: "Integrasi dengan Editor",
  description: "Integrasikan Prettier dengan VS Code, format on save, dan editor lainnya.",
  icon: "SiPrettier",
  color: "#F7B93E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["prettier-configuration"],
  tags: ["prettier", "vscode", "editor", "format-on-save"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## VS Code Setup

### 1. Install Extension
\`\`\`
Extensions (Ctrl+Shift+X) → Search: "Prettier" → Install
\`\`\`

### 2. Set as Default Formatter
\`\`\`json
// .vscode/settings.json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "prettier.requireConfig": true
}
\`\`\`

### 3. Format on Save
\`\`\`
Setelah setup di atas, setiap kali save file → auto-format!
\`\`\`

## JetBrains (WebStorm, IntelliJ)

\`\`\`
Settings → Languages & Frameworks → JavaScript → Prettier
- Prettier package: node_modules/prettier
- Run on save: ✅
\`\`\`

## Vim/Neovim

\`\`\`vim
" Using vim-prettier
Plug 'prettier/vim-prettier', { 'do': 'yarn install' }

let g:prettier#autoformat = 1
let g:prettier#autoformat_require_pragma = 0
\`\`\`

## Pre-commit Hook (Husky)

\`\`\`bash
npm install --save-dev husky lint-staged
npx husky init
\`\`\`

\`\`\`json
// package.json
{
    "lint-staged": {
        "*.{js,jsx,ts,tsx,css,md,json}": [
            "prettier --write"
        ]
    }
}
\`\`\`

\`\`\`bash
# .husky/pre-commit
npx lint-staged
\`\`\`

## CI/CD Check

\`\`\`json
{
    "scripts": {
        "format": "prettier --write .",
        "format:check": "prettier --check ."
    }
}
\`\`\`

\`\`\`yaml
# GitHub Actions
- name: Check formatting
  run: npx prettier --check "src/**/*.{js,ts,tsx}"
\`\`\`
  `,

  quiz: [
    { question: "VS Code: formatOnSave?", options: ["Manual", "Auto-format saat save file", "Command palette", "Terminal only"], correctAnswer: 1 },
    { question: "lint-staged?", options: ["All files", "Run linter on staged files only (pre-commit)", "Production", "CI only"], correctAnswer: 1 }
  ],

  codeExamples: []
};