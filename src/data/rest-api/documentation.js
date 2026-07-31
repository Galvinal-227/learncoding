export const chapter = {
  slug: "documentation",
  title: "API Documentation",
  description: "Membuat dokumentasi API yang baik menggunakan Swagger/OpenAPI dan tools lainnya.",
  icon: "SiSwagger",
  color: "#85EA2D",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["rest-api-introduction"],
  tags: ["documentation", "swagger", "openapi", "api-docs"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Mengapa Dokumentasi Penting?

1. **Developer Experience** - Mudah dipahami dan digunakan
2. **Onboarding** - Akselerasi untuk developer baru
3. **Consistency** - Standarisasi penggunaan API
4. **Support** - Mengurangi support tickets
5. **Testing** - Memudahkan testing

## Swagger/OpenAPI

### OpenAPI Specification

\`\`\`yaml
openapi: 3.0.0
info:
  title: User API
  description: API untuk manajemen user
  version: 1.0.0
  contact:
    name: API Support
    email: support@example.com
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://api-staging.example.com/v1
    description: Staging server

paths:
  /users:
    get:
      summary: Get all users
      description: Mengambil daftar semua users dengan pagination
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 10
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    type: object
                    properties:
                      page:
                        type: integer
                      limit:
                        type: integer
                      total:
                        type: integer
    post:
      summary: Create user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserInput'
      responses:
        '201':
          description: User created
        '400':
          description: Validation error

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string
          format: email
        createdAt:
          type: string
          format: date-time
    UserInput:
      type: object
      required:
        - name
        - email
      properties:
        name:
          type: string
        email:
          type: string
          format: email
        password:
          type: string
          format: password
\`\`\`

### Swagger UI Implementation

\`\`\`javascript
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API Documentation',
            version: '1.0.0',
            description: 'Complete REST API documentation'
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Development server'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./routes/*.js', './models/*.js']
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
\`\`\`

### JSDoc Comments for Swagger

\`\`\`javascript
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *       401:
 *         description: Unauthorized
 */
app.get('/users', authenticate, getUsers);
\`\`\`

## Documentation Best Practices

### 1. Clear Structure
- Overview
- Authentication
- Endpoints
- Examples
- Error codes
- Rate limits

### 2. Examples
- Request/response examples
- Error responses
- Different scenarios

### 3. Interactive Documentation
- Swagger UI
- Postman Collection
- Try it out feature

### 4. Versioning
- Document all versions
- Migration guides
- Deprecation notices

### 5. Keep Updated
- Sync with code
- CI/CD integration
- Review regularly

## Postman Documentation

\`\`\`json
{
    "info": {
        "name": "REST API Collection",
        "description": "Complete REST API collection",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "Users",
            "item": [
                {
                    "name": "Get Users",
                    "request": {
                        "method": "GET",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{token}}"
                            }
                        ],
                        "url": {
                            "raw": "{{baseUrl}}/api/users",
                            "host": ["{{baseUrl}}"],
                            "path": ["api", "users"]
                        }
                    }
                }
            ]
        }
    ]
}
\`\`\`

## Tools for Documentation

| Tool | Fungsi |
|------|--------|
| Swagger/OpenAPI | Standard specification |
| Swagger UI | Interactive docs |
| Postman | API testing & docs |
| Redoc | Beautiful docs |
| Apiary | API design & docs |
| ReadMe | Custom docs |
| Stoplight | API design & docs |
  `,
  quiz: [
    {
      question: "OpenAPI specification untuk API documentation adalah?",
      options: [
        "Swagger",
        "Postman",
        "Redoc",
        "Apiary"
      ],
      correctAnswer: 0
    },
    {
      question: "Format OpenAPI adalah?",
      options: [
        "JSON atau YAML",
        "XML",
        "HTML",
        "Markdown"
      ],
      correctAnswer: 0
    },
    {
      question: "Tool untuk interactive API documentation adalah?",
      options: [
        "Swagger UI",
        "Postman",
        "Redoc",
        "Semua di atas"
      ],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "Complete Swagger Setup",
      code: `// swagger.js - Complete Swagger configuration

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'REST API Documentation',
        version: '1.0.0',
        description: 'Complete REST API with authentication, pagination, and HATEOAS',
        contact: {
            name: 'API Support',
            email: 'support@example.com',
            url: 'https://example.com'
        },
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'Development server'
        },
        {
            url: 'https://api.example.com/v1',
            description: 'Production server'
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            },
            apiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'X-API-Key'
            }
        },
        schemas: {
            User: {
                type: 'object',
                properties: {
                    id: { type: 'integer', example: 1 },
                    name: { type: 'string', example: 'John Doe' },
                    email: { type: 'string', format: 'email', example: 'john@example.com' },
                    role: { type: 'string', enum: ['user', 'admin'], example: 'user' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' }
                }
            },
            UserInput: {
                type: 'object',
                required: ['name', 'email', 'password'],
                properties: {
                    name: { type: 'string', example: 'John Doe' },
                    email: { type: 'string', format: 'email', example: 'john@example.com' },
                    password: { type: 'string', format: 'password', minLength: 8 },
                    role: { type: 'string', enum: ['user', 'admin'], default: 'user' }
                }
            },
            Error: {
                type: 'object',
                properties: {
                    error: { type: 'string' },
                    message: { type: 'string' },
                    details: { type: 'array', items: { type: 'string' } }
                }
            },
            Pagination: {
                type: 'object',
                properties: {
                    page: { type: 'integer', example: 1 },
                    limit: { type: 'integer', example: 10 },
                    total: { type: 'integer', example: 100 },
                    totalPages: { type: 'integer', example: 10 },
                    hasNext: { type: 'boolean', example: true },
                    hasPrevious: { type: 'boolean', example: false }
                }
            }
        },
        responses: {
            Unauthorized: {
                description: 'Unauthorized',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error'
                        },
                        example: {
                            error: 'Unauthorized',
                            message: 'Missing or invalid token'
                        }
                    }
                }
            },
            Forbidden: {
                description: 'Forbidden',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error'
                        }
                    }
                }
            },
            NotFound: {
                description: 'Not Found',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error'
                        }
                    }
                }
            },
            ValidationError: {
                description: 'Validation Error',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error'
                        }
                    }
                }
            }
        }
    },
    tags: [
        {
            name: 'Users',
            description: 'User management endpoints'
        },
        {
            name: 'Auth',
            description: 'Authentication endpoints'
        },
        {
            name: 'Health',
            description: 'Health check endpoints'
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js', './controllers/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

// Setup function
const setupSwagger = (app) => {
    // Serve swagger docs
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        explorer: true,
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: 'REST API Documentation'
    }));
    
    // Serve JSON spec
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    
    console.log('Swagger docs available at /api-docs');
};

module.exports = setupSwagger;`,
      language: "javascript"
    }
  ]
};