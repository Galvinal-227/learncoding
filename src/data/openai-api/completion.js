export const chapter = {
  slug: "openai-api-completion",
  title: "Text Completion",
  description: "Gunakan Text Completion API (GPT-3.5) untuk generate dan menyelesaikan teks.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["openai-api-setup"],
  tags: ["openai", "completion", "text", "legacy"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Text Completion (Legacy)

⚠️ Chat Completion (GPT-4) lebih direkomendasikan untuk project baru. Text Completion menggunakan model GPT-3.5 yang lebih tua.

## Basic Completion

\`\`\`javascript
const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Jelaskan apa itu machine learning dalam 2 kalimat.',
    max_tokens: 200,
    temperature: 0.7
});

console.log(response.choices[0].text);
\`\`\`

## Completion vs Chat

| | Completion | Chat |
|---|-----------|------|
| Endpoint | completions.create | chat.completions.create |
| Format | Single prompt | Messages array |
| Context | Manual (masukkan history di prompt) | Auto (messages history) |
| Model | gpt-3.5-turbo-instruct | gpt-4o, gpt-4-turbo |
| Status | Legacy | Recommended |

## Parameters

\`\`\`javascript
const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Sebutkan 5 bahasa pemrograman populer:',
    max_tokens: 100,
    temperature: 0.7,
    top_p: 1,
    n: 1,              // Jumlah completions
    stop: ['\\n', '6.'], // Stop sequences
    echo: false,       // Sertakan prompt di output
    best_of: 1         // Generate multiple, return best
});
\`\`\`

## Completion untuk Klasifikasi

\`\`\`javascript
const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: \`Classify sentiment:
Review: "Produk bagus, pengiriman cepat!"
Sentiment:\`,
    max_tokens: 5,
    temperature: 0  // Deterministik
});

console.log(response.choices[0].text.trim()); // "Positive"
\`\`\`

## Migrasi ke Chat Completion

Jika masih pakai Completion, migrasi ke Chat:

\`\`\`javascript
// Completion (old)
const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Jelaskan React.'
});

// Chat (new - recommended)
const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'Jelaskan React.' }]
});
\`\`\`
  `,

  quiz: [
    { question: "Completion vs Chat?", options: ["Sama", "Completion: legacy single prompt; Chat: modern messages", "Chat lebih tua", "Completion lebih baru"], correctAnswer: 1 },
    { question: "n: 3?", options: ["Max tokens", "Generate 3 completions", "Temperature", "Stop"], correctAnswer: 1 }
  ],

  codeExamples: []
};