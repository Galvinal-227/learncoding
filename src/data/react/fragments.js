export const chapter = {
  slug: "react-fragments",
  title: "Fragments",
  description: "Group element tanpa menambah DOM node dengan Fragment.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 5,
  prerequisites: ["react-jsx"],
  tags: ["react", "fragment", "group", "dom"],
  order: 24,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Fragment

\`\`\`jsx
import { Fragment } from 'react';

function List() {
    return (
        <Fragment>
            <li>Item 1</li>
            <li>Item 2</li>
        </Fragment>
    );
}

// Short syntax (no key support)
function List() {
    return (
        <>
            <li>Item 1</li>
            <li>Item 2</li>
        </>
    );
}
\`\`\`

## Fragment with Key

\`\`\`jsx
// Only <Fragment> supports key, <> doesn't
{items.map(item => (
    <Fragment key={item.id}>
        <dt>{item.term}</dt>
        <dd>{item.description}</dd>
    </Fragment>
))}
\`\`\`
  `,

  quiz: [
    { question: "Short fragment?", options: ["<Fragment>", "<> </>", "<div>", "<span>"], correctAnswer: 1 },
    { question: "Fragment: key?", options: ["<>", "<Fragment key={}>", "Tidak bisa", "Auto"], correctAnswer: 1 }
  ],

  codeExamples: []
};