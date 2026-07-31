export const chapter = {
  slug: "npm-versioning",
  title: "Semantic Versioning",
  description: "Pahami Semantic Versioning (SemVer) untuk version management yang benar.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["npm-package-json"],
  tags: ["npm", "semver", "versioning", "semantic"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Semantic Versioning (SemVer)

Format: **MAJOR.MINOR.PATCH**

\`\`\`
v2.5.3
│ │ │
│ │ └── PATCH (3)   - Bug fix, backward-compatible
│ └──── MINOR (5)   - New feature, backward-compatible
└────── MAJOR (2)   - Breaking changes
\`\`\`

## Rules

| Bump | When | Example |
|------|------|---------|
| **PATCH** (1.0.0 → 1.0.1) | Bug fix | Fix typo, handle edge case |
| **MINOR** (1.0.1 → 1.1.0) | New feature | Add new function, new option |
| **MAJOR** (1.1.0 → 2.0.0) | Breaking change | Remove function, change API |

## Version Ranges

\`\`\`json
{
    "dependencies": {
        "express": "^4.18.2",      // Caret: 4.x.x (≥4.18.2, <5.0.0)
        "lodash": "~4.17.21",      // Tilde: 4.17.x (≥4.17.21, <4.18.0)
        "react": "18.3.1",         // Exact: only 18.3.1
        "next": ">=14.0.0",        // Min: 14.0.0+
        "vue": ">=3.0.0 <4.0.0",   // Range
        "typescript": "*"          // Any (avoid!)
    }
}
\`\`\`

## Caret (^) vs Tilde (~)

| Symbol | Allow | Upgrade to |
|--------|-------|------------|
| **^4.18.2** | Minor + Patch | 4.18.3, 4.19.0, 4.99.99 |
| **~4.18.2** | Patch only | 4.18.3, 4.18.99 |

## npm version Command

\`\`\`bash
npm version patch     # 1.0.0 → 1.0.1 (+ commit + tag)
npm version minor     # 1.0.1 → 1.1.0
npm version major     # 1.1.0 → 2.0.0

# Custom version
npm version 2.0.0-beta.1
npm version prerelease --preid=alpha  # 1.0.0 → 1.0.1-alpha.0
\`\`\`

## Pre-release Tags

\`\`\`
1.0.0-alpha.1
1.0.0-beta.2
1.0.0-rc.1
1.0.0
\`\`\`

Install: \`npm install my-package@beta\`

## Version Locking

\`\`\`bash
# Lock exact versions
npm install --save-exact express

# Config global
npm config set save-exact true
\`\`\`
  `,

  quiz: [
    { question: "MAJOR.MINOR.PATCH: breaking change?", options: ["PATCH", "MINOR", "MAJOR", "PRE-RELEASE"], correctAnswer: 2 },
    { question: "^ vs ~?", options: ["Same", "^: minor+patch; ~: patch only", "~: minor+patch", "^: patch only"], correctAnswer: 1 }
  ],

  codeExamples: []
};