export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Technical Writing",
  description: "Uji pemahaman Anda tentang semua konsep technical writing yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "technical-writing-introduction",
    "technical-writing-documentation",
    "technical-writing-api-docs",
    "technical-writing-tutorials",
    "technical-writing-style-guides",
    "technical-writing-tools"
  ],
  tags: ["quiz", "technical-writing", "assessment"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Technical Writing

Selamat! Anda telah menyelesaikan semua materi tentang Technical Writing. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa itu technical writing?",
      options: [
        "Menulis fiksi",
        "Menulis dokumentasi teknis",
        "Menulis berita",
        "Menulis puisi"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa itu README?",
      options: [
        "File untuk menyimpan data",
        "File panduan project",
        "File konfigurasi",
        "File untuk API"
      ],
      correctAnswer: 1
    },
    {
      question: "Format standar untuk API documentation adalah?",
      options: [
        "HTML",
        "OpenAPI/Swagger",
        "PDF",
        "Word"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa tujuan utama tutorial?",
      options: [
        "Memberikan informasi",
        "Membantu pengguna belajar",
        "Menjual produk",
        "Membuat dokumentasi"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa itu style guide?",
      options: [
        "Panduan desain",
        "Panduan penulisan",
        "Panduan coding",
        "Panduan testing"
      ],
      correctAnswer: 1
    },
    {
      question: "Tools untuk diagram di dokumentasi adalah?",
      options: [
        "Mermaid",
        "Word",
        "Excel",
        "PowerPoint"
      ],
      correctAnswer: 0
    },
    {
      question: "Platform untuk dokumentasi open source adalah?",
      options: [
        "ReadTheDocs",
        "Confluence",
        "Notion",
        "WordPress"
      ],
      correctAnswer: 0
    },
    {
      question: "Prinsip technical writing yang berarti 'jelas dan mudah dipahami' adalah?",
      options: [
        "Clarity",
        "Conciseness",
        "Accuracy",
        "Completeness"
      ],
      correctAnswer: 0
    },
    {
      question: "Apa yang harus ada di README?",
      options: [
        "Installation",
        "Usage",
        "API Reference",
        "Semua di atas"
      ],
      correctAnswer: 3
    },
    {
      question: "Tone yang baik untuk dokumentasi adalah?",
      options: [
        "Formal dan kaku",
        "Professional dan helpful",
        "Casual dan santai",
        "Akademik dan kompleks"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};