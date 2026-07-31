export const chapter = {
  slug: "software-architecture-event-driven",
  title: "Event-Driven Architecture",
  description: "Pahami Event-Driven Architecture dengan message brokers dan event sourcing.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["software-architecture-microservices"],
  tags: ["architecture", "event-driven", "kafka", "rabbitmq"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## What is Event-Driven Architecture?

Services communicate via **events** (messages) instead of direct API calls. Loose coupling, async.

## Event Flow

\`\`\`
Order Service → publish "OrderCreated" → Message Broker
                                             ↓
                                  Payment Service (subscribe)
                                  Shipping Service (subscribe)
                                  Notification Service (subscribe)
\`\`\`

## Implementation (RabbitMQ)

\`\`\`javascript
// Publisher
await channel.publish('orders', 'order.created', Buffer.from(JSON.stringify({
    orderId: '123',
    amount: 500000
})));

// Subscriber
channel.consume('payment-queue', async (msg) => {
    const order = JSON.parse(msg.content);
    await processPayment(order);
    channel.ack(msg);
});
\`\`\`

## Implementation (Kafka)

\`\`\`javascript
// Producer
await producer.send({
    topic: 'orders',
    messages: [{ value: JSON.stringify(order) }]
});

// Consumer
await consumer.subscribe({ topic: 'orders' });
await consumer.run({
    eachMessage: async ({ message }) => {
        await handleOrder(JSON.parse(message.value));
    }
});
\`\`\`

## Event Types

| Type | Example |
|------|---------|
| **Domain Event** | OrderCreated, PaymentProcessed |
| **Integration Event** | UserRegistered (across services) |
| **Notification** | EmailSent, SMSDelivered |

## Benefits & Challenges

| ✅ Benefits | ❌ Challenges |
|------------|--------------|
| Loose coupling | Eventual consistency |
| Scalability | Debugging complexity |
| Resilience | Message ordering |
| Flexibility | Duplicate handling |
  `,

  quiz: [
    { question: "Event-Driven?", options: ["Sync API calls", "Async events via message broker", "Database only", "REST only"], correctAnswer: 1 },
    { question: "Kafka?", options: ["Database", "Event streaming platform", "Cache", "API Gateway"], correctAnswer: 1 }
  ],

  codeExamples: []
};