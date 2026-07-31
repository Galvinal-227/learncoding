export const chapter = {
  slug: "javascript-classes",
  title: "Class (ES6)",
  description: "Pelajari OOP di JavaScript dengan class ES6.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-prototypes"],
  tags: ["javascript", "class", "oop", "es6"],
  order: 14,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Class di JavaScript

Class adalah **syntax sugar** di atas prototype-based inheritance.

## Class Declaration

\`\`\`javascript
class User {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    
    sapa() {
        return \`Halo, saya \${this.nama}\`;
    }
    
    get info() {
        return \`\${this.nama}, \${this.umur} tahun\`;
    }
    
    static create(nama) {
        return new User(nama, 0);
    }
}
\`\`\`

## Inheritance (extends)

\`\`\`javascript
class Admin extends User {
    constructor(nama, umur, role) {
        super(nama, umur);
        this.role = role;
    }
    
    sapa() {
        return \`\${super.sapa()} - Admin\`;
    }
}
\`\`\`

## Private Fields (#)

\`\`\`javascript
class BankAccount {
    #saldo = 0; // Private field
    
    setor(jumlah) { this.#saldo += jumlah; }
    cekSaldo() { return this.#saldo; }
}
\`\`\`

## Static Methods & Properties

\`\`\`javascript
class Config {
    static APP_NAME = "MyApp";
    static getVersion() { return "1.0.0"; }
}
\`\`\`
  `,

  quiz: [
    { question: "Apa itu class di JavaScript?", options: ["Tipe data baru", "Syntax sugar di atas prototype", "Sama seperti Java class", "Function biasa"], correctAnswer: 1 },
    { question: "Apa fungsi super() di constructor child class?", options: ["Membuat method baru", "Memanggil constructor parent", "Membuat property", "Menghapus instance"], correctAnswer: 1 }
  ]
};