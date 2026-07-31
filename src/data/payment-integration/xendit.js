export const chapter = {
  slug: "payment-integration-xendit",
  title: "Xendit (Indonesia)",
  description: "Integrasi Xendit: Invoice, VA, e-wallet, QRIS, dan disbursement.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["payment-integration-introduction"],
  tags: ["payment", "xendit", "indonesia", "invoice"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install xendit-node
\`\`\`

## Setup

\`\`\`javascript
import { Xendit } from 'xendit-node';

const xendit = new Xendit({
    secretKey: process.env.XENDIT_SECRET_KEY
});

const { Invoice } = xendit;
const invoice = new Invoice({});
\`\`\`

## Create Invoice

\`\`\`javascript
const createdInvoice = await invoice.createInvoice({
    data: {
        externalId: \`INV-\${Date.now()}\`,
        amount: 500000,
        currency: 'IDR',
        payerEmail: 'budi@email.com',
        description: 'Sepatu Lari Premium',
        successRedirectUrl: 'https://myapp.com/success',
        failureRedirectUrl: 'https://myapp.com/failed',
        paymentMethods: ['BCA', 'BNI', 'GOPAY', 'QRIS'],
        items: [
            {
                name: 'Sepatu Lari',
                quantity: 1,
                price: 450000
            },
            {
                name: 'Kaos Kaki',
                quantity: 1,
                price: 50000
            }
        ]
    }
});

console.log(createdInvoice.invoiceUrl); // URL pembayaran
console.log(createdInvoice.id);         // Invoice ID
\`\`\`

## Create Virtual Account

\`\`\`javascript
const { VirtualAcc } = xendit;
const virtualAcc = new VirtualAcc({});

const va = await virtualAcc.createVirtualAcc({
    data: {
        externalId: \`VA-\${Date.now()}\`,
        bankCode: 'BCA',
        name: 'Budi Santoso',
        expectedAmount: 500000,
        isClosed: true,               // Single payment
        expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 jam
    }
});

console.log(va.accountNumber); // Nomor VA
\`\`\`

## Webhook Handler

\`\`\`javascript
app.post('/api/webhooks/xendit', async (req, res) => {
    const { body } = req;
    
    // Verify webhook token
    const webhookToken = req.headers['x-callback-token'];
    if (webhookToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
        return res.status(403).send('Invalid token');
    }
    
    // Handle event
    switch (body.event) {
        case 'invoice.paid':
            await handleSuccessfulPayment(body.externalId);
            break;
        case 'invoice.expired':
            await handleExpiredPayment(body.externalId);
            break;
    }
    
    res.status(200).send('OK');
});
\`\`\`

## Xendit vs Midtrans

| | Xendit | Midtrans |
|---|--------|----------|
| API style | RESTful, modern | REST + Snap.js |
| Docs | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| SDK | Node.js, Python, Go, Java, PHP | Node.js, PHP, Java, Python |
| Payment methods | VA, e-wallet, QRIS, retail | VA, CC, e-wallet, QRIS, retail |
| Disbursement | ✅ Built-in | Limited |
| Settlement | T+1 (hari kerja) | T+1 |
| Fee | ~1.5% (VA) | ~1.5-2.5% |
  `,

  quiz: [
    { question: "Xendit: createInvoice?", options: ["Refund", "Create payment page (Invoice)", "Webhook", "Disburse"], correctAnswer: 1 },
    { question: "Xendit webhook token?", options: ["Ignore", "Verify (x-callback-token header)", "Log only", "Skip"], correctAnswer: 1 }
  ],

  codeExamples: []
};