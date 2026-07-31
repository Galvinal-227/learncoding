export const chapter = {
  slug: "markdown-mdx",
  title: "MDX (Markdown + JSX)",
  description: "Gabungkan Markdown dengan React components menggunakan MDX.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["markdown-syntax", "react-introduction"],
  tags: ["markdown", "mdx", "react", "jsx"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu MDX?

MDX = **Markdown + JSX**. Bisa pakai React components langsung di file Markdown. Digunakan Next.js, Astro, Docusaurus.

## Basic MDX

\`\`\`mdx
import { Chart } from './Chart';

# My Dashboard

Here's a chart component:

<Chart data={[1, 2, 3]} />

## Code Example

\`\`\`jsx
<Button variant="primary">Click</Button>
\`\`\`
\`\`\`

## Custom Components

\`\`\`jsx
// components/Callout.jsx
export function Callout({ type = 'info', children }) {
    const colors = {
        info: 'bg-blue-100 border-blue-500',
        warning: 'bg-yellow-100 border-yellow-500'
    };
    return <div className={colors[type]}>{children}</div>;
}
\`\`\`

\`\`\`mdx
import { Callout } from './Callout';

<Callout type="warning">
**Warning:** This action cannot be undone!
</Callout>
\`\`\`

## Next.js + MDX

\`\`\`bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
\`\`\`

\`\`\`javascript
// next.config.js
import createMDX from '@next/mdx';

const withMDX = createMDX();

export default withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
\`\`\`
  `,

  quiz: [
    { question: "MDX?", options: ["Database", "Markdown + JSX (React components)", "CMS", "CSS framework"], correctAnswer: 1 },
    { question: "MDX: import components?", options: ["Tidak bisa", "Bisa (import React component)", "Hanya text", "Hanya image"], correctAnswer: 1 }
  ],

  codeExamples: []
};