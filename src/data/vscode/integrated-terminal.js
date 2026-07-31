export const chapter = {
  slug: "vscode-integrated-terminal",
  title: "Integrated Terminal",
  description: "Gunakan terminal built-in VS Code untuk command line.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["vscode-interface"],
  tags: ["vscode", "terminal", "shell", "command-line"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Toggle Terminal

\`\`\`
Ctrl+\` (backtick)
Ctrl+Shift+\` → New terminal
\`\`\`

## Multiple Terminals

\`\`\`
Ctrl+Shift+5 → Split terminal
Ctrl+PageUp/PageDown → Switch terminal
\`\`\`

## Terminal Settings

\`\`\`json
{
    "terminal.integrated.fontFamily": "'JetBrains Mono', 'Fira Code'",
    "terminal.integrated.fontSize": 13,
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.defaultProfile.windows": "PowerShell",
    "terminal.integrated.defaultProfile.linux": "bash",
    "terminal.integrated.defaultProfile.osx": "zsh"
}
\`\`\`

## Terminal Tips

\`\`\`
✅ Ctrl+K → Clear terminal
✅ Ctrl+L → Clear (like bash)
✅ Ctrl+C → Kill process
✅ Run selected text: highlight → Ctrl+Shift+P → "Terminal: Run Selected Text"
✅ Drag & drop file to terminal → paste path
\`\`\`
  `,

  quiz: [
    { question: "Toggle terminal?", options: ["Ctrl+T", "Ctrl+\`", "Ctrl+Shift+T", "F12"], correctAnswer: 1 },
    { question: "Clear terminal?", options: ["Ctrl+X", "Ctrl+K", "Ctrl+D", "Ctrl+Q"], correctAnswer: 1 }
  ],

  codeExamples: []
};