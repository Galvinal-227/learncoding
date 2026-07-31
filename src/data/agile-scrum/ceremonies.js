export const chapter = {
  slug: "agile-scrum-ceremonies",
  title: "Scrum Ceremonies (Events)",
  description: "Pelajari 5 event/ceremony dalam Scrum dan tujuannya.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["agile-scrum-scrum-roles"],
  tags: ["scrum", "ceremonies", "sprint", "daily", "retro"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 5 Scrum Events

Scrum punya 5 event terstruktur dalam satu Sprint:

\`\`\`
Sprint (1-4 minggu)
├── Sprint Planning        (Awal Sprint, max 8 jam)
├── Daily Scrum           (Setiap hari, 15 menit)
├── Sprint Review         (Akhir Sprint, max 4 jam)
└── Sprint Retrospective  (Akhir Sprint, max 3 jam)
\`\`\`

## 1. Sprint

### Apa itu Sprint?
Periode waktu tetap (**timeboxed**) 1-4 minggu di mana tim menghasilkan **Done** increment.

### Aturan:
- ⏱️ Durasi tetap, tidak bisa diperpanjang
- 🚫 Tidak ada perubahan yang mengganggu Sprint Goal
- 🎯 Satu Sprint Goal yang jelas
- ❌ Sprint tidak bisa dibatalkan kecuali oleh PO (sangat jarang)

### Untuk Developer:
\`\`\`
✅ Pilih task yang bisa diselesaikan dalam sprint
✅ Jangan overcommit
✅ Fokus ke Sprint Goal, bukan individual tasks
\`\`\`

---

## 2. Sprint Planning

### Kapan: Awal Sprint
### Durasi: Max 8 jam (untuk Sprint 1 bulan)
### Siapa: Seluruh Scrum Team

### Agenda:
1. **Why**: PO jelaskan Sprint Goal
2. **What**: Pilih Product Backlog Items untuk Sprint ini
3. **How**: Developers rencanakan cara menyelesaikan setiap item

### Output:
- 🎯 Sprint Goal
- 📋 Sprint Backlog (item + rencana)
- 💬 Semua paham scope sprint ini

---

## 3. Daily Scrum (Standup)

### Kapan: Setiap hari, waktu & tempat sama
### Durasi: **15 menit** (tepat!)
### Siapa: Developers (PO & SM opsional)

### Format 3 Pertanyaan:
1. ❓ Apa yang kamu kerjakan kemarin?
2. ❓ Apa yang akan kamu kerjakan hari ini?
3. ❓ Ada hambatan (blocker/impediment)?

### Bukan:
- ❌ Bukan laporan ke atasan
- ❌ Bukan problem-solving session (simpan untuk setelah standup)
- ❌ Bukan meeting detail teknis

### Untuk Developer:
\`\`\`
✅ Singkat, padat, jelas (15 menit tim 5-7 orang)
✅ Fokus ke progress menuju Sprint Goal
✅ Langsung sebut blocker, jangan disembunyikan
✅ Jika ada diskusi teknis, lanjutkan setelah standup
\`\`\`

---

## 4. Sprint Review

### Kapan: Akhir Sprint
### Durasi: Max 4 jam (Sprint 1 bulan)
### Siapa: Scrum Team + Stakeholders

### Agenda:
- 👨‍💼 **Developers demo** increment yang sudah Done
- 💬 **Stakeholders beri feedback**
- 📋 **PO review** Product Backlog berdasarkan feedback

### Bukan:
- ❌ Bukan presentasi formal dengan slide
- ❌ Bukan demo yang belum selesai (harus Done!)
- ❌ Bukan satu-satunya waktu terima feedback

### Untuk Developer:
\`\`\`
✅ Demo working software, bukan slide
✅ Jujur: "Ini yang selesai, ini yang belum"
✅ Terima feedback dengan terbuka (bukan defensif)
\`\`\`

---

## 5. Sprint Retrospective

### Kapan: Setelah Sprint Review, sebelum Sprint Planning berikutnya
### Durasi: Max 3 jam (Sprint 1 bulan)
### Siapa: Scrum Team (tanpa stakeholders)

### Agenda:
- ✅ **What went well?** (Lanjutkan)
- ⚠️ **What could be improved?** (Perbaiki)
- 🎯 **Action items** untuk sprint berikutnya

### Format Umum:
1. Start / Stop / Continue
2. Mad / Sad / Glad
3. 4L: Liked, Learned, Lacked, Longed For

### Untuk Developer:
\`\`\`
✅ Jujur, terbuka, tidak menyalahkan individu
✅ Fokus ke proses, bukan orang
✅ Buat action items yang konkret (bukan "tingkatkan komunikasi" doang)
✅ Retro bukan tempat curhat tanpa solusi
\`\`\`
  `,

  quiz: [
    { question: "Berapa durasi maksimal Daily Scrum?", options: ["30 menit", "15 menit", "1 jam", "Tidak ada batasan"], correctAnswer: 1, explanation: "Daily Scrum timeboxed 15 menit. Harus singkat dan fokus." },
    { question: "Siapa yang hadir di Sprint Retrospective?", options: ["Seluruh perusahaan", "Scrum Team saja", "Hanya developers", "Stakeholders"], correctAnswer: 1, explanation: "Retrospective hanya untuk Scrum Team. Stakeholders tidak hadir agar tim bisa jujur merefleksikan proses." },
    { question: "Apa output Sprint Planning?", options: ["Laporan bulanan", "Sprint Goal dan Sprint Backlog", "Dokumentasi lengkap", "Presentasi"], correctAnswer: 1, explanation: "Output Sprint Planning: Sprint Goal (tujuan sprint) dan Sprint Backlog (item + rencana pengerjaan)." }
  ],

  codeExamples: []
};