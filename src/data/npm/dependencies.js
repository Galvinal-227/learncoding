export const chapter = {
  slug: "npm-dependencies",
  title: "Dependencies Management",
  description: "Install, update, remove, audit dependencies dengan NPM.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["npm-package-json"],
  tags: ["npm", "dependencies", "install", "update"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
# Install dari package.json
npm install

# Production only (skip devDependencies)
npm ci --production

# Install specific package
npm install express
npm install express@4.18.2       # Specific version
npm install express@latest        # Latest version

# Dev dependency
npm install -D jest prettier

# Global
npm install -g nodemon

# Install dari GitHub
npm install github:user/repo
npm install git+https://github.com/user/repo.git
\`\`\`

## npm ci vs npm install

| | npm install | npm ci |
|---|------------|--------|
| Speed | Lebih lambat | Cepat (skip resolve) |
| package-lock.json | Bisa di-update | Harus match |
| node_modules | Update in-place | Hapus + install ulang |
| Use case | Development | CI/CD, production |

## Update

\`\`\`bash
# Check outdated packages
npm outdated

# Update specific
npm update express

# Update all (within semver range)
npm update

# Check for major updates
npm install -g npm-check-updates
ncu                  # Check
ncu -u               # Update package.json
npm install          # Install new versions
\`\`\`

## Remove

\`\`\`bash
npm uninstall express
npm uninstall -D jest
npm uninstall -g nodemon
\`\`\`

## List & Info

\`\`\`bash
# List installed packages
npm list
npm list --depth=0     # Top level only
npm list --depth=1

# Package info
npm view express
npm view express version
npm view express versions
npm view express dependencies
\`\`\`

## package-lock.json

- **Jangan dihapus** (deterministic install)
- **Commit ke Git** (untuk aplikasi)
- **Jangan commit** (untuk library)
- Auto-generated oleh \`npm install\`
  `,

  quiz: [
    { question: "npm ci?", options: ["Install", "Clean install (fast, CI/CD)", "Update", "Init"], correctAnswer: 1 },
    { question: "package-lock.json?", options: ["Ignore", "Commit ke Git (deterministic install)", "Hapus", "Optional"], correctAnswer: 1 }
  ],

  codeExamples: []
};