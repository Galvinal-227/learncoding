export const chapter = {
  slug: "parcel-quiz",
  title: "Quiz Akhir Parcel",
  description: "Uji pemahamanmu tentang Parcel bundler.",
  icon: "SiParcel",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["parcel-api"],
  tags: ["parcel", "quiz"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Parcel\n\n10 soal.`,
  quiz: [
    { question: "Parcel vs Webpack?", options: ["Sama", "Parcel: zero-config; Webpack: complex", "Webpack mudah", "Parcel lambat"], correctAnswer: 1 },
    { question: "Parcel command?", options: ["parcel start", "npx parcel index.html", "parcel run", "parcel init"], correctAnswer: 1 },
    { question: "Parcel: config file?", options: ["Wajib", "Optional (zero-config)", "Tidak ada", "JSON only"], correctAnswer: 1 },
    { question: "HMR?", options: ["Reload", "Hot Module Replacement", "Build", "Error"], correctAnswer: 1 },
    { question: "Code splitting?", options: ["Manual", "Dynamic import() → auto split", "Config only", "Not supported"], correctAnswer: 1 },
    { question: "SCSS in Parcel?", options: ["Not supported", "Auto (install sass)", "Manual config", "Webpack only"], correctAnswer: 1 },
    { question: ".parcelrc?", options: ["Package list", "Parcel config file", "CSS file", "HTML"], correctAnswer: 1 },
    { question: "Tree shaking?", options: ["Manual", "Auto remove unused code", "Config only", "Not supported"], correctAnswer: 1 },
    { question: "Parcel API?", options: ["CLI only", "Programmatic API", "REST", "GraphQL"], correctAnswer: 1 },
    { question: "parcel build --public-url?", options: ["Local", "CDN/asset prefix", "Debug", "Output dir"], correctAnswer: 1 }
  ]
};