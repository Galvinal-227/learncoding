export const chapter = {
  slug: "yarn-zero-installs",
  title: "Zero-Installs (PnP)",
  description: "Pahami Plug'n'Play dan Zero-Installs - fitur unik Yarn.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["yarn-installation"],
  tags: ["yarn", "pnp", "zero-installs", "advanced"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Plug'n'Play (PnP)

\`\`\`bash
# Enable PnP
yarn set version berry
# .yarnrc.yml: nodeLinker: pnp
\`\`\`

\`\`\`
Traditional: node_modules/ (all files on disk)
PnP: .pnp.cjs (resolution map, no node_modules)
\`\`\`

## Zero-Installs

\`\`\`bash
# .yarnrc.yml
nodeLinker: pnp
enableGlobalCache: false

# yarn install → .yarn/cache/ (git-tracked)
git add .yarn/cache
\`\`\`

\`\`\`
Benefits:
✅ Clone & run (no yarn install needed)
✅ CI/CD faster (no install step)
✅ Offline ready
✅ All deps version-controlled
\`\`\`

## .yarnrc.yml Options

\`\`\`yaml
# .yarnrc.yml
nodeLinker: pnp          # atau: node-modules, pnpm
enableGlobalCache: false
compressionLevel: mixed
enableScripts: true
checksumBehavior: throw

yarnPath: .yarn/releases/yarn-4.0.0.cjs
\`\`\`

## When to Use PnP/Zero-Installs?

\`\`\`
✅ Monorepo dengan tim besar
✅ CI/CD yang ingin cepat
✅ Ingin deterministik 100%
✅ Tidak ada masalah kompatibilitas

❌ Banyak legacy packages (tidak PnP-compatible)
❌ Tim tidak familiar
❌ Butuh debugging dependencies (harder)
\`\`\`
  `,

  quiz: [
    { question: "PnP?", options: ["node_modules", "Plug'n'Play (no node_modules)", "Cache", "Lock file"], correctAnswer: 1 },
    { question: "Zero-Installs?", options: ["No deps", "Dependencies in Git (no yarn install)", "No lock file", "No scripts"], correctAnswer: 1 }
  ],

  codeExamples: []
};