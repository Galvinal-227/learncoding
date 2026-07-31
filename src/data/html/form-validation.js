export const chapter = {
  slug: "html-form-validation",
  title: "Validasi Form",
  description: "Pelajari validasi form HTML5 built-in untuk memvalidasi input pengguna tanpa JavaScript.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["html-forms"],
  tags: ["html", "form", "validasi", "input"],
  order: 19,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Validasi Form HTML5

HTML5 menyediakan validasi form **built-in** tanpa perlu JavaScript. Browser akan otomatis memvalidasi input berdasarkan atribut yang kamu tentukan.

## Atribut Validasi Dasar

### required
Input wajib diisi:
\`\`\`html
<input type="text" required>
<input type="email" required>
<select required>
    <option value="">Pilih</option>
</select>
<textarea required></textarea>
\`\`\`

### minlength / maxlength
Panjang minimum/maksimum teks:
\`\`\`html
<input type="text" minlength="3" maxlength="50">
<input type="password" minlength="8">
<textarea minlength="10" maxlength="500"></textarea>
\`\`\`

### min / max
Nilai minimum/maksimum angka:
\`\`\`html
<input type="number" min="1" max="100">
<input type="date" min="2026-01-01" max="2026-12-31">
<input type="range" min="0" max="100" value="50">
\`\`\`

### pattern
Validasi dengan Regular Expression (Regex):
\`\`\`html
<!-- Nomor telepon Indonesia -->
<input type="tel" pattern="[0-9]{10,13}" 
       title="Masukkan 10-13 digit angka">

<!-- Kode pos 5 digit -->
<input type="text" pattern="[0-9]{5}" 
       title="Masukkan 5 digit kode pos">

<!-- Minimal 1 huruf besar, 1 huruf kecil, 1 angka -->
<input type="password" 
       pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"
       title="Minimal 8 karakter dengan huruf besar, kecil, dan angka">
\`\`\`

### step
Interval nilai yang valid:
\`\`\`html
<input type="number" step="0.5">
<input type="number" step="10" min="0" max="100">
<input type="time" step="900"> <!-- 15 menit -->
\`\`\`

## Validasi Tipe Input Spesifik

### Email
\`\`\`html
<input type="email" required>
<!-- Browser memvalidasi format email secara otomatis -->
\`\`\`

### URL
\`\`\`html
<input type="url" required>
<!-- Harus diawali http:// atau https:// -->
\`\`\`

### Nomor Telepon
\`\`\`html
<input type="tel" pattern="[0-9]{10,13}" required>
<!-- pattern diperlukan karena format telepon bervariasi -->
\`\`\`

## Atribut Pesan Error Kustom

### title
Memberikan petunjuk saat validasi gagal:
\`\`\`html
<input type="password" 
       minlength="8"
       title="Password minimal 8 karakter">

<input type="text" 
       pattern="[A-Za-z]+"
       title="Hanya huruf yang diperbolehkan">
\`\`\`

### placeholder
Contoh input yang diharapkan:
\`\`\`html
<input type="email" placeholder="contoh@email.com">
<input type="tel" placeholder="0812-3456-7890">
\`\`\`

## Menonaktifkan Validasi

### Pada form:
\`\`\`html
<form novalidate>
    <!-- Validasi browser dinonaktifkan -->
</form>
\`\`\`

### Pada tombol:
\`\`\`html
<button type="submit" formnovalidate>Simpan Draft</button>
\`\`\`

## Styling Status Validasi dengan CSS

\`\`\`css
/* Input valid */
input:valid {
    border-color: green;
}

/* Input tidak valid */
input:invalid {
    border-color: red;
}

/* Input dalam range */
input:in-range {
    background-color: #e8f5e9;
}

/* Input di luar range */
input:out-of-range {
    background-color: #ffebee;
}

/* Input wajib */
input:required {
    border-left: 3px solid blue;
}

/* Input opsional */
input:optional {
    border-left: 3px solid #ccc;
}
\`\`\`

## Custom Validation Message dengan JavaScript

\`\`\`javascript
const input = document.getElementById('email');

input.addEventListener('invalid', function(event) {
    if (this.validity.valueMissing) {
        this.setCustomValidity('Email wajib diisi!');
    } else if (this.validity.typeMismatch) {
        this.setCustomValidity('Format email tidak valid!');
    }
});

input.addEventListener('input', function() {
    this.setCustomValidity(''); // Reset pesan kustom
});
\`\`\`

## Constraint Validation API

\`\`\`javascript
const email = document.getElementById('email');

// Cek validitas
console.log(email.validity.valid);        // true/false
console.log(email.validity.valueMissing);  // true jika kosong
console.log(email.validity.typeMismatch);  // true jika format salah
console.log(email.validity.tooShort);      // true jika terlalu pendek
console.log(email.validity.tooLong);       // true jika terlalu panjang
console.log(email.validity.patternMismatch); // true jika pattern tidak cocok

// Pesan error default browser
console.log(email.validationMessage);
\`\`\`

## Best Practices

### ✅ Validasi di sisi client DAN server
\`\`\`html
<!-- Client-side untuk UX yang baik -->
<input type="email" required>

<!-- Server-side untuk keamanan -->
<!-- Validasi ulang di backend! -->
\`\`\`

### ✅ Berikan feedback yang jelas
\`\`\`html
<input type="password" 
       minlength="8"
       title="Password minimal 8 karakter, mengandung huruf besar, kecil, dan angka">
\`\`\`

### ✅ Gunakan tipe input yang tepat
\`\`\`html
<!-- ✅ Baik -->
<input type="email">
<input type="number">

<!-- ❌ Buruk -->
<input type="text" pattern="..."> <!-- untuk email -->
\`\`\`

### ❌ Jangan hanya mengandalkan validasi client
\`\`\`html
<!-- Validasi client bisa dilewati, selalu validasi di server! -->
\`\`\`
  `,

  quiz: [
    {
      question: "Atribut apa yang membuat input wajib diisi?",
      options: ["mandatory", "required", "validate", "must-fill"],
      correctAnswer: 1,
      explanation: "Atribut 'required' membuat input wajib diisi sebelum form bisa disubmit."
    },
    {
      question: "Apa fungsi atribut pattern?",
      options: [
        "Membuat pola desain",
        "Validasi dengan regular expression",
        "Mengubah tampilan input",
        "Menentukan placeholder"
      ],
      correctAnswer: 1,
      explanation: "Atribut pattern menerima regular expression untuk memvalidasi format input, seperti nomor telepon atau kode pos."
    },
    {
      question: "Apakah validasi client-side cukup untuk keamanan?",
      options: [
        "Ya, sudah cukup",
        "Tidak, harus divalidasi juga di server",
        "Tergantung browser",
        "Hanya untuk form sederhana"
      ],
      correctAnswer: 1,
      explanation: "Validasi client-side bisa dilewati dengan mudah. Selalu lakukan validasi ulang di server untuk keamanan."
    }
  ],

  codeExamples: [
    {
      title: "Form dengan Validasi Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Form dengan Validasi</title>
    <style>
        form { max-width: 500px; margin: 20px auto; }
        div { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        input:valid { border-color: #4CAF50; }
        input:invalid { border-color: #f44336; }
        input:focus:invalid { outline-color: #f44336; }
        .error-message { color: #f44336; font-size: 12px; display: none; }
        input:invalid + .error-message { display: block; }
        button { background: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #45a049; }
    </style>
</head>
<body>
    <h1 style="text-align:center;">Form Registrasi</h1>
    
    <form action="/api/register" method="POST">
        
        <!-- Nama -->
        <div>
            <label for="nama">Nama Lengkap *</label>
            <input type="text" id="nama" name="nama" 
                   required minlength="3" maxlength="50"
                   pattern="[A-Za-z ]+"
                   title="Nama hanya boleh huruf dan spasi, 3-50 karakter"
                   placeholder="Masukkan nama lengkap">
            <span class="error-message">Nama wajib diisi (3-50 karakter, hanya huruf)</span>
        </div>
        
        <!-- Email -->
        <div>
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" 
                   required
                   placeholder="contoh@email.com">
            <span class="error-message">Format email tidak valid</span>
        </div>
        
        <!-- Password -->
        <div>
            <label for="password">Password *</label>
            <input type="password" id="password" name="password" 
                   required minlength="8"
                   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"
                   title="Minimal 8 karakter, harus ada huruf besar, huruf kecil, dan angka"
                   placeholder="Minimal 8 karakter">
            <span class="error-message">Password minimal 8 karakter dengan kombinasi huruf besar, kecil, dan angka</span>
        </div>
        
        <!-- Usia -->
        <div>
            <label for="usia">Usia *</label>
            <input type="number" id="usia" name="usia" 
                   required min="17" max="100"
                   placeholder="17-100">
            <span class="error-message">Usia minimal 17 tahun</span>
        </div>
        
        <!-- Telepon -->
        <div>
            <label for="telepon">Nomor Telepon *</label>
            <input type="tel" id="telepon" name="telepon" 
                   required
                   pattern="[0-9]{10,13}"
                   title="Masukkan 10-13 digit angka"
                   placeholder="081234567890">
            <span class="error-message">Nomor telepon harus 10-13 digit angka</span>
        </div>
        
        <!-- Website -->
        <div>
            <label for="website">Website</label>
            <input type="url" id="website" name="website" 
                   placeholder="https://websiteku.com">
            <span class="error-message">Format URL tidak valid (harus diawali http:// atau https://)</span>
        </div>
        
        <!-- Kode Pos -->
        <div>
            <label for="kodepos">Kode Pos</label>
            <input type="text" id="kodepos" name="kodepos" 
                   pattern="[0-9]{5}"
                   title="Masukkan 5 digit kode pos"
                   placeholder="12345">
            <span class="error-message">Kode pos harus 5 digit angka</span>
        </div>
        
        <button type="submit">Daftar</button>
        
    </form>
</body>
</html>`,
      output: "Form lengkap dengan validasi HTML5 built-in dan styling status validasi."
    }
  ]
};