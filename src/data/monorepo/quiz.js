export const chapter = {
  slug: "monorepo-quiz",
  title: "Quiz Akhir Monorepo",
  description: "Uji pemahamanmu tentang strategi monorepo.",
  icon: "SiTurborepo",
  color: "#EF4444",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["monorepo-ci-cd"],
  tags: ["monorepo", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Monorepo\n\n10 soal.`,
  quiz: [
    { question: "Monorepo vs Polyrepo?", options: ["Sama", "1 repo semua vs 1 repo per project", "Polyrepo kecil", "Monorepo deprecated"], correctAnswer: 1 },
    { question: "Turborepo dibuat?", options: ["Google", "Vercel", "Microsoft", "Meta"], correctAnswer: 1 },
    { question: "turbo.json?", options: ["Package", "Pipeline config", "Deps", "Scripts"], correctAnswer: 1 },
    { question: "workspace:*?", options: ["NPM registry", "Local package reference", "Git", "External"], correctAnswer: 1 },
    { question: "Cache HIT?", options: ["Build ulang", "Langsung selesai", "Error", "Deploy"], correctAnswer: 1 },
    { question: "nx affected:test?", options: ["Semua", "Hanya yang berubah", "Manual", "Skip"], correctAnswer: 1 },
    { question: "Lerna: useNx: true?", options: ["Error", "Enable Nx caching", "Disable", "Deprecated"], correctAnswer: 1 },
    { question: "Atomic changes?", options: ["Satu file", "Satu PR lintas project", "Satu commit", "Satu branch"], correctAnswer: 1 },
    { question: "Selective deploy?", options: ["Semua", "Hanya apps yang berubah", "Manual", "Tidak deploy"], correctAnswer: 1 },
    { question: "pnpm --filter?", options: ["Search", "Target package spesifik", "Install", "Publish"], correctAnswer: 1 }
  ]
};