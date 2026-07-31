export const chapter = {
  slug: "github-security",
  title: "Security & Dependabot",
  description: "Amankan repository dengan Dependabot, Code Scanning, dan Secret Scanning.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["github-repository"],
  tags: ["github", "security", "dependabot", "scanning"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Dependabot

Auto-update dependencies + security patches.

\`\`\`yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    target-branch: "develop"
\`\`\`

## Code Scanning (CodeQL)

\`\`\`
Settings → Code security → Code scanning → Enable CodeQL
- Auto-scan setiap push & PR
- Deteksi: SQL injection, XSS, hardcoded secrets
\`\`\`

## Secret Scanning

\`\`\`
GitHub auto-detect secrets (API keys, tokens) yang tidak sengaja di-commit.
- Settings → Code security → Secret scanning
- Push protection: block push jika ada secret
\`\`\`

## Security Policy

\`\`\`markdown
# SECURITY.md
## Reporting a Vulnerability
Email: security@myapp.com
Jangan buat public issue!
Response time: <48 jam
\`\`\`
  `,

  quiz: [
    { question: "Dependabot?", options: ["Testing", "Auto-update dependencies + security patches", "Deploy", "Monitoring"], correctAnswer: 1 },
    { question: "Secret scanning?", options: ["Debug", "Deteksi API keys/token yang tidak sengaja di-commit", "Encrypt", "Format"], correctAnswer: 1 }
  ],

  codeExamples: []
};