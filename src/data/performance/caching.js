export const chapter = {
  slug: "performance-caching",
  title: "Caching Strategies",
  description: "Implementasi caching: HTTP cache, Service Worker, Redis, CDN.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["performance-introduction"],
  tags: ["performance", "caching", "cache-control", "redis"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## HTTP Cache Headers

\`\`\`nginx
# Static assets - long cache
location ~* \\.(js|css|png|jpg|svg|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTML - no cache (always fresh)
location / {
    expires -1;
    add_header Cache-Control "no-cache, must-revalidate";
}
\`\`\`

\`\`\`javascript
// Express
app.use('/static', express.static('public', {
    maxAge: '30d',
    immutable: true
}));

app.get('/api/data', (req, res) => {
    res.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
    res.json(data);
});
\`\`\`

## Service Worker Cache

\`\`\`javascript
// sw.js
const CACHE_NAME = 'v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/styles.css',
                '/app.js',
                '/logo.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request);
        })
    );
});
\`\`\`

## Redis Caching (API)

\`\`\`javascript
import Redis from 'ioredis';
const redis = new Redis();

async function getCachedData(key, fetchFn, ttl = 3600) {
    const cached = await redis.get(key);
    if (cached) return JSON.parse(cached);
    
    const data = await fetchFn();
    await redis.setex(key, ttl, JSON.stringify(data));
    return data;
}

// Usage
app.get('/api/users', async (req, res) => {
    const users = await getCachedData('users', () => User.findAll(), 3600);
    res.json(users);
});
\`\`\`

## Cache Strategies

| Strategy | Use Case |
|----------|----------|
| **Cache-First** | Static assets (images, fonts) |
| **Network-First** | API data yang sering update |
| **Stale-While-Revalidate** | Balance freshness + speed |
| **Cache-Only** | Offline content |
| **Network-Only** | Real-time data |
  `,

  quiz: [
    { question: "Cache-Control: immutable?", options: ["Never cache", "File never changes (long cache)", "Short cache", "No cache"], correctAnswer: 1 },
    { question: "Cache-First strategy?", options: ["Network dulu", "Cache dulu (static assets)", "Offline only", "No cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};