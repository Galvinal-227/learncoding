export const chapter = {
  slug: "zustand-middleware",
  title: "Middleware (Persist, DevTools)",
  description: "Gunakan middleware Zustand untuk persist state dan DevTools integration.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["zustand-store-creation"],
  tags: ["zustand", "middleware", "persist", "devtools"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Built-in Middleware

| Middleware | Fungsi |
|-----------|--------|
| **persist** | Simpan state ke localStorage/AsyncStorage |
| **devtools** | Debug dengan Redux DevTools |
| **immer** | Immutable updates dengan mutasi |
| **subscribeWithSelector** | Subscribe dengan selector |

## Persist Middleware

\`\`\`javascript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useStore = create(
    persist(
        (set, get) => ({
            count: 0,
            theme: 'light',
            increment: () => set((s) => ({ count: s.count + 1 })),
            toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' }))
        }),
        {
            name: 'my-app-storage',      // Key di localStorage
            storage: createJSONStorage(() => localStorage),  // Default
            // partialize: (state) => ({ theme: state.theme }) // Only persist theme
        }
    )
);

// Async Storage (React Native)
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage } from 'zustand/middleware';

const useStore = create(
    persist(
        (set) => ({ ... }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);
\`\`\`

## DevTools Middleware

\`\`\`javascript
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
    devtools(
        (set) => ({
            count: 0,
            increment: () => set((s) => ({ count: s.count + 1 }), false, 'increment'),
            decrement: () => set((s) => ({ count: s.count - 1 }), false, 'decrement')
        }),
        { name: 'MyStore' }
    )
);

// Install Redux DevTools browser extension
// Buka DevTools → tab Redux → lihat state + actions
\`\`\`

## Combine Multiple Middleware

\`\`\`javascript
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useStore = create(
    devtools(
        persist(
            (set) => ({
                count: 0,
                increment: () => set((s) => ({ count: s.count + 1 }))
            }),
            { name: 'my-store' }
        ),
        { name: 'MyStore' }
    )
);
// Order: devtools(persist(...))
\`\`\`

## Immer Middleware

\`\`\`bash
npm install immer
\`\`\`

\`\`\`javascript
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(
    immer((set) => ({
        todos: [],
        addTodo: (text) => set((state) => {
            state.todos.push({ id: Date.now(), text, done: false });
            // Immer allows mutation!
        }),
        toggleTodo: (id) => set((state) => {
            const todo = state.todos.find(t => t.id === id);
            if (todo) todo.done = !todo.done;
        })
    }))
);
\`\`\`
  `,

  quiz: [
    { question: "persist middleware?", options: ["DevTools", "Save state to localStorage/AsyncStorage", "Immer", "Redux"], correctAnswer: 1 },
    { question: "devtools middleware?", options: ["Persist", "Redux DevTools integration", "Immer", "Storage"], correctAnswer: 1 }
  ],

  codeExamples: []
};