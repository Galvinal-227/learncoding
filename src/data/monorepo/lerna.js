export const chapter = {
  slug: "monorepo-lerna",
  title: "Lerna (Legacy)",
  description: "Pelajari Lerna - monorepo tool original yang sekarang di-maintain Nx team.",
  icon: "SiLerna",
  color: "#9333EA",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["monorepo-introduction"],
  tags: ["monorepo", "lerna", "legacy", "nx"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Lerna?

Lerna adalah **monorepo tool original** (dibuat 2015). Sekarang di-maintain oleh **Nx team** sejak 2022. Untuk project baru, disarankan pakai **Turborepo** atau **Nx** langsung.

## Kenapa Masih Belajar Lerna?

- 📚 Banyak project legacy pakai Lerna
- 🔄 Lerna v6+ powered by Nx (dapat Nx features)
- 📦 Versioning & publishing packages

## Install

\`\`\`bash
npm install -g lerna
npx lerna init
\`\`\`

## lerna.json

\`\`\`json
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "version": "0.0.0",
  "npmClient": "pnpm",
  "command": {
    "publish": {
      "conventionalCommits": true
    }
  }
}
\`\`\`

## Commands

\`\`\`bash
# Run script di semua packages
lerna run build
lerna run test

# Run di package spesifik
lerna run build --scope=@myorg/web

# Parallel
lerna run build --parallel

# Version bump
lerna version

# Publish to NPM
lerna publish
\`\`\`

## Lerna + Nx (Modern)

\`\`\`json
// lerna.json
{
  "useNx": true  // Enable Nx caching & task orchestration!
}
\`\`\`

## Migration: Lerna → Turborepo

\`\`\`bash
# Jika menggunakan Lerna + Nx, bisa tetap pakai
# Untuk project baru, langsung pakai Turborepo
npx create-turbo@latest
\`\`\`
  `,

  quiz: [
    { question: "Lerna sekarang di-maintain?", options: ["Google", "Nx team (Nrwl)", "Vercel", "Meta"], correctAnswer: 1 },
    { question: "Lerna: useNx: true?", options: ["Error", "Enable Nx caching + orchestration", "Disable", "Deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};