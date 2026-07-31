export const chapter = {
  slug: "markdown-quiz",
  title: "Quiz Akhir Markdown",
  description: "Uji pemahamanmu tentang Markdown.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["markdown-tools"],
  tags: ["markdown", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Markdown\n\n10 soal.`,
  quiz: [
    { question: "Markdown dibuat?", options: ["Tim Berners-Lee", "John Gruber", "Linus", "Mark"], correctAnswer: 1 },
    { question: "Bold text?", options: ["*text*", "**text**", "`text`", "[text]"], correctAnswer: 1 },
    { question: "Inline code?", options: ["**code**", "`code`", "[code]", "(code)"], correctAnswer: 1 },
    { question: "Fenced code block?", options: ["``````", "```", "---", "==="], correctAnswer: 1 },
    { question: "Center alignment?", options: [":---", ":---:", "---:", "---"], correctAnswer: 1 },
    { question: "Task list?", options: ["- [ ] item", "- item", "* item", "1. item"], correctAnswer: 0 },
    { question: "GitHub alerts?", options: ["**NOTE**", "> [!NOTE]", "> NOTE:", "> **NOTE**"], correctAnswer: 1 },
    { question: "MDX?", options: ["Database", "Markdown + JSX", "CMS", "CSS framework"], correctAnswer: 1 },
    { question: "VS Code preview?", options: ["Ctrl+P", "Ctrl+Shift+V", "F5", "Alt+P"], correctAnswer: 1 },
    { question: "GFM?", options: ["Good Format", "GitHub Flavored Markdown", "General File", "Global Format"], correctAnswer: 1 }
  ]
};