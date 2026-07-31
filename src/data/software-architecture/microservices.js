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
| Simple (awal) | Complex |
| Debugging mudah | Distributed tracing |

## Communication Patterns

### REST (Synchronous)
\`\`\`javascript
// Order Service → Payment Service
const response = await fetch('http://payment-service/process', {
    method: 'POST',
    body: JSON.stringify({ orderId: '123', amount: 500000 })
});
\`\`\`

### Message Queue (Asynchronous)
\`\`\`javascript
// Order Service publishes event
await channel.publish('orders', 'order.created', Buffer.from(JSON.stringify(order)));

// Payment Service subscribes
channel.consume('payment-queue', async (msg) => {
    const order = JSON.parse(msg.content);
    await processPayment(order);
    channel.ack(msg);
});
\`\`\`

### gRPC (High Performance)
\`\`\`protobuf
service PaymentService {
    rpc ProcessPayment(PaymentRequest) returns (PaymentResponse);
}
\`\`\`

## Key Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Service Discovery | Kubernetes DNS, Consul |
| Data Consistency | Saga Pattern |
| Network Latency | gRPC, async messaging |
| Monitoring | Distributed tracing (Jaeger) |
| Debugging | Centralized logging (ELK) |
| Deployment | Kubernetes, Helm |
  `,

  quiz: [
    { question: "Microservices: database?", options: ["Shared", "One per service", "No database", "Cache only"], correctAnswer: 1 },
    { question: "Saga pattern?", options: ["Game", "Distributed transaction pattern", "Database", "Auth"], correctAnswer: 1 },
    { question: "gRPC?", options: ["REST", "High-performance RPC framework", "Message queue", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};