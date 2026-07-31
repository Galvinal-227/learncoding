export const chapter = {
  slug: "webpack-tree-shaking",
  title: "Tree Shaking",
  description: "Hilangkan kode yang tidak dipakai dengan tree shaking di Webpack.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["webpack-production-build"],
  tags: ["webpack", "tree-shaking", "dead-code", "optimization"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Tree Shaking?

Tree shaking = **menghilangkan kode yang tidak dipakai** (dead code elimination). Webpack otomatis di production mode.

## Requirements

\`\`\`javascript
// 1. ES Modules (import/export) - NOT CommonJS
// 2. Production mode (or optimization.usedExports)

// package.json
{
    "sideEffects": false  // All modules are pure (tree-shakeable)
    // Or specify files with side effects:
    "sideEffects": ["*.css", "*.scss"]
}
\`\`\`

## Example

\`\`\`javascript
// utils.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }

// app.js - Only uses 'add'
import { add } from './utils';
console.log(add(2, 3));

// Bundle: Only 'add' included! (subtract & multiply removed)
\`\`\`

## sideEffects Flag

\`\`\`json
{
    "sideEffects": [
        "*.css",
        "*.scss",
        "./src/polyfills.js"
    ]
}
\`\`\`

## Check Tree Shaking

\`\`\`bash
# Build with stats
webpack --mode production --profile --json > stats.json

# Analyze with bundle analyzer
npx webpack-bundle-analyzer stats.json

# Or check in browser DevTools → Coverage
\`\`\`

## Tree Shaking Tips

\`\`\`
✅ Gunakan ES Modules (import/export)
✅ Hindari CommonJS (require/module.exports)
✅ Set "sideEffects": false di package.json
✅ Production mode
✅ TerserPlugin (default in production)
✅ Avoid dynamic requires
✅ Use named exports (easier to shake)
\`\`\`
  `,

  quiz: [
    { question: "Tree shaking?", options: ["Add code", "Remove unused code (dead code elimination)", "Split code", "Cache"], correctAnswer: 1 },
    { question: "sideEffects: false?", options: ["All files have side effects", "All modules are pure (tree-shakeable)", "No optimization", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};