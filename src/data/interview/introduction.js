export const chapter = {
  slug: "interview-introduction",
  title: "Pengenalan Interview Tech",
  description: "Pahami proses interview di perusahaan tech: tahapan, jenis interview, dan ekspektasi.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["interview", "tech", "career", "job-search"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Proses Interview Tech

\`\`\`
1. Application → Resume screening
2. HR/Recruiter Call (30 menit)
3. Technical Phone Screen (1 jam)
4. Coding Challenge / Take-home (2-8 jam)
5. On-site / Virtual Loop (3-5 jam)
   ├── Coding (2-3 sesi)
   ├── System Design (1-2 sesi)
   └── Behavioral (1 sesi)
6. Offer / Rejection
\`\`\`

## Jenis Interview

| Jenis | Durasi | Format | Tujuan |
|-------|--------|--------|--------|
| **HR Screen** | 30 menit | Telepon/Video | Cek kecocokan, gaji, logistik |
| **Technical Phone** | 45-60 menit | Video + Shared Editor | Coding dasar, problem solving |
| **Take-home** | 2-8 jam | Sendiri, kirim PR | Real coding skill |
| **On-site Coding** | 45-60 menit | Whiteboard/Live code | Algoritma, data structures |
| **System Design** | 45-60 menit | Diskusi + Diagram | Arsitektur, scalability |
| **Behavioral** | 45-60 menit | Q&A | Soft skills, culture fit |

## Perusahaan Tech & Prosesnya

| Perusahaan | Fokus Interview |
|-----------|-----------------|
| **FAANG (Meta, Apple, Amazon, Netflix, Google)** | Algoritma berat, System Design |
| **Startup** | Practical coding, culture fit |
| **Unicorn (GoTo, Grab, Tokopedia)** | Mix algoritma + practical |
| **Enterprise** | Behavioral, experience-based |
| **Remote-first** | Async communication, take-home |

## Yang Dinilai

\`\`\`
✅ Problem-solving ability (bukan hafalan)
✅ Communication (jelaskan sambil coding)
✅ Code quality (clean, readable, tested)
✅ System thinking (trade-offs, scalability)
✅ Culture fit (values, collaboration)
✅ Growth mindset (mau belajar)
\`\`\`

## Timeline Persiapan

\`\`\`
Bulan 1-2: Kuasai data structures & algorithms dasar
Bulan 2-3: Latihan LeetCode (Easy → Medium)
Bulan 3-4: System design + mock interview
Bulan 4-5: Apply & real interview practice

Target: 100+ soal LeetCode, 5+ mock interviews
\`\`\`
  `,

  quiz: [
    { question: "FAANG interview fokus?", options: ["Hanya behavioral", "Algoritma + System Design", "Hanya take-home", "Hanya culture fit"], correctAnswer: 1 },
    { question: "On-site coding berapa sesi?", options: ["1", "2-3 sesi coding", "5+", "Tidak ada"], correctAnswer: 1 },
    { question: "Yang PALING dinilai di coding interview?", options: ["Kecepatan", "Problem-solving + communication", "Hafalan syntax", "Penampilan"], correctAnswer: 1 }
  ],

  codeExamples: []
};