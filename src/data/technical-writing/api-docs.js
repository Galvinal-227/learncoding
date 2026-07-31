export const chapter = {
  slug: "api-docs",
  title: "API Documentation",
  description: "Membuat dokumentasi API yang jelas dan lengkap dengan OpenAPI/Swagger.",
  icon: "SiReadthedocs",
  color: "#4CAF50",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["technical-writing-introduction", "technical-writing-documentation"],
  tags: ["technical-writing", "api", "openapi", "swagger"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## API Documentation

Dokumentasi API adalah panduan untuk developer yang menggunakan API.

## OpenAPI/Swagger

### Basic Structure
\`\`\`yaml
openapi: 3.0.0
info:
  title: API Name
  description: API Description
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
paths:
  /users:
    get:
      summary: Get users
      responses:
        '200':
          description: Success
\`\`\`

### Components
\`\`\`yaml
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
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
\`\`\`

## Contoh API Docs

### Endpoint Documentation
\`\`\`yaml
paths:
  /users:
    get:
      summary: Get all users
      description: Returns a list of users with pagination
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
              $ref: '#/components/schemas/CreateUser'
      responses:
        '201':
          description: User created
        '400':
          description: Validation error
        '409':
          description: Email already exists
\`\`\`

## JSDoc untuk API

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
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
app.get('/users', getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 */
app.get('/users/:id', getUserById);
\`\`\`

## Error Documentation

\`\`\`yaml
components:
  schemas:
    Error:
      type: object
      properties:
        error:
          type: string
        message:
          type: string
        status:
          type: integer
        timestamp:
          type: string
          format: date-time

  responses:
    BadRequest:
      description: Bad request
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    Unauthorized:
      description: Unauthorized
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    NotFound:
      description: Not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    InternalError:
      description: Internal server error
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
\`\`\`

## Best Practices

1. **Use OpenAPI/Swagger** - Standard format
2. **Include examples** - Request/response
3. **Document errors** - All error codes
4. **Add authentication** - Security schemes
5. **Version your API** - Versioning
6. **Use consistent naming** - Konvensi
7. **Include descriptions** - Penjelasan
8. **Add tags** - Kategori
9. **Generate automatically** - Auto-generation
10. **Keep updated** - Sinkron dengan kode
  `,
  quiz: [
    {
      question: "Format standar untuk API documentation adalah?",
      options: [
        "HTML",
        "OpenAPI/Swagger",
        "PDF",
        "Word"
      ],
      correctAnswer: 1
    },
    {
      question: "Keyword untuk schemas di OpenAPI adalah?",
      options: [
        "schemas",
        "definitions",
        "models",
        "types"
      ],
      correctAnswer: 0
    },
    {
      question: "Bagian untuk endpoint di OpenAPI adalah?",
      options: [
        "paths",
        "routes",
        "endpoints",
        "apis"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete OpenAPI Specification",
      code: `// ============================================
// openapi.yaml - Complete API Documentation
// ============================================

openapi: 3.0.0

info:
  title: User Management API
  description: RESTful API for managing users and authentication
  version: 2.0.0
  contact:
    name: API Support
    email: support@example.com
    url: https://example.com/support
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://api.example.com/v2
    description: Production server
  - url: https://api-staging.example.com/v2
    description: Staging server
  - url: http://localhost:3000/v2
    description: Development server

tags:
  - name: Authentication
    description: Authentication endpoints
  - name: Users
    description: User management endpoints
  - name: Admin
    description: Admin-only endpoints

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    apiKey:
      type: apiKey
      in: header
      name: X-API-Key

  schemas:
    User:
      type: object
      required:
        - id
        - name
        - email
      properties:
        id:
          type: integer
          example: 1
        name:
          type: string
          maxLength: 100
          example: John Doe
        email:
          type: string
          format: email
          example: john@example.com
        role:
          type: string
          enum: [user, admin, moderator]
          default: user
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time

    CreateUserRequest:
      type: object
      required:
        - name
        - email
        - password
      properties:
        name:
          type: string
          maxLength: 100
        email:
          type: string
          format: email
        password:
          type: string
          format: password
          minLength: 8
        role:
          type: string
          enum: [user, admin, moderator]
          default: user

    UpdateUserRequest:
      type: object
      properties:
        name:
          type: string
        email:
          type: string
          format: email
        role:
          type: string
          enum: [user, admin, moderator]

    AuthRequest:
      type: object
      required:
        - email
        - password
      properties:
        email:
          type: string
          format: email
        password:
          type: string
          format: password

    AuthResponse:
      type: object
      properties:
        token:
          type: string
        refreshToken:
          type: string
        user:
          $ref: '#/components/schemas/User'

    Pagination:
      type: object
      properties:
        page:
          type: integer
          minimum: 1
          default: 1
        limit:
          type: integer
          minimum: 1
          maximum: 100
          default: 10
        total:
          type: integer
        totalPages:
          type: integer

    Error:
      type: object
      properties:
        code:
          type: string
        message:
          type: string
        details:
          type: array
          items:
            type: object
            properties:
              field:
                type: string
              message:
                type: string

  responses:
    BadRequest:
      description: Invalid request parameters
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    Unauthorized:
      description: Authentication required
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    Forbidden:
      description: Insufficient permissions
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    NotFound:
      description: Resource not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    Conflict:
      description: Resource already exists
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

security:
  - bearerAuth: []

paths:
  /auth/login:
    post:
      tags: [Authentication]
      summary: Login user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AuthRequest'
      responses:
        '200':
          description: Login successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AuthResponse'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '400':
          $ref: '#/components/responses/BadRequest'
      x-code-samples:
        - lang: "JavaScript"
          source: |
            const response = await fetch('https://api.example.com/v2/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: 'john@example.com',
                password: 'password123'
              })
            });

  /auth/register:
    post:
      tags: [Authentication]
      summary: Register new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          $ref: '#/components/responses/BadRequest'
        '409':
          $ref: '#/components/responses/Conflict'

  /auth/refresh:
    post:
      tags: [Authentication]
      summary: Refresh access token
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                refreshToken:
                  type: string
      responses:
        '200':
          description: New token generated
          content:
            application/json:
              schema:
                type: object
                properties:
                  token:
                    type: string

  /users:
    get:
      tags: [Users]
      summary: Get all users
      description: Returns paginated list of users
      parameters:
        - in: query
          name: page
          schema:
            type: integer
            default: 1
        - in: query
          name: limit
          schema:
            type: integer
            default: 10
        - in: query
          name: search
          schema:
            type: string
          description: Search by name or email
      responses:
        '200':
          description: List of users
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
                    $ref: '#/components/schemas/Pagination'
        '401':
          $ref: '#/components/responses/Unauthorized'

    post:
      tags: [Users]
      summary: Create new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          $ref: '#/components/responses/BadRequest'
        '409':
          $ref: '#/components/responses/Conflict'

  /users/{id}:
    get:
      tags: [Users]
      summary: Get user by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: User details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          $ref: '#/components/responses/NotFound'

    put:
      tags: [Users]
      summary: Update user
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateUserRequest'
      responses:
        '200':
          description: User updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          $ref: '#/components/responses/NotFound'

    delete:
      tags: [Users]
      summary: Delete user
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '204':
          description: User deleted
        '401':
          $ref: '#/components/responses/Unauthorized'
        '403':
          $ref: '#/components/responses/Forbidden'
        '404':
          $ref: '#/components/responses/NotFound'

  /admin/users:
    get:
      tags: [Admin]
      summary: Get all users (admin)
      description: Admin-only endpoint with full user data
      responses:
        '200':
          description: List of all users          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
        '403':
          $ref: '#/components/responses/Forbidden'`,
      language: "yaml"
    }
  ]
};