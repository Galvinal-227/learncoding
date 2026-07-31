export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Tailwind CSS",
  description: "Uji pemahaman Anda tentang semua konsep Tailwind CSS yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "tailwind-introduction",
    "tailwind-installation",
    "tailwind-utility-first",
    "tailwind-responsive-design",
    "tailwind-dark-mode",
    "tailwind-components",
    "tailwind-customization",
    "tailwind-plugins",
    "tailwind-best-practices"
  ],
  tags: ["quiz", "tailwind", "assessment"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Tailwind CSS

Selamat! Anda telah menyelesaikan semua materi tentang Tailwind CSS. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa filosofi utama Tailwind CSS?",
      options: [
        "Component-first",
        "Utility-first",
        "Semantic-first",
        "Atomic-first"
      ],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk install Tailwind via npm adalah?",
      options: [
        "npm install tailwindcss",
        "npm install -D tailwindcss",
        "npm install --save tailwindcss",
        "npm i tailwind"
      ],
      correctAnswer: 1
    },
    {
      question: "Class flex di Tailwind digunakan untuk?",
      options: [
        "Display flex",
        "Flex container",
        "Flex item",
        "Flex direction"
      ],
      correctAnswer: 1
    },
    {
      question: "Breakpoint untuk tablet di Tailwind adalah?",
      options: [
        "sm",
        "md",
        "lg",
        "xl"
      ],
      correctAnswer: 1
    },
    {
      question: "Prefix untuk dark mode di Tailwind adalah?",
      options: [
        "dark:",
        "night:",
        "dark-mode:",
        "dm:"
      ],
      correctAnswer: 0
    },
    {
      question: "Directive untuk membuat komponen di Tailwind adalah?",
      options: [
        "@component",
        "@apply",
        "@use",
        "@include"
      ],
      correctAnswer: 1
    },
    {
      question: "File untuk konfigurasi Tailwind adalah?",
      options: [
        "tailwind.js",
        "tailwind.config.js",
        "config.tailwind.js",
        "tailwindcss.js"
      ],
      correctAnswer: 1
    },
    {
      question: "Official plugin untuk forms adalah?",
      options: [
        "@tailwindcss/forms",
        "@tailwindcss/form",
        "tailwind-forms",
        "tailwindcss-forms"
      ],
      correctAnswer: 0
    },
    {
      question: "Best practice untuk responsive design di Tailwind adalah?",
      options: [
        "Desktop first",
        "Mobile first",
        "Tablet first",
        "All at once"
      ],
      correctAnswer: 1
    },
    {
      question: "Class untuk shadow di Tailwind adalah?",
      options: [
        "shadow",
        "box-shadow",
        "shadow-box",
        "drop-shadow"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: []
};