export const chapter = {
  slug: "web-components-introduction",
  title: "Pengenalan Web Components",
  description: "Pahami apa itu Web Components, teknologinya, dan kenapa jadi standar web.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-introduction", "javascript-introduction"],
  tags: ["web-components", "custom-elements", "shadow-dom", "templates"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Web Components?

Web Components adalah **set teknologi web standard** untuk membuat **custom, reusable HTML elements** dengan fungsionalitas terenkapsulasi.

## 3 Teknologi Utama

| Teknologi | Fungsi |
|-----------|--------|
| **Custom Elements** | Buat elemen HTML kustom |
| **Shadow DOM** | Enkapsulasi style dan markup |
| **HTML Templates** | Template markup yang tidak dirender |

## Kenapa Web Components?

- 🔧 **Framework-agnostic** - Bisa dipakai di React, Vue, Angular, atau vanilla
- 🌐 **Web standard** - Browser native, no library needed
- 📦 **Reusable** - Sekali buat, pakai di mana saja
- 🔒 **Encapsulated** - Style tidak bocor (Shadow DOM)
- 🚀 **Future-proof** - Standar web, tidak deprecated

## Web Components vs Frameworks

| | Web Components | React | Vue |
|---|---------------|-------|-----|
| Standard | ✅ W3C | ❌ Library | ❌ Framework |
| Encapsulation | ✅ Shadow DOM | ⚠️ CSS-in-JS | ✅ Scoped CSS |
| Reusable | ✅ Any framework | React only | Vue only |
| Size | 0 KB | ~40 KB | ~30 KB |
| Learning | Sedang | Rendah | Rendah |

## Browser Support

\`\`\`
✅ Chrome 67+
✅ Firefox 63+
✅ Safari 10.1+
✅ Edge 79+
✅ 97% global support
\`\`\`

## Basic Example

\`\`\`javascript
class HelloWorld extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<h1>Hello World!</h1>';
    }
}

customElements.define('hello-world', HelloWorld);
\`\`\`

\`\`\`html
<hello-world></hello-world>
\`\`\`
  `,
  quiz: [
    { question: "Web Components: framework?", options: ["Yes", "No (web standard, framework-agnostic)", "React only", "Angular only"], correctAnswer: 1 },
    { question: "3 teknologi Web Components?", options: ["HTML,CSS,JS", "Custom Elements, Shadow DOM, Templates", "React,Vue,Angular", "Node,Express,Next"], correctAnswer: 1 }
  ],
  codeExamples: []
};