export const chapter = {
  slug: "service-workers-offline-support",
  title: "Offline Support",
  description: "Bangun aplikasi yang tetap berfungsi tanpa internet.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["service-workers-caching-strategies"],
  tags: ["service-worker", "offline", "cache", "pwa"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Offline Page

\`\`\`javascript
// sw.js
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline').then(cache => cache.add(OFFLINE_URL))
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(OFFLINE_URL))
        );
    }
});
\`\`\`

## Detect Online/Offline

\`\`\`javascript
window.addEventListener('online', () => showToast('Back online!'));
window.addEventListener('offline', () => showToast('You are offline'));
console.log(navigator.onLine); // true/false
\`\`\`

## Offline Form Data

\`\`\`javascript
// Save form when offline, submit when online
async function submitForm(data) {
    if (!navigator.onLine) {
        await saveToIndexedDB('pending-forms', data);
        showToast('Saved offline. Will submit when online.');
        return;
    }
    await fetch('/api/submit', { method: 'POST', body: JSON.stringify(data) });
}

window.addEventListener('online', async () => {
    const pending = await getFromIndexedDB('pending-forms');
    for (const form of pending) {
        await submitForm(form);
    }
});
\`\`\`
  `,

  quiz: [
    { question: "Offline detection?", options: ["Manual", "navigator.onLine + events", "Not possible", "Server only"], correctAnswer: 1 },
    { question: "Offline form?", options: ["Discard", "Save locally, sync when online", "Error", "Ignore"], correctAnswer: 1 }
  ],

  codeExamples: []
};