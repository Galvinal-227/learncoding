export const chapter = {
  slug: "microservices-testing",
  title: "Testing Microservices",
  description: "Strategi testing microservices: unit, integration, contract, E2E.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["microservices-communication"],
  tags: ["microservices", "testing", "contract-test", "integration"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Testing Pyramid

\`\`\`
       /\\
      /E2E\\        ← 10% (happy path, critical flows)
     /------\\
    /Contract\\     ← 20% (API compatibility)
   /----------\\
  /Integration\\   ← 30% (database, external services)
 /--------------\\
/    Unit        \\ ← 40% (business logic, functions)
──────────────────
\`\`\`

## Unit Testing

Test business logic di dalam service:

\`\`\`javascript
describe('OrderService', () => {
    it('should calculate total correctly', () => {
        const items = [{ price: 100, qty: 2 }, { price: 50, qty: 1 }];
        const total = calculateTotal(items);
        expect(total).toBe(250);
    });
});
\`\`\`

## Integration Testing

Test interaksi dengan database/queue:

\`\`\`javascript
describe('OrderRepository', () => {
    it('should save order to database', async () => {
        const order = await orderRepository.save({ items: [...] });
        const found = await orderRepository.findById(order.id);
        expect(found).toEqual(order);
    });
});
\`\`\`

## Contract Testing (PACT)

Test API compatibility antar service:

\`\`\`javascript
// Consumer: Order Service expects Payment API
describe('Payment API Contract', () => {
    it('should return payment response', async () => {
        await provider.addInteraction({
            uponReceiving: 'a payment request',
            withRequest: {
                method: 'POST', path: '/process',
                body: { orderId: 1, amount: 50000 }
            },
            willRespondWith: {
                status: 200,
                body: { transactionId: 'tx_123', status: 'success' }
            }
        });
    });
});
\`\`\`

## E2E Testing

Test full workflow:

\`\`\`javascript
it('should complete order flow', async () => {
    // Create order
    const order = await createOrder(items);
    
    // Pay
    const payment = await processPayment(order.id);
    
    // Check shipping
    const shipping = await checkShipping(order.id);
    
    expect(shipping.status).toBe('processing');
});
\`\`\`
  `,

  quiz: [
    { question: "Contract testing?", options: ["Legal", "Test API compatibility antar service", "Unit test", "Database test"], correctAnswer: 1 },
    { question: "Testing pyramid: paling banyak?", options: ["E2E", "Unit tests", "Integration", "Contract"], correctAnswer: 1 }
  ],

  codeExamples: []
};