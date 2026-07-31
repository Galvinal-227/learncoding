export const chapter = {
  slug: "openai-api-introduction",
  title: "Pengenalan OpenAI API",
  description: "Pahami apa itu OpenAI API, model yang tersedia, dan apa yang bisa dibangun.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["openai", "api", "gpt", "ai", "llm"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu OpenAI API?

OpenAI API adalah **platform AI** yang menyediakan akses ke model-model canggih seperti **GPT-4, DALL-E, Whisper**. Kamu bisa integrasikan AI ke aplikasi via REST API.

## Model yang Tersedia

| Model | Fungsi | Contoh Use Case |
|-------|--------|----------------|
| **GPT-4o** | Chat, text, reasoning (terbaru) | Chatbot, analisis, coding |
| **GPT-4 Turbo** | Large context (128K) | Dokumen panjang, research |
| **GPT-3.5 Turbo** | Cepat, murah | Simple tasks, draft |
| **DALL-E 3** | Generate gambar | Ilustrasi, design |
| **Whisper** | Speech-to-text | Transkrip audio/video |
| **TTS** | Text-to-speech | Voice assistant |
| **Embeddings** | Text → vector | Search, clustering, RAG |

## Yang Bisa Dibangun

- 💬 **Chatbot** - Customer service, asisten virtual
- 🔍 **Semantic Search** - Pencarian berdasarkan makna
- 📝 **Content Generator** - Artikel, copywriting
- 🖼️ **Image Generator** - Generate/edit gambar
- 📊 **Data Analysis** - Analisis sentimen, klasifikasi
- 🤖 **AI Agents** - Autonomous task execution
- 🎯 **RAG** - QA berdasarkan dokumen internal
- 🗣️ **Voice AI** - Speech-to-text + Text-to-speech

## Kenapa OpenAI API?

- 🧠 **Model terbaik** - GPT-4 adalah SOTA (State of The Art)
- 🔧 **Mudah digunakan** - REST API, SDK untuk Python/Node.js
- 📚 **Dokumentasi lengkap** - Examples, cookbook, playground
- ⚡ **Cepat** - Response time < 1 detik (streaming)
- 🛡️ **Enterprise-ready** - SOC2, GDPR, data privacy
  `,

  quiz: [
    { question: "GPT-4o?", options: ["Image model", "Latest multimodal model (text, vision, audio)", "Speech model", "Embeddings"], correctAnswer: 1 },
    { question: "DALL-E?", options: ["Text generation", "Image generation", "Speech-to-text", "Translation"], correctAnswer: 1 },
    { question: "OpenAI API: akses via?", options: ["FTP", "REST API + SDK", "SSH", "GraphQL only"], correctAnswer: 1 }
  ],

  codeExamples: []
};