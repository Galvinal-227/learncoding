export const chapter = {
  slug: "microservices-design",
  title: "Designing Microservices",
  description: "Prinsip design microservices: DDD, bounded context, service boundaries, dan decomposition.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["microservices-introduction"],
  tags: ["microservices", "ddd", "design", "bounded-context"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Domain-Driven Design (DDD)

DDD adalah pendekatan design yang fokus ke **business domain** dan **business logic**. Cocok untuk microservices.

## Bounded Context

Setiap microservice = satu **Bounded Context**. Tidak boleh ada shared models antar context.

\`\`\`
E-Commerce System:

┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ Catalog Context│  │  Order Context │  │Payment Context │
│                │  │                │  │                │
│ Product        │  │ Order          │  │ Transaction    │
│ Category       │  │ OrderItem      │  │ Invoice        │
│ Inventory      │  │ Shipping       │  │ Refund         │
└────────────────┘  └────────────────┘  └────────────────┘

Setiap context punya model "Product" berbeda:
- Catalog: Product (name, price, image)
- Order: Product (id, quantity, price_at_order)
- Payment: Product (id, amount, tax)
\`\`\`

## Service Decomposition Strategies

### 1. By Business Capability
\`\`\`
E-commerce → Product Service, Cart Service, Order Service, Payment Service, Shipping Service
\`\`\`

### 2. By Subdomain (DDD)
\`\`\`
Core: Order Management (keunggulan kompetitif)
Supporting: Product Catalog (penting, bukan core)
Generic: Authentication (bisa beli/OSS)
\`\`\`

### 3. By Team (Conway's Law)
\`\`\`
"Organizations design systems that mirror their communication structure."
1 team = 1 microservice
\`\`\`

## Design Principles

| Prinsip | Deskripsi |
|---------|-----------|
| **Single Responsibility** | Satu service, satu tugas |
| **Loose Coupling** | Minim dependency antar service |
| **High Cohesion** | Related logic dalam satu service |
| **Autonomous** | Independen deploy + scale |
| **Data Sovereignty** | Service own data-nya sendiri |
| **Resilience** | Failure di satu service ≠ failure semua |

## Anti-Patterns

❌ **God Service** - Service terlalu besar (mini-monolith)
❌ **Shared Database** - Banyak service pakai DB yang sama
❌ **Chatty Communication** - Terlalu banyak API calls
❌ **Distributed Monolith** - Microservices yang tightly coupled
❌ **Wrong Boundaries** - Potong service di tempat yang salah
  `,

  quiz: [
    { question: "Bounded Context?", options: ["Shared model", "Boundary tiap service (DDD)", "Database", "API endpoint"], correctAnswer: 1 },
    { question: "Conway's Law?", options: ["Fisika", "Struktur tim = struktur sistem", "Hukum legal", "Network law"], correctAnswer: 1 }
  ],

  codeExamples: []
};