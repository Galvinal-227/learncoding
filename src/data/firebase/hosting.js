export const chapter = {
  slug: "firebase-hosting",
  title: "Firebase Hosting",
  description: "Deploy aplikasi web ke Firebase Hosting dengan SSL dan CDN global.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["firebase-introduction"],
  tags: ["firebase", "hosting", "deploy", "cdn"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`bash
firebase init hosting
# Pilih: project, public folder (dist/build), SPA mode
\`\`\`

## Deploy

\`\`\`bash
firebase deploy --only hosting
\`\`\`

## CI/CD (GitHub Actions)

\`\`\`yaml
name: Deploy to Firebase
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          firebaseServiceAccount: \${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          channelId: live
\`\`\`
  `,

  quiz: [
    { question: "Deploy hosting?", options: ["firebase deploy", "firebase deploy --only hosting", "firebase upload", "firebase host"], correctAnswer: 1 }
  ],

  codeExamples: []
};