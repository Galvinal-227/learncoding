export const chapter = {
  slug: "monorepo-ci-cd",
  title: "CI/CD untuk Monorepo",
  description: "Setup CI/CD pipeline untuk monorepo: caching, affected detection, selective deploy.",
  icon: "SiGithubactions",
  color: "#2088FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["monorepo-turborepo"],
  tags: ["monorepo", "ci-cd", "github-actions", "turborepo"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitHub Actions + Turborepo

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20]

    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Lint
        run: pnpm lint
      
      - name: Test
        run: pnpm test
      
      - name: Build
        run: pnpm build
        env:
          TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
          TURBO_TEAM: \${{ secrets.TURBO_TEAM }}
\`\`\`

## Selective Deploy (Only Changed Apps)

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  detect-changes:
    runs-on: ubuntu-latest
    outputs:
      web: \${{ steps.filter.outputs.web }}
      docs: \${{ steps.filter.outputs.docs }}
    steps:
      - uses: actions/checkout@v4
      - uses: dorny/paths-filter@v2
        id: filter
        with:
          filters: |
            web:
              - 'apps/web/**'
              - 'packages/ui/**'
              - 'packages/utils/**'
            docs:
              - 'apps/docs/**'
              - 'packages/ui/**'

  deploy-web:
    needs: detect-changes
    if: \${{ needs.detect-changes.outputs.web == 'true' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm turbo build --filter=web
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}

  deploy-docs:
    needs: detect-changes
    if: \${{ needs.detect-changes.outputs.docs == 'true' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm turbo build --filter=docs
      - name: Deploy to Vercel
        run: vercel deploy --prod --token=\${{ secrets.VERCEL_TOKEN }}
\`\`\`

## Turborepo Remote Caching in CI

\`\`\`bash
# Set environment variables di GitHub Secrets
TURBO_TOKEN=your-turbo-token
TURBO_TEAM=your-team-slug

# Sekarang CI bisa share cache dengan developer lokal!
\`\`\`

## Changesets (Versioning)

\`\`\`bash
npx changeset init
npx changeset  # Interactive: pilih packages + version bump
npx changeset version  # Update versions
npx changeset publish  # Publish ke NPM
\`\`\`
  `,

  quiz: [
    { question: "Selective deploy?", options: ["Deploy semua", "Hanya deploy apps yang berubah", "Manual deploy", "Tidak deploy"], correctAnswer: 1 },
    { question: "Turborepo remote caching?", options: ["Cache lokal", "Share cache dengan tim via Vercel", "CDN", "Redis"], correctAnswer: 1 }
  ],

  codeExamples: []
};