export const chapter = {
  slug: "monorepo-introduction",
  title: "Pengenalan Monorepo",
  description: "Pahami apa itu monorepo, kenapa perusahaan besar menggunakannya, dan konsep dasarnya.",
  icon: "SiTurborepo",
  color: "#EF4444",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["monorepo", "turborepo", "workspace", "architecture"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Monorepo?

**Monorepo** (Mono Repository) adalah strategi menyimpan **semua kode** dari beberapa project/apps dalam **satu repository Git**. Lawannya adalah **polyrepo** (satu repo per project).

## Monorepo vs Polyrepo

| | Monorepo | Polyrepo |
|---|----------|----------|
| Struktur | Semua project dalam 1 repo | 1 repo per project |
| Sharing code | Sangat mudah | Kompleks (NPM packages) |
| Dependency | Satu versi untuk semua | Beda versi per project |
| CI/CD | Kompleks (butuh tools) | Simpel per repo |
| Team size | Cocok tim besar | Cocok tim independen |
| Atomic changes | ✅ Lintas project | ❌ Butuh multiple PR |

## Perusahaan yang Pakai Monorepo

| Perusahaan | Tools | Skala |
|-----------|-------|-------|
| **Google** | Piper (internal) | 1 miliar+ lines of code |
| **Meta (Facebook)** | Mercurial | Ribuan project |
| **Microsoft** | Rush.js | Windows + Office |
| **Vercel** | Turborepo | Next.js + tools |
| **Nx** | Nx (Google-inspired) | Enterprise |

## Struktur Monorepo

\`\`\`
my-monorepo/
├── apps/
│   ├── web/           # Next.js frontend
│   ├── docs/          # Documentation site
│   └── admin/         # Admin dashboard
├── packages/
│   ├── ui/            # Shared UI components
│   ├── utils/         # Shared utilities
│   ├── config/        # ESLint, TypeScript configs
│   └── database/      # Prisma schema + client
├── package.json       # Root package.json (workspaces)
├── turbo.json         # Turborepo config
└── pnpm-workspace.yaml
\`\`\`

## Tools Monorepo Populer

| Tool | Developer | Cocok Untuk |
|------|-----------|-------------|
| **Turborepo** | Vercel | Next.js ecosystem, performa tinggi |
| **Nx** | Nrwl | Enterprise, Angular/React, powerful generators |
| **Lerna** | Lerna team | Simple monorepo (sekarang di-maintain Nx) |
| **Rush.js** | Microsoft | Very large scale (Microsoft internal) |
| **PNPM Workspaces** | PNPM team | Simpel, native Node.js workspaces |
| **Yarn Workspaces** | Yarn team | Built-in, cocok dengan Yarn |
| **Bazel** | Google | Extreme scale (seperti Google internal) |

## Kapan Monorepo?

✅ Shared code (UI library, utils, config) antar project
✅ Atomic changes (update API + frontend dalam 1 PR)
✅ Dependency consistency (semua pakai React versi sama)
✅ Team collaboration (semua lihat semua kode)
✅ Large teams (>10 developers)

❌ Small projects (2-3 apps)
❌ Independent teams (jarang share code)
❌ Butuh CI/CD simpel
❌ Butuh isolation ketat antar team
  `,

  quiz: [
    { question: "Monorepo vs Polyrepo?", options: ["Sama", "Monorepo: 1 repo semua; Polyrepo: 1 repo per project", "Polyrepo lebih kecil", "Monorepo deprecated"], correctAnswer: 1 },
    { question: "Turborepo dibuat oleh?", options: ["Google", "Vercel", "Microsoft", "Meta"], correctAnswer: 1 },
    { question: "Monorepo: keuntungan utama?", options: ["Lebih simpel", "Shared code + atomic changes", "Lebih cepat selalu", "Gratis"], correctAnswer: 1 }
  ],

  codeExamples: []
};