export const chapter = {
  slug: "eslint-plugins",
  title: "Custom Plugins",
  description: "Gunakan dan konfigurasi plugin ESLint populer.",
  icon: "SiEslint",
  color: "#4B32C3",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["eslint-rules"],
  tags: ["eslint", "plugins", "extends", "shareable-config"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Shareable Configs Populer

### Airbnb
\`\`\`bash
npm install --save-dev eslint-config-airbnb
\`\`\`

\`\`\`javascript
// eslint.config.js
import airbnb from 'eslint-config-airbnb';

export default [
    airbnb,
    { rules: { 'no-console': 'off' } }
];
\`\`\`

### Standard
\`\`\`bash
npm install --save-dev eslint-config-standard
\`\`\`

### Google
\`\`\`bash
npm install --save-dev eslint-config-google
\`\`\`

## Plugin Rekomendasi

| Plugin | Untuk |
|--------|-------|
| **eslint-plugin-react** | React best practices |
| **eslint-plugin-react-hooks** | Rules of Hooks |
| **@typescript-eslint** | TypeScript |
| **eslint-plugin-import** | Import/export order |
| **eslint-plugin-jsx-a11y** | Accessibility JSX |
| **eslint-plugin-jest** | Jest testing |
| **eslint-plugin-cypress** | Cypress E2E |
| **eslint-plugin-tailwindcss** | Tailwind CSS class order |
  `,

  quiz: [
    { question: "Airbnb config?", options: ["eslint-config-airbnb", "eslint-airbnb", "airbnb-eslint", "eslint-plugin-airbnb"], correctAnswer: 0 },
    { question: "Plugin untuk accessibility JSX?", options: ["eslint-plugin-react", "eslint-plugin-jsx-a11y", "eslint-plugin-a11y", "eslint-plugin-accessibility"], correctAnswer: 1 }
  ],

  codeExamples: []
};