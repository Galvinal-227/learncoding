export const chapter = {
  slug: "payment-integration-security",
  title: "Security & PCI Compliance",
  description: "Amankan payment integration: PCI DSS, data protection, fraud prevention, dan best practices.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["payment-integration-webhooks"],
  tags: ["payment", "security", "pci-dss", "fraud"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## PCI DSS (Payment Card Industry Data Security Standard)

PCI DSS adalah **standar keamanan** untuk organisasi yang memproses, menyimpan, atau mentransmisikan data kartu kredit.

## 12 Requirements PCI DSS

\`\`\`
1. Install and maintain firewall
2. Don't use vendor defaults
3. Protect stored cardholder data
4. Encrypt transmission across public networks
5. Use and update anti-virus
6. Develop and maintain secure systems
7. Restrict access to cardholder data
8. Assign unique ID to each person
9. Restrict physical access
10. Track and monitor network access
11. Regularly test security systems
12. Maintain security policy
\`\`\`

## Cara Aman: JANGAN SENTUH DATA KARTU!

### ❌ High Risk (JANGAN!)
\`\`\`
- Menyimpan nomor kartu di database
- Mencatat CVV/CVC (ILEGAL!)
- Logging full card number
- Mengirim data kartu via email/chat
- Menyimpan data kartu di spreadsheet
\`\`\`

### ✅ Safe (Gunakan Payment Gateway)
\`\`\`
- Stripe Elements / Checkout (iframe hosted)
- Midtrans Snap (popup hosted)
- Xendit Invoice (redirect hosted)
- PayPal Checkout (redirect hosted)
- Tokenization (simpan token, bukan nomor kartu)
\`\`\`

## SAQ Types (Self-Assessment Questionnaire)

| SAQ Type | Deskripsi | Jumlah Pertanyaan |
|----------|-----------|------------------|
| **SAQ A** | Fully hosted (Stripe Checkout, PayPal) | 22 |
| **SAQ A-EP** | Partial integration (Stripe.js) | 191 |
| **SAQ D** | Full integration (simpan kartu sendiri) | 329 |

> **Target: SAQ A** - Gunakan fully hosted payment page!

## Data Minimization

\`\`\`javascript
// ❌ JANGAN log data sensitif
console.log('Card:', cardNumber);     // NO!
console.log('CVV:', cvv);             // NO! ILLEGAL!
console.log('Full PAN:', pan);        // NO!

// ✅ Log hanya yang aman
console.log('Payment processed:', {
    orderId: order.id,
    amount: order.total,
    status: 'success'
    // Jangan log: card number, cvv, expiry, PIN
});
\`\`\`

## Encryption at Rest & Transit

\`\`\`javascript
// ✅ HTTPS everywhere
app.use((req, res, next) => {
    if (!req.secure && process.env.NODE_ENV === 'production') {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
});

// ✅ Encrypt sensitive data in database
import crypto from 'crypto';

function encrypt(text) {
    const cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Hanya untuk data non-PCI (email, phone, address)
// JANGAN encrypt data kartu (seharusnya tidak disimpan!)
\`\`\`

## Fraud Prevention

\`\`\`javascript
// 1. Rate limiting
import rateLimit from 'express-rate-limit';

const paymentLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,  // Max 5 payment attempts per 15 minutes
    message: 'Too many payment attempts'
});

app.use('/api/payment', paymentLimiter);

// 2. Amount validation
if (amount <= 0 || amount > 100000000) {
    return res.status(400).json({ error: 'Invalid amount' });
}

// 3. Velocity check
const recentOrders = await Order.countDocuments({
    userId: user.id,
    createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
});
if (recentOrders > 10) {
    return res.status(429).json({ error: 'Too many orders' });
}

// 4. Address verification (AVS)
// Stripe auto-handle AVS
const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: 'usd',
    payment_method: 'pm_card_visa',
    shipping: {
        name: 'Budi',
        address: { line1: '123 Main St', city: 'Jakarta' }
    }
});
\`\`\`

## Security Checklist

\`\`\`
✅ HTTPS everywhere
✅ Gunakan payment gateway (jangan simpan kartu)
✅ SAQ A compliance (fully hosted checkout)
✅ Webhook signature verification
✅ Rate limiting payment endpoints
✅ Idempotency keys (prevent double charge)
✅ Data minimization (jangan log data sensitif)
✅ Regular security updates
✅ Access logging & monitoring
✅ Team training on PCI compliance
✅ 3D Secure untuk kartu kredit
✅ IP whitelist untuk admin panel
\`\`\`
  `,

  quiz: [
    { question: "PCI DSS?", options: ["Coding style", "Payment Card Industry Data Security Standard", "Database", "Framework"], correctAnswer: 1 },
    { question: "SAQ A?", options: ["Most complex", "Simplest (fully hosted checkout)", "Database only", "Network only"], correctAnswer: 1 },
    { question: "CVV boleh disimpan?", options: ["Ya", "TIDAK PERNAH (ilegal)", "Boleh di-log", "Boleh di-cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};