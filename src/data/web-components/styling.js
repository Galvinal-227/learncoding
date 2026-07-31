export const chapter = {
  slug: "web-components-styling",
  title: "Styling Web Components",
  description: "Style Web Components dengan :host, ::slotted, CSS custom properties, dan ::part.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["web-components-shadow-dom"],
  tags: ["web-components", "styling", "css", ":host"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## :host (Style the Element Itself)

\`\`\`javascript
class StyledCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = \`
            <style>
                :host {
                    display: block;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 16px;
                    background: white;
                }
                :host([theme="dark"]) {
                    background: #333;
                    color: white;
                }
                :host(:hover) {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
            </style>
            <slot></slot>
        \`;
    }
}
\`\`\`

## ::slotted (Style Slotted Content)

\`\`\`javascript
<style>
    ::slotted(h2) {
        color: #333;
        margin: 0 0 8px;
    }
    ::slotted(p) {
        color: #666;
        line-height: 1.6;
    }
    ::slotted([slot="footer"]) {
        border-top: 1px solid #eee;
        padding-top: 8px;
        font-size: 0.9em;
        color: #999;
    }
</style>
\`\`\`

## CSS Custom Properties (Bridge)

\`\`\`javascript
// Inside Shadow DOM
<style>
    .card {
        background: var(--card-bg, white);
        color: var(--card-text, #333);
        border-radius: var(--card-radius, 8px);
        padding: var(--card-padding, 16px);
    }
</style>
\`\`\`

\`\`\`css
/* Outside - Styling from consumer */
styled-card {
    --card-bg: linear-gradient(135deg, #667eea, #764ba2);
    --card-text: white;
    --card-radius: 12px;
}
\`\`\`

## ::part() (Expose Internal Parts)

\`\`\`javascript
// Inside Shadow DOM
<style>
    .card-header { /* ... */ }
    .card-body { /* ... */ }
</style>
<div part="header" class="card-header"><slot name="header"></slot></div>
<div part="body" class="card-body"><slot></slot></div>
\`\`\`

\`\`\`css
/* Outside - Style exposed parts */
styled-card::part(header) {
    background: #f0f0f0;
    padding: 12px;
}
styled-card::part(body) {
    padding: 20px;
}
\`\`\`
  `,
  quiz: [
    { question: ":host?", options: ["Child element", "Shadow host itself", "Slot content", "Template"], correctAnswer: 1 },
    { question: "::part()?", options: ["No access", "Expose internal element for external styling", "Shadow only", "Template"], correctAnswer: 1 }
  ],
  codeExamples: []
};