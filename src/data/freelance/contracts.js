export const chapter = {
  slug: "freelance-contracts",
  title: "Kontrak & Legal",
  description: "Lindungi dirimu dengan kontrak freelance yang jelas.",
  icon: "SiUpwork",
  color: "#14A800",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["freelance-pricing"],
  tags: ["freelance", "contract", "legal", "protection"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Kontrak Penting?

- 🛡️ **Lindungi kedua pihak**
- 📋 **Jelas scope** - Hindari "eh tambahin ini dong"
- 💰 **Payment terms** - Kapan dan berapa dibayar
- ⚖️ **Legal protection** - Jika ada dispute

## Isi Kontrak Minimal

\`\`\`
1. Nama & info kedua pihak
2. Deskripsi pekerjaan (scope of work)
3. Timeline / deadline
4. Harga & payment terms
5. Revision policy (max 2-3 revisi)
6. Termination clause
7. Intellectual property (siapa punya kode?)
8. Confidentiality (NDA)
\`\`\`

## Scope Creep Protection

\`\`\`
"Perubahan di luar scope awal akan dikenakan biaya tambahan 
berdasarkan rate Rp XXX/jam. Klien akan diberitahu dan menyetujui 
sebelum pekerjaan tambahan dimulai."
\`\`\`

## Tools Kontrak

- **Upwork/Fiverr** - Kontrak built-in
- **DocuSign** - e-signature
- **HelloSign** - Simple e-sign
- **Template kontrak** - Adaptasi dari template online

## PENTING!

\`\`\`
✅ SELALU pakai kontrak (meski klien teman)
✅ Scope jelas & tertulis
✅ Jangan mulai kerja sebelum kontrak signed
✅ Simpan semua komunikasi (email, chat)
✅ Konsultasi lawyer untuk proyek besar
\`\`\`
  `,

  quiz: [
    { question: "Scope creep?", options: ["Fitur baru", "Klien minta tambahan di luar kontrak tanpa bayar", "Bug", "Revisi"], correctAnswer: 1 },
    { question: "Kontrak minimal harus ada?", options: ["Harga saja", "Scope, timeline, payment terms", "Nama saja", "Tanda tangan"], correctAnswer: 1 }
  ],

  codeExamples: []
};