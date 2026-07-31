export const chapter = {
  slug: "react-code-splitting",
  title: "Code Splitting",
  description: "Pecah bundle JavaScript dengan React.lazy dan dynamic imports.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-components"],
  tags: ["react", "code-splitting", "lazy", "performance"],
  order: 27,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Route-Based Splitting

\`\`\`jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Suspense>
    );
}
\`\`\`

## Component-Based Splitting

\`\`\`jsx
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<div>Loading chart...</div>}>
                <HeavyChart />
            </Suspense>
        </div>
    );
}
\`\`\`
  `,

  quiz: [
    { question: "React.lazy?", options: ["Eager load", "Dynamic import (code splitting)", "Static import", "Sync"], correctAnswer: 1 },
    { question: "Suspense?", options: ["Error", "Loading fallback for lazy components", "Data", "Context"], correctAnswer: 1 }
  ],

  codeExamples: []
};