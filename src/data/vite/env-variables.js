export const chapter = {
  slug: "vite-env-variables",
  title: "Environment Variables",
  description: "Kelola environment variables di Vite dengan import.meta.env.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["vite-project-setup"],
  tags: ["vite", "env", "environment", "variables"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## .env Files

\`\`\`bash
# .env (all modes)
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App

# .env.development
VITE_API_URL=http://localhost:3000

# .env.production
VITE_API_URL=https://api.production.com
\`\`\`

## VITE_ Prefix (Required!)

Hanya variabel dengan prefix **VITE_** yang exposed ke client:

\`\`\`javascript
// ✅ Accessible in client
console.log(import.meta.env.VITE_API_URL);

// ❌ NOT accessible (no VITE_ prefix)
console.log(import.meta.env.SECRET_KEY); // undefined!
\`\`\`

## TypeScript Support

\`\`\`typescript
// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
\`\`\`

## Modes

| Command | Mode | .env File |
|---------|------|-----------|
| vite | development | .env.development |
| vite build | production | .env.production |
| vite build --mode staging | staging | .env.staging |

## Custom Env Directory

\`\`\`typescript
// vite.config.ts
export default defineConfig({
    envDir: './config'  // Custom env folder
});
\`\`\`

## Security Notes

\`\`\`
✅ VITE_ prefix for client-safe variables
✅ Server-side secrets stay in backend
✅ .env files in .gitignore (except .env.example)
✅ Never commit real API keys
\`\`\`
  `,

  quiz: [
    { question: "VITE_ prefix?", options: ["Ignore", "Required for client exposure", "Optional", "Server only"], correctAnswer: 1 },
    { question: "import.meta.env?", options: ["Node process", "Vite env variables", "Window", "Global"], correctAnswer: 1 }
  ],

  codeExamples: []
};