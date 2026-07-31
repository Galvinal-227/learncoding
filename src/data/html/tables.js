export const chapter = {
  slug: "html-tables",
  title: "Tabel",
  description: "Pelajari cara membuat dan menyusun tabel data di HTML dengan benar.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["html-elements", "html-attributes"],
  tags: ["html", "tabel", "data", "struktur"],
  order: 17,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Tabel HTML

Tabel digunakan untuk menampilkan **data terstruktur** dalam baris dan kolom. Jangan gunakan tabel untuk layout!

## Struktur Dasar

\`\`\`html
<table>
    <tr>
        <td>Baris 1, Kolom 1</td>
        <td>Baris 1, Kolom 2</td>
    </tr>
    <tr>
        <td>Baris 2, Kolom 1</td>
        <td>Baris 2, Kolom 2</td>
    </tr>
</table>
\`\`\`

## Elemen-elemen Tabel

| Elemen | Fungsi |
|--------|--------|
| \`<table>\` | Wadah utama tabel |
| \`<tr>\` | Baris tabel (Table Row) |
| \`<td>\` | Sel data (Table Data) |
| \`<th>\` | Sel header (Table Header) |
| \`<thead>\` | Bagian header tabel |
| \`<tbody>\` | Bagian body tabel |
| \`<tfoot>\` | Bagian footer tabel |
| \`<caption>\` | Judul/keterangan tabel |

## Tabel Lengkap dengan Semantik

\`\`\`html
<table>
    <!-- Judul tabel -->
    <caption>Daftar Nilai Siswa Semester 1</caption>
    
    <!-- Header -->
    <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nilai</th>
            <th>Grade</th>
        </tr>
    </thead>
    
    <!-- Body -->
    <tbody>
        <tr>
            <td>1</td>
            <td>Budi Santoso</td>
            <td>85</td>
            <td>B</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Siti Nurhaliza</td>
            <td>92</td>
            <td>A</td>
        </tr>
    </tbody>
    
    <!-- Footer -->
    <tfoot>
        <tr>
            <td colspan="2">Rata-rata</td>
            <td>88.5</td>
            <td>B+</td>
        </tr>
    </tfoot>
</table>
\`\`\`

## Atribut colspan dan rowspan

### colspan - Menggabungkan Kolom
\`\`\`html
<table>
    <tr>
        <td colspan="2">Sel ini menggabungkan 2 kolom</td>
        <td>Kolom 3</td>
    </tr>
    <tr>
        <td>Kolom 1</td>
        <td>Kolom 2</td>
        <td>Kolom 3</td>
    </tr>
</table>
\`\`\`

### rowspan - Menggabungkan Baris
\`\`\`html
<table>
    <tr>
        <td rowspan="2">Sel ini menggabungkan 2 baris</td>
        <td>Baris 1, Kolom 2</td>
    </tr>
    <tr>
        <td>Baris 2, Kolom 2</td>
    </tr>
</table>
\`\`\`

## Atribut scope untuk Aksesibilitas

\`\`\`html
<table>
    <caption>Jadwal Pelajaran</caption>
    <thead>
        <tr>
            <th scope="col">Senin</th>
            <th scope="col">Selasa</th>
            <th scope="col">Rabu</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">08:00</th>
            <td>Matematika</td>
            <td>Bahasa Indonesia</td>
        </tr>
        <tr>
            <th scope="row">10:00</th>
            <td>Fisika</td>
            <td>Kimia</td>
        </tr>
    </tbody>
</table>
\`\`\`

## Tabel Responsif

Bungkus tabel dengan div untuk scroll horizontal di mobile:
\`\`\`html
<div class="table-container">
    <table>
        <!-- konten tabel -->
    </table>
</div>

<style>
.table-container {
    overflow-x: auto;
    max-width: 100%;
}
</style>
\`\`\`

## Best Practices

### ✅ Gunakan tabel untuk data
\`\`\`html
<!-- Baik: Data tabular -->
<table>
    <tr><th>Produk</th><th>Harga</th></tr>
    <tr><td>Buku</td><td>Rp50.000</td></tr>
</table>
\`\`\`

### ❌ Jangan gunakan tabel untuk layout
\`\`\`html
<!-- Buruk: Tabel untuk layout -->
<table>
    <tr>
        <td>Sidebar</td>
        <td>Konten Utama</td>
    </tr>
</table>

<!-- Baik: Gunakan CSS Grid/Flexbox -->
<div class="layout">
    <aside>Sidebar</aside>
    <main>Konten Utama</main>
</div>
\`\`\`

### ✅ Selalu gunakan caption atau heading
\`\`\`html
<table>
    <caption>Perbandingan Harga Produk</caption>
    <!-- ... -->
</table>
\`\`\`

### ✅ Gunakan thead, tbody, tfoot
\`\`\`html
<table>
    <thead><!-- header --></thead>
    <tbody><!-- data --></tbody>
    <tfoot><!-- summary --></tfoot>
</table>
\`\`\`

### ❌ Hindari nested table
\`\`\`html
<!-- Buruk: Tabel dalam tabel -->
<table>
    <tr>
        <td>
            <table><!-- tabel di dalam --></table>
        </td>
    </tr>
</table>
\`\`\`
  `,

  quiz: [
    {
      question: "Elemen apa yang digunakan untuk judul tabel?",
      options: ["<title>", "<caption>", "<header>", "<heading>"],
      correctAnswer: 1,
      explanation: "Elemen <caption> digunakan untuk memberikan judul atau keterangan pada tabel."
    },
    {
      question: "Apa fungsi atribut colspan?",
      options: [
        "Menambah baris baru",
        "Menggabungkan beberapa kolom",
        "Menggabungkan beberapa baris",
        "Mengubah warna sel"
      ],
      correctAnswer: 1,
      explanation: "colspan (column span) digunakan untuk menggabungkan beberapa kolom menjadi satu sel."
    },
    {
      question: "Bolehkah tabel digunakan untuk layout website?",
      options: [
        "Ya, itu praktik standar",
        "Ya, tapi hanya untuk layout sederhana",
        "Tidak, gunakan CSS Grid atau Flexbox",
        "Tidak, tabel hanya untuk teks"
      ],
      correctAnswer: 2,
      explanation: "Tabel seharusnya hanya digunakan untuk data tabular. Untuk layout, gunakan CSS Grid atau Flexbox yang lebih fleksibel dan accessible."
    }
  ],

  codeExamples: [
    {
      title: "Tabel Data Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh Tabel</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f4f4f4; }
        tfoot { font-weight: bold; background-color: #f9f9f9; }
        .table-container { overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Contoh Tabel HTML</h1>
    
    <!-- Tabel Sederhana -->
    <h2>1. Tabel Sederhana</h2>
    <table>
        <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kota</th>
        </tr>
        <tr>
            <td>Budi</td>
            <td>25</td>
            <td>Jakarta</td>
        </tr>
        <tr>
            <td>Siti</td>
            <td>23</td>
            <td>Bandung</td>
        </tr>
    </table>
    
    <h2>2. Tabel dengan Semantik Lengkap</h2>
    <div class="table-container">
        <table>
            <caption>Laporan Penjualan Q1 2026</caption>
            <thead>
                <tr>
                    <th scope="col">Bulan</th>
                    <th scope="col">Produk A</th>
                    <th scope="col">Produk B</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Januari</th>
                    <td>100</td>
                    <td>150</td>
                    <td>250</td>
                </tr>
                <tr>
                    <th scope="row">Februari</th>
                    <td>120</td>
                    <td>130</td>
                    <td>250</td>
                </tr>
                <tr>
                    <th scope="row">Maret</th>
                    <td>140</td>
                    <td>160</td>
                    <td>300</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row">Total</th>
                    <td>360</td>
                    <td>440</td>
                    <td>800</td>
                </tr>
            </tfoot>
        </table>
    </div>
    
    <h2>3. Tabel dengan colspan dan rowspan</h2>
    <table>
        <caption>Jadwal Meeting</caption>
        <thead>
            <tr>
                <th>Waktu</th>
                <th>Senin</th>
                <th>Selasa</th>
                <th>Rabu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>09:00</th>
                <td>Meeting Tim</td>
                <td rowspan="2">Workshop<br>(2 jam)</td>
                <td>Review</td>
            </tr>
            <tr>
                <th>10:00</th>
                <td>Planning</td>
                <td>Presentasi</td>
            </tr>
            <tr>
                <th>11:00</th>
                <td colspan="3">Istirahat</td>
            </tr>
        </tbody>
    </table>
    
    <h2>4. Tabel Harga</h2>
    <table>
        <caption>Paket Langganan</caption>
        <thead>
            <tr>
                <th>Fitur</th>
                <th>Basic</th>
                <th>Pro</th>
                <th>Enterprise</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Harga/bulan</th>
                <td>Gratis</td>
                <td>Rp99.000</td>
                <td>Rp299.000</td>
            </tr>
            <tr>
                <th>Pengguna</th>
                <td>1</td>
                <td>5</td>
                <td>Unlimited</td>
            </tr>
            <tr>
                <th>Penyimpanan</th>
                <td>1 GB</td>
                <td>10 GB</td>
                <td>100 GB</td>
            </tr>
            <tr>
                <th>Support</th>
                <td>Email</td>
                <td>Prioritas</td>
                <td>24/7</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,
      output: "Menunjukkan berbagai jenis tabel dengan struktur semantik yang benar."
    }
  ]
};