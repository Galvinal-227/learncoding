export const chapter = {
  slug: "service-workers-lifecycle",
  title: "Lifecycle",
  description: "Pahami lifecycle Service Worker: install, waiting, activate, fetch.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["service-workers-introduction"],
  tags: ["service-worker", "lifecycle", "install", "activate"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Lifecycle Stages

\`\`\`
Register → Install → Waiting → Activate → Fetch/Message → Terminated
\`\`\`

## Install Event

\`\`\`javascript
self.addEventListener('install', (event) => {
    console.log('SW installing...');
    
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/styles.css',
                '/app.js',
                '/logo.png'
            ]);
        })
    );
    self.skipWaiting(); // Activate immediately
});
\`\`\`

## Activate Event

\`\`\`javascript
self.addEventListener('activate', (event) => {
    console.log('SW activated!');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== 'v1')
                    .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim(); // Take control immediately
});
\`\`\`

## Update Flow

\`\`\`
1. Browser detects change in sw.js
2. New SW installs (but waits)
3. Old SW still running
4. All tabs closed → new SW activates
5. (Or use skipWaiting + clients.claim for immediate)
\`\`\`
  `,

  quiz: [
    { question: "skipWaiting()?", options: ["Wait for tabs", "Activate new SW immediately", "Stop SW", "Unregister"], correctAnswer: 1 },
    { question: "clients.claim()?", options: ["Wait", "Take control of all clients immediately", "Stop", "Unregister"], correctAnswer: 1 }
  ],

  codeExamples: []
};