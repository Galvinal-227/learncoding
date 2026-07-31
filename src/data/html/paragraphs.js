export const chapter = {
  slug: "html-paragraphs",
  title: "Paragraf & Teks",
  description: "Pelajari cara menyusun konten teks dengan paragraf, baris baru, dan garis horizontal di HTML.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-elements"],
  tags: ["html", "paragraf", "teks", "konten"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Elemen Paragraf

Elemen \`<p>\` merepresentasikan sebuah **paragraf** teks. Ini adalah salah satu elemen HTML yang paling sering digunakan.

## Penggunaan Dasar

\`\`\`html
<p>Ini adalah sebuah paragraf teks.</p>
<p>Ini adalah paragraf lainnya.</p>
\`\`\`

## Bagaimana Paragraf Berperilaku

1. **Block-level**: Dimulai di baris baru
2. **Margin**: Browser otomatis menambahkan spasi sebelum dan sesudah
3. **Membungkus teks**: Teks otomatis membungkus sesuai wadah

## Paragraf vs Elemen Lain

\`\`\`html
<!-- ✅ Gunakan <p> untuk paragraf teks -->
<p>HTML adalah bahasa markup standar untuk membuat halaman web.</p>

<!-- ❌ Jangan gunakan <div> untuk paragraf -->
<div>HTML adalah bahasa markup standar...</div>

<!-- ❌ Jangan gunakan <br> untuk membuat spasi paragraf -->
Baris pertama<br><br>Baris kedua
\`\`\`

## Baris Baru dengan <br>

\`\`\`html
<!-- <br> untuk baris baru dalam konten -->
<p>
    Jalan Merdeka No. 123<br>
    Jakarta Selatan, 12345<br>
    Indonesia
</p>

<!-- Contoh puisi -->
<p>
    Mawar itu merah,<br>
    Violet itu biru,<br>
    HTML itu keren,<br>
    Dan kamu juga!
</p>
\`\`\`
⚠️ **Jangan gunakan <br> untuk spasi antar paragraf** - gunakan CSS margin!

## Garis Horizontal dengan <hr>

\`\`\`html
<p>Bagian pertama konten.</p>
<hr>
<p>Topik atau bagian yang berbeda.</p>
\`\`\`

Elemen \`<hr>\` merepresentasikan **pergantian tematik** - pergeseran topik atau adegan.

## Teks Preformatted dengan <pre>

\`\`\`html
<pre>
    Teks ini mempertahankan
        spasi
    dan baris baru
        persis seperti yang ditulis!
</pre>
\`\`\`

### Penggunaan Umum:
\`\`\`html
<!-- Blok kode -->
<pre><code>
function halo() {
    console.log("Halo Dunia!");
}
</code></pre>

<!-- Seni ASCII -->
<pre>
    (\_/)
    (•_•)
    / > 🎨
</pre>
\`\`\`

## Whitespace Collapsing

HTML biasanya menyusutkan banyak spasi menjadi satu:

\`\`\`html
<!-- Di source HTML -->
<p>Halo      Dunia!</p>

<!-- Dirender sebagai -->
Halo Dunia!
\`\`\`

Untuk mempertahankan spasi, gunakan \`&nbsp;\` (non-breaking space):
\`\`\`html
<p>Halo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dunia!</p>
\`\`\`

## Best Practices Konten

### 1. Satu Ide Per Paragraf
\`\`\`html
<!-- ✅ Baik -->
<p>HTML adalah fondasi web development.</p>
<p>CSS menangani styling visual halaman web.</p>
<p>JavaScript menambahkan interaktivitas ke website.</p>

<!-- ❌ Buruk - Terlalu banyak ide -->
<p>HTML adalah fondasi web development, CSS menangani styling, dan JavaScript menambahkan interaktivitas.</p>
\`\`\`

### 2. Tidak Terlalu Panjang, Tidak Terlalu Pendek
\`\`\`html
<!-- ✅ Baik - Panjang yang enak dibaca -->
<p>Belajar HTML adalah langkah pertama menjadi web developer. Mudah dipelajari dan memberikan hasil visual langsung.</p>

<!-- ❌ Terlalu pendek -->
<p>Hai.</p>

<!-- ❌ Terlalu panjang (dinding teks) -->
<p>Paragraf masif dengan 500 kata...</p>
\`\`\`

### 3. Gunakan Elemen Semantik
\`\`\`html
<article>
    <h2>Postingan Blogku</h2>
    <p>Paragraf pembuka...</p>
    <p>Paragraf konten utama...</p>
    <p>Paragraf kesimpulan...</p>
</article>
\`\`\`

## Karakter Khusus (Entities)

| Karakter | Entity | Deskripsi |
|----------|--------|-----------|
| < | \`&lt;\` | Kurang dari |
| > | \`&gt;\` | Lebih dari |
| & | \`&amp;\` | Ampersand |
| " | \`&quot;\` | Tanda kutip ganda |
| ' | \`&apos;\` | Tanda kutip tunggal |
| © | \`&copy;\` | Hak cipta |
| ® | \`&reg;\` | Merek terdaftar |
| ™ | \`&trade;\` | Merek dagang |
|   | \`&nbsp;\` | Spasi non-breaking |

\`\`\`html
<p>Hak Cipta &copy; 2026 Learn By GWD. Seluruh hak cipta dilindungi.</p>
<p>Untuk menampilkan kode HTML, gunakan &lt;p&gt; untuk paragraf.</p>
<p>AT&amp;T adalah perusahaan telekomunikasi.</p>
\`\`\`
  `,

  quiz: [
    {
      question: "Elemen mana yang seharusnya digunakan untuk sebuah paragraf teks?",
      options: ["<div>", "<p>", "<text>", "<span>"],
      correctAnswer: 1,
      explanation: "Elemen <p> dirancang khusus untuk paragraf teks. Elemen lain memiliki tujuan berbeda."
    },
    {
      question: "Apa yang terjadi pada banyak spasi dalam teks HTML?",
      options: [
        "Semuanya dipertahankan",
        "Disusutkan menjadi satu spasi",
        "Browser menampilkan error",
        "Membuat tab"
      ],
      correctAnswer: 1,
      explanation: "HTML menyusutkan banyak karakter whitespace menjadi satu spasi secara default. Gunakan <pre> atau &nbsp; untuk mempertahankan spasi."
    },
    {
      question: "Apa yang direpresentasikan elemen <hr>?",
      options: [
        "Garis horizontal",
        "Pergantian tematik dalam konten",
        "A dan B benar",
        "Elemen tersembunyi"
      ],
      correctAnswer: 2,
      explanation: "<hr> membuat garis horizontal yang merepresentasikan pergantian tematik atau pergeseran topik antar bagian."
    }
  ],

  codeExamples: [
    {
      title: "Struktur Teks yang Benar",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh Teks</title>
</head>
<body>
    <h1>Bekerja dengan Teks di HTML</h1>
    
    <!-- Paragraf dasar -->
    <p>Ini adalah paragraf standar. Berisi teks yang membungkus otomatis saat mencapai tepi wadahnya.</p>
    
    <p>Ini paragraf lainnya. Perhatikan spasi antar paragraf ditambahkan otomatis oleh browser.</p>
    
    <!-- Baris baru dalam paragraf -->
    <p>
        Informasi Kontak:<br>
        Email: halo@example.com<br>
        Telepon: (021) 123-4567<br>
        Alamat: Jalan Merdeka No. 123
    </p>
    
    <!-- Pergantian tematik -->
    <hr>
    
    <!-- Teks preformatted -->
    <h2>Contoh Kode</h2>
    <pre><code>
function sapa(nama) {
    return \`Halo, \${nama}!\`;
}

console.log(sapa("Dunia"));
    </code></pre>
    
    <!-- Menggunakan karakter khusus -->
    <p>
        &copy; 2026 Websiteku. Seluruh hak cipta dilindungi.<br>
        Dibuat dengan &lt;3 dalam HTML
    </p>
    
    <!-- Puisi dengan baris baru -->
    <p>
        Kelap-kelip bintang kecil,<br>
        Betapa indahmu bersinar!<br>
        Di atas langit yang tinggi,<br>
        Seperti berlian di angkasa.
    </p>
    
    <hr>
    
    <!-- Artikel dengan paragraf -->
    <article>
        <h2>Kenapa Belajar HTML?</h2>
        <p>HTML adalah fondasi web. Setiap website yang kamu kunjungi menggunakan HTML untuk menyusun kontennya.</p>
        <p>Belajar HTML relatif mudah dibandingkan bahasa pemrograman. Kamu bisa melihat hasilnya langsung di browser.</p>
        <p>Mulai perjalananmu hari ini dan bangun sesuatu yang keren!</p>
    </article>
</body>
</html>`,
      output: "Menunjukkan semua elemen terkait teks bekerja bersama dalam halaman web."
    }
  ]
};