export const chapter = {
  slug: "eslint-custom-rules",
  title: "Custom Rules",
  description: "Buat custom ESLint rule untuk kebutuhan spesifik tim.",
  icon: "SiEslint",
  color: "#4B32C3",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["eslint-plugins"],
  tags: ["eslint", "custom-rules", "plugin", "ast"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kapan Butuh Custom Rule?

- 🏢 Aturan tim spesifik ("dilarang import dari folder X")
- 📦 Aturan package internal ("harus pakai utils/helper")
- 🧹 Refactor gradual ("function X deprecated, pakai Y")

## Struktur Custom Rule

\`\`\`javascript
// eslint-plugin-myteam/rules/no-legacy-api.js
module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Jangan pakai legacy API',
            recommended: true
        },
        fixable: 'code',
        schema: [] // No options
    },
    create(context) {
        return {
            CallExpression(node) {
                if (node.callee.name === 'legacyFetch') {
                    context.report({
                        node,
                        message: 'Pakai fetchHelper() bukan legacyFetch()',
                        fix(fixer) {
                            return fixer.replaceText(node.callee, 'fetchHelper');
                        }
                    });
                }
            }
        };
    }
};
\`\`\`

## Testing Custom Rule

\`\`\`javascript
const { RuleTester } = require('eslint');
const rule = require('./rules/no-legacy-api');

const ruleTester = new RuleTester();
ruleTester.run('no-legacy-api', rule, {
    valid: ['fetchHelper("/api")'],
    invalid: [
        {
            code: 'legacyFetch("/api")',
            errors: [{ message: 'Pakai fetchHelper() bukan legacyFetch()' }]
        }
    ]
});
\`\`\`
  `,

  quiz: [
    { question: "Custom rule dibuat jika?", options: ["Iseng", "Aturan spesifik tim/package tidak ada di rules bawaan", "Selalu", "Tidak pernah"], correctAnswer: 1 },
    { question: "RuleTester untuk?", options: ["Linting", "Testing custom rule", "Build", "Deploy"], correctAnswer: 1 }
  ],

  codeExamples: []
};