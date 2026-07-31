export const chapter = {
  slug: "vite-react-vite",
  title: "React + Vite",
  description: "Setup React dengan Vite: Fast Refresh, SWC, path aliases.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["vite-plugins"],
  tags: ["vite", "react", "swc", "fast-refresh"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Create React + Vite Project

\`\`\`bash
# React + TypeScript (Babel)
npm create vite@latest my-app -- --template react-ts

# React + TypeScript (SWC - faster!)
npm create vite@latest my-app -- --template react-swc-ts
\`\`\`

## React Plugin Options

\`\`\`typescript
// vite.config.ts
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',  // New JSX Transform
            babel: {
                plugins: ['styled-components']
            }
        })
    ]
});
\`\`\`

## SWC Plugin (Faster Alternative)

\`\`\`bash
npm install -D @vitejs/plugin-react-swc
\`\`\`

\`\`\`typescript
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()]
});
\`\`\`

## Path Aliases

\`\`\`typescript
// vite.config.ts
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@utils': path.resolve(__dirname, './src/utils')
        }
    }
});
\`\`\`

\`\`\`json
// tsconfig.json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@components/*": ["src/components/*"],
            "@hooks/*": ["src/hooks/*"]
        }
    }
}
\`\`\`

\`\`\`tsx
// Now use!
import Button from '@components/Button';
import { useAuth } from '@hooks/useAuth';
\`\`\`

## SVG as Component

\`\`\`bash
npm install -D vite-plugin-svgr
\`\`\`

\`\`\`typescript
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()]
});
\`\`\`

\`\`\`tsx
import Logo from './logo.svg?react';
<Logo width={100} height={100} />
\`\`\`

## Environment Variables

\`\`\`typescript
// Only VITE_ prefixed exposed!
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
\`\`\`

## React Fast Refresh

- ✅ Auto-enabled with @vitejs/plugin-react
- ✅ Preserves component state on edit
- ✅ Instant feedback (<100ms)
- ✅ Error overlay with stack trace
\`\`\`
  `,

  quiz: [
    { question: "React + Vite plugin?", options: ["None needed", "@vitejs/plugin-react", "react-scripts", "webpack"], correctAnswer: 1 },
    { question: "SWC?", options: ["Babel", "Faster Rust-based compiler", "Linter", "Bundler"], correctAnswer: 1 }
  ],

  codeExamples: []
};