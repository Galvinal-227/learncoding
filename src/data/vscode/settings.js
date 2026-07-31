export const chapter = {
  slug: "vscode-settings",
  title: "Settings & Configuration",
  description: "Konfigurasi VS Code untuk environment development yang optimal.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["vscode-installation"],
  tags: ["vscode", "settings", "config", "customize"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## settings.json (User)

\`\`\`json
{
    // Editor
    "editor.fontSize": 14,
    "editor.fontFamily": "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
    "editor.fontLigatures": true,
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": false,
    "editor.minimap.enabled": false,
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.renderWhitespace": "selection",
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.smoothScrolling": true,
    "editor.stickyScroll.enabled": true,
    
    // Workbench
    "workbench.colorTheme": "One Dark Pro",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.startupEditor": "none",
    "workbench.tree.indent": 20,
    "workbench.editor.enablePreview": false,
    
    // Files
    "files.autoSave": "onFocusChange",
    "files.exclude": {
        "**/.git": true,
        "**/node_modules": true,
        "**/dist": true
    },
    
    // Terminal
    "terminal.integrated.fontFamily": "JetBrains Mono",
    "terminal.integrated.fontSize": 13,
    
    // Git
    "git.autofetch": true,
    "git.confirmSync": false,
    
    // Language Specific
    "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
    "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
    "[json]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }
}
\`\`\`

## settings.json (Workspace)

\`\`\`json
// .vscode/settings.json (per project)
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": ["javascript", "typescript", "react"]
}
\`\`\`

## launch.json (Debug)

\`\`\`json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug App",
            "program": "{workspaceFolder}/src/index.js",
            "runtimeExecutable": "node",
            "env": { "NODE_ENV": "development" }
        }
    ]
}
\`\`\`

## tasks.json

\`\`\`json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "npm: dev",
            "type": "npm",
            "script": "dev",
            "group": { "kind": "build", "isDefault": true }
        }
    ]
}
\`\`\`
  `,
  quiz: [
    { question: "formatOnSave?", options: ["Manual", "Auto-format when saving file", "Terminal only", "Never"], correctAnswer: 1 },
    { question: "settings.json: workspace?", options: ["Global", ".vscode/settings.json (project-specific)", "User only", "Not possible"], correctAnswer: 1 }
  ],
  codeExamples: []
};