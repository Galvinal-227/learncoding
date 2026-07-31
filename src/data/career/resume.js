export const chapter = {
  slug: "career-resume",
  title: "Membuat Resume yang Dilirik",
  description: "Buat resume yang standout dan lolos ATS (Applicant Tracking System).",
  icon: "SiLinkedin",
  color: "#0A66C2",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["career-introduction"],
  tags: ["career", "resume", "cv", "ats"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Resume vs CV

| Resume | CV |
|--------|-----|
| 1 halaman | 2+ halaman |
| Ringkas, relevan | Detail, komprehensif |
| Tech industry (US style) | Akademik, Eropa |

## Struktur Resume 1 Halaman

\`\`\`
1. Header (Nama, Email, LinkedIn, GitHub, Portfolio)
2. Summary (2-3 kalimat tentang dirimu)
3. Skills (kelompokkan: Frontend, Backend, Tools)
4. Experience (paling penting!)
5. Projects (2-3 project terbaik)
6. Education (opsional, taruh bawah)
\`\`\`

## Format ATS-Friendly

\`\`\`
✅ Format: PDF (bukan Word!)
✅ Font: Arial, Calibri, Helvetica
✅ Ukuran: 10-12pt
✅ Margin: 1 inch semua sisi
✅ Satu kolom (hindari 2 kolom)
✅ No gambar, icon, grafik
✅ No tabel atau text box
✅ Keywords dari job description
\`\`\`

## Menulis Experience (Formula STAR)

**S**ituation - **T**ask - **A**ction - **R**esult

### ❌ Buruk:
\`\`\`
"Mengerjakan fitur website perusahaan"
\`\`\`

### ✅ Baik (STAR + Metrics):
\`\`\`
"Mengembangkan fitur checkout yang meningkatkan konversi 25% 
dan mengurangi cart abandonment dari 60% ke 35% dalam 3 bulan. 
Tech stack: Next.js, Node.js, PostgreSQL."
\`\`\`

## Action Verbs untuk Resume

\`\`\`
Built, Developed, Implemented, Designed, Architected,
Optimized, Reduced, Improved, Automated, Led, Migrated,
Launched, Scaled, Integrated, Refactored
\`\`\`

## Contoh Resume Developer (Teks)

\`\`\`
BUDI SANTOSO
budi@email.com | linkedin.com/in/budi | github.com/budi

SUMMARY
Full-stack developer dengan 3 tahun pengalaman membangun aplikasi web 
skala enterprise. Spesialisasi React, Node.js, dan AWS.

SKILLS
Frontend: React, Next.js, TypeScript, Tailwind CSS
Backend: Node.js, Express, PostgreSQL, MongoDB
DevOps: Docker, AWS, CI/CD (GitHub Actions)
Tools: Git, VS Code, Figma, Postman

EXPERIENCE

Software Engineer | PT Teknologi Maju | Jan 2024 - Sekarang
- Mengembangkan dashboard analytics real-time yang melayani 500+ user aktif
- Mengurangi load time halaman dari 4.2s ke 1.1s melalui code splitting dan lazy loading
- Memimpin migrasi dari JavaScript ke TypeScript (50k+ lines of code)
- Tech: React, TypeScript, Node.js, PostgreSQL, AWS

Frontend Developer | Startup XYZ | Jun 2022 - Des 2023
- Membangun UI component library yang digunakan oleh 3 tim produk
- Implementasi responsive design yang meningkatkan mobile traffic 40%
- Tech: React, Next.js, Tailwind CSS, Storybook

PROJECTS
- E-Commerce Platform: Full-stack marketplace dengan payment gateway (Next.js, Stripe)
- AI Chat App: Chatbot dengan RAG untuk dokumen internal (OpenAI, Pinecone)

EDUCATION
S1 Teknik Informatika, Universitas Indonesia (2018-2022)
\`\`\`

## Tips Tambahan

\`\`\`
✅ Sesuaikan resume untuk setiap lamaran
✅ Gunakan angka/metrics sebanyak mungkin
✅ Minta review dari senior/mentor
✅ Simpan sebagai PDF dengan nama: "Budi_Santoso_Resume.pdf"
✅ Update setiap 3 bulan
❌ Jangan cantumkan foto (US/International)
❌ Jangan tulis "References available upon request"
\`\`\`
  `,

  quiz: [
    { question: "STAR singkatan?", options: ["Start, Task, Action, Result", "Situation, Task, Action, Result", "Skill, Time, Action, Review", "Simple, Target, Achieve, Report"], correctAnswer: 1 },
    { question: "Format resume yang direkomendasikan?", options: ["Word (.docx)", "PDF", "TXT", "HTML"], correctAnswer: 1 },
    { question: "Kenapa harus cantumkan metrics/angka?", options: ["Hiasan", "Bukti konkret dampak kerjamu", "Wajib hukum", "Biar panjang"], correctAnswer: 1 }
  ],

  codeExamples: []
};