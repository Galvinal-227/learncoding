export const chapter = {
  slug: "websocket-quiz",
  title: "Quiz Akhir WebSocket",
  description: "Uji pemahamanmu tentang komunikasi real-time dengan WebSocket.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["websocket-scaling"],
  tags: ["websocket", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir WebSocket\n\n10 soal.`,
  quiz: [
    { question: "WebSocket vs HTTP?", options: ["Same", "WS: persistent bidirectional; HTTP: request-response", "HTTP bidirectional", "WS one-way"], correctAnswer: 1 },
    { question: "WebSocket handshake?", options: ["New protocol", "HTTP Upgrade (101 Switching)", "TCP only", "UDP"], correctAnswer: 1 },
    { question: "Socket.io: room?", options: ["Namespace", "Group for broadcasting", "Auth", "Middleware"], correctAnswer: 1 },
    { question: "io.to().emit()?", options: ["All", "Only specific room", "Server", "One client"], correctAnswer: 1 },
    { question: "WSS?", options: ["HTTP", "WebSocket Secure (TLS)", "TCP", "UDP"], correctAnswer: 1 },
    { question: "Redis adapter?", options: ["Cache", "Share state across servers", "Auth", "Logging"], correctAnswer: 1 },
    { question: "ws.readyState: OPEN?", options: ["0", "1", "2", "3"], correctAnswer: 1 },
    { question: "Socket.io auth?", options: ["URL", "socket.handshake.auth.token", "Cookie", "No auth"], correctAnswer: 1 },
    { question: "WebSocket use case?", options: ["Static page", "Chat, live data, gaming", "REST API", "File upload"], correctAnswer: 1 },
    { question: "Sticky sessions?", options: ["Random", "Same client → same server", "Round robin", "Least conn"], correctAnswer: 1 }
  ]
};