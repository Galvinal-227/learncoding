export const chapter = {
  slug: "nestjs-quiz",
  title: "Quiz Akhir NestJS",
  description: "Uji pemahamanmu tentang framework NestJS.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-testing"],
  tags: ["nestjs", "quiz"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir NestJS\n\n10 soal.`,
  quiz: [
    { question: "NestJS terinspirasi?", options: ["React", "Angular", "Vue", "Svelte"], correctAnswer: 1 },
    { question: "@Injectable()?", options: ["Controller", "Service/Provider (DI)", "Module", "Guard"], correctAnswer: 1 },
    { question: "@Module() imports?", options: ["Controllers", "Module lain", "Services", "Routes"], correctAnswer: 1 },
    { question: "@Param('id')?", options: ["Query", "Route param /users/:id", "Body", "Header"], correctAnswer: 1 },
    { question: "ValidationPipe?", options: ["Routing", "Validasi DTO + transform", "Auth", "Logging"], correctAnswer: 1 },
    { question: "Guard?", options: ["Validation", "Authorization", "Transform", "Logging"], correctAnswer: 1 },
    { question: "Interceptor?", options: ["Auth", "Wrap request/response", "Validation", "Routing"], correctAnswer: 1 },
    { question: "@Global()?", options: ["Private", "Module tersedia semua", "Deprecated", "Controller"], correctAnswer: 1 },
    { question: "class-validator?", options: ["Testing", "Decorator validation", "ORM", "Logging"], correctAnswer: 1 },
    { question: "NestJS vs Express?", options: ["Sama", "NestJS: opinionated; Express: minimalis", "NestJS kecil", "Express terstruktur"], correctAnswer: 1 }
  ]
};