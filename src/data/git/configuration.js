export const chapter = {
  slug: "git-configuration",
  title: "Git Configuration",
  description: "Kuasai konfigurasi Git: global, local, alias, dan pengaturan tingkat lanjut.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["git-installation"],
  tags: ["git", "config", "alias", "settings"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Level Konfigurasi Git

| Level | Scope | File | Perintah |
|-------|-------|------|----------|
| **System** | Semua user di komputer | \`/etc/gitconfig\` | \`git config --system\` |
| **Global** | User saat ini (semua repo) | \`~/.gitconfig\` | \`git config --global\` |
| **Local** | Repository saat ini saja | \`.git/config\` | \`git config --local\` |

Prioritas: **Local > Global > System**

## Konfigurasi Wajib

\`\`\`bash
# Identitas (wajib!)
git config --global user.name "Budi Santoso"
git config --global user.email "budi@email.com"

# Default branch name
git config --global init.defaultBranch main

# Editor default
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"           # Vim
git config --global core.editor "nano"          # Nano
\`\`\`

## Konfigurasi Berguna

\`\`\`bash
# Line ending (Windows vs Mac/Linux)
git config --global core.autocrlf input  # Mac/Linux
git config --global core.autocrlf true   # Windows

# Warna di output
git config --global color.ui auto

# Push default (hanya push branch saat ini)
git config --global push.default simple

# Rebase saat pull (hindari merge commit tidak perlu)
git config --global pull.rebase true

# Auto setup remote (push tanpa -u)
git config --global push.autoSetupRemote true
\`\`\`

## Git Alias (Shortcuts)

\`\`\`bash
# Alias sederhana
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Alias kompleks
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

# Alias log keren
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
\`\`\`

### Alias Populer di .gitconfig
\`\`\`ini
[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    unstage = reset HEAD --
    last = log -1 HEAD
    lg = log --graph --oneline --all
    amend = commit --amend --no-edit
    undo = reset --soft HEAD~1
    wip = commit -am "wip: save work in progress"
    assume = update-index --assume-unchanged
    unassume = update-index --no-assume-unchanged
    who = shortlog -s --all
\`\`\`

## Konfigurasi Berguna Lainnya

\`\`\`bash
# Case-sensitive file names
git config core.ignorecase false

# Compression
git config core.compression 9

# Prune saat fetch (hapus branch remote yang sudah dihapus)
git config --global fetch.prune true

# Fast-forward only saat merge
git config --global merge.ff only

# Auto-stash saat rebase
git config --global rebase.autoStash true
\`\`\`

## Melihat & Menghapus Konfigurasi

\`\`\`bash
# Lihat semua config
git config --list
git config --global --list
git config --local --list

# Lihat nilai spesifik
git config user.name
git config user.email

# Edit file konfigurasi langsung
git config --global --edit

# Hapus konfigurasi
git config --global --unset alias.co
git config --global --unset user.name
\`\`\`

## Include (Modular Config)

\`\`\`ini
# ~/.gitconfig
[include]
    path = ~/.gitconfig-work
    path = ~/.gitconfig-personal
\`\`\`

\`\`\`ini
# ~/.gitconfig-work
[user]
    name = Budi Santoso
    email = budi@company.com
\`\`\`

\`\`\`ini
# ~/.gitconfig-personal
[user]
    name = Budi
    email = budi@gmail.com
\`\`\`

Lalu di repo kerja:
\`\`\`bash
git config --local include.path ~/.gitconfig-work
\`\`\`

## Konfigurasi Khusus Repo

\`\`\`bash
# Repo kerja: pakai email kantor
git config user.email "budi@company.com"

# Repo open source: pakai email pribadi
git config user.email "budi@gmail.com"

# Git attributes di repo
echo "*.js text eol=lf" > .gitattributes
\`\`\`
  `,

  quiz: [
    {
      question: "3 level konfigurasi Git?",
      options: ["Global, Local, Branch", "System, Global, Local", "User, Repo, File", "Remote, Local, Stash"],
      correctAnswer: 1,
      explanation: "System (semua user), Global (user saat ini), Local (repo saat ini). Prioritas: Local > Global > System."
    },
    {
      question: "Perintah buat alias 'co' untuk checkout?",
      options: [
        "git alias co checkout",
        "git config --global alias.co checkout",
        "git alias add co=checkout",
        "git shortcut co checkout"
      ],
      correctAnswer: 1,
      explanation: "git config --global alias.<shortcut> <command> adalah cara membuat alias Git."
    },
    {
      question: "Konfigurasi push.default 'simple' artinya?",
      options: [
        "Push semua branch",
        "Hanya push branch saat ini ke upstream",
        "Push tanpa konfirmasi",
        "Tidak bisa push"
      ],
      correctAnswer: 1,
      explanation: "push.default = simple hanya push branch saat ini ke upstream-nya. Mencegah tidak sengaja push branch lain."
    }
  ],

  codeExamples: []
};