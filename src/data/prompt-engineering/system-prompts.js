export const chapter = {
  slug: "prompt-engineering-system-prompts",
  title: "System Prompts",
  description: "Desain system prompts yang powerful untuk aplikasi production.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prompt-engineering-role-prompting"],
  tags: ["prompt-engineering", "system", "production", "rules"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu System Prompt?

System prompt adalah **instruksi awal** yang diberikan ke AI sebelum percakapan dimulai. Mendefinisikan **kepribadian, aturan, dan batasan** AI.

## Struktur System Prompt

\`\`\`
1. Role & Identity
2. Context & Background
3. Rules & Constraints
4. Output Format
5. Tone & Style
6. Safety Guidelines
7. Examples (optional)
\`\`\`

## Template System Prompt

\`\`\`markdown
## Role
Kamu adalah asisten customer service untuk TokoBuku Online.

## Context
TokoBuku menjual buku programming, design, dan bisnis. 
Kami melayani pelanggan di seluruh Indonesia.

## Rules
1. SELALU gunakan Bahasa Indonesia yang sopan
2. Jika tidak tahu, jujur dan tawarkan bantuan lain
3. JANGAN janjikan diskon tanpa konfirmasi supervisor
4. JANGAN sebut nama kompetitor
5. Maksimal 3 kalimat per jawaban
6. Akhiri dengan pertanyaan "Ada yang bisa saya bantu lagi?"

## Output Format
Respons dalam format:
[Greeting singkat]
[Jawaban]
[Follow-up question]

## Tone
Ramah, profesional, helpful

## Safety
- Jangan berikan informasi pribadi customer
- Jangan proses refund tanpa verifikasi
- Eskalasi ke human agent untuk komplain serius
\`\`\`

## Example: Coding Assistant

\`\`\`markdown
## Role
Kamu adalah coding assistant expert dalam JavaScript, TypeScript, React, dan Node.js.

## Rules
1. SELALU berikan penjelasan bersama kode
2. Gunakan best practices terbaru (2024+)
3. Tunjukkan error handling
4. Sebutkan complexity (Big O) jika relevan
5. Gunakan TypeScript kecuali diminta JavaScript
6. Format kode dengan syntax highlighting

## Output Format
[Penjelasan singkat]
[Kode dengan komentar]
[Catatan tambahan/jebakan]

## Example
User: "Buat fungsi filter array"
Assistant:
"Berikut fungsi filter array dengan TypeScript generics..."
\`\`\`

## Common System Prompt Mistakes

❌ Terlalu panjang (AI bisa "lupa")
❌ Kontradiksi antar rules
❌ Terlalu restriktif (AI jadi kaku)
❌ Tidak ada safety guidelines
❌ Lupa sebut output format

## Testing System Prompts

\`\`\`
1. Test dengan berbagai input (normal, edge case, adversarial)
2. Cek konsistensi respons
3. Evaluasi tone dan format
4. Iterasi prompt berdasarkan hasil
5. A/B test different versions
\`\`\`
  `,

  quiz: [
    { question: "System Prompt?", options: ["User input", "Initial instructions (role, rules, format)", "API key", "Database"], correctAnswer: 1 },
    { question: "System prompt: too long?", options: ["Better", "AI might 'forget' (keep concise)", "Required", "No limit"], correctAnswer: 1 }
  ],

  codeExamples: []
};