export const chapter = {
  slug: "vscode-introduction",
  title: "Pengenalan VS Code",
  description: "Pahami apa itu VS Code, kenapa jadi editor #1, dan fitur utamanya.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["vscode", "editor", "ide", "productivity"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu VS Code?

Visual Studio Code adalah **code editor gratis, open-source** dari Microsoft. Dibangun dengan Electron, support **ratusan bahasa** via extensions. #1 editor developer sejak 2019.

## Kenapa VS Code?

- 🆓 **Gratis** - Open source (MIT license)
- ⚡ **Ringan** - Cepat, tidak se-berat IDE tradisional
- 🧩 **Extensions** - 50,000+ extensions
- 🔧 **Built-in Git** - Commit, diff, merge tanpa terminal
- 🤖 **AI Copilot** - GitHub Copilot integration
- 🐳 **Remote** - SSH, Containers, WSL
- 🎨 **Customizable** - Themes, keybindings, settings
- 🌐 **Cross-platform** - Windows, Mac, Linux

## VS Code vs IDE Lain

| | VS Code | WebStorm | Sublime |
|---|--------|----------|---------|
| Price | Gratis | $149/tahun | $99/lisensi |
| Speed | Cepat | Lambat | Sangat cepat |
| Extensions | 50,000+ | 3,000+ | 5,000+ |
| Git | Built-in | Built-in | Plugin |
| AI | Copilot | AI Assistant | - |
| Debug | Built-in | Built-in | Plugin |

## Fitur Wajib Tahu

| Fitur | Shortcut |
|-------|----------|
| Command Palette | Ctrl+Shift+P |
| Quick Open | Ctrl+P |
| Terminal | Ctrl+\` |
| Settings | Ctrl+, |
| Search All Files | Ctrl+Shift+F |
| Go to Line | Ctrl+G |
| Multi Cursor | Alt+Click |
| Format Document | Shift+Alt+F |

## Telemetry (Privacy)

\`\`\`json
// Disable telemetry
{
    "telemetry.telemetryLevel": "off"
}
\`\`\`
  `,
  quiz: [
    { question: "VS Code: dibuat dengan?", options: ["Java", "Electron", "Python", "C++"], correctAnswer: 1 },
    { question: "Command Palette shortcut?", options: ["Ctrl+S", "Ctrl+Shift+P", "Ctrl+P", "F5"], correctAnswer: 1 }
  ],
  codeExamples: []
};