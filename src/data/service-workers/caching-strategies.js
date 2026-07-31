export const chapter = {
  slug: "service-workers-caching-strategies",
  title: "Caching Strategies",
  description: "Kuasai caching strategies: Cache First, Network First, Stale-While-Revalidate.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["service-workers-lifecycle"],
  tags: ["service-worker", "caching", "strategies", "performance"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## 5 Caching Strategies

### 1. Cache First (Static Assets)
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request);
        })
    );
});
// Use: CSS, JS, images, fonts
\`\`\`

### 2. Network First (API Data)
\`\`\`javascript
event.respondWith(
    fetch(event.request)
        .then(response => {
            const clone = response.clone();
            caches.open('dynamic').then(cache => cache.put(event.request, clone));
            return response;
        })
        .catch(() => caches.match(event.request))
);
// Use: API responses, fresh data
\`\`\`

### 3. Stale-While-Revalidate
\`\`\`javascript
event.respondWith(
    caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
            caches.open('dynamic').then(cache => cache.put(event.request, response.clone()));
            return response;
        });
        return cached || fetchPromise;
    })
);
// Use: Balance speed + freshness
\`\`\`

### 4. Cache Only
### 5. Network Only

## Strategy Selection

| Content | Strategy |
|---------|----------|
| App shell (HTML) | Cache First |
| CSS, JS, fonts | Cache First |
| Images | Stale-While-Revalidate |
| API data | Network First |
| Analytics | Network Only |
  `,

  quiz: [
    { question: "Cache First?", options: ["Network first", "Cache first, network fallback", "No cache", "Cache only"], correctAnswer: 1 },
    { question: "Stale-While-Revalidate?", options: ["Cache only", "Cache then update from network", "Network only", "No cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};