export const chapter = {
  slug: "vite-introduction",
  title: "Pengenalan Vite",
  description: "Pahami apa itu Vite, kenapa super cepat, dan arsitekturnya.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction", "node-js-introduction"],
  tags: ["vite", "build-tool", "hmr", "esbuild"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Vite?

Vite (bahasa Prancis: "cepat") adalah **build tool modern** yang dibuat oleh **Evan You** (creator Vue.js). Menggunakan **ES modules native** di development dan **Rollup** di production.

## Kenapa Vite Super Cepat?

- ⚡ **Native ESM** - Tidak perlu bundle saat development
- 🔥 **Instant HMR** - Hot Module Replacement <1 detik
- 🚀 **esbuild** - Pre-bundle dependencies (Go, 10-100x faster)
- 📦 **Rollup** - Production build optimized
- 🧩 **Framework-agnostic** - React, Vue, Svelte, vanilla

## Vite vs Webpack vs Create React App

| | Vite | Webpack | CRA |
|---|------|---------|-----|
| Dev start | <1 detik | 10-60 detik | 10-30 detik |
| HMR speed | <100ms | 1-5 detik | 1-3 detik |
| Build | Rollup | Webpack | Webpack |
| Config | Minimal | Kompleks | Hidden |
| Learning | Mudah | Sulit | Mudah |
| Status | Modern | Legacy | Deprecated |

## Arsitektur

\`\`\`
Development:
  Browser (Native ESM) ← Dev Server (no bundle)

Production:
  Rollup → Optimized Bundle (tree-shaken, minified)
\`\`\`

## Instalasi

\`\`\`bash
# Vanilla
npm create vite@latest my-app -- --template vanilla

# React
npm create vite@latest my-app -- --template react

# React + TypeScript
npm create vite@latest my-app -- --template react-ts

# Vue
npm create vite@latest my-app -- --template vue

# Svelte
npm create vite@latest my-app -- --template svelte
\`\`\`

## First Run

\`\`\`bash
cd my-app
npm install
npm run dev
# http://localhost:5173
\`\`\`

## Vite vs Turbopack vs Parcel

| | Vite | Turbopack | Parcel |
|---|------|-----------|--------|
| Creator | Evan You | Vercel | Devon Govett |
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Ecosystem | Very large | Growing | Small |
| Config | vite.config.js | next.config.js | Zero |
\`\`\`
  `,

  quiz: [
    { question: "Vite: development bundle?", options: ["Yes", "No (Native ESM, no bundle)", "Like Webpack", "Only production"], correctAnswer: 1 },
    { question: "esbuild?", options: ["Bundler", "Go-based pre-bundler (10-100x faster)", "Plugin", "CSS tool"], correctAnswer: 1 },
    { question: "Vite default port?", options: ["3000", "5173", "8080", "8000"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Vite Quick Start",
      language: "bash",
      code: `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev`
    }
  ]
};