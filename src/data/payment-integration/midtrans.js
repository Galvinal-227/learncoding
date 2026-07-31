export const chapter = {
  slug: "payment-integration-midtrans",
  title: "Midtrans (Indonesia)",
  description: "Integrasi Midtrans: Snap, Core API, bank transfer, e-wallet, QRIS.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["payment-integration-introduction"],
  tags: ["payment", "midtrans", "indonesia", "snap"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install midtrans-client
\`\`\`

## Setup

\`\`\`javascript
import midtransClient from 'midtrans-client';

const snap = new midtransClient.Snap({
    isProduction: false,  // true for production
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
});

const coreApi = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
});
\`\`\`

## Snap (Popup Payment)

### Backend: Create Transaction
\`\`\`javascript
const parameter = {
    transaction_details: {
        order_id: \`ORDER-\${Date.now()}\`,
        gross_amount: 500000  // Rp 500.000
    },
    credit_card: {
        secure: true  // Enable 3D Secure
    },
    customer_details: {
        first_name: 'Budi',
        last_name: 'Santoso',
        email: 'budi@email.com',
        phone: '08123456789'
    },
    item_details: [
        {
            id: 'ITEM1',
            price: 450000,
            quantity: 1,
            name: 'Sepatu Lari'
        },
        {
            id: 'ITEM2',
            price: 50000,
            quantity: 1,
            name: 'Kaos Kaki'
        }
    ],
    enabled_payments: ['credit_card', 'bca_va', 'bni_va', 'gopay', 'qris', 'shopeepay']
};

const transaction = await snap.createTransaction(parameter);
res.json({ token: transaction.token, redirect_url: transaction.redirect_url });
\`\`\`

### Frontend: Show Snap Popup
\`\`\`html
<script src="https://app.sandbox.midtrans.com/snap/snap.js" 
    data-client-key="YOUR_CLIENT_KEY"></script>
\`\`\`

\`\`\`javascript
// Frontend: setelah dapat token dari backend
const response = await fetch('/api/payment/midtrans', { method: 'POST' });
const { token } = await response.json();

snap.pay(token, {
    onSuccess: function(result) {
        console.log('Payment success:', result);
        window.location.href = '/order/success';
    },
    onPending: function(result) {
        console.log('Payment pending:', result);
        window.location.href = '/order/pending';
    },
    onError: function(result) {
        console.error('Payment error:', result);
    },
    onClose: function() {
        console.log('Customer closed popup');
    }
});
\`\`\`

## Core API (Bank Transfer)

\`\`\`javascript
// BCA Virtual Account
const parameter = {
    payment_type: 'bank_transfer',
    transaction_details: {
        order_id: \`ORDER-\${Date.now()}\`,
        gross_amount: 500000
    },
    bank_transfer: {
        bank: 'bca',
        va_number: '12345678901'  // Optional
    },
    customer_details: {
        email: 'budi@email.com',
        first_name: 'Budi',
        last_name: 'Santoso'
    }
};

const charge = await coreApi.charge(parameter);
console.log(charge.va_numbers[0].va_number);  // VA number untuk customer
console.log(charge.transaction_status);        // 'pending'
\`\`\`

## Webhook Handler

\`\`\`javascript
app.post('/api/webhooks/midtrans', async (req, res) => {
    const notification = req.body;
    
    // Verify signature
    const coreApi = new midtransClient.CoreApi({...});
    const statusResponse = await coreApi.transaction.notification(notification);
    
    const { order_id, transaction_status, fraud_status } = statusResponse;
    
    // Handle status
    if (transaction_status === 'capture' || transaction_status === 'settlement') {
        if (fraud_status === 'accept') {
            await updateOrderStatus(order_id, 'paid');
        }
    } else if (transaction_status === 'cancel' || transaction_status === 'deny' || transaction_status === 'expire') {
        await updateOrderStatus(order_id, 'failed');
    } else if (transaction_status === 'pending') {
        await updateOrderStatus(order_id, 'pending');
    }
    
    res.status(200).send('OK');
});
\`\`\`

## Payment Methods Supported

| Metode | Kode | Waktu Konfirmasi |
|--------|------|-----------------|
| Kartu Kredit | credit_card | Realtime |
| BCA VA | bank_transfer (bca) | <10 menit |
| BNI VA | bank_transfer (bni) | <10 menit |
| GoPay | gopay | Realtime |
| QRIS | qris | Realtime |
| ShopeePay | shopeepay | Realtime |
| Indomaret | cstore | <30 menit |
  `,

  quiz: [
    { question: "Midtrans Snap?", options: ["Core API", "Popup payment UI (Snap.js)", "Webhook", "Mobile SDK"], correctAnswer: 1 },
    { question: "Midtrans: VA?", options: ["Virtual Account (bank transfer)", "Visa", "Verification", "Value Added"], correctAnswer: 1 }
  ],

  codeExamples: []
};