export const chapter = {
  slug: "javascript-closures",
  title: "Closure",
  description: "Deep dive ke closure - salah satu konsep paling powerful di JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-scope", "javascript-functions"],
  tags: ["javascript", "closure", "advanced", "scope"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Closure?

Closure adalah **fungsi yang "mengingat" variabel dari outer scope-nya** bahkan setelah outer function selesai dieksekusi.

## Contoh Dasar

\`\`\`javascript
function buatCounter() {
    let count = 0; // Variabel ini "diingat"
    
    return function() {
        count++;
        return count;
    };
}

const counter = buatCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count tetap hidup meskipun buatCounter sudah selesai!
\`\`\`

## Kenapa Closure Penting?

### 1. Data Privacy (Encapsulation)
\`\`\`javascript
function buatUser(nama) {
    let _password = "rahasia123"; // Private
    
    return {
        getNama: () => nama,
        cekPassword: (pass) => pass === _password,
        // Tidak ada cara langsung mengakses _password!
    };
}

const user = buatUser("Budi");
console.log(user.getNama());     // "Budi"
console.log(user._password);     // undefined (private!)
console.log(user.cekPassword("rahasia123")); // true
\`\`\`

### 2. Factory Functions
\`\`\`javascript
function buatPengali(faktor) {
    return (angka) => angka * faktor;
}

const kali2 = buatPengali(2);
const kali10 = buatPengali(10);

console.log(kali2(5));  // 10
console.log(kali10(5)); // 50
\`\`\`

### 3. Memoization
\`\`\`javascript
function memoize(fn) {
    const cache = {};
    
    return function(arg) {
        if (cache[arg] !== undefined) {
            console.log('Dari cache!');
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const faktorialMemo = memoize(function(n) {
    if (n <= 1) return 1;
    return n * faktorialMemo(n - 1);
});
\`\`\`

## Closure di Loop

### Masalah Klasik
\`\`\`javascript
// ❌ Semua output 3
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// ✅ Gunakan let (block-scoped)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0, 1, 2
}
\`\`\`

## Module Pattern

\`\`\`javascript
const ModulKeuangan = (function() {
    let saldo = 0; // Private
    
    return {
        setor: (jumlah) => { saldo += jumlah; },
        tarik: (jumlah) => {
            if (jumlah > saldo) return "Saldo kurang!";
            saldo -= jumlah;
            return jumlah;
        },
        cekSaldo: () => saldo
    };
})();

ModulKeuangan.setor(1000);
console.log(ModulKeuangan.cekSaldo()); // 1000
console.log(ModulKeuangan.saldo);      // undefined
\`\`\`

## Garbage Collection & Memory Leak

\`\`\`javascript
// Closure menahan referensi → tidak di-garbage collect
function buatDataBesar() {
    const dataBesar = new Array(1000000);
    return () => dataBesar.length; // Masih pegang referensi!
}
// Hati-hati: dataBesar tetap di memori
\`\`\`
  `,

  quiz: [
    {
      question: "Apa itu closure?",
      options: [
        "Fungsi tanpa nama",
        "Fungsi yang mengingat variabel dari outer scope-nya",
        "Error JavaScript",
        "Cara menutup browser"
      ],
      correctAnswer: 1,
      explanation: "Closure adalah fungsi yang mempertahankan akses ke variabel di lexical scope-nya bahkan setelah outer function selesai dieksekusi."
    },
    {
      question: "Apa kegunaan utama closure?",
      options: [
        "Animasi",
        "Data privacy dan factory functions",
        "Styling",
        "Hanya untuk debugging"
      ],
      correctAnswer: 1,
      explanation: "Closure sering digunakan untuk enkapsulasi (private variables), factory functions, memoization, dan module pattern."
    }
  ],

  codeExamples: [
    {
      title: "Demo Closure: Counter & Private Data",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Closure Demo</title></head>
<body>
    <h1>Demo Closure</h1>
    <button onclick="increment()">+</button>
    <span id="count">0</span>
    <p id="info"></p>
    
    <script>
        // Closure untuk counter
        function buatCounter() {
            let count = 0;
            return {
                increment: () => ++count,
                decrement: () => --count,
                getCount: () => count
            };
        }
        
        const counter = buatCounter();
        
        function increment() {
            document.getElementById('count').textContent = counter.increment();
        }
        
        // Closure untuk data private
        function buatBank(nama) {
            let saldo = 0;
            return {
                setor: (jml) => { saldo += jml; return \`Setor Rp\${jml}\`; },
                tarik: (jml) => {
                    if (jml > saldo) return 'Saldo tidak cukup';
                    saldo -= jml; return \`Tarik Rp\${jml}\`;
                },
                cek: () => \`Saldo \${nama}: Rp\${saldo}\`
            };
        }
        
        const bankBudi = buatBank('Budi');
        bankBudi.setor(50000);
        document.getElementById('info').textContent = bankBudi.cek();
    </script>
</body>
</html>`
    }
  ]
};