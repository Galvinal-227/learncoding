export const chapter = {
  slug: "ai-integration-apis",
  title: "AI APIs Overview",
  description: "Pelajari cara menggunakan API AI populer untuk menambah fitur pintar ke aplikasi.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["ai-integration-introduction"],
  tags: ["ai", "api", "openai", "claude", "gemini"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Cara Kerja AI API

Semua AI API bekerja dengan pola yang mirip:

\`\`\`
1. Kirim prompt/input ke API endpoint
2. API proses dengan model AI
3. Terima response (teks, gambar, dll)
\`\`\`

## OpenAI API

### Install
\`\`\`bash
npm install openai
\`\`\`

### Basic Usage
\`\`\`javascript
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        { role: 'system', content: 'Kamu asisten yang membantu.' },
        { role: 'user', content: 'Jelaskan apa itu JavaScript dalam 3 kalimat.' }
    ]
});

console.log(completion.choices[0].message.content);
\`\`\`

### Streaming (Real-time)
\`\`\`javascript
const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'Ceritakan dongeng pendek' }],
    stream: true
});

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
}
\`\`\`

## Anthropic (Claude) API

\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

\`\`\`javascript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

const message = await anthropic.messages.create({
    model: 'claude-3-opus-20240229',
    max_tokens: 1024,
    messages: [
        { role: 'user', content: 'Jelaskan apa itu React.' }
    ]
});

console.log(message.content[0].text);
\`\`\`

## Google Gemini API

\`\`\`bash
npm install @google/generative-ai
\`\`\`

\`\`\`javascript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

const result = await model.generateContent('Jelaskan apa itu TypeScript.');
console.log(result.response.text());
\`\`\`

## Perbandingan API

| Fitur | OpenAI | Anthropic | Google |
|-------|--------|-----------|--------|
| Model terbaik | GPT-4o | Claude 3 Opus | Gemini 1.5 Pro |
| Context window | 128K | 200K | 1M |
| Vision (gambar) | ✅ | ✅ | ✅ |
| Streaming | ✅ | ✅ | ✅ |
| Function calling | ✅ | ✅ | ✅ |
| Harga (per 1M token) | \`$5-$15\` | \`$15-$75\` | \`$3.50-$10.50\` |

## Keamanan API Key

\`\`\`javascript
// ❌ Jangan hardcode!
const apiKey = 'sk-abc123...';

// ✅ Environment variable
const apiKey = process.env.OPENAI_API_KEY;

// ✅ Server-side only (Next.js API route, Node.js backend)
// Jangan expose API key di frontend!
\`\`\`
  `,

  quiz: [
    { question: "Kenapa API key harus di server-side?", options: ["Tidak masalah di frontend", "Agar tidak dicuri user", "Lebih cepat", "Wajib aturan"], correctAnswer: 1, explanation: "API key di frontend bisa dilihat user dan disalahgunakan. Selalu simpan di server-side (environment variable)." },
    { question: "Apa keunggulan Claude vs GPT?", options: ["Lebih murah", "Context window lebih besar (200K token)", "Lebih cepat", "Gratis"], correctAnswer: 1, explanation: "Claude unggul dengan context window 200K token, bisa memproses dokumen sangat panjang (ratusan halaman)." },
    { question: "Apa itu streaming di AI API?", options: ["Video streaming", "Response dikirim bertahap (real-time)", "Upload file", "Download model"], correctAnswer: 1, explanation: "Streaming menampilkan response AI secara bertahap (kata per kata), seperti ChatGPT. UX lebih baik daripada menunggu semua selesai." }
  ],

  codeExamples: [
    {
      title: "Basic AI Chat API",
      language: "javascript",
      code: `// pages/api/chat.js (Next.js)
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    
    try {
        const { message } = req.body;
        
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: 'Kamu asisten coding yang membantu.' },
                { role: 'user', content: message }
            ],
            max_tokens: 500
        });
        
        res.json({ reply: completion.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}`
    }
  ]
};