export const chapter = {
  slug: "react-hooks-usereducer",
  title: "useReducer Hook",
  description: "Kelola state kompleks dengan useReducer - Redux pattern di React.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-hooks-usestate"],
  tags: ["react", "hooks", "usereducer", "state-management"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Syntax

\`\`\`jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        case 'reset': return initialState;
        default: return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
\`\`\`

## useState vs useReducer

| useState | useReducer |
|----------|-----------|
| Simple state | Complex state logic |
| Independent updates | Multiple sub-values |
| Primitive values | Objects/arrays |
| Few state transitions | Many transitions |
  `,

  quiz: [
    { question: "useReducer?", options: ["Simple state", "Complex state with reducer pattern", "Context", "Props"], correctAnswer: 1 },
    { question: "dispatch()?", options: ["Update state directly", "Send action to reducer", "Context", "Props"], correctAnswer: 1 }
  ],

  codeExamples: []
};