export const chapter = {
  slug: "freelance-project-management",
  title: "Manajemen Proyek",
  description: "Kelola proyek freelance dengan efisien: timeline, deliverables, dan tools.",
  icon: "SiUpwork",
  color: "#14A800",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["freelance-contracts"],
  tags: ["freelance", "project-management", "timeline", "tools"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Workflow Proyek

\`\`\`
1. Discovery Call → Pahami kebutuhan klien
2. Proposal → Tawarkan solusi + harga
3. Contract → Tanda tangan kontrak
4. Onboarding → Kumpulkan assets, access
5. Development → Kerjakan sesuai timeline
6. Review → Klien review, revisi
7. Delivery → Serahkan final deliverables
8. Handoff → Dokumentasi, training
9. Follow-up → Minta testimonial
\`\`\`

## Tools Manajemen

| Tool | Fungsi |
|------|--------|
| **Notion** | Project tracking, docs |
| **Trello** | Simple kanban board |
| **Linear** | Issue tracking |
| **GitHub Projects** | Code + project |
| **Google Calendar** | Schedule, deadline |
| **Toggl** | Time tracking |
| **Calendly** | Booking call |

## Timeline Estimate

\`\`\`
Formula: Estimasi awal × 2 (atau × 3 untuk proyek baru)
Contoh: "Saya rasa 1 minggu" → Sampaikan ke klien: 2-3 minggu

Kenapa?
- Bug tidak terduga
- Revisi klien
- Waktu testing
- Buffer untuk hal tak terduga
\`\`\`

## Deliverables Checklist

\`\`\`
✅ Source code (GitHub repo)
✅ Deployed app (URL)
✅ Documentation (README, API docs)
✅ Assets (images, icons)
✅ Credentials (hosting, domain)
✅ Training session (if included)
\`\`\`
  `,

  quiz: [
    { question: "Timeline estimate formula?", options: ["Estimasi × 1", "Estimasi × 2 (buffer)", "Estimasi ÷ 2", "Tidak perlu buffer"], correctAnswer: 1 },
    { question: "Tool booking call?", options: ["Zoom", "Calendly", "WhatsApp", "Email"], correctAnswer: 1 }
  ],

  codeExamples: []
};