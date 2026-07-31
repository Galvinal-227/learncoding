export const chapter = {
  slug: "yarn-scripts",
  title: "Scripts & CLI",
  description: "Gunakan Yarn CLI untuk running scripts dan task automation.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["yarn-installation"],
  tags: ["yarn", "scripts", "cli", "commands"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Running Scripts

\`\`\`bash
# Run script
yarn run dev
yarn dev              # Shortcut (no "run" needed)
yarn start
yarn test

# Run binary from node_modules
yarn eslint --fix src/
yarn jest --watch

# Run without adding to scripts
yarn dlx create-next-app  # Like npx
\`\`\`

## Script Definitions

\`\`\`json
{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "eslint src/",
        "format": "prettier --write .",
        "test": "jest --coverage",
        "test:watch": "jest --watch",
        "clean": "rm -rf dist .next"
    }
}
\`\`\`

## Useful CLI Commands

\`\`\`bash
yarn info express           # Package info
yarn info express versions  # All versions
yarn list                   # List installed
yarn list --depth=0         # Top level only
yarn why lodash             # Why is this package installed?
yarn audit                  # Security audit
yarn cache clean            # Clear cache
yarn config get registry    # Get config
\`\`\`

## Workspace Scripts

\`\`\`bash
# Run script in all workspaces
yarn workspaces run build

# Run in specific workspace
yarn workspace @myapp/web build

# Run in specific workspace with args
yarn workspace @myapp/api test --watch
\`\`\`

## Yarn vs NPM CLI Comparison

| Action | Yarn | NPM |
|--------|------|-----|
| Install all | yarn | npm install |
| Add package | yarn add pkg | npm install pkg |
| Remove | yarn remove pkg | npm uninstall pkg |
| Run script | yarn dev | npm run dev |
| Global add | yarn global add pkg | npm install -g pkg |
| Run one-off | yarn dlx pkg | npx pkg |
| Audit | yarn audit | npm audit |
  `,

  quiz: [
    { question: "yarn dlx?", options: ["Delete", "Like npx (run without install)", "Install", "Build"], correctAnswer: 1 },
    { question: "yarn why?", options: ["Debug", "Why is a package installed?", "Remove", "Update"], correctAnswer: 1 }
  ],

  codeExamples: []
};