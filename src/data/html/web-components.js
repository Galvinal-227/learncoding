export const chapter = {
  slug: "html-web-components",
  title: "Web Components",
  description: "Pelajari cara membuat elemen HTML kustom yang reusable dengan Web Components.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Advanced",
  estimatedReadingTime: 30,
  prerequisites: ["html-elements", "javascript", "dom"],
  tags: ["html", "web-components", "custom-elements", "shadow-dom"],
  order: 26,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Web Components?

Web Components adalah teknologi browser native untuk membuat elemen HTML kustom yang **reusable** dan **terenkapsulasi**. Terdiri dari 3 teknologi utama:

1. **Custom Elements** - Membuat elemen HTML baru
2. **Shadow DOM** - Enkapsulasi style dan markup
3. **HTML Templates** - Template markup yang tidak dirender

## Custom Elements

### Membuat Custom Element Sederhana
\`\`\`javascript
class SalamElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = \`<h2>Halo, Dunia!</h2>\`;
    }
}

customElements.define('salam-dunia', SalamElement);
\`\`\`

\`\`\`html
<salam-dunia></salam-dunia>
\`\`\`

### Dengan Atribut
\`\`\`javascript
class ProfilCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = \`
            <div class="card">
                <h3>\${this.getAttribute('nama')}</h3>
                <p>\${this.getAttribute('jabatan')}</p>
            </div>
        \`;
    }
}

customElements.define('profil-card', ProfilCard);
\`\`\`

\`\`\`html
<profil-card nama="Budi" jabatan="Developer"></profil-card>
\`\`\`

## Shadow DOM

Enkapsulasi style dan markup:
\`\`\`javascript
class TombolKeren extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = \`
            <style>
                button {
                    background: #E34F26;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
                button:hover {
                    background: #c73e1d;
                }
            </style>
            <button><slot></slot></button>
        \`;
    }
}

customElements.define('tombol-keren', TombolKeren);
\`\`\`

\`\`\`html
<tombol-keren>Klik Aku!</tombol-keren>
\`\`\`

## HTML Templates

\`\`\`html
<template id="template-kartu">
    <style>
        .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            margin: 10px;
            max-width: 300px;
        }
    </style>
    <div class="card">
        <h3 class="nama"></h3>
        <p class="email"></p>
    </div>
</template>
\`\`\`

\`\`\`javascript
class KartuUser extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('template-kartu');
        const templateContent = template.content.cloneNode(true);
        
        templateContent.querySelector('.nama').textContent = 
            this.getAttribute('nama');
        templateContent.querySelector('.email').textContent = 
            this.getAttribute('email');
        
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(templateContent);
    }
}

customElements.define('kartu-user', KartuUser);
\`\`\`

## Lifecycle Callbacks

\`\`\`javascript
class ElemenKu extends HTMLElement {
    constructor() {
        super();
        console.log('Elemen dibuat');
    }
    
    connectedCallback() {
        console.log('Elemen ditambahkan ke DOM');
    }
    
    disconnectedCallback() {
        console.log('Elemen dihapus dari DOM');
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(\`Atribut \${name} berubah: \${oldValue} → \${newValue}\`);
    }
    
    static get observedAttributes() {
        return ['nama', 'warna'];
    }
}

customElements.define('elemen-ku', ElemenKu);
\`\`\`
  `,

  quiz: [
    {
      question: "Apa 3 teknologi utama Web Components?",
      options: [
        "HTML, CSS, JavaScript",
        "Custom Elements, Shadow DOM, HTML Templates",
        "React, Vue, Angular",
        "Flexbox, Grid, Animation"
      ],
      correctAnswer: 1,
      explanation: "Web Components terdiri dari Custom Elements, Shadow DOM, dan HTML Templates."
    },
    {
      question: "Apa fungsi Shadow DOM?",
      options: [
        "Menambahkan bayangan",
        "Enkapsulasi style dan markup",
        "Mempercepat loading",
        "Animasi"
      ],
      correctAnswer: 1,
      explanation: "Shadow DOM menyediakan enkapsulasi untuk style dan markup sehingga tidak bocor ke atau dari dokumen utama."
    }
  ],

  codeExamples: [
    {
      title: "Web Component: Tombol Like",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Web Components</title>
</head>
<body>
    <h1>Web Component: Tombol Like</h1>
    
    <template id="template-like">
        <style>
            .like-btn {
                background: #fff;
                border: 2px solid #e74c3c;
                border-radius: 20px;
                padding: 8px 20px;
                cursor: pointer;
                font-size: 16px;
                transition: 0.3s;
            }
            .like-btn.active {
                background: #e74c3c;
                color: white;
            }
            .count { margin-left: 5px; font-weight: bold; }
        </style>
        <button class="like-btn">
            ❤️ <span class="count">0</span>
        </button>
    </template>
    
    <tombol-like></tombol-like>
    <tombol-like></tombol-like>
    <tombol-like></tombol-like>
    
    <script>
        class TombolLike extends HTMLElement {
            constructor() {
                super();
                const template = document.getElementById('template-like');
                const content = template.content.cloneNode(true);
                
                const shadow = this.attachShadow({ mode: 'open' });
                shadow.appendChild(content);
                
                this.count = 0;
                this.isLiked = false;
                this.btn = shadow.querySelector('.like-btn');
                this.countSpan = shadow.querySelector('.count');
                
                this.btn.addEventListener('click', () => this.toggle());
            }
            
            toggle() {
                this.isLiked = !this.isLiked;
                this.count += this.isLiked ? 1 : -1;
                this.btn.classList.toggle('active', this.isLiked);
                this.countSpan.textContent = this.count;
            }
        }
        
        customElements.define('tombol-like', TombolLike);
    </script>
</body>
</html>`,
      output: "Web Component tombol like yang reusable dengan Shadow DOM."
    }
  ]
};