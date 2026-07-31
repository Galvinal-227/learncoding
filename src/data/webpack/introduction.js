export const chapter = {
  slug: "webpack-introduction",
  title: "Pengenalan Webpack",
  description: "Pahami apa itu Webpack, kenapa jadi module bundler #1, dan konsep dasarnya.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction", "node-js-introduction"],
  tags: ["webpack", "bundler", "module", "javascript"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Webpack?

Webpack adalah **static module bundler** untuk aplikasi JavaScript modern. Memproses semua file (JS, CSS, images, fonts) dan menghasilkan **bundle** yang optimal untuk production.

## Kenapa Webpack?

- 📦 **Module bundling** - Gabung semua file jadi 1 (atau beberapa) bundle
- 🔄 **Loaders** - Proses file non-JS (CSS, images, TypeScript)
- 🧩 **Plugins** - Optimasi bundle, HTML generation, env variables
- 🌳 **Tree shaking** - Hapus kode yang tidak dipakai
- 📐 **Code splitting** - Pecah bundle untuk lazy loading
- 🔥 **HMR** - Hot Module Replacement (update tanpa reload)
- ⚡ **Production optimization** - Minify, compression

## Webpack vs Vite vs Parcel

| | Webpack | Vite | Parcel |
|---|---------|------|--------|
| Config | Kompleks | Minimal | Zero |
| Speed | Lebih lambat | Sangat cepat | Cepat |
| Ecosystem | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| Customization | Unlimited | Limited | Limited |
| Learning | Tinggi | Rendah | Rendah |
| Production | Enterprise | Modern apps | Simple projects |

## Core Concepts

| Concept | Deskripsi |
|---------|-----------|
| **Entry** | File awal (starting point) |
| **Output** | Hasil bundle (dist/) |
| **Loaders** | Transform file (CSS→JS, TS→JS) |
| **Plugins** | Optimasi & asset management |
| **Mode** | development | production | none |
| **Code Splitting** | Pecah bundle |

## Instalasi

\`\`\`bash
npm install -D webpack webpack-cli
\`\`\`

## Minimal Config

\`\`\`javascript
// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
\`\`\`

## Dependency Graph

Webpack membuat **dependency graph** dari entry point. Semua \`import\`/ \`require\` di-resolve.

\`\`\`
src/index.js
├── import './styles.css'
├── import React from 'react'
├── import logo from './logo.png'
└── import { sum } from './utils'
\`\`\`
  `,

  quiz: [
    { question: "Webpack vs Vite?", options: ["Same", "Webpack: complex config; Vite: fast, minimal config", "Vite more complex", "Webpack deprecated"], correctAnswer: 1 },
    { question: "Entry?", options: ["Output file", "Starting point of application", "Plugin", "Loader"], correctAnswer: 1 },
    { question: "Loaders?", options: ["Output", "Transform non-JS files", "Entry", "Mode"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Webpack Quick Start",
      language: "bash",
      code: `npm install -D webpack webpack-cli
# Create webpack.config.js
# Add build script: "build": "webpack"
npm run build`
    }
  ]
};