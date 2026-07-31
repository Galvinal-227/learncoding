export const chapter = {
  slug: "react-hooks-useeffect",
  title: "useEffect Hook",
  description: "Kuasai useEffect - hook untuk side effects, API calls, dan lifecycle.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["react-hooks-usestate"],
  tags: ["react", "hooks", "useeffect", "lifecycle"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Syntax

\`\`\`jsx
useEffect(() => {
    // Side effect code
    return () => {
        // Cleanup (optional)
    };
}, [dependencies]);
\`\`\`

## Dependency Array

\`\`\`jsx
// 1. No array → runs every render
useEffect(() => { console.log('Every render'); });

// 2. Empty [] → runs once (mount only)
useEffect(() => { console.log('Mount only'); }, []);

// 3. [dep] → runs when dep changes
useEffect(() => { console.log('Count changed:', count); }, [count]);
\`\`\`

## API Call Example

\`\`\`jsx
function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('/api/users');
            const data = await res.json();
            setUsers(data);
            setLoading(false);
        }
        fetchUsers();
    }, []); // Empty = mount only
    
    if (loading) return <div>Loading...</div>;
    return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
\`\`\`

## Cleanup

\`\`\`jsx
useEffect(() => {
    const timer = setInterval(() => console.log('tick'), 1000);
    const controller = new AbortController();
    
    return () => {
        clearInterval(timer);        // Cleanup timer
        controller.abort();           // Cancel fetch
    };
}, []);
\`\`\`
  `,

  quiz: [
    { question: "useEffect: empty []?", options: ["Every render", "Mount only (once)", "Every update", "Never"], correctAnswer: 1 },
    { question: "Cleanup function?", options: ["Before next effect/unmount", "After render", "Never", "On click"], correctAnswer: 0 }
  ],

  codeExamples: []
};