export const chapter = {
  slug: "payment-integration-quiz",
  title: "Quiz Akhir Payment Integration",
  description: "Uji pemahamanmu tentang integrasi payment gateway.",
  icon: "SiStripe",
  color: "#008CDD",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["payment-integration-webhooks"],
  tags: ["payment", "quiz"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Payment Integration\n\n10 soal.`,
  quiz: [
    { question: "Payment Gateway?", options: ["Bank", "Perantara proses pembayaran", "E-commerce", "POS"], correctAnswer: 1 },
    { question: "Stripe: checkout.sessions.create?", options: ["Refund", "Create payment page", "Webhook", "Customer"], correctAnswer: 1 },
    { question: "Midtrans Snap?", options: ["Core API", "Popup payment UI", "Webhook", "SDK"], correctAnswer: 1 },
    { question: "Midtrans: VA?", options: ["Virtual Account", "Visa", "Verification", "Value"], correctAnswer: 0 },
    { question: "Xendit: createInvoice?", options: ["Refund", "Create payment page", "Webhook", "Disburse"], correctAnswer: 1 },
    { question: "Idempotency?", options: ["Faster", "Prevent double charge", "Logging", "Auth"], correctAnswer: 1 },
    { question: "Webhook: verify?", options: ["Ignore", "Verify signature", "Log only", "Trust all"], correctAnswer: 1 },
    { question: "Tokenization?", options: ["Simpan kartu", "Simpan kartu aman (tanpa nomor asli)", "Encrypt", "Hash"], correctAnswer: 1 },
    { question: "PCI DSS?", options: ["Coding style", "Security standard (pakai gateway = mereka handle)", "Database", "Framework"], correctAnswer: 1 },
    { question: "Stripe fee?", options: ["Free", "2.9% + $0.30", "5%", "Flat $1"], correctAnswer: 1 }
  ]
};