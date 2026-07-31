export const chapter = {
  slug: "zustand-introduction",
  title: "Pengenalan Zustand",
  description: "Pahami apa itu Zustand, kenapa jadi pilihan state management modern, dan perbandingannya.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["react-introduction"],
  tags: ["zustand", "state-management", "react", "simple"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Zustand?

Zustand (bahasa Jerman: "state") adalah **state management library** untuk React yang **minimalis, cepat, dan tanpa boilerplate**. Dibuat oleh **Poimandres** (tim yang sama dengan React Spring).

## Kenapa Zustand?

- 🪶 **Minimal** - ~1KB gzipped
- ⚡ **Cepat** - No Provider wrapper needed
- 🎯 **Simple API** - Mirip useState, tapi global
- 🔧 **No boilerplate** - Tidak perlu actions, reducers, dispatch
- 📦 **Modular** - Bisa multiple stores
- 🧩 **Middleware** - Persist, DevTools, Immer
- 🔄 **Async ready** - Async actions without thunks/sagas

## Zustand vs Redux vs Context

| | Zustand | Redux Toolkit | Context API |
|---|---------|--------------|-------------|
| Size | ~1KB | ~12KB | Built-in |
| Setup | 1 menit | 10 menit | 1 menit |
| Provider | ❌ Tidak perlu | ✅ Perlu | ✅ Perlu |
| DevTools | ✅ | ✅ | ❌ |
| Middleware | ✅ | ✅ | ❌ |
| Async | ✅ Built-in | ✅ createAsyncThunk | Manual |
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Learning | Sangat mudah | Sedang | Mudah |
| Best for | Most apps | Large apps | Small apps |

## Instalasi

\`\`\`bash
npm install zustand
\`\`\`

## First Store (30 detik!)

\`\`\`jsx
import { create } from 'zustand';

const useCounter = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}));

function Counter() {
    const { count, increment, decrement } = useCounter();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
\`\`\`

## Kenapa Tanpa Provider?

Zustand menggunakan **React hooks** di luar React tree. Store adalah **module-level singleton**. Import di mana saja, langsung pakai.

\`\`\`jsx
// No <Provider> needed!
// Component A
function ComponentA() {
    const count = useCounter(s => s.count);
}

// Component B
function ComponentB() {
    const increment = useCounter(s => s.increment);
}
\`\`\`
  `,

  quiz: [
    { question: "Zustand vs Redux?", options: ["Same", "Zustand: simpler, smaller, no Provider", "Redux smaller", "Zustand more complex"], correctAnswer: 1 },
    { question: "Zustand: Provider?", options: ["Required", "Not needed!", "Optional", "Redux only"], correctAnswer: 1 },
    { question: "create()?", options: ["Component", "Create store function", "Hook", "Context"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Zustand in 30 seconds",
      language: "jsx",
      code: `import { create } from 'zustand';

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 }))
}));

function App() {
    const count = useStore((s) => s.count);
    const increment = useStore((s) => s.increment);
    return <button onClick={increment}>{count}</button>;
}`
    }
  ]
};