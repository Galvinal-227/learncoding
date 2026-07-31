export const chapter = {
  slug: "ai-integration-introduction",
  title: "Pengenalan AI Integration",
  description: "Pahami dasar integrasi AI ke dalam aplikasi web dan apa yang bisa kamu bangun.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["ai", "llm", "integrasi", "api"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu AI Integration?

AI Integration adalah praktik **menyematkan kecerdasan buatan** ke dalam aplikasi web menggunakan API dari penyedia AI (OpenAI, Anthropic, Google, dll).

## Kenapa Developer Web Perlu Belajar Ini?

- 🚀 **Skill paling dicari 2024-2026**: AI Engineer, Prompt Engineer
- 💰 **Nilai tambah besar**: Aplikasi dengan AI lebih bernilai
- 🧩 **Mudah diintegrasikan**: Cukup panggil API, tidak perlu train model sendiri
- 🎯 **Banyak use case**: Chatbot, search, rekomendasi, analisis, generasi konten

## Arsitektur Sederhana

\`\`\`
┌──────────────┐     HTTP Request     ┌──────────────┐
│              │─────────────────────▶│              │
│  Aplikasi    │                      │   AI API     │
│  (Next.js,   │◀─────────────────────│  (OpenAI,    │
│   Node.js)   │     JSON Response    │   Claude)    │
│              │                      │              │
└──────────────┘                      └──────────────┘
\`\`\`

## Yang Bisa Kamu Bangun

| Use Case | Contoh | API |
|----------|--------|-----|
| 💬 **Chatbot** | Customer service, asisten pribadi | GPT-4, Claude |
| 🔍 **Semantic Search** | Pencarian berdasarkan makna | Embeddings + Vector DB |
| 📝 **Content Generator** | Artikel, deskripsi produk | GPT-4 |
| 🖼️ **Image Generator** | Generate gambar dari teks | DALL-E, Stable Diffusion |
| 📊 **Data Analysis** | Analisis sentimen, klasifikasi | GPT-4 |
| 🎯 **Rekomendasi** | Rekomendasi produk/konten | Embeddings |
| 🗣️ **Speech-to-Text** | Transkrip audio/video | Whisper |
| 🌐 **Translator** | Terjemahan otomatis | GPT-4, Claude |

## Penyedia AI API Populer

| Provider | Model | Keunggulan |
|----------|-------|-----------|
| **OpenAI** | GPT-4, GPT-4o, DALL-E, Whisper | Paling populer, ekosistem luas |
| **Anthropic** | Claude 3 Opus/Sonnet/Haiku | Context window besar (200K) |
| **Google** | Gemini 1.5 Pro | Multimodal, 1M context |
| **Cohere** | Command R+ | Fokus enterprise, RAG |
| **Meta** | Llama 3 (open source) | Gratis, bisa self-host |
| **Mistral** | Mistral Large | Open source, performa bagus |

## Pola Integrasi Umum

### 1. Direct API Call
Paling sederhana, panggil langsung dari frontend/backend.

### 2. RAG (Retrieval Augmented Generation)
AI + database pengetahuan sendiri.

### 3. AI Agent
AI yang bisa pakai tools (search, kalkulator, API call).

### 4. Fine-tuning
Latih model dengan data spesifik.

## Mulai dari Mana?

1. 🔑 Daftar API key (OpenAI, Anthropic, atau Google)
2. 📚 Baca dokumentasi API
3. 💻 Coba playground/console
4. 🧪 Buat proyek kecil (chatbot sederhana)
5. 🚀 Integrasikan ke aplikasi nyata
  `,

  quiz: [
    { question: "Apa itu AI Integration?", options: ["Membuat AI dari nol", "Menyematkan AI via API ke aplikasi", "Machine learning", "Data science"], correctAnswer: 1, explanation: "AI Integration adalah praktik menggunakan API AI (OpenAI, Anthropic, dll) untuk menambah fitur AI ke aplikasi." },
    { question: "Penyedia API AI paling populer?", options: ["AWS", "OpenAI", "MongoDB", "Vercel"], correctAnswer: 1, explanation: "OpenAI (GPT-4, DALL-E) adalah penyedia API AI paling populer saat ini." },
    { question: "Apa itu RAG?", options: ["Database", "Retrieval Augmented Generation: AI + data sendiri", "Model AI", "Framework"], correctAnswer: 1, explanation: "RAG menggabungkan AI dengan database pengetahuan sendiri untuk memberikan jawaban yang lebih akurat dan kontekstual." }
  ],

  codeExamples: []
};