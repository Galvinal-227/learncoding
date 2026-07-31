export const chapter = {
  slug: "css-animations-quiz",
  title: "Quiz Akhir CSS Animations",
  description: "Uji pemahamanmu tentang animasi CSS.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-animations-libraries"],
  tags: ["css", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir CSS Animations\n\n10 soal.`,
  quiz: [
    { question: "Transitions vs Keyframes?", options: ["Sama", "Transition: A→B; Keyframes: multi-step", "Keyframes lebih cepat", "Transition deprecated"], correctAnswer: 1 },
    { question: "Properti paling aman animasi?", options: ["width, height", "transform, opacity", "margin, padding", "Semua"], correctAnswer: 1 },
    { question: "from/to = ?", options: ["0%/50%", "0%/100%", "50%/100%", "start/end"], correctAnswer: 1 },
    { question: "fill-mode: forwards?", options: ["Kembali", "Simpan state akhir", "Ulang", "Mundur"], correctAnswer: 1 },
    { question: "Easing paling natural?", options: ["linear", "ease", "ease-in-out", "steps"], correctAnswer: 2 },
    { question: "Loader spinner?", options: ["pulse", "spin (rotate 360deg)", "shake", "fade"], correctAnswer: 1 },
    { question: "prefers-reduced-motion?", options: ["Cepat", "Aksesibilitas", "GPU", "Debug"], correctAnswer: 1 },
    { question: "AOS library untuk?", options: ["Hover", "Animate on scroll", "Loading", "Form"], correctAnswer: 1 },
    { question: "cubic-bezier bounce?", options: ["(0,0,1,1)", "(0.68,-0.55,0.27,1.55)", "(0.25,0.1,0.25,1)", "(0,0,0,0)"], correctAnswer: 1 },
    { question: "will-change untuk?", options: ["Hiasan", "Hint browser optimasi", "Reset", "Debug"], correctAnswer: 1 }
  ]
};