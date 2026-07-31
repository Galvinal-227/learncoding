export const chapter = {
  slug: "ai-integration-models",
  title: "Model AI & LLM",
  description: "Kenali berbagai model AI dan LLM, serta cara memilih yang tepat.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["ai-integration-introduction"],
  tags: ["ai", "model", "llm", "gpt", "claude"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu LLM?

LLM (Large Language Model) adalah model AI yang dilatih pada data teks masif untuk memahami dan menghasilkan bahasa alami.

## Model Populer 2024-2026

| Model | Provider | Context | Keunggulan |
|-------|----------|---------|------------|
| **GPT-4o** | OpenAI | 128K | Multimodal, cepat, murah |
| **GPT-4 Turbo** | OpenAI | 128K | Akurat, vision |
| **Claude 3 Opus** | Anthropic | 200K | Analisis kompleks, panjang |
| **Claude 3.5 Sonnet** | Anthropic | 200K | Balance speed + quality |
| **Gemini 1.5 Pro** | Google | 1M | Context super panjang |
| **Llama 3 70B** | Meta | 8K | Open source, self-host |
| **Mixtral 8x22B** | Mistral | 64K | Open source, MoE |

## Cara Memilih Model

\`\`\`
Butuh cepat + murah?     → GPT-4o / Claude 3 Haiku
Butuh analisis kompleks? → Claude 3 Opus / GPT-4
Butuh context panjang?   → Gemini 1.5 Pro / Claude
Butuh self-host?         → Llama 3 / Mistral
Butuh multimodal?        → GPT-4o / Gemini
\`\`\`

## Parameter Penting

| Parameter | Fungsi | Range |
|-----------|--------|-------|
| **temperature** | Kreativitas (0=deterministik, 2=sangat kreatif) | 0 - 2 |
| **max_tokens** | Batas panjang output | Tergantung model |
| **top_p** | Nucleus sampling (alternatif temperature) | 0 - 1 |
| **frequency_penalty** | Kurangi repetisi kata | -2.0 - 2.0 |
| **presence_penalty** | Dorong topik baru | -2.0 - 2.0 |

\`\`\`javascript
// Kreatif (storytelling)
{ temperature: 0.9, max_tokens: 2000 }

// Faktual (Q&A, coding)
{ temperature: 0.1, max_tokens: 500 }

// Balance
{ temperature: 0.7, max_tokens: 1000 }
\`\`\`
  `,

  quiz: [
    { question: "Apa itu LLM?", options: ["Bahasa pemrograman", "Large Language Model", "Database", "Server"], correctAnswer: 1, explanation: "LLM (Large Language Model) adalah model AI yang dilatih pada data teks masif." },
    { question: "Parameter apa yang mengontrol kreativitas AI?", options: ["max_tokens", "temperature", "top_k", "delay"], correctAnswer: 1, explanation: "temperature (0-2) mengontrol kreativitas: rendah untuk faktual, tinggi untuk kreatif." }
  ],

  codeExamples: []
};