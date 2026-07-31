export const chapter = {
  slug: "microservices-communication",
  title: "Komunikasi Antar Service",
  description: "Pola komunikasi microservices: REST, gRPC, Message Queue, Event-Driven.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["microservices-design"],
  tags: ["microservices", "communication", "grpc", "message-queue"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Synchronous vs Asynchronous

| | Synchronous | Asynchronous |
|---|------------|--------------|
| Cara | Request-Response | Event/Message |
| Coupling | Tight | Loose |
| Contoh | REST, gRPC | RabbitMQ, Kafka |
| Kelebihan | Simple, immediate | Resilient, scalable |
| Kekurangan | Blocking, timeout | Complex debugging |

## REST (HTTP/JSON)

\`\`\`javascript
// Order Service → Payment Service
const response = await fetch('http://payment-service/process', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId: 123, amount: 50000 })
});
const { transactionId } = await response.json();
\`\`\`

## gRPC (HTTP/2 + Protocol Buffers)

\`\`\`protobuf
// payment.proto
service PaymentService {
    rpc ProcessPayment(PaymentRequest) returns (PaymentResponse);
}

message PaymentRequest {
    int64 order_id = 1;
    double amount = 2;
}
\`\`\`

\`\`\`javascript
const client = new PaymentServiceClient('payment-service:50051');
const response = await client.processPayment({ order_id: 123, amount: 50000 });
\`\`\`

## Message Queue (Async)

### RabbitMQ (AMQP)
\`\`\`javascript
// Order Service → publish event
await channel.publish('orders', 'order.created', Buffer.from(JSON.stringify(order)));

// Payment Service → consume event
channel.consume('payment_queue', async (msg) => {
    const order = JSON.parse(msg.content);
    await processPayment(order);
    channel.ack(msg);
});
\`\`\`

### Kafka (Event Streaming)
\`\`\`javascript
// Publish
await producer.send({ topic: 'orders', messages: [{ value: JSON.stringify(order) }] });

// Subscribe
await consumer.subscribe({ topic: 'orders' });
consumer.run({ eachMessage: async ({ message }) => {
    await handleOrder(JSON.parse(message.value));
}});
\`\`\`

## Saga Pattern (Distributed Transaction)

### Choreography (Event-driven)
\`\`\`
Order Service → "OrderCreated" → Payment Service
Payment Service → "PaymentProcessed" → Shipping Service
Jika gagal: Payment Service → "PaymentFailed" → Order Service (compensate)
\`\`\`

### Orchestration (Central coordinator)
\`\`\`
Saga Coordinator → 1. Create Order → 2. Process Payment → 3. Ship
Jika gagal di step 2 → Coordinator → Compensate step 1
\`\`\`

## Which to Choose?

| Scenario | Recommendation |
|----------|---------------|
| Simple request-response | REST |
| High performance, streaming | gRPC |
| Event-driven, decoupled | Message Queue |
| Distributed transactions | Saga Pattern |
| Real-time data sync | Kafka |
  `,

  quiz: [
    { question: "gRPC vs REST?", options: ["Sama", "gRPC: binary, HTTP/2, faster; REST: JSON, HTTP/1.1", "REST lebih cepat", "gRPC deprecated"], correctAnswer: 1 },
    { question: "Saga pattern?", options: ["Game", "Distributed transaction pattern", "Database", "Authentication"], correctAnswer: 1 }
  ],

  codeExamples: []
};