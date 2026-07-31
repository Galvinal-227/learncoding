export const chapter = {
  slug: "prettier-eslint-prettier",
  title: "Prettier + ESLint",
  description: "Setup Prettier dan ESLint bersama tanpa konflik.",
  icon: "SiPrettier",
  color: "#F7B93E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prettier-configuration", "eslint-introduction"],
  tags: ["prettier", "eslint", "integration", "conflict"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Masalah: Prettier + ESLint Konflik

ESLint punya rules formatting (quotes, semi, indent). Prettier juga. **Mereka bisa konflik!**

## Solusi: eslint-config-prettier

\`\`\`bash
npm install --save-dev eslint-config-prettier
\`\`\`

\`\`\`javascript
// eslint.config.js
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    // ... other configs ...
    prettierConfig  // HARUS PALING AKHIR! Matikan ESLint rules yang konflik
];
\`\`\`

## Solusi: eslint-plugin-prettier (Opsional)

\`\`\`bash
npm install --save-dev eslint-plugin-prettier
\`\`\`

\`\`\`javascript
// eslint.config.js
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': 'error'  // Run Prettier as ESLint rule
        }
    },
    prettierConfig
];
\`\`\`

## Recommended Setup

\`\`\`bash
npm install --save-dev prettier eslint eslint-config-prettier
\`\`\`

\`\`\`javascript
// eslint.config.js
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    {
        rules: {
            'no-console': 'warn',
            'no-unused-vars': 'error'
        }
    },
    prettier  // MUST be last!
];
\`\`\`

\`\`\`json
// .prettierrc
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "printWidth": 100
}
\`\`\`

## Workflow Simpel

1. **Prettier** → Format kode (style)
2. **ESLint** → Cek kualitas kode (bugs)
3. **eslint-config-prettier** → Matikan rules konflik
4. **Format on Save** → Auto-prettier di VS Code

## Full Setup Package.json Scripts

\`\`\`json
{
    "scripts": {
        "format": "prettier --write .",
        "format:check": "prettier --check .",
        "lint": "eslint src/",
        "lint:fix": "eslint src/ --fix",
        "check": "npm run format:check && npm run lint"
    }
}
\`\`\`
  `,

  quiz: [
    { question: "eslint-config-prettier?", options: ["Format", "Turn off ESLint rules that conflict with Prettier", "Lint", "Plugin"], correctAnswer: 1 },
    { question: "Prettier config position?", options: ["First", "LAST (to override other configs)", "Middle", "Anywhere"], correctAnswer: 1 }
  ],

  codeExamples: []
};