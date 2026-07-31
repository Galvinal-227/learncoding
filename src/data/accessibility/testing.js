export const chapter = {
  slug: "accessibility-testing",
  title: "Testing Aksesibilitas",
  description: "Pelajari tools dan teknik untuk menguji aksesibilitas website.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["accessibility-keyboard-navigation"],
  tags: ["aksesibilitas", "testing", "tools", "lighthouse"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Harus Testing?

Menulis kode aksesibel saja tidak cukup. Harus di-test untuk memastikan **benar-benar berfungsi** dengan teknologi asistif.

## Level Testing

### 1. Automated Tools (Cepat, Tidak Lengkap)
Menangkap ~30-50% issues.

### 2. Manual Testing (Lebih Dalam)
Keyboard, screen reader, zoom.

### 3. User Testing (Paling Akurat)
Pengguna disabilitas sesungguhnya.

## Automated Tools

### Lighthouse (Chrome Built-in)
1. F12 → Tab **Lighthouse**
2. Centang **Accessibility**
3. Generate report
4. Dapat skor + rekomendasi

### axe DevTools
1. Install [axe DevTools extension](https://www.deque.com/axe/)
2. Buka DevTools → tab **axe**
3. Scan all/semua halaman
4. Lihat issues + cara perbaiki

### WAVE
1. [wave.webaim.org](https://wave.webaim.org)
2. Masukkan URL
3. Lihat error, alert, feature icons

### Lainnya
- **Microsoft Accessibility Insights**
- **ARC Toolkit** (Chrome)
- **Siteimprove**

## Manual Testing Checklist

\`\`\`
✅ Tab melalui semua elemen interaktif
✅ Urutan tab logis?
✅ Focus indicator selalu terlihat?
✅ Skip link berfungsi?
✅ Bisa operasikan semua dengan keyboard?
✅ Tidak ada keyboard trap?
✅ Zoom 200% - semua konten terlihat?
✅ Test dengan screen reader (NVDA/VoiceOver)
✅ Cek kontras warna
✅ Cek alt text gambar
✅ Heading hierarchy benar?
✅ Form punya label semua?
\`\`\`

## Testing dengan Screen Reader

1. **Aktifkan screen reader**
2. **Tutup mata** atau jauhkan layar
3. **Navigasi hanya keyboard**
4. Tanya: "Apakah saya mengerti konten dan bisa menyelesaikan tugas?"

## Contoh Issue & Perbaikan

| Issue | Lighthouse | Perbaikan |
|-------|-----------|-----------|
| Tombol tanpa teks | ❌ | Tambah aria-label |
| Kontras rendah | ❌ | Gelapkan teks/terangkan bg |
| Alt text kosong | ❌ | Tambah deskripsi |
| Heading skip level | ❌ | Perbaiki hierarki |
| Form tanpa label | ❌ | Tambah label + for |
  `,

  quiz: [
    { question: "Automated tools menangkap berapa persen a11y issues?", options: ["90-100%", "70-80%", "30-50%", "0-10%"], correctAnswer: 2, explanation: "Automated tools hanya menangkap ~30-50% isu. Sisanya butuh testing manual." },
    { question: "Tool Google Chrome built-in untuk a11y testing?", options: ["axe", "WAVE", "Lighthouse", "NVDA"], correctAnswer: 2, explanation: "Lighthouse adalah tool auditing built-in di Chrome DevTools yang bisa mengecek aksesibilitas." }
  ],

  codeExamples: []
};