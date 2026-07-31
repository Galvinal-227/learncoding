export const chapter = {
  slug: "react-hooks-usecontext",
  title: "useContext Hook",
  description: "Akses context tanpa Consumer wrapper dengan useContext.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-hooks-usestate"],
  tags: ["react", "hooks", "usecontext", "context"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Usage

\`\`\`jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    const theme = useContext(ThemeContext);
    return <div className={theme}>Current theme: {theme}</div>;
}
\`\`\`

## Custom Hook + Context

\`\`\`jsx
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be within ThemeProvider');
    return context;
}
\`\`\`

## useContext vs Props Drilling

| useContext | Props |
|-----------|-------|
| ✅ Avoid drilling | ❌ Pass through many components |
| ✅ Global state | ❌ Manual passing |
| ⚠️ Re-render all consumers | ✅ Only direct child |
  `,

  quiz: [
    { question: "useContext?", options: ["Props", "Subscribe to context value", "State", "Reducer"], correctAnswer: 1 },
    { question: "Provider?", options: ["<Context.Provider value={}>", "<Provider>", "<Context>", "context.provide()"], correctAnswer: 0 }
  ],

  codeExamples: []
};