export const chapter = {
  slug: "javascript-prototypes",
  title: "Prototype & Inheritance",
  description: "Pahami prototype-based inheritance di JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-objects", "javascript-functions"],
  tags: ["javascript", "prototype", "inheritance", "oop"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Prototype?

Setiap object di JavaScript punya **prototype** (kecuali Object.create(null)). Prototype adalah object dari mana ia mewarisi properti.

## __proto__ vs prototype

\`\`\`javascript
const arr = [1, 2, 3];
arr.__proto__ === Array.prototype; // true
arr.__proto__.__proto__ === Object.prototype; // true
\`\`\`

## Prototype Chain

\`\`\`
arr → Array.prototype → Object.prototype → null
fn  → Function.prototype → Object.prototype → null
\`\`\`

## Constructor Function

\`\`\`javascript
function User(nama) {
    this.nama = nama;
}

User.prototype.sapa = function() {
    return \`Halo, \${this.nama}\`;
};

const budi = new User('Budi');
console.log(budi.sapa()); // "Halo, Budi"
\`\`\`

## Inheritance dengan Prototype

\`\`\`javascript
function Admin(nama, role) {
    User.call(this, nama);
    this.role = role;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
\`\`\`

## Object.create()

\`\`\`javascript
const userTemplate = {
    sapa() { return \`Halo, \${this.nama}\`; }
};

const budi = Object.create(userTemplate);
budi.nama = 'Budi';
console.log(budi.sapa()); // "Halo, Budi"
\`\`\`
  `,

  quiz: [
    { question: "Apa yang ada di puncak prototype chain?", options: ["Object.prototype", "null", "Array.prototype", "undefined"], correctAnswer: 1, explanation: "Prototype chain berakhir di null setelah Object.prototype." },
    { question: "Apa beda __proto__ dan prototype?", options: ["Sama", "__proto__ di instance, prototype di constructor", "prototype di instance", "Tidak ada bedanya"], correctAnswer: 1 }
  ]
};