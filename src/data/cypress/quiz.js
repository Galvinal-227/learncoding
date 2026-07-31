export const chapter = {
  slug: "cypress-quiz",
  title: "Quiz Akhir Cypress",
  description: "Uji pemahamanmu tentang Cypress E2E testing.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["cypress-ci-integration"],
  tags: ["cypress", "quiz"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Cypress\n\n10 soal.`,
  quiz: [
    { question: "Cypress vs Selenium?", options: ["Sama", "Cypress: in-browser, time travel; Selenium: remote", "Selenium lebih cepat", "Cypress deprecated"], correctAnswer: 1 },
    { question: "Buka Cypress GUI?", options: ["cypress start", "cypress open", "cypress gui", "cypress launch"], correctAnswer: 1 },
    { question: "Mock API request?", options: ["cy.mock()", "cy.intercept()", "cy.stub()", "cy.fake()"], correctAnswer: 1 },
    { question: "Cek element visible?", options: [".visible()", ".should('be.visible')", ".isVisible()", ".exists()"], correctAnswer: 1 },
    { question: "Custom commands file?", options: ["cypress.config.js", "commands.js", "test.cy.js", "fixtures.json"], correctAnswer: 1 },
    { question: "Fixture untuk?", options: ["UI component", "Mock data", "Test config", "Plugin"], correctAnswer: 1 },
    { question: "it.only()?", options: ["Skip", "Hanya jalankan test ini", "Debug", "Hapus"], correctAnswer: 1 },
    { question: "data attribute testing?", options: ["id", "class", "data-testid", "name"], correctAnswer: 2 },
    { question: "GitHub Actions Cypress?", options: ["cypress-io/github-action", "cypress/ci", "action/cypress", "ci/cypress"], correctAnswer: 0 },
    { question: "beforeEach vs before?", options: ["Sama", "beforeEach: setiap test; before: sekali", "before lebih cepat", "beforeEach deprecated"], correctAnswer: 1 }
  ]
};