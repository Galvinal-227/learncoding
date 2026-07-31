export const chapter = {
  slug: "react-lists-keys",
  title: "Lists & Keys",
  description: "Render list data dengan map() dan key untuk React reconciliation.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["react-jsx"],
  tags: ["react", "lists", "keys", "map"],
  order: 17,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic List

\`\`\`jsx
function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
\`\`\`

## Key Rules

\`\`\`
✅ Unique among siblings
✅ Stable (don't use index for dynamic lists)
✅ String or number
❌ Don't use Math.random()
❌ Don't use index for lists that change
\`\`\`

## Index as Key (Only If)

\`\`\`jsx
// OK only if: static list, no add/remove/reorder
{items.map((item, index) => <li key={index}>{item}</li>)}
\`\`\`
  `,

  quiz: [
    { question: "Key: use index?", options: ["Always", "Only for static lists", "Never", "Recommended"], correctAnswer: 1 },
    { question: "Key: unique?", options: ["Globally", "Among siblings", "In app", "In component"], correctAnswer: 1 }
  ],

  codeExamples: []
};