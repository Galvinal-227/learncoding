export const chapter = {
  slug: "vscode-installation",
  title: "Instalasi & Setup",
  description: "Install VS Code di Windows, Mac, Linux dan setup pertama.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["vscode-introduction"],
  tags: ["vscode", "instalasi", "setup", "first-use"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Download

\`\`\`
https://code.visualstudio.com/download
\`\`\`

### Windows
1. Download .exe installer
2. Centang "Add to PATH"
3. Centang "Open with Code" context menu
4. Install

### Mac
1. Download .zip
2. Drag ke Applications
3. Buka VS Code → Cmd+Shift+P → "Shell Command: Install 'code' command in PATH"

### Linux
\`\`\`bash
# Ubuntu/Debian
sudo snap install code --classic

# Atau via apt
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update && sudo apt install code
\`\`\`

## First Run

\`\`\`bash
code .                    # Open current directory
code my-project           # Open folder
code -r my-file.js        # Open file in existing window
code --install-extension  # Install extension
code --list-extensions    # List installed extensions
\`\`\`

## Sync Settings

\`\`\`
Login with GitHub/Microsoft account → Settings Sync ON
- Settings
- Extensions
- Keybindings
- Snippets
- UI State
\`\`\`

## Command Line

\`\`\`bash
# Set VS Code as default git editor
git config --global core.editor "code --wait"

# Set VS Code as default merge tool
git config --global merge.tool code
\`\`\`
  `,

  quiz: [
    { question: "code .?", options: ["Open VS Code", "Open current directory in VS Code", "Install", "Update"], correctAnswer: 1 },
    { question: "Settings Sync?", options: ["Manual", "Sync settings across devices (GitHub login)", "Not possible", "Local only"], correctAnswer: 1 }
  ],

  codeExamples: []
};