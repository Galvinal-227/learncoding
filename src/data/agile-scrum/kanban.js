export const chapter = {
  slug: "agile-scrum-kanban",
  title: "Kanban vs Scrum",
  description: "Bandingkan Kanban dan Scrum, dua framework Agile paling populer.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["agile-scrum-introduction"],
  tags: ["agile", "kanban", "scrum", "perbandingan"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kanban

Kanban adalah metode **flow-based** yang fokus pada visualisasi pekerjaan dan membatasi WIP (Work In Progress).

## Scrum vs Kanban

| Aspek | Scrum | Kanban |
|-------|-------|--------|
| **Sprint** | Ya (1-4 minggu, fixed) | Tidak (continuous flow) |
| **Roles** | PO, SM, Developers | Tidak ada roles wajib |
| **Ceremonies** | 5 event terstruktur | Tidak wajib |
| **Perubahan** | Di antara sprint | Kapan saja |
| **Estimasi** | Story Points | Opsional |
| **WIP Limit** | Via Sprint Backlog | Strict WIP limit per kolom |
| **Cocok untuk** | Produk development | Support, maintenance, ops |

## Kapan Pakai Scrum?

✅ Produk dengan development fitur baru
✅ Tim full-time dedicated
✅ Butuh ritme dan struktur jelas
✅ Stakeholder perlu predictability (sprint review)

## Kapan Pakai Kanban?

✅ Pekerjaan yang masuk terus (support, bug fix)
✅ Tim tidak bisa commit full-time
✅ Prioritas sering berubah
✅ Tidak butuh sprint planning rutin

## Scrum + Kanban = Scrumban

Gabungan keduanya:
- Sprint dari Scrum
- WIP Limit dari Kanban
- Continuous improvement
- Cocok untuk tim yang ingin transisi

## Alat Kanban

\`\`\`
Board columns: Backlog | Ready | In Progress | Review | Done
WIP Limit:     -      |   -   |      3      |   2    |  -
\`\`\`
  `,

  quiz: [
    { question: "Apa perbedaan utama Scrum dan Kanban?", options: ["Tidak ada", "Scrum punya sprint tetap, Kanban continuous flow", "Kanban lebih ketat", "Scrum tidak pakai board"], correctAnswer: 1, explanation: "Scrum menggunakan sprint timeboxed. Kanban menggunakan continuous flow tanpa iterasi tetap." },
    { question: "Kapan lebih baik pakai Kanban?", options: ["Development fitur baru", "Support/bug fix dengan prioritas sering berubah", "Tim dedicated full-time", "Semua situasi"], correctAnswer: 1, explanation: "Kanban cocok untuk pekerjaan yang masuk terus-menerus seperti support, maintenance, atau bug fixing." }
  ],

  codeExamples: []
};