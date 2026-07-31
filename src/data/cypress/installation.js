export const chapter = {
  slug: "cypress-installation",
  title: "Instalasi & Setup",
  description: "Install Cypress dan konfigurasi untuk project kamu.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["cypress-introduction"],
  tags: ["cypress", "install", "setup", "config"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Instalasi

\`\`\`bash
# NPM
npm install --save-dev cypress

# Yarn
yarn add -D cypress

# PNPM
pnpm add -D cypress
\`\`\`

## Buka Cypress

\`\`\`bash
# Buka Test Runner (GUI)
npx cypress open

# Jalankan di terminal (headless)
npx cypress run
\`\`\`

## Struktur Folder

\`\`\`
project/
├── cypress/
│   ├── e2e/              # Test files (*.cy.js)
│   │   ├── login.cy.js
│   │   └── checkout.cy.js
│   ├── fixtures/         # Mock data (JSON)
│   │   └── user.json
│   ├── support/          # Custom commands & setup
│   │   ├── commands.js
│   │   └── e2e.js
│   └── downloads/        # Downloaded files
├── cypress.config.js     # Konfigurasi
└── package.json
\`\`\`

## Konfigurasi (cypress.config.js)

\`\`\`javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        viewportWidth: 1280,
        viewportHeight: 720,
        defaultCommandTimeout: 10000,
        video: true,
        screenshotOnRunFailure: true,
        
        setupNodeEvents(on, config) {
            // Implement node event listeners here
        }
    },
    
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite'
        }
    }
});
\`\`\`

## NPM Scripts

\`\`\`json
{
    "scripts": {
        "cy:open": "cypress open",
        "cy:run": "cypress run",
        "cy:run:chrome": "cypress run --browser chrome",
        "cy:run:headless": "cypress run --headless",
        "test:e2e": "start-server-and-test dev http://localhost:3000 cy:run"
    }
}
\`\`\`

## Environment Variables

\`\`\`bash
# .env
CYPRESS_BASE_URL=http://localhost:3000
CYPRESS_USER_EMAIL=test@example.com
CYPRESS_USER_PASSWORD=test123
\`\`\`

\`\`\`javascript
// Di test
cy.visit(Cypress.env('BASE_URL'));
const email = Cypress.env('USER_EMAIL');
\`\`\`

## TypeScript Support

\`\`\`json
// tsconfig.json
{
    "compilerOptions": {
        "types": ["cypress"]
    }
}
\`\`\`
  `,

  quiz: [
    { question: "Perintah buka Cypress GUI?", options: ["cypress start", "cypress open", "cypress launch", "cypress gui"], correctAnswer: 1 },
    { question: "Folder untuk mock data?", options: ["e2e/", "fixtures/", "support/", "mocks/"], correctAnswer: 1 },
    { question: "File konfigurasi Cypress?", options: [".cypressrc", "cypress.config.js", "cypress.json", "cypress.yml"], correctAnswer: 1 }
  ],

  codeExamples: []
};