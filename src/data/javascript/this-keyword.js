export const chapter = {
  slug: "javascript-this-keyword",
  title: "Keyword this",
  description: "Pahami perilaku keyword 'this' di JavaScript dalam berbagai konteks.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-functions", "javascript-objects"],
  tags: ["javascript", "this", "context", "binding"],
  order: 30,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu 'this'?

\`this\` adalah keyword spesial yang mengacu ke **konteks eksekusi** saat ini. Nilainya ditentukan oleh **bagaimana fungsi dipanggil**.

## 5 Aturan 'this'

### 1. Global Context
\`\`\`javascript
console.log(this); // window (browser) / global (Node.js)

// Strict mode
'use strict';
console.log(this); // undefined
\`\`\`

### 2. Object Method
\`\`\`javascript
const user = {
    nama: 'Budi',
    sapa() {
        console.log(this.nama); // this = user
    }
};
user.sapa(); // 'Budi'
\`\`\`

### 3. Constructor (new)
\`\`\`javascript
function User(nama) {
    this.nama = nama; // this = instance baru
}
const budi = new User('Budi');
console.log(budi.nama); // 'Budi'
\`\`\`

### 4. call, apply, bind (Explicit Binding)
\`\`\`javascript
function sapa() {
    console.log(\`Halo, \${this.nama}\`);
}

const budi = { nama: 'Budi' };
const siti = { nama: 'Siti' };

sapa.call(budi);  // 'Halo, Budi'
sapa.apply(siti); // 'Halo, Siti'

const sapaBudi = sapa.bind(budi);
sapaBudi(); // 'Halo, Budi'
\`\`\`

### 5. Arrow Function (Lexical this)
\`\`\`javascript
const user = {
    nama: 'Budi',
    sapaBiasa: function() {
        console.log(this.nama); // 'Budi' (this = user)
    },
    sapaArrow: () => {
        console.log(this.nama); // undefined (this = parent scope)
    }
};
\`\`\`

## Masalah Umum & Solusi

### Callback kehilangan this
\`\`\`javascript
const user = {
    nama: 'Budi',
    sapa() { console.log(this.nama); }
};

// ❌ this hilang
setTimeout(user.sapa, 1000); // undefined

// ✅ Solusi 1: bind
setTimeout(user.sapa.bind(user), 1000);

// ✅ Solusi 2: arrow wrapper
setTimeout(() => user.sapa(), 1000);

// ✅ Solusi 3: arrow method (tapi hati-hati)
\`\`\`

### this di Event Listener
\`\`\`javascript
button.addEventListener('click', function() {
    console.log(this); // <button> element
});

button.addEventListener('click', () => {
    console.log(this); // window (arrow function!)
});
\`\`\`

## Ringkasan

| Cara Dipanggil | Nilai this |
|---------------|-----------|
| Fungsi biasa | window/undefined (strict) |
| Object method | Object pemanggil |
| new Constructor | Instance baru |
| call/apply/bind | Yang ditentukan |
| Arrow function | Lexical (parent scope) |
| Event listener | Element target |
  `,

  quiz: [
    {
      question: "Apa nilai this di arrow function?",
      options: [
        "Object pemanggil",
        "Lexical scope (parent)",
        "window",
        "undefined"
      ],
      correctAnswer: 1,
      explanation: "Arrow function tidak memiliki this sendiri. this di arrow function mengacu ke lexical scope (di mana arrow function ditulis)."
    },
    {
      question: "Bagaimana cara mengikat this secara permanen ke fungsi?",
      options: ["call()", "apply()", "bind()", "Semua benar"],
      correctAnswer: 2,
      explanation: "bind() membuat fungsi baru dengan this yang terikat permanen. call() dan apply() hanya untuk satu kali pemanggilan."
    }
  ],

  codeExamples: [
    {
      title: "Demo this di Berbagai Konteks",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>this Demo</title></head>
<body>
    <h1>Demo keyword 'this'</h1>
    <button id="btn">Klik Aku</button>
    <p>Buka Console (F12)</p>
    
    <script>
        const user = {
            nama: 'Budi',
            sapaBiasa() { console.log('Biasa:', this.nama); },
            sapaArrow: () => console.log('Arrow:', this?.nama),
            tundaSapa() {
                setTimeout(function() {
                    console.log('Timeout biasa:', this?.nama);
                }, 100);
                
                setTimeout(() => {
                    console.log('Timeout arrow:', this.nama);
                }, 100);
            }
        };
        
        user.sapaBiasa();    // 'Budi'
        user.sapaArrow();    // undefined
        user.tundaSapa();    // undefined, 'Budi'
        
        document.getElementById('btn').addEventListener('click', function() {
            console.log('Event this:', this.tagName); // BUTTON
        });
    </script>
</body>
</html>`
    }
  ]
};