export const chapter = {
  slug: "react-hooks-useref",
  title: "useRef Hook",
  description: "Gunakan useRef untuk DOM reference dan mutable values tanpa re-render.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-hooks-usestate"],
  tags: ["react", "hooks", "useref", "dom"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## DOM Reference

\`\`\`jsx
import { useRef, useEffect } from 'react';

function AutoFocus() {
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    
    return <input ref={inputRef} />;
}
\`\`\`

## Mutable Value (No Re-render)

\`\`\`jsx
function Timer() {
    const intervalRef = useRef(null);
    const [count, setCount] = useState(0);
    
    const start = () => {
        intervalRef.current = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);
    };
    
    const stop = () => clearInterval(intervalRef.current);
    
    return <div>{count} <button onClick={start}>Start</button></div>;
}
\`\`\`

## useRef vs useState

| useRef | useState |
|--------|----------|
| No re-render | Triggers re-render |
| Mutable .current | Immutable |
| DOM access | UI state |
  `,

  quiz: [
    { question: "useRef: re-render?", options: ["Ya", "Tidak (no re-render)", "Sometimes", "Always"], correctAnswer: 1 },
    { question: "Access ref value?", options: [".value", ".current", ".ref", ".get()"], correctAnswer: 1 }
  ],

  codeExamples: []
};