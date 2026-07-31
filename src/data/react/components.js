export const chapter = {
  slug: "react-components",
  title: "Components",
  description: "Bangun UI dengan functional components - blok bangunan React.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["react-jsx"],
  tags: ["react", "components", "functional", "reusable"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Apa Itu Component?

Component adalah **fungsi JavaScript** yang mengembalikan JSX. Bisa reusable dan composable.

## Functional Component

\`\`\`jsx
// Basic
function Welcome() {
    return <h1>Welcome to React!</h1>;
}

// Arrow function
const Welcome = () => <h1>Welcome to React!</h1>;

// Dengan props
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}
\`\`\`

## Component Composition

\`\`\`jsx
function App() {
    return (
        <div>
            <Header />
            <Main>
                <Sidebar />
                <Content />
            </Main>
            <Footer />
        </div>
    );
}
\`\`\`

## Export & Import

\`\`\`jsx
// UserCard.jsx
export default function UserCard({ name, email }) {
    return <div><h3>{name}</h3><p>{email}</p></div>;
}

// App.jsx
import UserCard from './UserCard';
\`\`\`

## Best Practices

\`\`\`
✅ Satu komponen = satu file
✅ Nama file = nama komponen (PascalCase)
✅ Komponen kecil & fokus
✅ Props untuk data, state untuk interaktivitas
✅ Extract reusable logic ke custom hooks
\`\`\`
  `,

  quiz: [
    { question: "Component naming?", options: ["camelCase", "PascalCase (UserCard)", "kebab-case", "snake_case"], correctAnswer: 1 },
    { question: "Default export?", options: ["Named", "export default function", "module.exports", "return"], correctAnswer: 1 }
  ],

  codeExamples: []
};