export const chapter = {
  slug: "dom-introduction",
  title: "Pengenalan DOM",
  description: "Pelajari apa itu DOM dan bagaimana JavaScript berinteraksi dengan halaman web.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["dom", "javascript", "browser", "html"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu DOM?

**DOM (Document Object Model)** adalah representasi **struktur pohon (tree)** dari dokumen HTML. Setiap elemen, atribut, dan teks menjadi **node** yang bisa dimanipulasi dengan JavaScript.

## HTML → DOM Tree

\`\`\`html
<!DOCTYPE html>
<html>
<head><title>Judul</title></head>
<body>
    <h1>Halo</h1>
    <p>Paragraf</p>
</body>
</html>
\`\`\`

\`\`\`
document
  └── html
       ├── head
       │    └── title
       │         └── "Judul"
       └── body
            ├── h1
            │    └── "Halo"
            └── p
                 └── "Paragraf"
\`\`\`

## Kenapa DOM Penting?

- ✅ JavaScript bisa mengubah konten HTML
- ✅ JavaScript bisa mengubah atribut
- ✅ JavaScript bisa mengubah style CSS
- ✅ JavaScript bisa menghapus/menambah elemen
- ✅ JavaScript bisa bereaksi ke event (klik, input)
  `,

  quiz: [
    { question: "Apa kepanjangan DOM?", options: ["Document Object Model", "Data Object Module", "Document Orientation Model", "Dynamic Object Method"], correctAnswer: 0 },
    { question: "DOM adalah representasi dari?", options: ["Database", "Struktur pohon HTML", "CSS", "JavaScript engine"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "DOM Pertama",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>DOM Intro</title></head>
<body>
    <h1 id="judul">Judul Asli</h1>
    <p class="teks">Paragraf pertama</p>
    
    <script>
        // Akses DOM
        console.log(document.title);
        console.log(document.getElementById('judul').textContent);
        
        // Ubah DOM
        document.getElementById('judul').textContent = 'Judul Diubah!';
        document.querySelector('.teks').style.color = 'blue';
    </script>
</body>
</html>`
    }
  ]
};