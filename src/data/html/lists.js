export const chapter = {
  slug: "html-lists",
  title: "List",
  description: "Kuasai ordered list, unordered list, dan description list di HTML.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["html-elements"],
  tags: ["html", "list", "struktur", "konten"],
  order: 14,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## List HTML

List sangat penting untuk mengorganisir konten. HTML menyediakan tiga jenis list:

1. **Unordered List** (\`<ul>\`) - Dengan bullet
2. **Ordered List** (\`<ol>\`) - Dengan nomor
3. **Description List** (\`<dl>\`) - Pasangan istilah/definisi

## 1. Unordered List (<ul>)

Digunakan saat urutan tidak penting.

### Sintaks Dasar
\`\`\`html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
\`\`\`

### Kasus Penggunaan Umum
\`\`\`html
<!-- Menu navigasi -->
<nav>
    <ul>
        <li><a href="/">Beranda</a></li>
        <li><a href="/tentang">Tentang</a></li>
        <li><a href="/kontak">Kontak</a></li>
    </ul>
</nav>

<!-- Daftar fitur -->
<ul>
    <li>Dukungan Pelanggan 24/7</li>
    <li>Update Gratis</li>
    <li>Garansi Uang Kembali 30 Hari</li>
</ul>

<!-- Bahan-bahan -->
<ul>
    <li>2 cangkir tepung</li>
    <li>1 cangkir gula</li>
    <li>3 butir telur</li>
</ul>
\`\`\`

## 2. Ordered List (<ol>)

Digunakan saat urutan penting.

### Sintaks Dasar
\`\`\`html
<ol>
    <li>Langkah pertama</li>
    <li>Langkah kedua</li>
    <li>Langkah ketiga</li>
</ol>
\`\`\`

### Atribut Type
\`\`\`html
<!-- Angka (default) -->
<ol type="1">
    <li>Item satu</li>
    <li>Item dua</li>
</ol>

<!-- Huruf besar -->
<ol type="A">
    <li>Opsi A</li>
    <li>Opsi B</li>
</ol>

<!-- Huruf kecil -->
<ol type="a">
    <li>Opsi a</li>
    <li>Opsi b</li>
</ol>

<!-- Romawi besar -->
<ol type="I">
    <li>Bab I</li>
    <li>Bab II</li>
</ol>

<!-- Romawi kecil -->
<ol type="i">
    <li>Bagian i</li>
    <li>Bagian ii</li>
</ol>
\`\`\`

### Atribut Start
\`\`\`html
<ol start="5">
    <li>Ini item 5</li>
    <li>Ini item 6</li>
    <li>Ini item 7</li>
</ol>

<ol type="A" start="4">
    <li>Ini D</li>
    <li>Ini E</li>
</ol>
\`\`\`

### Atribut Reversed
\`\`\`html
<ol reversed>
    <li>Juara 3</li>
    <li>Juara 2</li>
    <li>Juara 1</li>
</ol>
\`\`\`

### Kasus Penggunaan Umum
\`\`\`html
<!-- Instruksi langkah demi langkah -->
<h2>Cara Install VS Code</h2>
<ol>
    <li>Download installer</li>
    <li>Jalankan installer</li>
    <li>Pilih opsi instalasi</li>
    <li>Selesaikan instalasi</li>
</ol>

<!-- Ranking -->
<h2>Top 3 Bahasa Pemrograman</h2>
<ol>
    <li>JavaScript</li>
    <li>Python</li>
    <li>TypeScript</li>
</ol>
\`\`\`

## 3. Description List (<dl>)

Digunakan untuk pasangan istilah-definisi.

### Sintaks Dasar
\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - menyusun konten web</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - menata konten web</dd>
    
    <dt>JavaScript</dt>
    <dd>Bahasa pemrograman untuk interaktivitas web</dd>
</dl>
\`\`\`

### Kasus Penggunaan Umum
\`\`\`html
<!-- Glosarium -->
<h2>Istilah Web Development</h2>
<dl>
    <dt>API</dt>
    <dd>Application Programming Interface</dd>
    
    <dt>DOM</dt>
    <dd>Document Object Model</dd>
</dl>

<!-- FAQ -->
<h2>Pertanyaan Umum</h2>
<dl>
    <dt>Apa kebijakan pengembalian?</dt>
    <dd>Barang bisa dikembalikan dalam 30 hari setelah pembelian.</dd>
    
    <dt>Apakah ada pengiriman internasional?</dt>
    <dd>Ya, kami mengirim ke lebih dari 50 negara.</dd>
</dl>

<!-- Metadata -->
<dl>
    <dt>Penulis:</dt>
    <dd>Budi Santoso</dd>
    <dt>Diterbitkan:</dt>
    <dd>15 Januari 2026</dd>
    <dt>Kategori:</dt>
    <dd>Web Development</dd>
</dl>
\`\`\`

## List Bersarang (Nested)

List bisa disarangkan di dalam list lain:

\`\`\`html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend
        <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>PHP</li>
        </ul>
    </li>
</ul>
\`\`\`

## Mencampur Jenis List

\`\`\`html
<ol>
    <li>Siapkan bahan
        <ul>
            <li>Tepung</li>
            <li>Gula</li>
            <li>Telur</li>
        </ul>
    </li>
    <li>Campur bahan</li>
    <li>Panggang pada suhu 180°C</li>
</ol>
\`\`\`

## Best Practices

### ✅ Gunakan list untuk kelompok item terkait
\`\`\`html
<ul>
    <li>Fitur 1</li>
    <li>Fitur 2</li>
    <li>Fitur 3</li>
</ul>
\`\`\`

### ❌ Jangan gunakan list hanya untuk indentasi
\`\`\`html
<!-- Salah: Menggunakan list untuk indentasi -->
<ul>
    <li>Ini paragraf dengan indentasi</li>
</ul>

<!-- Benar: Gunakan CSS -->
<p class="indentasi">Ini paragraf dengan indentasi</p>
\`\`\`

### ✅ Gunakan markup semantik
\`\`\`html
<!-- Baik: List untuk navigasi -->
<nav>
    <ul>
        <li><a href="/">Beranda</a></li>
    </ul>
</nav>

<!-- Buruk: Link berderet tanpa list -->
<nav>
    <a href="/">Beranda</a>
    <a href="/tentang">Tentang</a>
</nav>
\`\`\`
  `,

  quiz: [
    {
      question: "Jenis list apa yang seharusnya digunakan untuk tutorial langkah demi langkah?",
      options: ["<ul>", "<ol>", "<dl>", "Semua jenis bisa"],
      correctAnswer: 1,
      explanation: "Gunakan <ol> (ordered list) saat urutan penting, seperti dalam tutorial atau instruksi."
    },
    {
      question: "Apa kepanjangan dari <dl>?",
      options: ["Directory List", "Document Layout", "Description List", "Data Loop"],
      correctAnswer: 2,
      explanation: "<dl> adalah singkatan dari Description List, digunakan untuk pasangan istilah-deskripsi."
    },
    {
      question: "Bisakah list disarangkan di dalam list lain?",
      options: [
        "Tidak, HTML tidak mengizinkan",
        "Ya, tapi hanya jenis yang sama",
        "Ya, semua jenis list bisa disarangkan",
        "Hanya di HTML5"
      ],
      correctAnswer: 2,
      explanation: "Kamu bisa menyarangkan jenis list apa pun di dalam list lain. List bagian dalam menjadi child <li> dari list induk."
    }
  ],

  codeExamples: [
    {
      title: "Contoh List Komprehensif",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh List HTML</title>
</head>
<body>
    <h1>List HTML</h1>
    
    <!-- Unordered List - Fitur -->
    <h2>Fitur Kursus</h2>
    <ul>
        <li>100+ jam konten video</li>
        <li>Resource yang bisa didownload</li>
        <li>Sertifikat kelulusan</li>
        <li>Akses seumur hidup</li>
        <li>Garansi uang kembali 30 hari</li>
    </ul>
    
    <!-- Ordered List - Langkah Tutorial -->
    <h2>Memulai</h2>
    <ol>
        <li>Buat folder baru untuk proyekmu</li>
        <li>Buka folder di VS Code</li>
        <li>Buat file <code>index.html</code></li>
        <li>Tambahkan struktur HTML dasar</li>
        <li>Buka dengan Live Server</li>
    </ol>
    
    <!-- List Bersarang - Kurikulum Kursus -->
    <h2>Kurikulum Kursus</h2>
    <ol>
        <li>
            <strong>Dasar HTML</strong>
            <ul>
                <li>Elemen dan Atribut</li>
                <li>Heading dan Paragraf</li>
                <li>List dan Tabel</li>
                <li>Form dan Input</li>
            </ul>
        </li>
        <li>
            <strong>Styling CSS</strong>
            <ul>
                <li>Selector dan Properti</li>
                <li>Box Model</li>
                <li>Flexbox dan Grid</li>
            </ul>
        </li>
        <li>
            <strong>Pemrograman JavaScript</strong>
            <ul>
                <li>Variabel dan Fungsi</li>
                <li>Manipulasi DOM</li>
                <li>Event dan Async</li>
            </ul>
        </li>
    </ol>
    
    <!-- Ordered List dengan Start Kustom -->
    <h2>Melanjutkan dari Sebelumnya</h2>
    <ol start="4">
        <li>Langkah empat</li>
        <li>Langkah lima</li>
        <li>Langkah enam</li>
    </ol>
    
    <!-- Reversed Ordered List - Ranking Teratas -->
    <h2>Top 5 Bahasa 2026</h2>
    <ol reversed>
        <li>Python</li>
        <li>Java</li>
        <li>TypeScript</li>
        <li>Rust</li>
        <li>JavaScript</li>
    </ol>
    
    <!-- Description List - Glosarium -->
    <h2>Glosarium Web Development</h2>
    <dl>
        <dt><strong>HTML</strong></dt>
        <dd>
            HyperText Markup Language. Bahasa standar 
            untuk membuat halaman web dan aplikasi web.
        </dd>
        
        <dt><strong>CSS</strong></dt>
        <dd>
            Cascading Style Sheets. Digunakan untuk 
            mendeskripsikan presentasi dokumen HTML.
        </dd>
        
        <dt><strong>API</strong></dt>
        <dd>
            Application Programming Interface. Seperangkat 
            aturan yang memungkinkan aplikasi software 
            berkomunikasi satu sama lain.
        </dd>
    </dl>
    
    <!-- Navigasi Menggunakan List -->
    <h2>Menu Navigasi</h2>
    <nav>
        <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/kursus">Kursus</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/tentang">Tentang</a></li>
            <li><a href="/kontak">Kontak</a></li>
        </ul>
    </nav>
    
    <!-- Campuran Jenis List -->
    <h2>Resep: Pancake Sederhana</h2>
    <h3>Bahan-bahan</h3>
    <ul>
        <li>200 gram tepung terigu</li>
        <li>3 sendok teh baking powder</li>
        <li>1 sendok makan gula pasir</li>
        <li>300 ml susu</li>
        <li>1 butir telur</li>
        <li>3 sendok makan mentega cair</li>
    </ul>
    
    <h3>Instruksi</h3>
    <ol>
        <li>
            Campur bahan kering
            <ul>
                <li>Ayak tepung</li>
                <li>Tambahkan baking powder</li>
                <li>Campur gula dan garam</li>
            </ul>
        </li>
        <li>Buat lubang dan tambahkan susu, telur, dan mentega</li>
        <li>Aduk hingga rata</li>
        <li>Masak di atas wajan yang sudah dipanaskan</li>
        <li>Sajikan hangat dengan sirup</li>
    </ol>
</body>
</html>`,
      output: "Demonstrasi lengkap semua jenis list HTML dengan contoh dunia nyata."
    }
  ]
};