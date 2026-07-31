export const chapter = {
  slug: "react-native-state-management",
  title: "State Management",
  description: "Kelola state di React Native dengan Context API, Zustand, dan React Query.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-native-core-components"],
  tags: ["react-native", "state", "context", "zustand"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Context API (Built-in)

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

// Usage
function ProfileScreen() {
    const { user, logout } = useAuth();
    return <Text>Welcome, {user?.name}!</Text>;
}
\`\`\`

## Zustand (Lightweight)

\`\`\`bash
npm install zustand
\`\`\`

\`\`\`jsx
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}));

// Usage - No Provider needed!
function Counter() {
    const { count, increment, decrement } = useStore();
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="+" onPress={increment} />
            <Button title="-" onPress={decrement} />
        </View>
    );
}
\`\`\`

## React Query (Server State)

\`\`\`bash
npm install @tanstack/react-query
\`\`\`

\`\`\`jsx
import { QueryClient, QueryClientProvider, useQuery, useMutation } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UsersList />
        </QueryClientProvider>
    );
}

function UsersList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://api.example.com/users').then(r => r.json())
    });
    
    if (isLoading) return <ActivityIndicator />;
    if (error) return <Text>Error loading users</Text>;
    
    return <FlatList data={data} renderItem={({ item }) => <Text>{item.name}</Text>} />;
}
\`\`\`

## AsyncStorage (Persistent)

\`\`\`bash
npm install @react-native-async-storage/async-storage
\`\`\`

\`\`\`jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save
await AsyncStorage.setItem('theme', 'dark');

// Read
const theme = await AsyncStorage.getItem('theme');

// Remove
await AsyncStorage.removeItem('theme');

// Clear all
await AsyncStorage.clear();
\`\`\`

## Which to Use?

| Need | Solution |
|------|----------|
| Simple local state | useState |
| Complex local state | useReducer |
| Global state (small) | Context API |
| Global state (medium) | Zustand |
| Server/API data | React Query |
| Persistent storage | AsyncStorage |
| Secure storage | expo-secure-store |
  `,

  quiz: [
    { question: "AsyncStorage?", options: ["Cloud DB", "Local key-value storage (persistent)", "SQLite", "Memory only"], correctAnswer: 1 },
    { question: "Zustand vs Context?", options: ["Same", "Zustand: simpler, no Provider needed", "Context simpler", "Both deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};