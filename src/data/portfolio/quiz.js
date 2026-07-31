export const chapter = {
  slug: "portfolio-quiz",
  title: "Quiz Akhir Portfolio",
  description: "Uji pemahamanmu tentang membangun portfolio developer.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["portfolio-github-pages"],
  tags: ["portfolio", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Portfolio\n\n10 soal.`,
  quiz: [
    { question: "Portfolio vs Resume?", options: ["Sama", "Portfolio: bukti nyata; Resume: teks", "Resume penting", "Portfolio optional"], correctAnswer: 1 },
    { question: "Project portfolio: todo app?", options: ["Ya", "Tidak (terlalu basic)", "Boleh", "Wajib"], correctAnswer: 1 },
    { question: "Live demo?", options: ["Optional", "WAJIB (recruiter coba)", "Hanya kode", "PDF"], correctAnswer: 1 },
    { question: "Case study: penting?", options: ["Screenshot", "Problem → Solution → Results", "Tech stack", "Warna"], correctAnswer: 1 },
    { question: "Portfolio: warna?", options: ["Banyak", "Konsisten (2-3 warna utama)", "Hitam putih", "Acak"], correctAnswer: 1 },
    { question: "Portfolio hosting?", options: ["AWS", "Vercel/Netlify/GitHub Pages", "DigitalOcean", "Heroku"], correctAnswer: 1 },
    { question: "Domain: .dev?", options: ["Company", "Developer portfolio", "Country", "Not allowed"], correctAnswer: 1 },
    { question: "Profile README?", options: ["Repo README", "Repo = username", "Gist", "Wiki"], correctAnswer: 1 },
    { question: "Pinned repos?", options: ["2", "Maks 6", "10", "Unlimited"], correctAnswer: 1 },
    { question: "STAR method?", options: ["Code", "Situation,Task,Action,Result", "Design", "Testing"], correctAnswer: 1 }
  ]
};