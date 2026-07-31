export const chapter = {
  slug: "parcel-introduction",
  title: "Pengenalan Parcel",
  description: "Pahami apa itu Parcel, kenapa zero-config, dan perbedaannya dengan Webpack & Vite.",
  icon: "SiParcel",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["parcel", "bundler", "zero-config", "build-tool"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Parcel?

Parcel adalah **zero-configuration web application bundler**. Tidak perlu config file untuk memulai. Dibuat oleh **Devon Govett** tahun 2017. Sekarang versi 2 dengan performa lebih baik.

## Kenapa Parcel?

- ⚡ **Zero config** - Tidak perlu webpack.config.js, babel.config.js, dll
- 🚀 **Cepat** - Built-in caching, multi-core compilation (Rust-based)
- 📦 **Built-in support** - JS, TS, CSS, SCSS, HTML, images, React, Vue
- 🔥 **HMR** - Hot Module Replacement out of the box
- 🌳 **Tree shaking** - Otomatis remove unused code
- 📐 **Code splitting** - Dynamic import() auto-splitting
- 🖼️ **Asset handling** - Import gambar, font, SVG seperti module

## Parcel vs Webpack vs Vite

| | Parcel | Webpack | Vite |
|---|--------|---------|------|
| Config | Zero (optional) | Kompleks (wajib) | Minimal |
| Speed | Cepat | Lambat (JS-based) | Sangat cepat (esbuild) |
| Learning | Sangat mudah | Sulit | Mudah |
| Plugins | Auto-detect | Manual install | Manual install |
| Code splitting | Auto | Manual | Auto |
| Cocok untuk | Prototype, project kecil-menengah | Project kompleks, enterprise | Modern apps |

## Instalasi

\`\`\`bash
npm install --save-dev parcel
# Atau
npm install -g parcel
\`\`\`

## First Build

\`\`\`html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Parcel App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello Parcel!</h1>
    <script type="module" src="app.js"></script>
</body>
</html>
\`\`\`

\`\`\`bash
# Development
npx parcel index.html

# Production build
npx parcel build index.html

# Output: dist/ folder
\`\`\`

## Supported File Types (Auto)

\`\`\`
✅ JavaScript (ES6+, JSX)
✅ TypeScript
✅ CSS, SCSS, Less
✅ HTML
✅ Images (PNG, JPG, GIF, SVG)
✅ WebP, AVIF
✅ JSON, YAML, TOML
✅ React, Preact, Vue, Svelte
✅ Worker (Web Worker, Service Worker)
\`\`\`
  `,

  quiz: [
    { question: "Parcel vs Webpack?", options: ["Sama", "Parcel: zero-config; Webpack: complex config", "Webpack lebih mudah", "Parcel lebih lambat"], correctAnswer: 1 },
    { question: "Parcel command?", options: ["parcel start", "npx parcel index.html", "parcel run", "parcel init"], correctAnswer: 1 },
    { question: "Parcel: config file?", options: ["Wajib", "Optional (zero-config default)", "Tidak ada", "JSON only"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Quick Start Parcel",
      language: "bash",
      code: `# Create project
mkdir my-app && cd my-app

# Create files
echo '<!DOCTYPE html><html><body><h1>Hello</h1><script type="module" src="app.js"></script></body></html>' > index.html
echo 'console.log("Parcel rocks!")' > app.js

# Run
npx parcel index.html
# → http://localhost:1234

# Build
npx parcel build index.html
# → dist/`
    }
  ]
};