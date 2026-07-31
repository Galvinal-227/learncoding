export const chapter = {
  slug: "best-practices",
  title: "REST API Best Practices",
  description: "Best practices dalam mendesain dan mengimplementasikan REST API yang baik.",
  icon: "SiStarship",
  color: "#FFD700",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: [
    "rest-api-introduction",
    "rest-api-http-methods",
    "rest-api-status-codes"
  ],
  tags: ["best-practices", "api-design", "security", "performance"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## REST API Best Practices

### 1. Resource Naming

**Gunakan plural nouns**
\`\`\`
✅ /api/users
✅ /api/products
✅ /api/orders
❌ /api/getUsers
❌ /api/user
\`\`\`

**Nested resources**
\`\`\`
/users/{userId}/orders
/users/{userId}/orders/{orderId}
\`\`\`

### 2. HTTP Methods

| Method | Resource | Deskripsi |
|--------|----------|-----------|
| GET | /users | List users |
| GET | /users/123 | Get user |
| POST | /users | Create user |
| PUT | /users/123 | Update user (full) |
| PATCH | /users/123 | Update user (partial) |
| DELETE | /users/123 | Delete user |

### 3. Status Codes

**Use appropriate status codes**
\`\`\`
200 OK - Success
201 Created - Resource created
204 No Content - Success, no content
400 Bad Request - Invalid request
401 Unauthorized - Not authenticated
403 Forbidden - No permission
404 Not Found - Resource not found
422 Unprocessable Entity - Validation failed
429 Too Many Requests - Rate limit exceeded
500 Internal Server Error - Server error
\`\`\`

### 4. Versioning

**Always version your API**
\`\`\`
/api/v1/users
/api/v2/users

Accept: application/vnd.example.v1+json
Accept-Version: v1
\`\`\`

### 5. Filtering, Sorting, Pagination

**Consistent query parameters**
\`\`\`
GET /users?page=2&limit=10
GET /users?sort=name:asc
GET /users?status=active&role=admin
GET /users?search=john
\`\`\`

### 6. Error Handling

**Consistent error format**
\`\`\`json
{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Invalid input data",
        "details": [
            {
                "field": "email",
                "message": "Email is required"
            }
        ],
        "timestamp": "2024-01-01T00:00:00Z"
    }
}
\`\`\`

### 7. Security

**Always use HTTPS**
**Authentication**
\`\`\`
Authorization: Bearer <token>
X-API-Key: <api-key>
\`\`\`

**Input validation**
- Validate all inputs
- Sanitize data
- Use parameterized queries
- Implement rate limiting

### 8. Caching

**Use cache headers**
\`\`\`
Cache-Control: max-age=3600
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Last-Modified: Wed, 21 Oct 2020 07:28:00 GMT
\`\`\`

### 9. Documentation

**Document everything**
- OpenAPI/Swagger
- Examples
- Authentication
- Rate limits
- Error codes
- Changelog

### 10. Performance

**Optimize queries**
- Index database
- Use caching
- Compress responses
- Implement pagination
- Use select fields

### 11. Logging & Monitoring

**Log important events**
- Request/Response
- Errors
- Performance metrics
- Security events

### 12. CI/CD

**Automate testing**
- Unit tests
- Integration tests
- Contract tests
- Performance tests

## Checklist

- [ ] Use proper HTTP methods
- [ ] Use proper status codes
- [ ] Version your API
- [ ] Implement pagination
- [ ] Filtering & sorting
- [ ] Authentication & Authorization
- [ ] Rate limiting
- [ ] Caching
- [ ] Error handling
- [ ] Logging
- [ ] Documentation
- [ ] Security headers
- [ ] Input validation
- [ ] HTTPS
- [ ] CORS configuration
- [ ] Monitoring
- [ ] Health check
  `,
  quiz: [
    {
      question: "Best practice untuk resource naming adalah?",
      options: [
        "/getUser",
        "/user",
        "/users",
        "/user/123"
      ],
      correctAnswer: 2
    },
    {
      question: "Status code untuk rate limit exceeded adalah?",
      options: ["400", "429", "503", "408"],
      correctAnswer: 1
    },
    {
      question: "Header untuk caching adalah?",
      options: [
        "X-Cache",
        "Cache-Control",
        "Cache-Header",
        "X-Cache-Control"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete REST API Best Practices",
      code: `// server.js - Complete REST API with best practices

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Compression
app.use(compression());

// Logging
app.use(morgan('combined'));

// JSON parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests',
        message: 'Please try again later'
    }
});
app.use('/api', limiter);

// Global error handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    const status = err.status || 500;
    const message = err.message || 'Internal server error';
    
    res.status(status).json({
        error: {
            code: err.code || 'INTERNAL_ERROR',
            message,
            timestamp: new Date().toISOString(),
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

// Validation middleware
const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));
        
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        
        res.status(422).json({
            error: {
                code: 'VALIDATION_ERROR',
                message: 'Validation failed',
                details: errors.array().map(err => ({
                    field: err.param,
                    message: err.msg
                })),
                timestamp: new Date().toISOString()
            }
        });
    };
};

// Example route with validation
app.post('/api/users',
    validate([
        body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    ]),
    async (req, res, next) => {
        try {
            // Business logic
            const user = await createUser(req.body);
            
            res.status(201).json({
                data: user,
                meta: {
                    createdAt: new Date().toISOString(),
                    version: 'v1'
                }
            });
        } catch (error) {
            next(error);
        }
    }
);

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: process.env.APP_VERSION || '1.0.0'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: {
            code: 'NOT_FOUND',
            message: \`Route \${req.method} \${req.path} not found\`,
            timestamp: new Date().toISOString()
        }
    });
});

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

module.exports = app;`,
      language: "javascript"
    }
  ]
};