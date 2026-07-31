export const chapter = {
  slug: "cypress-ci-integration",
  title: "CI/CD Integration",
  description: "Integrasikan Cypress ke CI/CD pipeline: GitHub Actions, GitLab CI.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["cypress-custom-commands"],
  tags: ["cypress", "ci-cd", "github-actions", "pipeline"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitHub Actions

\`\`\`yaml
# .github/workflows/cypress.yml
name: Cypress Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chrome, firefox, edge]
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build app
        run: npm run build
      
      - name: Cypress run
        uses: cypress-io/github-action@v6
        with:
          start: npm start
          wait-on: 'http://localhost:3000'
          browser: \${{ matrix.browser }}
          record: true
        env:
          CYPRESS_RECORD_KEY: \${{ secrets.CYPRESS_RECORD_KEY }}
      
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: cypress-screenshots
          path: cypress/screenshots
\`\`\`

## Cypress Dashboard

\`\`\`bash
npm install --save-dev cypress
npx cypress open
# Connect ke Cypress Cloud untuk recording, parallelization, analytics
\`\`\`

## Parallel Testing

\`\`\`yaml
# Di GitHub Actions
strategy:
  fail-fast: false
  matrix:
    containers: [1, 2, 3, 4]

steps:
  - uses: cypress-io/github-action@v6
    with:
      parallel: true
      group: 'Electron'
\`\`\`
  `,

  quiz: [
    { question: "GitHub Actions: Cypress action?", options: ["cypress-io/github-action", "cypress/action", "e2e/cypress", "test/cypress"], correctAnswer: 0 },
    { question: "Cypress Dashboard untuk?", options: ["Debug", "Recording, parallel, analytics", "Coding", "Deploy"], correctAnswer: 1 }
  ],

  codeExamples: []
};