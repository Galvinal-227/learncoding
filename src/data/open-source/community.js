export const chapter = {
  slug: "open-source-community",
  title: "Komunitas & Etika",
  description: "Etika berkomunitas di open source: komunikasi, code of conduct, dan networking.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["open-source-introduction"],
  tags: ["open-source", "community", "code-of-conduct", "communication"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Code of Conduct (CoC)

Hampir semua proyek open source punya **CODE_OF_CONDUCT.md**. Isinya aturan berperilaku di komunitas.

\`\`\`
✅ Bersikap sopan dan profesional
✅ Menghargai perbedaan pendapat
✅ Fokus ke masalah, bukan orang
✅ Menerima feedback dengan terbuka
✅ Membantu orang lain

❌ Menghina atau merendahkan
❌ Spam atau self-promotion
❌ Diskriminasi dalam bentuk apa pun
❌ Trolling atau flaming
\`\`\`

## Komunikasi Efektif

### Di Issues:
\`\`\`
❌ "This is broken, fix it!"
✅ "I encountered an issue when [situation]. Here's what I tried: [steps]. Expected: [X], Actual: [Y]."
\`\`\`

### Di Pull Requests:
\`\`\`
❌ "Just merge it already"
✅ "I've addressed all feedback. Please let me know if there's anything else I should change."
\`\`\`

### Saat Meminta Bantuan:
\`\`\`
✅ Jelaskan apa yang sudah dicoba
✅ Sertakan kode/error yang relevan
✅ Tunjukkan bahwa kamu sudah berusaha
✅ Jangan tanya "Bisa bantu?" (langsung jelaskan masalahnya)
\`\`\`

## Channel Komunitas

| Channel | Platform |
|---------|----------|
| **GitHub Issues** | Bug, feature request |
| **GitHub Discussions** | Q&A, ideas |
| **Discord/Slack** | Chat real-time |
| **Twitter/X** | Updates, networking |
| **Stack Overflow** | Technical questions |
| **Reddit** | r/opensource, r/programming |

## Networking via Open Source

\`\`\`
✅ Follow maintainer di Twitter/GitHub
✅ Bergabung di Discord/Slack komunitas
✅ Hadiri meetup/konferensi
✅ Share pengalaman kontribusi di blog
✅ Jadi mentor untuk first-timer
✅ Bangun reputasi perlahan, jangan instan
\`\`\`

## Menghargai Waktu Maintainer

\`\`\`
✅ Maintainer adalah volunteer (kebanyakan tidak dibayar)
✅ Jangan demanding atau urgent
✅ Bersabar menunggu review
✅ Bantu jawab issue orang lain (ringankan beban maintainer)
✅ Donasi/sponsor jika memungkinkan (GitHub Sponsors, Open Collective)
\`\`\`
  `,

  quiz: [
    { question: "Code of Conduct?", options: ["Lisensi", "Aturan perilaku di komunitas", "Coding style", "Dokumentasi"], correctAnswer: 1 },
    { question: "Maintainer?", options: ["Dibayar penuh", "Seringkali volunteer (hargai waktunya)", "Selalu available", "Harus fast response"], correctAnswer: 1 }
  ],

  codeExamples: []
};