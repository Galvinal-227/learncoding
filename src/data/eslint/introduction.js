export const chapter = {
  slug: "eslint-introduction",
  title: "Pengenalan ESLint",
  description: "Pahami apa itu ESLint, kenapa penting, dan cara kerjanya.",
  icon: "SiEslint",
  color: "#4B32C3",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["eslint", "linting", "code-quality", "static-analysis"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu ESLint?

ESLint adalah **static code analysis tool** untuk JavaScript/TypeScript. ESLint menganalisis kode tanpa menjalankannya dan menemukan **masalah, bug potensial, dan inkonsistensi style**.

## Kenapa ESLint?

- 🐛 **Catch bugs early** - Variable tidak dipakai, typo, unreachable code
- 📏 **Consistent code style** - Indentasi, quotes, spacing seragam
- 🚫 **Cegah bad practices** - var, console.log production, eval
- 📚 **Document conventions** - Rules = dokumentasi standar tim
- 🔧 **Auto-fix** - Banyak rules bisa diperbaiki otomatis

## ESLint vs Prettier

| | ESLint | Prettier |
|---|--------|----------|
| Fokus | Code quality + style | Code formatting ONLY |
| Cari bug | ✅ (unused vars, unreachable) | ❌ |
| Format | ✅ (quotes, spacing) | ✅ (lebih lengkap) |
| Auto-fix | ✅ | ✅ |
| Rekomendasi | Pakai keduanya! | |

## Instalasi

\`\`\`bash
npm install --save-dev eslint
\`\`\`

## Inisialisasi

\`\`\`bash
npm init @eslint/config
\`\`\`

## Cara Kerja

\`\`\`
Source Code → Parser (AST) → Rules check → Report errors/warnings
\`\`\`

ESLint parse kode ke **AST (Abstract Syntax Tree)**, lalu setiap rule memeriksa AST. Jika ada pelanggaran → report.
  `,

  quiz: [
    { question: "ESLint adalah?", options: ["Formatter", "Static code analysis tool", "Bundler", "Testing framework"], correctAnswer: 1 },
    { question: "ESLint vs Prettier?", options: ["Sama", "ESLint: quality+style; Prettier: formatting only", "Prettier cari bug", "ESLint deprecated"], correctAnswer: 1 },
    { question: "ESLint parse kode ke?", options: ["Binary", "AST (Abstract Syntax Tree)", "JSON", "XML"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "ESLint Pertama",
      language: "bash",
      code: `# Install
npm install --save-dev eslint

# Init config
npm init @eslint/config

# Lint
npx eslint src/

# Auto-fix
npx eslint src/ --fix`
    }
  ]
};