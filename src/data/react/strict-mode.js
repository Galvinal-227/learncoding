export const chapter = {
  slug: "react-strict-mode",
  title: "Strict Mode",
  description: "Gunakan StrictMode untuk deteksi masalah di development.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["react-introduction"],
  tags: ["react", "strict-mode", "debugging", "development"],
  order: 30,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Usage

\`\`\`jsx
import { StrictMode } from 'react';

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
\`\`\`

## What StrictMode Does

\`\`\`
✅ Double-render components (detect side effects)
✅ Double-run effects (detect missing cleanup)
✅ Warn deprecated APIs
✅ Warn unsafe lifecycle methods
✅ Only in development (ignored in production)
\`\`\`

## Why Double Render?

React intentionally double-invokes:
- Component function body
- State updater functions
- useState/useMemo/useReducer initializers

To detect **impure rendering** (side effects during render).
  `,

  quiz: [
    { question: "StrictMode: production?", options: ["Ya", "Tidak (development only)", "Both", "Optional"], correctAnswer: 1 },
    { question: "Double render?", options: ["Bug", "Intentional (detect impure renders)", "Error", "Performance"], correctAnswer: 1 }
  ],

  codeExamples: []
};