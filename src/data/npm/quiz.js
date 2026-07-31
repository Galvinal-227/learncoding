export const chapter = {
  slug: "npm-quiz",
  title: "Quiz Akhir NPM",
  description: "Uji pemahamanmu tentang NPM package manager.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["npm-audit"],
  tags: ["npm", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir NPM\n\n10 soal.`,
  quiz: [
    { question: "NPM?", options: ["Node Package Manager", "Network Protocol", "New Program", "Node Program"], correctAnswer: 0 },
    { question: "devDependencies?", options: ["Production", "Development only", "Both", "Peer"], correctAnswer: 1 },
    { question: "^4.18.2?", options: ["Exact", "Compatible (4.x.x)", "Patch only", "Any"], correctAnswer: 1 },
    { question: "npm ci?", options: ["Install", "Clean install (fast, CI/CD)", "Update", "Init"], correctAnswer: 1 },
    { question: "npm publish?", options: ["Install", "Upload to registry", "Update", "Remove"], correctAnswer: 1 },
    { question: "MAJOR version?", options: ["Bug fix", "New feature", "Breaking change", "Pre-release"], correctAnswer: 2 },
    { question: "npx?", options: ["Install global", "Execute without install", "Publish", "Update"], correctAnswer: 1 },
    { question: "npm audit?", options: ["Install", "Security scan", "Update", "Publish"], correctAnswer: 1 },
    { question: "package-lock.json?", options: ["Ignore", "Commit (deterministic install)", "Delete", "Optional"], correctAnswer: 1 },
    { question: "^ vs ~?", options: ["Same", "^: minor+patch; ~: patch only", "~: minor+patch", "^: patch only"], correctAnswer: 1 }
  ]
};