export const chapter = {
  slug: "react-hooks-usestate",
  title: "useState Hook",
  description: "Deep dive ke useState - hook paling fundamental di React.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["react-state"],
  tags: ["react", "hooks", "usestate", "state"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Lazy Initial State

\`\`\`jsx
// ❌ Dipanggil setiap render
const [data, setData] = useState(expensiveComputation());

// ✅ Hanya dipanggil sekali (initial render)
const [data, setData] = useState(() => expensiveComputation());
\`\`\`

## Functional Update

\`\`\`jsx
const [count, setCount] = useState(0);

// ❌ Bisa stale
setCount(count + 1);

// ✅ Selalu pakai nilai terbaru
setCount(prev => prev + 1);
\`\`\`

## Multiple States vs Object

\`\`\`jsx
// Multiple (recommended)
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);

// Single object
const [form, setForm] = useState({ name: '', email: '', age: 0 });
setForm(prev => ({ ...prev, name: 'Budi' }));
\`\`\`

## Common Mistakes

\`\`\`
❌ Mutating state langsung: state.name = 'Budi'
❌ Forgetting spread: setUser({ name: 'Budi' }) // age hilang!
❌ setState di dalam render (infinite loop!)
❌ Expecting state to change immediately (async!)
\`\`\`
  `,

  quiz: [
    { question: "Lazy initial state?", options: ["value", "() => value (called once)", "Promise", "Object"], correctAnswer: 1 },
    { question: "Functional update?", options: ["setCount(count+1)", "setCount(prev => prev+1)", "count++", "count = count+1"], correctAnswer: 1 }
  ],

  codeExamples: []
};