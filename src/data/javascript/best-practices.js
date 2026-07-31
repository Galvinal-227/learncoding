export const chapter = {
  slug: "javascript-best-practices",
  title: "Best Practices JavaScript",
  description: "Kumpulan praktik terbaik menulis JavaScript yang bersih, aman, dan efisien.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-async-await"],
  tags: ["javascript", "best-practices", "bersih", "clean-code"],
  order: 34,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Gunakan const dan let, Hindari var

\`\`\`javascript
// ✅
const MAX_SIZE = 100;
let currentSize = 50;

// ❌
var size = 50;
\`\`\`

## 2. Gunakan === (Strict Equality)

\`\`\`javascript
// ✅
if (value === null) { }

// ❌
if (value == null) { }
\`\`\`

## 3. Nama yang Deskriptif

\`\`\`javascript
// ✅
const activeUsers = users.filter(u => u.isActive);
const maxRetryAttempts = 3;

// ❌
const a = users.filter(u => u.isActive);
const max = 3;
\`\`\`

## 4. Early Return

\`\`\`javascript
// ✅
function proses(user) {
    if (!user) return null;
    if (!user.isActive) return null;
    // Logika utama...
}

// ❌
function proses(user) {
    if (user && user.isActive) {
        // Banyak kode nested...
    }
}
\`\`\`

## 5. Hindari Magic Numbers

\`\`\`javascript
// ✅
const MAX_LOGIN_ATTEMPTS = 5;
if (attempts >= MAX_LOGIN_ATTEMPTS) { }

// ❌
if (attempts >= 5) { }
\`\`\`

## 6. Gunakan Optional Chaining

\`\`\`javascript
// ✅
const kota = user?.alamat?.kota;

// ❌
const kota = user && user.alamat && user.alamat.kota;
\`\`\`

## 7. Gunakan Nullish Coalescing

\`\`\`javascript
// ✅
const count = value ?? 0;

// ❌ (0 akan dianggap falsy)
const count = value || 0;
\`\`\`

## 8. Async/Await > Promise chains

\`\`\`javascript
// ✅
try {
    const data = await fetchData();
} catch (err) {
    console.error(err);
}

// ❌
fetchData().then(data => {}).catch(err => {});
\`\`\`

## 9. Pure Functions

\`\`\`javascript
// ✅ Pure - tidak mengubah input
function tambah(arr, item) {
    return [...arr, item];
}

// ❌ Impure - mengubah input
function tambah(arr, item) {
    arr.push(item);
    return arr;
}
\`\`\`

## 10. Destructuring

\`\`\`javascript
// ✅
const { nama, umur } = user;
const [first, ...rest] = items;
\`\`\`

## 11. Template Literals

\`\`\`javascript
// ✅
const msg = \`Halo, \${nama}! Umurmu \${umur} tahun.\`;

// ❌
const msg = 'Halo, ' + nama + '! Umurmu ' + umur + ' tahun.';
\`\`\`

## 12. Default Parameters

\`\`\`javascript
// ✅
function sapa(nama = 'Pengguna') {
    return \`Halo, \${nama}!\`;
}
\`\`\`

## Checklist

\`\`\`
✅ Gunakan const/let, bukan var
✅ Gunakan === bukan ==
✅ Nama variabel/fungsi deskriptif
✅ Early return untuk validasi
✅ Handle error dengan try/catch
✅ Pure functions sebisa mungkin
✅ Gunakan destructuring
✅ Gunakan template literals
✅ Hindari callback hell (pakai async/await)
✅ Jangan mutate parameter
\`\`\`
  `,

  quiz: [
    {
      question: "Kenapa harus menggunakan === daripada ==?",
      options: [
        "Lebih cepat",
        "Menghindari type coercion yang tidak terduga",
        "Wajib di ES6",
        "Tidak ada alasan"
      ],
      correctAnswer: 1,
      explanation: "=== tidak melakukan type coercion, sehingga menghindari bug akibat konversi tipe yang tidak terduga."
    },
    {
      question: "Apa keuntungan early return?",
      options: [
        "Kode lebih cepat",
        "Mengurangi nesting dan membuat kode lebih readable",
        "Wajib di semua fungsi",
        "Menghemat memori"
      ],
      correctAnswer: 1,
      explanation: "Early return menangani kasus khusus di awal fungsi, mengurangi level indentasi dan membuat alur utama lebih jelas."
    }
  ]
};