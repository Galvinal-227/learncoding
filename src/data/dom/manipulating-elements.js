export const chapter = {
  slug: "dom-manipulating-elements",
  title: "Manipulasi Elemen",
  description: "Pelajari cara membuat, mengubah, dan menghapus elemen DOM.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["dom-selecting-elements"],
  tags: ["dom", "manipulasi", "createElement", "remove"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Mengubah Konten

\`\`\`javascript
el.textContent = 'Teks baru';        // Hanya teks (aman)
el.innerHTML = '<strong>HTML</strong>'; // Parse HTML (hati-hati XSS!)
el.innerText = 'Teks terlihat';       // Seperti textContent + CSS
\`\`\`

## Mengubah Atribut

\`\`\`javascript
el.setAttribute('class', 'active');
el.getAttribute('href');
el.removeAttribute('disabled');
el.id = 'newId';
el.src = 'gambar.jpg';
el.href = 'https://example.com';
\`\`\`

## Mengubah Style

\`\`\`javascript
el.style.color = 'red';
el.style.backgroundColor = '#333';
el.style.fontSize = '20px';
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('dark');
el.classList.contains('active'); // true/false
\`\`\`

## Membuat Elemen Baru

\`\`\`javascript
const div = document.createElement('div');
div.textContent = 'Elemen baru';
div.className = 'card';
parent.appendChild(div);
\`\`\`

## Menghapus Elemen

\`\`\`javascript
el.remove();
parent.removeChild(el);
\`\`\`

## Insert HTML

\`\`\`javascript
el.insertAdjacentHTML('beforeend', '<p>Baru</p>');
// beforebegin, afterbegin, beforeend, afterend
\`\`\`
  `,

  quiz: [
    { question: "Apa beda textContent dan innerHTML?", options: ["Sama", "textContent: teks aman; innerHTML: parse HTML", "innerHTML lebih cepat", "textContent tidak didukung"], correctAnswer: 1 },
    { question: "Method untuk menambah class?", options: ["el.class = 'x'", "el.classList.add('x')", "el.addClass('x')", "el.style.class = 'x'"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo Manipulasi DOM",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Manipulasi DOM</title></head>
<body>
    <h1>To-Do Sederhana</h1>
    <input id="input" placeholder="Tambah tugas...">
    <button id="addBtn">Tambah</button>
    <ul id="list"></ul>
    
    <script>
        const input = document.getElementById('input');
        const btn = document.getElementById('addBtn');
        const list = document.getElementById('list');
        
        btn.addEventListener('click', () => {
            const text = input.value.trim();
            if (!text) return;
            
            const li = document.createElement('li');
            li.textContent = text;
            
            const delBtn = document.createElement('button');
            delBtn.textContent = '✕';
            delBtn.onclick = () => li.remove();
            
            li.appendChild(delBtn);
            list.appendChild(li);
            input.value = '';
        });
    </script>
</body>
</html>`
    }
  ]
};