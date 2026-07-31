export const chapter = {
  slug: "accessibility-quiz",
  title: "Quiz Akhir Aksesibilitas",
  description: "Uji pemahamanmu tentang aksesibilitas web.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["accessibility-wcag"],
  tags: ["aksesibilitas", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Aksesibilitas\n\n15 soal.`,

  quiz: [
    { question: "Apa kepanjangan a11y?", options: ["Accessibility", "Ally", "Array11", "Application"], correctAnswer: 0 },
    { question: "4 prinsip WCAG?", options: ["POUR", "CRUD", "DRY", "SOLID"], correctAnswer: 0 },
    { question: "Aturan #1 ARIA?", options: ["Selalu pakai ARIA", "No ARIA > bad ARIA", "ARIA = HTML", "ARIA opsional"], correctAnswer: 1 },
    { question: "Rasio kontras WCAG AA?", options: ["3:1", "4.5:1", "7:1", "10:1"], correctAnswer: 1 },
    { question: "tabindex untuk urutan natural?", options: ["-1", "0", "1", "auto"], correctAnswer: 1 },
    { question: "Tombol tutup modal?", options: ["Tab", "Enter", "Escape", "Space"], correctAnswer: 2 },
    { question: "Screen reader gratis Windows?", options: ["JAWS", "NVDA", "VoiceOver", "TalkBack"], correctAnswer: 1 },
    { question: "Automated tools deteksi?", options: ["100%", "~50%", "~80%", "0%"], correctAnswer: 1 },
    { question: "Heading harus?", options: ["Boleh loncat", "Berurutan", "Hanya h1", "Bebas"], correctAnswer: 1 },
    { question: "Alt text dekoratif?", options: ["Deskripsi panjang", "alt=''", "Tidak perlu", "alt='gambar'"], correctAnswer: 1 },
    { question: "aria-live untuk?", options: ["Sembunyi", "Konten dinamis", "Label", "Role"], correctAnswer: 1 },
    { question: "Link vs button?", options: ["Sama", "Link: navigasi; Button: aksi", "Button: navigasi", "Bebas"], correctAnswer: 1 },
    { question: "Skip link untuk?", options: ["SEO", "Bypass ke konten utama", "Skip CSS", "Loading cepat"], correctAnswer: 1 },
    { question: "WCAG target level?", options: ["A", "AA", "AAA", "Bebas"], correctAnswer: 1 },
    { question: "Label form harus?", options: ["Placeholder", "Terhubung via for/id", "Title", "Tidak perlu"], correctAnswer: 1 }
  ],

  codeExamples: []
};