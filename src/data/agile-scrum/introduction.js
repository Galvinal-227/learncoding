export const chapter = {
  slug: "agile-scrum-introduction",
  title: "Pengenalan Agile & Scrum",
  description: "Pahami apa itu Agile dan Scrum, kenapa penting, dan bagaimana penerapannya di industri.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["agile", "scrum", "project-management", "tim"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Agile?

Agile adalah **mindset/pola pikir** dan **set of values** untuk pengembangan software yang fleksibel, kolaboratif, dan responsif terhadap perubahan.

## Masalah Metode Tradisional (Waterfall)

\`\`\`
Waterfall: Requirements → Design → Implementation → Testing → Deployment → Maintenance
(Mingguan/Bulanan/Tahunan, kaku, user lihat hasil di akhir)
\`\`\`

❌ User tidak terlibat di tengah proses
❌ Perubahan requirement sulit diakomodasi
❌ Testing di akhir, bug ketahuan terlambat
❌ Hasil mungkin tidak sesuai ekspektasi user

## Agile Manifesto (2001)

4 nilai utama dan 12 prinsip, dibuat oleh 17 praktisi software:

### 4 Nilai Agile Manifesto

| Nilai | Artinya |
|-------|---------|
| **Individuals & Interactions** over Processes & Tools | Orang dan komunikasi lebih penting dari proses dan tools |
| **Working Software** over Comprehensive Documentation | Software yang berfungsi lebih penting dari dokumentasi lengkap |
| **Customer Collaboration** over Contract Negotiation | Kolaborasi dengan customer lebih penting dari negosiasi kontrak |
| **Responding to Change** over Following a Plan | Merespon perubahan lebih penting dari mengikuti rencana |

> ⚠️ "That is, while there is value in the items on the right, we value the items on the left more."
> Item di kanan tetap penting, tapi item di kiri lebih diutamakan.

## Apa Itu Scrum?

Scrum adalah **framework** untuk mengimplementasikan Agile. Bukan satu-satunya, tapi yang paling populer.

## Pilar Scrum (3 Pilar Empiris)

1. **Transparency** - Semua informasi terlihat oleh semua orang
2. **Inspection** - Cek progress secara rutin
3. **Adaptation** - Sesuaikan rencana berdasarkan hasil inspeksi

## Scrum dalam Sehari-hari Developer

Sebagai developer, dalam tim Scrum kamu akan:
- 🗓️ Ikut **Daily Standup** 15 menit setiap pagi
- 📋 Ambil task dari **Sprint Backlog**
- ⏱️ Update **task board** (To Do → In Progress → Done)
- 📊 Ikut **Sprint Planning**, **Sprint Review**, **Sprint Retrospective**
- 🎯 Deliver value setiap akhir **Sprint** (biasanya 2 minggu)

## Kenapa Developer Perlu Paham Agile/Scrum?

- ✅ Hampir semua perusahaan tech pakai Agile/Scrum
- ✅ Pertanyaan interview: "Apa itu Scrum?" "Ceritakan pengalaman di tim Agile?"
- ✅ Memudahkan kolaborasi dengan Product Manager, Designer, QA
- ✅ Membantu self-management dan produktivitas tim
  `,

  quiz: [
    { question: "Agile adalah?", options: ["Tools", "Mindset dan values", "Bahasa pemrograman", "Testing framework"], correctAnswer: 1, explanation: "Agile adalah mindset/pola pikir dan kumpulan nilai (values) untuk pengembangan software." },
    { question: "Scrum adalah?", options: ["Nilai Agile", "Framework implementasi Agile", "Tools project management", "Metode Waterfall"], correctAnswer: 0, explanation: "Scrum adalah framework paling populer untuk mengimplementasikan prinsip-prinsip Agile." },
    { question: "Apa 3 pilar Scrum?", options: ["Plan, Code, Deploy", "Transparency, Inspection, Adaptation", "Design, Build, Test", "Start, Run, Stop"], correctAnswer: 1, explanation: "Tiga pilar empiris Scrum: Transparency, Inspection, Adaptation." }
  ],

  codeExamples: []
};