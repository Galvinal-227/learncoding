export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir REST API",
  description: "Uji pemahaman Anda tentang semua konsep REST API yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "rest-api-introduction",
    "rest-api-http-methods",
    "rest-api-status-codes",
    "rest-api-headers",
    "rest-api-authentication",
    "rest-api-pagination",
    "rest-api-versioning",
    "rest-api-hateoas",
    "rest-api-documentation",
    "rest-api-best-practices"
  ],
  tags: ["quiz", "rest-api", "assessment"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir REST API

Selamat! Anda telah menyelesaikan semua materi tentang REST API. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa kepanjangan dari REST?",
      options: [
        "Representational State Transfer",
        "Restful State Transfer",
        "Representational State Template",
        "Restful Service Template"
      ],
      correctAnswer: 0
    },
    {
      question: "Method HTTP untuk membuat resource baru adalah?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 1
    },
    {
      question: "Status code 201 menunjukkan?",
      options: ["OK", "Created", "Accepted", "No Content"],
      correctAnswer: 1
    },
    {
      question: "Header untuk autentikasi Bearer token adalah?",
      options: ["Authentication", "Authorization", "Auth-Token", "Api-Key"],
      correctAnswer: 1
    },
    {
      question: "Strategi versioning paling umum adalah?",
      options: [
        "URL path versioning",
        "Query parameter",
        "Header versioning",
        "Content negotiation"
      ],
      correctAnswer: 0
    },
    {
      question: "Parameter untuk pagination adalah?",
      options: ["page & limit", "start & end", "from & to", "skip & take"],
      correctAnswer: 0
    },
    {
      question: "Apa kepanjangan HATEOAS?",
      options: [
        "Hypermedia as the Engine of Application State",
        "Hypermedia Application Transfer Engine",
        "HTTP Application Transfer Engine",
        "Hypertext Application Transfer Engine"
      ],
      correctAnswer: 0
    },
    {
      question: "OpenAPI specification sebelumnya dikenal sebagai?",
      options: ["Swagger", "Postman", "Redoc", "Apiary"],
      correctAnswer: 0
    },
    {
      question: "Status code untuk rate limit exceeded adalah?",
      options: ["400", "429", "503", "408"],
      correctAnswer: 1
    },
    {
      question: "Best practice untuk resource naming adalah?",
      options: [
        "/getUser",
        "/user",
        "/users",
        "/user/123"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: []
};