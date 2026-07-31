export const chapter = {
  slug: "react-forms",
  title: "Forms",
  description: "Handle form input dengan controlled components dan React Hook Form.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-state"],
  tags: ["react", "forms", "controlled", "input"],
  order: 18,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Controlled Components

\`\`\`jsx
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}
\`\`\`

## Multiple Inputs

\`\`\`jsx
const [form, setForm] = useState({ name: '', email: '' });

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
\`\`\`

## Controlled vs Uncontrolled

| Controlled | Uncontrolled |
|-----------|-------------|
| React state = single source | DOM handles state |
| More code | Less code |
| Real-time validation | Submit-time validation |
  `,

  quiz: [
    { question: "Controlled input?", options: ["No value", "value={state} + onChange", "ref only", "Default"], correctAnswer: 1 },
    { question: "form onSubmit?", options: ["e.preventDefault()", "Direct submit", "No handler", "Auto"], correctAnswer: 0 }
  ],

  codeExamples: []
};