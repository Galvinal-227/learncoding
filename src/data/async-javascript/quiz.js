export const chapter = {
  slug: "async-javascript-quiz",
  title: "Quiz Akhir Async JavaScript",
  description: "Uji pemahamanmu tentang asynchronous JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["async-javascript-abort-controller"],
  tags: ["async", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Async JavaScript\n\n15 soal.`,

  quiz: [
    { question: "3 teknik async JS?", options: ["HTML,CSS,JS", "Callback,Promise,Async/Await", "Node,Deno,Bun", "var,let,const"], correctAnswer: 1 },
    { question: "3 state Promise?", options: ["Start,Run,Stop", "Pending,Fulfilled,Rejected", "Open,Close,Error", "A,B,C"], correctAnswer: 1 },
    { question: "Async function return?", options: ["Data", "Promise", "undefined", "Callback"], correctAnswer: 1 },
    { question: "Promise.all() 1 gagal?", options: ["Lanjut", "Semua gagal", "Abaikan", "Retry"], correctAnswer: 1 },
    { question: "Microtask vs macrotask prioritas?", options: ["Macrotask", "Microtask", "Sama", "Bergantian"], correctAnswer: 1 },
    { question: "setTimeout termasuk?", options: ["Microtask", "Macrotask", "Sync", "Tidak ada"], correctAnswer: 1 },
    { question: "AbortController untuk?", options: ["Cache", "Batalin fetch request", "Log", "Compress"], correctAnswer: 1 },
    { question: "Retry pattern?", options: ["Langsung error", "Coba lagi jika gagal", "Skip", "Cache"], correctAnswer: 1 },
    { question: "Promise.any()?", options: ["Semua sukses", "Pertama sukses", "Tercepat", "Timeout"], correctAnswer: 1 },
    { question: "Callback Hell solusi?", options: ["Lebih banyak callback", "Promise / Async/Await", "Abaikan", "Synchronous"], correctAnswer: 1 },
    { question: "try/catch di async?", options: ["Tidak bisa", "✅ Bisa dengan async/await", "Hanya .catch()", "Hanya sync"], correctAnswer: 1 },
    { question: "Promise.allSettled()?", options: ["1 gagal semua gagal", "Semua selesai, lapor masing-masing", "Tercepat", "Pertama sukses"], correctAnswer: 1 },
    { question: "await di luar async?", options: ["Selalu bisa", "Hanya dengan Top-Level Await (module)", "Tidak pernah", "Di Node.js saja"], correctAnswer: 1 },
    { question: "Error name AbortError?", options: ["Network error", "Request dibatalkan", "Server error", "CORS error"], correctAnswer: 1 },
    { question: "Pattern untuk batasi request paralel?", options: ["Promise.all", "Concurrency limiter / Pool", "Promise.race", "Sequential"], correctAnswer: 1 }
  ],

  codeExamples: []
};