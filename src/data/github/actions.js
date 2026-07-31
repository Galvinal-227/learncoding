export const chapter = {
  slug: "github-actions",
  title: "GitHub Actions (CI/CD)",
  description: "Otomatisasi workflow dengan GitHub Actions: test, build, deploy.",
  icon: "SiGithubactions",
  color: "#2088FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["github-repository"],
  tags: ["github", "actions", "ci-cd", "automation"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitHub Actions

CI/CD built-in GitHub. Workflow dikonfigurasi dengan YAML di \`.github/workflows/\`.

## Workflow Dasar (Node.js)

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
\`\`\`

## Deploy ke Vercel

\`\`\`yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

## Secrets

\`\`\`
Settings → Secrets and variables → Actions → New repository secret:
- VERCEL_TOKEN
- DATABASE_URL
- API_KEY
\`\`\`

## Marketplace Actions Populer

| Action | Fungsi |
|--------|--------|
| **actions/checkout** | Clone repository |
| **actions/setup-node** | Setup Node.js |
| **peaceiris/actions-gh-pages** | Deploy ke GitHub Pages |
| **cypress-io/github-action** | Run Cypress tests |
| **docker/build-push-action** | Build & push Docker |
  `,

  quiz: [
    { question: "GitHub Actions workflow file?", options: [".github/workflows/*.yml", "actions.yml", "workflow.yml", "ci.yml di root"], correctAnswer: 0 },
    { question: "Secrets disimpan di?", options: ["File YAML", "Settings → Secrets and variables", ".env", "package.json"], correctAnswer: 1 }
  ],

  codeExamples: []
};