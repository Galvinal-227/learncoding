export const chapter = {
  slug: "linux-quiz",
  title: "Quiz Akhir Linux",
  description: "Uji pemahamanmu tentang Linux.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["linux-security"],
  tags: ["linux", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Linux\n\n15 soal.`,
  quiz: [
    { question: "Linux creator?", options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Mark"], correctAnswer: 1 },
    { question: "ls -la?", options: ["List", "List + hidden + details", "Delete", "Create"], correctAnswer: 1 },
    { question: "chmod 755?", options: ["Read", "rwxr-xr-x", "No access", "Write"], correctAnswer: 1 },
    { question: "chmod 600?", options: ["Public", "Owner only rw", "All access", "Execute"], correctAnswer: 1 },
    { question: "apt: Ubuntu?", options: ["yum", "apt", "pacman", "apk"], correctAnswer: 1 },
    { question: "Add user to group?", options: ["useradd", "usermod -aG", "addgroup", "chown"], correctAnswer: 1 },
    { question: "kill -9?", options: ["Graceful", "Force (SIGKILL)", "Pause", "Resume"], correctAnswer: 1 },
    { question: "Background process?", options: ["command &", "command!", "command #", "command @"], correctAnswer: 0 },
    { question: "Enable service?", options: ["start", "enable", "boot", "auto"], correctAnswer: 1 },
    { question: "Cron: 0 2 * * *?", options: ["2 menit", "Jam 2 pagi setiap hari", "2 hari", "Februari"], correctAnswer: 1 },
    { question: "SSH port?", options: ["80", "443", "22", "8080"], correctAnswer: 2 },
    { question: "UFW?", options: ["Web", "Firewall", "File", "Process"], correctAnswer: 1 },
    { question: "Fail2Ban?", options: ["Firewall", "Block IP brute force", "Web", "DB"], correctAnswer: 1 },
    { question: "PermitRootLogin?", options: ["yes", "no (secure)", "maybe", "always"], correctAnswer: 1 },
    { question: "grep?", options: ["Create", "Search text", "Delete", "Move"], correctAnswer: 1 }
  ]
};