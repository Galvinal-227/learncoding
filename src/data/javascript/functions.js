export const chapter = {
  slug: "javascript-functions",
  title: "Fungsi",
  description: "Kuasai berbagai cara membuat fungsi di JavaScript: declaration, expression, arrow, dan higher-order functions.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-variables"],
  tags: ["javascript", "fungsi", "function", "arrow"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Fungsi?

Fungsi adalah **blok kode yang bisa digunakan ulang** untuk melakukan tugas tertentu. Fungsi menerima input (parameter) dan mengembalikan output (return value).

## 4 Cara Membuat Fungsi

### 1. Function Declaration
\`\`\`javascript
function sapa(nama) {
    return \`Halo, \${nama}!\`;
}

console.log(sapa("Budi")); // "Halo, Budi!"
\`\`\`

### 2. Function Expression
\`\`\`javascript
const sapa = function(nama) {
    return \`Halo, \${nama}!\`;
};

console.log(sapa("Siti"));
\`\`\`

### 3. Arrow Function (ES6)
\`\`\`javascript
// Multi-baris
const sapa = (nama) => {
    return \`Halo, \${nama}!\`;
};

// Satu baris (implicit return)
const sapa = nama => \`Halo, \${nama}!\`;

// Tanpa parameter
const halo = () => "Halo Dunia!";
\`\`\`

### 4. IIFE (Immediately Invoked Function Expression)
\`\`\`javascript
(function() {
    console.log("Langsung dijalankan!");
})();

(() => {
    console.log("IIFE dengan arrow!");
})();
\`\`\`

## Parameter dan Argument

### Default Parameter
\`\`\`javascript
function sapa(nama = "Pengguna") {
    return \`Halo, \${nama}!\`;
}
console.log(sapa());       // "Halo, Pengguna!"
console.log(sapa("Budi")); // "Halo, Budi!"
\`\`\`

### Rest Parameter
\`\`\`javascript
function jumlahkan(...angka) {
    return angka.reduce((total, n) => total + n, 0);
}
console.log(jumlahkan(1, 2, 3, 4, 5)); // 15
\`\`\`

## Return Value

\`\`\`javascript
function tambah(a, b) {
    return a + b; // Mengembalikan nilai
}

function logPesan(pesan) {
    console.log(pesan); // Tidak return → undefined
}
\`\`\`

## Higher-Order Functions

Fungsi yang menerima atau mengembalikan fungsi lain:

\`\`\`javascript
// Menerima fungsi sebagai parameter
function jalankanDuaKali(fn) {
    fn();
    fn();
}
jalankanDuaKali(() => console.log("Halo!"));

// Mengembalikan fungsi
function buatPengali(faktor) {
    return function(angka) {
        return angka * faktor;
    };
}
const kaliDua = buatPengali(2);
console.log(kaliDua(5)); // 10
\`\`\`

## Callback Functions

\`\`\`javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data diterima!");
    }, 1000);
}

fetchData((hasil) => {
    console.log(hasil);
});
\`\`\`

## Pure Functions

Fungsi yang tidak mengubah state luar (side-effect free):
\`\`\`javascript
// ✅ Pure function
function tambah(a, b) {
    return a + b;
}

// ❌ Impure function (mengubah state luar)
let total = 0;
function tambahKeTotal(n) {
    total += n;
}
\`\`\`

## Arrow Function vs Regular Function

| Fitur | Regular | Arrow |
|-------|---------|-------|
| this | Dinamis | Lexical (parent) |
| arguments | ✅ | ❌ |
| Constructor (new) | ✅ | ❌ |
| Implicit return | ❌ | ✅ (satu baris) |
  `,

  quiz: [
    {
      question: "Apa perbedaan utama arrow function dan regular function?",
      options: [
        "Tidak ada perbedaan",
        "Arrow function tidak memiliki this sendiri, mengambil dari parent",
        "Arrow function lebih lambat",
        "Regular function tidak bisa return"
      ],
      correctAnswer: 1,
      explanation: "Arrow function tidak memiliki binding this sendiri - this di arrow function mengacu ke lexical scope (parent)."
    },
    {
      question: "Apa itu IIFE?",
      options: [
        "Fungsi error",
        "Fungsi yang langsung dijalankan saat dideklarasikan",
        "Fungsi internal",
        "Fungsi tanpa nama"
      ],
      correctAnswer: 1,
      explanation: "IIFE (Immediately Invoked Function Expression) adalah fungsi yang langsung dieksekusi setelah didefinisikan."
    }
  ],

  codeExamples: [
    {
      title: "Demo Fungsi JavaScript",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Fungsi JS</title></head>
<body>
    <h1>Demo Fungsi JavaScript</h1>
    <button onclick="hitung()">Hitung</button>
    <p id="result"></p>
    
    <script>
        // Function Declaration
        function tambah(a, b) {
            return a + b;
        }
        
        // Arrow Function
        const kali = (a, b) => a * b;
        
        // Default Parameter
        function sapa(nama = "Pengguna") {
            return \`Halo, \${nama}!\`;
        }
        
        // Higher-Order Function
        function operasi(a, b, fn) {
            return fn(a, b);
        }
        
        function hitung() {
            const a = 10, b = 5;
            const hasil = \`
                \${sapa("Budi")}
                \${a} + \${b} = \${tambah(a, b)}
                \${a} × \${b} = \${kali(a, b)}
                \${a} + \${b} = \${operasi(a, b, tambah)}
            \`;
            document.getElementById('result').innerText = hasil;
            console.log(hasil);
        }
    </script>
</body>
</html>`
    }
  ]
};