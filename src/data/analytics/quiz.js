export const chapter = {
  slug: "analytics-quiz",
  title: "Quiz Akhir Analytics",
  description: "Uji pemahamanmu tentang web analytics dan tracking.",
  icon: "SiGoogleanalytics",
  color: "#E37400",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["analytics-privacy"],
  tags: ["analytics", "quiz"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Web Analytics\n\n15 soal.`,

  quiz: [
    { question: "Web Analytics adalah?", options: ["SEO", "Mengumpulkan data penggunaan website", "Database", "Framework"], correctAnswer: 1 },
    { question: "GA4 berbasis?", options: ["Session", "Event", "Page", "Cookie"], correctAnswer: 1 },
    { question: "Format Measurement ID GA4?", options: ["UA-XXXX", "G-XXXXXXXXXX", "GTM-XXXX", "AW-XXXX"], correctAnswer: 1 },
    { question: "Mixpanel fokus ke?", options: ["SEO", "Product analytics", "Server", "Email"], correctAnswer: 1 },
    { question: "mixpanel.identify() untuk?", options: ["Track event", "Identifikasi user", "Hapus data", "Logout"], correctAnswer: 1 },
    { question: "Custom events untuk?", options: ["Hiasan", "Aksi bisnis spesifik", "Gratis", "Wajib"], correctAnswer: 1 },
    { question: "GTM singkatan?", options: ["Google Tag Manager", "Google Track Module", "Global Tag Marketing", "General Traffic Monitor"], correctAnswer: 0 },
    { question: "GDPR berlaku di?", options: ["Global", "Uni Eropa", "USA", "Asia"], correctAnswer: 1 },
    { question: "Cookie consent harus?", options: ["Otomatis", "Opt-in", "Opt-out", "Tidak perlu"], correctAnswer: 1 },
    { question: "Bounce rate mengukur?", options: ["Kecepatan", "User keluar tanpa interaksi", "Klik", "Revenue"], correctAnswer: 1 },
    { question: "PII yang tidak boleh dilacak?", options: ["Page view", "Klik", "Email/nama user", "Session"], correctAnswer: 2 },
    { question: "Tool analytics privacy-first?", options: ["GA4", "Plausible", "Mixpanel", "Amplitude"], correctAnswer: 1 },
    { question: "gtag() function untuk?", options: ["CSS", "Kirim event ke GA4", "Database", "Animasi"], correctAnswer: 1 },
    { question: "DebugView di GA4 untuk?", options: ["Production", "Real-time debug events", "Report", "Admin"], correctAnswer: 1 },
    { question: "Conversion paling penting e-commerce?", options: ["Page view", "Scroll", "Purchase", "Click"], correctAnswer: 2 }
  ],

  codeExamples: []
};