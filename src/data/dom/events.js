export const chapter = {
  slug: "dom-events",
  title: "Event & Event Listener",
  description: "Pelajari cara menangani interaksi pengguna dengan event listener.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["dom-selecting-elements"],
  tags: ["dom", "event", "click", "listener"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Event?

Event adalah **sinyal** bahwa sesuatu telah terjadi (klik, input, scroll, load, dll).

## Menambahkan Event Listener

\`\`\`javascript
// Cara modern (rekomendasi)
element.addEventListener('click', function(event) {
    console.log('Diklik!', event.target);
});

// Bisa banyak listener
element.addEventListener('click', handler1);
element.addEventListener('click', handler2);
\`\`\`

## Event Object

\`\`\`javascript
element.addEventListener('click', (e) => {
    console.log(e.target);       // Elemen yang diklik
    console.log(e.currentTarget); // Elemen dengan listener
    console.log(e.type);          // 'click'
    console.log(e.clientX, e.clientY); // Posisi mouse
    e.preventDefault();  // Cegah aksi default (link, submit)
    e.stopPropagation(); // Hentikan bubbling
});
\`\`\`

## Event Types Penting

### Mouse
\`\`\`javascript
'click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove'
\`\`\`

### Keyboard
\`\`\`javascript
'keydown', 'keyup', 'keypress'
// e.key, e.code, e.ctrlKey, e.shiftKey
\`\`\`

### Form
\`\`\`javascript
'submit', 'input', 'change', 'focus', 'blur'
\`\`\`

### Document/Window
\`\`\`javascript
'DOMContentLoaded', 'load', 'scroll', 'resize'
\`\`\`

## Menghapus Event Listener

\`\`\`javascript
element.removeEventListener('click', handler);
// Handler harus reference yang sama!
\`\`\`
  `,

  quiz: [
    { question: "Cara menambah event listener yang benar?", options: ["el.onclick = fn", "el.addEventListener('click', fn)", "el.click(fn)", "el.listen('click', fn)"], correctAnswer: 1 },
    { question: "Apa fungsi preventDefault()?", options: ["Hentikan event", "Cegah aksi default browser", "Hapus element", "Stop propagation"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo Event Listener",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Event Demo</title>
<style>.box{width:200px;height:200px;background:#e3f2fd;display:flex;align-items:center;justify-content:center;margin:20px;border-radius:8px;transition:0.3s;cursor:pointer}.box:hover{background:#bbdefb}</style>
</head>
<body>
    <h1>Demo Event</h1>
    <div class="box" id="box">Klik / Hover / Ketik</div>
    <p id="log"></p>
    
    <script>
        const box = document.getElementById('box');
        const log = document.getElementById('log');
        
        box.addEventListener('click', (e) => {
            log.textContent = \`Klik di (\${e.clientX}, \${e.clientY})\`;
        });
        
        box.addEventListener('mouseover', () => {
            box.textContent = 'Mouse di atas!';
        });
        
        box.addEventListener('mouseout', () => {
            box.textContent = 'Klik / Hover / Ketik';
        });
        
        document.addEventListener('keydown', (e) => {
            box.textContent = \`Tombol: \${e.key}\`;
        });
    </script>
</body>
</html>`
    }
  ]
};