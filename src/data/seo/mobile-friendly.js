export const chapter = {
  slug: "mobile-friendly",
  title: "Mobile-Friendly & Mobile-First",
  description: "Memahami Mobile-First Indexing dan optimasi website untuk perangkat seluler.",
  icon: "TbDeviceMobile",
  color: "#4CAF50",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["meta-tags", "introduction"],
  tags: ["mobile-seo", "responsive", "ux"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Mobile-First Indexing?

Sejak tahun 2019, Google secara resmi beralih ke **Mobile-First Indexing**. Artinya, Google memprioritaskan **versi *mobile* (seluler)** dari website kamu untuk menentukan *ranking* dan proses *indexing*, bukan versi desktop-nya.

Jika website kamu tampil bagus di komputer tapi berantakan di HP, peringkat (ranking) websitemu di Google akan anjlok drastis.

## Prinsip Mobile-Friendly SEO

### 1. Desain Responsif (Responsive Web Design)
Website harus menggunakan CSS yang fleksibel agar bisa menyesuaikan ukuran layar secara otomatis. Ini adalah metode yang paling direkomendasikan oleh Google.
Pastikan kamu menggunakan tag viewport di HTML kamu:
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### 2. Ukuran Font yang Mudah Dibaca
Font dasar setidaknya berukuran **16px**. Pengunjung tidak boleh melakukan *zoom-in* (cubit layar) hanya untuk membaca teks artikel kamu.

### 3. Jarak Antar Elemen (Tap Targets)
Tombol dan tautan (link) harus memiliki jarak yang cukup. Jika tombol terlalu berdempetan, pengguna akan kesulitan menekan tombol yang benar dengan jari mereka. Google menyebut ini sebagai *"Tap targets too close"*.

### 4. Hindari Pop-up yang Mengganggu (Intrusive Interstitials)
Pop-up iklan atau *banner* promosi yang menutupi seluruh layar HP sesaat setelah pengunjung masuk sangat dibenci oleh Google. Gunakan banner kecil di bawah layar jika memang harus ada promosi.

## Cara Mengecek Mobile-Friendly

Kamu bisa menggunakan tools gratis dari Google:
1. **Lighthouse** (Bawaan browser Google Chrome, tekan F12 -> tab Lighthouse).
2. Laporan **Mobile Usability** di dalam Google Search Console.

## Jangan Sembunyikan Konten di Mobile!
Dulu, banyak *developer* menyembunyikan sebagian teks (menggunakan \`display: none\`) di versi *mobile* agar rapi. Di era Mobile-First Indexing, **konten yang disembunyikan di versi mobile tidak akan diindeks oleh Google**. Pastikan versi desktop dan mobile memiliki jumlah teks/konten penting yang sama.
  `,
  quiz: [
    {
      question: "Apa arti dari Mobile-First Indexing?",
      options: [
        "Google hanya menampilkan website di HP saja",
        "Google menggunakan versi seluler dari web untuk indexing dan ranking",
        "Kita harus membuat 2 domain terpisah untuk desktop dan mobile",
        "Membangun website dengan mematikan fitur desktop"
      ],
      correctAnswer: 1
    },
    {
      question: "Tag meta apa yang wajib ada untuk memastikan website responsif di layar HP?",
      options: [
        "meta name='robots'",
        "meta charset='UTF-8'",
        "meta name='viewport'",
        "meta property='og:mobile'"
      ],
      correctAnswer: 2
    },
    {
      question: "Apa dampak menyembunyikan teks penting di versi mobile menggunakan 'display: none'?",
      options: [
        "Teks tersebut tidak akan dinilai/diindeks oleh Google",
        "Kecepatan website meningkat drastis",
        "Peringkat SEO akan naik",
        "Website menjadi lebih aman"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "CSS CSS Grid & Flexbox untuk Responsive Design",
      code: `/* Contoh implementasi CSS murni untuk layout yang Mobile-Friendly */

/* Reset dasar */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  /* Font size 16px standar agar mudah dibaca di HP */
  font-size: 16px; 
  line-height: 1.5;
  font-family: system-ui, sans-serif;
}

/* Container utama menggunakan CSS Grid */
.container {
  display: grid;
  /* Kolom jadi 1 (penuh) di mobile */
  grid-template-columns: 1fr; 
  gap: 20px;
  padding: 15px;
}

/* Link dan Tombol yang ramah sentuhan (Tap Targets) */
.btn {
  display: inline-block;
  padding: 12px 24px; /* Minimal 48px tinggi aslinya di layar */
  background: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 10px;
}

/* Media Query untuk Desktop (Layar > 768px) */
@media (min-width: 768px) {
  .container {
    /* Berubah jadi 2 kolom di layar lebar */
    grid-template-columns: 2fr 1fr; 
    max-width: 1200px;
    margin: 0 auto;
  }
}`,
      language: "css"
    }
  ]
};