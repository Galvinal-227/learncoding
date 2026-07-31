export const chapter = {
  slug: "vscode-debugging",
  title: "Debugging",
  description: "Debug kode JavaScript/TypeScript dengan built-in debugger VS Code.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["vscode-settings"],
  tags: ["vscode", "debugging", "breakpoint", "nodejs"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Debugger Setup

\`\`\`json
// .vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "{workspaceFolder}/src/index.js",
            "skipFiles": ["<node_internals>/**"]
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Process",
            "port": 9229
        },
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome",
            "url": "http://localhost:3000",
            "webRoot": "{workspaceFolder}"
        }
    ]
}
\`\`\`

## Debug Shortcuts

| Shortcut | Action |
|----------|--------|
| F5 | Start/Continue |
| F9 | Toggle Breakpoint |
| F10 | Step Over |
| F11 | Step Into |
| Shift+F11 | Step Out |
| Ctrl+Shift+F5 | Restart |
| Shift+F5 | Stop |

## Breakpoints

\`\`\`
✅ Regular breakpoint (F9)
✅ Conditional breakpoint (right-click → Edit)
✅ Logpoint (right-click → Add Logpoint)
✅ Exception breakpoints (break on caught/uncaught)
✅ Function breakpoint (break on function call)
\`\`\`

## Node.js Debugging

\`\`\`bash
# Run with inspector
node --inspect index.js
node --inspect-brk index.js  # Break on first line

# Attach VS Code debugger to process
\`\`\`

## Debug Console

\`\`\`
- Evaluate expressions
- Access variables
- Call functions
- REPL during debug session
\`\`\`
  `,

  quiz: [
    { question: "Toggle breakpoint?", options: ["F5", "F9", "F10", "F11"], correctAnswer: 1 },
    { question: "Step Over?", options: ["F5", "F9", "F10", "F11"], correctAnswer: 2 },
    { question: "node --inspect?", options: ["Start server", "Enable debugger for Node.js", "Install", "Build"], correctAnswer: 1 }
  ],

  codeExamples: []
};