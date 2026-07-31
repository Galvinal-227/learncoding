export const chapter = {
  slug: "html-quiz",
  title: "Quiz Akhir HTML",
  description: "Uji pemahamanmu tentang HTML dengan quiz komprehensif.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 30,
  prerequisites: ["html-best-practices"],
  tags: ["html", "quiz", "evaluasi"],
  order: 29,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Quiz Akhir HTML

Uji pemahamanmu dengan 15 soal berikut. Jawab semua pertanyaan untuk mengukur kemampuanmu.

---

**1. Apa kepanjangan dari HTML?**
A. HyperText Markup Language
B. High Tech Modern Language
C. Hyper Transfer Markup Language

---

**2. Elemen mana yang mendefinisikan judul halaman yang muncul di tab browser?**
A. <meta>
B. <head>
C. <title>

---

**3. Apa fungsi atribut alt pada gambar?**
A. Mempercepat loading
B. Teks alternatif untuk aksesibilitas
C. Mengubah ukuran gambar

---

**4. Mana yang benar untuk membuat tautan yang terbuka di tab baru?**
A. <a href="url" new="true">
B. <a href="url" target="_blank">
C. <a href="url" tab="new">

---

**5. Elemen mana untuk membuat list bernomor?**
A. <ul>
B. <ol>
C. <dl>

---

**6. Bagaimana cara membuat komentar di HTML?**
A. // komentar
B. /* komentar */
C. <!-- komentar -->

---

**7. Manakah elemen semantik?**
A. <div>
B. <span>
C. <article>

---

**8. Atribut apa yang membuat input wajib diisi?**
A. mandatory
B. required
C. validate

---

**9. Berapa banyak <h1> yang ideal dalam satu halaman?**
A. Sebanyak mungkin
B. Satu
C. Tiga

---

**10. Elemen apa untuk menyematkan video YouTube?**
A. <video>
B. <embed>
C. <iframe>

---

**11. Apa fungsi <!DOCTYPE html>?**
A. Tag HTML pertama
B. Deklarasi bahwa ini dokumen HTML5
C. Link ke CSS

---

**12. Mana format gambar vektor?**
A. JPEG
B. PNG
C. SVG

---

**13. Bagaimana membuat dropdown select?**
A. <input type="dropdown">
B. <select> dengan <option>
C. <list>

---

**14. Atribut apa untuk menggabungkan kolom tabel?**
A. rowspan
B. colspan
C. cellspan

---

**15. Apa elemen untuk grouping form?**
A. <group>
B. <div>
C. <fieldset>
  `,

  quiz: [
    { question: "Apa kepanjangan HTML?", options: ["HyperText Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correctAnswer: 0 },
    { question: "Elemen untuk judul tab browser?", options: ["<meta>", "<head>", "<title>", "<header>"], correctAnswer: 2 },
    { question: "Fungsi atribut alt?", options: ["Mempercepat loading", "Teks alternatif aksesibilitas", "Mengubah ukuran", "Menambah link"], correctAnswer: 1 },
    { question: "Tautan tab baru yang benar?", options: ["<a new='true'>", "<a target='_blank'>", "<a tab='new'>", "<a open='new'>"], correctAnswer: 1 },
    { question: "Elemen list bernomor?", options: ["<ul>", "<ol>", "<dl>", "<list>"], correctAnswer: 1 },
    { question: "Komentar HTML?", options: ["// komentar", "/* komentar */", "<!-- komentar -->", "# komentar"], correctAnswer: 2 },
    { question: "Elemen semantik?", options: ["<div>", "<span>", "<article>", "<br>"], correctAnswer: 2 },
    { question: "Input wajib diisi?", options: ["mandatory", "required", "validate", "must"], correctAnswer: 1 },
    { question: "Ideal <h1> per halaman?", options: ["Sebanyak mungkin", "Satu", "Tiga", "Tidak terbatas"], correctAnswer: 1 },
    { question: "Elemen embed YouTube?", options: ["<video>", "<embed>", "<iframe>", "<youtube>"], correctAnswer: 2 },
    { question: "Fungsi DOCTYPE?", options: ["Tag HTML", "Deklarasi HTML5", "Link CSS", "Script JS"], correctAnswer: 1 },
    { question: "Format vektor?", options: ["JPEG", "PNG", "SVG", "GIF"], correctAnswer: 2 },
    { question: "Dropdown select?", options: ["<input dropdown>", "<select> + <option>", "<list>", "<dropdown>"], correctAnswer: 1 },
    { question: "Gabung kolom tabel?", options: ["rowspan", "colspan", "cellspan", "span"], correctAnswer: 1 },
    { question: "Grouping form?", options: ["<group>", "<div>", "<fieldset>", "<form-group>"], correctAnswer: 2 }
  ],

  codeExamples: []
};