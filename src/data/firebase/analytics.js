export const chapter = {
  slug: "firebase-analytics",
  title: "Firebase Analytics",
  description: "Track user behavior dengan Firebase Analytics.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["firebase-introduction"],
  tags: ["firebase", "analytics", "tracking", "events"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`javascript
import { getAnalytics, logEvent } from 'firebase/analytics';

const analytics = getAnalytics();
\`\`\`

## Custom Events

\`\`\`javascript
logEvent(analytics, 'purchase', {
    value: 99000,
    currency: 'IDR',
    items: [{ name: 'Sepatu', quantity: 1 }]
});

logEvent(analytics, 'search', { search_term: 'sepatu lari' });
logEvent(analytics, 'share', { content_type: 'article' });
\`\`\`
  `,

  quiz: [
    { question: "logEvent untuk?", options: ["Error", "Track custom events", "Auth", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};