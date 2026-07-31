export const chapter = {
  slug: "ai-integration-chatbots",
  title: "Membangun Chatbot AI",
  description: "Bangun chatbot pintar dengan AI, dari sederhana hingga advanced dengan RAG.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["ai-integration-apis"],
  tags: ["ai", "chatbot", "rag", "conversation"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Chatbot Sederhana

### Struktur Pesan
\`\`\`javascript
const messages = [
    { role: 'system', content: 'Kamu asisten toko online.' },
    { role: 'user', content: 'Apakah ada sepatu ukuran 42?' },
    { role: 'assistant', content: 'Ya, kami punya beberapa pilihan.' },
    { role: 'user', content: 'Tunjukkan yang warna hitam.' }
];
\`\`\`

### Implementasi Chat
\`\`\`javascript
async function chat(messages, userMessage) {
    messages.push({ role: 'user', content: userMessage });
    
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages
    });
    
    const reply = response.choices[0].message.content;
    messages.push({ role: 'assistant', content: reply });
    
    return reply;
}
\`\`\`

## System Prompt yang Efektif

\`\`\`javascript
const SYSTEM_PROMPT = \`
Kamu adalah asisten customer service untuk Toko Buku Online.
Aturan:
- Selalu ramah dan profesional
- Jawab dalam Bahasa Indonesia
- Jika tidak tahu, jujur dan tawarkan bantuan lain
- Jangan janjikan diskon atau refund tanpa konfirmasi
- Maksimal 3 kalimat per jawaban
\`;
\`\`\`

## Streaming Chat (UX Lebih Baik)

\`\`\`javascript
async function* streamChat(messages) {
    const stream = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages,
        stream: true
    });
    
    for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) yield content;
    }
}

// Di frontend:
for await (const token of streamChat(messages)) {
    appendToChat(token); // Tampilkan kata per kata
}
\`\`\`

## RAG (Retrieval Augmented Generation)

AI + data sendiri = jawaban akurat berdasarkan dokumen kamu:

\`\`\`
1. Dokumen → Embeddings → Vector DB
2. User bertanya → Cari dokumen relevan di Vector DB
3. Kirim pertanyaan + dokumen relevan ke AI
4. AI jawab berdasarkan dokumen tersebut
\`\`\`

### Implementasi Sederhana
\`\`\`javascript
async function ragChat(userQuery) {
    // 1. Cari dokumen relevan
    const relevantDocs = await vectorDB.search(userQuery, { topK: 3 });
    
    // 2. Gabungkan sebagai context
    const context = relevantDocs.map(d => d.text).join('\\n\\n');
    
    // 3. Prompt dengan context
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            {
                role: 'system',
                content: \`Jawab pertanyaan berdasarkan konteks berikut:\\n\${context}\\n\\nJika tidak ada di konteks, katakan tidak tahu.\`
            },
            { role: 'user', content: userQuery }
        ]
    });
    
    return response.choices[0].message.content;
}
\`\`\`

## Token Management

\`\`\`javascript
// Hitung token (estimasi)
function estimateTokens(text) {
    return Math.ceil(text.length / 4);
}

// Batasi history
function trimHistory(messages, maxTokens = 4000) {
    let totalTokens = 0;
    const trimmed = [];
    
    for (let i = messages.length - 1; i >= 0; i--) {
        const tokens = estimateTokens(messages[i].content);
        if (totalTokens + tokens > maxTokens) break;
        trimmed.unshift(messages[i]);
        totalTokens += tokens;
    }
    
    return trimmed;
}
\`\`\`
  `,

  quiz: [
    { question: "Apa itu RAG?", options: ["Model AI baru", "Retrieval Augmented Generation: AI + data sendiri", "Database", "Framework frontend"], correctAnswer: 1, explanation: "RAG menggabungkan AI dengan database pengetahuan sendiri untuk jawaban yang akurat dan relevan." },
    { question: "Kenapa streaming penting untuk chatbot?", options: ["Lebih murah", "UX lebih baik (kata per kata seperti ChatGPT)", "Lebih aman", "Wajib"], correctAnswer: 1, explanation: "Streaming menampilkan response secara bertahap sehingga user tidak menunggu loading, UX lebih responsif." },
    { question: "Apa fungsi system prompt?", options: ["Hiasan", "Mengatur kepribadian dan aturan AI", "Mempercepat response", "Debugging"], correctAnswer: 1, explanation: "System prompt mendefinisikan peran, kepribadian, aturan, dan batasan AI dalam percakapan." }
  ],

  codeExamples: [
    {
      title: "Chatbot dengan Next.js + OpenAI",
      language: "javascript",
      code: `// app/api/chat/route.js (Next.js App Router)
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = \`
Kamu asisten coding yang ahli.
Jawab dalam Bahasa Indonesia.
Berikan contoh kode jika relevan.
Jelaskan konsep dengan sederhana.
\`;

export async function POST(req) {
    const { messages } = await req.json();
    
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000
    });
    
    return Response.json({
        reply: response.choices[0].message.content
    });
}`
    }
  ]
};