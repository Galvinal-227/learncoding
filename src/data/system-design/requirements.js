export const chapter = {
  slug: "requirements",
  title: "Requirements Gathering",
  description: "Mengumpulkan dan menganalisis requirements untuk system design.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["system-design-introduction"],
  tags: ["system-design", "requirements", "analysis"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Functional Requirements

Fitur yang harus ada dalam sistem.

### Contoh E-Commerce
\`\`\`
1. User Registration & Login
2. Product Catalog & Search
3. Shopping Cart
4. Checkout & Payment
5. Order Management
6. User Profile
7. Product Reviews
8. Wishlist
\`\`\`

### Contoh URL Shortener
\`\`\`
1. Shorten URL
2. Redirect to Original URL
3. URL Expiration
4. Analytics (clicks, location)
5. User Accounts
6. Custom Short URLs
\`\`\`

## Non-Functional Requirements

Kualitas sistem yang harus dipenuhi.

### Availability
\`\`\`
- 99.9% uptime (9 hours downtime/year)
- 99.99% uptime (52 minutes downtime/year)
- 99.999% uptime (5 minutes downtime/year)
\`\`\`

### Scalability
\`\`\`
- Support 1M DAU
- Handle 10K requests/second
- Horizontal scaling capability
\`\`\`

### Performance
\`\`\`
- API response < 100ms
- Page load < 2s
- Search results < 500ms
\`\`\`

### Security
\`\`\`
- HTTPS encryption
- JWT authentication
- Rate limiting
- Input validation
- SQL injection prevention
\`\`\`

## Data Requirements

### Data Volume
\`\`\`
- Users: 10M records
- Products: 1M items
- Orders: 100K/day
- Traffic: 50M requests/day
- Storage: 10TB
\`\`\`

### Data Schema
\`\`\`sql
-- User table
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    name VARCHAR(100),
    created_at TIMESTAMP
);

-- Product table
CREATE TABLE products (
    id UUID PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10,2),
    stock INTEGER,
    category VARCHAR(100)
);
\`\`\`

## Use Cases

### High-Level Use Cases
\`\`\`
1. User browses products
2. User adds to cart
3. User checks out
4. Admin manages products
5. Admin views orders
\`\`\`

### Detailed Use Case
\`\`\`
Use Case: User Checkout
Actors: User
Precondition: User logged in, cart has items
Postcondition: Order created, payment processed

Steps:
1. User confirms cart
2. User enters shipping address
3. User selects payment method
4. System processes payment
5. System creates order
6. System sends confirmation email
\`\`\`

## Constraints

### Technical Constraints
\`\`\`
- Must use PostgreSQL
- Must be cloud-native
- Must support mobile clients
- Must be GDPR compliant
\`\`\`

### Business Constraints
\`\`\`
- Development budget: $500K
- Timeline: 6 months
- Team size: 10 engineers
- Must integrate with existing payment system
\`\`\`

## Requirements Checklist

### Functional
- [x] User authentication
- [x] Product catalog
- [ ] Shopping cart
- [ ] Payment gateway

### Non-Functional
- [ ] 99.9% availability
- [ ] < 100ms response time
- [ ] 1M concurrent users
- [ ] GDPR compliance

### Data
- [ ] PostgreSQL database
- [ ] Redis cache
- [ ] S3 storage
- [ ] Data encryption
  `,
  quiz: [
    {
      question: "Fitur sistem disebut?",
      options: [
        "Non-functional requirements",
        "Functional requirements",
        "Technical requirements",
        "Business requirements"
      ],
      correctAnswer: 1
    },
    {
      question: "Availability 99.99% artinya?",
      options: [
        "52 minutes downtime/year",
        "5 minutes downtime/year",
        "9 hours downtime/year",
        "24 hours downtime/year"
      ],
      correctAnswer: 0
    },
    {
      question: "API response < 100ms termasuk?",
      options: [
        "Functional requirement",
        "Non-functional requirement",
        "Business requirement",
        "Data requirement"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Requirements Template",
      code: `// requirements.js - Complete Requirements Template

const requirements = {
    // Project Info
    project: {
        name: "Social Media Platform",
        description: "Platform for sharing content and connecting with friends",
        stakeholders: ["Product Manager", "Engineers", "Designers", "QA"]
    },
    
    // Functional Requirements
    functional: {
        user: {
            authentication: [
                "Sign up with email/password",
                "Sign up with Google OAuth",
                "Login with email/password",
                "Login with Google OAuth",
                "Logout",
                "Password reset",
                "Email verification"
            ],
            profile: [
                "View profile",
                "Edit profile",
                "Upload profile picture",
                "Update bio",
                "Privacy settings"
            ],
            content: [
                "Create posts (text, image, video)",
                "Edit posts",
                "Delete posts",
                "View feed",
                "Like posts",
                "Comment on posts",
                "Share posts"
            ],
            social: [
                "Follow users",
                "Unfollow users",
                "View followers",
                "View following",
                "Block users",
                "Report content"
            ],
            messaging: [
                "Send direct messages",
                "Receive direct messages",
                "Create group chats",
                "Send images in chat",
                "Read receipts"
            ]
        },
        admin: [
            "Manage users (suspend, delete)",
            "Manage content (remove posts)",
            "View analytics dashboard",
            "Manage reports",
            "Manage system settings"
        ]
    },
    
    // Non-Functional Requirements
    nonFunctional: {
        performance: {
            "API response time": "< 100ms (p95)",
            "Page load time": "< 2s",
            "Feed load time": "< 500ms",
            "Search response": "< 300ms",
            "Image upload": "< 3s for 1MB"
        },
        scalability: {
            "Users": "Support up to 10M active users",
            "Concurrent users": "100K concurrent users",
            "Requests per second": "10K req/s",
            "Daily active users": "1M DAU",
            "Data growth": "100GB/month"
        },
        availability: {
            "Target uptime": "99.99%",
            "Recovery time": "RTO < 1 hour",
            "RPO": "< 15 minutes"
        },
        security: {
            "Authentication": "JWT with refresh tokens",
            "Encryption": "AES-256 for data at rest",
            "Rate limiting": "100 req/min per user",
            "Data privacy": "GDPR compliant",
            "Access control": "RBAC with roles"
        },
        reliability: {
            "Data persistence": "Multi-region replication",
            "Disaster recovery": "Backup daily",
            "Failure detection": "Health checks every 30s",
            "Self-healing": "Auto-recovery on failure"
        }
    },
    
    // Data Requirements
    data: {
        volume: {
            "Users": "5M records",
            "Posts": "50M records",
            "Comments": "100M records",
            "Messages": "1B records",
            "Storage": "10TB (images, videos)",
            "Throughput": "100K reads/sec, 10K writes/sec"
        },
        schema: {
            users: {
                fields: ["id", "email", "name", "bio", "photo", "created_at", "updated_at"],
                indexes: ["email", "name"]
            },
            posts: {
                fields: ["id", "user_id", "content", "media_url", "created_at", "updated_at"],
                indexes: ["user_id", "created_at"]
            },
            comments: {
                fields: ["id", "post_id", "user_id", "content", "created_at"],
                indexes: ["post_id", "user_id"]
            }
        },
        retention: {
            "Posts": "Forever",
            "Messages": "1 year",
            "Deleted accounts": "30 days",
            "Logs": "30 days"
        }
    },
    
    // API Requirements
    api: {
        restEndpoints: {
            "POST /api/auth/signup": "User registration",
            "POST /api/auth/login": "User login",
            "GET /api/users/:id": "Get user profile",
            "GET /api/posts": "Get feed",
            "POST /api/posts": "Create post",
            "PUT /api/posts/:id": "Update post",
            "DELETE /api/posts/:id": "Delete post",
            "POST /api/posts/:id/like": "Like post",
            "POST /api/posts/:id/comment": "Add comment"
        },
        rateLimits: {
            "Auth endpoints": "5 req/min",
            "Read endpoints": "100 req/min",
            "Write endpoints": "50 req/min",
            "Upload endpoints": "10 req/min"
        }
    },
    
    // Infrastructure Requirements
    infrastructure: {
        cloud: "AWS",
        region: ["us-east-1", "eu-west-1"],
        services: {
            compute: "ECS/EKS",
            database: "Aurora PostgreSQL",
            cache: "ElastiCache Redis",
            storage: "S3",
            cdn: "CloudFront",
            queue: "SQS",
            monitoring: "CloudWatch + DataDog"
        },
        deployment: {
            strategy: "Blue-Green deployment",
            ci_cd: "GitHub Actions"
        }
    }
};

export default requirements;`,
      language: "javascript"
    }
  ]
};