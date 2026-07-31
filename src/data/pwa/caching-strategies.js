export const chapter = {
  slug: "pwa-caching-strategies",
  title: "Caching Strategies",
  description: "Strategi caching PWA: Cache First, Network First, Stale-While-Revalidate.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["pwa-service-workers"],
  tags: ["pwa", "caching", "strategies", "workbox"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 5 Caching Strategies

### 1. Cache First (Static Assets)
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request))
    );
});
// Use: CSS, JS, images, fonts
\`\`\`

### 2. Network First (API Data)
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clone = response.clone();
                caches.open('dynamic').then(cache => {
                    cache.put(event.request, clone);
                });
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
// Use: API responses, user data
\`\`\`

### 3. Stale-While-Revalidate (Best UX)
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            const fetchPromise = fetch(event.request).then(response => {
                caches.open('dynamic').then(cache => {
                    cache.put(event.request, response.clone());
                });
                return response;
            });
            return cached || fetchPromise;
        })
    );
});
// Use: Balance speed + freshness
\`\`\`

### 4. Cache Only
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request));
});
// Use: App shell, offline-only resources
\`\`\`

### 5. Network Only
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
// Use: Real-time data, analytics
\`\`\`

## Strategy Selection Guide

| Content Type | Strategy |
|-------------|----------|
| HTML (app shell) | Cache First |
| CSS, JS, fonts | Cache First |
| Images | Stale-While-Revalidate |
| API data | Network First |
| User profile | Network First |
| Analytics | Network Only |
| Offline page | Cache Only |

## Workbox (Simplified)

\`\`\`bash
npm install workbox-webpack-plugin
\`\`\`

\`\`\`javascript
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

// CSS/JS - Cache First
registerRoute(
    ({ request }) => request.destination === 'style' || request.destination === 'script',
    new CacheFirst({ cacheName: 'static-resources' })
);

// Images - Stale While Revalidate
registerRoute(
    ({ request }) => request.destination === 'image',
    new StaleWhileRevalidate({ cacheName: 'images' })
);

// API - Network First
registerRoute(
    ({ url }) => url.pathname.startsWith('/api/'),
    new NetworkFirst({ cacheName: 'api', networkTimeoutSeconds: 3 })
);
\`\`\`
  `,

  quiz: [
    { question: "Cache First?", options: ["Network dulu", "Cache dulu (static assets)", "No cache", "Always network"], correctAnswer: 1 },
    { question: "Stale-While-Revalidate?", options: ["Cache only", "Cache first, then update cache from network", "Network only", "No cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};