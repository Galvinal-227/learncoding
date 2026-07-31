export const chapter = {
  slug: "monorepo-pnpm-workspaces",
  title: "PNPM Workspaces",
  description: "Setup monorepo dengan PNPM workspaces: simpel, cepat, hemat disk.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["monorepo-introduction"],
  tags: ["monorepo", "pnpm", "workspace", "native"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa PNPM Workspaces?

PNPM punya **native workspace support** yang simpel dan cepat. Dibanding Yarn/NPM: **hemat disk space** (content-addressable storage), **strict** (tidak bisa akses packages di luar yang dideklarasikan).

## pnpm-workspace.yaml

\`\`\`yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - '!**/test/**'
\`\`\`

## Root package.json

\`\`\`json
{
  "name": "my-monorepo",
  "private": true,
  "scripts": {
    "dev": "pnpm --parallel -r dev",
    "build": "pnpm -r build",
    "lint": "pnpm -r lint",
    "test": "pnpm -r test",
    "clean": "pnpm -r exec rm -rf dist node_modules"
  },
  "engines": {
    "node": ">=20",
    "pnpm": ">=9"
  }
}
\`\`\`

## Package Dependencies

\`\`\`json
// apps/web/package.json
{
  "name": "@myapp/web",
  "dependencies": {
    "@myapp/ui": "workspace:*",
    "@myapp/utils": "workspace:*"
  }
}
\`\`\`

## Perintah

\`\`\`bash
# Install semua dependencies
pnpm install

# Add dependency ke package spesifik
pnpm add react --filter @myapp/web
pnpm add -D typescript --filter @myapp/web

# Add local workspace dependency
pnpm add @myapp/ui --filter @myapp/web --workspace

# Run script di semua packages
pnpm -r build

# Run script di package spesifik
pnpm --filter @myapp/web build

# Run parallel
pnpm --parallel -r dev

# List workspace packages
pnpm list -r --depth 0
\`\`\`

## pnpm overrides

\`\`\`json
// Root package.json - paksa versi yang sama
{
  "pnpm": {
    "overrides": {
      "react": "^18.3.0",
      "react-dom": "^18.3.0",
      "typescript": "^5.5.0"
    }
  }
}
\`\`\`

## PNPM vs Turborepo

| | PNPM Workspaces | Turborepo |
|---|----------------|-----------|
| Fungsi | Package management + workspace | Build system + caching |
| Caching | Tidak ada | ✅ Powerful |
| Parallel | Basic | Advanced (dependency graph) |
| Setup | Simple | Perlu turbo.json |
| Cocok | Semua | Large monorepos |

## Best Practice

\`\`\`
✅ Gunakan workspace:* untuk local packages
✅ Gunakan pnpm overrides untuk konsistensi versi
✅ Gunakan --filter untuk target spesifik
✅ Jangan lupa "private": true di root
✅ Gunakan pnpm publish --filter untuk publish individual
\`\`\`
  `,

  quiz: [
    { question: "workspace:*?", options: ["NPM registry", "Local package reference (workspace)", "Git dependency", "External URL"], correctAnswer: 1 },
    { question: "pnpm --filter?", options: ["Search", "Target package spesifik", "Install", "Publish"], correctAnswer: 1 },
    { question: "pnpm overrides?", options: ["Hapus", "Paksa versi dependency yang sama di semua packages", "Skip", "Link"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "PNPM Workspace Setup",
      language: "bash",
      code: `# Root
mkdir my-monorepo && cd my-monorepo
echo 'packages:\n  - "apps/*"\n  - "packages/*"' > pnpm-workspace.yaml

# Root package.json
npm init -y
# Edit: "private": true

# Create packages
mkdir -p packages/ui packages/utils
mkdir -p apps/web apps/api

# Init each package
cd packages/ui && npm init -y
cd packages/utils && npm init -y
cd apps/web && npx create-next-app@latest . --typescript
cd apps/api && npm init -y

# Add dependencies
cd root
pnpm add @myapp/ui --filter @myapp/web --workspace

# Run
pnpm -r dev`
    }
  ]
};