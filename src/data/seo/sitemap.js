export const chapter = {
  slug: "sitemap",
  title: "XML Sitemap",
  description: "Membuat dan mengoptimasi XML Sitemap agar website mudah diindeks oleh Google.",
  icon: "TbHierarchy",
  color: "#FF9800",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["robots-txt"],
  tags: ["technical-seo", "sitemap", "indexing"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu XML Sitemap?

**XML Sitemap** adalah sebuah file berformat XML yang berisi daftar semua halaman penting (URL) di website kamu. Fungsinya seperti "peta jalan" bagi *web crawler* (seperti Googlebot) agar mereka bisa menemukan, merayapi, dan mengindeks seluruh konten website kamu dengan cepat dan akurat.

## Mengapa Sitemap Penting?

Meski mesin pencari biasanya bisa menemukan halaman melalui *internal link*, Sitemap sangat krusial jika:
1. Websitemu **sangat besar** (ribuan halaman).
2. Website **masih baru** dan belum punya banyak *backlink*.
3. Websitemu punya banyak konten arsip yang **terisolasi** (tidak saling terhubung).
4. Kamu menggunakan konten multimedia (Google News, Video, Images).

## Struktur Dasar XML Sitemap

Sitemap standar menggunakan tag XML khusus. Berikut adalah contohnya:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://www.example.com/</loc>
      <lastmod>2026-07-30</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://www.example.com/artikel-seo</loc>
      <lastmod>2026-07-28</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>
\`\`\`

### Penjelasan Tag:
- \`<urlset>\`: Standar pembuka dan penutup file sitemap.
- \`<url>\`: Tag induk untuk setiap URL.
- \`<loc>\`: (Wajib) URL halaman kamu. Harus dimulai dengan http/https.
- \`<lastmod>\`: (Opsional) Tanggal terakhir halaman diubah (Format: YYYY-MM-DD). Sangat penting bagi Google.
- \`<changefreq>\`: (Opsional) Seberapa sering halaman berubah (\`always\`, \`hourly\`, \`daily\`, \`weekly\`, \`monthly\`, \`yearly\`, \`never\`).
- \`<priority>\`: (Opsional) Prioritas URL dibanding URL lain di websitemu (0.0 sampai 1.0).

## Batasan XML Sitemap

Google dan mesin pencari lain memiliki aturan ketat untuk sitemap:
- **Maksimal 50.000 URL** per file sitemap.
- **Ukuran maksimal file 50 MB** (jika belum dikompres).
- Jika website kamu punya lebih dari 50.000 URL, kamu harus membuat **Sitemap Index** (sitemap yang berisi daftar sitemap lain).

## Cara Submit Sitemap ke Google

1. Buka **Google Search Console (GSC)**.
2. Pilih properti website kamu.
3. Di menu sebelah kiri, klik **Sitemaps**.
4. Masukkan URL sitemap kamu (misal: \`sitemap.xml\`) di kolom *Add a new sitemap*.
5. Klik **Submit**.

> **Tips:** Jangan lupa juga untuk mencantumkan URL Sitemap di dalam file \`robots.txt\` kamu!
  `,
  quiz: [
    {
      question: "Berapa batas maksimal jumlah URL dalam satu file XML Sitemap standar?",
      options: [
        "10.000 URL",
        "50.000 URL",
        "100.000 URL",
        "Tidak ada batas"
      ],
      correctAnswer: 1
    },
    {
      question: "Tag XML mana yang sifatnya WAJIB ada di setiap entri sitemap?",
      options: [
        "<lastmod>",
        "<priority>",
        "<changefreq>",
        "<loc>"
      ],
      correctAnswer: 3
    },
    {
      question: "Di platform mana kita bisa men-submit Sitemap secara manual ke Google?",
      options: [
        "Google Analytics",
        "Google Ads",
        "Google Search Console",
        "Google Tag Manager"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Simple Sitemap Generator (Node.js)",
      code: `// sitemap-generator.js
const fs = require('fs');

class SitemapGenerator {
    constructor(domain) {
        this.domain = domain;
        this.urls = [];
    }

    addUrl(path, lastmod = new Date().toISOString().split('T')[0], priority = '0.5') {
        this.urls.push({
            loc: \`\${this.domain}\${path}\`,
            lastmod,
            priority
        });
    }

    generate() {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n';

        this.urls.forEach(url => {
            xml += '  <url>\\n';
            xml += \`    <loc>\${url.loc}</loc>\\n\`;
            xml += \`    <lastmod>\${url.lastmod}</lastmod>\\n\`;
            xml += \`    <priority>\${url.priority}</priority>\\n\`;
            xml += '  </url>\\n';
        });

        xml += '</urlset>';
        return xml;
    }

    save(filename = 'sitemap.xml') {
        fs.writeFileSync(filename, this.generate());
        console.log(\`✅ \${filename} berhasil dibuat dengan \${this.urls.length} URLs.\`);
    }
}

// Cara Penggunaan
const sitemap = new SitemapGenerator('https://www.websitemu.com');

sitemap.addUrl('/', '2026-07-30', '1.0');
sitemap.addUrl('/tentang-kami', '2026-07-01', '0.8');
sitemap.addUrl('/artikel/belajar-seo', '2026-07-15', '0.9');

sitemap.save();`,
      language: "javascript"
    }
  ]
};