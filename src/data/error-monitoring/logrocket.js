export const chapter = {
  slug: "error-monitoring-logrocket",
  title: "LogRocket & Session Replay",
  description: "Gunakan LogRocket untuk merekam session user dan debug error dengan video replay.",
  icon: "SiLogrocket",
  color: "#764ABC",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["error-monitoring-introduction"],
  tags: ["error-monitoring", "logrocket", "session-replay", "video"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu LogRocket?

LogRocket merekam **session user** seperti video (DOM + network + console + error). Bisa **playback** persis apa yang user lihat saat error terjadi.

## Setup LogRocket

\`\`\`bash
npm install logrocket
\`\`\`

\`\`\`javascript
import LogRocket from 'logrocket';

LogRocket.init('your-app-id', {
    // Redact data sensitif
    dom: {
        inputSanitizer: true,     // Sembunyikan input
        textSanitizer: true       // Sembunyikan teks sensitif
    },
    network: {
        requestSanitizer: (request) => {
            if (request.url.includes('auth')) {
                request.headers['Authorization'] = '[REDACTED]';
            }
            return request;
        }
    }
});

// Identify user
LogRocket.identify('user-123', {
    name: 'Budi Santoso',
    email: 'budi@email.com',
    plan: 'Pro'
});
\`\`\`

## Integrasi dengan Redux

\`\`\`javascript
import { applyMiddleware, createStore } from 'redux';

const store = createStore(
    reducer,
    applyMiddleware(LogRocket.reduxMiddleware())
);
\`\`\`

## Sentry + LogRocket

\`\`\`javascript
// Sentry error → LogRocket recording
Sentry.init({
    dsn: '...',
    beforeSend(event) {
        // Tambah URL LogRocket session ke Sentry
        event.tags = {
            ...event.tags,
            logRocketSession: LogRocket.sessionURL
        };
        return event;
    }
});
\`\`\`

## Alternative Open Source: Highlight.io

\`\`\`bash
npm install highlight.run
\`\`\`

\`\`\`javascript
import { H } from 'highlight.run';

H.init('YOUR_PROJECT_ID', {
    environment: 'production',
    version: '1.0.0',
    privacySetting: 'strict' // Redact by default
});
\`\`\`
  `,

  quiz: [
    { question: "LogRocket merekam?", options: ["Hanya error", "Session user seperti video (DOM+network+console)", "Hanya network", "Hanya console"], correctAnswer: 1 },
    { question: "Highlight.io vs LogRocket?", options: ["Sama", "Highlight: open source alternative", "LogRocket gratis", "Highlight lebih mahal"], correctAnswer: 1 }
  ],

  codeExamples: []
};