export const chapter = {
  slug: "vite-quiz",
  title: "Quiz Akhir Vite",
  description: "Uji pemahamanmu tentang Vite build tool.",
  icon: "SiVite",
  color: "#646CFF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["vite-library-mode"],
  tags: ["vite", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `## Quiz Akhir Vite\n\n10 soal.`,
  quiz: [
    { question: "Vite: dev bundle?", options: ["Yes", "No (Native ESM)", "Webpack", "Parcel"], correctAnswer: 1 },
    { question: "esbuild?", options: ["Bundler", "Go pre-bundler (fast)", "Plugin", "CSS"], correctAnswer: 1 },
    { question: "Vite port?", options: ["3000", "5173", "8080", "8000"], correctAnswer: 1 },
    { question: "HMR?", options: ["Reload", "Hot Module Replacement", "Build", "Error"], correctAnswer: 1 },
    { question: "Vite build uses?", options: ["Webpack", "Rollup", "esbuild", "Parcel"], correctAnswer: 1 },
    { question: "VITE_ prefix?", options: ["Ignore", "Required for client exposure", "Optional", "Server only"], correctAnswer: 1 },
    { question: "@vitejs/plugin-react?", options: ["Vue", "React Fast Refresh", "Svelte", "Legacy"], correctAnswer: 1 },
    { question: "import.meta.env?", options: ["Node process", "Vite env variables", "Window", "Global"], correctAnswer: 1 },
    { question: "Library mode?", options: ["App only", "Build as reusable library", "Dev only", "Not possible"], correctAnswer: 1 },
    { question: "Vite index.html?", options: ["src/", "Root directory", "public/", "dist/"], correctAnswer: 1 }
  ]
};