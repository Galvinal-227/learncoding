export const chapter = {
  slug: "deployment-ci-cd-pipeline",
  title: "CI/CD Pipeline Deployment",
  description: "Setup CI/CD pipeline untuk deploy otomatis ke production.",
  icon: "SiGithubactions",
  color: "#2088FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["deployment-introduction", "ci-cd-introduction"],
  tags: ["deployment", "ci-cd", "automation", "github-actions"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CI/CD untuk Deployment

### GitHub Actions → Vercel
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

### GitHub Actions → VPS (SSH)
\`\`\`yaml
name: Deploy to VPS
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.SSH_HOST }}
          username: \${{ secrets.SSH_USER }}
          key: \${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/myapp
            git pull origin main
            npm ci --production
            pm2 restart myapp
\`\`\`

### GitHub Actions → Docker Hub → VPS
\`\`\`yaml
name: Build & Deploy Docker
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: docker build -t myapp:latest .
      - name: Push to registry
        run: |
          docker tag myapp:latest registry.example.com/myapp:latest
          docker push registry.example.com/myapp:latest
      - name: Deploy to server
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.SSH_HOST }}
          username: \${{ secrets.SSH_USER }}
          key: \${{ secrets.SSH_KEY }}
          script: |
            docker pull registry.example.com/myapp:latest
            docker compose up -d
\`\`\`
  `,

  quiz: [
    { question: "GitHub Actions trigger?", options: ["Manual", "Push ke branch / Pull Request", "Timer", "Database change"], correctAnswer: 1 },
    { question: "Deploy ke VPS via SSH pakai?", options: ["appleboy/ssh-action", "ssh-cli", "scp-action", "deploy-action"], correctAnswer: 0 }
  ],

  codeExamples: []
};