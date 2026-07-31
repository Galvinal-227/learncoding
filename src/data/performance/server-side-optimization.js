export const chapter = {
  slug: "performance-server-side-optimization",
  title: "Server-Side Optimization",
  description: "Optimasi server: database indexing, connection pooling, load balancing, SSR streaming.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["performance-caching"],
  tags: ["performance", "server", "database", "optimization"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Database Optimization

### Indexing
\`\`\`sql
-- Slow query (full table scan)
SELECT * FROM users WHERE email = 'budi@email.com';

-- Add index (instant lookup)
CREATE INDEX idx_email ON users(email);

-- Compound index
CREATE INDEX idx_status_created ON orders(status, created_at);

-- Check query plan
EXPLAIN SELECT * FROM orders WHERE status = 'pending';
\`\`\`

### Query Optimization
\`\`\`javascript
// ❌ N+1 Problem
const users = await User.findAll();
for (const user of users) {
    user.posts = await Post.findAll({ where: { userId: user.id } });
}

// ✅ Eager Loading
const users = await User.findAll({
    include: [{ model: Post }]
});

// ✅ Select only needed fields
const users = await User.findAll({
    attributes: ['id', 'name', 'email']  // Not SELECT *
});

// ✅ Pagination
const users = await User.findAll({
    limit: 20,
    offset: 0
});
\`\`\`

## Connection Pooling

\`\`\`javascript
// Database pool
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    connectionLimit: 20,     // Max concurrent connections
    waitForConnections: true,
    queueLimit: 0
});

// Redis pool
import Redis from 'ioredis';
const redis = new Redis({
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: true
});
\`\`\`

## Load Balancing (Nginx)

\`\`\`nginx
upstream backend {
    least_conn;  # Kirim ke server paling sepi
    server 10.0.0.1:3000 weight=3;  # Server kuat
    server 10.0.0.2:3000 weight=1;  # Server lemah
    keepalive 32;
}

server {
    location /api/ {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
\`\`\`

## SSR Streaming (React/Next.js)

\`\`\`jsx
// Next.js App Router - Streaming by default!
import { Suspense } from 'react';

export default function Page() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Slow component doesn't block fast ones */}
            <Suspense fallback={<Skeleton />}>
                <SlowChart />
            </Suspense>
            <Suspense fallback={<Skeleton />}>
                <SlowStats />
            </Suspense>
        </div>
    );
}
\`\`\`

## Node.js Performance

\`\`\`javascript
// 1. Cluster (multi-core)
import cluster from 'cluster';
import { availableParallelism } from 'os';

if (cluster.isPrimary) {
    const numCPUs = availableParallelism();
    for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
    app.listen(3000);
}

// 2. Stream large responses
app.get('/large-data', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const cursor = db.collection('users').find().stream();
    cursor.pipe(JSONStream.stringify()).pipe(res);
});

// 3. Avoid blocking event loop
// ❌ JSON.parse(hugeString) → blocking
// ✅ Stream JSON parser
\`\`\`

## API Response Optimization

\`\`\`javascript
// 1. Compression (see compression.js)
// 2. Caching (see caching.js)
// 3. Pagination
app.get('/api/users', async (req, res) => {
    const { page = 1, limit = 20 } = req.query;
    const users = await User.findAll({
        limit: +limit,
        offset: (+page - 1) * +limit
    });
    res.json({ data: users, page, limit });
});

// 4. Partial Response (GraphQL-like)
app.get('/api/users', async (req, res) => {
    const { fields } = req.query;  // ?fields=name,email
    const attributes = fields ? fields.split(',') : undefined;
    const users = await User.findAll({ attributes });
    res.json(users);
});

// 5. Conditional Requests (ETag)
app.get('/api/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    const etag = generateETag(user);
    
    if (req.headers['if-none-match'] === etag) {
        return res.status(304).end();  // Not Modified
    }
    
    res.set('ETag', etag);
    res.json(user);
});
\`\`\`

## CDN & Edge Computing

\`\`\`javascript
// Vercel Edge Functions
export const config = { runtime: 'edge' };

export default async function handler(req) {
    // Runs at edge, close to user
    return new Response(JSON.stringify({ data: 'fast!' }), {
        headers: { 'content-type': 'application/json' }
    });
}

// Cloudflare Workers
export default {
    async fetch(request, env, ctx) {
        // Cache API response at edge
        const cacheKey = new Request(request.url, request);
        const cache = caches.default;
        
        let response = await cache.match(cacheKey);
        if (!response) {
            response = await fetch(request);
            ctx.waitUntil(cache.put(cacheKey, response.clone()));
        }
        
        return response;
    }
};
\`\`\`

## Server Optimization Checklist

\`\`\`
✅ Database indexes (cek EXPLAIN)
✅ Eager loading (hindari N+1)
✅ Connection pooling
✅ Response compression (Gzip/Brotli)
✅ HTTP caching (Cache-Control, ETag)
✅ Load balancing (multiple instances)
✅ Streaming responses (large data)
✅ CDN for static assets
✅ Edge functions (close to user)
✅ Database query optimization
✅ PM2 cluster mode (multi-core)
✅ Monitoring (New Relic, Datadog)
\`\`\`
  `,

  quiz: [
    { question: "N+1 problem?", options: ["Performance", "Query in loop → many queries (eager loading solves)", "Database error", "Network issue"], correctAnswer: 1 },
    { question: "Connection pooling?", options: ["One connection", "Reuse connections (more efficient)", "HTTP/2", "WebSocket"], correctAnswer: 1 },
    { question: "ETag?", options: ["Error", "Conditional request (304 Not Modified)", "Token", "Cookie"], correctAnswer: 1 }
  ],

  codeExamples: []
};