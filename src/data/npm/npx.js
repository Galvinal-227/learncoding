export const chapter = {
  slug: "npm-npx",
  title: "NPX",
  description: "Jalankan NPM packages tanpa install global dengan NPX.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["npm-introduction"],
  tags: ["npm", "npx", "execute", "runner"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu NPX?

NPX = **NPM Package Executor**. Menjalankan package **tanpa install global**. Built-in sejak NPM 5.2+.

## Use Cases

\`\`\`bash
# Run package (download, execute, cleanup)
npx create-next-app@latest my-app
npx create-react-app my-app
npx cowsay "Hello"
npx eslint --init
npx prettier --write .

# Run specific version
npx create-react-app@5.0.0 my-app

# Run GitHub gist/script
npx https://gist.github.com/user/gist-id

# Run local binary (from node_modules/.bin)
npx jest
npx eslint src/
\`\`\`

## npx vs npm install -g

| | npx | npm install -g |
|---|-----|---------------|
| Install permanen? | ❌ (temp) | ✅ |
| Disk usage | Minimal | Permanent |
| Use case | Try/test tools | Frequently used tools |
| Always latest? | ✅ (if no cache) | ❌ (manual update) |

## NPX Cache

\`\`\`bash
# Clear npx cache
npx clear-npx-cache
\`\`\`

## Examples

\`\`\`bash
# Scaffold projects
npx create-next-app@latest
npx create-vite@latest
npx create-turbo@latest

# Run one-off commands
npx http-server -p 8080
npx json-server --watch db.json
npx localtunnel --port 3000

# Check updates
npx npm-check-updates
npx license-checker
\`\`\`
  `,

  quiz: [
    { question: "npx?", options: ["Install global", "Execute package tanpa install global", "Publish", "Update"], correctAnswer: 1 },
    { question: "npx create-next-app?", options: ["Install", "Download + run + cleanup", "Publish", "Update"], correctAnswer: 1 }
  ],

  codeExamples: []
};