export const chapter = {
  slug: "yarn-workspaces",
  title: "Yarn Workspaces",
  description: "Setup monorepo dengan Yarn Workspaces: shared packages, scripts, dan management.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["yarn-package-json"],
  tags: ["yarn", "workspaces", "monorepo", "shared"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup Workspaces

\`\`\`json
// Root package.json
{
    "name": "my-monorepo",
    "private": true,
    "workspaces": [
        "packages/*",
        "apps/*"
    ]
}
\`\`\`

## Monorepo Structure

\`\`\`
my-monorepo/
├── package.json          # Root (workspaces config)
├── packages/
│   ├── ui/               # @myapp/ui
│   │   └── package.json
│   ├── utils/            # @myapp/utils
│   │   └── package.json
│   └── config/           # @myapp/config
│       └── package.json
├── apps/
│   ├── web/              # @myapp/web
│   │   └── package.json
│   └── api/              # @myapp/api
│       └── package.json
└── yarn.lock
\`\`\`

## Workspace Commands

\`\`\`bash
# Add dependency to workspace
yarn workspace @myapp/web add react

# Add workspace as dependency
yarn workspace @myapp/web add @myapp/ui@*

# Run script in all workspaces
yarn workspaces run build

# Run script in specific workspace
yarn workspace @myapp/web dev

# List workspaces
yarn workspaces list
\`\`\`

## Hoisting

\`\`\`bash
# All dependencies hoisted to root node_modules
# Shared packages = less disk usage

# Disable hoisting for specific package
yarn workspace @myapp/web add express --no-hoist
\`\`\`

## Yarn Workspaces vs Lerna vs Turborepo

| | Yarn Workspaces | Lerna | Turborepo |
|---|----------------|-------|-----------|
| Dependency mgmt | ✅ | ✅ | ❌ (use yarn/pnpm) |
| Task orchestration | Basic | ✅ | ✅ Advanced |
| Caching | ❌ | ❌ | ✅ |
| Versioning | ❌ | ✅ | ❌ |
| Setup | Easy | Medium | Easy |
  `,

  quiz: [
    { question: "workspaces config?", options: ["package.json", "Root package.json (workspaces field)", ".workspaces", "yarn.json"], correctAnswer: 1 },
    { question: "yarn workspace?", options: ["All", "Target specific workspace", "Install", "Publish"], correctAnswer: 1 }
  ],

  codeExamples: []
};