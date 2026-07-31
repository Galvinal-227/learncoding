export const chapter = {
  slug: "vscode-interface",
  title: "Interface & Workspace",
  description: "Kenali antarmuka VS Code: sidebar, editor, panel, command palette.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["vscode-installation"],
  tags: ["vscode", "interface", "workspace", "layout"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Layout

\`\`\`
┌─────────────────────────────────────────────────┐
│  Activity Bar │  Side Bar  │     Editor        │
│  (icons)      │  (files,   │    (code)         │
│               │   search,  │                   │
│  ┌─────┐      │   git)     │                   │
│  │ 📁  │      │            │                   │
│  │ 🔍  │      │            │                   │
│  │ ⎇  │      │            │                   │
│  │ 🐛  │      │            │                   │
│  │ 📦  │      │            │                   │
│  └─────┘      │            │                   │
│               ├────────────┤                   │
│               │   PANEL    │                   │
│               │ (Terminal, │                   │
│               │  Output,   │                   │
│               │  Debug)    │                   │
├───────────────┴────────────┴───────────────────┤
│              STATUS BAR                         │
└─────────────────────────────────────────────────┘
\`\`\`

## Activity Bar

| Icon | Panel | Shortcut |
|------|-------|----------|
| 📁 | Explorer | Ctrl+Shift+E |
| 🔍 | Search | Ctrl+Shift+F |
| ⎇ | Source Control | Ctrl+Shift+G |
| 🐛 | Debug | Ctrl+Shift+D |
| 📦 | Extensions | Ctrl+Shift+X |

## Command Palette (Ctrl+Shift+P)

\`\`\`
> Format Document
> Git: Clone
> Preferences: Open Settings
> Terminal: Create New Terminal
> View: Toggle Sidebar
\`\`\`

## Zen Mode

\`\`\`
Ctrl+K Z → Full screen, no distractions
Double Esc → Exit Zen Mode
\`\`\`

## Split Editor

\`\`\`
Ctrl+\\ → Split editor
Ctrl+1/2/3 → Focus editor group
Ctrl+W → Close editor
\`\`\`

## Workspace

\`\`\`
File → Save Workspace As... → .code-workspace file
- Multiple root folders
- Workspace-specific settings
- Workspace-specific extensions
\`\`\`
  `,

  quiz: [
    { question: "Explorer shortcut?", options: ["Ctrl+Shift+E", "Ctrl+Shift+F", "Ctrl+B", "Ctrl+P"], correctAnswer: 0 },
    { question: "Zen Mode?", options: ["Theme", "Distraction-free full screen (Ctrl+K Z)", "Extension", "Terminal"], correctAnswer: 1 }
  ],

  codeExamples: []
};