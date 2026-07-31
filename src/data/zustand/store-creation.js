export const chapter = {
  slug: "zustand-store-creation",
  title: "Membuat Store",
  description: "Buat dan gunakan Zustand store: state, actions, multiple stores.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["zustand-introduction"],
  tags: ["zustand", "store", "create", "state"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Store Pattern

\`\`\`javascript
import { create } from 'zustand';

const useStore = create((set, get) => ({
    // State
    count: 0,
    user: null,
    isLoading: false,
    
    // Actions
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setUser: (user) => set({ user }),
    setLoading: (isLoading) => set({ isLoading })
}));
\`\`\`

## set() Patterns

\`\`\`javascript
// 1. Replace entire state
set({ count: 0 })

// 2. Functional update (access previous state)
set((state) => ({ count: state.count + 1 }))

// 3. Partial update (merge automatically!)
set({ isLoading: true })
// Only updates isLoading, count & user unchanged
\`\`\`

## get() - Access State Outside React

\`\`\`javascript
const useStore = create((set, get) => ({
    count: 0,
    increment: () => set({ count: get().count + 1 }),
    logState: () => console.log(get())
}));

// Access state outside component
const count = useStore.getState().count;
const increment = useStore.getState().increment;
increment();
\`\`\`

## Multiple Stores (Recommended)

\`\`\`javascript
// stores/userStore.js
const useUserStore = create((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null })
}));

// stores/cartStore.js
const useCartStore = create((set) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) }))
}));

// stores/uiStore.js
const useUIStore = create((set) => ({
    theme: 'light',
    sidebar: false,
    toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
    toggleSidebar: () => set((s) => ({ sidebar: !s.sidebar }))
}));
\`\`\`

## Subscribing (Outside React)

\`\`\`javascript
// Subscribe to state changes (for logging, analytics)
const unsubscribe = useStore.subscribe((state, prevState) => {
    console.log('State changed:', state, prevState);
});

// Unsubscribe
unsubscribe();

// With selector
useStore.subscribe(
    (state) => state.count,
    (count, prevCount) => console.log('Count:', count, prevCount)
);
\`\`\`
  `,

  quiz: [
    { question: "set() merge?", options: ["Replace all", "Auto-merge (partial update)", "Delete", "Error"], correctAnswer: 1 },
    { question: "get()?", options: ["Inside React only", "Access state anywhere (outside React)", "Hook only", "Provider"], correctAnswer: 1 }
  ],

  codeExamples: []
};