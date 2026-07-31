export const chapter = {
  slug: "react-render-props",
  title: "Render Props",
  description: "Pattern Render Props - share logic via prop yang berupa function.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["react-components"],
  tags: ["react", "render-props", "pattern", "sharing"],
  order: 26,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Render Props Pattern

\`\`\`jsx
function MouseTracker({ render }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);
    
    return render(position);
}

// Usage
<MouseTracker render={({ x, y }) => <h1>Mouse: {x}, {y}</h1>} />
\`\`\`

## Render Props vs Hooks (Modern)

\`\`\`jsx
// Render Props (old)
<MouseTracker render={pos => <Display pos={pos} />} />

// Hooks (new - cleaner)
function Component() {
    const pos = useMouse();
    return <Display pos={pos} />;
}
\`\`\`
  `,

  quiz: [
    { question: "Render props?", options: ["String", "Function prop that returns JSX", "Number", "Object"], correctAnswer: 1 },
    { question: "Render props vs Hooks?", options: ["Same", "Hooks: cleaner modern alternative", "Render newer", "Both same"], correctAnswer: 1 }
  ],

  codeExamples: []
};