export const chapter = {
  slug: "vite-library-mode",
  title: "Library Mode",
  description: "Build library reusable dengan Vite Library Mode.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["vite-build"],
  tags: ["vite", "library", "npm", "package"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Library Mode Config

\`\`\`typescript
// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'MyLibrary',
            fileName: (format) => \`my-library.\${format}.js\`,
            formats: ['es', 'umd', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],  // Don't bundle!
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
\`\`\`

## Package.json

\`\`\`json
{
    "name": "my-library",
    "version": "1.0.0",
    "main": "./dist/my-library.cjs.js",
    "module": "./dist/my-library.es.js",
    "types": "./dist/index.d.ts",
    "exports": {
        ".": {
            "import": "./dist/my-library.es.js",
            "require": "./dist/my-library.cjs.js"
        }
    },
    "files": ["dist"],
    "scripts": {
        "build": "vite build && tsc --emitDeclarationOnly",
        "prepublishOnly": "npm run build"
    }
}
\`\`\`

## Generate Types

\`\`\`bash
npm install -D typescript
\`\`\`

\`\`\`json
// tsconfig.json
{
    "compilerOptions": {
        "declaration": true,
        "declarationDir": "./dist",
        "emitDeclarationOnly": true
    }
}
\`\`\`

## Publish to NPM

\`\`\`bash
npm login
npm publish
# or scoped:
npm publish --access public
\`\`\`

## Library Mode vs App Mode

| Library | App |
|---------|-----|
| Reusable code | Final application |
| Exports API | No exports |
| External deps | Bundle everything |
| Multiple formats | Single bundle |
\`\`\`
  `,

  quiz: [
    { question: "Library mode?", options: ["App only", "Build as reusable NPM package", "Dev only", "Not possible"], correctAnswer: 1 },
    { question: "external in rollupOptions?", options: ["Bundle all", "Don't bundle specified deps", "CSS only", "HTML"], correctAnswer: 1 }
  ],

  codeExamples: []
};