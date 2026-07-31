export const chapter = {
  slug: "serverless-cloud-functions",
  title: "Cloud Functions (GCP/Firebase)",
  description: "Bangun serverless functions dengan Google Cloud Functions dan Firebase.",
  icon: "SiGooglecloud",
  color: "#4285F4",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["serverless-introduction"],
  tags: ["serverless", "gcp", "firebase", "cloud-functions"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Firebase Cloud Functions v2

\`\`\`javascript
import { onRequest } from 'firebase-functions/v2/https';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { onUserCreated } from 'firebase-functions/v2/identity';

// HTTP Function
export const helloWorld = onRequest((req, res) => {
    res.json({ message: 'Hello from Firebase!' });
});

// Firestore Trigger
export const onUserCreate = onDocumentCreated('users/{userId}', async (event) => {
    const userData = event.data?.data();
    await sendWelcomeEmail(userData.email);
    console.log('Welcome email sent to:', userData.email);
});

// Auth Trigger
export const onNewUser = onUserCreated(async (event) => {
    const user = event.data;
    await admin.firestore().collection('users').doc(user.uid).set({
        email: user.email,
        createdAt: new Date()
    });
});
\`\`\`

## Deploy

\`\`\`bash
firebase deploy --only functions
firebase deploy --only functions:helloWorld
\`\`\`

## Firebase vs AWS Lambda

| | Firebase | AWS Lambda |
|---|---------|------------|
| Setup | Super easy | Complex |
| Triggers | Firestore, Auth | 200+ services |
| Cold start | Similar | Similar |
| Free tier | 2M/month | 1M/month |
| Best for | Firebase users | General purpose |
  `,

  quiz: [
    { question: "Firebase: onDocumentCreated?", options: ["HTTP request", "Trigger when Firestore doc created", "Auth trigger", "Storage trigger"], correctAnswer: 1 },
    { question: "Deploy Firebase functions?", options: ["firebase deploy --only functions", "npm deploy", "git push", "docker push"], correctAnswer: 1 }
  ],

  codeExamples: []
};