export const chapter = {
  slug: "webpack-quiz",
  title: "Quiz Akhir Webpack",
  description: "Uji pemahamanmu tentang Webpack module bundler.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["webpack-production-build"],
  tags: ["webpack", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Webpack\n\n10 soal.`,
  quiz: [
    { question: "Webpack vs Vite?", options: ["Same", "Webpack: complex; Vite: fast minimal", "Vite complex", "Webpack deprecated"], correctAnswer: 1 },
    { question: "Entry?", options: ["Output", "Starting point", "Plugin", "Loader"], correctAnswer: 1 },
    { question: "Loader order?", options: ["Left to right", "Right to left", "Random", "Alpha"], correctAnswer: 1 },
    { question: "HtmlWebpackPlugin?", options: ["CSS", "Generate HTML", "Minify", "Copy"], correctAnswer: 1 },
    { question: "HMR?", options: ["Reload", "Hot Module Replacement", "Build", "Error"], correctAnswer: 1 },
    { question: "Code splitting?", options: ["One bundle", "Split into chunks", "Minify", "Tree shake"], correctAnswer: 1 },
    { question: "Tree shaking?", options: ["Add code", "Remove unused code", "Split", "Cache"], correctAnswer: 1 },
    { question: "[contenthash]?", options: ["Build hash", "Content-based hash", "Chunk ID", "Name"], correctAnswer: 1 },
    { question: "mode: 'production'?", options: ["Debug", "Auto minify+optimize", "Dev", "Watch"], correctAnswer: 1 },
    { question: "TerserPlugin?", options: ["CSS", "Minify JS", "HTML", "Copy"], correctAnswer: 1 }
  ]
};