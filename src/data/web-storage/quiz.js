export const chapter = {
  slug: "web-storage-quiz",
  title: "Quiz Akhir Web Storage",
  description: "Uji pemahamanmu tentang browser storage.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["web-storage-storage-quotas"],
  tags: ["web-storage", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `## Quiz Akhir Web Storage\n\n10 soal.`,
  quiz: [
    { question: "localStorage: capacity?", options: ["4KB", "5-10MB", "Unlimited", "1GB"], correctAnswer: 1 },
    { question: "localStorage: data type?", options: ["Object", "String only", "Number", "Any"], correctAnswer: 1 },
    { question: "sessionStorage: lifetime?", options: ["Permanent", "Tab session only", "1 day", "Configurable"], correctAnswer: 1 },
    { question: "httpOnly cookie?", options: ["JS can read", "JS cannot access", "HTTPS only", "Expires fast"], correctAnswer: 1 },
    { question: "SameSite?", options: ["Domain", "CSRF protection", "Expiry", "Size"], correctAnswer: 1 },
    { question: "IndexedDB: capacity?", options: ["5MB", ">50% of disk", "4KB", "Unlimited"], correctAnswer: 1 },
    { question: "Dexie.js?", options: ["Native", "Simpler IndexedDB wrapper", "SQL", "Cache"], correctAnswer: 1 },
    { question: "Cache API?", options: ["Data", "Network request caching", "Cookies", "localStorage"], correctAnswer: 1 },
    { question: "navigator.storage.estimate()?", options: ["Delete", "Check storage quota", "Clear", "Set"], correctAnswer: 1 },
    { question: "localStorage: async?", options: ["Yes", "No (synchronous)", "Optional", "Depends"], correctAnswer: 1 }
  ]
};