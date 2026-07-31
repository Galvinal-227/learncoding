export const chapter = {
  slug: "git-quiz",
  title: "Quiz Akhir Git",
  description: "Uji pemahamanmu tentang Git.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["git-advanced-log"],
  tags: ["git", "quiz"],
  order: 15,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Git\n\n15 soal.`,
  quiz: [
    { question: "Siapa pencipta Git?", options: ["Bill Gates", "Linus Torvalds", "Mark Zuckerberg", "Brendan Eich"], correctAnswer: 1 },
    { question: "3 states Git?", options: ["Start,Run,Stop", "Working,Staging,Repository", "Local,Cloud,Server", "Add,Commit,Push"], correctAnswer: 1 },
    { question: "Git vs GitHub?", options: ["Sama", "Git: VCS; GitHub: hosting", "GitHub lebih tua", "Tidak berhubungan"], correctAnswer: 1 },
    { question: "Lihat status file?", options: ["git log", "git status", "git diff", "git show"], correctAnswer: 1 },
    { question: "Stage semua file?", options: ["git add .", "git stage", "git track", "git save"], correctAnswer: 0 },
    { question: "Buat branch baru?", options: ["git new", "git branch <nama>", "git create", "git fork"], correctAnswer: 1 },
    { question: "Pindah branch (modern)?", options: ["git checkout", "git switch", "git move", "git change"], correctAnswer: 1 },
    { question: "Merge conflict jika?", options: ["File berbeda", "Dua branch ubah baris sama", "Branch banyak", "Commit banyak"], correctAnswer: 1 },
    { question: "Rebase vs Merge?", options: ["Sama", "Rebase: rewrite history; Merge: preserve", "Merge lebih bersih", "Rebase tidak aman"], correctAnswer: 1 },
    { question: "Simpan sementara tanpa commit?", options: ["git save", "git stash", "git temp", "git hold"], correctAnswer: 1 },
    { question: "Lihat history commit ringkas?", options: ["git log", "git log --oneline", "git show", "git history"], correctAnswer: 1 },
    { question: "Clone repository?", options: ["git copy", "git clone <url>", "git download", "git fork"], correctAnswer: 1 },
    { question: "Undo commit (simpan perubahan)?", options: ["git reset --hard", "git reset --soft HEAD~1", "git revert", "git undo"], correctAnswer: 1 },
    { question: "Conventional commit 'feat:'?", options: ["Bug fix", "Fitur baru", "Dokumentasi", "Refactor"], correctAnswer: 1 },
    { question: "gitignore untuk?", options: ["Track file", "Ignore file dari Git", "Hapus file", "Rename file"], correctAnswer: 1 }
  ]
};