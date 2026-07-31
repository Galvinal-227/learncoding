export const chapter = {
  slug: "ai-integration-best-practices",
  title: "Best Practices AI Integration",
  description: "Praktik terbaik mengintegrasikan AI: keamanan, biaya, error handling, dan etika.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["ai-integration-chatbots"],
  tags: ["ai", "best-practices", "keamanan", "etika"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Keamanan API Key

\`\`\`javascript
// ✅ Environment variable
const apiKey = process.env.OPENAI_API_KEY;

// ✅ Server-side only
// JANGAN pernah expose API key ke frontend

// ✅ Rotasi key secara berkala

// ✅ Monitor usage untuk deteksi kebocoran
\`\`\`

## 2. Rate Limiting & Error Handling

\`\`\`javascript
async function safeAIRequest(prompt) {
    const maxRetries = 3;
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await openai.chat.completions.create({
                model: 'gpt-4o',
                messages: [{ role: 'user', content: prompt }]
            });
        } catch (error) {
            if (error.status === 429) {
                // Rate limited, tunggu
                const delay = Math.pow(2, i) * 1000;
                await new Promise(r => setTimeout(r, delay));
            } else if (error.status >= 500) {
                // Server error, retry
                continue;
            } else {
                throw error; // Client error, jangan retry
            }
        }
    }
    throw new Error('Max retries exceeded');
}
\`\`\`

## 3. Optimasi Biaya

\`\`\`javascript
// ✅ Pilih model sesuai kebutuhan
'gpt-4o-mini'  // Murah untuk task sederhana
'gpt-4o'      // Task kompleks

// ✅ Batasi token
max_tokens: 500 // Jangan lebih dari yang dibutuhkan

// ✅ Cache response
const cache = new Map();

async function cachedAI(prompt) {
    if (cache.has(prompt)) return cache.get(prompt);
    const response = await callAI(prompt);
    cache.set(prompt, response);
    return response;
}
\`\`\`

## 4. Validasi Input & Output

\`\`\`javascript
// ✅ Sanitasi input user
function sanitizeInput(input) {
    return input.trim().slice(0, 2000); // Batasi panjang
}

// ✅ Validasi output
function validateOutput(output) {
    if (output.includes('<script>')) {
        return 'Output tidak valid';
    }
    return output;
}
\`\`\`

## 5. Etika AI

\`\`\`
✅ Transparan: beri tahu user bahwa ini AI
✅ Fair: hindari bias dalam system prompt
✅ Privacy: jangan kirim data sensitif ke API
✅ Human oversight: selalu ada opsi bantuan manusia
✅ Accountability: tim bertanggung jawab atas output AI
\`\`\`

## Checklist

\`\`\`
✅ API key di environment variable
✅ Rate limiting & retry logic
✅ Error handling yang baik
✅ Batasi max_tokens
✅ Cache response jika memungkinkan
✅ Sanitasi input user
✅ Validasi output AI
✅ Monitor usage & biaya
✅ User tahu ini AI
✅ Tidak kirim data sensitif
\`\`\`
  `,

  quiz: [
    { question: "Kenapa API key harus di server-side?", options: ["Tidak masalah", "Agar tidak dicuri/disalahgunakan", "Lebih cepat", "Wajib hukum"], correctAnswer: 1 },
    { question: "Bagaimana mengoptimasi biaya API AI?", options: ["Pakai model termahal", "Pilih model tepat, batasi token, cache", "Selalu retry", "Tidak perlu optimasi"], correctAnswer: 1 }
  ],

  codeExamples: []
};