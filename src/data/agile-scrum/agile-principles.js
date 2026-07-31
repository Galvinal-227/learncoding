export const chapter = {
  slug: "agile-scrum-agile-principles",
  title: "Agile Principles",
  description: "Pelajari 12 prinsip Agile Manifesto dan penerapannya dalam pengembangan software.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["agile-scrum-introduction"],
  tags: ["agile", "principles", "manifesto", "software"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 12 Prinsip Agile Manifesto

### 1. Customer Satisfaction
"Prioritas tertinggi kami adalah memuaskan pelanggan melalui penyerahan software yang berharga secara **cepat dan terus-menerus**."

💡 **Artinya:** Deliver value sesering mungkin, bukan setahun sekali.

### 2. Welcome Changing Requirements
"Menyambut perubahan kebutuhan, bahkan di akhir pengembangan."

💡 **Artinya:** Fleksibel. User minta fitur baru di tengah sprint? Diskusikan, jangan tolak mentah-mentah.

### 3. Deliver Frequently
"Menyerahkan software yang berfungsi secara sering, dari beberapa minggu hingga beberapa bulan."

💡 **Artinya:** Sprint 2-4 minggu. User lihat hasil nyata, bukan mockup.

### 4. Business & Developers Together
"Pengusaha dan pengembang harus bekerja sama setiap hari."

💡 **Artinya:** Product Manager aktif di tim, bukan cuma di awal bikin requirement lalu hilang.

### 5. Motivated Individuals
"Bangun proyek di sekitar individu yang termotivasi. Beri lingkungan dan dukungan, percayai mereka."

💡 **Artinya:** Tim yang bahagia dan dipercaya lebih produktif.

### 6. Face-to-Face Conversation
"Metode paling efisien menyampaikan informasi adalah percakapan tatap muka."

💡 **Artinya:** Chat boleh, tapi diskusi langsung lebih efektif. Video call minimal.

### 7. Working Software
"Software yang berfungsi adalah ukuran utama kemajuan."

💡 **Artinya:** "Sudah 80% selesai" tidak cukup. Tunjukkan demo yang berfungsi.

### 8. Sustainable Development
"Proses agile mendorong pembangunan berkelanjutan. Sponsor, developer, user harus bisa menjaga kecepatan konstan."

💡 **Artinya:** No overtime terus-menerus. Sprint harus sustainable.

### 9. Technical Excellence
"Perhatian terus-menerus pada keunggulan teknis dan desain yang baik meningkatkan agility."

💡 **Artinya:** Refactor, code review, testing. Jangan korbankan kualitas demi kecepatan.

### 10. Simplicity
"Kesederhanaan - seni memaksimalkan pekerjaan yang tidak dilakukan - sangat penting."

💡 **Artinya:** MVP dulu. Jangan over-engineer. "You ain't gonna need it" (YAGNI).

### 11. Self-Organizing Teams
"Arsitektur, kebutuhan, dan desain terbaik muncul dari tim yang mengatur diri sendiri."

💡 **Artinya:** Tim yang memutuskan cara kerja, bukan diperintah atasan.

### 12. Reflect & Adjust
"Secara berkala, tim merefleksikan cara menjadi lebih efektif, lalu menyesuaikan."

💡 **Artinya:** Sprint Retrospective itu penting. Bukan formalitas.

## Dalam Praktik Sehari-hari

\`\`\`
✅ Deliver working software setiap sprint
✅ Terima feedback user dengan senang hati
✅ Daily standup = komunikasi tim
✅ Retro = perbaiki proses terus
✅ Keep it simple, MVP dulu
✅ Jangan lembur terus, sustainable pace
\`\`\`
  `,

  quiz: [
    { question: "Apa prioritas tertinggi Agile?", options: ["Dokumentasi lengkap", "Kontrak jelas", "Kepuasan customer via software berfungsi", "Rencana detail"], correctAnswer: 2, explanation: "Prinsip #1: Kepuasan pelanggan melalui penyerahan software berharga secara cepat dan terus-menerus." },
    { question: "Apa ukuran utama kemajuan di Agile?", options: ["Dokumen lengkap", "Working software", "Jam kerja", "Budget tersisa"], correctAnswer: 1, explanation: "Prinsip #7: Software yang berfungsi adalah ukuran utama kemajuan." },
    { question: "Apa arti 'sustainable development'?", options: ["Lembur terus", "Kecepatan konstan, tidak burnout", "Cepat sekali", "Lambat tapi pasti"], correctAnswer: 1, explanation: "Prinsip #8: Tim harus bisa menjaga kecepatan konstan tanpa kelelahan. No crunch culture." }
  ],

  codeExamples: []
};