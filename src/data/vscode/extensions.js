export const chapter = {
  slug: "vscode-extensions",
  title: "Extensions",
  description: "Extensions wajib VS Code untuk produktivitas developer.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["vscode-installation"],
  tags: ["vscode", "extensions", "plugins", "productivity"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Essential Extensions

### Coding
| Extension | Fungsi |
|-----------|--------|
| **Prettier** | Code formatter |
| **ESLint** | Linting JavaScript |
| **GitHub Copilot** | AI code completion |
| **GitLens** | Git supercharged |

### Language Support
| Extension | Untuk |
|-----------|-------|
| **JavaScript (ES6)** | JS snippets |
| **Tailwind CSS IntelliSense** | Tailwind autocomplete |
| **Prisma** | Prisma schema highlighting |
| **Python** | Python support |
| **Go** | Go support |

### Productivity
| Extension | Fungsi |
|-----------|--------|
| **Live Server** | Live reload static pages |
| **Live Share** | Real-time collaboration |
| **Better Comments** | Highlighted comments |
| **Auto Rename Tag** | Rename paired HTML tags |
| **Path Intellisense** | File path autocomplete |
| **Import Cost** | Show import size |
| **Code Spell Checker** | Spell checking |

### Themes
| Theme | Style |
|-------|-------|
| **One Dark Pro** | Dark theme populer |
| **Dracula** | Dark theme legendaris |
| **GitHub Theme** | GitHub look |
| **Material Theme** | Material Design |
| **Catppuccin** | Pastel theme |
| **Tokyo Night** | Neon dark theme |

### Icons
| Extension | Deskripsi |
|-----------|-----------|
| **Material Icon Theme** | Popular file icons |
| **vscode-icons** | Classic file icons |

## Install Extensions via CLI

\`\`\`bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens

# List installed
code --list-extensions

# Export extensions list
code --list-extensions > extensions.txt

# Install from list
cat extensions.txt | xargs -L1 code --install-extension
\`\`\`

## Extension Settings

\`\`\`json
{
    "prettier.singleQuote": true,
    "prettier.semi": true,
    "prettier.tabWidth": 2,
    "eslint.format.enable": true,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
\`\`\`
  `,
  quiz: [
    { question: "Prettier extension?", options: ["Linting", "Code formatting", "Git", "Debug"], correctAnswer: 1 },
    { question: "code --install-extension?", options: ["List", "Install extension via CLI", "Uninstall", "Update"], correctAnswer: 1 }
  ],
  codeExamples: []
};