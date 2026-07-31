export const chapter = {
  slug: "web-components-best-practices",
  title: "Best Practices",
  description: "Praktik terbaik membangun Web Components yang maintainable dan performant.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["web-components-styling"],
  tags: ["web-components", "best-practices", "performance", "a11y"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## 1. Naming Convention

\`\`\`
✅ HARUS mengandung dash (-)
✅ Lowercase + hyphens
✅ Prefix untuk namespace
❌ No uppercase
❌ No single word

✅ my-button, app-header, ui-card
❌ MyButton, button, mybutton
\`\`\`

## 2. Accessibility

\`\`\`javascript
class AccessibleButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        // Tambahkan ARIA jika bukan native element
        this.setAttribute('role', 'button');
        this.setAttribute('tabindex', '0');
        this.setAttribute('aria-label', this.getAttribute('label') || 'Button');
        
        // Keyboard support
        this.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
}
\`\`\`

## 3. Performance

\`\`\`javascript
// Lazy upgrade
customElements.define('lazy-element', class extends HTMLElement {
    connectedCallback() {
        requestAnimationFrame(() => this.init());
    }
});

// Batch DOM updates
connectedCallback() {
    const fragment = document.createDocumentFragment();
    // Build DOM in fragment...
    this.shadowRoot.appendChild(fragment);
}
\`\`\`

## 4. Framework Integration

\`\`\`jsx
// React
<user-card ref={cardRef} name="Budi" email="budi@email.com"></user-card>

// Vue
<user-card :name="user.name" :email="user.email"></user-card>

// Angular
<user-card [attr.name]="user.name" [attr.email]="user.email"></user-card>
\`\`\`

## 5. Testing

\`\`\`javascript
import { fixture, expect } from '@open-wc/testing';

describe('UserCard', () => {
    it('renders name', async () => {
        const el = await fixture('<user-card name="Budi"></user-card>');
        expect(el.shadowRoot.querySelector('h3').textContent).to.equal('Budi');
    });
});
\`\`\`

## Production Checklist

\`\`\`
✅ Nama mengandung dash
✅ Accessible (ARIA, keyboard)
✅ Performance optimized
✅ CSS custom properties for theming
✅ Slot for composition
✅ Lifecycle cleanup
✅ Framework integration tested
✅ Unit tests written
✅ Polyfill for old browsers
\`\`\`
  `,

  quiz: [
    { question: "Web Component naming?", options: ["Any", "Must contain dash (-), lowercase", "PascalCase", "snake_case"], correctAnswer: 1 },
    { question: "Accessibility: tabindex?", options: ["-1", "0 (make focusable)", "No need", "Auto"], correctAnswer: 1 },
    { question: "React: pass data?", options: ["Props", "Attributes (strings only by default)", "State", "Context"], correctAnswer: 1 }
  ],

  codeExamples: []
};