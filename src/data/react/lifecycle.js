export const chapter = {
  slug: "react-lifecycle",
  title: "Lifecycle",
  description: "Pahami siklus hidup komponen React: mount, update, unmount.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-state"],
  tags: ["react", "lifecycle", "mount", "unmount"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Lifecycle dengan Hooks

| Fase | Class Component | Functional (Hooks) |
|------|----------------|-------------------|
| Mount | componentDidMount | useEffect(() => {}, []) |
| Update | componentDidUpdate | useEffect(() => {}) |
| Unmount | componentWillUnmount | useEffect return cleanup |
| Error | componentDidCatch | Error Boundary |

## Mount (Initial Render)

\`\`\`jsx
function App() {
    useEffect(() => {
        console.log('Component mounted!');
        // API calls, subscriptions
    }, []); // Empty deps = mount only
}
\`\`\`

## Update (Re-render)

\`\`\`jsx
function App({ userId }) {
    useEffect(() => {
        console.log('userId changed:', userId);
        fetchUser(userId);
    }, [userId]); // Runs when userId changes
}
\`\`\`

## Unmount (Cleanup)

\`\`\`jsx
function Timer() {
    useEffect(() => {
        const id = setInterval(() => console.log('tick'), 1000);
        return () => clearInterval(id); // Cleanup on unmount!
    }, []);
}
\`\`\`
  `,

  quiz: [
    { question: "Mount equivalent?", options: ["useEffect(fn)", "useEffect(fn, [])", "useState()", "useRef()"], correctAnswer: 1 },
    { question: "Cleanup di hooks?", options: ["Tidak bisa", "Return function di useEffect", "Class only", "Manual"], correctAnswer: 1 }
  ],

  codeExamples: []
};