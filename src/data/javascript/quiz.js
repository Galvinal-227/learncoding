export const chapter = {
  slug: "javascript-quiz",
  title: "Quiz Akhir JavaScript",
  description: "Uji pemahamanmu tentang JavaScript dengan quiz komprehensif.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 30,
  prerequisites: ["javascript-best-practices"],
  tags: ["javascript", "quiz", "evaluasi"],
  order: 36,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Quiz Akhir JavaScript

Uji pemahamanmu dengan 25 soal berikut tentang JavaScript.

---

**1. Apa output dari typeof null?**
A. "null"
B. "object"
C. "undefined"

**2. Mana yang benar untuk deklarasi variabel yang tidak bisa di-reassign?**
A. var
B. let
C. const

**3. Apa hasil dari 5 + '5'?**
A. 10
B. '55'
C. Error

**4. Method array untuk membuat array baru hasil transformasi?**
A. forEach()
B. map()
C. filter()

**5. Apa 3 state Promise?**
A. Start, Run, Stop
B. Pending, Fulfilled, Rejected
C. Open, Close, Error

**6. Keyword untuk menangkap error?**
A. try...catch
B. if...else
C. begin...rescue

**7. Simbol untuk strict equality?**
A. ==
B. =
C. ===

**8. Fungsi yang mengingat variabel dari outer scope disebut?**
A. Callback
B. Closure
C. Promise

**9. Method untuk menambah item di akhir array?**
A. unshift()
B. push()
C. append()

**10. Apa output: console.log(typeof [])?**
A. "array"
B. "object"
C. "undefined"

**11. Async/Await adalah syntax sugar di atas?**
A. Callback
B. Promise
C. setTimeout

**12. Apa output: [1, 2, 3].filter(n => n > 1)?**
A. [1]
B. [2, 3]
C. [1, 2, 3]

**13. Apa fungsi spread operator (...)?**
A. Menggabungkan array/object
B. Menghapus item
C. Mengurutkan

**14. Event Loop memproses mana lebih dulu?**
A. Macrotask
B. Microtask
C. Bersamaan

**15. Arrow function punya this sendiri?**
A. Ya
B. Tidak, mengambil dari parent
C. Tergantung mode

**16. Method untuk konversi object ke JSON string?**
A. JSON.parse()
B. JSON.stringify()
C. JSON.convert()

**17. Set menyimpan nilai?**
A. Duplikat
B. Unik
C. Berpasangan

**18. Map vs Object: key Map bisa berupa?**
A. Hanya string
B. Semua tipe data
C. Hanya number

**19. let dan const bersifat?**
A. Function-scoped
B. Block-scoped
C. Global-scoped

**20. Method untuk menghapus item terakhir array?**
A. shift()
B. pop()
C. remove()

**21. Template literal menggunakan simbol?**
A. ' '
B. " "
C. \` \`

**22. Default parameter: function sapa(nama = 'User')?**
A. Error
B. 'User' adalah default jika tidak diisi
C. Wajib diisi

**23. Apa output: Boolean('')?**
A. true
B. false
C. undefined

**24. Destructuring object: const { nama } = user?**
A. Error
B. Mengambil properti nama dari user
C. Membuat object baru

**25. localStorage data tetap ada setelah browser ditutup?**
A. Ya
B. Tidak
C. Hanya di Chrome
  `,

  quiz: [
    { question: "Apa output dari typeof null?", options: ["'null'", "'object'", "'undefined'", "'boolean'"], correctAnswer: 1 },
    { question: "Mana untuk deklarasi variabel yang tidak bisa di-reassign?", options: ["var", "let", "const", "semua bisa"], correctAnswer: 2 },
    { question: "Apa hasil dari 5 + '5'?", options: ["10", "'55'", "Error", "25"], correctAnswer: 1 },
    { question: "Method array untuk membuat array baru hasil transformasi?", options: ["forEach()", "map()", "filter()", "reduce()"], correctAnswer: 1 },
    { question: "Apa 3 state Promise?", options: ["Start, Run, Stop", "Pending, Fulfilled, Rejected", "Open, Close, Error", "Begin, Wait, Done"], correctAnswer: 1 },
    { question: "Keyword untuk menangkap error?", options: ["if...else", "try...catch", "begin...rescue", "error...handle"], correctAnswer: 1 },
    { question: "Simbol untuk strict equality?", options: ["==", "=", "===", "!="], correctAnswer: 2 },
    { question: "Fungsi yang mengingat variabel dari outer scope disebut?", options: ["Callback", "Closure", "Promise", "Recursion"], correctAnswer: 1 },
    { question: "Method untuk menambah item di akhir array?", options: ["unshift()", "push()", "append()", "add()"], correctAnswer: 1 },
    { question: "Apa output: console.log(typeof [])?", options: ["'array'", "'object'", "'undefined'", "'list'"], correctAnswer: 1 },
    { question: "Async/Await adalah syntax sugar di atas?", options: ["Callback", "Promise", "setTimeout", "Generator"], correctAnswer: 1 },
    { question: "Apa output: [1,2,3].filter(n => n>1)?", options: ["[1]", "[2,3]", "[1,2,3]", "[]"], correctAnswer: 1 },
    { question: "Apa fungsi spread operator (...)?", options: ["Menggabungkan array/object", "Menghapus item", "Mengurutkan", "Memfilter"], correctAnswer: 0 },
    { question: "Event Loop memproses mana lebih dulu?", options: ["Macrotask", "Microtask", "Bersamaan", "Tergantung"], correctAnswer: 1 },
    { question: "Arrow function punya this sendiri?", options: ["Ya", "Tidak, mengambil dari parent", "Tergantung mode", "Hanya di Node.js"], correctAnswer: 1 },
    { question: "Method konversi object ke JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.encode()"], correctAnswer: 1 },
    { question: "Set menyimpan nilai?", options: ["Duplikat", "Unik", "Berpasangan", "Terurut"], correctAnswer: 1 },
    { question: "Key Map bisa berupa?", options: ["Hanya string", "Semua tipe data", "Hanya number", "Hanya object"], correctAnswer: 1 },
    { question: "let dan const bersifat?", options: ["Function-scoped", "Block-scoped", "Global-scoped", "Dynamic-scoped"], correctAnswer: 1 },
    { question: "Method untuk menghapus item terakhir array?", options: ["shift()", "pop()", "remove()", "slice()"], correctAnswer: 1 },
    { question: "Template literal menggunakan simbol?", options: ["' '", "\" \"", "` `", "/ /"], correctAnswer: 2 },
    { question: "Default parameter: function sapa(nama='User')?", options: ["Error", "Default jika tidak diisi", "Wajib diisi", "Hanya di ES6"], correctAnswer: 1 },
    { question: "Apa output: Boolean('')?", options: ["true", "false", "undefined", "null"], correctAnswer: 1 },
    { question: "Destructuring object: const {nama}=user?", options: ["Error", "Mengambil properti nama", "Membuat object baru", "Menghapus properti"], correctAnswer: 1 },
    { question: "localStorage data tetap ada setelah browser ditutup?", options: ["Ya", "Tidak", "Hanya di Chrome", "Hanya di Firefox"], correctAnswer: 0 }
  ],

  codeExamples: []
};