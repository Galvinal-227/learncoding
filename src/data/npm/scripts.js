export const chapter = {
  slug: "npm-scripts",
  title: "NPM Scripts",
  description: "Otomatisasi workflow development dengan NPM scripts: build, test, lint, deploy.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["npm-introduction"],
  tags: ["npm", "scripts", "automation", "task-runner"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Scripts

\`\`\`json
{
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js",
        "build": "webpack --mode production",
        "test": "jest --coverage",
        "lint": "eslint src/",
        "format": "prettier --write ."
    }
}
\`\`\`

## Shortcut Commands

\`\`\`bash
npm start        # npm run start
npm test         # npm run test
npm run build    # Custom scripts need "run"
\`\`\`

## Pre/Post Hooks (Auto!)

\`\`\`json
{
    "scripts": {
        "prebuild": "npm run clean",
        "build": "webpack",
        "postbuild": "echo 'Build complete!'"
    }
}
# npm run build → prebuild → build → postbuild
\`\`\`

## Run Multiple Commands

\`\`\`json
{
    "scripts": {
        "deploy": "npm run build && npm run test && npm run upload",
        "dev": "concurrently \"npm run server\" \"npm run client\""
    }
}
\`\`\`

## Pass Arguments

\`\`\`bash
npm run test -- --watch
npm run build -- --mode development
\`\`\`

## Lifecycle Scripts

\`\`\`json
{
    "scripts": {
        "prepare": "husky install",    // After npm install
        "prepublishOnly": "npm test",  // Before npm publish
        "postinstall": "node setup.js" // After install
    }
}
\`\`\`

## Environment

\`\`\`json
{
    "scripts": {
        "dev": "NODE_ENV=development node app.js",
        "prod": "NODE_ENV=production node app.js"
    }
}
\`\`\`
  `,

  quiz: [
    { question: "npm start?", options: ["Custom", "Built-in shortcut (no 'run' needed)", "Install", "Test"], correctAnswer: 1 },
    { question: "prebuild script?", options: ["Manual", "Auto-run before build", "After build", "Skip build"], correctAnswer: 1 }
  ],

  codeExamples: []
};