export const chapter = {
  slug: "payment-integration-introduction",
  title: "Pengenalan Payment Integration",
  description: "Pahami konsep payment gateway, flow pembayaran, dan pilihan provider.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["payment", "gateway", "stripe", "midtrans"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Payment Gateway?

Payment gateway adalah **perantara** yang memproses pembayaran online antara customer, merchant, dan bank. Menangani keamanan, fraud detection, dan settlement.

## Flow Pembayaran Online

\`\`\`
1. Customer klik "Bayar"
2. Pilih metode pembayaran
3. Payment gateway proses
4. Bank verifikasi
5. Gateway kirim notifikasi (webhook)
6. Order status update
7. Barang/jasa dikirim
\`\`\`

## Payment Gateway Populer

### Internasional
| Provider | Terbaik Untuk | Negara |
|----------|--------------|--------|
| **Stripe** | Developer experience, subscription | 46+ negara |
| **PayPal** | Consumer trust, simple setup | 200+ negara |
| **Square** | Retail, POS | US, UK, CA, AU, JP |
| **Adyen** | Enterprise, global | Global |
| **Braintree** | PayPal ecosystem | 45+ negara |

### Indonesia
| Provider | Terbaik Untuk |
|----------|--------------|
| **Midtrans** | Paling populer, banyak metode |
| **Xendit** | Modern API, developer-friendly |
| **DOKU** | Enterprise, retail |
| **OVO** | E-wallet |
| **GoPay** | Gojek ecosystem |
| **ShopeePay** | E-commerce |

## Konsep Penting

| Konsep | Deskripsi |
|--------|-----------|
| **Payment Method** | Kartu kredit, bank transfer, e-wallet, QRIS |
| **Tokenization** | Simpan kartu aman tanpa simpan nomor asli |
| **3D Secure** | Verifikasi tambahan (OTP) untuk kartu kredit |
| **Webhook** | Notifikasi server-to-server saat status berubah |
| **Idempotency** | Pastikan tidak double charge |
| **Settlement** | Dana ditransfer ke merchant |
| **Refund** | Pengembalian dana |
| **Chargeback** | Pembatalan paksa oleh bank |

## Security Best Practices

\`\`\`
✅ JANGAN simpan nomor kartu (pakai tokenization)
✅ Gunakan HTTPS everywhere
✅ Verifikasi webhook signature
✅ PCI DSS compliance (gunakan gateway = mereka yang handle)
✅ Idempotency key untuk mencegah double charge
✅ Rate limiting di endpoint pembayaran
✅ Logging transaksi (jangan log data sensitif)
\`\`\`
  `,

  quiz: [
    { question: "Payment Gateway?", options: ["Bank", "Perantara proses pembayaran (customer↔bank)", "E-commerce", "POS"], correctAnswer: 1 },
    { question: "Webhook?", options: ["UI", "Notifikasi server-to-server (status update)", "Email", "SMS"], correctAnswer: 1 },
    { question: "Tokenization?", options: ["Simpan nomor kartu", "Simpan kartu aman tanpa nomor asli", "Encrypt", "Hash"], correctAnswer: 1 }
  ],

  codeExamples: []
};