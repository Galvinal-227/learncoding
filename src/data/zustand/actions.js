export const chapter = {
  slug: "zustand-actions",
  title: "Actions & Async",
  description: "Buat actions dan async operations dengan Zustand.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["zustand-store-creation"],
  tags: ["zustand", "actions", "async", "fetch"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Actions

\`\`\`javascript
const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, done: false }]
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(t => t.id !== id)
    }))
}));
\`\`\`

## Async Actions (Fetch API)

\`\`\`javascript
const useUserStore = create((set) => ({
    users: [],
    loading: false,
    error: null,
    
    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('/api/users');
            const users = await response.json();
            set({ users, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    
    addUser: async (userData) => {
        set({ loading: true });
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(userData)
            });
            const newUser = await response.json();
            set((state) => ({ users: [...state.users, newUser], loading: false }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));
\`\`\`

## Async with Zustand + React Query

\`\`\`javascript
// Zustand untuk UI state, React Query untuk server state
const useUIStore = create((set) => ({
    sidebarOpen: false,
    modalOpen: false,
    toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
    openModal: () => set({ modalOpen: true }),
    closeModal: () => set({ modalOpen: false })
}));

// Server data pakai React Query
function UsersPage() {
    const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
    const sidebarOpen = useUIStore(s => s.sidebarOpen);
    // ...
}
\`\`\`

## Actions with Parameters

\`\`\`javascript
const useCartStore = create((set, get) => ({
    items: [],
    
    addItem: (product, quantity = 1) => set((state) => {
        const existing = state.items.find(i => i.id === product.id);
        if (existing) {
            return {
                items: state.items.map(i => 
                    i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
                )
            };
        }
        return { items: [...state.items, { ...product, quantity }] };
    }),
    
    removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.id !== productId)
    })),
    
    getTotal: () => {
        return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    }
}));
\`\`\`
  `,

  quiz: [
    { question: "Zustand: async?", options: ["Not possible", "Built-in (async/await in set)", "Need thunk", "Need saga"], correctAnswer: 1 },
    { question: "Zustand + React Query?", options: ["Conflict", "Complementary (UI state vs server state)", "Same thing", "Not compatible"], correctAnswer: 1 }
  ],

  codeExamples: []
};