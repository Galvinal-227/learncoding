export const chapter = {
  slug: "software-architecture-quiz",
  title: "Quiz Akhir Software Architecture",
  description: "Uji pemahamanmu tentang software architecture patterns.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["software-architecture-event-sourcing"],
  tags: ["architecture", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: "Quiz Software Architecture - 10 soal.",
  quiz: [
    { question: "MVC: Model?", options: ["UI", "Data + business logic", "Request handler", "Router"], correctAnswer: 1 },
    { question: "Microservices: database?", options: ["Shared", "One per service", "No database", "Cache only"], correctAnswer: 1 },
    { question: "Event-Driven?", options: ["Sync calls", "Async events between services", "Database only", "REST only"], correctAnswer: 1 },
    { question: "Hexagonal: Ports?", options: ["Network ports", "Interfaces for external communication", "Database ports", "Server ports"], correctAnswer: 1 },
    { question: "Clean Architecture: dependency?", options: ["Outward", "Inward (outer → inner)", "Both", "No rule"], correctAnswer: 1 },
    { question: "CQRS?", options: ["Same model", "Separate read & write models", "Cache pattern", "Auth pattern"], correctAnswer: 1 },
    { question: "Event Sourcing?", options: ["Current state", "Store events (history)", "Delete events", "Ignore events"], correctAnswer: 1 },
    { question: "Saga pattern?", options: ["Game", "Distributed transaction", "Database", "Auth"], correctAnswer: 1 },
    { question: "ADR?", options: ["Bug report", "Architecture Decision Record", "API doc", "Test case"], correctAnswer: 1 },
    { question: "Domain layer?", options: ["Framework", "Core business logic", "Database", "UI"], correctAnswer: 1 }
  ]
};