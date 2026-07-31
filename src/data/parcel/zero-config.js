export const chapter = {
  slug: "parcel-zero-config",
  title: "Zero Configuration",
  description: "Manfaatkan fitur zero-config Parcel: HMR, code splitting, environment variables.",
  icon: "SiParcel",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["parcel-introduction"],
  tags: ["parcel", "zero-config", "hmr", "code-splitting"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Hot Module Replacement (HMR)

Otomatis aktif di development. Edit kode → lihat perubahan instant tanpa reload.

\`\`\`javascript
// app.js
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        console.log('Module updated!');
    });
}
\`\`\`

## Code Splitting (Dynamic Import)

\`\`\`javascript
// app.js
const button = document.createElement('button');
button.textContent = 'Load Chart';

button.addEventListener('click', async () => {
    const { drawChart } = await import('./chart.js');
    drawChart();
});

document.body.appendChild(button);
\`\`\`

Parcel auto-split \`chart.js\` ke file terpisah. Hanya di-load saat tombol diklik!

## Environment Variables

\`\`\`bash
# .env
API_URL=https://api.example.com
FEATURE_FLAG_NEW_UI=true
\`\`\`

\`\`\`javascript
console.log(process.env.API_URL); // https://api.example.com

// Custom env (browser-exposed)
// .env dengan prefix tidak otomatis exposed
\`\`\`

## Import Non-JavaScript Assets

\`\`\`javascript
import logo from './logo.svg';
import styles from './style.css';
import data from './data.json';

console.log(logo);   // URL path
console.log(data);   // Parsed JSON

// CSS Modules (auto jika file .module.css)
import styles from './Button.module.css';
// styles.button → unique class name
\`\`\`

## TypeScript (No Config!)

\`\`\`typescript
// app.ts - langsung bisa!
const greeting: string = 'Hello Parcel + TypeScript';
console.log(greeting);
\`\`\`

## React (No Config!)

\`\`\`jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return <h1>Hello React + Parcel!</h1>;
}

createRoot(document.getElementById('root')).render(<App />);
\`\`\`

## Targets (package.json)

\`\`\`json
{
    "browserslist": "> 0.5%, last 2 versions, not dead",
    "@parcel/resolver-default": {
        "packageExports": true
    }
}
\`\`\`
  `,

  quiz: [
    { question: "HMR?", options: ["Reload page", "Hot Module Replacement (instant update)", "Build", "Error"], correctAnswer: 1 },
    { question: "Code splitting?", options: ["Manual", "Dynamic import() → auto split", "Config only", "Not supported"], correctAnswer: 1 }
  ],

  codeExamples: []
};