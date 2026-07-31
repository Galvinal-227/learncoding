export const chapter = {
  slug: "react-hooks-usememo",
  title: "useMemo Hook",
  description: "Optimasi performa dengan useMemo - cache hasil komputasi.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-hooks-usestate"],
  tags: ["react", "hooks", "usememo", "performance"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Usage

\`\`\`jsx
import { useMemo, useState } from 'react';

function ExpensiveList({ items, filter }) {
    const filteredItems = useMemo(() => {
        console.log('Filtering...');
        return items.filter(item => item.includes(filter));
    }, [items, filter]); // Only recompute when deps change
    
    return <ul>{filteredItems.map(i => <li key={i}>{i}</li>)}</ul>;
}
\`\`\`

## When to Use

\`\`\`
✅ Expensive computations
✅ Referential equality (passing to child)
✅ Derived data from props/state
❌ Simple calculations (overhead)
❌ Every component (premature optimization)
\`\`\`

## useMemo vs useCallback

| useMemo | useCallback |
|---------|------------|
| Caches value | Caches function |
| useMemo(fn, deps) | useCallback(fn, deps) |
\`\`\`
  `,

  quiz: [
    { question: "useMemo?", options: ["State", "Cache computed value", "Effect", "Ref"], correctAnswer: 1 },
    { question: "useMemo deps empty?", options: ["Every render", "Only once", "Never", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};