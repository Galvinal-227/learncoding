export const chapter = {
  slug: "git-installation",
  title: "Instalasi & Konfigurasi",
  description: "Install Git di Windows, Mac, Linux dan konfigurasi awal.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["git-introduction"],
  tags: ["git", "install", "setup", "config"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install Git

### Windows
1. Download dari [git-scm.com](https://git-scm.com/download/win)
2. Run installer, next-next
3. Pilih default editor (VS Code recommended)

### Mac
\`\`\`bash
# Via Homebrew
brew install git

# Atau download dari git-scm.com
\`\`\`

### Linux
\`\`\`bash
# Ubuntu/Debian
sudo apt install git

# Fedora
sudo dnf install git
\`\`\`

## Konfigurasi Awal

\`\`\`bash
git config --global user.name "Budi Santoso"
git config --global user.email "budi@email.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"

# Lihat semua config
git config --list
\`\`\`

## SSH Key (untuk GitHub/GitLab)

\`\`\`bash
ssh-keygen -t ed25519 -C "budi@email.com"
cat ~/.ssh/id_ed25519.pub
# Copy output ke GitHub → Settings → SSH Keys
\`\`\`
  `,

  quiz: [
    { question: "Perintah set username Git?", options: ["git user", "git config --global user.name", "git set-name", "git username"], correctAnswer: 1 },
    { question: "Default branch name modern?", options: ["master", "main", "trunk", "primary"], correctAnswer: 1 }
  ],

  codeExamples: []
};