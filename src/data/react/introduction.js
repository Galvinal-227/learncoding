export const chapter = {
  slug: "react-introduction",
  title: "Pengenalan React",
  description: "Pahami apa itu React, kenapa jadi library UI #1, dan konsep dasarnya.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction", "html-introduction"],
  tags: ["react", "library", "ui", "components"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Apa Itu React?

React adalah **library JavaScript** untuk membangun **user interface**. Dibuat oleh **Meta (Facebook)** tahun 2013. Fokus pada **komponen** yang reusable.

## Kenapa React?

- 🧩 **Component-based** - UI dipecah jadi komponen kecil
- 🔄 **Declarative** - Deskripsikan apa yang ingin ditampilkan
- ⚡ **Virtual DOM** - Update efisien
- 🌍 **Ecosystem** - React Router, Next.js, Redux, dll
- 📱 **React Native** - Mobile apps dengan React
- 💪 **Hooks** - State & lifecycle tanpa class

## Instalasi

\`\`\`bash
# Vite (recommended)
npm create vite@latest my-app -- --template react

# Next.js (full-stack)
npx create-next-app@latest my-app

# CDN (quick test)
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
\`\`\`

## First Component

\`\`\`jsx
function App() {
    return <h1>Hello React!</h1>;
}

export default App;
\`\`\`

## React vs Vue vs Angular

| | React | Vue | Angular |
|---|-------|-----|---------|
| Type | Library | Framework | Framework |
| Learning | Sedang | Mudah | Sulit |
| Component | JSX/Function | SFC | Class-based |
| State | Hooks/Redux | Reactive | RxJS |
| Mobile | React Native | - | - |
\`\`\`
  `,

  quiz: [
    { question: "React dibuat oleh?", options: ["Google", "Meta (Facebook)", "Microsoft", "Amazon"], correctAnswer: 1 },
    { question: "React: library atau framework?", options: ["Framework", "Library (UI)", "Bahasa", "Database"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "React Pertama",
      language: "jsx",
      code: `import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`
    }
  ]
};