export const chapter = {
  slug: "express-js-quiz",
  title: "Quiz Akhir Express.js",
  description: "Uji pemahamanmu tentang Express.js.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["express-js-testing"],
  tags: ["express", "quiz"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Express.js\n\n15 soal.`,
  quiz: [
    { question: "Express.js adalah?", options: ["Database", "Web framework Node.js", "Frontend", "Testing"], correctAnswer: 1 },
    { question: "Route parameter?", options: ["req.query", "req.params", "req.body", "req.url"], correctAnswer: 1 },
    { question: "Query string?", options: ["req.query", "req.params", "req.body", "req.url"], correctAnswer: 0 },
    { question: "Middleware next()?", options: ["Opsional", "Wajib untuk lanjut", "Debug", "Error"], correctAnswer: 1 },
    { question: "Error handler parameter?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
    { question: "JSON body parser?", options: ["express.text()", "express.json()", "express.body()", "express.parse()"], correctAnswer: 1 },
    { question: "HTTP create resource?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: 1 },
    { question: "Status created?", options: ["200", "201", "204", "404"], correctAnswer: 1 },
    { question: "bcrypt untuk?", options: ["Encrypt", "Hash password", "JWT", "CORS"], correctAnswer: 1 },
    { question: "Header auth format?", options: ["token <v>", "Bearer <token>", "JWT <v>", "Basic <v>"], correctAnswer: 1 },
    { question: "express.Router()?", options: ["Debug", "Group routes", "Error", "Static"], correctAnswer: 1 },
    { question: "Supertest untuk?", options: ["Unit", "Integration test HTTP", "E2E", "Perf"], correctAnswer: 1 },
    { question: "Static files?", options: ["express.static()", "app.files()", "express.files()", "app.serve()"], correctAnswer: 0 },
    { question: "express-validator?", options: ["Routing", "Validasi input", "Auth", "Logging"], correctAnswer: 1 },
    { question: "PATCH vs PUT?", options: ["Sama", "PATCH: partial; PUT: full", "PUT: partial", "PATCH deprecated"], correctAnswer: 1 }
  ]
};