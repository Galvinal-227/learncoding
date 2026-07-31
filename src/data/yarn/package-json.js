export const chapter = {
  slug: "yarn-package-json",
  title: "package.json & Dependencies",
  description: "Kelola dependencies dengan Yarn: add, remove, upgrade, dan version management.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["yarn-installation"],
  tags: ["yarn", "dependencies", "package.json", "version"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Manage Dependencies

\`\`\`bash
# Add dependency
yarn add express
yarn add express@4.18.2        # Specific version
yarn add express@latest         # Latest
yarn add express@^4.0.0         # Semver range

# Add dev dependency
yarn add -D jest prettier typescript

# Add peer dependency
yarn add --peer react

# Add optional dependency
yarn add --optional chalk

# Remove
yarn remove express

# Install all
yarn install
yarn install --frozen-lockfile  # CI (error if lockfile changed)

# Update
yarn upgrade                     # Within semver
yarn upgrade express             # Specific package
yarn upgrade express@latest      # To latest
yarn upgrade-interactive         # Interactive UI

# Check outdated
yarn outdated
\`\`\`

## yarn.lock

\`\`\`
✅ Deterministic: semua developer + CI dapat versi yang sama
✅ Commit ke Git
✅ Jangan di-edit manual
✅ Auto-updated saat yarn add/remove/upgrade
✅ Cek integritas: yarn install --check-files
\`\`\`

## Global Dependencies

\`\`\`bash
yarn global add nodemon
yarn global remove nodemon
yarn global list

# Atau lebih baik pakai yarn dlx (like npx)
yarn dlx create-next-app
yarn dlx eslint --init
\`\`\`

## resolutions (Override Sub-dependencies)

\`\`\`json
// package.json
{
    "resolutions": {
        "lodash": "4.17.21",
        "**/minimist": "1.2.6"
    }
}
\`\`\`

## Why Yarn?

\`\`\`
✅ yarn.lock = deterministic builds
✅ Parallel install = lebih cepat
✅ Offline cache = install tanpa internet
✅ Checksum verification = lebih aman
✅ Plug'n'Play = tanpa node_modules
\`\`\`
  `,

  quiz: [
    { question: "yarn add -D?", options: ["Production", "Dev dependency", "Global", "Peer"], correctAnswer: 1 },
    { question: "yarn.lock?", options: ["Ignore", "Commit to Git (deterministic)", "Delete", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};