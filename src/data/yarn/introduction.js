export const chapter = {
  slug: "yarn-introduction",
  title: "Pengenalan Yarn",
  description: "Pahami apa itu Yarn, sejarahnya, dan perbedaan dengan NPM & PNPM.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["npm-introduction"],
  tags: ["yarn", "package-manager", "nodejs", "javascript"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Yarn?

Yarn (Yet Another Resource Negotiator) adalah **package manager alternatif** untuk JavaScript yang dikembangkan oleh **Facebook (Meta)** pada 2016. Fokus pada **kecepatan, keamanan, dan konsistensi**.

## Kenapa Yarn Dibuat?

Saat NPM v3-v4 lambat dan tidak deterministic. Yarn hadir dengan:
- ⚡ **Cepat** - Parallel installs, offline cache
- 🔒 **Deterministic** - yarn.lock (exact versions)
- 🛡️ **Aman** - Checksum verification
- 📦 **Workspaces** - Monorepo support built-in
- 🔌 **Plug'n'Play** - No node_modules (Yarn 2+)

## Yarn vs NPM vs PNPM

| | Yarn | NPM | PNPM |
|---|------|-----|------|
| Speed | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Deterministic | ✅ (yarn.lock) | ✅ (package-lock.json) | ✅ |
| Workspaces | ✅ | ✅ (v7+) | ✅ (native) |
| Plug'n'Play | ✅ | ❌ | ❌ |
| Disk usage | Flat | Flat | Content-addressable (hemat) |
| Default since | Node 16+ via corepack | Always | Manual install |

## Yarn Versions

| Version | Tahun | Key Feature |
|---------|-------|-------------|
| **Yarn 1 (Classic)** | 2016 | Deterministic, workspaces |
| **Yarn 2 (Berry)** | 2020 | Plug'n'Play, zero-installs |
| **Yarn 3** | 2021 | Improved PnP, constraints |
| **Yarn 4** | 2023 | Performance, Corepack |

## Instalasi

\`\`\`bash
# Via Corepack (Node.js 16.9+)
corepack enable
corepack prepare yarn@stable --activate

# Via NPM
npm install -g yarn

# Check version
yarn --version
\`\`\`

## Basic Commands

\`\`\`bash
yarn init                    # Initialize project
yarn add express             # Add dependency
yarn add -D jest             # Add dev dependency
yarn remove express          # Remove
yarn install                 # Install all
yarn upgrade                 # Upgrade all
yarn run dev                 # Run script
yarn dlx create-next-app     # Like npx
\`\`\`
  `,

  quiz: [
    { question: "Yarn dibuat oleh?", options: ["Google", "Meta (Facebook)", "Microsoft", "Vercel"], correctAnswer: 1 },
    { question: "Yarn vs NPM?", options: ["Same", "Yarn: faster, deterministic, workspaces", "NPM faster", "Yarn deprecated"], correctAnswer: 1 },
    { question: "yarn.lock?", options: ["Log", "Deterministic lock file", "Config", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Yarn Quick Start",
      language: "bash",
      code: `# Install Yarn
npm install -g yarn

# Create project
mkdir my-app && cd my-app
yarn init -y

# Add dependencies
yarn add express react
yarn add -D jest prettier

# Run scripts
yarn run dev`
    }
  ]
};