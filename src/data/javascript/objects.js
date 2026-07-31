export const chapter = {
  slug: "javascript-objects",
  title: "Object",
  description: "Kuasai object di JavaScript: membuat, mengakses, memanipulasi, dan method-method penting.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-data-types"],
  tags: ["javascript", "object", "properti", "method"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Object?

Object adalah kumpulan **key-value pairs** (properti). Key adalah string (atau Symbol), value bisa tipe data apa pun.

## Membuat Object

### Object Literal (Paling Umum)
\`\`\`javascript
const user = {
    nama: "Budi Santoso",
    umur: 25,
    email: "budi@email.com",
    isActive: true
};
\`\`\`

### Constructor
\`\`\`javascript
const user = new Object();
user.nama = "Budi";
user.umur = 25;
\`\`\`

### Object.create()
\`\`\`javascript
const template = { sapa: function() { return "Halo!"; } };
const user = Object.create(template);
user.nama = "Budi";
\`\`\`

## Mengakses Properti

### Dot Notation
\`\`\`javascript
console.log(user.nama);  // "Budi"
console.log(user.umur);  // 25
\`\`\`

### Bracket Notation
\`\`\`javascript
console.log(user["nama"]);  // "Budi"

const key = "email";
console.log(user[key]);     // "budi@email.com"
\`\`\`

### Optional Chaining
\`\`\`javascript
console.log(user?.alamat?.kota); // undefined (tidak error)
\`\`\`

## Menambah & Menghapus Properti

\`\`\`javascript
// Tambah
user.kota = "Jakarta";
user["nomorHP"] = "08123456789";

// Hapus
delete user.kota;
\`\`\`

## Object Methods (ES6 Shorthand)

\`\`\`javascript
const user = {
    nama: "Budi",
    sapa() {  // Shorthand method
        return \`Halo, saya \${this.nama}\`;
    },
    perkenalan: function() {  // Cara lama
        return \`Nama saya \${this.nama}\`;
    }
};
\`\`\`

## Object Destructuring

\`\`\`javascript
const user = { nama: "Budi", umur: 25, email: "budi@email.com" };

// Destructure
const { nama, umur } = user;
console.log(nama, umur); // "Budi", 25

// Dengan alias
const { nama: userName, umur: age } = user;
console.log(userName, age);

// Default value
const { kota = "Jakarta" } = user;
\`\`\`

## Spread & Rest di Object

\`\`\`javascript
// Spread - menggabungkan
const user = { nama: "Budi", umur: 25 };
const userLengkap = { ...user, email: "budi@email.com", umur: 26 };

// Rest - mengambil sisa
const { nama, ...lainnya } = userLengkap;
console.log(nama);     // "Budi"
console.log(lainnya);  // { umur: 26, email: "budi@email.com" }
\`\`\`

## Method Static Object

\`\`\`javascript
// Object.keys()
Object.keys(user); // ["nama", "umur", "email"]

// Object.values()
Object.values(user); // ["Budi", 25, "budi@email.com"]

// Object.entries()
Object.entries(user); // [["nama","Budi"],["umur",25],["email","budi@email.com"]]

// Object.assign()
Object.assign(target, source1, source2);

// Object.freeze() - tidak bisa diubah
const frozen = Object.freeze({ nama: "Budi" });

// Object.seal() - tidak bisa tambah/hapus, tapi bisa ubah
const sealed = Object.seal({ nama: "Budi" });
\`\`\`

## Computed Property Names

\`\`\`javascript
const key = "favoriteColor";
const value = "blue";

const obj = {
    [key]: value,            // "favoriteColor": "blue"
    ["user" + "Name"]: "Budi" // "userName": "Budi"
};
\`\`\`
  `,

  quiz: [
    {
      question: "Apa hasil dari Object.keys({a:1, b:2})?",
      options: ["[1, 2]", "['a', 'b']", "[['a',1], ['b',2]]", "Error"],
      correctAnswer: 1,
      explanation: "Object.keys() mengembalikan array berisi semua key (property names) dari object tersebut."
    },
    {
      question: "Apa perbedaan Object.freeze() dan Object.seal()?",
      options: [
        "Tidak ada perbedaan",
        "freeze: tidak bisa ubah sama sekali; seal: bisa ubah nilai yang ada",
        "seal: lebih aman",
        "freeze: hanya untuk array"
      ],
      correctAnswer: 1,
      explanation: "Object.freeze() mencegah perubahan apapun. Object.seal() mencegah penambahan/penghapusan properti tapi masih bisa mengubah nilai yang sudah ada."
    }
  ],

  codeExamples: [
    {
      title: "Demo Object JavaScript",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Object JS</title></head>
<body>
    <h1>Demo Object JavaScript</h1>
    <p>Buka Console (F12)</p>
    
    <script>
        const user = {
            nama: "Budi Santoso",
            umur: 25,
            email: "budi@email.com",
            hobi: ["Coding", "Membaca"],
            
            sapa() {
                return \`Halo, saya \${this.nama}\`;
            },
            
            get info() {
                return \`\${this.nama} (\${this.umur} thn)\`;
            }
        };
        
        console.log("Object:", user);
        console.log("Keys:", Object.keys(user));
        console.log("Values:", Object.values(user));
        console.log("Entries:", Object.entries(user));
        console.log(user.sapa());
        console.log(user.info);
        
        // Destructuring
        const { nama, umur, ...lainnya } = user;
        console.log("Destructured:", nama, umur, lainnya);
        
        // Spread
        const updated = { ...user, umur: 26, kota: "Jakarta" };
        console.log("Updated:", updated);
    </script>
</body>
</html>`
    }
  ]
};