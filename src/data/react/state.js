export const chapter = {
  slug: "react-state",
  title: "State",
  description: "Kelola data yang berubah dengan useState - memori komponen React.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["react-props"],
  tags: ["react", "state", "usestate", "re-render"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Apa Itu State?

State adalah **data yang bisa berubah** dalam komponen. Saat state berubah → komponen **re-render**.

## useState Hook

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
\`\`\`

## State Rules

\`\`\`
✅ Gunakan setState untuk update
✅ State updates are asynchronous
✅ State immutable (jangan mutate langsung)
✅ Bisa multiple useState
✅ State di-initialize sekali (first render)
\`\`\`

## Object & Array State

\`\`\`jsx
const [user, setUser] = useState({ name: 'Budi', age: 25 });

// Update object (spread!)
setUser({ ...user, age: 26 });

// Array
const [items, setItems] = useState([]);
setItems([...items, newItem]);  // Add
setItems(items.filter(i => i.id !== id));  // Remove
\`\`\`

## Props vs State

| Props | State |
|-------|-------|
| Dikirim dari parent | Dikelola dalam komponen |
| Read-only | Bisa diubah |
| Mirip function parameter | Mirip local variable |
  `,

  quiz: [
    { question: "useState return?", options: ["Value", "[value, setterFunction]", "Object", "Promise"], correctAnswer: 1 },
    { question: "State update: langsung mutate?", options: ["Ya", "Tidak (pakai setter, immutable)", "Boleh", "Tergantung"], correctAnswer: 1 }
  ],

  codeExamples: []
};