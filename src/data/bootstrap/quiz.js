export const chapter = {
  slug: "bootstrap-quiz",
  title: "Quiz Akhir Bootstrap",
  description: "Uji pemahamanmu tentang Bootstrap 5.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["bootstrap-rtl"],
  tags: ["bootstrap", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Bootstrap\n\n15 soal.`,

  quiz: [
    { question: "Bootstrap 5 hilangkan dependensi?", options: ["CSS", "jQuery", "JavaScript", "SASS"], correctAnswer: 1 },
    { question: "Grid system berapa kolom?", options: ["6", "10", "12", "24"], correctAnswer: 2 },
    { question: "Breakpoint 'md' minimal lebar?", options: ["576px", "768px", "992px", "1200px"], correctAnswer: 1 },
    { question: "Class tombol utama?", options: ["btn btn-main", "btn btn-primary", "btn btn-first", "btn btn-blue"], correctAnswer: 1 },
    { question: "Class card di Bootstrap?", options: [".panel", ".box", ".card", ".widget"], correctAnswer: 2 },
    { question: "Class input Bootstrap?", options: ["form-input", "form-control", "input-field", "bootstrap-input"], correctAnswer: 1 },
    { question: "Plugin Bootstrap 5 pakai?", options: ["jQuery", "Vanilla JavaScript", "React", "Angular"], correctAnswer: 1 },
    { question: "Attribute trigger modal?", options: ["data-toggle", "data-bs-toggle", "data-modal", "data-open"], correctAnswer: 1 },
    { question: "Class margin-bottom 1rem?", options: ["mb-1", "mb-3", "mb-4", "mb-0"], correctAnswer: 1 },
    { question: "Hidden mobile, tampil desktop?", options: ["d-md-none", "d-none d-md-block", "hidden-mobile", "show-desktop"], correctAnswer: 1 },
    { question: "Dark mode Bootstrap 5.3?", options: ["class .dark", "data-bs-theme='dark'", "@media dark", "JavaScript only"], correctAnswer: 1 },
    { question: "Atribut HTML untuk RTL?", options: ["lang='rtl'", "dir='rtl'", "direction='rtl'", "rtl='true'"], correctAnswer: 1 },
    { question: "Cara terbaik kustomisasi Bootstrap?", options: ["Edit CSS langsung", "Override SASS variables", "Inline styles", "!important"], correctAnswer: 1 },
    { question: "Floating label class?", options: [".float-label", ".form-floating", ".label-float", ".floating-input"], correctAnswer: 1 },
    { question: "Tooltip init?", options: ["$('.tooltip').tooltip()", "new bootstrap.Tooltip(el)", "el.tooltip()", "bootstrap.tooltip(el)"], correctAnswer: 1 }
  ],

  codeExamples: []
};