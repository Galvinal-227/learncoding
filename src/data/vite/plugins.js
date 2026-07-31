export const chapter = {
  slug: "vite-plugins",
  title: "Plugins",
  description: "Gunakan dan buat plugins Vite untuk memperluas fungsionalitas.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["vite-project-setup"],
  tags: ["vite", "plugins", "react", "custom"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Official Plugins

| Plugin | Untuk |
|--------|-------|
| @vitejs/plugin-react | React Fast Refresh |
| @vitejs/plugin-vue | Vue SFC |
| @vitejs/plugin-react-swc | React with SWC (faster) |
| @vitejs/plugin-legacy | Legacy browser support |

## React Plugin

\`\`\`bash
npm install -D @vitejs/plugin-react
\`\`\`

\`\`\`typescript
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()]
});
\`\`\`

## Community Plugins

| Plugin | Fungsi |
|--------|--------|
| vite-plugin-pwa | PWA support |
| vite-plugin-compression | Gzip/Brotli |
| vite-plugin-svgr | SVG as React component |
| vite-plugin-html | HTML transformation |
| vite-plugin-imagemin | Image optimization |

## Custom Plugin

\`\`\`typescript
// my-plugin.ts
import type { Plugin } from 'vite';

export default function myPlugin(): Plugin {
    return {
        name: 'my-plugin',
        
        transform(src, id) {
            if (id.endsWith('.custom')) {
                return {
                    code: src.toUpperCase(),
                    map: null
                };
            }
        },
        
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                console.log(req.url);
                next();
            });
        }
    };
}
\`\`\`
  `,

  quiz: [
    { question: "@vitejs/plugin-react?", options: ["Vue support", "React Fast Refresh", "Svelte", "Legacy browser"], correctAnswer: 1 },
    { question: "Custom plugin: name?", options: ["Optional", "Required (unique identifier)", "Auto", "File name"], correctAnswer: 1 }
  ],

  codeExamples: []
};