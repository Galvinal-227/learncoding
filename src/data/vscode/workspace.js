export const chapter = {
  slug: "vscode-workspace",
  title: "Workspace & Multi-Root",
  description: "Kelola workspace dengan multi-root folders dan settings per project.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["vscode-interface"],
  tags: ["vscode", "workspace", "multi-root", "monorepo"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Save Workspace

\`\`\`
File → Save Workspace As... → my-project.code-workspace
\`\`\`

## .code-workspace File

\`\`\`json
{
    "folders": [
        { "path": "./frontend", "name": "Frontend (Next.js)" },
        { "path": "./backend", "name": "Backend (Express)" },
        { "path": "./shared", "name": "Shared Packages" }
    ],
    "settings": {
        "editor.fontSize": 14,
        "editor.formatOnSave": true
    },
    "extensions": {
        "recommendations": [
            "esbenp.prettier-vscode",
            "dbaeumer.vscode-eslint"
        ]
    }
}
\`\`\`

## Multi-Root Workspace Benefits

\`\`\`
✅ Multiple projects in one window
✅ Each folder can have own settings
✅ Shared settings across folders
✅ Recommended extensions for team
✅ Single terminal per folder
\`\`\`

## Monorepo Example

\`\`\`
my-monorepo/
├── my-monorepo.code-workspace
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── ui/
│   └── utils/
└── package.json
\`\`\`
  `,

  quiz: [
    { question: ".code-workspace?", options: ["Config", "Multi-root workspace file", "Extension", "Theme"], correctAnswer: 1 },
    { question: "Multi-root?", options: ["One folder", "Multiple folders in one VS Code window", "Remote only", "Not possible"], correctAnswer: 1 }
  ],

  codeExamples: []
};