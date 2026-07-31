export const chapter = {
  slug: "dom-event-bubbling-capturing",
  title: "Event Bubbling & Capturing",
  description: "Pahami bagaimana event merambat melalui DOM tree.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["dom-events"],
  tags: ["dom", "event", "bubbling", "capturing"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Fase Event

\`\`\`
1. Capturing  (atas → bawah)  ↓
2. Target     (elemen target)
3. Bubbling   (bawah → atas)  ↑
\`\`\`

## Bubbling (Default)

Event "menggelembung" ke atas dari target ke parent:

\`\`\`javascript
// Klik <button> di dalam <div>
div.addEventListener('click', () => console.log('Div diklik'));   // Jalan!
button.addEventListener('click', () => console.log('Button diklik'));
// Output: "Button diklik" → "Div diklik"
\`\`\`

## Capturing

Jarang dipakai, attache sebelum target:
\`\`\`javascript
div.addEventListener('click', handler, true); // Capture phase
// Atau
div.addEventListener('click', handler, { capture: true });
\`\`\`

## Stop Propagation

\`\`\`javascript
button.addEventListener('click', (e) => {
    e.stopPropagation(); // Hentikan bubbling
    console.log('Hanya button');
});
\`\`\`
  `,

  quiz: [
    { question: "Arah event bubbling?", options: ["Atas ke bawah", "Bawah ke atas (target → parent)", "Horizontal", "Acak"], correctAnswer: 1 },
    { question: "Bagaimana menghentikan bubbling?", options: ["e.preventDefault()", "e.stopPropagation()", "e.stop()", "return false"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Demo Bubbling",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Bubbling Demo</title>
<style>.outer{padding:30px;background:#e3f2fd}.middle{padding:30px;background:#bbdefb}.inner{padding:30px;background:#90caf9;cursor:pointer}</style>
</head>
<body>
    <h1>Klik kotak paling dalam</h1>
    <div class="outer" id="outer">
        Outer
        <div class="middle" id="middle">
            Middle
            <div class="inner" id="inner">Inner (Klik!)</div>
        </div>
    </div>
    <p id="log"></p>
    
    <script>
        const log = document.getElementById('log');
        
        document.getElementById('outer').addEventListener('click', () => {
            log.textContent += 'Outer → ';
        });
        
        document.getElementById('middle').addEventListener('click', (e) => {
            log.textContent += 'Middle → ';
            // e.stopPropagation(); // Coba uncomment!
        });
        
        document.getElementById('inner').addEventListener('click', () => {
            log.textContent += 'Inner → ';
        });
    </script>
</body>
</html>`
    }
  ]
};