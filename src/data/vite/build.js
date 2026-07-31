export const chapter = {
  slug: "vite-build",
  title: "Build & Production",
  description: "Build production dengan Vite: Rollup, code splitting, optimization.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["vite-dev-server"],
  tags: ["vite", "build", "rollup", "production"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Build Command

\`\`\`bash
vite build
# Output: dist/

vite preview  # Preview production build locally
\`\`\`

## Build Config

\`\`\`typescript
export default defineConfig({
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        minify: 'terser',  // or 'esbuild'
        target: 'es2015',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['@mui/material']
                }
            }
        },
        chunkSizeWarningLimit: 1000, // KB
        cssCodeSplit: true,
        assetsInlineLimit: 4096 // 4KB
    }
});
\`\`\`

## Code Splitting

\`\`\`javascript
// Auto-split dynamic imports
const LazyComponent = React.lazy(() => import('./HeavyComponent'));
\`\`\`

## Bundle Analysis

\`\`\`bash
npm install -D rollup-plugin-visualizer
\`\`\`

\`\`\`typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true
        })
    ]
});
\`\`\`

## Multi-Page Build

\`\`\`typescript
// vite.config.ts
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                admin: resolve(__dirname, 'admin/index.html')
            }
        }
    }
});
\`\`\`
  `,

  quiz: [
    { question: "Vite build uses?", options: ["Webpack", "Rollup", "esbuild", "Parcel"], correctAnswer: 1 },
    { question: "manualChunks?", options: ["Auto split", "Define custom chunks for code splitting", "CSS only", "HTML split"], correctAnswer: 1 }
  ],

  codeExamples: []
};