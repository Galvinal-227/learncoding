export const chapter = {
  slug: "payment-integration-webhooks",
  title: "Webhooks & Verification",
  description: "Handle webhooks dengan aman: signature verification, retry logic, idempotency.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["payment-integration-stripe"],
  tags: ["payment", "webhooks", "security", "verification"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Webhooks?

Payment gateway mengirim **notifikasi server-to-server** saat status transaksi berubah. JANGAN hanya mengandalkan redirect URL (bisa tidak ter-trigger).

## Webhook Security

\`\`\`
✅ Verifikasi signature (jangan trust payload mentah)
✅ HTTPS only
✅ IP whitelist (opsional)
✅ Timestamp validation (anti replay attack)
✅ Idempotency (webhook bisa terkirim >1x)
✅ Respond cepat (200 OK), process async
\`\`\`

## Stripe Webhook Verification

\`\`\`javascript
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Invalid signature:', err.message);
        return res.status(400).send('Invalid signature');
    }
    
    // Process async (fast response)
    res.status(200).send('OK');
    
    // Handle event
    await processEvent(event);
});
\`\`\`

## Midtrans Webhook Verification

\`\`\`javascript
app.post('/api/webhooks/midtrans', async (req, res) => {
    // Verify via GET to Midtrans API
    const coreApi = new midtransClient.CoreApi({...});
    const statusResponse = await coreApi.transaction.notification(req.body);
    
    // Compare order_id, amount, etc with database
    const order = await Order.findById(statusResponse.order_id);
    if (!order || order.total !== parseInt(statusResponse.gross_amount)) {
        return res.status(400).send('Order mismatch');
    }
    
    res.status(200).send('OK');
    await handleStatusUpdate(statusResponse);
});
\`\`\`

## Generic Webhook Handler

\`\`\`javascript
async function handleWebhook(event) {
    // 1. Log webhook
    await WebhookLog.create({
        provider: event.provider,
        eventType: event.type,
        payload: event.data,
        receivedAt: new Date()
    });
    
    // 2. Idempotency check
    const existing = await WebhookLog.findOne({ eventId: event.id });
    if (existing) {
        console.log('Duplicate webhook, skipping');
        return;
    }
    
    // 3. Update order
    const order = await Order.findById(event.orderId);
    if (!order) return;
    
    switch (event.status) {
        case 'success':
            order.status = 'paid';
            order.paidAt = new Date();
            await sendConfirmationEmail(order);
            break;
        case 'failed':
            order.status = 'failed';
            break;
        case 'pending':
            order.status = 'pending';
            break;
    }
    
    await order.save();
}
\`\`\`

## Retry Logic

Payment gateway akan **retry webhook** jika tidak dapat 200 OK. Implementasi:

\`\`\`
- Stripe: Retry up to 3 days (exponential backoff)
- Midtrans: Retry setiap 5 menit (up to 5x)
- Xendit: Retry up to 24 jam
\`\`\`
  `,

  quiz: [
    { question: "Webhook: verify?", options: ["Ignore", "Verify signature (security)", "Log only", "Trust all"], correctAnswer: 1 },
    { question: "Webhook idempotency?", options: ["Once", "Handle duplicate (webhook bisa terkirim >1x)", "Ignore", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};