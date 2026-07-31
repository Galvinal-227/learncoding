export const chapter = {
  slug: "software-architecture-cqrs",
  title: "CQRS (Command Query Responsibility Segregation)",
  description: "Pahami CQRS untuk memisahkan operasi baca dan tulis.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["software-architecture-event-driven"],
  tags: ["architecture", "cqrs", "command", "query"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## What is CQRS?

CQRS = **separate read and write models**. Commands (write) use one model, Queries (read) use another.

## CQRS Flow

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Command  │────▶│  Write   │────▶│ Event    │
│ (POST)   │     │  Model   │     │ Store    │
└──────────┘     └──────────┘     └──────────┘
                                        │
                                        ▼
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Query   │────▶│  Read    │◀────│Projector │
│  (GET)   │     │  Model   │     │          │
└──────────┘     └──────────┘     └──────────┘
\`\`\`

## Code Example

\`\`\`typescript
// Command (Write)
class CreateOrderCommand {
    constructor(public userId: string, public items: OrderItem[]) {}
}

class OrderCommandHandler {
    async handle(cmd: CreateOrderCommand) {
        const order = Order.create(cmd.userId, cmd.items);
        await eventStore.save(order.events);
        await eventBus.publish(order.events);
    }
}

// Query (Read)
class OrderQueryHandler {
    async getOrders(userId: string) {
        return db.query('SELECT * FROM order_view WHERE user_id = $1', [userId]);
    }
}
\`\`\`

## CQRS Benefits

\`\`\`
✅ Optimize read & write separately
✅ Scalable (read replicas)
✅ Simplified queries (no joins)
✅ Event sourcing integration
✅ Complex business logic supported

❌ Added complexity
❌ Eventual consistency
❌ More infrastructure
\`\`\`
  `,

  quiz: [
    { question: "CQRS?", options: ["Same model", "Separate read & write models", "Cache pattern", "Auth pattern"], correctAnswer: 1 },
    { question: "Command?", options: ["Read data", "Write/update data", "Delete only", "Query"], correctAnswer: 1 }
  ],

  codeExamples: []
};