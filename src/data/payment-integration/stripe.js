export const chapter = {
  slug: "payment-integration-stripe",
  title: "Stripe",
  description: "Integrasi Stripe: Checkout, Payment Intents, subscriptions, dan webhooks.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["payment-integration-introduction"],
  tags: ["payment", "stripe", "checkout", "subscription"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install stripe
\`\`\`

## Setup

\`\`\`javascript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Secret key: sk_live_xxx (production) / sk_test_xxx (development)
// Publishable key: pk_live_xxx / pk_test_xxx (frontend only)
\`\`\`

## Create Checkout Session

\`\`\`javascript
// Backend: POST /api/checkout
const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',  // 'payment' | 'subscription' | 'setup'
    line_items: [
        {
            price_data: {
                currency: 'idr',
                product_data: {
                    name: 'Sepatu Lari',
                    description: 'Sepatu lari premium',
                    images: ['https://example.com/shoe.jpg']
                },
                unit_amount: 500000  // Rp 500.000 (dalam sen)
            },
            quantity: 1
        }
    ],
    customer_email: 'budi@email.com',
    metadata: { order_id: '12345' },
    success_url: 'https://myapp.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://myapp.com/cancel'
});

res.json({ url: session.url });  // Redirect customer ke Stripe Checkout
\`\`\`

## Stripe Checkout (Frontend)

\`\`\`javascript
// Frontend: redirect ke Stripe
const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: cart, customerEmail: user.email })
});
const { url } = await response.json();
window.location.href = url;  // Redirect ke Stripe
\`\`\`

## Webhook Handler

\`\`\`javascript
// Backend: POST /api/webhooks/stripe
import express from 'express';

const app = express();

// PENTING: raw body untuk signature verification!
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(\`Webhook Error: \${err.message}\`);
    }
    
    // Handle event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            await handleSuccessfulPayment(session);
            break;
        case 'payment_intent.payment_failed':
            const paymentIntent = event.data.object;
            await handleFailedPayment(paymentIntent);
            break;
        case 'customer.subscription.created':
            const subscription = event.data.object;
            await handleNewSubscription(subscription);
            break;
    }
    
    res.json({ received: true });
});
\`\`\`

## Create Subscription

\`\`\`javascript
// Create customer
const customer = await stripe.customers.create({
    email: 'budi@email.com',
    name: 'Budi Santoso'
});

// Create subscription
const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: 'price_xxxxx' }],  // Price ID dari Stripe Dashboard
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent']
});

res.json({
    subscriptionId: subscription.id,
    clientSecret: subscription.latest_invoice.payment_intent.client_secret
});
\`\`\`

## Stripe CLI (Local Testing)

\`\`\`bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks ke local
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Trigger test events
stripe trigger checkout.session.completed
\`\`\`

## Stripe vs Midtrans

| | Stripe | Midtrans |
|---|--------|----------|
| Negara | Global (46+) | Indonesia |
| Payment methods | Kartu kredit, bank debit | 20+ (bank transfer, e-wallet, QRIS) |
| Subscription | ✅ Excellent | Limited |
| API docs | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Settlement | T+7 (US) | T+1 (Indonesia) |
| Fee | 2.9% + $0.30 | 1.5-2.5% |
  `,

  quiz: [
    { question: "Stripe: checkout.sessions.create?", options: ["Refund", "Create payment page (Stripe Checkout)", "Webhook", "Customer"], correctAnswer: 1 },
    { question: "Webhook signature?", options: ["Ignore", "Verify (stripe.webhooks.constructEvent)", "Log only", "Skip"], correctAnswer: 1 }
  ],

  codeExamples: []
};