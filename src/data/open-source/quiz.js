export const chapter = {
  slug: "open-source-quiz",
  title: "Quiz Akhir Open Source",
  description: "Uji pemahamanmu tentang kontribusi open source.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["open-source-licensing"],
  tags: ["open-source", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Open Source\n\n10 soal.`,
  quiz: [
    { question: "Open Source?", options: ["Gratis", "Kode sumber terbuka untuk publik", "Bajakan", "Cloud"], correctAnswer: 1 },
    { question: "Kontribusi selain coding?", options: ["Tidak ada", "Docs, testing, desain, support", "Hanya review", "Hanya bug"], correctAnswer: 1 },
    { question: "good first issue?", options: ["Bug kritis", "Issue untuk kontributor baru", "Feature besar", "Security"], correctAnswer: 1 },
    { question: "Fork?", options: ["Clone", "Copy repo ke akun sendiri", "Delete", "Merge"], correctAnswer: 1 },
    { question: "PR title format?", options: ["Bebas", "Conventional commits (feat:, fix:)", "Just title", "No format"], correctAnswer: 1 },
    { question: "Bug report: penting?", options: ["Judul", "Steps to reproduce", "Emoji", "Panjang"], correctAnswer: 1 },
    { question: "Code of Conduct?", options: ["Lisensi", "Aturan perilaku komunitas", "Coding style", "Docs"], correctAnswer: 1 },
    { question: "MIT license?", options: ["Copyleft", "Permissive (bebas pakai)", "Proprietary", "No license"], correctAnswer: 1 },
    { question: "GPL?", options: ["Permissive", "Copyleft (project harus GPL)", "Bebas", "Komersial"], correctAnswer: 1 },
    { question: "Maintainer?", options: ["Dibayar", "Sering volunteer (hargai waktunya)", "Always available", "Fast response"], correctAnswer: 1 }
  ]
};