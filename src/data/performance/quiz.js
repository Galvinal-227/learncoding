export const chapter = {
  slug: "performance-quiz",
  title: "Quiz Akhir Performance",
  description: "Uji pemahamanmu tentang web performance optimization.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["performance-bundle-analyzer"],
  tags: ["performance", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Performance\n\n15 soal.`,
  quiz: [
    { question: "3s load = bounce?", options: ["10%", "53%", "90%", "0%"], correctAnswer: 1 },
    { question: "LCP target?", options: ["<1s", "<2.5s", "<5s", "<10s"], correctAnswer: 1 },
    { question: "CLS?", options: ["Speed", "Layout shift (visual stability)", "Network", "Memory"], correctAnswer: 1 },
    { question: "Core Web Vitals?", options: ["FCP,TTI,TBT", "LCP,INP,CLS", "FID,LCP,CLS", "Speed,Size,Load"], correctAnswer: 1 },
    { question: "loading='lazy'?", options: ["Eager", "Native lazy load", "Preload", "No load"], correctAnswer: 1 },
    { question: "Dynamic import?", options: ["Static", "import() on demand", "require()", "CSS"], correctAnswer: 1 },
    { question: "Cache-Control: immutable?", options: ["Never", "File never changes", "Short", "No cache"], correctAnswer: 1 },
    { question: "WebP/AVIF?", options: ["Old", "Modern image formats", "Video", "Audio"], correctAnswer: 1 },
    { question: "Brotli vs Gzip?", options: ["Same", "Brotli: better compression (smaller)", "Gzip better", "Both same"], correctAnswer: 1 },
    { question: "font-display: swap?", options: ["Hide text", "Show fallback font, swap when ready", "No font", "Block"], correctAnswer: 1 },
    { question: "Webpack Bundle Analyzer?", options: ["Debug", "Visualize bundle size", "Test", "Lint"], correctAnswer: 1 },
    { question: "TTFB?", options: ["Render", "Time to First Byte (server)", "Interactive", "Paint"], correctAnswer: 1 },
    { question: "Intersection Observer?", options: ["CSS", "Detect element visibility", "HTTP", "DB"], correctAnswer: 1 },
    { question: "srcset?", options: ["One size", "Responsive images", "CSS", "JS"], correctAnswer: 1 },
    { question: "Lighthouse score 90+?", options: ["Poor", "Good (green)", "Needs work", "Average"], correctAnswer: 1 }
  ]
};