export const chapter = {
  slug: "openai-api-quiz",
  title: "Quiz Akhir OpenAI API",
  description: "Uji pemahamanmu tentang OpenAI API.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["openai-api-pricing"],
  tags: ["openai", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir OpenAI API\n\n10 soal.`,
  quiz: [
    { question: "GPT-4o?", options: ["Image", "Multimodal (text,vision,audio)", "Speech", "Embeddings"], correctAnswer: 1 },
    { question: "System role?", options: ["User", "Instruksi awal AI", "Response", "Error"], correctAnswer: 1 },
    { question: "temperature: 0?", options: ["Kreatif", "Deterministik", "Random", "Error"], correctAnswer: 1 },
    { question: "stream: true?", options: ["Tunggu", "Real-time streaming", "Batch", "Error"], correctAnswer: 1 },
    { question: "DALL-E?", options: ["Text", "Image generation", "Speech", "Translation"], correctAnswer: 1 },
    { question: "Embeddings?", options: ["Gambar", "Text → vector (semantic search)", "Audio", "Video"], correctAnswer: 1 },
    { question: "Function Calling?", options: ["GPT eksekusi", "GPT beri tahu fungsi yang harus dipanggil", "Langsung", "Otomatis"], correctAnswer: 1 },
    { question: "API key?", options: ["Hardcode", "Environment variable", "GitHub", "Public"], correctAnswer: 1 },
    { question: "GPT-4 Turbo context?", options: ["4K", "128K tokens", "8K", "1M"], correctAnswer: 1 },
    { question: "Fine-tuning?", options: ["Prompt", "Train model dengan data spesifik", "API call", "Streaming"], correctAnswer: 1 }
  ]
};