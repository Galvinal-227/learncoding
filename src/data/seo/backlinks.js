export const chapter = {
  slug: "backlinks",
  title: "Backlinks & Off-Page SEO",
  description: "Membangun otoritas website melalui backlink berkualitas dan strategi Off-Page SEO.",
  icon: "TbLink",
  color: "#8E24AA",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["sitemap", "introduction"],
  tags: ["off-page-seo", "backlinks", "link-building"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Backlink?

**Backlink** (atau *inbound link*) adalah tautan dari website lain yang mengarah ke website kamu. Dalam kacamata mesin pencari seperti Google, backlink berfungsi seperti **"sistem voting"**. Semakin banyak website berkualitas yang menautkan link ke website kamu, semakin tinggi kredibilitas dan otoritas website kamu di mata Google.

## Mengapa Backlink Sangat Penting?

Sejak Google meluncurkan algoritma **PageRank** di awal berdirinya, backlink menjadi salah satu dari 3 faktor penentu ranking paling krusial. 
Fungsi utamanya:
1. **Meningkatkan Ranking**: Website dengan backlink berkualitas lebih mudah merangking di halaman pertama.
2. **Mempercepat Indexing**: Googlebot menemukan halaman baru dengan cara "melompat" dari satu link ke link lainnya.
3. **Mendatangkan Referral Traffic**: Klik langsung dari pembaca di website orang lain.

## Kriteria Backlink Berkualitas

Tidak semua backlink diciptakan sama. Satu backlink dari portal berita besar (seperti Kompas atau Detik) jauh lebih bernilai dibanding 100 backlink dari blog abal-abal. 

Berikut kriteria backlink yang bagus:
1. **Relevansi**: Datang dari website dengan *niche* (topik) yang sejenis.
2. **Authority**: Datang dari website dengan *Domain Authority (DA)* atau *Domain Rating (DR)* yang tinggi.
3. **Dofollow vs Nofollow**: Backlink **Dofollow** meneruskan *link juice* (nilai SEO). Sedangkan **Nofollow** (\`rel="nofollow"\`) memberitahu Google untuk tidak mengalirkan otoritas. Namun profil backlink alami tetap butuh kombinasi keduanya.
4. **Anchor Text**: Teks yang diklik harus relevan (tapi jangan *spamming* exact match keyword terus menerus).

## Atribut Link (Rel)

Saat memberikan atau mendapatkan backlink, perhatikan atribut HTML berikut:

\`\`\`html
<!-- Dofollow (Default) - Meneruskan otoritas SEO -->
<a href="https://example.com">Belajar SEO</a>

<!-- Nofollow - Tidak meneruskan otoritas (biasa untuk komentar blog) -->
<a href="https://example.com" rel="nofollow">Kunjungi Blog Ini</a>

<!-- Sponsored - Untuk backlink berbayar / iklan -->
<a href="https://example.com" rel="sponsored">Beli Sekarang</a>

<!-- UGC (User Generated Content) - Untuk forum atau komentar -->
<a href="https://example.com" rel="ugc">Profil Saya</a>
\`\`\`

## Strategi Membangun Backlink (Link Building)

Mendapatkan backlink tidak boleh menggunakan cara manipulatif (seperti membeli link dari PBN *Private Blog Network* yang berisiko terkena penalti Google). 

Gunakan strategi *White-Hat* berikut:
1. **Skyscraper Technique**: Cari konten populer di niche kamu, buat yang 10x lebih lengkap, lalu hubungi website yang menautkan ke konten lama agar menggantinya dengan kontenmu.
2. **Guest Blogging**: Menulis artikel berkualitas gratis untuk dipublikasikan di blog orang lain, dengan imbalan menaruh 1 link ke website kamu.
3. **Broken Link Building**: Mencari link mati (404 error) di website orang lain, lalu menghubungi pemiliknya dan menawarkan artikelmu sebagai pengganti.
4. **Data & Statistik Bebas**: Buat artikel berisi penelitian, survey, atau data infografis. Jurnalis dan blogger sangat suka memberikan backlink ke artikel sumber data.

> 🚫 **Hindari Black-Hat SEO**: Jangan gunakan software otomatis pembuat backlink, *link farming*, atau *spam* komentar. Google algoritma Penguin sangat pintar mendeteksi dan menghukum praktik ini!
  `,
  quiz: [
    {
      question: "Apa kriteria backlink yang paling bernilai di mata Google?",
      options: [
        "Jumlahnya mencapai puluhan ribu dari web manapun",
        "Berasal dari kolom komentar blog",
        "Berasal dari website yang relevan dan ber-otoritas tinggi",
        "Menggunakan rel='nofollow'"
      ],
      correctAnswer: 2
    },
    {
      question: "Atribut HTML apa yang digunakan jika kita menaruh link hasil kerja sama iklan berbayar?",
      options: [
        "rel='dofollow'",
        "rel='sponsored'",
        "rel='ugc'",
        "rel='advertisement'"
      ],
      correctAnswer: 1
    },
    {
      question: "Strategi di mana kita mencari link error 404 di web orang dan menawarkan konten kita sebagai pengganti disebut?",
      options: [
        "Guest Blogging",
        "Skyscraper Technique",
        "PBN Building",
        "Broken Link Building"
      ],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "React Component: Link with Safe Target Blank",
      code: `// Komponen React yang aman untuk external linking
import React from 'react';

const ExternalLink = ({ href, children, isSponsored = false, isNofollow = false }) => {
  // Secara otomatis menambahkan pengamanan untuk target="_blank"
  let relProps = ["noopener", "noreferrer"];
  
  if (isSponsored) relProps.push("sponsored");
  if (isNofollow) relProps.push("nofollow");

  return (
    <a 
      href={href} 
      target="_blank" 
      rel={relProps.join(" ")}
      className="text-blue-600 hover:underline"
    >
      {children}
      <span className="sr-only">(Buka di tab baru)</span>
    </a>
  );
};

export default function ArticleContent() {
  return (
    <div>
      <p>
        Berdasarkan data dari {' '}
        <ExternalLink href="https://google.com/search-console" isNofollow={false}>
          Google Search Console
        </ExternalLink>, 
        trafik kita naik 200%.
      </p>
      
      <p>
        Artikel ini disponsori oleh{' '}
        <ExternalLink href="https://brand-sponsor.com" isSponsored={true}>
          Brand Sponsor
        </ExternalLink>.
      </p>
    </div>
  );
}`,
      language: "jsx"
    }
  ]
};