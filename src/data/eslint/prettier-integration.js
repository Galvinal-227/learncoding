export const chapter = {
  slug: "eslint-prettier-integration",
  title: "Integrasi dengan Prettier",
  description: "Setup ESLint + Prettier agar tidak konflik dan bekerja sama.",
  icon: "SiEslint",
  color: "#4B32C3",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["eslint-rules"],
  tags: ["eslint", "prettier", "integration", "format"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Masalah: ESLint + Prettier Konflik

ESLint punya rules formatting (quotes, semi). Prettier juga. **Mereka bisa konflik!**

## Solusi: eslint-config-prettier

\`\`\`bash
npm install --save-dev eslint-config-prettier
\`\`\`

\`\`\`javascript
// eslint.config.js
import prettierConfig from 'eslint-config-prettier';

export default [
    // ... config lain ...
    prettierConfig // HARUS paling akhir! Matikan rules ESLint yang konflik dengan Prettier
];
\`\`\`

## Tambahan: eslint-plugin-prettier (Optional)

\`\`\`bash
npm install --save-dev eslint-plugin-prettier
\`\`\`

\`\`\`javascript
// eslint.config.js
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    {
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': 'error' // Jalankan Prettier sebagai rule ESLint
        }
    }
];
\`\`\`

## Workflow Simpel

1. **Prettier** untuk formatting (simpan file → auto format)
2. **ESLint** untuk code quality (bug detection)
3. **eslint-config-prettier** untuk matikan konflik

## VS Code Setup

\`\`\`json
// .vscode/settings.json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
\`\`\`
  `,

  quiz: [
    { question: "eslint-config-prettier untuk?", options: ["Format kode", "Matikan ESLint rules yang konflik dengan Prettier", "Install Prettier", "Bundling"], correctAnswer: 1 },
    { question: "Urutan config: prettierConfig harus?", options: ["Paling awal", "Paling akhir (override)", "Tengah", "Di mana saja"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "ESLint + Prettier Setup Lengkap",
      language: "javascript",
      code: `// eslint.config.js
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'error'
        }
    },
    prettierConfig // Matikan rules yang konflik
];`
    }
  ]
};