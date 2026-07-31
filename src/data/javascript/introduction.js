export const chapter = {
  slug: "javascript-introduction",
  title: "Pengenalan JavaScript",
  description: "Pelajari apa itu JavaScript, sejarahnya, dan perannya dalam web development modern.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["javascript", "pengenalan", "web", "frontend"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu JavaScript?

JavaScript adalah bahasa pemrograman yang membuat website menjadi **interaktif dan dinamis**. Jika HTML adalah kerangka dan CSS adalah pakaian, maka JavaScript adalah **otot dan otak** yang membuat website hidup.

## Apa yang Bisa Dilakukan JavaScript?

- ✅ Memanipulasi konten HTML (DOM)
- ✅ Merespon aksi pengguna (klik, scroll, input)
- ✅ Validasi form sebelum dikirim
- ✅ Membuat animasi kompleks
- ✅ Mengambil data dari server (API)
- ✅ Membangun aplikasi web lengkap (Frontend & Backend)
- ✅ Membuat game browser
- ✅ Mobile apps (React Native)
- ✅ Desktop apps (Electron)

## Sejarah Singkat

- **1995** - Brendan Eich menciptakan JavaScript dalam 10 hari di Netscape
- **1996** - Microsoft membuat JScript (versi JS untuk IE)
- **1997** - ECMAScript 1 (ES1) - Standar pertama
- **2005** - AJAX populer, web makin interaktif
- **2009** - ES5 dirilis (strict mode, JSON)
- **2015** - ES6/ES2015 (let, const, arrow functions, class)
- **2016-sekarang** - Rilis tahunan (ES2016, ES2017, ...)

## JavaScript vs Java

⚠️ **JavaScript TIDAK sama dengan Java!**

| JavaScript | Java |
|------------|------|
| Bahasa scripting | Bahasa kompilasi |
| Dinamis, loosely typed | Static typing |
| Berjalan di browser | Berjalan di JVM |
| Dibuat Netscape | Dibuat Sun Microsystems |
| File .js | File .java |

## Di Mana JavaScript Berjalan?

### 1. Browser (Client-side)
\`\`\`html
<script>
    console.log('Halo dari browser!');
</script>

<script src="script.js"></script>
\`\`\`

### 2. Node.js (Server-side)
\`\`\`bash
node script.js
\`\`\`

## Program Pertama

### Di Browser Console
1. Buka browser (Chrome/Firefox)
2. Tekan F12 → tab Console
3. Ketik:

\`\`\`javascript
console.log('Halo, Dunia!');
alert('Selamat datang!');
\`\`\`

### Di File HTML
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>JS Pertamaku</title>
</head>
<body>
    <h1>JavaScript</h1>
    <script>
        console.log('Halo dari file HTML!');
    </script>
</body>
</html>
\`\`\`

### Dengan Node.js
\`\`\`javascript
// app.js
console.log('Halo dari Node.js!');
\`\`\`

## Link JavaScript di HTML

### Internal
\`\`\`html
<script>
    // Kode JS di sini
</script>
\`\`\`

### External (Disarankan)
\`\`\`html
<script src="script.js"></script>
\`\`\`

### Dengan atribut defer/async
\`\`\`html
<!-- defer: tunda eksekusi sampai HTML selesai parsing -->
<script src="script.js" defer></script>

<!-- async: download paralel, eksekusi segera setelah siap -->
<script src="script.js" async></script>
\`\`\`

## Console & Debugging

\`\`\`javascript
console.log('Pesan biasa');
console.error('Pesan error');
console.warn('Pesan peringatan');
console.table([{nama: 'Budi', umur: 25}]);
console.time('timer');
// ... kode ...
console.timeEnd('timer');
\`\`\`
  `,

  quiz: [
    {
      question: "Siapa pencipta JavaScript?",
      options: [
        "Bill Gates",
        "Brendan Eich",
        "Tim Berners-Lee",
        "Linus Torvalds"
      ],
      correctAnswer: 1,
      explanation: "Brendan Eich menciptakan JavaScript pada tahun 1995 saat bekerja di Netscape."
    },
    {
      question: "Apakah JavaScript sama dengan Java?",
      options: [
        "Ya, sama persis",
        "Tidak, mereka bahasa yang berbeda",
        "Mirip, hanya beda nama",
        "JavaScript adalah versi ringan Java"
      ],
      correctAnswer: 1,
      explanation: "JavaScript dan Java adalah dua bahasa yang sangat berbeda. Nama mirip hanya karena alasan marketing."
    },
    {
      question: "Apa kepanjangan ES6?",
      options: [
        "Easy Script 6",
        "ECMAScript 6 / ECMAScript 2015",
        "Enhanced Script 6",
        "Electronic Script 6"
      ],
      correctAnswer: 1,
      explanation: "ES6 (ECMAScript 2015) adalah versi JavaScript yang membawa banyak fitur modern seperti let, const, arrow functions, dan class."
    }
  ],

  codeExamples: [
    {
      title: "Program JavaScript Pertama",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Pertamaku</title>
</head>
<body>
    <h1>JavaScript di Browser</h1>
    <p>Buka Console (F12) untuk melihat output.</p>
    
    <button onclick="sapa()">Klik Aku!</button>
    
    <script>
        // Output ke console
        console.log('Halo dari JavaScript!');
        console.log('Hari ini:', new Date().toLocaleDateString('id-ID'));
        
        // Variabel
        let nama = 'Budi';
        const tahun = 2026;
        
        console.log(\`Nama: \${nama}, Tahun: \${tahun}\`);
        
        // Fungsi
        function sapa() {
            alert('Halo, selamat belajar JavaScript! 🚀');
            console.log('Tombol diklik!');
        }
        
        // Array dan loop
        const hobi = ['Coding', 'Membaca', 'Olahraga'];
        console.table(hobi);
        
        // Object
        const user = {
            nama: 'Budi Santoso',
            umur: 25,
            role: 'Developer'
        };
        console.log('Data User:', user);
    </script>
</body>
</html>`,
      output: "Buka console browser untuk melihat berbagai output JavaScript."
    }
  ]
};