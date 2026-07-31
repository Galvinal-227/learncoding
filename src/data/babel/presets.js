export const chapter = {
  slug: "babel-presets",
  title: "Presets (@babel/preset-env)",
  description: "Pahami presets Babel, terutama @babel/preset-env untuk kompatibilitas browser.",
  icon: "SiBabel",
  color: "#F9DC3E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["babel-introduction"],
  tags: ["babel", "preset", "env", "browserslist"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Preset?

Preset adalah **kumpulan plugin** yang dikemas jadi satu. Daripada install puluhan plugin satu-satu, pakai preset.

## Preset Populer

| Preset | Fungsi |
|--------|--------|
| **@babel/preset-env** | Auto detect target, paling penting! |
| **@babel/preset-react** | Transform JSX React |
| **@babel/preset-typescript** | Transform TypeScript |
| **@babel/preset-flow** | Transform Flow |

## @babel/preset-env (Paling Penting)

\`\`\`bash
npm install --save-dev @babel/preset-env
\`\`\`

### Konfigurasi Dasar
\`\`\`json
{
  "presets": ["@babel/preset-env"]
}
\`\`\`

### Target Browser (Browserslist)
\`\`\`json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead"
    }]
  ]
}
\`\`\`

### Contoh Targets
\`\`\`json
// Semua browser dengan >0.25% market share
{ "targets": "> 0.25%, not dead" }

// Browser spesifik
{ "targets": { "chrome": "58", "ie": "11" } }

// Default (ES5)
{ "targets": {} }

// Node.js
{ "targets": { "node": "current" } }
\`\`\`

### Browserslist di package.json
\`\`\`json
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
}
\`\`\`

## Options @babel/preset-env

\`\`\`javascript
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead",
      "modules": false,        // Biarkan Webpack handle modules
      "useBuiltIns": "usage",   // Auto polyfill
      "corejs": "3.35",         // Versi core-js
      "debug": true,            // Log targets/plugins yang dipakai
      "shippedProposals": true  // Fitur yang hampir jadi standar
    }]
  ]
}
\`\`\`

## useBuiltIns Options

| Value | Fungsi |
|-------|--------|
| **false** | Tidak tambah polyfill otomatis |
| **"entry"** | Tambah semua polyfill yang dibutuhkan target |
| **"usage"** | ✅ Hanya tambah polyfill yang dipakai di kode |
  `,

  quiz: [
    { question: "Preset paling penting Babel?", options: ["@babel/preset-react", "@babel/preset-env", "@babel/preset-flow", "@babel/preset-minify"], correctAnswer: 1 },
    { question: "Browserslist untuk?", options: ["Daftar browser target", "Daftar plugin", "Daftar file", "Daftar error"], correctAnswer: 0 },
    { question: "useBuiltIns: 'usage' artinya?", options: ["Tambah semua polyfill", "Hanya tambah polyfill yang dipakai", "Tidak tambah polyfill", "Manual import"], correctAnswer: 1 }
  ],

  codeExamples: []
};