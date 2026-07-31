export const chapter = {
  slug: "pnpm-quiz",
  title: "Quiz Akhir PNPM",
  description: "Uji pemahamanmu tentang PNPM package manager.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["pnpm-commands"],
  tags: ["pnpm", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir PNPM\n\n10 soal.`,
  quiz: [
    { question: "PNPM vs NPM: disk?", options: ["Sama", "PNPM: hemat (global store + symlinks)", "NPM hemat", "Sama boros"], correctAnswer: 1 },
    { question: "pnpm install?", options: ["NPM", "Install dependencies", "Build", "Publish"], correctAnswer: 1 },
    { question: "pnpm-workspace.yaml?", options: ["Package", "Workspace config", "Lock", "Script"], correctAnswer: 1 },
    { question: "--filter flag?", options: ["Search", "Target specific package", "Install all", "Publish"], correctAnswer: 1 },
    { question: "Phantom dependency?", options: ["Declared", "Accessible but NOT declared", "Dev only", "Production"], correctAnswer: 1 },
    { question: "pnpm store prune?", options: ["Install", "Remove unused from store", "Update", "List"], correctAnswer: 1 },
    { question: "pnpm add -D?", options: ["Production", "Dev dependency", "Global", "Optional"], correctAnswer: 1 },
    { question: "pnpm --filter @app/web...?", options: ["Only web", "Web + its dependencies", "Only deps", "All"], correctAnswer: 1 },
    { question: "...[origin/main]?", options: ["All", "Packages changed since main", "Main only", "Origin"], correctAnswer: 1 },
    { question: "pnpm import?", options: ["NPM", "Import yarn.lock to pnpm", "Build", "Publish"], correctAnswer: 1 }
  ]
};