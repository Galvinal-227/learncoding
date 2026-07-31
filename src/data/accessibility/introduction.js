export const chapter = {
  slug: "accessibility-introduction",
  title: "Pengenalan Aksesibilitas Web",
  description: "Pahami pentingnya aksesibilitas web dan dampaknya bagi pengguna dan bisnis.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["aksesibilitas", "a11y", "pengenalan", "inklusi"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Aksesibilitas Web?

Aksesibilitas web (sering disingkat **a11y** - 11 huruf antara A dan Y) adalah praktik membuat website yang bisa digunakan oleh **semua orang**, termasuk penyandang disabilitas.

## Angka Penting

- 🌍 **1,3 miliar** orang hidup dengan disabilitas (WHO)
- 🖥️ **96,8%** homepage web memiliki error aksesibilitas (WebAIM 2024)
- 💰 Pasar disabilitas bernilai **$8 triliun+** secara global

## 4 Jenis Disabilitas

| Jenis | Contoh | Kebutuhan |
|-------|--------|-----------|
| **Visual** | Buta, low vision, buta warna | Screen reader, kontras tinggi, alt text |
| **Motorik** | Tidak bisa pakai mouse | Navigasi keyboard, tombol besar |
| **Pendengaran** | Tuli, sulit mendengar | Caption video, transkrip audio |
| **Kognitif** | Disleksia, ADHD, autisme | Bahasa sederhana, layout konsisten |

## Teknologi Asistif

- **Screen Reader**: NVDA (gratis, Windows), VoiceOver (Mac/iOS), TalkBack (Android), JAWS (berbayar)
- **Pembesar Layar**: ZoomText, Windows Magnifier
- **Speech Recognition**: Dragon NaturallySpeaking, Voice Control (Mac)
- **Switch Devices**: Untuk pengguna dengan mobilitas sangat terbatas
- **Braille Display**: Output taktil untuk tunanetra

## Kenapa Aksesibilitas Penting?

### 1. Etis
Web adalah hak dasar. Semua orang berhak mengakses informasi.

### 2. Hukum
Banyak negara mewajibkan aksesibilitas:
- 🇺🇸 ADA (Americans with Disabilities Act)
- 🇪🇺 EN 301 549 (EU)
- 🇮🇩 UU No. 8 Tahun 2016 tentang Penyandang Disabilitas

### 3. Bisnis
- Menjangkau lebih banyak pengguna (15-20% populasi)
- Meningkatkan SEO (Google suka accessible sites)
- Mencegah tuntutan hukum
- Brand image lebih baik

### 4. UX untuk Semua
Aksesibilitas juga membantu:
- Pengguna sementara (tangan patah, tanpa kacamata)
- Pengguna situasional (silau matahari, tempat bising)
- Orang tua dengan kemampuan menurun

## Prinsip WCAG (POUR)

1. **Perceivable** - Konten harus bisa dipersepsikan
2. **Operable** - Bisa dioperasikan
3. **Understandable** - Mudah dipahami
4. **Robust** - Kompatibel dengan teknologi asistif

## Mulai dari Mana?

1. Tambahkan alt text ke semua gambar
2. Gunakan HTML semantik
3. Pastikan navigasi keyboard berfungsi
4. Cek kontras warna
5. Labeli semua form input
6. Test dengan screen reader
  `,

  quiz: [
    { question: "Apa kepanjangan a11y?", options: ["Accessibility (11 huruf)", "Ally Technology", "Array 11", "Application Layer"], correctAnswer: 0, explanation: "a11y adalah numeronim untuk accessibility - 11 huruf antara 'a' dan 'y'." },
    { question: "Berapa persen populasi dunia yang hidup dengan disabilitas?", options: ["5%", "10%", "15-20%", "50%"], correctAnswer: 2, explanation: "WHO memperkirakan sekitar 15-20% populasi dunia hidup dengan beberapa bentuk disabilitas." },
    { question: "Apa kepanjangan POUR dalam WCAG?", options: ["Pour Over User Requirements", "Perceivable, Operable, Understandable, Robust", "Program, Output, User, Report", "Public Open User Resource"], correctAnswer: 1, explanation: "POUR adalah 4 prinsip WCAG: Perceivable, Operable, Understandable, Robust." }
  ],

  codeExamples: []
};