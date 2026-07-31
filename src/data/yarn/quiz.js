export const chapter = {
  slug: "yarn-quiz",
  title: "Quiz Akhir Yarn",
  description: "Uji pemahamanmu tentang Yarn package manager.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["yarn-zero-installs"],
  tags: ["yarn", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Yarn\n\n10 soal.`,
  quiz: [
    { question: "Yarn dibuat oleh?", options: ["Google", "Meta (Facebook)", "Microsoft", "Vercel"], correctAnswer: 1 },
    { question: "yarn.lock?", options: ["Log", "Deterministic lock file", "Config", "Cache"], correctAnswer: 1 },
    { question: "yarn add -D?", options: ["Production", "Dev dependency", "Global", "Peer"], correctAnswer: 1 },
    { question: "yarn dlx?", options: ["Delete", "Like npx (run without install)", "Install", "Build"], correctAnswer: 1 },
    { question: "workspaces config?", options: ["package.json", "Root package.json workspaces field", ".workspaces", "yarn.json"], correctAnswer: 1 },
    { question: "yarn workspace?", options: ["All", "Target specific workspace", "Install", "Publish"], correctAnswer: 1 },
    { question: "PnP?", options: ["node_modules", "Plug'n'Play (no node_modules)", "Cache", "Lock"], correctAnswer: 1 },
    { question: "Zero-Installs?", options: ["No deps", "Dependencies in Git", "No lock", "No scripts"], correctAnswer: 1 },
    { question: "yarn why?", options: ["Debug", "Why is a package installed?", "Remove", "Update"], correctAnswer: 1 },
    { question: "Yarn vs NPM: install?", options: ["npm install", "yarn add", "yarn install", "B and C"], correctAnswer: 3 }
  ]
};