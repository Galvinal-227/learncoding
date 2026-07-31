export const chapter = {
  slug: "caching",
  title: "Caching",
  description: "Mengimplementasikan caching untuk meningkatkan performa sistem.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["system-design-introduction"],
  tags: ["system-design", "caching", "redis", "performance"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Caching?

Caching adalah menyimpan data sementara untuk akses cepat, mengurangi beban database dan meningkatkan performa.

## Jenis Cache

### 1. Application Cache
\`\`\`
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
┌──────▼──────┐
│  Web Server │
└──────┬──────┘
       │
┌──────▼──────┐
│   Cache     │ ◄── Redis/Memcached
└──────┬──────┘
       │
┌──────▼──────┐
│  Database   │
└─────────────┘
\`\`\`

### 2. CDN Cache
\`\`\`
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
┌──────▼──────┐
│     CDN     │ ◄── Static assets
└─────────────┘
\`\`\`

### 3. Database Cache
\`\`\`
┌─────────────┐
│  Database   │
└──────┬──────┘
       │
┌──────▼──────┐
│ Query Cache │ ◄── Result caching
└─────────────┘
\`\`\`

## Caching Strategies

### Cache-Aside
\`\`\`
1. Check cache
2. If hit, return data
3. If miss, query DB
4. Store in cache
5. Return data
\`\`\`

### Write-Through
\`\`\`
1. Write to cache
2. Write to DB
3. Confirm success
\`\`\`

### Write-Back
\`\`\`
1. Write to cache
2. Return success
3. Async write to DB
\`\`\`

### Cache-Aside Implementation
\`\`\`javascript
async function getUser(id) {
    // 1. Check cache
    const cached = await redis.get(\`user:\${id}\`);
    if (cached) {
        return JSON.parse(cached);
    }
    
    // 2. Query database
    const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    
    // 3. Store in cache
    await redis.set(\`user:\${id}\`, JSON.stringify(user), 'EX', 3600);
    
    return user;
}
\`\`\`

## Cache Invalidation

### 1. Time-Based (TTL)
\`\`\`javascript
// Set TTL
await redis.set('key', 'value', 'EX', 3600); // 1 hour

// Check TTL
const ttl = await redis.ttl('key');
\`\`\`

### 2. Event-Based
\`\`\`javascript
// Invalidate on update
async function updateUser(id, data) {
    await db.query('UPDATE users SET ? WHERE id = ?', [data, id]);
    await redis.del(\`user:\${id}\`);
}
\`\`\`

### 3. Cache Pattern
\`\`\`javascript
// Pattern invalidation
await redis.del(\`user:*\`); // Delete all user cache
\`\`\`

## Cache Eviction Policies

| Policy | Deskripsi |
|--------|-----------|
| **LRU** | Least Recently Used |
| **LFU** | Least Frequently Used |
| **FIFO** | First In First Out |
| **TTL** | Time To Live |

## Redis Use Cases

### Session Storage
\`\`\`javascript
// Store session
await redis.set(\`session:\${sessionId}\`, JSON.stringify(session), 'EX', 86400);

// Get session
const session = await redis.get(\`session:\${sessionId}\`);
\`\`\`

### Rate Limiting
\`\`\`javascript
async function rateLimit(userId) {
    const key = \`rate:\${userId}\`;
    const requests = await redis.incr(key);
    
    if (requests === 1) {
        await redis.expire(key, 60); // 1 minute
    }
    
    return requests <= 100; // 100 requests per minute
}
\`\`\`

### Leaderboard
\`\`\`javascript
// Add score
await redis.zadd('leaderboard', score, userId);

// Get top 10
const top = await redis.zrevrange('leaderboard', 0, 9, 'WITHSCORES');
\`\`\`

## Cache Patterns

### Cache Stampede Prevention
\`\`\`javascript
async function getWithLock(key, fetchFn) {
    const cached = await redis.get(key);
    if (cached) return JSON.parse(cached);
    
    // Lock
    const lockKey = \`lock:\${key}\`;
    const locked = await redis.setnx(lockKey, '1');
    
    if (locked) {
        await redis.expire(lockKey, 5);
        const data = await fetchFn();
        await redis.set(key, JSON.stringify(data), 'EX', 3600);
        await redis.del(lockKey);
        return data;
    }
    
    // Wait and retry
    await sleep(100);
    return getWithLock(key, fetchFn);
}
\`\`\`

### Cache Warm-up
\`\`\`javascript
async function warmupCache() {
    const popular = await getPopularProducts();
    for (const product of popular) {
        await redis.set(\`product:\${product.id}\`, JSON.stringify(product), 'EX', 3600);
    }
}
\`\`\`

## Best Practices

1. **Use TTL** untuk semua cache
2. **Monitor hit rate** (>80% is good)
3. **Cache only** frequently accessed data
4. **Invalidate** on data changes
5. **Use cache-aside** pattern
6. **Handle cache failures** gracefully
7. **Compress large values**
8. **Use connection pooling**
9. **Implement cache versioning**
10. **Test with different loads**
  `,
  quiz: [
    {
      question: "Cache strategy yang menulis ke cache dan DB adalah?",
      options: [
        "Cache-Aside",
        "Write-Through",
        "Write-Back",
        "Cache-Only"
      ],
      correctAnswer: 1
    },
    {
      question: "Redis policy untuk menghapus data paling jarang digunakan?",
      options: [
        "LRU",
        "LFU",
        "FIFO",
        "TTL"
      ],
      correctAnswer: 1
    },
    {
      question: "Rate limiting biasanya menggunakan?",
      options: [
        "PostgreSQL",
        "Redis",
        "MongoDB",
        "Elasticsearch"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Caching System",
      code: `// cache.js - Complete Caching System
const redis = require('redis');
const { promisify } = require('util');

class CacheSystem {
    constructor(options = {}) {
        this.client = redis.createClient({
            url: options.url || 'redis://localhost:6379',
            ...options
        });
        
        this.defaultTTL = options.defaultTTL || 3600; // 1 hour
        this.enabled = options.enabled !== false;
    }
    
    async connect() {
        await this.client.connect();
        return this;
    }
    
    // ============ BASIC OPERATIONS ============
    async get(key) {
        if (!this.enabled) return null;
        const data = await this.client.get(key);
        return data ? JSON.parse(data) : null;
    }
    
    async set(key, value, ttl = this.defaultTTL) {
        if (!this.enabled) return;
        await this.client.set(key, JSON.stringify(value), {
            EX: ttl
        });
    }
    
    async del(key) {
        if (!this.enabled) return;
        await this.client.del(key);
    }
    
    async exists(key) {
        if (!this.enabled) return false;
        return await this.client.exists(key) === 1;
    }
    
    // ============ BATCH OPERATIONS ============
    async mget(keys) {
        if (!this.enabled || keys.length === 0) return [];
        const values = await this.client.mGet(keys);
        return values.map(v => v ? JSON.parse(v) : null);
    }
    
    async mset(items, ttl = this.defaultTTL) {
        if (!this.enabled) return;
        const pipeline = this.client.multi();
        
        for (const [key, value] of Object.entries(items)) {
            pipeline.set(key, JSON.stringify(value), { EX: ttl });
        }
        
        await pipeline.exec();
    }
    
    // ============ CACHE-ASIDE PATTERN ============
    async getOrSet(key, fetchFn, ttl = this.defaultTTL) {
        // Try cache
        const cached = await this.get(key);
        if (cached !== null) {
            return cached;
        }
        
        // Fetch from source
        const data = await fetchFn();
        
        // Store in cache
        if (data !== null) {
            await this.set(key, data, ttl);
        }
        
        return data;
    }
    
    // ============ RATE LIMITING ============
    async rateLimit(key, limit = 100, window = 60) {
        const current = await this.client.incr(\`rate:\${key}\`);
        
        if (current === 1) {
            await this.client.expire(\`rate:\${key}\`, window);
        }
        
        return {
            allowed: current <= limit,
            current,
            limit,
            remaining: Math.max(0, limit - current),
            reset: await this.client.ttl(\`rate:\${key}\`)
        };
    }
    
    // ============ SESSION MANAGEMENT ============
    async setSession(sessionId, data, ttl = 86400) {
        await this.set(\`session:\${sessionId}\`, data, ttl);
    }
    
    async getSession(sessionId) {
        return await this.get(\`session:\${sessionId}\`);
    }
    
    async deleteSession(sessionId) {
        await this.del(\`session:\${sessionId}\`);
    }
    
    // ============ LOCK (Distributed Lock) ============
    async acquireLock(key, ttl = 10) {
        const lockKey = \`lock:\${key}\`;
        const acquired = await this.client.set(lockKey, '1', {
            NX: true,
            EX: ttl
        });
        return acquired === 'OK';
    }
    
    async releaseLock(key) {
        await this.del(\`lock:\${key}\`);
    }
    
    // ============ CACHE STAMPEDE PREVENTION ============
    async getWithLock(key, fetchFn, ttl = this.defaultTTL) {
        // Try cache
        const cached = await this.get(key);
        if (cached !== null) {
            return cached;
        }
        
        // Try acquire lock
        const lockKey = \`lock:\${key}\`;
        const locked = await this.acquireLock(lockKey, 5);
        
        if (locked) {
            try {
                const data = await fetchFn();
                await this.set(key, data, ttl);
                return data;
            } finally {
                await this.releaseLock(lockKey);
            }
        }
        
        // Wait and retry
        await new Promise(resolve => setTimeout(resolve, 100));
        return this.getWithLock(key, fetchFn, ttl);
    }
    
    // ============ LEADERBOARD ============
    async addToLeaderboard(name, member, score) {
        await this.client.zAdd(name, {
            score,
            value: member
        });
    }
    
    async getLeaderboard(name, start = 0, end = 9) {
        const result = await this.client.zRange(name, start, end, {
            REV: true,
            WITHSCORES: true
        });
        
        const entries = [];
        for (let i = 0; i < result.length; i += 2) {
            entries.push({
                member: result[i],
                score: parseFloat(result[i + 1])
            });
        }
        return entries;
    }
    
    // ============ CACHE WARMUP ============
    async warmup(keys, fetchFn) {
        for (const key of keys) {
            const data = await fetchFn(key);
            if (data) {
                await this.set(key, data);
            }
        }
    }
    
    // ============ STATISTICS ============
    async getStats() {
        const info = await this.client.info('stats');
        return {
            totalConnections: info.total_connections_received,
            commandsProcessed: info.total_commands_processed,
            connectedClients: info.connected_clients,
            usedMemory: info.used_memory_human
        };
    }
    
    // ============ CLEANUP ============
    async clear(pattern = '*') {
        const keys = await this.client.keys(pattern);
        if (keys.length > 0) {
            await this.client.del(keys);
        }
        return keys.length;
    }
    
    async disconnect() {
        await this.client.quit();
    }
}

// ============ USAGE EXAMPLES ============

// 1. Basic Usage
const cache = new CacheSystem({
    url: 'redis://localhost:6379',
    defaultTTL: 3600
});

await cache.connect();

// Store and retrieve
await cache.set('user:1', { id: 1, name: 'John' });
const user = await cache.get('user:1');
console.log('User:', user);

// 2. Cache-Aside Pattern
const getUser = async (id) => {
    return await cache.getOrSet(
        \`user:\${id}\`,
        async () => {
            // Simulate DB query
            return { id, name: \`User \${id}\` };
        },
        3600
    );
};

const user1 = await getUser(1);
console.log('User 1:', user1);

// 3. Rate Limiting
const result = await cache.rateLimit('user:1:api', 10, 60);
console.log('Rate Limit:', result);

// 4. Session Management
await cache.setSession('session-abc', { userId: 1, role: 'admin' });
const session = await cache.getSession('session-abc');
console.log('Session:', session);

// 5. Leaderboard
await cache.addToLeaderboard('game:leaderboard', 'player1', 100);
await cache.addToLeaderboard('game:leaderboard', 'player2', 200);
await cache.addToLeaderboard('game:leaderboard', 'player3', 150);

const topPlayers = await cache.getLeaderboard('game:leaderboard');
console.log('Leaderboard:', topPlayers);

// 6. Distributed Lock
const locked = await cache.acquireLock('resource:1', 10);
if (locked) {
    try {
        // Critical section
        console.log('Lock acquired!');
    } finally {
        await cache.releaseLock('resource:1');
    }
}

// 7. Clear cache
await cache.clear('user:*');
console.log('Cache cleared for user pattern');

await cache.disconnect();`,
      language: "javascript"
    }
  ]
};