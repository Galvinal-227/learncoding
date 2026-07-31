export const chapter = {
  slug: "web-storage-session-storage",
  title: "sessionStorage",
  description: "Gunakan sessionStorage untuk data yang hanya bertahan selama tab session.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["web-storage-introduction"],
  tags: ["web-storage", "sessionStorage", "tab", "temporary"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Basic Operations

\`\`\`javascript
// Save (sama persis seperti localStorage)
sessionStorage.setItem('formData', JSON.stringify({ email: 'budi@email.com' }));
sessionStorage.setItem('step', '2');

// Read
const formData = JSON.parse(sessionStorage.getItem('formData'));
const step = sessionStorage.getItem('step');

// Remove
sessionStorage.removeItem('formData');

// Clear all (saat tab ditutup = otomatis clear)
sessionStorage.clear();
\`\`\`

## localStorage vs sessionStorage

| | localStorage | sessionStorage |
|---|-------------|---------------|
| Lifetime | Permanent | Tab session only |
| New tab | Shared | New storage |
| Duplicate tab | Shared | Copied |
| Close tab | Survives | Cleared |
| Use case | Preferences, tokens | Form data, wizards |

## Use Cases

\`\`\`javascript
// Multi-step form
function saveStep(step, data) {
    sessionStorage.setItem('wizard_step', step);
    sessionStorage.setItem('wizard_data', JSON.stringify(data));
}

// Page scroll position
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
});

// Temporary filters
sessionStorage.setItem('filter', JSON.stringify({ category: 'tech', sort: 'newest' }));
\`\`\`

## Limitations

\`\`\`
❌ Not shared across tabs (by design)
❌ Only strings (serialize with JSON)
❌ 5-10MB limit
❌ Synchronous
\`\`\`
  `,

  quiz: [
    { question: "sessionStorage: lifetime?", options: ["Permanent", "Tab session only", "1 day", "Configurable"], correctAnswer: 1 },
    { question: "sessionStorage: new tab?", options: ["Shared", "Separate storage", "Error", "Syncs"], correctAnswer: 1 }
  ],

  codeExamples: []
};