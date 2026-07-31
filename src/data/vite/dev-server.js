export const chapter = {
  slug: "vite-dev-server",
  title: "Dev Server & HMR",
  description: "Gunakan Vite Dev Server dengan Hot Module Replacement instant.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["vite-project-setup"],
  tags: ["vite", "dev-server", "hmr", "proxy"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Dev Server Config

\`\`\`typescript
export default defineConfig({
    server: {
        port: 3000,
        open: true,           // Auto-open browser
        host: true,           // Allow external access
        strictPort: false,    // Try next port if taken
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\\/api/, '')
            }
        },
        watch: {
            ignored: ['!**/node_modules/**']
        }
    }
});
\`\`\`

## HMR (Hot Module Replacement)

Vite auto-handles HMR for:
- ✅ React components (via @vitejs/plugin-react)
- ✅ CSS/SCSS (instant update)
- ✅ Static assets
- ✅ Store changes (state preserved!)

## Custom HMR

\`\`\`javascript
// module.js
export const data = { count: 0 };

if (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
        // Handle HMR manually
        console.log('Module updated!');
    });
    
    import.meta.hot.dispose(() => {
        // Cleanup before replacement
        console.log('Module disposed');
    });
}
\`\`\`

## NPM Scripts

\`\`\`json
{
    "scripts": {
        "dev": "vite",
        "dev:host": "vite --host",
        "dev:https": "vite --https",
        "build": "vite build",
        "preview": "vite preview",
        "lint": "eslint src/"
    }
}
\`\`\`
  `,

  quiz: [
    { question: "HMR?", options: ["Reload page", "Hot Module Replacement (instant update)", "Build", "Error"], correctAnswer: 1 },
    { question: "Vite proxy?", options: ["Not possible", "server.proxy config", "Env only", "Plugin only"], correctAnswer: 1 }
  ],

  codeExamples: []
};