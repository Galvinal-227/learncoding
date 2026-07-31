export const chapter = {
  slug: "microservices-quiz",
  title: "Quiz Akhir Microservices",
  description: "Uji pemahamanmu tentang arsitektur microservices.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["microservices-deployment"],
  tags: ["microservices", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Microservices\n\n15 soal.`,
  quiz: [
    { question: "Microservices vs Monolith?", options: ["Sama", "Micro: small independent; Mono: one big", "Mono cepat", "Micro deprecated"], correctAnswer: 1 },
    { question: "Database microservices?", options: ["Satu shared", "Satu per service", "Tanpa DB", "Cache only"], correctAnswer: 1 },
    { question: "Bounded Context?", options: ["Shared model", "Boundary tiap service (DDD)", "DB", "API"], correctAnswer: 1 },
    { question: "gRPC vs REST?", options: ["Sama", "gRPC: binary HTTP/2; REST: JSON", "REST cepat", "gRPC deprecated"], correctAnswer: 1 },
    { question: "Saga pattern?", options: ["Game", "Distributed transaction", "DB", "Auth"], correctAnswer: 1 },
    { question: "API Gateway?", options: ["DB", "Single entry point microservices", "Container", "Queue"], correctAnswer: 1 },
    { question: "CQRS?", options: ["DB", "Command Query Responsibility Segregation", "Gateway", "Queue"], correctAnswer: 1 },
    { question: "Event Sourcing?", options: ["Current state", "Simpan events (perubahan)", "Backup", "Logging"], correctAnswer: 1 },
    { question: "Service Discovery K8s?", options: ["Manual", "DNS otomatis", "Eureka", "Consul only"], correctAnswer: 1 },
    { question: "Contract testing?", options: ["Legal", "Test API compatibility", "Unit", "DB"], correctAnswer: 1 },
    { question: "CI/CD per service?", options: ["Satu pipeline", "Pipeline independen", "Manual", "No need"], correctAnswer: 1 },
    { question: "Service mesh?", options: ["DB", "Istio (traffic, security)", "Gateway", "Queue"], correctAnswer: 1 },
    { question: "Kong?", options: ["DB", "Open source API Gateway", "Queue", "Container"], correctAnswer: 1 },
    { question: "Kapan TIDAK microservices?", options: ["App besar", "Startup MVP / tim kecil", "Banyak tim", "High traffic"], correctAnswer: 1 },
    { question: "Conway's Law?", options: ["Fisika", "Struktur tim = struktur sistem", "Hukum", "Network"], correctAnswer: 1 }
  ]
};