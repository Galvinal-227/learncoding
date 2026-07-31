export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Testing",
  description: "Uji pemahaman Anda tentang semua konsep testing yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "testing-introduction",
    "testing-unit-testing",
    "testing-integration-testing",
    "testing-e2e-testing",
    "testing-jest",
    "testing-mocha",
    "testing-react-testing-library",
    "testing-test-driven-development",
    "testing-ci-integration"
  ],
  tags: ["quiz", "testing", "assessment"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Testing

Selamat! Anda telah menyelesaikan semua materi tentang Testing. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Jenis testing yang menguji komponen terkecil adalah?",
      options: ["Unit Test", "Integration Test", "E2E Test", "Performance Test"],
      correctAnswer: 0
    },
    {
      question: "Siklus TDD adalah?",
      options: ["Green → Red → Refactor", "Red → Green → Refactor", "Refactor → Red → Green", "Green → Refactor → Red"],
      correctAnswer: 1
    },
    {
      question: "Framework testing dari Facebook adalah?",
      options: ["Mocha", "Jest", "Cypress", "Playwright"],
      correctAnswer: 1
    },
    {
      question: "Assertion library untuk Mocha adalah?",
      options: ["Jest", "Chai", "Sinon", "Cypress"],
      correctAnswer: 1
    },
    {
      question: "Tools untuk E2E testing adalah?",
      options: ["Jest", "Cypress", "Mocha", "Chai"],
      correctAnswer: 1
    },
    {
      question: "Query yang throws error jika elemen tidak ditemukan adalah?",
      options: ["queryBy", "getBy", "findBy", "allBy"],
      correctAnswer: 1
    },
    {
      question: "Struktur unit test yang benar adalah?",
      options: ["Act → Arrange → Assert", "Arrange → Act → Assert", "Assert → Act → Arrange", "Arrange → Assert → Act"],
      correctAnswer: 1
    },
    {
      question: "Platform CI yang terintegrasi dengan GitHub adalah?",
      options: ["GitLab CI", "GitHub Actions", "CircleCI", "Jenkins"],
      correctAnswer: 1
    },
    {
      question: "Testing pyramid yang paling bawah adalah?",
      options: ["E2E", "Integration", "Unit", "Performance"],
      correctAnswer: 2
    },
    {
      question: "Selector yang disarankan untuk E2E testing adalah?",
      options: ["class", "id", "data-testid", "tag"],
      correctAnswer: 2
    }
  ],
  codeExamples: []
};