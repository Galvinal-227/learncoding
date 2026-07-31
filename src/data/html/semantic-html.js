export const chapter = {
  slug: "html-semantic-html",
  title: "HTML Semantik",
  description: "Pelajari elemen HTML semantik untuk membuat struktur halaman yang bermakna dan accessible.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["html-elements", "html-accessibility-basics"],
  tags: ["html", "semantik", "struktur", "aksesibilitas"],
  order: 20,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu HTML Semantik?

HTML semantik adalah penggunaan elemen HTML yang **menjelaskan makna** kontennya, bukan hanya tampilannya. Elemen semantik memberi tahu browser dan developer tentang arti konten tersebut.

## Mengapa HTML Semantik Penting?

1. **Aksesibilitas** - Screen reader memahami struktur halaman
2. **SEO** - Mesin pencari lebih mudah mengindeks konten
3. **Kode lebih bersih** - Lebih mudah dibaca dan di-maintain
4. **Konsistensi** - Struktur standar di seluruh website

## Elemen Semantik Utama

### &lt;header&gt;
Bagian atas halaman atau section.

### &lt;nav&gt;
Blok navigasi utama.

### &lt;main&gt;
Konten utama halaman (hanya satu per halaman).

### &lt;article&gt;
Konten yang berdiri sendiri.

### &lt;section&gt;
Pengelompokan tematik konten.

### &lt;aside&gt;
Konten sampingan (sidebar, info tambahan).

### &lt;footer&gt;
Bagian bawah halaman atau section.
  `,

  quiz: [
    {
      question: "Apa fungsi elemen &lt;main&gt;?",
      options: [
        "Header halaman",
        "Konten utama unik halaman",
        "Navigasi",
        "Sidebar"
      ],
      correctAnswer: 1
    },
    {
      question: "Kapan menggunakan &lt;article&gt; vs &lt;section&gt;?",
      options: [
        "Selalu gunakan <article>",
        "<article> untuk konten independen, <section> untuk pengelompokan tematik",
        "Tidak ada perbedaan",
        "Tergantung ukuran konten"
      ],
      correctAnswer: 1
    }
  ],

  codeExamples: []
};