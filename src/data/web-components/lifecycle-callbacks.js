export const chapter = {
  slug: "web-components-lifecycle-callbacks",
  title: "Lifecycle Callbacks",
  description: "Pahami lifecycle callbacks Web Components: constructor, connected, disconnected, attributeChanged.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["web-components-custom-elements"],
  tags: ["web-components", "lifecycle", "callbacks", "hooks"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## 4 Lifecycle Callbacks

| Callback | When |
|----------|------|
| **constructor()** | Element created (new or document.createElement) |
| **connectedCallback()** | Element added to DOM |
| **disconnectedCallback()** | Element removed from DOM |
| **attributeChangedCallback()** | Observed attribute changed |
| **adoptedCallback()** | Element moved to new document |

## Full Example

\`\`\`javascript
class LifecycleDemo extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'color'];
    }
    
    constructor() {
        super();
        console.log('1. constructor - element created');
        this._data = null;
    }
    
    connectedCallback() {
        console.log('2. connectedCallback - added to DOM');
        this.render();
        this._fetchData();
        this._addEventListeners();
    }
    
    disconnectedCallback() {
        console.log('4. disconnectedCallback - removed from DOM');
        this._removeEventListeners();
        this._cleanup();
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        console.log('3. attributeChanged:', name, oldVal, '→', newVal);
        if (oldVal !== newVal) this.render();
    }
    
    adoptedCallback() {
        console.log('Moved to new document');
    }
    
    _fetchData() { /* API call */ }
    _addEventListeners() { /* Bind events */ }
    _removeEventListeners() { /* Cleanup */ }
    _cleanup() { /* Release resources */ }
    render() { /* Update UI */ }
}
\`\`\`

## Best Practices

\`\`\`
✅ constructor: hanya setup basic
✅ connectedCallback: fetch data, add listeners
✅ disconnectedCallback: remove listeners, cleanup
✅ attributeChangedCallback: react to changes
✅ Don't do heavy work in constructor
✅ Don't access DOM in constructor
\`\`\`
  `,
  quiz: [
    { question: "connectedCallback?", options: ["Constructor", "Element added to DOM", "Attribute change", "Removed from DOM"], correctAnswer: 1 },
    { question: "disconnectedCallback: cleanup?", options: ["No need", "Remove listeners, release resources", "Only in constructor", "Attribute change"], correctAnswer: 1 }
  ],
  codeExamples: []
};