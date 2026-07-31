export const chapter = {
  slug: "prompt-engineering-quiz",
  title: "Quiz Akhir Prompt Engineering",
  description: "Uji pemahamanmu tentang seni menulis prompt untuk AI.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prompt-engineering-tools"],
  tags: ["prompt-engineering", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Prompt Engineering\n\n10 soal.`,
  quiz: [
    { question: "Prompt Engineering?", options: ["Coding", "Seni menulis instruksi untuk AI", "Hardware", "Database"], correctAnswer: 1 },
    { question: "Zero-shot?", options: ["With examples", "No examples, direct instruction", "Many examples", "Chain"], correctAnswer: 1 },
    { question: "CoT?", options: ["Direct answer", "Step-by-step reasoning", "No thinking", "Random"], correctAnswer: 1 },
    { question: "Few-shot: ideal examples?", options: ["1", "3-5 consistent examples", "20+", "No examples"], correctAnswer: 1 },
    { question: "Role Prompting?", options: ["No role", "Give AI specific persona/expertise", "Just name", "No context"], correctAnswer: 1 },
    { question: "System Prompt?", options: ["User input", "Initial instructions (role, rules, format)", "API key", "Database"], correctAnswer: 1 },
    { question: "Self-Consistency?", options: ["One answer", "Multiple answers, pick most consistent", "Chain", "Tree"], correctAnswer: 1 },
    { question: "OpenAI Playground?", options: ["Code editor", "Test prompts with GPT", "Database", "Deploy"], correctAnswer: 1 },
    { question: "PromptLayer?", options: ["Testing", "Version control prompts", "Database", "Auth"], correctAnswer: 1 },
    { question: "Best prompt principle?", options: ["Short", "Be Specific (detail & context)", "Long", "No examples"], correctAnswer: 1 }
  ]
};