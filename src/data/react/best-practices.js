export const chapter = {
  slug: "react-best-practices",
  title: "Best Practices",
  description: "Praktik terbaik React: struktur, performance, dan clean code.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-hooks-custom"],
  tags: ["react", "best-practices", "clean-code", "performance"],
  order: 32,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## 1. Component Structure

\`\`\`
src/
├── components/     # Reusable UI
├── features/       # Feature-specific
├── hooks/          # Custom hooks
├── lib/            # Utilities
├── pages/          # Route pages
└── App.jsx
\`\`\`

## 2. Keep Components Small

\`\`\`
✅ <200 lines per component
✅ Satu tanggung jawab
✅ Extract ke custom hooks
✅ Extract ke sub-components
\`\`\`

## 3. Performance

\`\`\`jsx
// ✅ React.memo for expensive components
const ExpensiveList = React.memo(({ items }) => { ... });

// ✅ useMemo for expensive computations
const sorted = useMemo(() => items.sort(), [items]);

// ✅ useCallback for stable function references
const handleClick = useCallback(() => { ... }, []);
\`\`\`

## 4. State Management

\`\`\`
✅ Local state: useState
✅ Complex state: useReducer
✅ Global state: Context or Zustand
✅ Server state: React Query
❌ Avoid Redux for small apps
\`\`\`

## Production Checklist

\`\`\`
✅ StrictMode enabled
✅ Error boundaries added
✅ Lazy loading implemented
✅ Images optimized (next/image)
✅ Bundle analyzed
✅ Lighthouse score >90
✅ Accessibility checked
\`\`\`
  `,

  quiz: [
    { question: "React.memo?", options: ["State", "Skip re-render if props unchanged", "Effect", "Hook"], correctAnswer: 1 },
    { question: "State: complex logic?", options: ["useState", "useReducer", "useEffect", "useRef"], correctAnswer: 1 }
  ],

  codeExamples: []
};