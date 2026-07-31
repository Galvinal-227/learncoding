export const chapter = {
  slug: "html-text-formatting",
  title: "Format Teks",
  description: "Pelajari cara memformat teks dengan bold, italic, underline, superscript, subscript, dan elemen formatting HTML lainnya.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["html-paragraphs"],
  tags: ["html", "format", "teks", "emphasis"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Elemen Format Teks HTML

HTML menyediakan berbagai elemen untuk memformat teks agar menyampaikan makna dan meningkatkan keterbacaan.

## Semantik vs Presentasional

### Elemen Semantik (Disarankan)
Ini mendeskripsikan **makna** teks:
\`\`\`html
<strong>Teks penting</strong>
<em>Teks dengan penekanan</em>
<mark>Teks yang ditandai</mark>
<del>Teks yang dihapus</del>
<ins>Teks yang disisipkan</ins>
\`\`\`

### Elemen Presentasional (Hindari)
Ini hanya mempengaruhi **penampilan**:
\`\`\`html
<!-- ❌ Deprecated atau tidak semantik -->
<b>Teks tebal</b>
<i>Teks miring</i>
<u>Teks bergaris bawah</u>
<big>Teks lebih besar</big>
<small>Teks lebih kecil</small>
\`\`\`

## Elemen Format Umum

### 1. Teks Tebal

\`\`\`html
<!-- ✅ Semantik: Menunjukkan kepentingan -->
<p>Ini adalah informasi <strong>sangat penting</strong>.</p>

<!-- ⚠️ Presentasional: Hanya styling tebal -->
<p>Ini adalah <b>teks tebal</b> untuk perhatian visual.</p>
\`\`\`

### 2. Teks Miring

\`\`\`html
<!-- ✅ Semantik: Menunjukkan penekanan -->
<p>Aku <em>sangat</em> suka HTML!</p>

<!-- ✅ Semantik: Istilah teknis, kata asing -->
<p>Spesies <i>Homo sapiens</i>...</p>

<!-- Untuk styling saja, gunakan CSS -->
<p class="miring">Teks dengan style</p>
\`\`\`

### 3. Garis Bawah

\`\`\`html
<!-- ✅ Semantik: Teks yang disisipkan -->
<p>Warna favoritku adalah <ins>biru</ins> merah.</p>

<!-- ❌ Jangan gunakan <u> kecuali untuk kasus khusus -->
<p>Ini adalah teks <u>salah eja</u> (untuk error).</p>
\`\`\`

### 4. Highlight/Mark

\`\`\`html
<p>Hasil pencarian: <mark>HTML</mark> itu keren!</p>
<p>Penting: <mark>Baca dokumentasi</mark> dulu.</p>
\`\`\`

### 5. Coret/Hapus

\`\`\`html
<p>Harga: <del>Rp500.000</del> <ins>Rp250.000</ins> (diskon 50%!)</p>
<p>Rapat hari <del>Senin</del> Selasa.</p>
\`\`\`

### 6. Teks Kecil

\`\`\`html
<p>Ini teks normal. <small>Ini teks lebih kecil untuk fine print.</small></p>
<footer>
    <small>&copy; 2026 Perusahaan. Seluruh hak cipta dilindungi.</small>
</footer>
\`\`\`

### 7. Subscript dan Superscript

\`\`\`html
<!-- Subscript -->
<p>Rumus air: H<sub>2</sub>O</p>
<p>Emisi CO<sub>2</sub></p>

<!-- Superscript -->
<p>Persamaan Einstein: E = mc<sup>2</sup></p>
<p>Hari ini tanggal 1<sup>st</sup> Januari</p>
<p>Referensi catatan kaki<sup>1</sup></p>
\`\`\`

## Format Terkait Kode

\`\`\`html
<!-- Kode inline -->
<p>Gunakan fungsi <code>console.log()</code>.</p>

<!-- Blok kode preformatted -->
<pre><code>
function halo() {
    console.log("Halo Dunia!");
}
</code></pre>

<!-- Input keyboard -->
<p>Tekan <kbd>Ctrl</kbd> + <kbd>S</kbd> untuk menyimpan.</p>

<!-- Output sampel -->
<p>Output program: <samp>Halo Dunia!</samp></p>
\`\`\`

## Kutipan

\`\`\`html
<!-- Kutipan blok -->
<blockquote cite="https://example.com">
    <p>Satu-satunya cara untuk melakukan pekerjaan hebat adalah mencintai apa yang kamu lakukan.</p>
    <footer>— <cite>Steve Jobs</cite></footer>
</blockquote>

<!-- Kutipan inline -->
<p>Seperti kata Einstein, <q>Imajinasi lebih penting daripada pengetahuan.</q></p>
\`\`\`

## Singkatan dan Definisi

\`\`\`html
<!-- Singkatan -->
<p><abbr title="HyperText Markup Language">HTML</abbr> mudah dipelajari.</p>

<!-- Definisi -->
<p><dfn>HTML</dfn> adalah bahasa markup standar untuk halaman web.</p>
\`\`\`

## Best Practices

\`\`\`html
<!-- ✅ Gunakan elemen semantik -->
<p>
    <strong>Peringatan:</strong> Tindakan ini tidak bisa dibatalkan.
    Harap <em>teliti</em> kembali perubahanmu.
</p>

<!-- ❌ Jangan gunakan format untuk struktur -->
<h1><strong>Ini Seharusnya Hanya h1</strong></h1>

<!-- ✅ Gunakan CSS untuk styling -->
<p class="teks-besar teks-tebal teks-merah">
    Di-style dengan CSS, bukan tag HTML!
</p>
\`\`\`
  `,

  quiz: [
    {
      question: "Apa perbedaan antara <strong> dan <b>?",
      options: [
        "Tidak ada perbedaan, keduanya identik",
        "<strong> itu semantik (kepentingan), <b> itu presentasional (style)",
        "<b> lebih baru dari <strong>",
        "<strong> hanya berfungsi di HTML5"
      ],
      correctAnswer: 1,
      explanation: "<strong> menunjukkan bahwa teks penting secara semantik, sementara <b> hanya membuat teks tebal secara visual tanpa menambah makna."
    },
    {
      question: "Elemen mana yang digunakan untuk rumus kimia seperti H2O?",
      options: ["<small>", "<code>", "<sub>", "<sup>"],
      correctAnswer: 2,
      explanation: "<sub> membuat teks subscript, cocok untuk rumus kimia (H₂O) dan ekspresi matematika."
    },
    {
      question: "Apa fungsi <abbr>?",
      options: [
        "Membuat teks tebal",
        "Membuat tautan",
        "Mendefinisikan singkatan dengan tooltip",
        "Menambahkan border"
      ],
      correctAnswer: 2,
      explanation: "<abbr> mendefinisikan singkatan dan bisa menampilkan bentuk lengkapnya di tooltip melalui atribut title."
    }
  ],

  codeExamples: [
    {
      title: "Contoh Lengkap Format Teks",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh Format Teks</title>
</head>
<body>
    <h1>Format Teks HTML</h1>
    
    <!-- Kepentingan dan Penekanan -->
    <h2>Penekanan</h2>
    <p>
        <strong>Penting:</strong> Selalu backup kode kamu.
        Ini <em>sangat</em> penting untuk pemula.
    </p>
    
    <!-- Konten Teknis -->
    <h2>Penulisan Teknis</h2>
    <p>
        Gunakan perintah <code>git commit</code> untuk menyimpan perubahan.
        Tekan <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> untuk command palette.
    </p>
    <pre><code>
// Contoh JavaScript
const salam = "Halo Dunia!";
console.log(salam);
    </code></pre>
    <p>Output: <samp>Halo Dunia!</samp></p>
    
    <!-- Edit dan Update -->
    <h2>Perubahan Dokumen</h2>
    <p>
        Rapat dijadwal ulang dari <del>Senin jam 2</del> 
        ke <ins>Rabu jam 3</ins>.
    </p>
    <p>
        Harga: <del>Rp99.000</del> <ins>Rp49.000</ins> 
        <mark>Penawaran terbatas!</mark>
    </p>
    
    <!-- Ilmiah dan Matematika -->
    <h2>Notasi Ilmiah</h2>
    <p>Air: H<sub>2</sub>O | Karbon Dioksida: CO<sub>2</sub></p>
    <p>Einstein: E = mc<sup>2</sup> | Luas: 10m<sup>2</sup></p>
    <p>Suhu: 25°C = 298K (25 + 273 = 298)</p>
    
    <!-- Kutipan -->
    <h2>Kutipan</h2>
    <blockquote cite="https://w3.org">
        <p>Kekuatan Web terletak pada universalitasnya.</p>
        <footer>— <cite>Tim Berners-Lee</cite></footer>
    </blockquote>
    <p>Dia berkata, <q>HTML adalah fondasi web.</q></p>
    
    <!-- Singkatan -->
    <h2>Singkatan</h2>
    <p>
        <abbr title="HyperText Markup Language">HTML</abbr> bekerja dengan 
        <abbr title="Cascading Style Sheets">CSS</abbr> dan 
        <abbr title="JavaScript">JS</abbr>.
    </p>
    
    <!-- Fine Print -->
    <footer>
        <small>
            &copy; 2026 Learn By GWD. 
            <abbr title="Pertanyaan yang Sering Diajukan">FAQ</abbr> | 
            <abbr title="Ketentuan Layanan">ToS</abbr>
        </small>
    </footer>
</body>
</html>`,
      output: "Menunjukkan semua elemen format teks HTML dalam konteks dunia nyata."
    }
  ]
};