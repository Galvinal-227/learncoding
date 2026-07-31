export const chapter = {
  slug: "career-salary-negotiation",
  title: "Negosiasi Gaji",
  description: "Strategi negosiasi gaji untuk mendapatkan kompensasi yang pantas.",
  icon: "SiLinkedin",
  color: "#0A66C2",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["career-job-boards"],
  tags: ["career", "salary", "negotiation", "compensation"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Harus Negosiasi?

- 💰 Rata-rata kenaikan 10-30% dari offer awal dengan negosiasi
- 🚀 Gaji awal menentukan trajectory karir (kenaikan berbasis persentase)
- 🏢 Perusahaan **expect** kamu negosiasi (budget sudah disiapkan)

## Sebelum Negosiasi

### 1. Riset Gaji Pasar
\`\`\`
- Glassdoor.com
- Levels.fyi (untuk tech companies)
- LinkedIn Salary
- Diskusi dengan peers
- Grup Telegram programmer (salary thread)
\`\`\`

### 2. Tentukan Range
\`\`\`
Minimum (walk-away): Rp 15 juta
Target: Rp 18-22 juta
Dream: Rp 25 juta
\`\`\`

### 3. Jangan Sebut Angka Duluan
\`\`\`
Recruiter: "Berapa ekspektasi gaji kamu?"
Kamu: "Saya fleksibel untuk posisi yang tepat. 
       Boleh tahu range budget untuk posisi ini?"
\`\`\`

## Strategi Negosiasi

### 1. Fokus ke Value, Bukan Kebutuhan
\`\`\`
❌ "Saya butuh gaji segini karena cicilan rumah..."
✅ "Dengan pengalaman saya meningkatkan konversi 30% 
    di perusahaan sebelumnya, saya yakin bisa memberikan 
    dampak serupa di sini."
\`\`\`

### 2. Pakai Leverage
\`\`\`
✅ "Saya punya offer lain sebesar Rp X..."
✅ "Di perusahaan saat ini saya mendapat benefit Y..."
\`\`\`

### 3. Negosiasi Total Compensation
\`\`\`
Gaji pokok ≠ Total kompensasi:
- Gaji pokok
- Bonus tahunan (1-6x gaji)
- Stock options / RSU
- BPJS / Asuransi kesehatan
- Tunjangan (transport, makan, internet)
- Flexible hours / Remote
- Budget learning (kursus, konferensi)
- Cuti tambahan
\`\`\`

## Script Negosiasi

\`\`\`
"Terima kasih atas offer-nya. Saya sangat excited dengan 
posisi ini dan tim yang akan saya kerja sama.

Berdasarkan riset pasar dan pengalaman saya di [skill], 
saya berharap bisa di angka [target salary]. 

Dengan skill [specific skill] yang saya bawa, saya yakin 
bisa berkontribusi di [specific area] dalam 3-6 bulan pertama.

Apakah ada ruang untuk menyesuaikan?"
\`\`\`

## Kapan Tidak Perlu Negosiasi?

\`\`\`
- Offer sudah di atas market rate
- Startup early-stage (equity lebih penting)
- Posisi pertama di industri baru (experience > uang)
- Perusahaan transparan dengan fixed salary bands
\`\`\`

## Gaji Developer Indonesia (Estimasi 2024-2026)

| Level | Jakarta (IDR) | Remote International (USD) |
|-------|---------------|---------------------------|
| Junior (0-2yr) | 5-12jt | $15k-40k/year |
| Mid (2-5yr) | 10-25jt | $40k-80k/year |
| Senior (5-8yr) | 20-40jt | $80k-150k/year |
| Lead/Principal | 35-60jt | $150k-250k/year |
| CTO | 50-150jt | $200k-500k/year |
  `,

  quiz: [
    { question: "Rata-rata kenaikan dengan negosiasi?", options: ["1-5%", "10-30%", "50-100%", "Tidak ada"], correctAnswer: 1 },
    { question: "Siapa yang sebut angka duluan?", options: ["Kamu", "Recruiter (usahakan)", "HR", "Siapa saja"], correctAnswer: 1, explanation: "Usahakan recruiter yang sebut angka duluan. Jika terpaksa, sebut range." },
    { question: "Selain gaji pokok, apa yang bisa dinegosiasi?", options: ["Tidak ada", "Bonus, equity, benefit, flexible hours", "Hanya cuti", "Hanya posisi"], correctAnswer: 1 }
  ],

  codeExamples: []
};