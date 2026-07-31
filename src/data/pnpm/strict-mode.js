export const chapter = {
  slug: "pnpm-strict-mode",
  title: "Strict Mode",
  description: "Pahami strict mode PNPM yang mencegah phantom dependencies.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["pnpm-introduction"],
  tags: ["pnpm", "strict", "phantom-deps", "security"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Phantom Dependencies?

NPM/Yarn: Flat node_modules → bisa akses packages yang **TIDAK** dideklarasikan di package.json.

\`\`\`
NPM flat node_modules:
node_modules/
├── express → depends on 'cookie'
├── cookie  ← BISA DIAKSES meski tidak di package.json!
└── ...

Ini phantom dependency! Aplikasi jalan di dev, error di production.
\`\`\`

## PNPM Strict Mode

PNPM **tidak mengizinkan** akses ke packages di luar yang dideklarasikan:

\`\`\`javascript
// package.json: { "dependencies": { "express": "^4.0.0" } }

// ❌ ERROR di PNPM!
import cookie from 'cookie';  // cookie tidak dideklarasikan!

// ✅ Harus explicit
pnpm add cookie
\`\`\`

## Benefits Strict Mode

- 🔒 **No phantom deps** - Yang tidak dideklarasikan = tidak bisa diakses
- 🐛 **Catch bugs early** - Error di development, bukan production
- 📦 **Smaller bundles** - Tidak ada packages tersembunyi
- 🔐 **Security** - Dependency graph jelas

## Disable Strict Mode (Not Recommended)

\`\`\`json
// .npmrc
hoist=true
shamefully-hoist=true
\`\`\`

## node_modules Structure

\`\`\`
PNPM nested node_modules:
node_modules/
├── .pnpm/              # Global store symlinks
├── express → .pnpm/express@4.0.0/node_modules/express
└── .modules.yaml

Only declared deps are in root node_modules!
\`\`\`
  `,

  quiz: [
    { question: "Phantom dependency?", options: ["Declared", "Package accessible but NOT declared (NPM flat)", "Dev only", "Production only"], correctAnswer: 1 },
    { question: "PNPM strict mode?", options: ["Allow phantom", "Block phantom deps (explicit only)", "NPM mode", "No lock"], correctAnswer: 1 }
  ],

  codeExamples: []
};