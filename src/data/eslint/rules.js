export const chapter = {
  slug: "eslint-rules",
  title: "Rules & Plugins",
  description: "Pelajari rules ESLint yang penting dan plugin populer.",
  icon: "SiEslint",
  color: "#4B32C3",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["eslint-configuration"],
  tags: ["eslint", "rules", "plugins", "recommended"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Rules Penting

### Code Quality
\`\`\`javascript
rules: {
    'no-unused-vars': 'error',        // Variabel tidak dipakai
    'no-undef': 'error',              // Variabel tidak terdefinisi
    'no-const-assign': 'error',       // Reassign const
    'no-duplicate-imports': 'error',  // Import ganda
    'no-empty': 'error',              // Block kosong
    'no-var': 'error',                // Larang var
    'prefer-const': 'error',          // Pakai const jika tidak reassign
    'eqeqeq': ['error', 'always'],    // Wajib ===
}
\`\`\`

### Style
\`\`\`javascript
rules: {
    'semi': ['error', 'always'],      // Wajib semicolon
    'quotes': ['error', 'single'],    // Single quote
    'indent': ['error', 2],           // 2 spaces indent
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
}
\`\`\`

## Plugin Populer

### eslint-plugin-react
\`\`\`bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
\`\`\`

\`\`\`javascript
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    reactPlugin.configs.recommended,
    {
        plugins: { 'react-hooks': reactHooks },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        }
    }
];
\`\`\`

### eslint-plugin-import
\`\`\`javascript
rules: {
    'import/order': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
    }],
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error'
}
\`\`\`

### @typescript-eslint
\`\`\`javascript
import tseslint from 'typescript-eslint';

export default tseslint.config(
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'error'
        }
    }
);
\`\`\`
  `,

  quiz: [
    { question: "eqeqeq rule?", options: ["Debug", "Wajib pakai ===", "Larang ==", "Ga guna"], correctAnswer: 1 },
    { question: "Plugin untuk React hooks?", options: ["eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-jsx", "eslint-plugin-hook"], correctAnswer: 1 }
  ],

  codeExamples: []
};