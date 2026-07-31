export const chapter = {
  slug: "pnpm-installation",
  title: "Instalasi & Setup",
  description: "Install PNPM di Windows, Mac, Linux dan setup pertama kali.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["pnpm-introduction"],
  tags: ["pnpm", "instalasi", "setup", "first-use"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install PNPM

### Via NPM (Recommended)
\`\`\`bash
npm install -g pnpm
pnpm --version
\`\`\`

### Via Corepack (Node.js 16.9+)
\`\`\`bash
corepack enable
corepack prepare pnpm@latest --activate
\`\`\`

### Via curl (Mac/Linux)
\`\`\`bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
\`\`\`

### Via PowerShell (Windows)
\`\`\`powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
\`\`\`

## First Setup

\`\`\`bash
# Verify
pnpm --version

# Create project
mkdir my-app && cd my-app
pnpm init

# Install first package
pnpm add express
\`\`\`

## VS Code Integration

\`\`\`json
// .vscode/settings.json
{
    "npm.packageManager": "pnpm"
}
\`\`\`

## CI/CD Setup

\`\`\`yaml
# GitHub Actions
- uses: pnpm/action-setup@v2
  with:
    version: 9
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: 'pnpm'
- run: pnpm install --frozen-lockfile
- run: pnpm test
\`\`\`
  `,

  quiz: [
    { question: "Corepack?", options: ["Editor", "Node.js built-in package manager manager", "Database", "Framework"], correctAnswer: 1 }
  ],

  codeExamples: []
};