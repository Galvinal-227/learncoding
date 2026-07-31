export const chapter = {
  slug: "introduction",
  title: "Pengenalan Terminal",
  description: "Memahami apa itu terminal dan mengapa penting bagi developer.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["terminal", "command-line", "shell", "bash"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Terminal?

Terminal adalah antarmuka teks untuk berinteraksi dengan sistem operasi melalui perintah.

## Mengapa Terminal Penting?

1. **Efisiensi** - Lebih cepat dari GUI
2. **Kontrol** - Akses penuh ke sistem
3. **Automation** - Bisa di-script
4. **Remote** - Akses server jarak jauh
5. **Essential** - Wajib untuk developer

## Shell

Shell adalah program yang menerjemahkan perintah ke sistem operasi.

### Jenis Shell
| Shell | Deskripsi |
|-------|-----------|
| **Bash** | Default di Linux/macOS |
| **Zsh** | Modern, customizable |
| **Fish** | User-friendly |
| **PowerShell** | Windows |

## Cara Membuka Terminal

### Windows
\`\`\`
1. Windows + R → cmd
2. Windows + X → PowerShell
3. Start → Terminal
\`\`\`

### macOS
\`\`\`
1. Cmd + Space → Terminal
2. Applications → Utilities → Terminal
\`\`\`

### Linux
\`\`\`
1. Ctrl + Alt + T
2. Applications → Terminal
\`\`\`

## Struktur Prompt

\`\`\`bash
# Format
username@hostname:path$

# Contoh
john@laptop:~$

# Keterangan:
# john = username
# laptop = hostname
# ~ = home directory
# $ = user (root = #)
\`\`\`

## Perintah Dasar

\`\`\`bash
# Lihat direktori saat ini
pwd

# Daftar file
ls

# Pindah direktori
cd Documents

# Buat direktori
mkdir new-folder

# Hapus file
rm file.txt

# Hapus direktori
rm -r folder

# Lihat isi file
cat file.txt

# Edit file
nano file.txt
\`\`\`

## Man Pages

\`\`\`bash
# Lihat dokumentasi perintah
man ls

# Cari perintah
apropos search-term

# Help perintah
ls --help
\`\`\`

## Tips Produktivitas

1. **Tab Completion** - Tekan Tab untuk autocomplete
2. **History** - Arrow up/down untuk history
3. **Shortcuts**:
   - Ctrl+C = Cancel
   - Ctrl+L = Clear
   - Ctrl+A = Awal baris
   - Ctrl+E = Akhir baris
   - Ctrl+Z = Suspend
4. **Aliases** - Buat shortcut perintah
5. **Scripts** - Otomatisasi tugas
  `,
  quiz: [
    {
      question: "Perintah untuk melihat direktori saat ini adalah?",
      options: [
        "ls",
        "pwd",
        "cd",
        "dir"
      ],
      correctAnswer: 1
    },
    {
      question: "Shell default di Linux adalah?",
      options: [
        "Zsh",
        "Bash",
        "Fish",
        "PowerShell"
      ],
      correctAnswer: 1
    },
    {
      question: "Shortcut untuk clear terminal adalah?",
      options: [
        "Ctrl+C",
        "Ctrl+L",
        "Ctrl+A",
        "Ctrl+E"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Terminal Setup",
      code: `// ============================================
// Terminal Setup & Configuration
// ============================================

// 1. .bashrc (Bash config)
# ~/.bashrc
alias ll='ls -la'
alias gs='git status'
alias gp='git push'
alias gl='git log --oneline'

export PATH=$PATH:/usr/local/bin
export EDITOR=nano

# Custom prompt
PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '

// 2. .zshrc (Zsh config)
# ~/.zshrc
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

# Aliases
alias ll='ls -la'
alias gs='git status'

# Path
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Prompt
PROMPT='%F{green}%n@%m%f:%F{blue}%~%f$ '

// 3. .profile (Cross-shell)
# ~/.profile
export PATH="$HOME/bin:$PATH"
export EDITOR=nano
export BROWSER=firefox

// 4. Terminal shortcuts
# macOS Terminal
# Cmd + T = New tab
# Cmd + D = Split pane
# Cmd + W = Close tab
# Cmd + K = Clear

# iTerm2
# Cmd + T = New tab
# Cmd + D = Split vertical
# Cmd + Shift + D = Split horizontal
# Cmd + Enter = Full screen

// 5. Common keyboard shortcuts
# Movement
Ctrl+A = Beginning of line
Ctrl+E = End of line
Ctrl+W = Delete word
Ctrl+U = Delete line
Ctrl+K = Delete to end

# History
Ctrl+R = Search history
Ctrl+P = Previous command
Ctrl+N = Next command

# Process
Ctrl+C = Interrupt
Ctrl+Z = Suspend
Ctrl+D = Exit/EOF`,
      language: "bash"
    }
  ]
};