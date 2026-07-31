export const chapter = {
  slug: "ci-cd-github-actions",
  title: "GitHub Actions",
  description: "Kuasai GitHub Actions untuk CI/CD di repository GitHub.",
  icon: "SiGithubactions",
  color: "#2088FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["ci-cd-introduction"],
  tags: ["ci-cd", "github", "actions", "workflow"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu GitHub Actions?

Platform CI/CD bawaan GitHub. Workflow dikonfigurasi dengan file YAML di folder \`.github/workflows/\`.

## Struktur Workflow

\`\`\`yaml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
\`\`\`

## Workflow untuk Next.js + Vercel

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
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

## Workflow untuk Docker

\`\`\`yaml
name: Build and Push Docker

on:
  push:
    tags: ['v*']

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build image
        run: docker build -t myapp:\${{ github.ref_name }} .
      - name: Push to registry
        run: |
          echo \${{ secrets.DOCKER_TOKEN }} | docker login -u \${{ secrets.DOCKER_USER }} --password-stdin
          docker push myapp:\${{ github.ref_name }}
\`\`\`

## Secrets & Environment Variables

\`\`\`yaml
env:
  NODE_VERSION: 20
  DATABASE_URL: \${{ secrets.DATABASE_URL }}

# Secret di-set di:
# GitHub → Settings → Secrets and variables → Actions
\`\`\`

## Matrix Build

\`\`\`yaml
jobs:
  test:
    strategy:
      matrix:
        node-version: [18, 20, 22]
        os: [ubuntu-latest, windows-latest]
    runs-on: \${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
\`\`\`
  `,

  quiz: [
    { question: "File workflow GitHub Actions disimpan di?", options: ["/workflows", ".github/workflows/", "/actions", "root"], correctAnswer: 1 },
    { question: "Secrets diset di?", options: ["File YAML", "GitHub Settings → Secrets", ".env", "package.json"], correctAnswer: 1 },
    { question: "Matrix build untuk?", options: ["Satu config", "Test di multiple Node/OS versions", "Debugging", "Hiasan"], correctAnswer: 1 }
  ],

  codeExamples: []
};