export const chapter = {
  slug: "vite-project-setup",
  title: "Project Setup",
  description: "Setup project Vite dari nol: struktur folder, config, dan template.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["vite-introduction"],
  tags: ["vite", "setup", "config", "template"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Create Project

\`\`\`bash
# Interactive
npm create vite@latest

# Direct template
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Available Templates

\`\`\`
vanilla, vanilla-ts
react, react-ts, react-swc, react-swc-ts
vue, vue-ts
preact, preact-ts
lit, lit-ts
svelte, svelte-ts
solid, solid-ts
\`\`\`

## Project Structure

\`\`\`
my-vite-app/
├── index.html          # Entry point (di root!)
├── package.json
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript config
├── public/             # Static assets
│   └── favicon.ico
└── src/
    ├── main.tsx        # App entry
    ├── App.tsx
    ├── index.css
    └── assets/
\`\`\`

## vite.config.ts (Minimal)

\`\`\`typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'dist',
        sourcemap: true
    }
});
\`\`\`

## index.html (Entry Point)

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>
\`\`\`

## Import Aliases

\`\`\`typescript
// vite.config.ts
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@utils': path.resolve(__dirname, './src/utils')
        }
    }
});

// Usage
import Button from '@components/Button';
\`\`\`
  `,

  quiz: [
    { question: "Vite: index.html location?", options: ["src/", "Root directory", "public/", "dist/"], correctAnswer: 1 },
    { question: "Import alias?", options: ["Not possible", "resolve.alias in vite.config", "tsconfig only", "package.json"], correctAnswer: 1 }
  ],

  codeExamples: []
};