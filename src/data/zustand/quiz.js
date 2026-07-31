export const chapter = {
  slug: "zustand-quiz",
  title: "Quiz Akhir Zustand",
  description: "Uji pemahamanmu tentang state management dengan Zustand.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["zustand-devtools"],
  tags: ["zustand", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Zustand\n\n10 soal.`,
  quiz: [
    { question: "Zustand vs Redux?", options: ["Same", "Zustand: simpler, smaller, no Provider", "Redux smaller", "Zustand complex"], correctAnswer: 1 },
    { question: "Zustand: Provider?", options: ["Required", "Not needed!", "Optional", "Redux only"], correctAnswer: 1 },
    { question: "set() merge?", options: ["Replace all", "Auto-merge (partial)", "Delete", "Error"], correctAnswer: 1 },
    { question: "get()?", options: ["React only", "Access state anywhere", "Hook only", "Provider"], correctAnswer: 1 },
    { question: "Zustand: async?", options: ["Not possible", "Built-in (async/await)", "Need thunk", "Need saga"], correctAnswer: 1 },
    { question: "Selector?", options: ["All state", "Pick specific value", "Hook", "Component"], correctAnswer: 1 },
    { question: "persist middleware?", options: ["DevTools", "Save to localStorage", "Immer", "Redux"], correctAnswer: 1 },
    { question: "devtools middleware?", options: ["Persist", "Redux DevTools", "Immer", "Storage"], correctAnswer: 1 },
    { question: "useShallow?", options: ["Deep", "Shallow compare", "No compare", "Deep copy"], correctAnswer: 1 },
    { question: "multiple stores?", options: ["Not allowed", "✅ Recommended (separation of concerns)", "Redux only", "Single only"], correctAnswer: 1 }
  ]
};