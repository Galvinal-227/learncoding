export const chapter = {
  slug: "html-forms",
  title: "Form",
  description: "Pelajari cara membuat form interaktif di HTML untuk mengumpulkan data pengguna.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["html-elements", "html-attributes"],
  tags: ["html", "form", "input", "data"],
  order: 18,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Form HTML

Form digunakan untuk mengumpulkan data dari pengguna. Data bisa dikirim ke server untuk diproses.

## Struktur Dasar Form

\`\`\`html
<form action="/proses" method="POST">
    <!-- Elemen form di sini -->
    <button type="submit">Kirim</button>
</form>
\`\`\`

## Atribut Form Penting

### action
URL tujuan pengiriman data:
\`\`\`html
<form action="/api/kontak">...</form>
<form action="https://example.com/proses">...</form>
\`\`\`

### method
Metode HTTP untuk mengirim data:
\`\`\`html
<!-- Data dikirim di URL (untuk pencarian, filter) -->
<form method="GET">...</form>

<!-- Data dikirim di body request (untuk data sensitif) -->
<form method="POST">...</form>
\`\`\`

### enctype
Untuk upload file:
\`\`\`html
<form enctype="multipart/form-data">
    <input type="file">
</form>
\`\`\`

### autocomplete
\`\`\`html
<form autocomplete="on">
<form autocomplete="off">
\`\`\`

### novalidate
\`\`\`html
<form novalidate>
    <!-- Menonaktifkan validasi browser -->
</form>
\`\`\`

## Berbagai Tipe Input

### Input Teks
\`\`\`html
<input type="text" placeholder="Nama lengkap">
<input type="email" placeholder="Email">
<input type="password" placeholder="Password">
<input type="search" placeholder="Cari...">
<input type="url" placeholder="https://...">
<input type="tel" placeholder="0812-3456-7890">
<input type="number" min="0" max="100" step="1">
\`\`\`

### Input Pilihan
\`\`\`html
<!-- Checkbox (bisa pilih banyak) -->
<label><input type="checkbox" name="hobi" value="coding"> Coding</label>
<label><input type="checkbox" name="hobi" value="desain"> Desain</label>

<!-- Radio (hanya pilih satu) -->
<label><input type="radio" name="gender" value="pria"> Pria</label>
<label><input type="radio" name="gender" value="wanita"> Wanita</label>

<!-- Select Dropdown -->
<select name="kota">
    <option value="">Pilih Kota</option>
    <option value="jakarta">Jakarta</option>
    <option value="bandung">Bandung</option>
    <option value="surabaya">Surabaya</option>
</select>

<!-- Select dengan optgroup -->
<select name="makanan">
    <optgroup label="Buah">
        <option value="apel">Apel</option>
        <option value="jeruk">Jeruk</option>
    </optgroup>
    <optgroup label="Sayur">
        <option value="bayam">Bayam</option>
        <option value="wortel">Wortel</option>
    </optgroup>
</select>
\`\`\`

### Input Tanggal dan Waktu
\`\`\`html
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">
\`\`\`

### Input File dan Lainnya
\`\`\`html
<input type="file" accept="image/*">
<input type="file" multiple>
<input type="color" value="#E34F26">
<input type="range" min="0" max="100" value="50">
<input type="hidden" name="userId" value="123">
\`\`\`

## Textarea

Untuk input teks multi-baris:
\`\`\`html
<textarea name="pesan" rows="5" cols="30" placeholder="Tulis pesan..."></textarea>
\`\`\`

## Label

Selalu gunakan label untuk aksesibilitas:
\`\`\`html
<!-- Label eksplisit (disarankan) -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Label implisit -->
<label>
    <input type="checkbox" name="setuju"> Saya setuju
</label>
\`\`\`

## Fieldset dan Legend

Mengelompokkan form:
\`\`\`html
<fieldset>
    <legend>Data Pribadi</legend>
    
    <label for="nama">Nama:</label>
    <input type="text" id="nama">
    
    <label for="umur">Umur:</label>
    <input type="number" id="umur">
</fieldset>
\`\`\`

## Tombol

\`\`\`html
<!-- Tombol submit -->
<button type="submit">Kirim</button>

<!-- Tombol reset -->
<button type="reset">Hapus</button>

<!-- Tombol biasa -->
<button type="button">Batal</button>

<!-- Input sebagai tombol -->
<input type="submit" value="Kirim">
<input type="reset" value="Hapus">
<input type="button" value="Klik">
\`\`\`

## Datalist (Autocomplete)

\`\`\`html
<label for="browser">Browser favorit:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
</datalist>
\`\`\`

## Form Lengkap

\`\`\`html
<form action="/daftar" method="POST">
    <fieldset>
        <legend>Form Pendaftaran</legend>
        
        <div>
            <label for="nama">Nama Lengkap *</label>
            <input type="text" id="nama" name="nama" required>
        </div>
        
        <div>
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div>
            <label for="password">Password *</label>
            <input type="password" id="password" name="password" 
                   minlength="8" required>
        </div>
        
        <div>
            <label for="kota">Kota</label>
            <select id="kota" name="kota">
                <option value="">Pilih Kota</option>
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
            </select>
        </div>
        
        <div>
            <label>
                <input type="checkbox" name="setuju" required>
                Saya setuju dengan syarat dan ketentuan
            </label>
        </div>
        
        <button type="submit">Daftar</button>
    </fieldset>
</form>
\`\`\`
  `,

  quiz: [
    {
      question: "Metode HTTP apa yang sebaiknya digunakan untuk mengirim data login?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 1,
      explanation: "POST harus digunakan untuk data sensitif seperti login karena data dikirim di body request, bukan di URL."
    },
    {
      question: "Apa fungsi elemen <label>?",
      options: [
        "Hanya untuk styling",
        "Mengaitkan teks dengan input untuk aksesibilitas",
        "Membuat input baru",
        "Validasi otomatis"
      ],
      correctAnswer: 1,
      explanation: "Label mengaitkan teks deskriptif dengan input field, sangat penting untuk aksesibilitas dan UX."
    },
    {
      question: "Apa perbedaan radio button dan checkbox?",
      options: [
        "Tidak ada perbedaan",
        "Radio: pilih satu, Checkbox: pilih banyak",
        "Radio: pilih banyak, Checkbox: pilih satu",
        "Tergantung browser"
      ],
      correctAnswer: 1,
      explanation: "Radio button hanya memperbolehkan satu pilihan dalam grup yang sama, sedangkan checkbox bisa memilih beberapa."
    }
  ],

  codeExamples: [
    {
      title: "Form Pendaftaran Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Form Pendaftaran</title>
    <style>
        form { max-width: 500px; margin: 0 auto; }
        fieldset { border: 1px solid #ddd; border-radius: 8px; padding: 20px; }
        legend { font-weight: bold; font-size: 1.2em; padding: 0 10px; }
        div { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: 500; }
        input, select, textarea { 
            width: 100%; padding: 8px; border: 1px solid #ddd; 
            border-radius: 4px; font-size: 14px; 
        }
        button { 
            background: #E34F26; color: white; border: none; 
            padding: 10px 20px; border-radius: 4px; cursor: pointer; 
        }
        button:hover { background: #c73e1d; }
        .required::after { content: " *"; color: red; }
    </style>
</head>
<body>
    <h1 style="text-align:center;">Form Pendaftaran</h1>
    
    <form action="/api/daftar" method="POST">
        <fieldset>
            <legend>Data Pribadi</legend>
            
            <div>
                <label for="nama" class="required">Nama Lengkap</label>
                <input type="text" id="nama" name="nama" 
                       placeholder="Masukkan nama lengkap"
                       required autocomplete="name">
            </div>
            
            <div>
                <label for="email" class="required">Email</label>
                <input type="email" id="email" name="email" 
                       placeholder="contoh@email.com"
                       required autocomplete="email">
            </div>
            
            <div>
                <label for="telepon">Nomor Telepon</label>
                <input type="tel" id="telepon" name="telepon" 
                       placeholder="0812-3456-7890"
                       pattern="[0-9]{10,13}"
                       autocomplete="tel">
            </div>
            
            <div>
                <label for="password" class="required">Password</label>
                <input type="password" id="password" name="password" 
                       placeholder="Minimal 8 karakter"
                       minlength="8" required>
            </div>
        </fieldset>
        
        <fieldset>
            <legend>Informasi Tambahan</legend>
            
            <div>
                <label for="tanggal">Tanggal Lahir</label>
                <input type="date" id="tanggal" name="tanggal_lahir">
            </div>
            
            <div>
                <label>Jenis Kelamin</label>
                <label style="display: inline; margin-right: 15px;">
                    <input type="radio" name="gender" value="pria" style="width: auto;"> Pria
                </label>
                <label style="display: inline;">
                    <input type="radio" name="gender" value="wanita" style="width: auto;"> Wanita
                </label>
            </div>
            
            <div>
                <label for="kota">Kota</label>
                <select id="kota" name="kota">
                    <option value="">-- Pilih Kota --</option>
                    <optgroup label="Pulau Jawa">
                        <option value="jakarta">Jakarta</option>
                        <option value="bandung">Bandung</option>
                        <option value="surabaya">Surabaya</option>
                    </optgroup>
                    <optgroup label="Luar Jawa">
                        <option value="medan">Medan</option>
                        <option value="makassar">Makassar</option>
                    </optgroup>
                </select>
            </div>
            
            <div>
                <label>Hobi</label>
                <label style="display: inline; margin-right: 15px;">
                    <input type="checkbox" name="hobi" value="coding" style="width: auto;"> Coding
                </label>
                <label style="display: inline; margin-right: 15px;">
                    <input type="checkbox" name="hobi" value="desain" style="width: auto;"> Desain
                </label>
                <label style="display: inline;">
                    <input type="checkbox" name="hobi" value="musik" style="width: auto;"> Musik
                </label>
            </div>
            
            <div>
                <label for="alamat">Alamat</label>
                <textarea id="alamat" name="alamat" rows="3" 
                          placeholder="Masukkan alamat lengkap"></textarea>
            </div>
            
            <div>
                <label for="foto">Upload Foto</label>
                <input type="file" id="foto" name="foto" 
                       accept="image/*">
            </div>
        </fieldset>
        
        <div>
            <label>
                <input type="checkbox" name="setuju" required style="width: auto;">
                Saya setuju dengan <a href="#">Syarat & Ketentuan</a>
            </label>
        </div>
        
        <div style="display: flex; gap: 10px;">
            <button type="submit">Daftar Sekarang</button>
            <button type="reset" style="background: #666;">Hapus</button>
        </div>
    </form>
</body>
</html>`,
      output: "Form pendaftaran lengkap dengan berbagai jenis input dan validasi."
    }
  ]
};