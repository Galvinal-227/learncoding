export const chapter = {
  slug: "javascript-hoisting",
  title: "Hoisting",
  description: "Pahami hoisting - perilaku JavaScript mengangkat deklarasi ke atas scope.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 12,
  prerequisites: ["javascript-scope"],
  tags: ["javascript", "hoisting", "tdz", "deklarasi"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Hoisting?

Hoisting adalah perilaku JavaScript di mana **deklarasi** variabel dan fungsi "diangkat" ke atas scope sebelum kode dieksekusi.

## Function Hoisting

Function declaration bisa dipanggil sebelum deklarasi:
\`\`\`javascript
// ✅ Bisa - function declaration di-hoist
sapa("Budi");

function sapa(nama) {
    console.log(\`Halo, \${nama}!\`);
}
\`\`\`

\`\`\`javascript
// ❌ Error - function expression tidak di-hoist
sapa("Budi"); // TypeError: sapa is not a function

const sapa = function(nama) {
    console.log(\`Halo, \${nama}!\`);
};
\`\`\`

## Variable Hoisting

### var
\`\`\`javascript
console.log(nama); // undefined (bukan error!)
var nama = "Budi";
\`\`\`

Cara JavaScript melihatnya:
\`\`\`javascript
var nama;           // Deklarasi diangkat
console.log(nama);  // undefined
nama = "Budi";      // Assignment tetap di tempat
\`\`\`

### let dan const (TDZ)
\`\`\`javascript
// ❌ ReferenceError: Cannot access before initialization
console.log(nama);
let nama = "Budi";
\`\`\`

## Temporal Dead Zone (TDZ)

Area antara awal scope dan deklarasi let/const:
\`\`\`javascript
// ─── TDZ untuk nama dimulai ───
// console.log(nama); // ❌ Error
// ─── TDZ berakhir ───
let nama = "Budi";
console.log(nama); // ✅ "Budi"
\`\`\`

## Ringkasan Hoisting

| Deklarasi | Di-hoist? | Nilai Awal | Bisa Dipakai Sebelum? |
|-----------|-----------|------------|----------------------|
| function declaration | ✅ | Fungsi penuh | ✅ Ya |
| var | ✅ | undefined | ✅ (undefined) |
| let | ✅ (TDZ) | - | ❌ Error |
| const | ✅ (TDZ) | - | ❌ Error |
| function expression | ❌ (variabelnya) | - | ❌ Error |
| arrow function | ❌ (variabelnya) | - | ❌ Error |

## Best Practices

\`\`\`javascript
// ✅ Selalu deklarasikan dulu, pakai kemudian
const nama = "Budi";
console.log(nama);

// ✅ Gunakan function declaration untuk utility
function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

// ❌ Jangan mengandalkan hoisting
console.log(x); // undefined
var x = 10;
\`\`\`
  `,

  quiz: [
    {
      question: "Apa yang terjadi saat memanggil function declaration sebelum dideklarasikan?",
      options: ["Error", "Berfungsi normal", "undefined", "Tergantung browser"],
      correctAnswer: 1,
      explanation: "Function declaration di-hoist sepenuhnya, jadi bisa dipanggil sebelum deklarasi di kode."
    },
    {
      question: "Apa itu TDZ?",
      options: [
        "Temporal Dead Zone - area di mana let/const belum bisa diakses",
        "Time Delay Zone",
        "Type Definition Zone",
        "Error JavaScript"
      ],
      correctAnswer: 0,
      explanation: "TDZ (Temporal Dead Zone) adalah periode antara awal scope dan deklarasi let/const di mana variabel tidak bisa diakses."
    }
  ]
};