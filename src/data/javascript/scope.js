export const chapter = {
  slug: "javascript-scope",
  title: "Scope & Lexical Environment",
  description: "Pahami konsep scope di JavaScript: global, function, block, dan lexical scoping.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-variables", "javascript-functions"],
  tags: ["javascript", "scope", "lexical", "block"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Scope?

Scope adalah **area aksesibilitas** variabel. Di mana variabel bisa diakses dan digunakan.

## 3 Jenis Scope

### 1. Global Scope
Variabel yang dideklarasikan di luar semua fungsi:
\`\`\`javascript
const globalVar = "Aku global!";

function test() {
    console.log(globalVar); // ✅ Bisa diakses
}
console.log(globalVar); // ✅ Bisa diakses
\`\`\`

### 2. Function Scope
Variabel yang dideklarasikan di dalam fungsi (hanya var):
\`\`\`javascript
function test() {
    var functionVar = "Aku di dalam fungsi!";
    let blockVar = "Juga di dalam fungsi";
}
// console.log(functionVar); // ❌ Error
// console.log(blockVar);    // ❌ Error
\`\`\`

### 3. Block Scope (ES6)
Variabel dengan let/const di dalam {}:
\`\`\`javascript
if (true) {
    let blockVar = "Hanya di block ini";
    const blockConst = "Juga hanya di sini";
    var notBlocked = "Bisa keluar!"; // ⚠️ var tidak block-scoped
}
console.log(notBlocked); // ✅ "Bisa keluar!"
// console.log(blockVar); // ❌ Error
\`\`\`

## Lexical Scope

JavaScript menggunakan **lexical scoping**: fungsi bisa mengakses variabel dari **tempat fungsi itu ditulis**, bukan tempat dipanggil.

\`\`\`javascript
const nama = "Budi";

function luar() {
    const nama = "Siti";
    
    function dalam() {
        console.log(nama); // "Siti" (dari lexical scope)
    }
    dalam();
}
luar();
\`\`\`

## Scope Chain

JavaScript mencari variabel dari scope terdalam ke terluar:

\`\`\`javascript
const global = "global";

function luar() {
    const outer = "outer";
    
    function dalam() {
        const inner = "inner";
        console.log(inner); // Dari scope sendiri
        console.log(outer); // Dari scope parent
        console.log(global); // Dari global scope
    }
    dalam();
}
\`\`\`

## Visualisasi Scope

\`\`\`
┌─────────────────────────────────────┐
│  GLOBAL SCOPE                       │
│  const appName = "App"              │
│  ┌───────────────────────────────┐  │
│  │ FUNCTION SCOPE                │  │
│  │ const userName = "Budi"      │  │
│  │  ┌─────────────────────────┐ │  │
│  │  │ BLOCK SCOPE             │ │  │
│  │  │ let temp = "sementara" │ │  │
│  │  └─────────────────────────┘ │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
\`\`\`

## Module Scope

Dengan ES6 modules, setiap file punya scope sendiri:
\`\`\`javascript
// module.js
const privateVar = "Tidak bisa diakses dari luar";
export const publicVar = "Bisa diakses";

// main.js
import { publicVar } from './module.js';
console.log(publicVar); // ✅
// console.log(privateVar); // ❌
\`\`\`

## Best Practices

\`\`\`javascript
// ✅ Minimalkan variabel global
(function() {
    const local = "Aman di dalam IIFE";
})();

// ✅ Gunakan let dan const
for (let i = 0; i < 5; i++) {
    // i hanya ada di dalam loop
}

// ❌ Jangan buat variabel tanpa deklarasi
function bad() {
    implicitGlobal = "Ini jadi global!"; // ⚠️ Bahaya!
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa itu lexical scope?",
      options: [
        "Scope berdasarkan eksekusi",
        "Scope berdasarkan di mana fungsi ditulis",
        "Scope dinamis",
        "Scope global saja"
      ],
      correctAnswer: 1,
      explanation: "Lexical scope berarti akses variabel ditentukan oleh posisi fungsi di kode sumber, bukan di mana fungsi dipanggil."
    },
    {
      question: "Variabel let di dalam block if bisa diakses di luar?",
      options: ["Ya", "Tidak", "Tergantung browser", "Hanya di strict mode"],
      correctAnswer: 1,
      explanation: "let dan const adalah block-scoped. Variabel yang dideklarasikan dengan let di dalam {} tidak bisa diakses dari luar block tersebut."
    }
  ]
};