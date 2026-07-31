export const chapter = {
  slug: "firebase-cloud-functions",
  title: "Cloud Functions",
  description: "Buat serverless functions dengan Firebase Cloud Functions.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["firebase-firestore"],
  tags: ["firebase", "functions", "serverless", "backend"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`bash
firebase init functions
# Pilih: TypeScript, ESLint
\`\`\`

## HTTP Function

\`\`\`javascript
import { onRequest } from 'firebase-functions/v2/https';

export const helloWorld = onRequest((req, res) => {
    res.json({ message: 'Hello from Firebase!' });
});

// Deploy: https://us-central1-project.cloudfunctions.net/helloWorld
\`\`\`

## Firestore Trigger

\`\`\`javascript
import { onDocumentCreated } from 'firebase-functions/v2/firestore';

export const onUserCreated = onDocumentCreated('users/{userId}', async (event) => {
    const userData = event.data?.data();
    console.log('New user:', userData?.name);
    
    // Kirim welcome email, buat profile, dll
});
\`\`\`

## Auth Trigger

\`\`\`javascript
import { onUserCreated } from 'firebase-functions/v2/identity';

export const onNewUser = onUserCreated(async (event) => {
    const user = event.data;
    console.log('New auth user:', user.email);
});
\`\`\`

## Deploy

\`\`\`bash
firebase deploy --only functions
firebase deploy --only functions:helloWorld
\`\`\`
  `,

  quiz: [
    { question: "onDocumentCreated trigger?", options: ["HTTP request", "Saat dokumen baru dibuat di Firestore", "Auth login", "Storage upload"], correctAnswer: 1 },
    { question: "Deploy functions?", options: ["firebase deploy", "firebase deploy --only functions", "npm deploy", "firebase upload"], correctAnswer: 1 }
  ],

  codeExamples: []
};