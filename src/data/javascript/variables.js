export const chapter = {
  slug: "javascript-variables",
  title: "Variabel (var, let, const)",
  description: "Pelajari cara mendeklarasikan dan menggunakan variabel di JavaScript dengan var, let, dan const.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-introduction"],
  tags: ["javascript", "variabel", "let", "const", "var"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Variabel?

Variabel adalah **wadah** untuk menyimpan data. Bayangkan seperti kotak berlabel yang bisa diisi nilai.

## 3 Cara Deklarasi Variabel

### 1. var (Cara Lama - Hindari)
\`\`\`javascript
var nama = "Budi";
var umur = 25;
\`\`\`

⚠️ **Masalah var:**
- Function-scoped (bukan block-scoped)
- Bisa dideklarasi ulang
- Hoisting dengan nilai undefined

### 2. let (Rekomendasi untuk nilai yang berubah)
\`\`\`javascript
let nama = "Budi";
nama = "Siti"; // ✅ Bisa diubah

let umur = 25;
umur = 26;     // ✅ Bisa diubah
\`\`\`

### 3. const (Rekomendasi untuk nilai tetap)
\`\`\`javascript
const PI = 3.14159;
const NAMA_WEBSITE = "Learn By GWD";
// PI = 3; // ❌ Error! Tidak bisa diubah

// Tapi object dan array const bisa dimodifikasi
const user = { nama: "Budi" };
user.nama = "Siti"; // ✅ Bisa
user.umur = 25;     // ✅ Bisa
\`\`\`

## Perbandingan var vs let vs const

| Fitur | var | let | const |
|-------|-----|-----|-------|
| Scope | Function | Block | Block |
| Re-declare | ✅ Bisa | ❌ Error | ❌ Error |
| Re-assign | ✅ Bisa | ✅ Bisa | ❌ Error |
| Hoisting | undefined | TDZ | TDZ |
| Global property | Ya | Tidak | Tidak |

## Aturan Penamaan Variabel

\`\`\`javascript
// ✅ Benar
let nama = "Budi";
let namaLengkap = "Budi Santoso";  // camelCase
let _private = "secret";
let $element = document.querySelector('.box');
let user2 = { nama: "User 2" };

// ❌ Salah
// let 2user = "tidak boleh";        // Tidak boleh diawali angka
// let nama-lengkap = "tidak boleh";  // Tidak boleh pakai -
// let let = "tidak boleh";           // Reserved keyword
// let first name = "tidak boleh";    // Tidak boleh ada spasi
\`\`\`

## Block Scope (let & const)

\`\`\`javascript
if (true) {
    var x = 10;   // Bisa diakses di luar block
    let y = 20;   // Hanya di dalam block
    const z = 30; // Hanya di dalam block
}

console.log(x); // 10 ✅
// console.log(y); // ❌ Error: y is not defined
// console.log(z); // ❌ Error: z is not defined
\`\`\`

## Temporal Dead Zone (TDZ)

\`\`\`javascript
// var - hoisting dengan undefined
console.log(a); // undefined (tidak error)
var a = 10;

// let/const - TDZ
// console.log(b); // ❌ ReferenceError
let b = 20;
\`\`\`

## Konvensi Penamaan

\`\`\`javascript
// camelCase (standar JavaScript)
let namaLengkap = "Budi";
let tanggalLahir = "1998-01-15";

// UPPER_SNAKE_CASE (untuk konstanta)
const MAX_USERS = 100;
const API_URL = "https://api.example.com";

// Awalan untuk boolean
let isLoading = true;
let hasError = false;
let isLoggedIn = true;

// Private (konvensi _)
let _privateVar = "secret";
\`\`\`

## Best Practices

\`\`\`javascript
// ✅ Gunakan const default
const name = "Budi";
const age = 25;

// ✅ Gunakan let hanya jika perlu diubah
let score = 0;
score += 10;

// ❌ Jangan gunakan var
// var oldWay = "bad";

// ✅ Deklarasi di dekat penggunaan
function hitung() {
    const total = harga * jumlah;
    return total;
}

// ✅ Nama yang deskriptif
const daftarPenggunaAktif = [];
const waktuTungguMaksimal = 5000;

// ❌ Nama tidak jelas
const a = [];
const x = 5000;
\`\`\`
  `,

  quiz: [
    {
      question: "Apa perbedaan utama let dan const?",
      options: [
        "Tidak ada perbedaan",
        "let bisa di-reassign, const tidak",
        "let block-scoped, const global",
        "let lebih cepat"
      ],
      correctAnswer: 1,
      explanation: "let memungkinkan nilai variabel diubah (re-assign), sedangkan const tidak bisa diubah setelah deklarasi awal."
    },
    {
      question: "Kenapa var tidak direkomendasikan?",
      options: [
        "Karena lambat",
        "Karena function-scoped dan bisa menyebabkan bug",
        "Karena tidak support browser modern",
        "Karena tidak bisa di-reassign"
      ],
      correctAnswer: 1,
      explanation: "var adalah function-scoped (bukan block-scoped), bisa dideklarasi ulang, dan hoisting dengan undefined yang bisa menyebabkan bug tidak terduga."
    }
  ],

  codeExamples: [
    {
      title: "Demo Variabel JavaScript",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Variabel JS</title></head>
<body>
    <h1>Demo Variabel JavaScript</h1>
    <p>Buka Console (F12)</p>
    
    <script>
        // const untuk nilai tetap
        const APP_NAME = "Learn By GWD";
        const MAX_SCORE = 100;
        
        // let untuk nilai berubah
        let currentScore = 0;
        let playerName = "Budi";
        
        console.log(\`\${APP_NAME} - Skor Maks: \${MAX_SCORE}\`);
        console.log(\`Pemain: \${playerName}, Skor: \${currentScore}\`);
        
        // Re-assign let
        currentScore += 50;
        playerName = "Siti";
        console.log(\`Setelah update - Pemain: \${playerName}, Skor: \${currentScore}\`);
        
        // const dengan object
        const user = { nama: "Budi", level: 1 };
        user.level = 2;  // ✅ Bisa (modifikasi properti)
        console.log("User:", user);
        
        // Block scope
        if (true) {
            let blockVar = "Hanya di dalam block";
            console.log("Di dalam block:", blockVar);
        }
        // console.log(blockVar); // ❌ Error
    </script>
</body>
</html>`
    }
  ]
};