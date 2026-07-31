export const chapter = {
  slug: "github-introduction",
  title: "Pengenalan GitHub",
  description: "Pahami apa itu GitHub, kenapa platform wajib developer, dan cara memulai.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["git-introduction"],
  tags: ["github", "git", "collaboration", "portfolio"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu GitHub?

GitHub adalah platform **hosting kode berbasis Git** + **social network untuk developer**. Dimiliki Microsoft sejak 2018. 100+ juta developer, 400+ juta repositories.

## Git vs GitHub

| Git | GitHub |
|-----|--------|
| Version control system | Hosting platform untuk Git |
| Software (lokal) | Cloud service |
| Command line | Web UI + tools |
| Gratis, open source | Free + paid plans |
| Dibuat Linus Torvalds | Dibuat Tom Preston-Werner |

## Yang Bisa Dilakukan di GitHub

- 📦 **Host repository** - Public & private repos
- 👥 **Kolaborasi** - Issues, Pull Requests, Code Review
- 🤖 **CI/CD** - GitHub Actions (otomatisasi)
- 📋 **Project management** - GitHub Projects (Kanban)
- 🌐 **Hosting** - GitHub Pages (static site gratis)
- 🔒 **Security** - Dependabot, Code scanning, Secret scanning
- 📝 **Documentation** - Wiki, README, GitHub Pages
- 🎯 **Portfolio** - Profile README, pinned repos
- 🧩 **Ecosystem** - Marketplace, Apps, Actions

## Kenapa Wajib Punya GitHub?

- 💼 **Portfolio** - Showcase project ke recruiter
- 🤝 **Open source** - Kontribusi ke project dunia
- 🧠 **Belajar** - Baca kode developer lain
- 📊 **Track record** - Green squares = konsistensi
- 🚀 **Deploy** - Dari repo langsung ke production

## Setup Awal

\`\`\`bash
# Konfigurasi Git (pakai GitHub username/email)
git config --global user.name "budi-santoso"
git config --global user.email "budi@email.com"

# Generate SSH key (tanpa password setiap push)
ssh-keygen -t ed25519 -C "budi@email.com"
cat ~/.ssh/id_ed25519.pub
# Copy output → GitHub Settings → SSH Keys → Add

# Test koneksi
ssh -T git@github.com
\`\`\`

## Profile README

Buat repo dengan nama **sama dengan username-mu** → otomatis jadi profile README.

\`\`\`markdown
# Hi, I'm Budi 👋
Full-stack developer from Indonesia 🇮🇩

- 🔭 Currently working on: E-commerce platform
- 🌱 Learning: Go & Kubernetes  
- 💬 Ask me about: React, Node.js, TypeScript
- 📫 How to reach me: budi@email.com
\`\`\`
  `,

  quiz: [
    { question: "GitHub vs Git?", options: ["Sama", "Git: VCS; GitHub: hosting platform", "GitHub lebih tua", "Tidak berhubungan"], correctAnswer: 1 },
    { question: "SSH key untuk?", options: ["Enkripsi", "Push tanpa password (authentikasi)", "Deploy", "Testing"], correctAnswer: 1 },
    { question: "Profile README: nama repo?", options: ["profile", "README", "sama dengan username", "about"], correctAnswer: 2 }
  ],

  codeExamples: []
};