export const chapter = {
  slug: "react-suspense",
  title: "Suspense",
  description: "Gunakan Suspense untuk loading states yang deklaratif.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-lazy"],
  tags: ["react", "suspense", "loading", "async"],
  order: 28,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Suspense

\`\`\`jsx
import { Suspense } from 'react';

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <AsyncComponent />
        </Suspense>
    );
}
\`\`\`

## Nested Suspense

\`\`\`jsx
<Suspense fallback={<PageLoader />}>
    <Header />
    <Suspense fallback={<SidebarLoader />}>
        <Sidebar />
    </Suspense>
    <Suspense fallback={<ContentLoader />}>
        <Content />
    </Suspense>
</Suspense>
\`\`\`

## Suspense + Data Fetching (React 19)

\`\`\`jsx
// React 19: use() hook for promises
import { use, Suspense } from 'react';

function UserProfile({ userPromise }) {
    const user = use(userPromise); // Suspend until resolved!
    return <div>{user.name}</div>;
}
\`\`\`
  `,

  quiz: [
    { question: "Suspense: fallback?", options: ["Error UI", "Loading UI while waiting", "Empty", "Success"], correctAnswer: 1 },
    { question: "Nested Suspense?", options: ["Not allowed", "✅ Different loading per section", "Only one", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};