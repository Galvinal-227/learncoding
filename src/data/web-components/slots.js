export const chapter = {
  slug: "web-components-slots",
  title: "Slots & Composition",
  description: "Gunakan slots untuk komposisi konten yang fleksibel di Web Components.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["web-components-html-templates"],
  tags: ["web-components", "slots", "composition", "named-slot"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Default Slot

\`\`\`javascript
class SimpleCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = \`
            <div class="card">
                <slot>Default content</slot>
            </div>
        \`;
    }
}
customElements.define('simple-card', SimpleCard);
\`\`\`

## Named Slots

\`\`\`javascript
class LayoutComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = \`
            <style>
                .layout { display: grid; grid-template-areas: "header header" "sidebar main" "footer footer"; }
                .header { grid-area: header; }
                .sidebar { grid-area: sidebar; }
                .main { grid-area: main; }
                .footer { grid-area: footer; }
            </style>
            <div class="layout">
                <header class="header"><slot name="header">Default Header</slot></header>
                <aside class="sidebar"><slot name="sidebar">Default Sidebar</slot></aside>
                <main class="main"><slot>Default Main Content</slot></main>
                <footer class="footer"><slot name="footer">Default Footer</slot></footer>
            </div>
        \`;
    }
}
customElements.define('layout-component', LayoutComponent);
\`\`\`

## Usage

\`\`\`html
<layout-component>
    <h1 slot="header">My App</h1>
    <nav slot="sidebar">Menu items...</nav>
    <article>
        <h2>Main Content</h2>
        <p>This goes to default slot</p>
    </article>
    <p slot="footer">© 2026</p>
</layout-component>
\`\`\`

## slotchange Event

\`\`\`javascript
class SlotWatcher extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = \`<div><slot></slot></div>\`;
        
        const slot = this.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', (e) => {
            const nodes = slot.assignedNodes();
            console.log('Slot content changed:', nodes.length, 'nodes');
        });
    }
}
\`\`\`

## assignedNodes() & assignedElements()

\`\`\`javascript
const slot = this.shadowRoot.querySelector('slot');
const allNodes = slot.assignedNodes();       // All nodes (including text)
const elements = slot.assignedElements();    // Only HTML elements
\`\`\`
  `,
  quiz: [
    { question: "Named slot?", options: ["<div>", "<slot name='header'>", "<template>", "<style>"], correctAnswer: 1 },
    { question: "slotchange?", options: ["CSS change", "Slot content changed event", "Attribute change", "Style change"], correctAnswer: 1 }
  ],
  codeExamples: []
};