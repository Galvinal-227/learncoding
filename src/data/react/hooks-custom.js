export const chapter = {
  slug: "react-hooks-custom",
  title: "Custom Hooks",
  description: "Buat custom hooks untuk reuse logic antar komponen.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-hooks-usestate", "react-hooks-useeffect"],
  tags: ["react", "hooks", "custom", "reusable"],
  order: 14,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Custom Hook Pattern

\`\`\`jsx
// useLocalStorage.js
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}
\`\`\`

## Popular Custom Hooks

\`\`\`jsx
// useFetch
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(url).then(r => r.json()).then(d => {
            setData(d); setLoading(false);
        });
    }, [url]);
    
    return { data, loading };
}

// useDebounce
function useDebounce(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debounced;
}
\`\`\`
  `,

  quiz: [
    { question: "Custom hook naming?", options: ["anyFunction", "useSomething (start with 'use')", "hookSomething", "somethingHook"], correctAnswer: 1 },
    { question: "Custom hook: share?", options: ["State", "Logic (stateful logic)", "UI", "Styles"], correctAnswer: 1 }
  ],

  codeExamples: []
};