export const chapter = {
  slug: "tools",
  title: "SEO Tools & Analytics",
  description: "Mengenal berbagai *tools* esensial untuk riset, audit, dan memantau kinerja SEO.",
  icon: "TbTool",
  color: "#607D8B",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["introduction"],
  tags: ["tools", "analytics", "research"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Senjata Wajib Seorang Praktisi SEO

Untuk bisa bersaing di dunia SEO, kamu tidak bisa sekadar menebak-nebak (guessing). Semua harus berdasarkan data. Mulai dari mencari *keyword* apa yang banyak dicari, mengecek kerusakan link, hingga memantau berapa banyak orang yang masuk ke websitemu. 

Berikut adalah 4 kategori *tools* SEO dan standar industri saat ini:

### 1. Webmaster Tools (Wajib & Gratis)
Disediakan langsung oleh mesin pencari. Tanpa *tool* ini, kamu ibarat mengemudi dengan mata tertutup.
- **Google Search Console (GSC)**: Alat mutlak untuk memantau performa Google, melihat kata kunci apa yang mendatangkan klik, men-submit sitemap, dan melihat *error indexing*.
- **Bing Webmaster Tools**: Mirip GSC tapi untuk mesin pencari Bing milik Microsoft (yang juga memberdayakan Yahoo).

### 2. Website Analytics (Wajib & Gratis)
Untuk melihat perilaku *user* setelah mereka berada di dalam websitemu.
- **Google Analytics (GA4)**: Melihat berapa lama pengunjung membaca, dari perangkat apa mereka buka, asal kota/negara, hingga melacak klik tombol Beli.

### 3. All-in-One SEO Software (Riset & Audit)
Ini adalah *tools* premium (berbayar, namun biasanya ada versi *free-tier*). Digunakan untuk riset kompetitor, melacak ranking harian, dan mencari ide *keyword*.
- **Ahrefs**: Sangat kuat di database Backlink dan riset kata kunci.
- **Semrush**: Sangat kuat di fitur Audit teknis, SEO konten, dan riset iklan (PPC).
- **Ubersuggest**: Alternatif yang lebih terjangkau, dibuat oleh Neil Patel. Sangat bagus untuk pemula.

### 4. Technical SEO Crawlers
Aplikasi ini diinstal di komputer, bertugas men-simulasikan kerja Googlebot untuk merayapi seluruh isi websitemu secara masif.
- **Screaming Frog SEO Spider**: Alat paling legendaris. Digunakan untuk menemukan link 404, mengecek tag meta yang dobel, atau gambar yang tidak ada alt text. Gratis untuk merayapi 500 halaman pertama.

## Ekstensi Browser Pilihan
Sebagai tambahan, pasang ekstensi gratis ini di Google Chrome kamu untuk mengecek elemen SEO dengan cepat saat *browsing*:
- **Detailed SEO Extension** (Menarik H1, H2, Meta tags dalam 1 klik).
- **Lighthouse** (Mengecek Core Web Vitals).
  `,
  quiz: [
    {
      question: "Tool apa dari Google yang digunakan untuk submit sitemap dan melihat peringatan Indexing?",
      options: [
        "Google Analytics",
        "Google Search Console",
        "Google Tag Manager",
        "Google Keyword Planner"
      ],
      correctAnswer: 1
    },
    {
      question: "Software legendaris berbasis desktop yang digunakan untuk melakukan audit teknis dan simulasi web crawling adalah?",
      options: [
        "Screaming Frog",
        "Photoshop",
        "VS Code",
        "Postman"
      ],
      correctAnswer: 0
    },
    {
      question: "Apa fungsi utama dari Google Analytics (GA4) dalam SEO?",
      options: [
        "Membuat logo website",
        "Melacak perilaku pengguna setelah masuk ke dalam website (traffic data)",
        "Mengganti template website",
        "Membeli domain dan hosting"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};