export const chapter = {
  slug: "structured-data",
  title: "Structured Data & Rich Snippets",
  description: "Menggunakan Schema Markup (JSON-LD) agar website tampil menarik di hasil pencarian.",
  icon: "TbBraces",
  color: "#9C27B0",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["meta-tags"],
  tags: ["schema-markup", "json-ld", "rich-snippets"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Structured Data (Schema Markup)?

Mesin pencari itu pintar, tapi mereka tetap butuh bantuan untuk **memahami konteks** sebuah halaman. *Structured Data* (Data Terstruktur) adalah format standar penulisan kode untuk memberikan informasi jelas mengenai halaman tersebut. 

Kamus standar yang diakui Google, Bing, dan Yahoo adalah **Schema.org**.

## Mengapa Harus Pakai Schema?

Penggunaan *Structured Data* bisa memicu munculnya **Rich Snippets** di hasil pencarian. 
Alih-alih hanya menampilkan Judul dan Deskripsi biasa, Google bisa menampilkan:
- Rating Bintang (⭐️⭐️⭐️⭐️⭐️)
- Harga Produk (Rp 150.000)
- Lama waktu memasak (Resep)
- Daftar Pertanyaan & Jawaban (FAQ Dropdown)

*Rich snippets* ini membuat websitemu terlihat menonjol dan secara drastis bisa meningkatkan **CTR (Click-Through Rate)**.

## Format yang Direkomendasikan: JSON-LD

Meski ada Microdata dan RDFa, Google secara resmi paling merekomendasikan **JSON-LD** (*JavaScript Object Notation for Linked Data*). Kodenya diletakkan di dalam tag \`<script>\` tanpa mengganggu struktur HTML websitemu.

### Contoh 1: Tipe Artikel (Article)
\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cara Memahami Algoritma Google 2026",
  "image": "https://example.com/photos/seo.jpg",
  "author": {
    "@type": "Person",
    "name": "Budi Santoso"
  },
  "datePublished": "2026-07-30"
}
</script>
\`\`\`

### Contoh 2: Tipe FAQ (Frequently Asked Questions)
Jika artikelmu punya sesi tanya jawab, Schema FAQ akan membuat Q&A tersebut muncul langsung di halaman Google!
\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Apa itu SEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SEO adalah optimasi mesin pencari."
    }
  }]
}
</script>
\`\`\`

## Cara Testing

Karena JSON sangat sensitif (kurang 1 koma saja kode bisa error), kamu harus selalu mengetes kode schema kamu menggunakan **Rich Results Test** milik Google (\`search.google.com/test/rich-results\`).
  `,
  quiz: [
    {
      question: "Format penulisan Schema Markup apa yang paling direkomendasikan oleh Google?",
      options: [
        "Microdata",
        "JSON-LD",
        "XML",
        "RDFa"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa keuntungan utama menggunakan Structured Data?",
      options: [
        "Website tidak akan pernah terkena hack",
        "Loading website akan menjadi 0 detik",
        "Memungkinkan website mendapatkan Rich Snippets di hasil pencarian",
        "Hosting menjadi gratis"
      ],
      correctAnswer: 2
    },
    {
      question: "Situs standar (kamus) apa yang merangkum semua jenis tipe data terstruktur?",
      options: [
        "Google.com",
        "JSON.org",
        "Schema.org",
        "W3Schools.com"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "React/Next.js JSON-LD Component",
      code: `// Komponen praktis untuk melempar JSON-LD ke Head Next.js/React
import Head from 'next/head';

export default function ProductSchema({ product }) {
  // Buat objek schema product
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.imageUrl,
    "description": product.description,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": \`https://tokoku.com/produk/\${product.slug}\`,
      "priceCurrency": "IDR",
      "price": product.price,
      "availability": product.inStock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewsCount
    }
  };

  return (
    <Head>
      {/* 
        Gunakan dangerouslySetInnerHTML agar React tidak melakukan 
        escape pada tanda kutip di dalam JSON string. 
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}`,
      language: "jsx"
    }
  ]
};