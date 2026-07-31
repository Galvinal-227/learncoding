export const chapter = {
  slug: "web-security-quiz",
  title: "Quiz Akhir Web Security",
  description: "Uji pemahamanmu tentang keamanan web.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-security-security-headers"],
  tags: ["security", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `## Quiz Akhir Web Security\n\n10 soal.`,
  quiz: [
    { question: "Security mindset #1?", options: ["Trust", "NEVER trust user input", "Ignore", "Hope"], correctAnswer: 1 },
    { question: "OWASP A01?", options: ["Injection", "Broken Access Control", "XSS", "CSRF"], correctAnswer: 1 },
    { question: "XSS prevention?", options: ["innerHTML", "textContent/DOMPurify", "eval", "Script src"], correctAnswer: 1 },
    { question: "CSRF token?", options: ["Password", "Unique token per session", "Session ID", "JWT"], correctAnswer: 1 },
    { question: "CORS?", options: ["CSS", "Cross-Origin Resource Sharing", "API", "Database"], correctAnswer: 1 },
    { question: "CSP?", options: ["CSS", "Content Security Policy", "API", "Database"], correctAnswer: 1 },
    { question: "SQL injection prevention?", options: ["Escape", "Parameterized queries", "Firewall", "Auth"], correctAnswer: 1 },
    { question: "bcrypt?", options: ["Encryption", "Password hashing", "JWT", "CORS"], correctAnswer: 1 },
    { question: "Rate limiting?", options: ["Speed up", "Prevent brute force", "Cache", "Auth"], correctAnswer: 1 },
    { question: "HSTS?", options: ["CSS", "Force HTTPS", "API", "Database"], correctAnswer: 1 }
  ]
};