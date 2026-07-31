export const chapter = {
  slug: "interview-mock-interviews",
  title: "Mock Interviews",
  description: "Cara melakukan mock interview untuk latihan yang efektif.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["interview-whiteboarding"],
  tags: ["interview", "mock", "practice", "feedback"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Mock Interview?

- 🎯 **Simulasi nyata** - Pressure, time constraint
- 📝 **Feedback** - Tahu weakness dari orang lain
- 🗣️ **Latihan komunikasi** - Think out loud
- 😰 **Kurangi nervous** - Familiar dengan format

## Platform Mock Interview

| Platform | Format | Harga |
|----------|--------|-------|
| **Pramp** | Peer-to-peer, gratis | Gratis |
| **interviewing.io** | FAANG engineers | $100+/sesi |
| **Hello Interview** | AI-powered | Free tier |
| **Exponent** | PM/Engineering | $12/bln |
| **Teman/Peer** | Casual, gratis | Gratis |
| **LeetCode Mock** | Premium | $35/bln |

## Cara Mock Interview dengan Teman

\`\`\`
1. Pilih 1 soal (LeetCode Medium)
2. Set timer 45 menit
3. Interviewer: kasih soal, diam, catat feedback
4. Interviewee: solve dengan UMPIRE
5. 5 menit feedback session
6. Tukar peran
\`\`\`

## Feedback Template

\`\`\`
✅ Yang sudah bagus:
- Clarifying questions di awal
- Menjelaskan approach sebelum coding
- Test dengan example

⚠️ Yang bisa diperbaiki:
- Terlalu lama di planning (10 menit)
- Tidak mention complexity
- Diam saat debugging

📝 Action items:
- Latihan analisis complexity
- Latihan think out loud
\`\`\`

## Self-Mock (Rekam Diri Sendiri)

\`\`\`
1. Buka LeetCode, ambil soal random
2. Start recording (Loom/OBS)
3. Solve 45 menit (bicara ke kamera)
4. Tonton rekaman → self-evaluate
5. Catat improvement untuk sesi berikutnya
\`\`\`
  `,

  quiz: [
    { question: "Mock interview: platform gratis?", options: ["interviewing.io", "Pramp", "Exponent", "LeetCode"], correctAnswer: 1 },
    { question: "Mock interview durasi?", options: ["15 menit", "45 menit (simulasi nyata)", "2 jam", "5 menit"], correctAnswer: 1 }
  ],

  codeExamples: []
};