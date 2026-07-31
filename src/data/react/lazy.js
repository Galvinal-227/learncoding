export const chapter = {
  slug: "react-lazy",
  title: "Lazy Loading",
  description: "Implementasi lazy loading komponen dengan React.lazy().",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["react-code-splitting"],
  tags: ["react", "lazy", "loading", "performance"],
  order: 29,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## React.lazy()

\`\`\`jsx
import { lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Must wrap in Suspense!
<Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
</Suspense>
\`\`\`

## Named Exports

\`\`\`jsx
// Component file: export { Chart, Table }
const Chart = lazy(() =>
    import('./Components').then(module => ({ default: module.Chart }))
);
\`\`\`

## When to Lazy Load

\`\`\`
✅ Large components
✅ Below-the-fold content
✅ Route-based pages
✅ Rarely used features
❌ Above-the-fold (LCP elements)
❌ Very small components
\`\`\`
  `,

  quiz: [
    { question: "React.lazy()?", options: ["Eager", "Dynamic import wrapper", "Static", "Sync"], correctAnswer: 1 },
    { question: "Lazy: named export?", options: ["Auto", "Manual: .then(m => ({default: m.Component}))", "Not supported", "Import all"], correctAnswer: 1 }
  ],

  codeExamples: []
};