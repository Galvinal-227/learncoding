export const chapter = {
  slug: "performance",
  title: "Website Performance (Core Web Vitals)",
  description: "Optimasi kecepatan website dan metrik Core Web Vitals untuk SEO.",
  icon: "TbGauge",
  color: "#E53935",
  difficulty: "Advanced",
  estimatedReadingTime: 18,
  prerequisites: ["mobile-friendly"],
  tags: ["technical-seo", "performance", "core-web-vitals", "speed"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Pentingnya Kecepatan Website

Kecepatan memuat halaman (page speed) adalah faktor penentu *ranking* secara langsung. Pengguna internet tidak suka menunggu. Amazon pernah melaporkan bahwa setiap penundaan *loading* 1 detik berdampak pada kerugian miliaran dolar per tahun. 

Google menggunakan metrik bernama **Core Web Vitals (CWV)** untuk menilai kualitas kecepatan dan pengalaman pengguna (*User Experience*).

## 3 Metrik Utama Core Web Vitals

### 1. LCP (Largest Contentful Paint)
Mengukur **kecepatan *loading***. LCP menghitung waktu yang dibutuhkan untuk merender elemen gambar atau blok teks terbesar yang terlihat di layar.
- **Bagus (Hijau)**: < 2.5 detik
- **Buruk (Merah)**: > 4.0 detik
- *Solusi*: Kompres gambar, gunakan format WebP, gunakan caching dan CDN.

### 2. INP (Interaction to Next Paint)
Menggantikan FID (First Input Delay) pada 2024. Mengukur **responsivitas**. INP mengukur seberapa cepat website bereaksi (secara visual) ketika pengguna mengeklik, menyentuh, atau mengetik sesuatu.
- **Bagus (Hijau)**: < 200 milidetik
- **Buruk (Merah)**: > 500 milidetik
- *Solusi*: Kurangi *heavy JavaScript*, hapus *script* pihak ketiga yang tidak penting, hindari proses *blocking* di *main thread*.

### 3. CLS (Cumulative Layout Shift)
Mengukur **kestabilan visual**. Seberapa sering elemen (seperti teks atau tombol) tiba-tiba bergeser atau "melompat" karena gambar telat dimuat.
- **Bagus (Hijau)**: < 0.1
- **Buruk (Merah)**: > 0.25
- *Solusi*: Selalu cantumkan atribut \`width\` dan \`height\` pada tag \`<img>\`, hindari memasang iklan dinamis yang menggeser teks di atas halaman.

## Tips Teknis Mempercepat Website

1. **Lazy Loading Images**: Gambar hanya akan dimuat ketika pengguna men-scroll layar ke bawah.
\`\`\`html
<img src="gambar-besar.webp" alt="Foto Pemandangan" width="800" height="600" loading="lazy">
\`\`\`

2. **Minifikasi (Minify) File**: Menghapus spasi dan komentar pada file CSS dan JavaScript (menggunakan alat build seperti Webpack atau Vite).

3. **Gunakan Caching**: Simpan data statis di perangkat pengguna agar tidak perlu *download* ulang.

4. **Ganti Format Gambar**: Tinggalkan format JPEG/PNG tua dan gunakan **WebP** atau **AVIF** yang ukurannya bisa 50% lebih kecil tanpa mengurangi kualitas visual.
  `,
  quiz: [
    {
      question: "Metrik Core Web Vitals yang mengukur kestabilan visual (elemen lompat/bergeser) adalah?",
      options: [
        "LCP (Largest Contentful Paint)",
        "INP (Interaction to Next Paint)",
        "CLS (Cumulative Layout Shift)",
        "TTFB (Time to First Byte)"
      ],
      correctAnswer: 2
    },
    {
      question: "Berapa target waktu maksimal LCP agar dinilai 'Bagus' oleh Google?",
      options: [
        "2.5 detik",
        "4.0 detik",
        "5.0 detik",
        "10 detik"
      ],
      correctAnswer: 0
    },
    {
      question: "Atribut HTML apa yang ditambahkan ke tag gambar agar gambar tidak langsung dimuat semua di awal?",
      options: [
        "async='true'",
        "loading='lazy'",
        "defer",
        "src='wait'"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Optimasi Gambar Modern dengan tag <picture>",
      code: `<!-- Menggunakan tag <picture> untuk melayani format gambar terbaik sesuai browser pengguna -->
<picture>
  <!-- Browser modern akan memuat format AVIF (sangat kecil) -->
  <source srcset="image.avif" type="image/avif" />
  
  <!-- Jika tidak support AVIF, akan memuat WebP -->
  <source srcset="image.webp" type="image/webp" />
  
  <!-- Fallback untuk browser jadul (JPEG) -->
  <img 
    src="image.jpg" 
    alt="Deskripsi gambar penting untuk SEO"
    width="800" 
    height="450" 
    loading="lazy" 
    decoding="async"
    style="width: 100%; height: auto;"
  />
</picture>

<!-- 
Penjelasan:
1. width & height = mencegah CLS (Layout Shift)
2. loading="lazy" = menunda pemuatan gambar yang belum terlihat
3. decoding="async" = mencegah gambar memblokir pemrosesan elemen lain 
-->`,
      language: "html"
    }
  ]
};