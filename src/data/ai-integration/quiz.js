export const chapter = {
  slug: "ai-integration-quiz",
  title: "Quiz Akhir AI Integration",
  description: "Uji pemahamanmu tentang integrasi AI di aplikasi web.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ai-integration-best-practices"],
  tags: ["ai", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir AI Integration\n\n15 soal.`,

  quiz: [
    { question: "AI Integration adalah?", options: ["Membuat AI", "Integrasi AI via API ke aplikasi", "Machine learning", "Data science"], correctAnswer: 1 },
    { question: "Penyedia API AI populer?", options: ["AWS", "OpenAI", "MongoDB", "Vercel"], correctAnswer: 1 },
    { question: "Apa itu RAG?", options: ["Database", "AI + data sendiri", "Model", "Framework"], correctAnswer: 1 },
    { question: "Temperature mengontrol?", options: ["Kecepatan", "Kreativitas", "Token", "Harga"], correctAnswer: 1 },
    { question: "Context window Claude?", options: ["8K", "128K", "200K", "1M"], correctAnswer: 2 },
    { question: "Kenapa streaming penting?", options: ["Murah", "UX real-time", "Aman", "Wajib"], correctAnswer: 1 },
    { question: "Vector database populer?", options: ["MySQL", "Pinecone", "Redis", "SQLite"], correctAnswer: 1 },
    { question: "Embeddings untuk?", options: ["Gambar", "Representasi numerik makna", "Video", "Audio"], correctAnswer: 1 },
    { question: "System prompt untuk?", options: ["Hiasan", "Aturan dan kepribadian AI", "Kecepatan", "Debug"], correctAnswer: 1 },
    { question: "API key di mana?", options: ["Frontend", "Environment variable server", "Hardcode", "Public"], correctAnswer: 1 },
    { question: "OpenAI image generation?", options: ["GPT-4", "DALL-E", "Claude", "Gemini"], correctAnswer: 1 },
    { question: "Optimasi biaya?", options: ["Model termahal", "Model tepat + batas token + cache", "Retry terus", "Abaikan"], correctAnswer: 1 },
    { question: "Model open source?", options: ["GPT-4", "Claude", "Llama 3", "DALL-E"], correctAnswer: 2 },
    { question: "Prompt injection adalah?", options: ["Fitur", "Serangan manipulasi AI via prompt", "Optimasi", "Tools"], correctAnswer: 1 },
    { question: "Etika AI penting?", options: ["Tidak", "Ya: transparansi, fairness, privacy", "Opsional", "Hanya legal"], correctAnswer: 1 }
  ],

  codeExamples: []
};