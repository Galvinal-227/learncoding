export const chapter = {
  slug: "freelance-client-communication",
  title: "Komunikasi dengan Klien",
  description: "Komunikasi profesional: ekspektasi, update progress, dan handle keluhan.",
  icon: "SiUpwork",
  color: "#14A800",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["freelance-project-management"],
  tags: ["freelance", "communication", "client", "professional"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Aturan Emas

\`\`\`
✅ Responsif (balas <24 jam, ideal <4 jam)
✅ Over-communicate (lebih baik kebanyakan info)
✅ Proaktif (lapor masalah SEBELUM ditanya)
✅ Profesional (tetap sopan meski klien sulit)
✅ Dokumentasi (semua keputusan tertulis)
\`\`\`

## Update Progress

### Weekly Update (Setiap Jumat)
\`\`\`
Subject: Project Update - [Nama Project] - [Tanggal]

Hi [Client],

Progress minggu ini:
✅ Fitur login selesai
✅ Dashboard design implemented
🔄 Payment integration (50%, ada kendala API)
⏳ Email notification (minggu depan)

Next week plan:
- Selesaikan payment integration
- Mulai email notification

Risk: API payment gateway downtime kemarin (sudah resolved)

Butuh feedback:
- Mockup email notification? (terlampir)
\`\`\`

## Handle Keluhan

\`\`\`
1. DENGARKAN - Jangan defensif
2. AKUI - "Saya paham kenapa Anda kecewa"
3. SOLUSI - "Ini yang bisa saya lakukan"
4. ACTION - Kerjakan, update progress
5. FOLLOW UP - Pastikan klien puas
\`\`\`

## Kapan FIRED Klien?

\`\`\`
❌ Selalu telat bayar
❌ Scope creep terus-menerus
❌ Tidak respect waktu (chat jam 11 malam)
❌ Abusive / tidak sopan
❌ Minta diskon terus

Cara: "Saya sudah tidak available untuk project ini.
Saya akan selesaikan pekerjaan yang sudah dibayar sampai [tanggal]."
\`\`\`
  `,

  quiz: [
    { question: "Update progress: frekuensi?", options: ["Setiap hari", "Weekly (setiap Jumat)", "Bulanan", "Tidak perlu"], correctAnswer: 1 },
    { question: "Balas klien dalam?", options: ["1 minggu", "<24 jam (ideal <4 jam)", "1 bulan", "Kapan saja"], correctAnswer: 1 }
  ],

  codeExamples: []
};