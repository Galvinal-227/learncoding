export const chapter = {
  slug: "babel-polyfills",
  title: "Polyfills & core-js",
  description: "Pahami polyfills dan cara menambah fitur baru ke browser lama.",
  icon: "SiBabel",
  color: "#F9DC3E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["babel-presets"],
  tags: ["babel", "polyfill", "core-js", "compatibility"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Syntax vs Feature

| | Syntax Transform | Polyfill |
|---|-----------------|----------|
| Bisa di-compile? | ✅ Yes | ❌ Butuh polyfill |
| Contoh | Arrow → function | Promise, Array.includes |

## Polyfill Strategies

### 1. Manual Import (Tidak Direkomendasikan)
\`\`\`javascript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
\`\`\`

### 2. useBuiltIns: "usage" (✅ Rekomendasi)
\`\`\`javascript
// .babelrc
{
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "corejs": "3.35"
    }]
  ]
}
\`\`\`

Babel auto-detect polyfill yang dibutuhkan:
\`\`\`javascript
// Kode kamu:
const p = new Promise();
[1, 2, 3].includes(2);

// Output (auto-import):
import "core-js/modules/es.promise";
import "core-js/modules/es.array.includes";
const p = new Promise();
[1, 2, 3].includes(2);
\`\`\`

### 3. @babel/plugin-transform-runtime
\`\`\`bash
npm install --save-dev @babel/plugin-transform-runtime
npm install @babel/runtime-corejs3
\`\`\`

\`\`\`javascript
{
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "corejs": 3,
      "helpers": true,
      "regenerator": true
    }]
  ]
}
\`\`\`
✅ Tidak mengotori global scope (cocok untuk library)
❌ Bundle lebih besar sedikit

## core-js Versions

| Versi | Status |
|-------|--------|
| core-js@2 | ❌ Deprecated |
| core-js@3 | ✅ Current, recommended |
  `,

  quiz: [
    { question: "Polyfill vs Syntax transform?", options: ["Sama", "Syntax: bisa di-compile; Polyfill: tambah fitur baru", "Syntax lebih cepat", "Polyfill deprecated"], correctAnswer: 1 },
    { question: "useBuiltIns: 'usage' keuntungan?", options: ["Tambah semua", "Auto polyfill sesuai kode & target", "Manual control", "Lebih kecil"], correctAnswer: 1 },
    { question: "Plugin transform-runtime untuk?", options: ["Production", "Library (tidak polusi global)", "Browser", "Node only"], correctAnswer: 1 }
  ],

  codeExamples: []
};