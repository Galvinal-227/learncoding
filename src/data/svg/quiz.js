export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir SVG",
  description: "Uji pemahaman Anda tentang semua konsep SVG yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "svg-introduction",
    "svg-basic-shapes",
    "svg-paths",
    "svg-gradients",
    "svg-patterns",
    "svg-text",
    "svg-animation",
    "svg-interactivity",
    "svg-sprites"
  ],
  tags: ["quiz", "svg", "assessment"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir SVG

Selamat! Anda telah menyelesaikan semua materi tentang SVG. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa kepanjangan SVG?",
      options: [
        "Scalable Vector Graphics",
        "Simple Vector Graphics",
        "Scalable Visual Graphics",
        "Standard Vector Graphics"
      ],
      correctAnswer: 0
    },
    {
      question: "Element untuk membuat lingkaran di SVG adalah?",
      options: [
        "circle",
        "ellipse",
        "arc",
        "sphere"
      ],
      correctAnswer: 0
    },
    {
      question: "Perintah untuk Move To di path adalah?",
      options: [
        "M",
        "L",
        "C",
        "Q"
      ],
      correctAnswer: 0
    },
    {
      question: "Element untuk linear gradient adalah?",
      options: [
        "linearGradient",
        "gradient",
        "linear",
        "lg"
      ],
      correctAnswer: 0
    },
    {
      question: "Element untuk pattern di SVG adalah?",
      options: [
        "pattern",
        "repeat",
        "tile",
        "texture"
      ],
      correctAnswer: 0
    },
    {
      question: "Atribut untuk alignment teks di SVG adalah?",
      options: [
        "align",
        "text-anchor",
        "text-align",
        "anchor"
      ],
      correctAnswer: 1
    },
    {
      question: "Element SMIL untuk animasi transformasi adalah?",
      options: [
        "animate",
        "animateTransform",
        "transform",
        "motion"
      ],
      correctAnswer: 1
    },
    {
      question: "Event untuk mouse hover di SVG adalah?",
      options: [
        "onhover",
        "onmouseenter",
        "onmouseover",
        "onmousehover"
      ],
      correctAnswer: 1
    },
    {
      question: "Element untuk mendefinisikan icon di sprite adalah?",
      options: [
        "icon",
        "symbol",
        "sprite",
        "def"
      ],
      correctAnswer: 1
    },
    {
      question: "Atribut untuk sistem koordinat SVG adalah?",
      options: [
        "coords",
        "viewBox",
        "bbox",
        "viewport"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};