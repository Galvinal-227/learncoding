export const chapter = {
  slug: "accessibility-wcag",
  title: "WCAG Guidelines",
  description: "Pahami standar internasional WCAG untuk aksesibilitas web.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["accessibility-introduction"],
  tags: ["aksesibilitas", "wcag", "standar", "compliance"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu WCAG?

**WCAG (Web Content Accessibility Guidelines)** adalah standar internasional untuk aksesibilitas web, dibuat oleh W3C.

- **WCAG 2.0** (2008)
- **WCAG 2.1** (2018) - menambah mobile a11y
- **WCAG 2.2** (2023) - menambah fokus, dragging
- **WCAG 3.0** - draft, coming soon

## Level Conformance

| Level | Arti | Contoh |
|-------|------|--------|
| **A** | Minimum (harus) | Alt text gambar, label form |
| **AA** | Standar (sebaiknya) | Kontras 4.5:1, focus visible |
| **AAA** | Tertinggi | Kontras 7:1, sign language |

Target standar: **WCAG 2.1 Level AA**

## 4 Prinsip (POUR)

### 1. Perceivable
Konten harus bisa dipersepsikan:
- Alt text untuk gambar (1.1.1)
- Caption video (1.2.2)
- Kontras cukup (1.4.3)
- Bisa di-zoom 200% (1.4.4)

### 2. Operable
Bisa dioperasikan:
- Semua via keyboard (2.1.1)
- Tidak ada keyboard trap (2.1.2)
- Cukup waktu baca (2.2.1)
- Tidak ada konten berkedip >3x/detik (2.3.1)
- Skip navigation (2.4.1)

### 3. Understandable
Mudah dipahami:
- Bahasa halaman jelas (3.1.1)
- Navigasi konsisten (3.2.3)
- Error message membantu (3.3.1)
- Label/instruksi jelas (3.3.2)

### 4. Robust
Kompatibel dengan teknologi:
- HTML valid (4.1.1)
- ARIA digunakan dengan benar (4.1.2)

## Success Criteria Penting (AA)

| SC | Deskripsi | Cara Tes |
|----|-----------|----------|
| 1.1.1 | Non-text content punya alt | Cek semua gambar |
| 1.4.3 | Kontras minimal 4.5:1 | Contrast checker |
| 2.1.1 | Semua fungsi via keyboard | Unplug mouse |
| 2.4.3 | Urutan fokus logis | Tab melalui halaman |
| 2.4.7 | Focus indicator terlihat | Tab, cek outline |
| 3.3.1 | Error teridentifikasi | Submit form kosong |
| 3.3.2 | Label dan instruksi | Cek semua form |
| 4.1.1 | Parsing (HTML valid) | W3C Validator |

## Cara Membaca WCAG

Contoh: **SC 1.4.3 Contrast (Minimum) - Level AA**
- **1** = Prinsip 1 (Perceivable)
- **4** = Guideline 4 (Distinguishable)
- **3** = Success Criteria 3 (Contrast Minimum)
- **AA** = Level AA

## Tools Compliance

- **Accessibility Checklist** (notion template)
- **VPAT** (Voluntary Product Accessibility Template)
- **Accessibility Conformance Report (ACR)**

## Contoh WCAG Compliance Checklist

\`\`\`
Level A (Minimum):
✅ Alt text semua gambar
✅ Label semua form input
✅ Video punya captions
✅ Tidak ada keyboard trap
✅ Skip navigation link

Level AA (Standard):
✅ Kontras teks 4.5:1
✅ Focus indicator terlihat
✅ Heading hierarchy benar
✅ Error suggestion jelas
✅ Konsisten navigasi
\`\`\`
  `,

  quiz: [
    { question: "Apa target level WCAG yang direkomendasikan?", options: ["Level A", "Level AA", "Level AAA", "Tidak ada"], correctAnswer: 1, explanation: "WCAG 2.1 Level AA adalah standar yang paling sering dijadikan target dan persyaratan hukum di banyak negara." },
    { question: "Apa 4 prinsip WCAG (POUR)?", options: ["Power, Output, User, Report", "Perceivable, Operable, Understandable, Robust", "Program, Object, Unit, Resource", "Public, Open, Universal, Ready"], correctAnswer: 1, explanation: "POUR: Perceivable, Operable, Understandable, Robust." },
    { question: "SC 2.1.1 mengatur tentang apa?", options: ["Kontras warna", "Keyboard accessibility", "Alt text", "Error suggestion"], correctAnswer: 1, explanation: "SC 2.1.1: Semua fungsionalitas harus bisa dioperasikan via keyboard tanpa pengecualian." }
  ],

  codeExamples: []
};