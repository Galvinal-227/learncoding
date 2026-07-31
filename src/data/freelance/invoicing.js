export const chapter = {
  slug: "freelance-invoicing",
  title: "Invoice & Pembayaran",
  description: "Buat invoice profesional, atur pembayaran, dan hindari late payment.",
  icon: "SiUpwork",
  color: "#14A800",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["freelance-pricing"],
  tags: ["freelance", "invoice", "payment", "billing"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Tools Invoice

| Tool | Cocok Untuk |
|------|-------------|
| **Paper.id** | Invoice lokal Indonesia, gratis |
| **Wave** | Gratis, accounting sederhana |
| **FreshBooks** | Professional invoicing |
| **Stripe Invoicing** | Klien internasional |
| **PayPal** | Simple, cepat |
| **Wise** | Transfer internasional murah |

## Struktur Invoice

\`\`\`
INVOICE #001
Date: 15 Januari 2026
Due Date: 29 Januari 2026

From:
Budi Santoso
budi@email.com
NPWP: XX.XXX.XXX.X-XXX.XXX

To:
PT Maju Jaya
finance@majujaya.com

Description:
- Landing page development (5 pages) - Rp 3.000.000
- Contact form integration - Rp 1.000.000
- SEO optimization - Rp 1.000.000

Subtotal: Rp 5.000.000
PPh 23 (2%): Rp 100.000
Total: Rp 4.900.000

Payment: BCA 1234567890 a.n. Budi Santoso
\`\`\`

## Payment Terms

\`\`\`
✅ 50% upfront, 50% on delivery (proyek baru)
✅ Net 15 / Net 30 (invoice jatuh tempo 15/30 hari)
✅ Milestone-based (per fitur/sprint)
✅ Retainer: dibayar di awal bulan
\`\`\`

## Menghindari Late Payment

\`\`\`
✅ Tulis due date jelas di invoice
✅ Kirim reminder H-3 jatuh tempo
✅ Late fee: 2%/bulan (sebutkan di kontrak)
✅ Stop kerja jika pembayaran telat >30 hari
✅ Klien baru: minta DP 50%
\`\`\`

## Pajak Freelance (Indonesia)

\`\`\`
- PPh 21: Pajak penghasilan (progresif 5-30%)
- PPh 23: Pajak jasa (2% dari invoice, dipotong klien)
- PPN 11%: Jika omzet > Rp 4,8M/tahun (PKP)
- Gunakan NPWP untuk legalitas
- Konsultasi dengan konsultan pajak
\`\`\`
  `,

  quiz: [
    { question: "Payment terms: Net 30?", options: ["30 hari dari invoice", "30 hari dari proyek", "30% upfront", "30 menit"], correctAnswer: 0 },
    { question: "PPh 23 freelance?", options: ["Pajak penghasilan", "Pajak jasa 2% (dipotong klien)", "PPN", "PBB"], correctAnswer: 1 }
  ],

  codeExamples: []
};