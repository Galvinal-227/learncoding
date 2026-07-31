export const chapter = {
  slug: "web-storage-cache-api",
  title: "Cache API",
  description: "Gunakan Cache API untuk menyimpan response network dan offline support.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-storage-indexed-db"],
  tags: ["web-storage", "cache", "offline", "service-worker"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Cache API Basics

Cache API adalah storage untuk **Request/Response pairs**. Biasanya digunakan di **Service Workers**.

## Open Cache

\`\`\`javascript
const cache = await caches.open('my-cache-v1');
\`\`\`

## Add to Cache

\`\`\`javascript
// Add single URL
await cache.add('/styles.css');

// Add multiple
await cache.addAll([
    '/',
    '/styles.css',
    '/app.js',
    '/logo.png'
]);

// Add custom response
await cache.put('/api/data', new Response(JSON.stringify({ data: 'cached' })));
\`\`\`

## Get from Cache

\`\`\`javascript
const response = await cache.match('/styles.css');
if (response) {
    const css = await response.text();
    console.log(css);
}

// Match all
const keys = await cache.keys();
const allResponses = await Promise.all(keys.map(key => cache.match(key)));
\`\`\`

## Delete from Cache

\`\`\`javascript
await cache.delete('/styles.css');

// Delete entire cache
await caches.delete('my-cache-v1');

// List all caches
const cacheNames = await caches.keys();
\`\`\`

## Service Worker Caching Strategies

### Cache First (Static Assets)
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request);
        })
    );
});
\`\`\`

### Network First (API Data)
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clone = response.clone();
                caches.open('dynamic').then(cache => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
\`\`\`

## Cache vs IndexedDB

| | Cache API | IndexedDB |
|---|----------|-----------|
| Data | Request/Response | Any structured data |
| Use case | Network resources | App data |
| Service Worker | ✅ | ✅ |
| Query | By URL only | Indexed queries |
\`\`\`
  `,

  quiz: [
    { question: "Cache API?", options: ["Database", "Request/Response caching (Service Worker)", "Cookies", "localStorage"], correctAnswer: 1 },
    { question: "cache.addAll()?", options: ["Single file", "Cache multiple URLs at once", "Delete all", "Query"], correctAnswer: 1 }
  ],

  codeExamples: []
};