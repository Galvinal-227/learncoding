export const chapter = {
  slug: "pnpm-filtering",
  title: "Filtering",
  description: "Gunakan filter untuk target specific packages di monorepo.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["pnpm-workspaces"],
  tags: ["pnpm", "filter", "monorepo", "select"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Filtering

\`\`\`bash
# Single package
pnpm --filter @myapp/web build

# Multiple packages
pnpm --filter "@myapp/web" --filter "@myapp/api" build

# Glob pattern
pnpm --filter "@myapp/*" build

# Exclude
pnpm --filter !@myapp/docs build
pnpm -r build --filter !@myapp/docs
\`\`\`

## Advanced Filtering

\`\`\`bash
# Package + dependencies
pnpm --filter @myapp/web... build
# Build web + semua packages yang di-depend oleh web

# Package + dependents
pnpm --filter ...@myapp/ui build
# Build ui + semua packages yang depend on ui

# Since a branch (changed packages)
pnpm --filter "...[origin/main]" build
# Build only packages changed since main

# Since commit
pnpm --filter "...[HEAD~1]" build
# Build only packages changed in last commit
\`\`\`

## Filter Selectors

| Selector | Deskripsi |
|----------|-----------|
| @myapp/web | Specific package |
| @myapp/* | Glob pattern |
| @myapp/web... | Package + dependencies |
| ...@myapp/ui | Package + dependents |
| ...[origin/main] | Changed since branch |
| !@myapp/docs | Exclude |
  `,

  quiz: [
    { question: "--filter @myapp/web...?", options: ["Only web", "Web + its dependencies", "Only deps", "All packages"], correctAnswer: 1 },
    { question: "...[origin/main]?", options: ["All", "Packages changed since main", "Main only", "Origin"], correctAnswer: 1 }
  ],

  codeExamples: []
};