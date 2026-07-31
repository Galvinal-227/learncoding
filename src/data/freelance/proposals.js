export const chapter = {
  slug: "freelance-proposals",
  title: "Menulis Proposal",
  description: "Tulis proposal freelance yang standout dan menangkan proyek.",
  icon: "SiUpwork",
  color: "#14A800",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["freelance-finding-clients"],
  tags: ["freelance", "proposal", "pitch", "client"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Struktur Proposal 5-Bagian

### 1. Hook (Kalimat Pertama - PENTING!)
\`\`\`
❌ "Saya tertarik dengan proyek ini"
❌ "Saya sudah baca deskripsi Anda"

✅ "Saya lihat website Anda perlu optimasi loading (saat ini 4.2 detik, target <2 detik)"
✅ "Saya sudah membangun 5+ dashboard analytics serupa dengan proyek Anda"
\`\`\`

### 2. Kenapa Kamu (Relevant Experience)
\`\`\`
"Saya sudah membangun:
- Dashboard real-time untuk 500+ user (React, D3.js)
- Sistem reporting dengan export PDF/Excel
- Migrasi dari AngularJS ke React (50K+ lines)

Salah satu project mirip: [link portfolio]"
\`\`\`

### 3. Approach (Bagaimana Caranya)
\`\`\`
"Pendekatan saya:
1. Analisis requirement & buat wireframe (2 hari)
2. Setup project + component library (1 hari)  
3. Develop core features (5 hari)
4. Testing & bug fixing (2 hari)
5. Deployment & handoff (1 hari)"
\`\`\`

### 4. Pertanyaan (Tunjukkan Kamu Paham)
\`\`\`
"Beberapa pertanyaan:
- Apakah ada design mockup/Figma?
- API sudah ready atau perlu saya bantu setup?
- Target browser apa saja (IE11 support?)
- Budget range untuk project ini?"
\`\`\`

### 5. Call to Action
\`\`\`
"Saya available untuk diskusi besok jam 10:00 atau 14:00 WIB.
Bisa juga langsung book slot di: [calendly link]

Terima kasih,
[Nama] - [Portfolio URL]"
\`\`\`

## Tips Tambahan

\`\`\`
✅ Sesuaikan proposal untuk setiap klien
✅ Sebut nama klien jika ada
✅ Sertakan portfolio RELEVAN (bukan semua)
✅ Singkat - max 300 kata
✅ Kirim dalam <30 menit setelah job post
✅ Follow up setelah 2-3 hari jika no response
\`\`\`
  `,

  quiz: [
    { question: "Bagian terpenting proposal?", options: ["Penutup", "Hook (kalimat pertama)", "Harga", "Lampiran"], correctAnswer: 1 },
    { question: "Proposal ideal: berapa kata?", options: ["1000+", "200-300 kata", "50 kata", "5000 kata"], correctAnswer: 1 }
  ],

  codeExamples: []
};