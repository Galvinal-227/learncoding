export const chapter = {
  slug: "rate-limiting",
  title: "Rate Limiting",
  description: "Mengimplementasikan rate limiting untuk melindungi API dari serangan brute force dan DDoS.",
  icon: "SiDdos",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["security-introduction"],
  tags: ["rate-limiting", "express", "brute-force", "ddos"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Rate Limiting?

Rate limiting adalah teknik untuk membatasi jumlah request yang dapat dilakukan oleh client dalam periode waktu tertentu untuk melindungi server dari overload dan serangan.

## Instalasi

\`\`\`bash
npm install express-rate-limit
npm install rate-limit-redis  # Optional: for Redis store
\`\`\`

## Basic Usage

\`\`\`javascript
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Basic rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: {
        error: 'Too many requests',
        message: 'Please try again later'
    }
});

// Apply to all routes
app.use(limiter);

// Or specific routes
app.use('/api', limiter);
app.use('/auth', limiter);
\`\`\`

## Configuration Options

\`\`\`javascript
const limiter = rateLimit({
    // Time window in milliseconds
    windowMs: 15 * 60 * 1000, // 15 minutes
    
    // Maximum requests per window
    max: 100,
    
    // Custom message
    message: {
        error: 'Too many requests',
        retryAfter: '15 minutes'
    },
    
    // Status code
    statusCode: 429,
    
    // Headers
    standardHeaders: true, // Return rate limit info in RateLimit-* headers
    legacyHeaders: false, // Disable X-RateLimit-* headers
    
    // Key generator (default: IP)
    keyGenerator: (req) => {
        return req.ip || req.connection.remoteAddress;
    },
    
    // Skip certain requests
    skip: (req) => {
        // Skip if request is from localhost
        return req.ip === '127.0.0.1';
    },
    
    // Custom handler
    handler: (req, res) => {
        res.status(429).json({
            error: 'Too many requests',
            message: 'Please wait before making more requests',
            retryAfter: Math.ceil(req.rateLimit.resetTime / 1000)
        });
    },
    
    // Store (default: MemoryStore)
    store: new MemoryStore()
});
\`\`\`

## Different Rate Limiters

### 1. API Rate Limiter
\`\`\`javascript
const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 60, // 60 requests per minute
    message: {
        error: 'API rate limit exceeded',
        message: 'Maximum 60 requests per minute'
    }
});

app.use('/api', apiLimiter);
\`\`\`

### 2. Auth Rate Limiter (Login, Register)
\`\`\`javascript
const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 attempts per hour
    message: {
        error: 'Too many login attempts',
        message: 'Please try again after 1 hour'
    },
    skipSuccessfulRequests: true // Don't count successful logins
});

app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);
\`\`\`

### 3. IP-based Rate Limiter
\`\`\`javascript
const ipLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    max: 1000, // 1000 requests per day
    keyGenerator: (req) => {
        return req.ip;
    },
    skip: (req) => {
        // Skip if request has API key
        return req.headers['x-api-key'] !== undefined;
    }
});

app.use('/', ipLimiter);
\`\`\`

## Redis Store

\`\`\`javascript
const RedisStore = require('rate-limit-redis');
const redis = require('redis');

const redisClient = redis.createClient({
    url: process.env.REDIS_URL
});

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    store: new RedisStore({
        client: redisClient,
        prefix: 'rate-limit:',
        resetExpiryOnChange: true,
        commands: {
            incr: 'incr',
            expire: 'expire',
            ttl: 'ttl'
        }
    })
});
\`\`\`

## Advanced Rate Limiting

### 1. Different Limits per Endpoint
\`\`\`javascript
// Public endpoints - 100 req/min
const publicLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100
});

// Private endpoints - 1000 req/min
const privateLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 1000,
    skip: (req) => {
        // Skip if user has premium subscription
        return req.user && req.user.isPremium;
    }
});

app.use('/api/public', publicLimiter);
app.use('/api/private', privateLimiter);
\`\`\`

### 2. User-based Rate Limiting
\`\`\`javascript
const userLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: (req) => {
        // Different limits based on user tier
        if (req.user && req.user.tier === 'premium') {
            return 1000;
        } else if (req.user && req.user.tier === 'pro') {
            return 500;
        }
        return 100;
    },
    keyGenerator: (req) => {
        // Use user ID instead of IP
        return req.user ? req.user.id : req.ip;
    }
});

app.use('/api', userLimiter);
\`\`\`

### 3. Rate Limiting with Routes
\`\`\`javascript
// Custom rate limiter per route
const createRateLimiter = (max, windowMs = 60 * 1000) => {
    return rateLimit({
        windowMs,
        max,
        message: {
            error: \`Rate limit exceeded. Max \${max} requests per \${windowMs/1000} seconds\`
        }
    });
};

// Different limits for different routes
app.post('/api/upload', createRateLimiter(10, 60 * 1000)); // 10/min
app.get('/api/data', createRateLimiter(1000, 60 * 1000)); // 1000/min
app.post('/api/auth/login', createRateLimiter(5, 60 * 60 * 1000)); // 5/hour
\`\`\`

## Response Headers

\`\`\`javascript
// Rate limiting headers
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true, // RateLimit-*
    legacyHeaders: false, // X-RateLimit-*
});

// Response headers:
// RateLimit-Limit: 100
// RateLimit-Remaining: 85
// RateLimit-Reset: 1620000000
\`\`\`

## Custom Error Handler

\`\`\`javascript
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    handler: (req, res, next, options) => {
        // Custom error response
        res.status(429).json({
            error: {
                code: 'RATE_LIMIT_EXCEEDED',
                message: 'Too many requests',
                retryAfter: Math.ceil(req.rateLimit.resetTime / 1000),
                limit: options.max,
                current: req.rateLimit.current,
                remaining: req.rateLimit.remaining,
                resetTime: new Date(req.rateLimit.resetTime)
            }
        });
        
        // Log rate limit events
        console.log('Rate limit exceeded:', {
            ip: req.ip,
            path: req.path,
            method: req.method,
            limit: options.max
        });
    }
});
\`\`\`

## Global vs Per-Route

### Global Rate Limiter
\`\`\`javascript
// Apply to all routes
const globalLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100
});
app.use(globalLimiter);
\`\`\`

### Per-Route Rate Limiter
\`\`\`javascript
// Different limits for different routes
app.get('/api/public', publicLimiter, handler);
app.post('/api/private', privateLimiter, handler);
app.post('/api/auth/login', authLimiter, authHandler);
\`\`\`

## Best Practices

1. **Start with global limiter** for basic protection
2. **Add specific limiters** for sensitive endpoints (auth, API)
3. **Use Redis store** for production (scalable)
4. **Monitor rate limit events** for security
5. **Set appropriate limits** based on usage patterns
6. **Skip successful requests** for auth endpoints
7. **Use IP + user ID** for key generator when authenticated
8. **Return clear error messages** with retry time
9. **Log rate limit violations** for security monitoring
10. **Adjust limits** based on user tier

## Monitoring

\`\`\`javascript
// Log rate limit events
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    onLimitReached: (req, res, options) => {
        console.warn('Rate limit reached:', {
            ip: req.ip,
            path: req.path,
            method: req.method,
            limit: options.max,
            timestamp: new Date().toISOString()
        });
    }
});
\`\`\`
  `,
  quiz: [
    {
      question: "Apa tujuan rate limiting?",
      options: [
        "Mempercepat response",
        "Membatasi jumlah request",
        "Menghemat bandwidth",
        "Menambah fitur"
      ],
      correctAnswer: 1
    },
    {
      question: "Status code untuk rate limit exceeded adalah?",
      options: [
        "400",
        "401",
        "429",
        "500"
      ],
      correctAnswer: 2
    },
    {
      question: "Store yang direkomendasikan untuk production adalah?",
      options: [
        "MemoryStore",
        "RedisStore",
        "MongoDB",
        "FileStore"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Rate Limiting System",
      code: `// rate-limiter.js - Complete rate limiting system

const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const redis = require('redis');
const { createClient } = require('redis');

// Redis client
const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    socket: {
        reconnectStrategy: (retries) => Math.min(retries * 50, 1000)
    }
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect();

// Custom error handler
const rateLimitHandler = (req, res, options) => {
    res.status(429).json({
        error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: 'Too many requests, please slow down',
            retryAfter: Math.ceil(req.rateLimit.resetTime / 1000),
            limit: options.max,
            remaining: req.rateLimit.remaining,
            resetTime: new Date(req.rateLimit.resetTime).toISOString()
        }
    });
    
    // Log violation
    console.warn('Rate limit violation:', {
        ip: req.ip,
        userId: req.user?.id || 'anonymous',
        path: req.path,
        method: req.method,
        limit: options.max,
        timestamp: new Date().toISOString()
    });
};

// 1. Global Limiter
const globalLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // 100 requests per minute
    message: {
        error: 'Global rate limit exceeded',
        message: 'Too many requests'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
        // Use user ID if authenticated, else IP
        return req.user?.id || req.ip;
    },
    handler: rateLimitHandler
});

// 2. Auth Limiter (Login, Register, Password Reset)
const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 attempts per hour
    message: {
        error: 'Too many authentication attempts',
        message: 'Please try again after 1 hour'
    },
    skipSuccessfulRequests: true,
    keyGenerator: (req) => req.ip,
    handler: rateLimitHandler
});

// 3. API Limiter
const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 60, // 60 requests per minute
    message: {
        error: 'API rate limit exceeded',
        message: 'Maximum 60 requests per minute'
    },
    keyGenerator: (req) => req.user?.id || req.ip,
    handler: rateLimitHandler
});

// 4. Upload Limiter
const uploadLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // 10 uploads per hour
    message: {
        error: 'Upload limit exceeded',
        message: 'Maximum 10 uploads per hour'
    },
    handler: rateLimitHandler
});

// 5. Premium User Limiter
const premiumLimiter = (req, res, next) => {
    const maxRequests = req.user?.tier === 'premium' ? 1000 : 100;
    
    const limiter = rateLimit({
        windowMs: 60 * 1000,
        max: maxRequests,
        message: {
            error: 'Rate limit exceeded',
            message: \`Max \${maxRequests} requests per minute\`
        },
        keyGenerator: (req) => req.user?.id || req.ip,
        handler: rateLimitHandler
    });
    
    return limiter(req, res, next);
};

// 6. Custom Limiter Factory
const createLimiter = (config) => {
    const {
        windowMs = 60 * 1000,
        max = 100,
        name = 'custom',
        skipSuccessfulRequests = false,
        keyGenerator = (req) => req.user?.id || req.ip
    } = config;
    
    return rateLimit({
        windowMs,
        max,
        message: {
            error: \`\${name} rate limit exceeded\`,
            message: \`Max \${max} requests per \${windowMs/1000} seconds\`
        },
        skipSuccessfulRequests,
        keyGenerator,
        standardHeaders: true,
        legacyHeaders: false,
        handler: rateLimitHandler
    });
};

// 7. Dynamic Limiter based on User Role
const dynamicLimiter = (req, res, next) => {
    const userRole = req.user?.role || 'guest';
    const limits = {
        admin: 10000,
        user: 1000,
        premium: 5000,
        guest: 100
    };
    
    const max = limits[userRole] || 100;
    const windowMs = 60 * 1000;
    
    const limiter = rateLimit({
        windowMs,
        max,
        message: {
            error: 'Rate limit exceeded',
            message: \`Max \${max} requests per minute for \${userRole} role\`
        },
        keyGenerator: (req) => req.user?.id || req.ip,
        handler: rateLimitHandler
    });
    
    return limiter(req, res, next);
};

// 8. Rate Limit Middleware with Redis
const createRedisLimiter = (config) => {
    const {
        windowMs = 60 * 1000,
        max = 100,
        prefix = 'rate-limit:'
    } = config;
    
    return rateLimit({
        windowMs,
        max,
        store: new RedisStore({
            client: redisClient,
            prefix,
            resetExpiryOnChange: true,
            commands: {
                incr: 'incr',
                expire: 'expire',
                ttl: 'ttl'
            }
        }),
        handler: rateLimitHandler,
        standardHeaders: true,
        legacyHeaders: false
    });
};

// Export limiters
module.exports = {
    globalLimiter,
    authLimiter,
    apiLimiter,
    uploadLimiter,
    premiumLimiter,
    createLimiter,
    dynamicLimiter,
    createRedisLimiter
};

// Usage in Express app
/*
const express = require('express');
const {
    globalLimiter,
    authLimiter,
    apiLimiter,
    uploadLimiter
} = require('./rate-limiter');

const app = express();

// Apply global limiter
app.use(globalLimiter);

// Auth routes
app.post('/api/auth/login', authLimiter, loginHandler);
app.post('/api/auth/register', authLimiter, registerHandler);

// API routes
app.use('/api', apiLimiter);

// Upload routes
app.post('/api/upload', uploadLimiter, uploadHandler);

app.listen(3000);
*/`,
      language: "javascript"
    }
  ]
};