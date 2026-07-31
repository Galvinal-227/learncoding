export const chapter = {
  slug: "prettier-introduction",
  title: "Pengenalan Prettier",
  description: "Pahami apa itu Prettier, kenapa penting, dan perbedaannya dengan ESLint.",
  icon: "SiPrettier",
  color: "#F7B93E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["prettier", "formatting", "code-style", "opinionated"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Prettier?

Prettier adalah **opinionated code formatter** yang mendukung banyak bahasa. Format kode otomatis saat save, menghilangkan debat style di tim.

## Kenapa Prettier?

- ⚡ **Otomatis** - Format saat save, tidak perlu pikir style
- 🤝 **Konsisten** - Semua anggota tim pakai style yang sama
- 🎯 **Opinionated** - Tidak banyak pilihan (just use it!)
- 🌐 **Multi-language** - JS, TS, JSX, CSS, HTML, JSON, Markdown, GraphQL, YAML
- 🔧 **Integrasi** - VS Code, JetBrains, Vim, Sublime
- 🚫 **No bikeshedding** - Stop debat "single vs double quotes"

## Prettier vs ESLint

| | Prettier | ESLint |
|---|---------|--------|
| Fungsi | **Formatting** (style) | **Code quality** (bugs, best practices) |
| Perbaikan | Spasi, quotes, koma, line width | Unused vars, unreachable code |
| Konfigurasi | Minimal (opinionated) | Sangat konfigurabel |
| Auto-fix | ✅ | ✅ (some rules) |
| Gunakan? | ✅ Wajib | ✅ Wajib |
| **Pakai keduanya!** | | |

## Instalasi

\`\`\`bash
npm install --save-dev prettier
\`\`\`

## Cara Pakai

\`\`\`bash
# Format file
npx prettier --write src/app.js

# Format folder
npx prettier --write "src/**/*.{js,jsx,ts,tsx,css,json,md}"

# Check only (CI/CD)
npx prettier --check "src/**/*"

# Format semua supported files
npx prettier --write .
\`\`\`

## Before vs After

### Before (Tidak Konsisten)
\`\`\`javascript
const name = "Budi"
const age=25;
function hello( ){return'Hello '+name;}
\`\`\`

### After (Prettier)
\`\`\`javascript
const name = 'Budi';
const age = 25;
function hello() {
    return 'Hello ' + name;
}
\`\`\`
  `,

  quiz: [
    { question: "Prettier vs ESLint?", options: ["Sama", "Prettier: formatter; ESLint: code quality", "ESLint: formatter", "Tidak berhubungan"], correctAnswer: 1 },
    { question: "Prettier opinionated?", options: ["Banyak opsi", "Opinionated (sedikit opsi, langsung pakai)", "Tidak ada opsi", "Custom semua"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Prettier Quick Start",
      language: "bash",
      code: `# Install
npm install --save-dev prettier

# Create config
echo '{"semi":true,"singleQuote":true,"tabWidth":2}' > .prettierrc

# Format
npx prettier --write "src/**/*.js"

# Check in CI
npx prettier --check "src/**/*.js"`
    }
  ]
};