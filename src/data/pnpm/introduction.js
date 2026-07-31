export const chapter = {
  slug: "pnpm-introduction",
  title: "Pengenalan PNPM",
  description: "Pahami apa itu PNPM, kenapa cepat, dan perbedaannya dengan NPM & Yarn.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["npm-introduction"],
  tags: ["pnpm", "package-manager", "disk-space", "fast"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu PNPM?

PNPM (Performant NPM) adalah **package manager** untuk JavaScript yang **cepat dan hemat disk space**. Menggunakan **content-addressable storage** (global store) + **symlinks** (node_modules).

## Kenapa PNPM?

- 💾 **Hemat disk** - Semua project share dependencies di global store
- ⚡ **Cepat** - Install 2-3x lebih cepat dari NPM
- 🔒 **Strict** - Tidak bisa akses packages di luar yang dideklarasikan
- 📦 **Workspace native** - Monorepo support tanpa tools tambahan
- 🔄 **Compatible** - Support NPM registry, package.json, lock file

## Cara Kerja (Content-Addressable Storage)

\`\`\`
NPM/Yarn: node_modules/ (copy packages per project)
PNPM:     ~/.pnpm-store/ (global store) → node_modules/ (symlinks)

Project A → symlink → Global Store ← symlink ← Project B
          (hemat 50%+ disk!)
\`\`\`

## PNPM vs NPM vs Yarn

| | PNPM | NPM | Yarn |
|---|------|-----|------|
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Disk usage | ⭐⭐⭐⭐⭐ (hemat) | ⭐⭐ | ⭐⭐⭐ |
| Strict mode | ✅ | ❌ | ❌ (plug'n'play) |
| Workspaces | ✅ Native | ✅ | ✅ |
| Lock file | pnpm-lock.yaml | package-lock.json | yarn.lock |
| node_modules | Symlinks (nested) | Flat | Flat / PnP |

## Instalasi

\`\`\`bash
# Via NPM
npm install -g pnpm

# Via Corepack (Node.js 16.9+)
corepack enable
corepack prepare pnpm@latest --activate

# Via curl (Unix)
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Via PowerShell (Windows)
iwr https://get.pnpm.io/install.ps1 -useb | iex
\`\`\`

## Basic Commands

\`\`\`bash
# Initialize project
pnpm init

# Install packages
pnpm install
pnpm add express
pnpm add -D jest prettier
pnpm add -g nodemon

# Remove
pnpm remove express

# Update
pnpm update
pnpm update --latest  # Update to latest versions

# Run scripts
pnpm run dev
pnpm test
pnpm start

# Store management
pnpm store path    # Lokasi global store
pnpm store prune   # Hapus unused packages
\`\`\`

## Migrasi dari NPM/Yarn

\`\`\`bash
# Dari NPM
rm -rf node_modules package-lock.json
pnpm install

# Dari Yarn
rm -rf node_modules yarn.lock
pnpm install

# Import Yarn lock
pnpm import  # Generate pnpm-lock.yaml dari yarn.lock
\`\`\`
  `,

  quiz: [
    { question: "PNPM vs NPM: disk?", options: ["Sama", "PNPM: hemat (global store + symlinks)", "NPM lebih hemat", "Sama boros"], correctAnswer: 1 },
    { question: "pnpm install?", options: ["NPM only", "Install dependencies (sama seperti npm install)", "Build", "Publish"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Migrasi ke PNPM",
      language: "bash",
      code: `# Install PNPM
npm install -g pnpm

# Di project existing
rm -rf node_modules package-lock.json
pnpm install

# Verifikasi
pnpm run dev`
    }
  ]
};