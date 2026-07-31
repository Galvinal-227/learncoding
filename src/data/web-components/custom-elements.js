export const chapter = {
  slug: "web-components-custom-elements",
  title: "Custom Elements",
  description: "Buat elemen HTML kustom dengan Custom Elements API.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["web-components-introduction"],
  tags: ["web-components", "custom-elements", "define", "attributes"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Define Custom Element

\`\`\`javascript
class MyElement extends HTMLElement {
    constructor() {
        super();
        console.log('Element created');
    }
    
    connectedCallback() {
        this.textContent = 'Hello from Custom Element!';
    }
}

// Nama HARUS mengandung dash (-)
customElements.define('my-element', MyElement);
\`\`\`

## Attributes & Properties

\`\`\`javascript
class UserCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'email', 'avatar'];
    }
    
    get name() { return this.getAttribute('name'); }
    set name(val) { this.setAttribute('name', val); }
    
    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) this.render();
    }
    
    connectedCallback() { this.render(); }
    
    render() {
        this.innerHTML = \`
            <div style="border:1px solid #ddd;padding:16px;border-radius:8px">
                <img src="\${this.getAttribute('avatar')}" alt="\${this.getAttribute('name')}" width="60" height="60">
                <h3>\${this.getAttribute('name')}</h3>
                <p>\${this.getAttribute('email')}</p>
            </div>
        \`;
    }
}

customElements.define('user-card', UserCard);
\`\`\`

## Usage

\`\`\`html
<user-card name="Budi" email="budi@email.com" avatar="avatar.jpg"></user-card>

<script>
    // Update attributes dynamically
    const card = document.querySelector('user-card');
    card.setAttribute('name', 'Budi Updated');
    // or
    card.name = 'Budi Updated';
</script>
\`\`\`

## Extending Built-in Elements

\`\`\`javascript
class FancyButton extends HTMLButtonElement {
    connectedCallback() {
        this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        this.style.color = 'white';
        this.style.border = 'none';
        this.style.padding = '10px 20px';
        this.style.borderRadius = '8px';
    }
}

customElements.define('fancy-button', FancyButton, { extends: 'button' });
\`\`\`

\`\`\`html
<button is="fancy-button">Click Me!</button>
\`\`\`
  `,
  quiz: [
    { question: "Custom element name rule?", options: ["Any name", "Must contain dash (-)", "Must be uppercase", "No rules"], correctAnswer: 1 },
    { question: "observedAttributes?", options: ["All attrs", "Specific attrs to watch for changes", "CSS props", "Events"], correctAnswer: 1 }
  ],
  codeExamples: []
};