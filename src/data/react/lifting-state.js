export const chapter = {
  slug: "react-lifting-state",
  title: "Lifting State",
  description: "Angkat state ke parent untuk berbagi data antar sibling components.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-state"],
  tags: ["react", "lifting-state", "sharing", "parent"],
  order: 19,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## The Pattern

\`\`\`jsx
function Parent() {
    const [count, setCount] = useState(0); // State lifted to parent
    
    return (
        <div>
            <ChildA count={count} />
            <ChildB onIncrement={() => setCount(c => c + 1)} />
        </div>
    );
}

function ChildA({ count }) { return <p>Count: {count}</p>; }
function ChildB({ onIncrement }) { return <button onClick={onIncrement}>+</button>; }
\`\`\`

## When to Lift

\`\`\`
✅ Dua sibling butuh data yang sama
✅ Child perlu update data di sibling
✅ Single source of truth
❌ Hanya satu component yang pakai (keep local)
\`\`\`
  `,

  quiz: [
    { question: "Lifting state?", options: ["Local", "Move state to common parent", "Global", "Context"], correctAnswer: 1 },
    { question: "Sibling communication?", options: ["Direct", "Through parent (lift state)", "Context only", "Not possible"], correctAnswer: 1 }
  ],

  codeExamples: []
};