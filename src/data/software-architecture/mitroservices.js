export const chapter = {
  slug: "software-architecture-microservices",
  title: "Microservices Architecture",
  description: "Pahami arsitektur microservices: design, komunikasi, dan deployment.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["software-architecture-mvc"],
  tags: ["architecture", "microservices", "distributed", "scaling"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Microservices vs Monolith

| Monolith | Microservices |
|----------|--------------|
| Satu aplikasi besar | Banyak service kecil |
| Satu database | Database per service |
| Deploy bersama | Independen deploy |
| Scale bersama | Scale per service |

## Communication Patterns

### REST (Synchronous)
\`\`\`javascript
const order = await fetch('http://order-service/orders', {
    method: 'POST',
    body: JSON.stringify(orderData)
});
\`\`\`

### Message Queue (Asynchronous)
\`\`\`javascript
// Order Service publishes event
await rabbitmq.publish('order.created', order);

// Payment Service subscribes
rabbitmq.subscribe('order.created', async (order) => {
    await processPayment(order);
});
\`\`\`

## Key Challenges

\`\`\`
1. Network latency → gRPC, async messaging
2. Data consistency → Saga pattern
3. Service discovery → Kubernetes DNS, Consul
4. Monitoring → Distributed tracing (Jaeger)
5. Debugging → Centralized logging (ELK)
\`\`\`
  `,

  quiz: [
    { question: "Microservices: database?", options: ["Shared", "One per service", "No database", "Cache only"], correctAnswer: 1 },
    { question: "Saga pattern?", options: ["Game", "Distributed transaction pattern", "Database", "Auth"], correctAnswer: 1 }
  ],

  codeExamples: []
};