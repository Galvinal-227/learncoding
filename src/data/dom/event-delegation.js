export const chapter = {
  slug: "dom-event-delegation",
  title: "Event Delegation",
  description: "Teknik efisien menangani event untuk banyak elemen dengan satu listener.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 12,
  prerequisites: ["dom-event-bubbling-capturing"],
  tags: ["dom", "event", "delegation", "efisien"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Event Delegation?

Teknik menangani event di **parent** untuk semua child, termasuk yang ditambahkan nanti. Memanfaatkan **bubbling**.

## Tanpa Delegasi (❌ Boros)

\`\`\`javascript
// Pasang listener di setiap item
document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', handler);
});
// Item baru tidak punya listener!
\`\`\`

## Dengan Delegasi (✅ Efisien)

\`\`\`javascript
// Satu listener di parent
document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Klik:', e.target.textContent);
    }
});
// Item baru otomatis tertangani!
\`\`\`
  `,

  quiz: [
    { question: "Keuntungan utama event delegation?", options: ["Lebih cepat", "Satu listener untuk banyak elemen, termasuk yang baru", "Tanpa JavaScript", "Hanya untuk klik"], correctAnswer: 1 },
    { question: "Event delegation memanfaatkan?", options: ["Capturing", "Bubbling", "Promise", "Callback"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo Event Delegation",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Delegation Demo</title></head>
<body>
    <h1>To-Do dengan Event Delegation</h1>
    <input id="input" placeholder="Tugas baru...">
    <button id="add">Tambah</button>
    <ul id="list"></ul>
    
    <script>
        const list = document.getElementById('list');
        
        // SATU listener untuk semua (delegasi)
        list.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                e.target.classList.toggle('done');
            }
            if (e.target.tagName === 'BUTTON') {
                e.target.parentElement.remove();
            }
        });
        
        document.getElementById('add').addEventListener('click', () => {
            const text = document.getElementById('input').value.trim();
            if (!text) return;
            const li = document.createElement('li');
            li.innerHTML = \`\${text} <button>✕</button>\`;
            list.appendChild(li);
            document.getElementById('input').value = '';
        });
    </script>
    <style>.done{text-decoration:line-through;color:gray}li{cursor:pointer;padding:5px}button{margin-left:10px}</style>
</body>
</html>`
    }
  ]
};