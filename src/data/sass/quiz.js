export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Sass",
  description: "Uji pemahaman Anda tentang semua konsep Sass yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "sass-introduction",
    "sass-variables",
    "sass-nesting",
    "sass-partials",
    "sass-mixins",
    "sass-inheritance",
    "sass-functions",
    "sass-operators",
    "sass-built-in-modules",
    "sass-best-practices"
  ],
  tags: ["quiz", "sass", "assessment"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Sass

Selamat! Anda telah menyelesaikan semua materi tentang Sass. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa itu Sass?",
      options: [
        "CSS Framework",
        "CSS Preprocessor",
        "JavaScript Library",
        "HTML Templating"
      ],
      correctAnswer: 1
    },
    {
      question: "Syntax untuk mendefinisikan variable di Sass adalah?",
      options: [
        "@variable $name",
        "$name: value",
        "var($name)",
        "--name: value"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa fungsi ampersand (&) di Sass?",
      options: [
        "Membuat variable",
        "Parent selector",
        "Import file",
        "Membuat mixin"
      ],
      correctAnswer: 1
    },
    {
      question: "Nama file partial di Sass dimulai dengan?",
      options: [
        "Underscore (_)",
        "Dot (.)",
        "@",
        "Tidak ada aturan khusus"
      ],
      correctAnswer: 0
    },
    {
      question: "Keyword untuk mendefinisikan mixin adalah?",
      options: [
        "@mixin",
        "@define",
        "@function",
        "@include"
      ],
      correctAnswer: 0
    },
    {
      question: "Placeholder selector dimulai dengan?",
      options: [
        "$",
        "%",
        "&",
        "@"
      ],
      correctAnswer: 1
    },
    {
      question: "Module untuk manipulasi warna di Sass adalah?",
      options: [
        "sass:color",
        "sass:colors",
        "sass:palette",
        "sass:theme"
      ],
      correctAnswer: 0
    },
    {
      question: "Berapa tingkat nesting yang disarankan?",
      options: [
        "Maksimal 2",
        "Maksimal 3-4",
        "Maksimal 5-6",
        "Tidak ada batas"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa yang harus digunakan untuk parameterized styles?",
      options: [
        "@extend",
        "@mixin",
        "@function",
        "@import"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa yang harus digunakan untuk static styles inheritance?",
      options: [
        "@extend",
        "@mixin",
        "@function",
        "@import"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: []
};