export const chapter = {
  slug: "css-quiz",
  title: "Quiz Akhir CSS",
  description: "Uji pemahamanmu tentang CSS dengan quiz komprehensif.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 30,
  prerequisites: ["css-best-practices"],
  tags: ["css", "quiz", "evaluasi"],
  order: 32,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Quiz Akhir CSS

Uji pemahamanmu dengan 20 soal berikut tentang CSS.

---

**1. Apa kepanjangan CSS?**
A. Cascading Style Sheets
B. Colorful Style System
C. Computer Style Sheets

**2. Properti apa untuk mengubah warna teks?**
A. font-color
B. text-color
C. color

**3. Mana selector class yang benar?**
A. #class
B. .class
C. class

**4. Apa fungsi box-sizing: border-box?**
A. Menambah border di luar
B. Padding dan border termasuk dalam width
C. Menghapus margin

**5. Flexbox untuk layout berapa dimensi?**
A. Satu dimensi
B. Dua dimensi
C. Tiga dimensi

**6. Properti untuk membuat grid?**
A. display: flex
B. display: grid
C. display: table

**7. Unit viewport height?**
A. vh
B. vw
C. vmin

**8. Fungsi clamp() digunakan untuk?**
A. Animasi
B. Nilai responsif dengan batas
C. Warna

**9. Pseudo-class untuk hover?**
A. :click
B. :hover
C. :active

**10. Properti untuk animasi?**
A. @keyframes
B. @animate
C. @motion

**11. z-index berfungsi jika?**
A. display: block
B. position selain static
C. opacity < 1

**12. backdrop-filter digunakan untuk?**
A. Filter gambar
B. Efek pada area di belakang elemen
C. Animasi

**13. Cara import Google Fonts?**
A. @import url()
B. <link> di HTML
C. Keduanya benar

**14. Spesifisitas #id vs .class?**
A. .class lebih tinggi
B. #id lebih tinggi
C. Sama

**15. display: none vs visibility: hidden?**
A. Sama persis
B. none: hilang total; hidden: tetap ambil ruang
C. hidden: hilang total

**16. Properti bayangan elemen?**
A. text-shadow
B. element-shadow
C. box-shadow

**17. CSS Variables didefinisikan dengan?**
A. $variable
B. --variable
C. @variable

**18. Fungsi repeat() di grid?**
A. Mengulang animasi
B. Mengulang definisi kolom/baris
C. Loop JavaScript

**19. gap di flexbox untuk?**
A. Jarak antar item
B. Border
C. Padding

**20. Urutan prioritas CSS tertinggi?**
A. External stylesheet
B. Inline style
C. Browser default
  `,

  quiz: [
    { question: "Apa kepanjangan CSS?", options: ["Cascading Style Sheets", "Colorful Style System", "Computer Style Sheets", "Creative Style Script"], correctAnswer: 0 },
    { question: "Properti untuk mengubah warna teks?", options: ["font-color", "text-color", "color", "text-style"], correctAnswer: 2 },
    { question: "Selector class yang benar?", options: ["#class", ".class", "class", "@class"], correctAnswer: 1 },
    { question: "Fungsi box-sizing: border-box?", options: ["Menambah border", "Padding dan border termasuk dalam width", "Menghapus margin", "Mengubah warna border"], correctAnswer: 1 },
    { question: "Flexbox untuk layout berapa dimensi?", options: ["Satu dimensi", "Dua dimensi", "Tiga dimensi", "Semua dimensi"], correctAnswer: 0 },
    { question: "Properti untuk membuat grid?", options: ["display: flex", "display: grid", "display: table", "display: block"], correctAnswer: 1 },
    { question: "Unit viewport height?", options: ["vh", "vw", "vmin", "vmax"], correctAnswer: 0 },
    { question: "Fungsi clamp() digunakan untuk?", options: ["Animasi", "Nilai responsif dengan batas", "Warna", "Grid"], correctAnswer: 1 },
    { question: "Pseudo-class untuk hover?", options: [":click", ":hover", ":active", ":focus"], correctAnswer: 1 },
    { question: "Properti untuk animasi?", options: ["@keyframes", "@animate", "@motion", "@transition"], correctAnswer: 0 },
    { question: "z-index berfungsi jika?", options: ["display: block", "position selain static", "opacity < 1", "Semua benar"], correctAnswer: 1 },
    { question: "backdrop-filter digunakan untuk?", options: ["Filter gambar", "Efek pada area di belakang elemen", "Animasi", "Border"], correctAnswer: 1 },
    { question: "Cara import Google Fonts?", options: ["@import url()", "<link> di HTML", "Keduanya benar", "Tidak bisa"], correctAnswer: 2 },
    { question: "Spesifisitas #id vs .class?", options: [".class lebih tinggi", "#id lebih tinggi", "Sama", "Tergantung browser"], correctAnswer: 1 },
    { question: "display: none vs visibility: hidden?", options: ["Sama persis", "none: hilang total; hidden: tetap ambil ruang", "hidden: hilang total", "none: lebih cepat"], correctAnswer: 1 },
    { question: "Properti bayangan elemen?", options: ["text-shadow", "element-shadow", "box-shadow", "shadow"], correctAnswer: 2 },
    { question: "CSS Variables didefinisikan dengan?", options: ["$variable", "--variable", "@variable", "var:"], correctAnswer: 1 },
    { question: "Fungsi repeat() di grid?", options: ["Mengulang animasi", "Mengulang definisi kolom/baris", "Loop JavaScript", "Background repeat"], correctAnswer: 1 },
    { question: "gap di flexbox untuk?", options: ["Jarak antar item", "Border", "Padding", "Margin luar"], correctAnswer: 0 },
    { question: "Urutan prioritas CSS tertinggi?", options: ["External stylesheet", "Inline style", "Browser default", "!important"], correctAnswer: 3 }
  ],

  codeExamples: []
};