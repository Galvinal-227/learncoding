export const chapter = {
  slug: "firebase-quiz",
  title: "Quiz Akhir Firebase",
  description: "Uji pemahamanmu tentang Firebase.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["firebase-analytics"],
  tags: ["firebase", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Firebase\n\n10 soal.`,
  quiz: [
    { question: "Firebase adalah?", options: ["Database", "BaaS (Backend-as-a-Service)", "Frontend", "Testing"], correctAnswer: 1 },
    { question: "onAuthStateChanged?", options: ["Login", "Monitor status auth", "Register", "Logout"], correctAnswer: 1 },
    { question: "Firestore: collection?", options: ["Table", "Collection > Document > fields", "Row", "Column"], correctAnswer: 1 },
    { question: "onSnapshot?", options: ["One-time", "Realtime listener", "Write", "Delete"], correctAnswer: 1 },
    { question: "uploadBytesResumable?", options: ["Download", "Upload + progress", "Delete", "List"], correctAnswer: 1 },
    { question: "Cloud Functions trigger?", options: ["HTTP", "onDocumentCreated", "Semua benar", "Manual"], correctAnswer: 2 },
    { question: "Deploy hosting?", options: ["firebase deploy", "deploy --only hosting", "firebase upload", "firebase host"], correctAnswer: 1 },
    { question: "Realtime DB cocok?", options: ["App data", "Chat, live sync", "File upload", "Auth"], correctAnswer: 1 },
    { question: "logEvent?", options: ["Error", "Track custom events", "Auth", "Database"], correctAnswer: 1 },
    { question: "Firebase vs Supabase?", options: ["Sama", "Firebase: NoSQL; Supabase: SQL", "Supabase mahal", "Firebase OS"], correctAnswer: 1 }
  ]
};