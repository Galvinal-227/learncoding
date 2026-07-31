export const chapter = {
  slug: "git-basic-commands",
  title: "Basic Commands",
  description: "Kuasai perintah Git dasar yang dipakai sehari-hari.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["git-installation"],
  tags: ["git", "commands", "init", "add", "commit"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Perintah Git Dasar

### Init & Clone
\`\`\`bash
git init                    # Buat repo baru
git clone <url>             # Clone repo dari remote
\`\`\`

### Status & Log
\`\`\`bash
git status                  # Cek status file
git log                     # Lihat history commit
git log --oneline           # Ringkas
git log --graph --all       # Visual branch
\`\`\`

### Add & Commit
\`\`\`bash
git add <file>              # Stage file
git add .                   # Stage semua
git commit -m "pesan"       # Commit dengan pesan
git commit -am "pesan"      # Add + commit (tracked files)
\`\`\`

### Diff
\`\`\`bash
git diff                    # Lihat perubahan (unstaged)
git diff --staged           # Lihat perubahan (staged)
git diff branch1..branch2   # Bandingkan branch
\`\`\`

### Undo
\`\`\`bash
git restore <file>          # Batalkan perubahan file
git restore --staged <file> # Unstage file
git reset --soft HEAD~1     # Undo commit (simpan perubahan)
git reset --hard HEAD~1     # Undo commit (hapus perubahan)
\`\`\`

## Commit Message Convention

\`\`\`
<type>: <subject>

feat: Tambah fitur login dengan Google
fix: Perbaiki bug validasi email
docs: Update README instalasi
style: Format kode dengan Prettier
refactor: Extract fungsi validasi
test: Tambah unit test untuk login
chore: Update dependencies
\`\`\`
  `,

  quiz: [
    { question: "Perintah lihat status file?", options: ["git log", "git status", "git diff", "git show"], correctAnswer: 1 },
    { question: "git add . untuk?", options: ["Commit", "Stage semua file", "Push", "Pull"], correctAnswer: 1 },
    { question: "Conventional commit: 'feat:' untuk?", options: ["Bug fix", "Fitur baru", "Dokumentasi", "Refactor"], correctAnswer: 1 }
  ],

  codeExamples: []
};