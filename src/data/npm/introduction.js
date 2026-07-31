export const chapter = {
  slug: "npm-introduction",
  title: "Pengenalan NPM",
  description: "Pahami apa itu NPM, cara kerjanya, dan kenapa jadi package manager terbesar.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["node-js-introduction"],
  tags: ["npm", "package-manager", "nodejs", "javascript"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu NPM?

NPM (Node Package Manager) adalah **package manager** untuk JavaScript. Terdiri dari:
1. **CLI** (Command Line Interface) - tool untuk install/manage packages
2. **Registry** (npmjs.com) - database online berisi 2M+ packages
3. **Website** - dokumentasi, search, profile

## Kenapa NPM?

- 📦 **Registry terbesar** di dunia (2M+ packages)
- 🚀 **Mudah** - satu command untuk install
- 🔗 **Dependency management** - otomatis resolve dependencies
- 📜 **Scripts** - otomatisasi task (build, test, deploy)
- 🔒 **package-lock.json** - deterministic installs
- 🏢 **Organizations** - private packages untuk tim
- 🛡️ **Security audit** - cek vulnerabilities

## NPM vs Yarn vs PNPM

| | NPM | Yarn | PNPM |
|---|-----|------|------|
| Speed | Fast (v7+) | Fast | Fastest |
| Disk usage | node_modules | node_modules | Content-addressable (hemat) |
| Lock file | package-lock.json | yarn.lock | pnpm-lock.yaml |
| Workspaces | ✅ (v7+) | ✅ | ✅ (native) |
| Default | ✅ (bundled with Node) | Perlu install | Perlu install |

## Instalasi

NPM sudah **otomatis terinstall** bersama Node.js. Cek versi:

\`\`\`bash
node --version   # v22.x.x
npm --version    # 10.x.x
\`\`\`

Update NPM:
\`\`\`bash
npm install -g npm@latest
\`\`\`

## Basic Commands

\`\`\`bash
# Initialize project
npm init         # Interactive
npm init -y      # Default (skip questions)

# Install packages
npm install express
npm install --save-dev jest prettier
npm install -g nodemon

# Remove
npm uninstall express

# Update
npm update

# Run scripts
npm run dev
npm test
npm start
\`\`\`

## npm Registry

\`\`\`bash
# Default registry
npm config get registry
# https://registry.npmjs.org/

# Login (untuk publish)
npm login

# Search packages
npm search react
\`\`\`

## Global vs Local Install

| | Local (project) | Global (-g) |
|---|----------------|-------------|
| Lokasi | ./node_modules/ | /usr/local/lib/node_modules/ |
| Command | npx (recommended) | Langsung di terminal |
| Use case | Project dependencies | CLI tools (nodemon, create-react-app) |
\`\`\`
  `,

  quiz: [
    { question: "NPM singkatan?", options: ["Node Package Manager", "Network Protocol Manager", "New Project Module", "Node Program Module"], correctAnswer: 0 },
    { question: "npm init -y?", options: ["Install", "Initialize with defaults (skip questions)", "Update", "Publish"], correctAnswer: 1 },
    { question: "NPM vs PNPM?", options: ["Sama", "PNPM: hemat disk (content-addressable)", "NPM lebih hemat", "PNPM deprecated"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "NPM Quick Start",
      language: "bash",
      code: `# Create project
mkdir my-app && cd my-app
npm init -y

# Install dependencies
npm install express cors dotenv

# Install dev dependencies
npm install -D jest prettier eslint

# Create start script (edit package.json)
# "scripts": { "start": "node index.js", "dev": "nodemon index.js" }

npm start`
    }
  ]
};