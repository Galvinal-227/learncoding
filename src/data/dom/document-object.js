export const chapter = {
  slug: "dom-document-object",
  title: "Document Object",
  description: "Pelajari properti dan method penting dari object document.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["dom-introduction"],
  tags: ["dom", "document", "object", "properti"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Document Object?

\`document\` adalah object global yang merepresentasikan seluruh halaman web. Ini adalah **entry point** ke DOM tree.

## Properti Penting

\`\`\`javascript
document.title;           // Judul halaman (tab browser)
document.head;            // Elemen <head>
document.body;            // Elemen <body>
document.documentElement; // Elemen <html>
document.URL;             // URL halaman saat ini
document.domain;          // Domain halaman
document.forms;           // Semua form di halaman
document.images;          // Semua gambar
document.links;           // Semua tautan
document.cookie;          // Baca/tulis cookie
\`\`\`

## Method Penting

\`\`\`javascript
// Mencari elemen
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('div');

// Membuat elemen
document.createElement('div');
document.createTextNode('teks');

// Menulis (hindari!)
document.write('teks'); // ⚠️ Jangan dipakai!
\`\`\`

## document.title

\`\`\`javascript
console.log(document.title); // "Judul Halaman"
document.title = 'Judul Baru'; // Update tab browser
\`\`\`

## document.body

\`\`\`javascript
document.body.style.background = '#f5f5f5';
document.body.classList.add('dark-mode');
\`\`\`

## document.readyState

\`\`\`javascript
console.log(document.readyState);
// 'loading' → masih parsing
// 'interactive' → HTML selesai, resource belum
// 'complete' → semua selesai

document.addEventListener('readystatechange', () => {
    console.log(document.readyState);
});
\`\`\`
  `,

  quiz: [
    { question: "Object apa yang jadi entry point ke DOM?", options: ["window", "document", "body", "html"], correctAnswer: 1, explanation: "document adalah object utama untuk mengakses dan memanipulasi DOM tree." },
    { question: "Bagaimana cara mengubah judul tab browser?", options: ["window.title = 'x'", "document.title = 'x'", "body.title = 'x'", "meta.title = 'x'"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo Document Object",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Judul Asli</title></head>
<body>
    <h1>Document Object Demo</h1>
    <button onclick="ubahJudul()">Ubah Judul</button>
    <button onclick="ubahBackground()">Ubah Background</button>
    <p id="info"></p>
    
    <script>
        const info = document.getElementById('info');
        info.textContent = \`URL: \${document.URL}\\nTitle: \${document.title}\\nReadyState: \${document.readyState}\`;
        
        function ubahJudul() {
            document.title = 'Judul Diubah! 🎉';
            info.textContent += '\\n✅ Judul diubah!';
        }
        
        function ubahBackground() {
            document.body.style.background = '#e3f2fd';
            info.textContent += '\\n✅ Background diubah!';
        }
    </script>
</body>
</html>`
    }
  ]
};