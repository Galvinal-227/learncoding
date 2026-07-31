export const chapter = {
  slug: "payment-integration-paypal",
  title: "PayPal",
  description: "Integrasi PayPal: Checkout, Orders API, subscriptions, dan webhooks.",
  icon: "SiPaypal",
  color: "#00457C",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["payment-integration-introduction"],
  tags: ["payment", "paypal", "checkout", "orders"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install @paypal/checkout-server-sdk
\`\`\`

## Setup

\`\`\`javascript
import paypal from '@paypal/checkout-server-sdk';

// Environment
const environment = process.env.NODE_ENV === 'production'
    ? new paypal.core.LiveEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_CLIENT_SECRET
    )
    : new paypal.core.SandboxEnvironment(
        process.env.PAYPAL_CLIENT_ID,
        process.env.PAYPAL_CLIENT_SECRET
    );

const client = new paypal.core.PayPalHttpClient(environment);
\`\`\`

## Create Order

\`\`\`javascript
import paypal from '@paypal/checkout-server-sdk';
import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

async function createOrder(total) {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: total.toFixed(2)
            },
            description: 'Sepatu Lari Premium',
            reference_id: \`ORDER-\${Date.now()}\`
        }],
        application_context: {
            brand_name: 'My Store',
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: 'https://myapp.com/success',
            cancel_url: 'https://myapp.com/cancel'
        }
    });
    
    const response = await client.execute(request);
    return response.result;
}

// API endpoint
app.post('/api/paypal/create-order', async (req, res) => {
    const { total } = req.body;
    const order = await createOrder(total);
    
    // Cari approval URL
    const approvalUrl = order.links.find(link => link.rel === 'approve').href;
    res.json({ orderId: order.id, approvalUrl });
});
\`\`\`

## Capture Order (After Approval)

\`\`\`javascript
async function captureOrder(orderId) {
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});
    
    const response = await client.execute(request);
    return response.result;
}

// API endpoint
app.post('/api/paypal/capture-order', async (req, res) => {
    const { orderId } = req.body;
    
    try {
        const capture = await captureOrder(orderId);
        
        if (capture.status === 'COMPLETED') {
            await updateOrderStatus(capture.purchase_units[0].reference_id, 'paid');
            res.json({ success: true, capture });
        } else {
            res.status(400).json({ error: 'Payment not completed' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
\`\`\`

## Frontend (PayPal Buttons)

\`\`\`html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD"></script>
\`\`\`

\`\`\`javascript
paypal.Buttons({
    createOrder: async () => {
        const response = await fetch('/api/paypal/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ total: 99.99 })
        });
        const { orderId } = await response.json();
        return orderId;
    },
    
    onApprove: async (data) => {
        const response = await fetch('/api/paypal/capture-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: data.orderID })
        });
        const result = await response.json();
        
        if (result.success) {
            window.location.href = '/order/success';
        }
    },
    
    onError: (err) => {
        console.error('PayPal error:', err);
    },
    
    onCancel: () => {
        console.log('Payment cancelled');
        window.location.href = '/cart';
    }
}).render('#paypal-button-container');
\`\`\`

## Webhook Handler

\`\`\`javascript
app.post('/api/webhooks/paypal', async (req, res) => {
    const { body, headers } = req;
    
    // Verify webhook signature
    const verification = await verifyWebhookSignature(headers, body);
    if (!verification.verified) {
        return res.status(403).send('Invalid signature');
    }
    
    const event = body;
    
    switch (event.event_type) {
        case 'PAYMENT.CAPTURE.COMPLETED':
            const capture = event.resource;
            await handleSuccessfulPayment(capture);
            break;
            
        case 'PAYMENT.CAPTURE.DENIED':
            await handleFailedPayment(event.resource);
            break;
            
        case 'PAYMENT.CAPTURE.REFUNDED':
            await handleRefund(event.resource);
            break;
    }
    
    res.status(200).send('OK');
});
\`\`\`

## PayPal Sandbox Testing

\`\`\`
1. Buka developer.paypal.com
2. Create app → dapatkan Client ID & Secret
3. Sandbox → Accounts → Create test buyer
4. Gunakan test card:
   - Visa: 4012888888881881
   - Mastercard: 5555555555554444
\`\`\`

## PayPal vs Stripe

| | PayPal | Stripe |
|---|--------|--------|
| Market share | 40%+ | 20%+ |
| Countries | 200+ | 46+ |
| Setup | Mudah | Mudah |
| Subscription | ✅ | ✅ (lebih baik) |
| Developer experience | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Fee | 2.9% + $0.30 | 2.9% + $0.30 |
| Consumer trust | Sangat tinggi (brand recognition) | Sedang |
| Indonesia | ✅ (terbatas) | ❌ (tidak available) |
  `,

  quiz: [
    { question: "PayPal: OrdersCreateRequest?", options: ["Refund", "Create order (payment request)", "Webhook", "Capture"], correctAnswer: 1 },
    { question: "PayPal vs Stripe di Indonesia?", options: ["Sama", "PayPal: available (limited); Stripe: not available", "Stripe lebih baik", "Keduanya sama"], correctAnswer: 1 },
    { question: "PayPal Buttons?", options: ["Server only", "Frontend JS SDK (paypal.Buttons)", "Mobile only", "CLI only"], correctAnswer: 1 }
  ],

  codeExamples: []
};