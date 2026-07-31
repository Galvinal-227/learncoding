export const chapter = {
  slug: "openai-api-pricing",
  title: "Pricing & Rate Limits",
  description: "Pahami pricing OpenAI API, rate limits, dan strategi optimasi biaya.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["openai-api-setup"],
  tags: ["openai", "pricing", "rate-limits", "optimization"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Pricing Model

OpenAI menggunakan **pay-per-token**. 1 token ≈ ¾ kata (Inggris) atau ~1-2 karakter (Indonesia).

## Token Estimasi

\`\`\`
English: 1 token ≈ 0.75 words ≈ 4 characters
Indonesia: 1 token ≈ 1-2 karakter (lebih boros)
1000 tokens ≈ 750 kata (English) ≈ 400 kata (Indonesia)
\`\`\`

## GPT-4o Pricing (per 1M tokens)

| | Input | Output |
|---|-------|--------|
| GPT-4o | $5.00 | $15.00 |
| GPT-4o Mini | $0.15 | $0.60 |
| GPT-4 Turbo | $10.00 | $30.00 |

## Contoh Biaya

\`\`\`
Chat 10 messages:
- Input: 500 tokens × $5/1M = $0.0025
- Output: 200 tokens × $15/1M = $0.003
- Total: ~$0.0055 per chat

1000 chats/hari = ~$5.50/hari = ~$165/bulan
\`\`\`

## Rate Limits

| Tier | RPM (Requests/min) | TPM (Tokens/min) |
|------|-------------------|-----------------|
| Free | 3 | 40,000 |
| Tier 1 ($5 spent) | 500 | 200,000 |
| Tier 2 ($50 spent) | 5,000 | 2,000,000 |
| Tier 3 ($100 spent) | 10,000 | 5,000,000 |

## Optimasi Biaya

\`\`\`javascript
// 1. Gunakan model yang tepat
gpt-4o-mini   // Task sederhana (murah, cepat)
gpt-4o        // Task kompleks (mahal, akurat)

// 2. Batasi max_tokens
max_tokens: 500  // Jangan 4096 kalau tidak perlu

// 3. Caching
const cache = new Map();
async function cachedCompletion(prompt) {
    if (cache.has(prompt)) return cache.get(prompt);
    const result = await complete(prompt);
    cache.set(prompt, result);
    return result;
}

// 4. Batch processing
// Kirim multiple prompts dalam 1 request
const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        { role: 'user', content: 'Task 1: ...' },
        { role: 'user', content: 'Task 2: ...' }
    ]
    // Note: Chat API tidak support batch, gunakan parallel calls
});

// 5. Monitor usage
// Dashboard → Usage → Lihat grafik
// Set billing limits
\`\`\`

## Token Counting (tiktoken)

\`\`\`bash
npm install tiktoken
\`\`\`

\`\`\`javascript
import { encoding_for_model } from 'tiktoken';

const enc = encoding_for_model('gpt-4o');
const tokens = enc.encode('Halo, apa kabar?');
console.log(tokens.length); // 7 tokens
enc.free();
\`\`\`

## Production Tips

\`\`\`
✅ Set usage limits di dashboard
✅ Monitor costs harian
✅ Gunakan gpt-4o-mini untuk 80% tasks
✅ Cache frequent responses
✅ Batasi max_tokens
✅ Implement retry logic untuk rate limits
✅ Gunakan streaming untuk UX lebih baik
\`\`\`
  `,

  quiz: [
    { question: "GPT-4o input price?", options: ["Free", "$5/1M tokens", "$15/1M tokens", "$100/1M tokens"], correctAnswer: 1 },
    { question: "Optimasi biaya?", options: ["Max tokens", "Gunakan model tepat + cache + batasi output", "Selalu GPT-4", "Ignore"], correctAnswer: 1 }
  ],

  codeExamples: []
};