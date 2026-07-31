export const chapter = {
  slug: "npm-package-json",
  title: "package.json",
  description: "Pahami semua field di package.json - jantung project Node.js.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["npm-introduction"],
  tags: ["npm", "package.json", "config", "metadata"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Struktur package.json

\`\`\`json
{
    "name": "my-app",
    "version": "1.0.0",
    "description": "My awesome app",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "build": "webpack",
        "test": "jest",
        "lint": "eslint ."
    },
    "keywords": ["node", "express"],
    "author": "Budi Santoso",
    "license": "MIT",
    "dependencies": {
        "express": "^4.18.2"
    },
    "devDependencies": {
        "jest": "^29.7.0",
        "eslint": "^8.56.0"
    },
    "engines": {
        "node": ">=20.0.0",
        "npm": ">=10.0.0"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/budi/my-app"
    },
    "bugs": {
        "url": "https://github.com/budi/my-app/issues"
    },
    "homepage": "https://myapp.com"
}
\`\`\`

## Field Penting

| Field | Deskripsi | Required? |
|-------|-----------|-----------|
| **name** | Nama package (lowercase, hyphens) | ✅ |
| **version** | Versi (SemVer) | ✅ |
| **description** | Deskripsi singkat | Recommended |
| **main** | Entry point (CJS) | Jika CJS |
| **type** | "module" untuk ESM | Jika ESM |
| **scripts** | NPM scripts | Recommended |
| **dependencies** | Production packages | - |
| **devDependencies** | Development packages | - |
| **peerDependencies** | Host package dependency | Library |
| **engines** | Node.js/NPM version | Recommended |
| **private** | true = tidak bisa publish | - |
| **license** | Lisensi (MIT, ISC) | Untuk publish |

## dependencies vs devDependencies

\`\`\`bash
# Production (jalan di server)
npm install express     # dependencies

# Development (hanya saat development)
npm install -D jest     # devDependencies

# Production install (skip devDeps)
npm ci --production
\`\`\`

## Version Ranges

\`\`\`json
{
    "dependencies": {
        "express": "^4.18.2",    // Compatible (4.x.x)
        "lodash": "~4.17.21",    // Patch only (~4.17.x)
        "react": "18.3.1",       // Exact version
        "next": ">=14.0.0",      // Min version
        "typescript": "*"        // Any version (avoid!)
    }
}
\`\`\`

## scripts

\`\`\`json
{
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "build": "npm run clean && webpack",
        "test": "jest --coverage",
        "lint": "eslint src/",
        "format": "prettier --write .",
        "clean": "rm -rf dist",
        "deploy": "npm run build && npm test && ./deploy.sh",
        "prepare": "husky install"
    }
}
\`\`\`

Pre/post hooks otomatis:
- \`prebuild\` → \`build\` → \`postbuild\`
- \`pretest\` → \`test\` → \`posttest\`

## package.json Best Practices

\`\`\`
✅ Gunakan "private": true untuk project (bukan library)
✅ Tulis "engines" untuk standarisasi Node version
✅ Scripts yang jelas & terstruktur
✅ Gunakan "files" untuk publish (bukan .npmignore)
✅ Jangan commit secrets (pakai .env)
❌ Jangan hapus package-lock.json
❌ Jangan gunakan "*" untuk version
\`\`\`
  `,

  quiz: [
    { question: "devDependencies?", options: ["Production", "Development only (testing, linting)", "Both", "Peer"], correctAnswer: 1 },
    { question: "^4.18.2?", options: ["Exact", "Compatible (4.x.x)", "Patch only", "Any"], correctAnswer: 1 }
  ],

  codeExamples: []
};