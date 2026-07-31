export const chapter = {
  slug: "prisma-transactions",
  title: "Transactions",
  description: "Gunakan transactions untuk atomic operations dan data integrity.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["prisma-client"],
  tags: ["prisma", "transactions", "atomic", "batch"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Interactive Transactions

\`\`\`javascript
const result = await prisma.$transaction(async (tx) => {
    // All operations use the same transaction 'tx'
    const user = await tx.user.create({
        data: { name: 'Budi', email: 'budi@email.com' }
    });
    
    await tx.profile.create({
        data: { userId: user.id, bio: 'Developer' }
    });
    
    await tx.auditLog.create({
        data: { userId: user.id, action: 'USER_CREATED' }
    });
    
    return user;
});
// If any operation fails → all rolled back!
\`\`\`

## Batch Transactions

\`\`\`javascript
const [userCount, postCount] = await prisma.$transaction([
    prisma.user.count(),
    prisma.post.count()
]);
\`\`\`

## Sequential Operations

\`\`\`javascript
const [newUser, newPost] = await prisma.$transaction([
    prisma.user.create({ data: { name: 'Budi', email: 'budi@email.com' } }),
    prisma.post.create({ data: { title: 'Hello', authorId: 1 } })
]);
\`\`\`

## Transaction with External Service

\`\`\`javascript
const result = await prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
        data: { userId, total: 100000 }
    });
    
    // Call external payment API
    const payment = await processPayment(order.total);
    
    if (!payment.success) {
        throw new Error('Payment failed');  // Rollback!
    }
    
    await tx.payment.create({
        data: { orderId: order.id, ...payment }
    });
    
    return order;
});
\`\`\`

## Transaction Options

\`\`\`javascript
await prisma.$transaction(
    [...operations],
    {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
        maxWait: 5000,   // Max wait for transaction
        timeout: 10000    // Max transaction duration
    }
);
\`\`\`

## Isolation Levels

| Level | Dirty Read | Non-repeatable | Phantom |
|-------|-----------|---------------|---------|
| **ReadUncommitted** | ✅ | ✅ | ✅ |
| **ReadCommitted** | ❌ | ✅ | ✅ |
| **RepeatableRead** | ❌ | ❌ | ✅ |
| **Serializable** | ❌ | ❌ | ❌ |
  `,

  quiz: [
    { question: "$transaction?", options: ["One query", "Atomic operations (all or nothing)", "Logging", "Error"], correctAnswer: 1 },
    { question: "Isolation: Serializable?", options: ["Lowest", "Highest (no dirty, non-repeatable, phantom)", "Default", "Fastest"], correctAnswer: 1 }
  ],

  codeExamples: []
};