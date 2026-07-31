export const chapter = {
  slug: "react-mini-project",
  title: "Proyek Mini React",
  description: "Bangun aplikasi To-Do List lengkap dengan React hooks dan localStorage.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 30,
  prerequisites: ["react-best-practices"],
  tags: ["react", "proyek", "todo", "hooks"],
  order: 33,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Proyek: To-Do App dengan React

Aplikasi To-Do list dengan fitur CRUD, filter, dan localStorage.
  `,

  codeExamples: [
    {
      title: "To-Do App React",
      language: "jsx",
      code: `import { useState, useEffect } from 'react';

function App() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    const [text, setText] = useState('');
    const [filter, setFilter] = useState('all');
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const addTodo = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        setTodos([...todos, { id: Date.now(), text, done: false }]);
        setText('');
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };
    
    const filtered = todos.filter(t => {
        if (filter === 'active') return !t.done;
        if (filter === 'done') return t.done;
        return true;
    });
    
    return (
        <div className="app">
            <h1>To-Do List</h1>
            <form onSubmit={addTodo}>
                <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo..." />
                <button type="submit">Add</button>
            </form>
            <div className="filters">
                {['all', 'active', 'done'].map(f => (
                    <button key={f} onClick={() => setFilter(f)} className={filter===f?'active':''}>{f}</button>
                ))}
            </div>
            <ul>
                {filtered.map(todo => (
                    <li key={todo.id} className={todo.done ? 'done' : ''}>
                        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>✕</button>
                    </li>
                ))}
            </ul>
            <p>{todos.filter(t => !t.done).length} items left</p>
        </div>
    );
}

export default App;`,
      output: "Aplikasi To-Do List dengan fitur CRUD, filter, dan localStorage persistence."
    }
  ],

  quiz: []
};