export const chapter = {
  slug: "payment-integration-checkout",
  title: "Checkout Flow",
  description: "Bangun checkout flow yang smooth: cart, shipping, tax, discount, order management.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["payment-integration-stripe"],
  tags: ["payment", "checkout", "cart", "order"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Checkout Flow

\`\`\`
1. Cart → Review items
2. Shipping → Pilih alamat + kurir
3. Payment → Pilih metode pembayaran
4. Confirmation → Review akhir
5. Process → Redirect ke payment gateway
6. Result → Success / Pending / Failed
\`\`\`

## Order Data Model

\`\`\`javascript
const orderSchema = {
    userId: 'user_123',
    status: 'pending',  // pending, paid, processing, shipped, completed, cancelled
    items: [
        {
            productId: 'prod_456',
            name: 'Sepatu Lari',
            price: 450000,
            quantity: 1,
            subtotal: 450000
        }
    ],
    shipping: {
        address: 'Jl. Merdeka No. 123, Jakarta',
        city: 'Jakarta Selatan',
        postalCode: '12345',
        courier: 'JNE',
        service: 'REG',
        cost: 15000
    },
    payment: {
        method: 'midtrans',
        channel: 'bca_va',
        transactionId: null,  // Diisi setelah payment gateway response
        status: 'pending'
    },
    summary: {
        subtotal: 450000,
        shipping: 15000,
        tax: 45000,       // 10%
        discount: 50000,  // Voucher
        total: 460000
    },
    createdAt: new Date(),
    paidAt: null
};
\`\`\`

## Calculate Order

\`\`\`javascript
function calculateOrder(items, shipping, discountCode) {
    let subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discount = 0;
    
    // Apply discount
    if (discountCode === 'WELCOME10') {
        discount = subtotal * 0.1;
    }
    
    const tax = (subtotal - discount) * 0.11;  // PPN 11%
    const total = subtotal - discount + tax + shipping.cost;
    
    return { subtotal, discount, tax, shipping: shipping.cost, total };
}
\`\`\`

## Frontend Checkout (React)

\`\`\`jsx
function CheckoutPage() {
    const [step, setStep] = useState(1); // 1=Cart, 2=Shipping, 3=Payment
    const [order, setOrder] = useState(null);
    
    const handlePayment = async (method) => {
        const response = await fetch('/api/orders', {
            method: 'POST',
            body: JSON.stringify({ items: cart, shipping, paymentMethod: method })
        });
        const { paymentUrl, token } = await response.json();
        
        if (method === 'midtrans') {
            window.snap.pay(token);
        } else {
            window.location.href = paymentUrl;
        }
    };
    
    return (
        <div>
            {step === 1 && <Cart items={cart} onNext={() => setStep(2)} />}
            {step === 2 && <Shipping onNext={() => setStep(3)} />}
            {step === 3 && <Payment onPay={handlePayment} />}
        </div>
    );
}
\`\`\`

## Idempotency (Prevent Double Charge)

\`\`\`javascript
// Gunakan order_id yang unik sebagai idempotency key
const orderId = \`ORDER-\${Date.now()}\`;

// Stripe
const session = await stripe.checkout.sessions.create({
    // ...
}, { idempotencyKey: orderId });

// Midtrans: order_id di transaction_details sudah idempotent
// Xendit: externalId sudah idempotent
\`\`\`
  `,

  quiz: [
    { question: "Idempotency?", options: ["Faster", "Prevent double charge (unique key)", "Logging", "Auth"], correctAnswer: 1 },
    { question: "Order status flow?", options: ["Pending→Paid→Processing→Shipped→Completed", "Paid only", "Pending only", "Direct complete"], correctAnswer: 0 }
  ],

  codeExamples: []
};