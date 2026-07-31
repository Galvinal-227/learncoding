export const chapter = {
  slug: "pwa-service-workers",
  title: "Service Workers",
  description: "Kuasai Service Workers untuk caching, offline support, dan background sync.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["pwa-manifest"],
  tags: ["pwa", "service-worker", "caching", "background"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Service Worker?

Service Worker adalah **JavaScript yang berjalan di background**, terpisah dari halaman web. Bertindak sebagai **proxy network** - bisa intercept request, cache, dan handle offline.

## Lifecycle

\`\`\`
install → waiting → activate → fetch/message → terminated
\`\`\`

## Register Service Worker

\`\`\`javascript
// app.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration.scope);
            })
            .catch(error => {
                console.error('SW registration failed:', error);
            });
    });
}
\`\`\`

## Basic Service Worker

\`\`\`javascript
// sw.js
const CACHE_NAME = 'my-pwa-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/app.js',
    '/logo.png',
    '/offline.html'
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                return cached || fetch(event.request);
            })
            .catch(() => {
                return caches.match('/offline.html');
            })
    );
});
\`\`\`

## Update Service Worker

\`\`\`javascript
// Listen for new SW
navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
});

// Force update
navigator.serviceWorker.getRegistration().then(reg => {
    if (reg) reg.update();
});
\`\`\`

## Debugging

\`\`\`
Chrome DevTools → Application → Service Workers:
- Lihat status
- Unregister
- Update
- Bypass for network
- Test offline (Offline checkbox)
\`\`\`
  `,

  quiz: [
    { question: "Service Worker?", options: ["Main thread", "Background script (proxy, cache, offline)", "UI component", "Database"], correctAnswer: 1 },
    { question: "SW: self.skipWaiting()?", options: ["Wait", "Activate immediately (don't wait)", "Stop", "Error"], correctAnswer: 1 },
    { question: "SW: clients.claim()?", options: ["Ignore", "Take control of all clients immediately", "Wait", "Error"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Register + Basic SW",
      language: "javascript",
      code: `// Register
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then(cache =>
            cache.addAll(['/', '/styles.css', '/app.js'])
        )
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(res => res || fetch(event.request))
    );
});`
    }
  ]
};