export const chapter = {
  slug: "eslint-quiz",
  title: "Quiz Akhir ESLint",
  description: "Uji pemahamanmu tentang ESLint.",
  icon: "SiEslint",
  color: "#4B32C3",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["eslint-custom-rules"],
  tags: ["eslint", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir ESLint\n\n10 soal.`,
  quiz: [
    { question: "ESLint adalah?", options: ["Formatter", "Static code analysis", "Bundler", "Testing"], correctAnswer: 1 },
    { question: "Flat config file?", options: [".eslintrc", "eslint.config.js", ".eslint.json", "eslint.yml"], correctAnswer: 1 },
    { question: "Severity error?", options: ["off", "warn", "error / 2", "info"], correctAnswer: 2 },
    { question: "eqeqeq rule?", options: ["Debug", "Wajib ===", "Larang ==", "Ga guna"], correctAnswer: 1 },
    { question: "eslint-config-prettier?", options: ["Format", "Matikan rules konflik", "Install", "Bundling"], correctAnswer: 1 },
    { question: "Plugin React hooks?", options: ["eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-jsx", "eslint-plugin-hook"], correctAnswer: 1 },
    { question: "Airbnb config?", options: ["eslint-config-airbnb", "eslint-airbnb", "airbnb-eslint", "plugin-airbnb"], correctAnswer: 0 },
    { question: "Custom rule di-test pakai?", options: ["Jest", "RuleTester", "Mocha", "Cypress"], correctAnswer: 1 },
    { question: "ESLint vs Prettier?", options: ["Sama", "ESLint: quality; Prettier: formatting", "Prettier cari bug", "ESLint deprecated"], correctAnswer: 1 },
    { question: "eslint --fix untuk?", options: ["Hapus", "Auto-perbaiki rules", "Debug", "Install"], correctAnswer: 1 }
  ]
};