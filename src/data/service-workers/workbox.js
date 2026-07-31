export const chapter = {
  slug: "service-workers-workbox",
  title: "Workbox (Google Library)",
  description: "Gunakan Workbox untuk Service Worker yang lebih mudah dan production-ready.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["service-workers-caching-strategies"],
  tags: ["service-worker", "workbox", "google", "library"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Why Workbox?

Workbox abstracts Service Worker complexity. Made by Google.

## Setup

\`\`\`bash
npm install workbox-webpack-plugin
\`\`\`

\`\`\`javascript
// webpack.config.js
import { GenerateSW } from 'workbox-webpack-plugin';

plugins: [
    new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
            {
                urlPattern: /\\/api\\/.*/,
                handler: 'NetworkFirst',
                options: { cacheName: 'api-cache' }
            },
            {
                urlPattern: /\\.(?:png|jpg|jpeg|svg)$/,
                handler: 'CacheFirst',
                options: { cacheName: 'images' }
            }
        ]
    })
]
\`\`\`

## Workbox Strategies

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
    { question: "Workbox?", options: ["CSS framework", "Google SW library (easier)", "Database", "Server"], correctAnswer: 1 },
    { question: "GenerateSW?", options: ["Manual SW", "Auto-generate SW with config", "Delete SW", "Debug SW"], correctAnswer: 1 }
  ],

  codeExamples: []
};