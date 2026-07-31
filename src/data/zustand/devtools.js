export const chapter = {
  slug: "zustand-devtools",
  title: "DevTools & Debugging",
  description: "Debug Zustand store dengan Redux DevTools extension.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["zustand-middleware"],
  tags: ["zustand", "devtools", "debugging", "redux"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup DevTools

\`\`\`javascript
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
    devtools(
        (set) => ({
            count: 0,
            // Action names for DevTools
            increment: () => set(
                (s) => ({ count: s.count + 1 }),
                false,
                'increment'  // Action name in DevTools
            ),
            decrement: () => set(
                (s) => ({ count: s.count - 1 }),
                false,
                'decrement'
            ),
            reset: () => set(
                { count: 0 },
                false,
                'reset'
            )
        }),
        { name: 'CounterStore' }
    )
);
\`\`\`

## Trace Actions

\`\`\`javascript
const useStore = create(
    devtools(
        (set) => ({ ... }),
        {
            name: 'MyStore',
            trace: true,  // Show stack trace of action
            enabled: process.env.NODE_ENV === 'development'
        }
    )
);
\`\`\`

## Debugging Tips

\`\`\`
1. Install Redux DevTools browser extension
2. F12 → tab Redux
3. Lihat state history
4. Time travel (jump to any state)
5. Inspect action payloads
6. Export/import state
\`\`\`
  `,

  quiz: [
    { question: "DevTools: action name?", options: ["Auto", "Third argument in set()", "First argument", "Function name"], correctAnswer: 1 },
    { question: "trace: true?", options: ["Disable", "Show stack trace of actions", "Log only", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};