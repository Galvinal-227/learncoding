export const chapter = {
  slug: "dom-traversing",
  title: "Menjelajah DOM Tree",
  description: "Pelajari cara navigasi antar node di DOM tree: parent, child, sibling.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["dom-document-object"],
  tags: ["dom", "traversing", "parent", "child", "sibling"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Navigasi DOM Tree

Setelah memilih satu elemen, kamu bisa menjelajah ke node sekitarnya.

## Ke Parent

\`\`\`javascript
element.parentNode;        // Parent node (bisa #text)
element.parentElement;     // Parent element (hanya elemen HTML)
element.closest('.card');  // Parent terdekat dengan selector (POWERFUL!)
\`\`\`

## Ke Child

\`\`\`javascript
element.children;          // HTMLCollection of child elements
element.firstElementChild; // Child element pertama
element.lastElementChild;  // Child element terakhir
element.childNodes;        // Semua child nodes (termasuk text, komentar)
element.firstChild;        // Bisa text node
element.lastChild;         // Bisa text node
\`\`\`

## Ke Sibling

\`\`\`javascript
element.nextElementSibling; // Saudara berikutnya (element)
element.previousElementSibling; // Saudara sebelumnya (element)
element.nextSibling;        // Bisa text node
element.previousSibling;    // Bisa text node
\`\`\`

## closest() (Paling Berguna)

Mencari parent terdekat yang cocok dengan selector:

\`\`\`javascript
// Dari tombol, cari card terdekat
button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) card.remove();
});
\`\`\`

## Visualisasi

\`\`\`
┌────────── parentElement ──────────┐
│                                    │
│  ┌ previousElementSibling ┐       │
│  │ <div>Item 1</div>      │       │
│  └────────────────────────┘       │
│  ┌ element ───────────────┐       │
│  │ <div>Item 2</div>      │       │
│  └────────────────────────┘       │
│  ┌ nextElementSibling ────┐       │
│  │ <div>Item 3</div>      │       │
│  └────────────────────────┘       │
│                                    │
│  children: [Item1, Item2, Item3]   │
└────────────────────────────────────┘
\`\`\`

## Perbedaan Node vs Element

\`\`\`javascript
element.children;   // Hanya HTML elements
element.childNodes; // Termasuk text nodes, comments

// Text node muncul dari whitespace/enter di HTML!
\`\`\`
  `,

  quiz: [
    { question: "Method apa untuk mencari parent terdekat dengan CSS selector?", options: ["parentElement", "closest()", "parentNode", "findParent()"], correctAnswer: 1, explanation: "closest(selector) mencari ke atas (parent, grandparent) sampai menemukan elemen yang cocok dengan selector." },
    { question: "Apa beda children dan childNodes?", options: ["Sama", "children: hanya elemen; childNodes: semua node termasuk teks", "childNodes lebih cepat", "children tidak didukung"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo DOM Traversing",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Traversing Demo</title>
<style>.card{border:1px solid #ddd;padding:15px;margin:10px;border-radius:8px}.card.active{border-color:blue;background:#e3f2fd}button{margin:5px}</style>
</head>
<body>
    <h1>DOM Traversing</h1>
    <p>Klik tombol untuk navigasi DOM</p>
    
    <div class="card" id="card1">
        <h3>Card 1</h3>
        <button onclick="highlightParent(this)">Highlight Parent</button>
        <button onclick="highlightSiblings(this)">Highlight Siblings</button>
        <button onclick="removeCard(this)">Hapus Card</button>
    </div>
    
    <div class="card" id="card2">
        <h3>Card 2</h3>
        <button onclick="highlightParent(this)">Highlight Parent</button>
        <button onclick="highlightSiblings(this)">Highlight Siblings</button>
        <button onclick="removeCard(this)">Hapus Card</button>
    </div>
    
    <div class="card" id="card3">
        <h3>Card 3</h3>
        <button onclick="highlightParent(this)">Highlight Parent</button>
        <button onclick="highlightSiblings(this)">Highlight Siblings</button>
        <button onclick="removeCard(this)">Hapus Card</button>
    </div>
    
    <script>
        function highlightParent(btn) {
            const card = btn.closest('.card');
            card.classList.toggle('active');
            console.log('Parent (closest):', card.id);
        }
        
        function highlightSiblings(btn) {
            const card = btn.closest('.card');
            const prev = card.previousElementSibling;
            const next = card.nextElementSibling;
            if (prev) prev.classList.toggle('active');
            if (next) next.classList.toggle('active');
            console.log('Prev:', prev?.id, 'Next:', next?.id);
        }
        
        function removeCard(btn) {
            const card = btn.closest('.card');
            card.remove();
            console.log('Card dihapus');
        }
    </script>
</body>
</html>`
    }
  ]
};