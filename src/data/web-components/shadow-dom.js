export const chapter = {
  slug: "web-components-shadow-dom",
  title: "Shadow DOM",
  description: "Enkapsulasi style dan markup dengan Shadow DOM.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["web-components-custom-elements"],
  tags: ["web-components", "shadow-dom", "encapsulation", "scoped"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## What is Shadow DOM?

Shadow DOM adalah **DOM terisolasi** di dalam elemen. Style di dalam tidak bocor keluar, style di luar tidak masuk.

## Create Shadow DOM

\`\`\`javascript
class ShadowCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = \`
            <style>
                /* Style TIDAK AKAN BOCOR ke luar! */
                .card {
                    border: 1px solid #e0e0e0;
                    border-radius: 12px;
                    padding: 20px;
                    background: white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                h2 { color: #333; margin: 0 0 10px; }
                p { color: #666; }
            </style>
            <div class="card">
                <h2><slot name="title">Default Title</slot></h2>
                <p><slot>Default content</slot></p>
                <button>Action</button>
            </div>
        \`;
    }
}

customElements.define('shadow-card', ShadowCard);
\`\`\`

## Shadow DOM Modes

| Mode | Deskripsi |
|------|-----------|
| **'open'** | JavaScript bisa akses shadow root via element.shadowRoot |
| **'closed'** | Tidak bisa diakses dari luar |

\`\`\`javascript
// Open
const shadow = element.attachShadow({ mode: 'open' });
console.log(element.shadowRoot); // ShadowRoot

// Closed
const shadow = element.attachShadow({ mode: 'closed' });
console.log(element.shadowRoot); // null
\`\`\`

## CSS Custom Properties (Pierce Shadow DOM)

\`\`\`css
/* Outside Shadow DOM */
shadow-card {
    --card-bg: #f0f0f0;
    --card-text: #333;
}
\`\`\`

\`\`\`javascript
// Inside Shadow DOM
<style>
    .card {
        background: var(--card-bg, white);
        color: var(--card-text, #666);
    }
</style>
\`\`\`

## Shadow DOM Events

\`\`\`javascript
// Events bubble out of Shadow DOM (but retargeted)
shadowCard.addEventListener('click', (e) => {
    console.log(e.target); // <shadow-card> (not internal button!)
    console.log(e.composedPath()); // Full path through Shadow DOM
});
\`\`\`
  `,
  quiz: [
    { question: "Shadow DOM: style leak?", options: ["Yes", "No (encapsulated)", "Sometimes", "Depends"], correctAnswer: 1 },
    { question: "shadowRoot: 'open'?", options: ["JS can access", "JS cannot access", "Faster", "Deprecated"], correctAnswer: 1 }
  ],
  codeExamples: []
};