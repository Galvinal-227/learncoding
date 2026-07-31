export const chapter = {
  slug: "dom-dom-performance",
  title: "Performa DOM",
  description: "Optimasi manipulasi DOM untuk performa terbaik.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["dom-manipulating-elements"],
  tags: ["dom", "performa", "optimasi", "reflow"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Performa DOM Penting?

DOM manipulation adalah operasi **paling lambat** di JavaScript. Setiap perubahan bisa trigger **reflow** (layout ulang) dan **repaint**.

## Reflow vs Repaint

- **Reflow**: Menghitung ulang layout (ukuran, posisi) - **MAHAL**
- **Repaint**: Menggambar ulang piksel (warna, visibility) - lebih murah

## 1. Batch DOM Changes

\`\`\`javascript
// ❌ Buruk - trigger reflow 3x
el.style.width = '100px';
el.style.height = '100px';
el.style.margin = '10px';

// ✅ Baik - tambah class (1 reflow)
el.classList.add('size-large');
\`\`\`

## 2. Gunakan DocumentFragment

\`\`\`javascript
// ❌ Buruk - reflow setiap append
items.forEach(item => {
    list.appendChild(item);
});

// ✅ Baik - batch dengan fragment
const fragment = document.createDocumentFragment();
items.forEach(item => fragment.appendChild(item));
list.appendChild(fragment); // 1 reflow
\`\`\`

## 3. Cache DOM Queries

\`\`\`javascript
// ❌ Buruk - query berulang
for (let i = 0; i < 100; i++) {
    document.getElementById('box').style.left = i + 'px';
}

// ✅ Baik - cache reference
const box = document.getElementById('box');
for (let i = 0; i < 100; i++) {
    box.style.left = i + 'px';
}
\`\`\`

## 4. Gunakan requestAnimationFrame

\`\`\`javascript
// ✅ Batch visual updates di frame berikutnya
requestAnimationFrame(() => {
    box.style.transform = 'translateX(100px)';
    box.style.opacity = '0.5';
});
\`\`\`

## 5. Hindari Paksa Reflow

\`\`\`javascript
// ❌ Buruk - baca lalu tulis (layout thrashing)
for (let i = 0; i < items.length; i++) {
    const h = items[i].offsetHeight; // BACA (trigger reflow)
    items[i].style.height = h + 10 + 'px'; // TULIS (trigger reflow)
}

// ✅ Baik - baca dulu semua, tulis kemudian
const heights = [];
for (let i = 0; i < items.length; i++) {
    heights.push(items[i].offsetHeight); // BACA
}
for (let i = 0; i < items.length; i++) {
    items[i].style.height = heights[i] + 10 + 'px'; // TULIS
}
\`\`\`

## 6. Animasi dengan transform & opacity

\`\`\`javascript
// ❌ Buruk - trigger reflow
el.style.left = x + 'px';
el.style.top = y + 'px';

// ✅ Baik - hanya composite
el.style.transform = \`translate(\${x}px, \${y}px)\`;
\`\`\`

## Properti yang Trigger Reflow

\`\`\`
offsetTop, offsetLeft, offsetWidth, offsetHeight
scrollTop, scrollLeft, scrollWidth, scrollHeight
clientTop, clientLeft, clientWidth, clientHeight
getComputedStyle(), getBoundingClientRect()
\`\`\`
  `,

  quiz: [
    { question: "Apa itu reflow?", options: ["Perubahan warna", "Perhitungan ulang layout/posisi elemen", "Animasi", "Error browser"], correctAnswer: 1, explanation: "Reflow adalah proses browser menghitung ulang layout (posisi dan ukuran) elemen. Ini operasi mahal." },
    { question: "Kenapa DocumentFragment lebih baik?", options: ["Lebih cepat parsing", "Batch DOM changes jadi 1 reflow", "Tidak perlu JavaScript", "Hanya untuk Firefox"], correctAnswer: 1 },
    { question: "Properti CSS apa yang tidak trigger reflow?", options: ["width", "height", "transform", "margin"], correctAnswer: 2, explanation: "transform dan opacity hanya trigger composite, bukan layout/reflow. Gunakan ini untuk animasi." }
  ],

  codeExamples: [
    {
      title: "Demo Batch DOM vs Non-Batch",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Performa DOM</title></head>
<body>
    <h1>Performa DOM Demo</h1>
    <button onclick="badWay()">❌ Cara Buruk</button>
    <button onclick="goodWay()">✅ Cara Baik</button>
    <button onclick="clearList()">Clear</button>
    <p id="timer"></p>
    <ul id="list"></ul>
    
    <script>
        const items = Array.from({length: 1000}, (_, i) => \`Item \${i+1}\`);
        
        function badWay() {
            const list = document.getElementById('list');
            const start = performance.now();
            
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li); // Reflow setiap kali!
            });
            
            const end = performance.now();
            document.getElementById('timer').textContent = \`Waktu: \${(end-start).toFixed(2)}ms (Buruk)\`;
        }
        
        function goodWay() {
            const list = document.getElementById('list');
            const start = performance.now();
            const fragment = document.createDocumentFragment();
            
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                fragment.appendChild(li);
            });
            
            list.appendChild(fragment); // 1 reflow!
            
            const end = performance.now();
            document.getElementById('timer').textContent = \`Waktu: \${(end-start).toFixed(2)}ms (Baik)\`;
        }
        
        function clearList() {
            document.getElementById('list').innerHTML = '';
            document.getElementById('timer').textContent = '';
        }
    </script>
</body>
</html>`
    }
  ]
};