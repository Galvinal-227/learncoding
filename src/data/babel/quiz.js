export const chapter = {
  slug: "babel-quiz",
  title: "Quiz Akhir Babel",
  description: "Uji pemahamanmu tentang Babel dan JavaScript compilation.",
  icon: "SiBabel",
  color: "#F9DC3E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["babel-integration"],
  tags: ["babel", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Babel\n\n10 soal.`,

  quiz: [
    { question: "Babel adalah?", options: ["Bundler", "JavaScript compiler", "Framework", "Testing tool"], correctAnswer: 1 },
    { question: "Preset terpenting Babel?", options: ["@babel/preset-react", "@babel/preset-env", "@babel/preset-flow", "@babel/preset-minify"], correctAnswer: 1 },
    { question: "Browserslist untuk?", options: ["Daftar plugin", "Daftar browser target", "Daftar file", "Daftar error"], correctAnswer: 1 },
    { question: "Plugin vs Preset?", options: ["Sama", "Plugin: satu fitur; Preset: kumpulan", "Preset lebih kecil", "Plugin deprecated"], correctAnswer: 1 },
    { question: "useBuiltIns: 'usage'?", options: ["Semua polyfill", "Auto polyfill sesuai kode", "Tidak polyfill", "Manual import"], correctAnswer: 1 },
    { question: "File konfigurasi recommended?", options: [".babelrc", "babel.config.js", "package.json", "webpack.config.js"], correctAnswer: 1 },
    { question: "AST singkatan?", options: ["Abstract Syntax Tree", "Auto Script Transform", "Async System Tool", "Application State"], correctAnswer: 0 },
    { question: "Babel + TypeScript: type check?", options: ["Ya", "Tidak, hanya hapus types", "Dengan plugin", "Otomatis"], correctAnswer: 1 },
    { question: "Loader Babel untuk Webpack?", options: ["js-loader", "babel-loader", "es6-loader", "babel-webpack"], correctAnswer: 1 },
    { question: "Plugin transform-runtime untuk?", options: ["Production", "Library (no global pollution)", "Testing", "Browser only"], correctAnswer: 1 }
  ],

  codeExamples: []
};