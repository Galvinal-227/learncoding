export const chapter = {
  slug: "react-hooks-usecallback",
  title: "useCallback Hook",
  description: "Optimasi dengan useCallback - cache function reference.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-hooks-usememo"],
  tags: ["react", "hooks", "usecallback", "performance"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Usage

\`\`\`jsx
import { useCallback, useState } from 'react';

function Parent() {
    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => {
        setCount(c => c + 1);
    }, []); // Function reference stays same
    
    return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click</button>;
});
\`\`\`

## useCallback + React.memo

- useCallback: Keep function reference same across renders
- React.memo: Skip re-render if props unchanged
- Together: Prevent unnecessary child re-renders
  `,

  quiz: [
    { question: "useCallback?", options: ["State", "Cache function reference", "Effect", "Ref"], correctAnswer: 1 },
    { question: "useCallback + React.memo?", options: ["Unrelated", "Prevent child re-renders", "More renders", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};