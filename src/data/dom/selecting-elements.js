export const chapter = {
  slug: "dom-selecting-elements",
  title: "Mencari Elemen",
  description: "Kuasai cara mencari dan memilih elemen HTML dengan JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["dom-introduction"],
  tags: ["dom", "selector", "querySelector", "element"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Method Pencarian Elemen

### getElementById()
\`\`\`javascript
const el = document.getElementById('judul');
// Mengembalikan 1 elemen atau null
\`\`\`

### querySelector() (Paling Fleksibel)
\`\`\`javascript
const el = document.querySelector('.card');        // Class
const el = document.querySelector('#main');         // ID
const el = document.querySelector('div.card');      // Tag + class
const el = document.querySelector('[data-id="1"]'); // Atribut
// Mengembalikan 1 elemen pertama atau null
\`\`\`

### querySelectorAll()
\`\`\`javascript
const cards = document.querySelectorAll('.card');
// Mengembalikan NodeList (bisa di-loop)
cards.forEach(card => console.log(card));
\`\`\`

### getElementsByClassName()
\`\`\`javascript
const items = document.getElementsByClassName('item');
// HTMLCollection (live - otomatis update)
\`\`\`

### getElementsByTagName()
\`\`\`javascript
const divs = document.getElementsByTagName('div');
\`\`\`

## Perbandingan Method

| Method | Return | Live? | Bisa CSS Selector? |
|--------|--------|-------|-------------------|
| getElementById | Element/null | - | Tidak |
| querySelector | Element/null | Tidak | ✅ Ya |
| querySelectorAll | NodeList | Tidak | ✅ Ya |
| getElementsByClassName | HTMLCollection | ✅ Ya | Tidak |
| getElementsByTagName | HTMLCollection | ✅ Ya | Tidak |

## Tips

\`\`\`javascript
// ✅ querySelector untuk fleksibilitas
const el = document.querySelector('.nav .active');

// ✅ Cek null sebelum pakai
const btn = document.querySelector('#submitBtn');
if (btn) btn.addEventListener('click', handleSubmit);
\`\`\`
  `,

  quiz: [
    { question: "Apa return value querySelectorAll()?", options: ["Array", "NodeList", "HTMLCollection", "Element"], correctAnswer: 1 },
    { question: "Apa beda querySelector dan querySelectorAll?", options: ["Tidak ada beda", "Selector: 1 elemen; SelectorAll: semua", "SelectorAll lebih cepat", "Selector hanya untuk class"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo Selektor DOM",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Selektor DOM</title></head>
<body>
    <h1 id="title">Judul</h1>
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    
    <script>
        // ID
        const title = document.getElementById('title');
        console.log('ID:', title.textContent);
        
        // Class (semua)
        const cards = document.querySelectorAll('.card');
        console.log('Jumlah card:', cards.length);
        cards.forEach((card, i) => {
            card.textContent += ' - Diupdate!';
            card.style.background = i % 2 ? '#e0e0e0' : '#f5f5f5';
        });
        
        // Selector kompleks
        const firstCard = document.querySelector('div.card');
        firstCard.style.border = '2px solid blue';
    </script>
</body>
</html>`
    }
  ]
};