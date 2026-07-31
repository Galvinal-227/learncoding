export const chapter = {
  slug: "error-monitoring-quiz",
  title: "Quiz Akhir Error Monitoring",
  description: "Uji pemahamanmu tentang error monitoring di production.",
  icon: "SiSentry",
  color: "#362D59",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["error-monitoring-alerting"],
  tags: ["error-monitoring", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Error Monitoring\n\n10 soal.`,
  quiz: [
    { question: "Tool error monitoring populer?", options: ["Google Analytics", "Sentry", "MongoDB", "Docker"], correctAnswer: 1 },
    { question: "Sentry.init() properti wajib?", options: ["environment", "dsn", "release", "sampleRate"], correctAnswer: 1 },
    { question: "Breadcrumbs untuk?", options: ["Debug", "Jejak user sebelum error", "Logging", "Performance"], correctAnswer: 1 },
    { question: "LogRocket merekam?", options: ["Error only", "Session user seperti video", "Network only", "Console only"], correctAnswer: 1 },
    { question: "beforeSend untuk?", options: ["Kirim email", "Filter event sebelum kirim", "Cache", "Redirect"], correctAnswer: 1 },
    { question: "PII scrubbing?", options: ["Hapus error", "Hapus data sensitif", "Compress", "Encrypt"], correctAnswer: 1 },
    { question: "Source maps untuk?", options: ["Mempercepat", "Lihat kode asli dari minified", "Hiasan", "Backup"], correctAnswer: 1 },
    { question: "Production source map type?", options: ["source-map", "hidden-source-map", "inline", "none"], correctAnswer: 1 },
    { question: "Alerting channel umum?", options: ["SMS", "Slack", "Fax", "Telepon"], correctAnswer: 1 },
    { question: "Data yang TIDAK BOLEH dikirim?", options: ["Stack trace", "Password & token", "Browser info", "URL"], correctAnswer: 1 }
  ]
};