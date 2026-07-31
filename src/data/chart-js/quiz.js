export const chapter = {
  slug: "chart-js-quiz",
  title: "Quiz Akhir Chart.js",
  description: "Uji pemahamanmu tentang Chart.js.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["chart-js-plugins"],
  tags: ["chartjs", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Chart.js\n\n10 soal.`,

  quiz: [
    { question: "Chart.js berbasis?", options: ["SVG", "Canvas", "WebGL", "DOM"], correctAnswer: 1 },
    { question: "Tipe untuk data time series?", options: ["Pie", "Line", "Doughnut", "Polar"], correctAnswer: 1 },
    { question: "Horizontal bar pakai?", options: ["horizontal:true", "indexAxis:'y'", "flip:true", "rotate:90"], correctAnswer: 1 },
    { question: "Properti lubang doughnut?", options: ["hole", "cutout", "radius", "inner"], correctAnswer: 1 },
    { question: "Kurva halus line chart?", options: ["smooth", "tension", "curve", "bezier"], correctAnswer: 1 },
    { question: "Font global diatur di?", options: ["CSS", "Chart.defaults.font", "options.font", "HTML"], correctAnswer: 1 },
    { question: "Plugin data labels?", options: ["chartjs-plugin-zoom", "chartjs-plugin-datalabels", "chartjs-plugin-annotation", "chartjs-plugin-drag"], correctAnswer: 1 },
    { question: "React wrapper Chart.js?", options: ["react-chart", "react-chartjs-2", "chartjs-react", "react-canvas"], correctAnswer: 1 },
    { question: "Tree shaking untuk?", options: ["Styling", "Kurangi bundle size", "Debugging", "Testing"], correctAnswer: 1 },
    { question: "Callback tooltip untuk?", options: ["Animasi", "Format teks kustom", "Warna", "Hapus tooltip"], correctAnswer: 1 }
  ],

  codeExamples: []
};