export const chapter = {
  slug: "eslint-configuration",
  title: "Konfigurasi ESLint",
  description: "Pelajari berbagai cara konfigurasi ESLint: flat config, legacy, env, globals.",
  icon: "SiEslint",
  color: "#4B32C3",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["eslint-introduction"],
  tags: ["eslint", "config", "flat-config", "eslintrc"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Dua Sistem Konfigurasi

### 1. Flat Config (ESLint v9+, Modern)
\`\`\`javascript
// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                myGlobal: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'error'
        }
    },
    {
        ignores: ['dist/', 'node_modules/', '*.config.js']
    }
];
\`\`\`

### 2. Legacy Config (.eslintrc) - ESLint v8 kebawah
\`\`\`json
// .eslintrc.json
{
    "env": {
        "browser": true,
        "node": true,
        "es2024": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": "warn",
        "no-console": "error",
        "semi": ["error", "always"],
        "quotes": ["error", "single"]
    }
}
\`\`\`

## Priority Rules

\`\`\`
Inline config > File config > Shareable config > Default
\`\`\`

## Disable Rules

### Disable baris ini
\`\`\`javascript
// eslint-disable-next-line no-console
console.log('Debug only');
\`\`\`

### Disable file ini
\`\`\`javascript
/* eslint-disable no-console */
console.log('A');
console.log('B');
/* eslint-enable no-console */
\`\`\`

## Severity Levels

| Value | Arti |
|-------|------|
| "off" / 0 | Matikan rule |
| "warn" / 1 | Warning (tidak gagalkan build) |
| "error" / 2 | Error (gagalkan build) |
  `,

  quiz: [
    { question: "Flat config file name?", options: [".eslintrc", "eslint.config.js", ".eslint.config", "eslint.json"], correctAnswer: 1 },
    { question: "Severity level untuk error?", options: ["off", "warn", "error / 2", "info"], correctAnswer: 2 }
  ],

  codeExamples: []
};