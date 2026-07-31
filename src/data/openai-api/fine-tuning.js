export const chapter = {
  slug: "openai-api-fine-tuning",
  title: "Fine-tuning",
  description: "Customize model GPT dengan fine-tuning untuk performa lebih baik.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["openai-api-chat"],
  tags: ["openai", "fine-tuning", "customize", "training"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Fine-tuning?

Fine-tuning = **melatih ulang model** dengan data spesifik untuk meningkatkan performa di task tertentu. Hasilnya: **custom model** yang lebih akurat untuk use case kamu.

## Fine-tuning vs Prompt Engineering

| | Fine-tuning | Prompt Engineering |
|---|------------|-------------------|
| Setup | Lama (data + training) | Cepat (tulis prompt) |
| Biaya | Training cost + per-token | Per-token only |
| Akurasi | Lebih tinggi | Lebih rendah |
| Latency | Lebih cepat | Lebih lambat (long prompt) |
| Update | Retrain | Edit prompt |

## Prepare Training Data (JSONL)

\`\`\`jsonl
{"messages": [{"role": "system", "content": "Kamu asisten customer service TokoBuku."}, {"role": "user", "content": "Apakah ada buku JavaScript?"}, {"role": "assistant", "content": "Ya, kami punya 3 buku JavaScript: JS Dasar, JS Lanjutan, dan Node.js."}]}
{"messages": [{"role": "system", "content": "Kamu asisten customer service TokoBuku."}, {"role": "user", "content": "Jam buka toko?"}, {"role": "assistant", "content": "Kami buka Senin-Sabtu pukul 09:00-21:00."}]}
{"messages": [{"role": "system", "content": "Kamu asisten customer service TokoBuku."}, {"role": "user", "content": "Apakah bisa return?"}, {"role": "assistant", "content": "Bisa! Return dalam 7 hari dengan kondisi barang masih segel."}]}
\`\`\`

## Upload Training File

\`\`\`javascript
import fs from 'fs';

const file = await openai.files.create({
    file: fs.createReadStream('training-data.jsonl'),
    purpose: 'fine-tune'
});

console.log(file.id); // file-xxxxxxxx
\`\`\`

## Create Fine-tuning Job

\`\`\`javascript
const fineTune = await openai.fineTuning.jobs.create({
    training_file: file.id,
    model: 'gpt-4o-mini-2024-07-18',  // Base model
    suffix: 'tokobuku-cs',              // Custom name suffix
    hyperparameters: {
        n_epochs: 3,
        batch_size: 4
    }
});

console.log(fineTune.id); // ftjob-xxxxxxxx
\`\`\`

## Monitor Progress

\`\`\`javascript
// Check status
const job = await openai.fineTuning.jobs.retrieve(fineTune.id);
console.log(job.status); // validating_files → running → succeeded

// List events
const events = await openai.fineTuning.jobs.listEvents(fineTune.id);
for await (const event of events) {
    console.log(event.message);
}
\`\`\`

## Use Fine-tuned Model

\`\`\`javascript
const response = await openai.chat.completions.create({
    model: 'ft:gpt-4o-mini-2024-07-18:myorg:tokobuku-cs:abc123',
    messages: [
        { role: 'user', content: 'Apakah ada diskon untuk buku programming?' }
    ]
});
\`\`\`

## Best Practices

\`\`\`
✅ Minimal 50-100 examples untuk hasil baik
✅ Data berkualitas > kuantitas
✅ Format chat (messages) direkomendasikan
✅ Evaluasi dengan test set (pisahkan 20% data)
✅ Bandingkan dengan prompt engineering dulu (mungkin cukup)
✅ Fine-tuning berguna untuk: tone, format, behavior konsisten
\`\`\`
  `,

  quiz: [
    { question: "Fine-tuning?", options: ["Prompt", "Train model dengan data spesifik", "API call", "Streaming"], correctAnswer: 1 },
    { question: "Training format?", options: ["CSV", "JSONL (chat messages)", "XML", "YAML"], correctAnswer: 1 }
  ],

  codeExamples: []
};