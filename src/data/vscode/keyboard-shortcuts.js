export const chapter = {
  slug: "vscode-keyboard-shortcuts",
  title: "Keyboard Shortcuts",
  description: "Shortcut keyboard VS Code untuk produktivitas maksimal.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["vscode-interface"],
  tags: ["vscode", "shortcuts", "keyboard", "productivity"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Essential Shortcuts

### Navigation
| Shortcut | Action |
|----------|--------|
| Ctrl+P | Quick Open file |
| Ctrl+Shift+P | Command Palette |
| Ctrl+\` | Toggle Terminal |
| Ctrl+B | Toggle Sidebar |
| Ctrl+Shift+E | Explorer |
| Ctrl+Shift+F | Search in files |
| Ctrl+G | Go to Line |
| Ctrl+Shift+O | Go to Symbol |
| Ctrl+Tab | Switch tabs |

### Editing
| Shortcut | Action |
|----------|--------|
| Ctrl+D | Add next occurrence to selection |
| Ctrl+Shift+L | Select all occurrences |
| Alt+↑/↓ | Move line up/down |
| Shift+Alt+↑/↓ | Copy line up/down |
| Ctrl+Shift+K | Delete line |
| Ctrl+Enter | Insert line below |
| Ctrl+Shift+Enter | Insert line above |
| Ctrl+/ | Toggle comment |
| Shift+Alt+F | Format document |
| Ctrl+Space | Trigger suggestion |
| F2 | Rename symbol |

### Multi-Cursor
| Shortcut | Action |
|----------|--------|
| Alt+Click | Add cursor |
| Ctrl+Alt+↑/↓ | Add cursor above/below |
| Ctrl+Shift+L | Select all occurrences |

### Debugging
| Shortcut | Action |
|----------|--------|
| F5 | Start/Continue debugging |
| F9 | Toggle breakpoint |
| F10 | Step Over |
| F11 | Step Into |
| Shift+F11 | Step Out |

### Git
| Shortcut | Action |
|----------|--------|
| Ctrl+Shift+G | Source Control |
| Ctrl+Enter | Stage selected (in diff view) |

## Custom Keybindings

\`\`\`json
// keybindings.json
[
    {
        "key": "ctrl+shift+t",
        "command": "workbench.action.terminal.new"
    },
    {
        "key": "ctrl+k ctrl+d",
        "command": "editor.action.formatDocument"
    }
]
\`\`\`
  `,
  quiz: [
    { question: "Command Palette?", options: ["Ctrl+S", "Ctrl+Shift+P", "Ctrl+P", "F5"], correctAnswer: 1 },
    { question: "Multi cursor?", options: ["Ctrl+D", "Alt+Click", "Ctrl+C", "Shift+Click"], correctAnswer: 1 }
  ],
  codeExamples: []
};