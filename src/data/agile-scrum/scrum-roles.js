export const chapter = {
  slug: "agile-scrum-scrum-roles",
  title: "Scrum Roles (Tim Scrum)",
  description: "Pahami 3 peran utama dalam Scrum Team dan tanggung jawab masing-masing.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["agile-scrum-introduction"],
  tags: ["scrum", "roles", "po", "scrum-master", "developer"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Roles dalam Scrum Team

Scrum Team terdiri dari **3 peran**:
1. Product Owner (PO)
2. Scrum Master (SM)
3. Developers (Tim Developer)

Tidak ada sub-tim, tidak ada hierarki. **Satu tim, satu tujuan.**

## 1. Product Owner (PO)

### Tanggung Jawab:
- 🎯 **Menentukan visi produk** dan arah pengembangan
- 📋 **Mengelola Product Backlog** (daftar fitur)
- 🔢 **Memprioritaskan** item berdasarkan nilai bisnis
- 💬 **Menjembatani** stakeholder dan tim developer
- ✅ **Menerima/menolak** hasil kerja (acceptance)

### Bukan:
- ❌ Bukan bos developer
- ❌ Bukan sekretaris yang cuma catat requirement
- ❌ Bukan project manager

### Dalam Praktik (Developer View):
\`\`\`
PO: "Fitur checkout prioritas utama sprint ini. Ini acceptance criteria-nya."
Dev: "Butuh integrasi payment gateway, estimasi 5 story points."
PO: "Ok. Kalau ada kendala, kabari. Aku bisa bantu clarify requirement kapan saja."
\`\`\`

## 2. Scrum Master (SM)

### Tanggung Jawab:
- 🛡️ **Memastikan Scrum dijalankan** dengan benar
- 🚧 **Menghilangkan hambatan (impediments)** tim
- 🤝 **Memfasilitasi meeting** (Daily, Planning, Review, Retro)
- 📚 **Coaching** tim tentang Agile/Scrum
- 🛡️ **Melindungi tim** dari gangguan eksternal

### Bukan:
- ❌ Bukan bos tim
- ❌ Bukan project manager
- ❌ Bukan sekretaris meeting
- ❌ Bukan yang assign task ke developer

### Dalam Praktik (Developer View):
\`\`\`
Dev: "Server staging sering down, ngehambat testing."
SM: "Aku koordinasikan ke DevOps, prioritas hari ini. Ada hambatan lain?"
\`\`\`

## 3. Developers

### Tanggung Jawab:
- 💻 **Membangun produk** (coding, testing, desain)
- 📊 **Estimasi** task (story points)
- 🤝 **Self-organizing**: tim atur kerja sendiri
- 🎯 **Commit ke Sprint Goal**, bukan ke individu
- 🔄 **Cross-functional**: tim punya semua skill yang dibutuhkan

### Bukan:
- ❌ Bukan cuma coder
- ❌ Bukan tukang yang nunggu perintah

### Dalam Praktik:
\`\`\`
Daily Standup:
Dev 1: "Kemarin integrasi API payment, hari ini lanjut UI checkout. No blockers."
Dev 2: "Aku stuck di bug autentikasi, butuh bantuan."
Dev 3: "Aku bantu setelah standup."
\`\`\`

## Scrum Team Ideal

- 📏 **Ukuran**: 3-9 orang (ideal 5-7)
- 🔄 **Cross-functional**: Frontend, Backend, QA, Designer dalam 1 tim
- 🏢 **Co-located** (ideal) atau remote dengan komunikasi baik
- 🤝 **Self-managing**: Tim yang memutuskan siapa mengerjakan apa

## Perbandingan dengan Peran Tradisional

| Peran Tradisional | Scrum |
|-------------------|-------|
| Project Manager | Scrum Master (bukan PM!) |
| Business Analyst | Product Owner |
| Programmer, Tester | Developers (cross-functional) |
| Team Lead | Tidak ada (self-organizing) |
  `,

  quiz: [
    { question: "Siapa yang bertanggung jawab memprioritaskan Product Backlog?", options: ["Scrum Master", "Product Owner", "Developers", "Stakeholder"], correctAnswer: 1, explanation: "Product Owner bertanggung jawab memaksimalkan nilai produk dan memprioritaskan Product Backlog." },
    { question: "Apa tugas utama Scrum Master?", options: ["Assign task ke developer", "Memastikan Scrum dijalankan dan menghilangkan hambatan", "Menentukan arsitektur", "Membuat laporan"], correctAnswer: 1, explanation: "Scrum Master adalah servant-leader yang memastikan Scrum dipahami dan dijalankan, serta menghilangkan impediments tim." },
    { question: "Berapa ukuran ideal Scrum Team?", options: ["1-2 orang", "3-9 orang", "10-20 orang", "Tidak ada batasan"], correctAnswer: 1, explanation: "Scrum Guide merekomendasikan 3-9 orang per Scrum Team (tidak termasuk PO dan SM yang bisa jadi bagian tim)." }
  ],

  codeExamples: []
};