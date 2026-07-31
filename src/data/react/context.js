export const chapter = {
  slug: "react-context",
  title: "Context API",
  description: "Share data global tanpa props drilling dengan Context API.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-hooks-usecontext"],
  tags: ["react", "context", "global-state", "provider"],
  order: 21,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Create & Provide Context

\`\`\`jsx
const ThemeContext = createContext('light');

function App() {
    const [theme, setTheme] = useState('light');
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Page />
        </ThemeContext.Provider>
    );
}
\`\`\`

## Consume Context

\`\`\`jsx
function Page() {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <div className={theme}>
            <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
                Toggle
            </button>
        </div>
    );
}
\`\`\`

## Context + Reducer Pattern

\`\`\`jsx
const AppContext = createContext();

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
\`\`\`

## Context vs Redux vs Zustand

| Context | Redux | Zustand |
|---------|-------|---------|
| Built-in | External | External |
| Simple | Complex | Simple |
| Re-render all | Selective | Selective |
| Small apps | Large apps | Any size |
  `,

  quiz: [
    { question: "Context: avoid?", options: ["Global state", "Props drilling", "Local state", "Redux"], correctAnswer: 1 },
    { question: "Context + Reducer?", options: ["Overkill", "Global state management pattern", "Bad practice", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};