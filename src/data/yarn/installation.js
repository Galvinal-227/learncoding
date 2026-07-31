export const chapter = {
  slug: "yarn-installation",
  title: "Instalasi & Setup",
  description: "Install Yarn di berbagai OS dan setup project pertama.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["yarn-introduction"],
  tags: ["yarn", "instalasi", "setup", "first-use"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install Yarn

### Via Corepack (Recommended)
\`\`\`bash
corepack enable
corepack prepare yarn@stable --activate
yarn --version
\`\`\`

### Via NPM
\`\`\`bash
npm install -g yarn
\`\`\`

### Via Installer Script
\`\`\`bash
curl -o- -L https://yarnpkg.com/install.sh | bash
\`\`\`

### Windows
\`\`\`bash
npm install -g yarn
# Atau download installer dari yarnpkg.com
\`\`\`

## Set Yarn Version

\`\`\`bash
# Set version for a project
yarn set version stable     # Latest Yarn 4
yarn set version classic    # Yarn 1
yarn set version berry      # Yarn 2+

# Check
yarn --version
\`\`\`

## First Project

\`\`\`bash
mkdir my-yarn-app && cd my-yarn-app
yarn init -y

# Add dependencies
yarn add express

# Create index.js
echo 'const express = require("express");' > index.js

# Run with yarn
yarn node index.js
\`\`\`

## Configuration

\`\`\`bash
# .yarnrc.yml
nodeLinker: node-modules   # atau: pnp, pnpm
compressionLevel: mixed

# View config
yarn config get
\`\`\`

## Offline Cache

\`\`\`bash
# Enable offline mirror
yarn config set yarn-offline-mirror ./offline-cache

# Install from cache
yarn install --offline
\`\`\`
  `,

  quiz: [
    { question: "Corepack?", options: ["Editor", "Node.js built-in package manager manager", "Database", "Framework"], correctAnswer: 1 },
    { question: "yarn set version?", options: ["Check version", "Switch Yarn version per project", "Install", "Update"], correctAnswer: 1 }
  ],

  codeExamples: []
};