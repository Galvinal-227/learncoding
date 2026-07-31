export const chapter = {
  slug: "agile-scrum-artifacts",
  title: "Scrum Artifacts",
  description: "Pahami 3 artifacts Scrum: Product Backlog, Sprint Backlog, dan Increment.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["agile-scrum-scrum-roles"],
  tags: ["scrum", "artifacts", "backlog", "increment"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Scrum Artifacts

Scrum memiliki 3 artifacts yang merepresentasikan **pekerjaan atau nilai**:

1. Product Backlog
2. Sprint Backlog
3. Increment

## 1. Product Backlog

### Apa?
Daftar **semua yang dibutuhkan** produk, diurutkan berdasarkan prioritas. Satu-satunya sumber pekerjaan tim.

### Isi:
- User Stories, Bugs, Technical Tasks, Spikes
- Masing-masing punya **acceptance criteria**

### Contoh User Story:
\`\`\`
Sebagai [pengguna],
Saya ingin [fitur],
Agar [manfaat].

Contoh:
Sebagai customer,
Saya ingin mereset password via email,
Agar bisa login kembali jika lupa password.
\`\`\`

### Siapa yang Kelola?
- **Product Owner**: Prioritasi, menambah/menghapus item
- **Developers**: Estimasi, klarifikasi

### Story Points vs Jam
| Story Points | Jam |
|--------------|-----|
| Relatif (ukuran relatif) | Absolut |
| 1, 2, 3, 5, 8, 13... (Fibonacci) | 4 jam, 8 jam |
| Mengukur kompleksitas + effort + ketidakpastian | Hanya mengukur waktu |
| Lebih cepat diestimasi | Cenderung meleset |

---

## 2. Sprint Backlog

### Apa?
Item dari Product Backlog yang dipilih untuk Sprint ini + **rencana pengerjaan**.

### Isi:
- 🎯 Sprint Goal
- 📋 Product Backlog Items terpilih
- 📝 Rencana pengerjaan (task breakdown)

### Milik Siapa?
**Developers**. Mereka yang menentukan cara menyelesaikan item.

### Task Board (Kanban Sederhana)

\`\`\`
┌──────────┬──────────────┬──────────┐
│  TO DO   │ IN PROGRESS  │   DONE   │
├──────────┼──────────────┼──────────┤
│ Task A   │ Task B       │ Task D   │
│ Task C   │              │ Task E   │
│          │              │          │
└──────────┴──────────────┴──────────┘
\`\`\`

---

## 3. Increment

### Apa?
Semua Product Backlog Items yang **selesai (Done)** selama Sprint + increment sebelumnya.

### Aturan:
- ✅ Harus **Done** sesuai Definition of Done
- ✅ Harus **usable** (bisa digunakan)
- ✅ Harus **integrated** (terintegrasi)

### Definition of Done (DoD)

Checklist yang disepakati tim. Item BELUM selesai jika belum memenuhi DoD.

\`\`\`
Contoh DoD:
✅ Code selesai
✅ Code review disetujui
✅ Unit test passing
✅ QA test selesai
✅ Dokumentasi diupdate
✅ Deployed ke staging
✅ PO accept (UAT)
\`\`\`

## Commitment untuk Setiap Artifact

| Artifact | Commitment |
|----------|------------|
| Product Backlog | **Product Goal** |
| Sprint Backlog | **Sprint Goal** |
| Increment | **Definition of Done** |
  `,

  quiz: [
    { question: "Apa itu Product Backlog?", options: ["Laporan bug", "Daftar prioritas semua kebutuhan produk", "Dokumentasi teknis", "Rencana sprint"], correctAnswer: 1, explanation: "Product Backlog adalah daftar semua yang dibutuhkan produk, diurutkan prioritas. Dikelola Product Owner." },
    { question: "Kenapa Story Points lebih baik dari estimasi jam?", options: ["Lebih akurat", "Relatif, mencakup kompleksitas + effort + ketidakpastian", "Lebih cepat dihitung", "Wajib Scrum"], correctAnswer: 1, explanation: "Story points mengukur ukuran relatif yang mencakup effort, kompleksitas, dan ketidakpastian - bukan hanya waktu." },
    { question: "Apa itu Definition of Done?", options: ["Kontrak legal", "Checklist yang menentukan kapan item benar-benar selesai", "Laporan ke klien", "Estimasi waktu"], correctAnswer: 1, explanation: "Definition of Done adalah checklist transparan yang disepakati tim tentang kapan sebuah increment bisa disebut 'selesai'." }
  ],

  codeExamples: []
};