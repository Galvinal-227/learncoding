export const chapter = {
  slug: "versioning",
  title: "API Versioning",
  description: "Strategi versioning untuk REST API agar backward compatible.",
  icon: "SiVersioncontrol",
  color: "#F05032",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["rest-api-introduction"],
  tags: ["versioning", "api-design", "backward-compatibility"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Mengapa Versioning?

1. **Backward Compatibility** - Client lama tetap jalan
2. **Evolution** - API bisa berkembang
3. **Deprecation** - Bisa deprecate fitur lama
4. **Testing** - Versi baru bisa di-test terpisah

## Strategi Versioning

### 1. URL Path Versioning (Paling Umum)

\`\`\`http
GET /api/v1/users
GET /api/v2/users
GET /api/v1/users/123
\`\`\`

\`\`\`javascript
// Express.js
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Route example
app.get('/api/v1/users', (req, res) => {
    res.json({ version: 'v1', users: [...] });
});

app.get('/api/v2/users', (req, res) => {
    res.json({ version: 'v2', users: [...], meta: {} });
});
\`\`\`

### 2. Query Parameter Versioning

\`\`\`http
GET /api/users?version=1
GET /api/users?version=2
\`\`\`

\`\`\`javascript
// Implementation
app.get('/api/users', (req, res) => {
    const version = req.query.version || '1';
    
    if (version === '1') {
        // Handle v1
    } else if (version === '2') {
        // Handle v2
    }
});
\`\`\`

### 3. Header Versioning

\`\`\`http
GET /api/users
Accept-Version: v1

GET /api/users
Api-Version: v2
\`\`\`

\`\`\`javascript
// Implementation
app.get('/api/users', (req, res) => {
    const version = req.headers['accept-version'] || 'v1';
    
    if (version === 'v1') {
        // Handle v1
    } else if (version === 'v2') {
        // Handle v2
    }
});
\`\`\`

### 4. Content Negotiation

\`\`\`http
GET /api/users
Accept: application/vnd.example.v1+json

GET /api/users
Accept: application/vnd.example.v2+json
\`\`\`

## Versioning Strategy

### Major vs Minor vs Patch

- **Major** - Breaking changes (v1 → v2)
- **Minor** - New features (v1.1 → v1.2)
- **Patch** - Bug fixes (v1.1.1 → v1.1.2)

### Deprecation Policy

1. Announce deprecation
2. Maintain old version for 6-12 months
3. Provide migration guide
4. Return deprecation warning headers
5. Eventually remove old version

## Deprecation Headers

\`\`\`http
HTTP/1.1 200 OK
Deprecation: true
Sunset: Wed, 01 Jan 2026 23:59:59 GMT
Link: <https://docs.example.com/migration>; rel="deprecation"; type="text/html"
\`\`\`

## Migration Guide Example

\`\`\`javascript
// v1 - Old API
GET /api/v1/users
{
    "users": [
        { "id": 1, "name": "John", "age": 25 }
    ]
}

// v2 - New API
GET /api/v2/users
{
    "data": [
        { "id": 1, "name": "John", "age": 25, "email": "john@example.com" }
    ],
    "meta": { "total": 1 }
}
\`\`\`

## Best Practices

1. Gunakan URL path versioning (paling jelas)
2. Version dari awal (v1, v2, ...)
3. Semua API harus di-version
4. Dokumentasi untuk setiap versi
5. Migration guide untuk breaking changes
6. Monitoring usage per versi
7. Sunset policy yang jelas
8. Backward compatible bila bisa
  `,
  quiz: [
    {
      question: "Strategi versioning paling umum adalah?",
      options: [
        "URL path versioning",
        "Query parameter",
        "Header versioning",
        "Content negotiation"
      ],
      correctAnswer: 0
    },
    {
      question: "Header untuk deprecation warning adalah?",
      options: ["X-Deprecated", "Deprecation", "Warning", "Sunset"],
      correctAnswer: 1
    },
    {
      question: "Perbedaan major dan minor version adalah?",
      options: [
        "Tidak ada perbedaan",
        "Major = breaking changes, Minor = new features",
        "Major = new features, Minor = breaking changes",
        "Major = bug fixes, Minor = new features"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "API Versioning Implementation",
      code: `// versioning.js - Complete versioning system

// Version router
const router = require('express').Router();

// v1 routes
const v1Routes = router
    .get('/users', (req, res) => {
        res.json({
            version: 'v1',
            users: [
                { id: 1, name: 'John', age: 25 }
            ]
        });
    })
    .get('/users/:id', (req, res) => {
        res.json({
            version: 'v1',
            user: { id: parseInt(req.params.id), name: 'John', age: 25 }
        });
    });

// v2 routes
const v2Routes = router
    .get('/users', (req, res) => {
        res.json({
            version: 'v2',
            data: [
                { id: 1, name: 'John', age: 25, email: 'john@example.com' }
            ],
            meta: { total: 1 }
        });
    })
    .get('/users/:id', (req, res) => {
        res.json({
            version: 'v2',
            data: { id: parseInt(req.params.id), name: 'John', age: 25, email: 'john@example.com' }
        });
    });

// Version middleware
const versionMiddleware = (req, res, next) => {
    const version = req.params.version || 'v1';
    
    // Add version to request
    req.apiVersion = version;
    
    // Add deprecation warning if using old version
    if (version === 'v1') {
        res.set('Deprecation', 'true');
        res.set('Sunset', 'Wed, 01 Jan 2026 23:59:59 GMT');
        res.set('Link', '<https://docs.example.com/migration>; rel="deprecation"; type="text/html"');
    }
    
    next();
};

// Main app
app.use('/api/:version?', versionMiddleware, (req, res, next) => {
    const version = req.apiVersion;
    
    if (version === 'v1') {
        v1Routes(req, res, next);
    } else if (version === 'v2') {
        v2Routes(req, res, next);
    } else {
        res.status(400).json({
            error: 'Invalid API version',
            availableVersions: ['v1', 'v2']
        });
    }
});

// Version service - detect client version
const getClientVersion = (req) => {
    // Check URL path
    if (req.path.includes('/v1/')) return 'v1';
    if (req.path.includes('/v2/')) return 'v2';
    
    // Check header
    if (req.headers['api-version']) return req.headers['api-version'];
    if (req.headers['accept-version']) return req.headers['accept-version'];
    
    // Check query param
    if (req.query.version) return \`v\${req.query.version}\`;
    
    // Default
    return 'v1';
};`,
      language: "javascript"
    }
  ]
};