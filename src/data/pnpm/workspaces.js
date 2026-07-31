export const chapter = {
  slug: "pnpm-workspaces",
  title: "Workspaces",
  description: "Setup monorepo dengan PNPM Workspaces: filter, shared dependencies, dan scripts.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["pnpm-introduction"],
  tags: ["pnpm", "workspaces", "monorepo", "filter"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## pnpm-workspace.yaml

\`\`\`yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - '!**/test/**'
\`\`\`

## Struktur Monorepo

\`\`\`
my-monorepo/
├── pnpm-workspace.yaml
├── package.json          # Root (private: true)
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── ui/
│   ├── utils/
│   └── config/
└── pnpm-lock.yaml
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
    }
}
\`\`\`

## Install & Dependencies

\`\`\`bash
# Install semua workspaces
pnpm install

# Add ke specific package
pnpm add react --filter @myapp/web
pnpm add -D jest --filter @myapp/web

# Add workspace package
pnpm add @myapp/ui --filter @myapp/web --workspace

# Add root dependency
pnpm add -D -w prettier
\`\`\`

## Filtering

\`\`\`bash
# Run script di semua packages
pnpm -r build

# Run di specific package
pnpm --filter @myapp/web build

# Run di multiple
pnpm --filter "@myapp/*" build

# Exclude
pnpm -r build --filter !@myapp/docs

# Run parallel
pnpm --parallel -r dev

# Hanya packages yang berubah (since main)
pnpm --filter "...[origin/main]" build
\`\`\`

## Override Versions

\`\`\`json
// Root package.json
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

## Publishing

\`\`\`bash
# Publish specific package
pnpm publish --filter @myapp/ui

# Version bump
pnpm --filter @myapp/ui version patch
\`\`\`
  `,

  quiz: [
    { question: "pnpm-workspace.yaml?", options: ["Package list", "Definisi workspace packages", "Lock file", "Config"], correctAnswer: 1 },
    { question: "--filter flag?", options: ["Search", "Target specific package", "Install all", "Publish"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "PNPM Workspace Setup",
      language: "bash",
      code: `# Root
mkdir my-monorepo && cd my-monorepo
echo 'packages:\n  - "apps/*"\n  - "packages/*"' > pnpm-workspace.yaml

# Init
pnpm init
# Edit: "private": true

# Create packages
mkdir -p apps/web packages/ui

# Install
pnpm add react --filter @myapp/web
pnpm add @myapp/ui --filter @myapp/web --workspace

# Run
pnpm -r dev`
    }
  ]
};