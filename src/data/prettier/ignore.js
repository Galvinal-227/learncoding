export const chapter = {
  slug: "prettier-ignore",
  title: ".prettierignore",
  description: "Ignore file dan folder yang tidak perlu diformat dengan .prettierignore.",
  icon: "SiPrettier",
  color: "#F7B93E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["prettier-configuration"],
  tags: ["prettier", "ignore", "config", "exclude"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## .prettierignore File

\`\`\`
# Dependencies
node_modules/
package-lock.json
pnpm-lock.yaml
yarn.lock

# Build output
dist/
build/
.next/
out/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/

# Coverage
coverage/

# Logs
*.log

# Temp
tmp/
temp/

# Generated
*.generated.*
__generated__/

# Others
.git/
.cache/
public/vendor/
\`\`\`

## Ignore Specific Code

\`\`\`javascript
// prettier-ignore
const messy = {a:1,b:2,c:{d:3,e:4}};

// prettier-ignore-start
const keepThisFormat = {
    a: 1,
    b: 2
};
const alsoThis = { c: 3 };
// prettier-ignore-end
\`\`\`

\`\`\`html
<!-- prettier-ignore -->
<div class="very-long-class-name" data-attr="value">Keep this format</div>
\`\`\`

## CLI Ignore

\`\`\`bash
# Format with ignore file
npx prettier --write .

# Ignore specific path
npx prettier --write . --ignore-path .gitignore

# Format only specific files (ignore .prettierignore)
npx prettier --write "src/**/*.js" --ignore-unknown
\`\`\`
  `,

  quiz: [
    { question: ".prettierignore?", options: ["Format rules", "Files/folders to exclude from formatting", "Plugin", "Config"], correctAnswer: 1 },
    { question: "prettier-ignore comment?", options: ["Ignore file", "Ignore specific code block inline", "Config", "CLI flag"], correctAnswer: 1 }
  ],

  codeExamples: []
};