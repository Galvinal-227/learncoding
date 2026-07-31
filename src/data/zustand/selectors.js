export const chapter = {
  slug: "zustand-selectors",
  title: "Selectors",
  description: "Gunakan selectors untuk optimasi re-render dan derived state.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["zustand-store-creation"],
  tags: ["zustand", "selectors", "performance", "derived"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Selector

\`\`\`javascript
// ❌ Re-renders on ANY state change
const state = useStore();

// ✅ Only re-renders when 'count' changes
const count = useStore((state) => state.count);

// ✅ Multiple values in one selector
const { count, increment } = useStore((state) => ({
    count: state.count,
    increment: state.increment
}));
\`\`\`

## Shallow Comparison (Multiple Values)

\`\`\`javascript
import { useShallow } from 'zustand/react/shallow';

// Without shallow → new object every render = always re-render
const { count, name } = useStore((state) => ({
    count: state.count,
    name: state.name
}));

// With shallow → only re-render if values change
const { count, name } = useStore(
    useShallow((state) => ({
        count: state.count,
        name: state.name
    }))
);
\`\`\`

## Derived State (Computed Values)

\`\`\`javascript
const useStore = create((set, get) => ({
    todos: [],
    filter: 'all', // 'all' | 'active' | 'completed'
    
    // Derived state (getter)
    getFilteredTodos: () => {
        const { todos, filter } = get();
        if (filter === 'active') return todos.filter(t => !t.done);
        if (filter === 'completed') return todos.filter(t => t.done);
        return todos;
    },
    
    getStats: () => {
        const todos = get().todos;
        return {
            total: todos.length,
            active: todos.filter(t => !t.done).length,
            completed: todos.filter(t => t.done).length
        };
    }
}));

// Usage
function TodoStats() {
    const stats = useStore(s => {
        const todos = s.todos;
        return {
            total: todos.length,
            active: todos.filter(t => !t.done).length
        };
    });
    return <p>{stats.active} / {stats.total}</p>;
}
\`\`\`

## Custom Selector Hooks

\`\`\`javascript
// hooks/useTodos.js
const useTodos = (filter) => useStore((state) => {
    if (filter === 'active') return state.todos.filter(t => !t.done);
    if (filter === 'completed') return state.todos.filter(t => t.done);
    return state.todos;
});

const useTodoStats = () => useStore((state) => ({
    total: state.todos.length,
    active: state.todos.filter(t => !t.done).length
}));
\`\`\`
  `,

  quiz: [
    { question: "Selector?", options: ["All state", "Pick specific value (optimize re-render)", "Hook", "Component"], correctAnswer: 1 },
    { question: "useShallow?", options: ["Deep compare", "Shallow compare (avoid re-render)", "No compare", "Deep copy"], correctAnswer: 1 }
  ],

  codeExamples: []
};