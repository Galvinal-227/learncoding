export const chapter = {
  slug: "robots-txt",
  title: "Robots.txt & Crawl Budget",
  description: "Panduan mengatur bot mesin pencari menggunakan robots.txt untuk efisiensi crawling.",
  icon: "SiProbot",
  color: "#546E7A",
  difficulty: "Intermediate",
  estimatedReadingTime: 12,
  prerequisites: ["meta-tags"],
  tags: ["technical-seo", "crawling", "robots"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Robots.txt?

File \`robots.txt\` adalah file teks biasa yang diletakkan di *root directory* website kamu (contoh: \`https://namewebsite.com/robots.txt\`). File ini memberikan instruksi kepada *web crawler* (seperti Googlebot) tentang halaman atau file mana saja yang **boleh** atau **tidak boleh** mereka akses.

## Mengapa Robots.txt Penting?

1. **Menghemat Crawl Budget**: Mencegah bot membuang waktu merayapi halaman yang tidak penting (seperti halaman admin atau keranjang belanja).
2. **Mencegah Indexing Halaman Rahasia**: Meski bukan alat keamanan, ini membantu menyembunyikan file internal dari hasil pencarian umum.
3. **Mencegah Overload Server**: Menghindari bot merayapi terlalu banyak halaman dalam waktu bersamaan.

## Sintaks Dasar Robots.txt

Ada 3 perintah utama dalam file ini:

### 1. User-agent
Menentukan bot mana yang diberikan instruksi.
\`\`\`text
# Berlaku untuk semua bot
User-agent: *

# Hanya berlaku untuk Googlebot
User-agent: Googlebot
\`\`\`

### 2. Disallow
Memberitahu bot untuk **tidak** mengakses URL atau direktori tertentu.
\`\`\`text
# Memblokir seluruh website
Disallow: /

# Memblokir direktori tertentu
Disallow: /wp-admin/
Disallow: /private/
\`\`\`

### 3. Allow
Memberikan izin eksplisit (biasanya digunakan untuk menimpa aturan Disallow di sub-direktori).
\`\`\`text
# Memblokir folder /images/ tapi mengizinkan /images/public/
User-agent: *
Disallow: /images/
Allow: /images/public/
\`\`\`

## Contoh Konfigurasi Robots.txt

### Konfigurasi Standar WordPress
\`\`\`text
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://namewebsite.com/sitemap_index.xml
\`\`\`

### Konfigurasi Toko Online (E-commerce)
\`\`\`text
User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /*?filter=*
Disallow: /*?sort=*

Sitemap: https://namewebsite.com/sitemap.xml
\`\`\`

## Best Practices

1. **Selalu letakkan di root**: Harus di \`namadomain.com/robots.txt\`
2. **Case-sensitive**: \`/Folder/\` berbeda dengan \`/folder/\`
3. **Gunakan Wildcard (*)**: Untuk memblokir ekstensi file. Contoh: \`Disallow: /*.pdf$\` (memblokir semua file PDF).
4. **Sertakan link Sitemap**: Letakkan di baris paling bawah agar bot mudah menemukan sitemap kamu.

> ⚠️ **Penting:** Jangan gunakan \`robots.txt\` untuk menyembunyikan data sensitif (seperti password atau data user). File ini bersifat publik dan bisa dibaca siapa saja! Gunakan proteksi *password* di level server untuk data sensitif.
  `,
  quiz: [
    {
      question: "Di mana file robots.txt harus diletakkan?",
      options: [
        "Di dalam folder /assets",
        "Di root directory website (domain.com/robots.txt)",
        "Di dalam tag <head> HTML",
        "Di dalam database MySQL"
      ],
      correctAnswer: 1
    },
    {
      question: "Perintah apa yang digunakan untuk menargetkan semua bot mesin pencari?",
      options: [
        "Bot-name: All",
        "User-agent: *",
        "Disallow: none",
        "Crawler: *"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa fungsi utama perintah 'Disallow'?",
      options: [
        "Menghapus website dari Google",
        "Memblokir user dari negara tertentu",
        "Melarang bot merayapi URL atau direktori tertentu",
        "Mencegah website di-hack"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Node.js Robots.txt Express Middleware",
      code: `// Express middleware untuk menyajikan robots.txt dinamis
const express = require('express');
const app = express();

app.get('/robots.txt', (req, res) => {
    // Set response header menjadi plain text
    res.type('text/plain');

    // Cek environment (production vs staging)
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
        // Izinkan bot di production
        res.send(\`User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /

Sitemap: https://websitekamu.com/sitemap.xml\`);
    } else {
        // Blokir semua bot di mode staging/development
        res.send(\`User-agent: *
Disallow: /\`);
    }
});

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});`,
      language: "javascript"
    }
  ]
};