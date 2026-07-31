export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Responsive Design",
  description: "Uji pemahaman Anda tentang semua konsep responsive design yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "responsive-introduction",
    "responsive-viewport",
    "responsive-media-queries",
    "responsive-mobile-first",
    "responsive-fluid-grids",
    "responsive-responsive-images",
    "responsive-framework-usage"
  ],
  tags: ["quiz", "responsive-design", "assessment"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Responsive Design

Selamat! Anda telah menyelesaikan semua materi tentang Responsive Design. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa tujuan utama dari responsive design?",
      options: [
        "Membuat website lebih cepat",
        "Membuat website dapat diakses di semua perangkat",
        "Membuat website lebih aman",
        "Mengurangi biaya hosting"
      ],
      correctAnswer: 1
    },
    {
      question: "Meta tag untuk viewport yang benar adalah?",
      options: [
        'viewport="width=device-width"',
        'name="viewport" content="width=device-width, initial-scale=1.0"',
        'meta="viewport" content="responsive"',
        'name="responsive" content="true"'
      ],
      correctAnswer: 1
    },
    {
      question: "Breakpoint untuk tablet biasanya pada rentang?",
      options: [
        "320-480px",
        "768-1024px",
        "1024-1200px",
        "1200px+"
      ],
      correctAnswer: 1
    },
    {
      question: "Pendekatan mobile first menggunakan media query?",
      options: [
        "max-width",
        "min-width",
        "max-height",
        "min-height"
      ],
      correctAnswer: 1
    },
    {
      question: "Unit CSS mana yang BUKAN unit relatif?",
      options: ["%", "em", "rem", "px"],
      correctAnswer: 3
    },
    {
      question: "Fungsi srcset pada gambar adalah?",
      options: [
        "Menambah sumber gambar alternatif",
        "Mengatur ukuran gambar",
        "Menambah efek filter",
        "Mengubah format gambar"
      ],
      correctAnswer: 0
    },
    {
      question: "Format gambar modern yang lebih ringan dari JPEG adalah?",
      options: ["PNG", "GIF", "WebP", "BMP"],
      correctAnswer: 2
    },
    {
      question: "Atribut untuk lazy loading native adalah?",
      options: ['lazy', 'loading="lazy"', 'async', 'defer'],
      correctAnswer: 1
    },
    {
      question: "Pendekatan Tailwind CSS disebut?",
      options: [
        "Component-first",
        "Utility-first",
        "Framework-first",
        "Library-first"
      ],
      correctAnswer: 1
    },
    {
      question: "Unit clamp() digunakan untuk?",
      options: [
        "Mengatur warna",
        "Membuat nilai fluid antara min dan max",
        "Menambah animasi",
        "Mengatur margin"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};