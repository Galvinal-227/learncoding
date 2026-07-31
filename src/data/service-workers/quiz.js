export const chapter = {
  slug: "service-workers-quiz",
  title: "Quiz Akhir Service Workers",
  description: "Uji pemahamanmu tentang Service Workers.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["service-workers-workbox"],
  tags: ["service-worker", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: "Quiz Service Workers - 10 soal.",
  quiz: [
    { question: "Service Worker?", options: ["Main thread", "Background script", "Database", "CSS"], correctAnswer: 1 },
    { question: "SW: HTTPS?", options: ["Optional", "Required (except localhost)", "Not needed", "HTTP"], correctAnswer: 1 },
    { question: "Cache API?", options: ["Database", "Store request/response pairs", "LocalStorage", "Cookie"], correctAnswer: 1 },
    { question: "Cache First?", options: ["Network first", "Cache first, network fallback", "No cache", "Cache only"], correctAnswer: 1 },
    { question: "Background Sync?", options: ["Real-time", "Sync data when back online", "Cache only", "Push"], correctAnswer: 1 },
    { question: "Push API?", options: ["Pull data", "Server push to client", "Client push", "Database push"], correctAnswer: 1 },
    { question: "Workbox?", options: ["CSS framework", "Google SW library (easier)", "Database", "Server"], correctAnswer: 1 },
    { question: "SW: DOM access?", options: ["Yes", "No (background, no DOM)", "Partial", "Full"], correctAnswer: 1 },
    { question: "SW lifecycle?", options: ["None", "Install → Activate → Fetch", "Only fetch", "Only install"], correctAnswer: 1 },
    { question: "SW scope?", options: ["All origins", "Same origin + path", "Any origin", "No limit"], correctAnswer: 1 }
  ]
};