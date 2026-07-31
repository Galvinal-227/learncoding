export const chapter = {
  slug: "prettier-quiz",
  title: "Quiz Akhir Prettier",
  description: "Uji pemahamanmu tentang Prettier code formatter.",
  icon: "SiPrettier",
  color: "#F7B93E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["prettier-eslint-prettier"],
  tags: ["prettier", "quiz"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Prettier\n\n10 soal.`,
  quiz: [
    { question: "Prettier vs ESLint?", options: ["Same", "Prettier: formatter; ESLint: code quality", "ESLint: formatter", "Unrelated"], correctAnswer: 1 },
    { question: "Prettier opinionated?", options: ["Many options", "Opinionated (few options)", "No options", "Custom all"], correctAnswer: 1 },
    { question: "semi: true?", options: ["No semicolon", "Add semicolons", "Ignore", "Error"], correctAnswer: 1 },
    { question: "VS Code: formatOnSave?", options: ["Manual", "Auto-format on save", "Command", "Terminal"], correctAnswer: 1 },
    { question: ".prettierignore?", options: ["Format rules", "Files to exclude", "Plugin", "Config"], correctAnswer: 1 },
    { question: "eslint-config-prettier?", options: ["Format", "Turn off conflicting ESLint rules", "Lint", "Plugin"], correctAnswer: 1 },
    { question: "Prettier config position?", options: ["First", "LAST (override)", "Middle", "Anywhere"], correctAnswer: 1 },
    { question: "lint-staged?", options: ["All files", "Run on staged files (pre-commit)", "Production", "CI"], correctAnswer: 1 },
    { question: "prettier-ignore?", options: ["File", "Inline comment (skip formatting)", "Config", "CLI"], correctAnswer: 1 },
    { question: "trailingComma: 'es5'?", options: ["None", "Trailing comma in ES5 (arrays, objects)", "All", "Functions"], correctAnswer: 1 }
  ]
};