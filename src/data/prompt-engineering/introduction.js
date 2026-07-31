export const chapter = {
  slug: "prompt-engineering-introduction",
  title: "Pengenalan Prompt Engineering",
  description: "Pahami apa itu prompt engineering, kenapa penting, dan bagaimana AI merespons prompt.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["prompt-engineering", "ai", "llm", "gpt"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Prompt Engineering?

Prompt engineering adalah **seni dan ilmu menulis instruksi (prompt)** yang efektif untuk mendapatkan output optimal dari AI/LLM.

## Kenapa Penting?

- 🎯 **Akurasi** - Prompt bagus = output bagus, prompt jelek = output jelek
- 💰 **Efisiensi** - Prompt singkat & tepat = hemat token = hemat biaya
- 🔧 **Kontrol** - Mengarahkan AI untuk format, tone, dan style tertentu
- 🚀 **Produktivitas** - Dapatkan hasil yang diinginkan dalam 1-2 percobaan

## Prompt Buruk vs Baik

### ❌ Buruk:
\`\`\`
"Jelaskan machine learning"
\`\`\`
- Terlalu vague, tidak ada format, tidak ada audience

### ✅ Baik:
\`\`\`
"Kamu adalah profesor AI. Jelaskan machine learning kepada mahasiswa S1 semester 1 dalam 3 paragraf. Gunakan analogi sederhana dan hindari rumus matematika. Akhiri dengan 2 pertanyaan diskusi."
\`\`\`
- Role jelas, audience spesifik, format terstruktur, constraint jelas

## Prinsip Dasar Prompt Engineering

| Prinsip | Deskripsi |
|---------|-----------|
| **Be Specific** | Semakin detail, semakin akurat |
| **Give Context** | Background, audience, tujuan |
| **Set Format** | JSON, markdown, bullet points, tabel |
| **Provide Examples** | Few-shot > zero-shot |
| **Specify Role** | "Kamu adalah..." |
| **Set Constraints** | Panjang, tone, style, larangan |
| **Iterate** | Prompt pertama jarang sempurna |

## Use Cases

| Use Case | Contoh |
|----------|--------|
| 💬 **Chatbot** | Customer service, asisten virtual |
| 📝 **Content** | Artikel, copywriting, email |
| 💻 **Coding** | Generate code, debug, explain |
| 📊 **Analisis** | Sentiment, klasifikasi, summarization |
| 🎨 **Kreatif** | Storytelling, ideation, brainstorming |
| 🔍 **Search** | Semantic search, RAG |
  `,

  quiz: [
    { question: "Prompt Engineering?", options: ["Coding", "Seni menulis instruksi untuk AI", "Hardware", "Database"], correctAnswer: 1 },
    { question: "Prinsip paling penting?", options: ["Singkat", "Be Specific (spesifik & detail)", "Panjang", "Tanpa contoh"], correctAnswer: 1 }
  ],

  codeExamples: []
};