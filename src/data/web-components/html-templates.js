export const chapter = {
  slug: "web-components-html-templates",
  title: "HTML Templates",
  description: "Gunakan <template> dan <slot> untuk reusable markup.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["web-components-custom-elements"],
  tags: ["web-components", "template", "slot", "reusable"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Template Element

\`\`\`html
<template id="card-template">
    <style>
        .card { border:1px solid #ddd; padding:16px; border-radius:8px; }
        h3 { margin:0 0 8px; }
    </style>
    <div class="card">
        <h3 class="title"></h3>
        <p class="content"></p>
    </div>
</template>
\`\`\`

## Use Template in Custom Element

\`\`\`javascript
class TemplateCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('card-template');
        const content = template.content.cloneNode(true);
        
        content.querySelector('.title').textContent = this.getAttribute('title');
        content.querySelector('.content').textContent = this.getAttribute('content');
        
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(content);
    }
}

customElements.define('template-card', TemplateCard);
\`\`\`

\`\`\`html
<template-card title="Hello" content="World"></template-card>
\`\`\`

## Slots

\`\`\`html
<template id="layout-template">
    <style>
        .layout { display:flex; gap:20px; }
        .sidebar { width:200px; }
        .content { flex:1; }
    </style>
    <div class="layout">
        <aside class="sidebar"><slot name="sidebar">Sidebar</slot></aside>
        <main class="content"><slot>Main Content</slot></main>
    </div>
</template>
\`\`\`

\`\`\`html
<custom-layout>
    <nav slot="sidebar">Navigation here</nav>
    <article>Main content here</article>
</custom-layout>
\`\`\`
  `,
  quiz: [
    { question: "<template>?", options: ["Rendered immediately", "Inert (not rendered until cloned)", "CSS only", "Script only"], correctAnswer: 1 },
    { question: "<slot>?", options: ["Style", "Composition (insert light DOM)", "Script", "Attribute"], correctAnswer: 1 }
  ],
  codeExamples: []
};