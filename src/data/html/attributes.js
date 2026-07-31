export const chapter = {
  slug: "html-attributes",
  title: "Atribut HTML",
  description: "Pelajari cara menggunakan atribut untuk memberikan informasi tambahan pada elemen HTML.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["html-elements"],
  tags: ["html", "atribut", "properti", "konfigurasi"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Atribut HTML?

Atribut memberikan **informasi tambahan** tentang elemen HTML. Atribut selalu ditulis di dalam **tag pembuka** dan biasanya dalam format **nama="nilai"**.

## Sintaks Dasar

\`\`\`html
<elemen namaAtribut="nilaiAtribut">Konten</elemen>
\`\`\`

### Contoh:
\`\`\`html
<a href="https://google.com">Kunjungi Google</a>
<img src="foto.jpg" alt="Pemandangan matahari terbenam">
<input type="text" placeholder="Masukkan nama kamu">
\`\`\`

## Aturan Penulisan Atribut

1. Selalu di dalam tag pembuka
2. Biasanya format nama="nilai"
3. Nilai dibungkus tanda kutip (tunggal atau ganda)
4. Beberapa atribut dipisahkan dengan spasi
5. Beberapa atribut tidak perlu nilai (boolean)

## Atribut Global yang Umum

Atribut berikut bisa digunakan di hampir semua elemen HTML:

### 1. class
Mengidentifikasi elemen untuk styling CSS dan JavaScript:
\`\`\`html
<p class="highlight large-text">Paragraf dengan style</p>
<div class="container wrapper">Konten</div>
\`\`\`

### 2. id
Identifier unik untuk satu elemen:
\`\`\`html
<h1 id="judul-utama">Selamat Datang</h1>
<div id="sidebar">Konten sidebar</div>
\`\`\`
⚠️ Setiap id harus unik dalam satu halaman!

### 3. style
Styling CSS inline:
\`\`\`html
<p style="color: blue; font-size: 16px;">Teks biru</p>
\`\`\`

### 4. title
Teks tooltip saat di-hover:
\`\`\`html
<abbr title="HyperText Markup Language">HTML</abbr>
<p title="Informasi lebih lanjut">Hover di atas teks ini</p>
\`\`\`

### 5. lang
Menentukan bahasa:
\`\`\`html
<p lang="id">Ini bahasa Indonesia</p>
<p lang="en">This is English</p>
\`\`\`

### 6. dir
Arah teks:
\`\`\`html
<p dir="ltr">Teks kiri ke kanan</p>
<p dir="rtl">Teks kanan ke kiri</p>
\`\`\`

### 7. data-*
Atribut data kustom:
\`\`\`html
<article data-penulis="Budi" data-tanggal="2026-01-15">
    Konten artikel
</article>
\`\`\`

## Atribut Khusus

### Untuk Tautan (\`<a>\`):
\`\`\`html
<a href="https://example.com" target="_blank" rel="noopener">
    Buka di tab baru
</a>
\`\`\`

### Untuk Gambar (\`<img>\`):
\`\`\`html
<img src="foto.jpg" alt="Deskripsi foto" width="300" height="200">
\`\`\`

### Untuk Input (\`<input>\`):
\`\`\`html
<input type="email" placeholder="Masukkan email" required disabled>
\`\`\`

## Atribut Boolean

Atribut yang tidak perlu nilai - kehadirannya berarti true:
\`\`\`html
<input type="checkbox" checked>
<input type="text" disabled>
<input type="text" readonly>
<option selected>Opsi ini</option>
<video controls>...</video>
\`\`\`

## Best Practices

✅ Gunakan nama atribut huruf kecil
✅ Beri tanda kutip pada nilai atribut
✅ Gunakan nama class dan id yang bermakna
❌ Jangan gunakan id yang duplikat
❌ Jangan gunakan inline style berlebihan
\`\`\`html
<!-- ✅ Baik -->
<div class="profil-pengguna">
    <img src="avatar.jpg" alt="Avatar pengguna">
</div>

<!-- ❌ Buruk -->
<DIV CLASS="profil-pengguna">
    <IMG SRC="avatar.jpg" ALT="">
</DIV>
\`\`\`
  `,

  quiz: [
    {
      question: "Atribut apa yang digunakan untuk menampilkan tooltip saat hover di atas elemen?",
      options: ["class", "id", "title", "alt"],
      correctAnswer: 2,
      explanation: "Atribut title membuat tooltip yang muncul saat kursor diarahkan ke atas elemen."
    },
    {
      question: "Apa yang spesial dari atribut boolean?",
      options: [
        "Harus diisi true atau false",
        "Kehadirannya saja sudah berarti true",
        "Hanya bisa digunakan di input",
        "Memerlukan JavaScript"
      ],
      correctAnswer: 1,
      explanation: "Atribut boolean seperti 'disabled' atau 'checked' tidak perlu nilai - kehadirannya pada elemen sudah berarti true."
    },
    {
      question: "Bolehkah dua elemen memiliki nilai id yang sama?",
      options: [
        "Ya, selalu boleh",
        "Ya, jika tipe elemennya berbeda",
        "Tidak, id harus unik",
        "Hanya di section yang berbeda"
      ],
      correctAnswer: 2,
      explanation: "Atribut id harus unik dalam satu halaman. Tidak boleh ada dua elemen yang berbagi id yang sama."
    }
  ],

  codeExamples: [
    {
      title: "Atribut dalam Praktik",
      language: "html",
      code: `<!-- Atribut tautan -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer"
   title="Kunjungi Example">
    Website Example
</a>

<!-- Atribut gambar -->
<img src="profil.jpg" 
     alt="Foto profil" 
     width="200" 
     height="200"
     loading="lazy">

<!-- Atribut input -->
<input type="email" 
       placeholder="Masukkan email kamu"
       required
       autocomplete="email">

<!-- Atribut data kustom -->
<div data-user-id="123" 
     data-role="admin"
     class="kartu-pengguna">
    <h2 data-field="nama">Budi Santoso</h2>
</div>`,
      output: "Menunjukkan berbagai jenis atribut yang digunakan pada berbagai elemen HTML."
    }
  ]
};