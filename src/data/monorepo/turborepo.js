export const chapter = {
  slug: "monorepo-turborepo",
  title: "Turborepo",
  description: "Setup dan gunakan Turborepo untuk monorepo yang cepat dengan caching dan parallel execution.",
  icon: "SiTurborepo",
  color: "#EF4444",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["monorepo-introduction"],
  tags: ["monorepo", "turborepo", "caching", "vercel"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Turborepo?

Turborepo adalah **high-performance build system** untuk JavaScript/TypeScript monorepo. Fitur: **caching**, **parallel execution**, **dependency graph**.

## Kenapa Turborepo?

- ⚡ **Caching** - Tidak build ulang yang tidak berubah
- 🔄 **Parallel** - Jalanin task bersamaan
- 📊 **Pipeline** - Definisikan dependency antar task
- 🎯 **Pruning** - Generate subset monorepo untuk deploy
- 🚀 **Fast** - Dibuat oleh Vercel (creators of Next.js)

## Setup

\`\`\`bash
npx create-turbo@latest
\`\`\`

## Struktur

\`\`\`
my-turborepo/
├── apps/
│   ├── web/              # Next.js app
│   │   └── package.json  # { "name": "web", "scripts": { "build": "next build" } }
│   └── docs/             # Documentation
├── packages/
│   ├── ui/               # Shared React components
│   ├── utils/            # Shared utilities
│   └── config/           # Shared configs
├── package.json
└── turbo.json            # Turborepo pipeline
\`\`\`

## turbo.json (Pipeline)

\`\`\`json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["build"],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "deploy": {
      "dependsOn": ["build", "test", "lint"]
    }
  }
}
\`\`\`

## Package Dependencies

\`\`\`json
// apps/web/package.json
{
  "name": "web",
  "dependencies": {
    "ui": "workspace:*",      // Local package
    "utils": "workspace:*",
    "next": "^14.0.0",
    "react": "^18.0.0"
  }
}
\`\`\`

## Commands

\`\`\`bash
# Run build untuk semua
turbo build

# Run build untuk app spesifik
turbo build --filter=web

# Run lint + test
turbo lint test

# Run dengan cache (default)
turbo build

# Run tanpa cache
turbo build --force

# Generate dependency graph
turbo build --graph
\`\`\`

## Caching

\`\`\`
1. turbo build → cache MISS → build → cache SAVE
2. (tanpa perubahan) → turbo build → cache HIT (instan!) ⚡
3. (ubah file) → turbo build → cache MISS (hanya yang berubah)
\`\`\`

## Remote Caching (Vercel)

\`\`\`bash
npx turbo login
npx turbo link

# Cache dibagi dengan tim via Vercel
turbo build --team=my-team
\`\`\`

## Pruning (Deploy)

\`\`\`bash
# Hanya ambil yang dibutuhkan untuk deploy web
turbo prune --scope=web --docker
# Output: out/ (json + apps/web/ + packages yang diperlukan)
\`\`\`
  `,

  quiz: [
    { question: "turbo.json?", options: ["Package list", "Pipeline configuration (task dependencies)", "Dependencies", "Scripts"], correctAnswer: 1 },
    { question: "Cache HIT?", options: ["Build ulang", "Langsung selesai (tidak build ulang)", "Error", "Deploy"], correctAnswer: 1 },
    { question: "workspace:*?", options: ["NPM registry", "Local package reference", "Git dependency", "External URL"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Turborepo Starter",
      language: "bash",
      code: `# Create new Turborepo
npx create-turbo@latest my-monorepo

# Structure:
# my-monorepo/
# ├── apps/web (Next.js)
# ├── apps/docs (Next.js)
# ├── packages/ui (React components)
# ├── packages/utils (Shared utilities)
# ├── packages/config (ESLint + TS configs)
# └── turbo.json

# Run dev
cd my-monorepo
npm run dev

# Run build (with caching)
turbo build

# Build specific app
turbo build --filter=web`
    }
  ]
};