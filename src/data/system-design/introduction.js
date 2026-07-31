export const chapter = {
  slug: "introduction",
  title: "Pengenalan System Design",
  description: "Memahami konsep dasar system design dan pentingnya dalam pengembangan software.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["system-design", "architecture", "scalability"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu System Design?

System design adalah proses mendefinisikan arsitektur, komponen, dan data flow dari sebuah sistem untuk memenuhi kebutuhan fungsional dan non-fungsional.

## Mengapa System Design Penting?

1. **Scalability** - Sistem bisa tumbuh
2. **Reliability** - Sistem tetap berjalan
3. **Maintainability** - Mudah di-maintain
4. **Performance** - Respons cepat
5. **Cost** - Efisien secara biaya

## Komponen Utama

| Komponen | Fungsi |
|----------|--------|
| **Client** | User interface |
| **Load Balancer** | Distribusi traffic |
| **Web Server** | Handle request |
| **Application Server** | Business logic |
| **Database** | Penyimpanan data |
| **Cache** | Akses cepat |
| **Message Queue** | Async processing |

## Prinsip Dasar

### 1. Separation of Concerns
Pisahkan komponen berdasarkan tanggung jawab.

### 2. Single Responsibility
Setiap komponen memiliki satu tanggung jawab.

### 3. Loose Coupling
Komponen saling independen.

### 4. High Cohesion
Komponen terkait dikelompokkan.

## Non-Functional Requirements

| Requirement | Deskripsi |
|-------------|-----------|
| **Availability** | Uptime sistem |
| **Reliability** | Keandalan |
| **Scalability** | Kemampuan bertumbuh |
| **Performance** | Kecepatan |
| **Security** | Keamanan |
| **Maintainability** | Kemudahan maintenance |

## Trade-offs

- **Consistency vs Availability** (CAP Theorem)
- **Performance vs Cost**
- **Scalability vs Complexity**
- **Security vs Usability**
  `,
  quiz: [
    {
      question: "Apa itu system design?",
      options: [
        "Proses coding aplikasi",
        "Proses mendefinisikan arsitektur sistem",
        "Proses testing aplikasi",
        "Proses deployment"
      ],
      correctAnswer: 1
    },
    {
      question: "Komponen untuk distribusi traffic adalah?",
      options: [
        "Database",
        "Cache",
        "Load Balancer",
        "Message Queue"
      ],
      correctAnswer: 2
    },
    {
      question: "Apa itu scalability?",
      options: [
        "Kemampuan sistem bertahan",
        "Kemampuan sistem bertumbuh",
        "Kemampuan sistem cepat",
        "Kemampuan sistem aman"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "System Design Template",
      code: `// System Design Template
const systemDesign = {
    "title": "E-Commerce System",
    "overview": {
        "description": "Online shopping platform",
        "users": "1 million DAU",
        "features": ["User Auth", "Product Catalog", "Cart", "Orders", "Payment"]
    },
    "components": {
        "frontend": {
            "type": "SPA",
            "framework": "React/Next.js",
            "hosting": "CDN + Vercel"
        },
        "backend": {
            "type": "Microservices",
            "services": [
                "Auth Service",
                "Product Service",
                "Order Service",
                "Payment Service",
                "Notification Service"
            ]
        },
        "database": {
            "primary": "PostgreSQL",
            "cache": "Redis",
            "search": "Elasticsearch"
        },
        "infrastructure": {
            "cloud": "AWS",
            "loadBalancer": "AWS ALB",
            "messageQueue": "AWS SQS",
            "monitoring": "Datadog"
        }
    },
    "dataFlow": {
        "user": "Client -> CDN -> Load Balancer -> API Gateway -> Service -> Database",
        "admin": "Client -> Load Balancer -> Admin Service -> Database"
    },
    "considerations": {
        "scalability": "Horizontal scaling with auto-scaling groups",
        "availability": "Multi-AZ deployment",
        "security": "JWT auth, HTTPS, RLS",
        "performance": "Redis cache, CDN, Database indexing"
    }
};`
    }
  ]
};