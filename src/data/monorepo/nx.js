export const chapter = {
  slug: "monorepo-nx",
  title: "Nx",
  description: "Setup Nx - build system enterprise dengan generators, dependency graph, dan affected commands.",
  icon: "SiNx",
  color: "#143055",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["monorepo-introduction"],
  tags: ["monorepo", "nx", "enterprise", "generators"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Nx?

Nx adalah **build system** untuk monorepo, dibuat oleh Nrwl (ex-Googlers). Powerful untuk **Angular, React, Next.js, Node.js**. Fitur unggulan: **generators**, **dependency graph**, **affected commands**.

## Setup

\`\`\`bash
npx create-nx-workspace@latest my-org
# Pilih: Integrated Monorepo
# Stack: React + Node.js
\`\`\`

## Nx vs Turborepo

| | Nx | Turborepo |
|---|-----|-----------|
| Philosophy | Opinionated, batteries-included | Lightweight, caching-focused |
| Generators | ✅ Powerful (code generation) | ❌ Manual |
| Dependency graph | ✅ Interactive visual | ✅ Basic |
| Affected commands | ✅ Built-in | ✅ Basic |
| Plugins | Many (React, Next, Angular, Node) | None (framework-agnostic) |
| Learning curve | Tinggi | Rendah |
| Cocok | Enterprise, banyak tim | Startup, project menengah |

## nx.json

\`\`\`json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "cache": true
    },
    "test": {
      "dependsOn": ["build"],
      "cache": true
    },
    "lint": {
      "cache": true
    }
  },
  "defaultBase": "main"
}
\`\`\`

## Commands

\`\`\`bash
# Build project
npx nx build web

# Build with dependencies
npx nx build web --with-deps

# Test only affected (sejak main branch)
npx nx affected:test --base=main

# Generate code
npx nx generate @nx/react:component Button --directory=packages/ui

# Visualize dependency graph
npx nx graph

# Run multiple
npx nx run-many --target=build --projects=web,docs
\`\`\`

## Nx Plugins

\`\`\`bash
npm install -D @nx/react @nx/next @nx/node @nx/cypress @nx/playwright
\`\`\`

## Nx Console (VS Code Extension)

\`\`\`
- Visual interface untuk Nx commands
- Generate components/services via GUI
- Run tasks without terminal
\`\`\`
  `,

  quiz: [
    { question: "nx affected:test?", options: ["Test semua", "Test hanya yang berubah (sejak main)", "Test manual", "Skip test"], correctAnswer: 1 },
    { question: "nx graph?", options: ["Chart", "Visualisasi dependency graph", "Database", "API"], correctAnswer: 1 }
  ],

  codeExamples: []
};