export const chapter = {
  slug: "web-components-quiz",
  title: "Quiz Akhir Web Components",
  description: "Uji pemahamanmu tentang Web Components.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-components-best-practices"],
  tags: ["web-components", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `## Quiz Akhir Web Components\n\n10 soal.`,
  quiz: [
    { question: "Web Components: framework?", options: ["Yes", "No (web standard)", "React only", "Angular only"], correctAnswer: 1 },
    { question: "3 technologies?", options: ["HTML,CSS,JS", "Custom Elements, Shadow DOM, Templates", "React,Vue,Angular", "Node,Express,Next"], correctAnswer: 1 },
    { question: "Custom element name?", options: ["Any", "Must contain dash (-)", "Uppercase", "No rules"], correctAnswer: 1 },
    { question: "Shadow DOM: style?", options: ["Leaks", "Encapsulated (no leak)", "Global", "Inline only"], correctAnswer: 1 },
    { question: "<template>?", options: ["Rendered", "Inert (not rendered)", "CSS", "Script"], correctAnswer: 1 },
    { question: "<slot>?", options: ["Style", "Composition", "Script", "Attribute"], correctAnswer: 1 },
    { question: "connectedCallback?", options: ["Constructor", "Element added to DOM", "Attribute change", "Disconnected"], correctAnswer: 1 },
    { question: ":host?", options: ["Child element", "Shadow host itself", "Slot", "Template"], correctAnswer: 1 },
    { question: "shadowRoot: 'open'?", options: ["JS access", "No JS access", "Faster", "Deprecated"], correctAnswer: 0 },
    { question: "CSS ::part()?", options: ["No access", "Style internal elements from outside", "Shadow only", "Template only"], correctAnswer: 1 }
  ]
};