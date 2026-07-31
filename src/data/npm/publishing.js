export const chapter = {
  slug: "npm-publishing",
  title: "Publishing Packages",
  description: "Publish package ke NPM registry: setup, versioning, dan best practices.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["npm-package-json"],
  tags: ["npm", "publish", "package", "registry"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Prepare Package

\`\`\`json
{
    "name": "@budi/my-utils",
    "version": "1.0.0",
    "description": "Collection of utility functions",
    "main": "index.js",
    "type": "module",
    "files": ["dist", "README.md"],
    "keywords": ["utils", "helpers"],
    "author": "Budi Santoso",
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "https://github.com/budi/my-utils"
    }
}
\`\`\`

## Publish Flow

\`\`\`bash
# 1. Login (sekali)
npm login
# Masukkan username, password, email, OTP

# 2. Test package locally
npm link            # Di package directory
cd ../my-app
npm link my-utils   # Use local package

# 3. Publish
npm publish

# 4. Publish scoped package (@username/package)
npm publish --access public
\`\`\`

## Version Management

\`\`\`bash
# Auto bump version
npm version patch     # 1.0.0 → 1.0.1
npm version minor     # 1.0.1 → 1.1.0
npm version major     # 1.1.0 → 2.0.0

# Publish with tag
npm publish --tag beta
npm publish --tag next
\`\`\`

## Unpublish / Deprecate

\`\`\`bash
# Deprecate (recommended)
npm deprecate my-package@"< 2.0.0" "Use version 2.x or higher"

# Unpublish (72 jam setelah publish)
npm unpublish my-package@1.0.0
\`\`\`

## .npmignore

\`\`\`
src/
tests/
node_modules/
.git/
.env
.eslintrc.js
\`\`\`

## Best Practices

\`\`\`
✅ Gunakan "files" field (bukan .npmignore)
✅ Sertakan README.md yang jelas
✅ Test sebelum publish (npm test)
✅ Gunakan semantic versioning
✅ Tambahkan "engines" untuk Node version
✅ Private packages: "private": true
✅ Scoped packages: @username/package-name
\`\`\`
  `,

  quiz: [
    { question: "npm publish?", options: ["Install", "Upload package ke NPM registry", "Update", "Remove"], correctAnswer: 1 },
    { question: "npm version patch?", options: ["1.0.0→2.0.0", "1.0.0→1.0.1", "1.0.0→1.1.0", "No change"], correctAnswer: 1 }
  ],

  codeExamples: []
};