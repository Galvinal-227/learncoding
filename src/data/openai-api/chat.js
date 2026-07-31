export const chapter = {
  slug: "openai-api-chat",
  title: "Chat Completion (GPT-4)",
  description: "Kuasai Chat Completion API: messages, roles, streaming, dan best practices.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["openai-api-setup"],
  tags: ["openai", "chat", "gpt-4", "conversation"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Chat

\`\`\`javascript
const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        { role: 'system', content: 'Kamu adalah asisten yang membantu.' },
        { role: 'user', content: 'Jelaskan React dalam 3 kalimat.' }
    ]
});

console.log(response.choices[0].message.content);
\`\`\`

## Message Roles

| Role | Deskripsi | Contoh |
|------|-----------|--------|
| **system** | Instruksi awal (kepribadian, aturan) | "Kamu asisten coding expert" |
| **user** | Pesan dari pengguna | "Buat fungsi login" |
| **assistant** | Respons AI sebelumnya | (untuk melanjutkan percakapan) |

## Conversation (Multi-turn)

\`\`\`javascript
const messages = [
    { role: 'system', content: 'Kamu asisten coding.' },
    { role: 'user', content: 'Buat fungsi hello world' },
    { role: 'assistant', content: 'function hello() { return "Hello World"; }' },
    { role: 'user', content: 'Sekarang tambahkan parameter nama' }
];

const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages
});
\`\`\`

## Parameters

\`\`\`javascript
const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [...],
    temperature: 0.7,       // 0-2: Kreativitas (0 = deterministik)
    max_tokens: 500,        // Max output length
    top_p: 1,               // Nucleus sampling
    frequency_penalty: 0,   // -2.0 to 2.0: Kurangi repetisi
    presence_penalty: 0,    // -2.0 to 2.0: Dorong topik baru
    stop: ['###'],          // Stop sequence
    seed: 42                // Reproducible outputs (beta)
});
\`\`\`

## Streaming (Real-time)

\`\`\`javascript
const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'Ceritakan dongeng pendek' }],
    stream: true
});

for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(content);  // Tampilkan kata per kata
}
\`\`\`

## JSON Mode

\`\`\`javascript
const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        {
            role: 'system',
            content: 'Kamu adalah JSON generator. SELALU reply dengan JSON valid.'
        },
        { role: 'user', content: 'Return: name Budi, age 25, city Jakarta' }
    ],
    response_format: { type: 'json_object' }
});

const data = JSON.parse(response.choices[0].message.content);
console.log(data); // { name: 'Budi', age: 25, city: 'Jakarta' }
\`\`\`

## Vision (GPT-4o)

\`\`\`javascript
const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        {
            role: 'user',
            content: [
                { type: 'text', text: 'Apa yang ada di gambar ini?' },
                {
                    type: 'image_url',
                    image_url: { url: 'https://example.com/image.jpg' }
                }
            ]
        }
    ]
});
\`\`\`
  `,

  quiz: [
    { question: "System role?", options: ["User input", "Instruksi awal (kepribadian AI)", "AI response", "Error"], correctAnswer: 1 },
    { question: "temperature: 0?", options: ["Kreatif", "Deterministik (konsisten)", "Random", "Error"], correctAnswer: 1 },
    { question: "stream: true?", options: ["Tunggu semua", "Real-time (kata per kata)", "Error", "Batch"], correctAnswer: 1 }
  ],

  codeExamples: []
};