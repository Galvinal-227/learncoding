export const chapter = {
  slug: "microservices-data-management",
  title: "Data Management",
  description: "Database per service, CQRS, Event Sourcing, dan Saga pattern.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["microservices-communication"],
  tags: ["microservices", "database", "cqrs", "event-sourcing"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Database per Service

Setiap service punya **database sendiri**. Tidak boleh shared database!

\`\`\`
✅ Product Service → MongoDB (flexible schema)
✅ Order Service → PostgreSQL (ACID)
✅ Search Service → Elasticsearch
✅ Cache Service → Redis
\`\`\`

## CQRS (Command Query Responsibility Segregation)

Pisahkan **write** (Command) dan **read** (Query):

\`\`\`
Write Side: Command → PostgreSQL → Event → Kafka
Read Side: Kafka → Update → Elasticsearch (optimized for queries)
\`\`\`

## Event Sourcing

Simpan **events** (perubahan state), bukan **current state**:

\`\`\`
Tradisional: Order { id: 1, status: "Shipped" }
Event Sourcing:
- OrderCreated { id: 1, items: [...] }
- OrderPaid { id: 1, amount: 50000 }
- OrderShipped { id: 1, tracking: "ABC123" }

Current state = replay semua events
\`\`\`

## Data Consistency Patterns

| Pattern | Consistency | Complexity |
|---------|------------|------------|
| **2PC (Two-Phase Commit)** | Strong | Tinggi |
| **Saga** | Eventual | Sedang |
| **Outbox Pattern** | Eventual | Sedang |
| **Compensating Transaction** | Eventual | Sedang |

## Outbox Pattern

\`\`\`
1. Update database + simpan event di OUTBOX table (SAME transaction!)
2. Outbox processor → publish event ke Message Queue
3. Delete from outbox after published

Kelebihan: Guaranteed delivery (no lost events)
\`\`\`
  `,

  quiz: [
    { question: "CQRS?", options: ["Database", "Command Query Responsibility Segregation", "API Gateway", "Message Queue"], correctAnswer: 1 },
    { question: "Event Sourcing?", options: ["Current state", "Simpan events (perubahan), bukan current state", "Database backup", "Logging"], correctAnswer: 1 }
  ],

  codeExamples: []
};