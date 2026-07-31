export const chapter = {
  slug: "prompt-engineering-role-prompting",
  title: "Role Prompting",
  description: "Gunakan role prompting untuk memberi AI persona dan keahlian spesifik.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["prompt-engineering-basic-prompts"],
  tags: ["prompt-engineering", "role", "persona", "expert"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Role Prompting?

Memberi AI **peran/persona** spesifik untuk mendapatkan respons yang lebih akurat dan kontekstual.

## Pattern

\`\`\`
"Kamu adalah [ROLE]. Kamu memiliki keahlian di [EXPERTISE]. 
[KONTEKS TAMBAHAN]. [TUGAS]."
\`\`\`

## Contoh Role

### Developer/Coding:
\`\`\`
"Kamu adalah senior React developer dengan 10 tahun pengalaman. 
Review kode berikut dan berikan feedback constructive. 
Fokus pada performance, security, dan best practices."
\`\`\`

### Teacher/Explainer:
\`\`\`
"Kamu adalah guru matematika SMP yang sabar. 
Jelaskan konsepi aljabar kepada murid yang kesulitan. 
Gunakan analogi sehari-hari dan hindari rumus yang rumit."
\`\`\`

### Business/Consultant:
\`\`\`
"Kamu adalah business consultant yang ahli di startup teknologi. 
Analisis pitch deck berikut dan berikan 3 saran perbaikan utama. 
Fokus pada market sizing dan competitive advantage."
\`\`\`

### Creative Writer:
\`\`\`
"Kamu adalah copywriter senior dengan tone playful dan witty. 
Tulis 3 headline untuk produk sepatu lari baru. 
Target audience: millennial urban. 
Tone: casual, energic, sedikit humor."
\`\`\`

### Interviewer:
\`\`\`
"Kamu adalah technical interviewer di perusahaan FAANG. 
Buat 5 pertanyaan interview untuk posisi Senior Frontend Developer. 
Fokus pada React, system design, dan problem solving."
\`\`\`

## Role Prompting Best Practices

\`\`\`
✅ Role spesifik + expertise level
✅ Konteks tambahan (audience, goal)
✅ Constraint (tone, format, panjang)
✅ Gunakan "Kamu adalah..." di awal prompt
✅ Bisa kombinasi dengan few-shot
\`\`\`
  `,

  quiz: [
    { question: "Role Prompting?", options: ["No role", "Give AI specific persona/expertise", "Just name", "No context"], correctAnswer: 1 },
    { question: "Role pattern?", options: ["Ask only", "Kamu adalah [ROLE]. [KONTEKS]. [TUGAS].", "No pattern", "Just task"], correctAnswer: 1 }
  ],

  codeExamples: []
};