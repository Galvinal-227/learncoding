export const chapter = {
  slug: "monorepo-benefits",
  title: "Keunggulan Monorepo",
  description: "Kenapa perusahaan besar pilih monorepo: shared code, atomic changes, consistency.",
  icon: "SiTurborepo",
  color: "#EF4444",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["monorepo-introduction"],
  tags: ["monorepo", "benefits", "architecture", "collaboration"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Shared Code (Tanpa NPM Publish)

\`\`\`
Polyrepo:
1. Edit packages/ui/Button.tsx
2. npm run build
3. npm version patch
4. npm publish
5. cd ../../apps/web
6. npm install @myapp/ui@latest
7. Test

Monorepo:
1. Edit packages/ui/Button.tsx
2. Save → auto-reload di apps/web ⚡
\`\`\`

## 2. Atomic Changes

Satu PR bisa mengubah API + frontend + docs:

\`\`\`
PR #123: Add user avatar feature
├── packages/api/src/user.ts       (+avatar field)
├── apps/web/components/Avatar.tsx  (new component)
├── apps/docs/pages/user-api.mdx    (update docs)
└── packages/ui/Avatar.test.tsx     (tests)
\`\`\`

Semua di-test dan di-deploy bersama. Tidak ada "tunggu package X di-publish dulu".

## 3. Dependency Consistency

Semua project pakai **versi yang sama**:

\`\`\`json
// Tidak ada: apps/web pakai React 18, apps/docs pakai React 17
// Semua: React 18.3.0 via root overrides
\`\`\`

## 4. Refactoring Lebih Aman

\`\`\`
Ubah shared package → langsung tahu siapa yang broken
(pakai TypeScript + test di semua project)
\`\`\`

## 5. CI/CD Optimized

Dengan tools seperti Turborepo:
- Hanya build/test yang berubah
- Caching antar build
- Parallel execution

## 6. Onboarding Mudah

Developer baru clone 1 repo → bisa akses semua kode. Tidak perlu setup 10+ repos.

## Tantangan Monorepo

| Tantangan | Solusi |
|-----------|--------|
| Clone lama | Git sparse checkout, shallow clone |
| CI/CD kompleks | Turborepo/Nx (caching) |
| Build lama | Incremental builds |
| Team isolation | CODEOWNERS, branch protection |
| Versioning | Changesets, independent versioning |
  `,

  quiz: [
    { question: "Atomic changes?", options: ["Satu file", "Satu PR lintas project (API+FE+Docs)", "Satu commit", "Satu branch"], correctAnswer: 1 },
    { question: "Monorepo: shared code?", options: ["NPM publish", "Langsung import (tanpa publish)", "Copy paste", "Git submodule"], correctAnswer: 1 }
  ],

  codeExamples: []
};