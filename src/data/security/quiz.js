export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Security",
  description: "Uji pemahaman Anda tentang semua konsep keamanan web yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "security-introduction",
    "security-https",
    "security-helmet",
    "security-rate-limiting",
    "security-secrets-management",
    "security-dependency-audit",
    "security-logging-monitoring"
  ],
  tags: ["quiz", "security", "assessment"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Web Security

Selamat! Anda telah menyelesaikan semua materi tentang Web Security. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa itu SQL Injection?",
      options: [
        "Serangan pada database SQL",
        "Serangan pada JavaScript",
        "Serangan pada CSS",
        "Serangan pada HTML"
      ],
      correctAnswer: 0
    },
    {
      question: "Apa fungsi HTTPS?",
      options: [
        "Mempercepat loading website",
        "Mengenkripsi komunikasi web",
        "Mengurangi bandwidth",
        "Menambah fitur"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa fungsi Helmet.js?",
      options: [
        "Membuat server HTTP",
        "Menambahkan security headers",
        "Mengelola database",
        "Membuat API"
      ],
      correctAnswer: 1
    },
    {
      question: "Status code untuk rate limit exceeded adalah?",
      options: [
        "400",
        "401",
        "429",
        "500"
      ],
      correctAnswer: 2
    },
    {
      question: "Cara terbaik untuk menyimpan API key adalah?",
      options: [
        "Hardcode di kode",
        "Environment variables",
        "Database",
        "File JSON"
      ],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk audit dependencies di npm adalah?",
      options: [
        "npm check",
        "npm audit",
        "npm security",
        "npm verify"
      ],
      correctAnswer: 1
    },
    {
      question: "Library logging untuk Node.js yang populer adalah?",
      options: [
        "Winston",
        "Express",
        "Mongoose",
        "Axios"
      ],
      correctAnswer: 0
    },
    {
      question: "Header untuk force HTTPS adalah?",
      options: [
        "X-HTTPS",
        "Strict-Transport-Security",
        "Secure-HTTPS",
        "HSTS-Force"
      ],
      correctAnswer: 1
    },
    {
      question: "Prinsip keamanan 'give minimum required access' disebut?",
      options: [
        "Defense in Depth",
        "Least Privilege",
        "Secure by Default",
        "Zero Trust"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa yang tidak boleh di-log?",
      options: [
        "Request ID",
        "Password",
        "Timestamp",
        "IP Address"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};