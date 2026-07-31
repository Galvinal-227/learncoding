export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir System Design",
  description: "Uji pemahaman Anda tentang semua konsep system design yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "system-design-introduction",
    "system-design-requirements",
    "system-design-capacity-estimation",
    "system-design-database-design",
    "system-design-caching",
    "system-design-load-balancing",
    "system-design-message-queues",
    "system-design-microservices",
    "system-design-real-world-examples"
  ],
  tags: ["quiz", "system-design", "assessment"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir System Design

Selamat! Anda telah menyelesaikan semua materi tentang System Design. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa itu system design?",
      options: [
        "Proses coding aplikasi",
        "Proses mendefinisikan arsitektur sistem",
        "Proses testing aplikasi",
        "Proses deployment"
      ],
      correctAnswer: 1
    },
    {
      question: "Fitur sistem disebut?",
      options: [
        "Non-functional requirements",
        "Functional requirements",
        "Technical requirements",
        "Business requirements"
      ],
      correctAnswer: 1
    },
    {
      question: "Formula RPS dari traffic harian adalah?",
      options: [
        "Daily / 3600",
        "Daily / 86400",
        "Daily / 24",
        "Daily * 86400"
      ],
      correctAnswer: 1
    },
    {
      question: "Database untuk high write load adalah?",
      options: [
        "PostgreSQL",
        "MySQL",
        "Cassandra",
        "SQLite"
      ],
      correctAnswer: 2
    },
    {
      question: "Cache strategy yang menulis ke cache dan DB adalah?",
      options: [
        "Cache-Aside",
        "Write-Through",
        "Write-Back",
        "Cache-Only"
      ],
      correctAnswer: 1
    },
    {
      question: "Algoritma load balancing yang paling sederhana adalah?",
      options: [
        "Least Connections",
        "Round Robin",
        "IP Hash",
        "Weighted"
      ],
      correctAnswer: 1
    },
    {
      question: "RabbitMQ model pertukaran pesan adalah?",
      options: [
        "Queue",
        "Log",
        "Stream",
        "Topic"
      ],
      correctAnswer: 0
    },
    {
      question: "Setiap service di microservices memiliki?",
      options: [
        "Database sendiri",
        "Database bersama",
        "Cache bersama",
        "Server bersama"
      ],
      correctAnswer: 0
    },
    {
      question: "URL shortener menggunakan base berapa untuk generate code?",
      options: [
        "base10",
        "base62",
        "base64",
        "base32"
      ],
      correctAnswer: 1
    },
    {
      question: "Video streaming menggunakan apa untuk video delivery?",
      options: [
        "CDN",
        "S3",
        "Database",
        "Cache"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: []
};