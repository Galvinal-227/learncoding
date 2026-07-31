export const chapter = {
  slug: "npm-workspaces",
  title: "NPM Workspaces",
  description: "Setup NPM Workspaces untuk monorepo dengan multiple packages.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["npm-package-json"],
  tags: ["npm", "workspaces", "monorepo", "multi-package"],
  order: 8,
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

\`\`\`
my-monorepo/
├── package.json          # Root (workspaces config)
├── packages/
│   ├── ui/
│   │   └── package.json  # { "name": "@myapp/ui" }
│   └── utils/
│       └── package.json  # { "name": "@myapp/utils" }
└── apps/
    ├── web/
    │   └── package.json  # { "name": "@myapp/web" }
    └── api/
        └── package.json  # { "name": "@myapp/api" }
\`\`\`

## Workspace Commands

\`\`\`bash
# Install all workspaces
npm install

# Add dependency to specific workspace
npm install react --workspace=@myapp/web

# Add local workspace as dependency
npm install @myapp/utils --workspace=@myapp/web

# Run script in all workspaces
npm run test --workspaces

# Run script in specific workspace
npm run build --workspace=@myapp/web

# Run in multiple
npm run lint --workspace=@myapp/web --workspace=@myapp/api
\`\`\`

## Workspace Benefits

- ✅ Shared node_modules (hoisted)
- ✅ Single package-lock.json
- ✅ Local package references (tanpa publish)
- ✅ Run commands across packages
- ✅ Version management together
\`\`\`
  `,

  quiz: [
    { question: "workspaces config?", options: ["package.json", "workspaces field in root package.json", ".workspaces", "workspace.json"], correctAnswer: 1 },
    { question: "--workspace flag?", options: ["All", "Target specific workspace", "Install", "Publish"], correctAnswer: 1 }
  ],

  codeExamples: []
};