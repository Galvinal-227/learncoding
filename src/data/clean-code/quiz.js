export const chapter = {
  slug: "clean-code-quiz",
  title: "Quiz Akhir Clean Code",
  description: "Uji pemahamanmu tentang Clean Code.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["clean-code-refactoring"],
  tags: ["clean-code", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Clean Code\n\n10 soal.`,
  quiz: [
    { question: "DRY?", options: ["Don't Run Yet", "Don't Repeat Yourself", "Do Repeat Yourself", "Dynamic Render Yaml"], correctAnswer: 1 },
    { question: "KISS?", options: ["Keep It Simple, Stupid", "Keep It Safe", "Kernel Input", "Kindly Implement"], correctAnswer: 1 },
    { question: "Boolean naming?", options: ["active", "isActive, hasPermission", "bActive", "boolean_active"], correctAnswer: 1 },
    { question: "Konstanta?", options: ["camelCase", "UPPER_SNAKE_CASE", "PascalCase", "kebab"], correctAnswer: 1 },
    { question: "Max parameter fungsi?", options: ["Unlimited", "1-3", "5", "10"], correctAnswer: 1 },
    { question: "Early return?", options: ["Cepat pulang", "Kurangi nesting", "Return pertama", "Hindari return"], correctAnswer: 1 },
    { question: "Refactoring?", options: ["Ubah fitur", "Perbaiki struktur tanpa ubah behavior", "Rewrite", "Bug fix"], correctAnswer: 1 },
    { question: "Boy Scout Rule?", options: ["Selalu commit", "Leave code better", "Pakai seragam", "Jangan bug"], correctAnswer: 1 },
    { question: "Syarat refactor?", options: ["Izin bos", "Ada test", "Deadline longgar", "Semua"], correctAnswer: 1 },
    { question: "Single Responsibility?", options: ["Satu file", "Satu fungsi, satu tugas", "Satu class", "Satu project"], correctAnswer: 1 }
  ]
};