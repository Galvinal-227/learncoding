export const chapter = {
  slug: "react-composition",
  title: "Composition",
  description: "Gunakan composition pattern untuk flexible dan reusable components.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-props"],
  tags: ["react", "composition", "children", "flexible"],
  order: 20,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Children Prop

\`\`\`jsx
function Card({ children, title }) {
    return <div className="card"><h2>{title}</h2>{children}</div>;
}

<Card title="Info"><p>Content here</p><button>Action</button></Card>
\`\`\`

## Multiple Slots

\`\`\`jsx
function Layout({ header, sidebar, children }) {
    return (
        <div>
            <header>{header}</header>
            <aside>{sidebar}</aside>
            <main>{children}</main>
        </div>
    );
}
\`\`\`

## Specialization

\`\`\`jsx
function Dialog({ children, ...props }) {
    return <div className="dialog" {...props}>{children}</div>;
}

function ConfirmDialog(props) {
    return <Dialog><h2>Confirm?</h2><button>Yes</button></Dialog>;
}
\`\`\`

## Composition vs Inheritance

\`\`\`
✅ Composition: React's primary pattern
❌ Inheritance: Rarely used in React
✅ children, slots, specialization
❌ extends Component (avoid for code reuse)
\`\`\`
  `,

  quiz: [
    { question: "Composition in React?", options: ["Inheritance", "children prop + slots", "Class extends", "Mixins"], correctAnswer: 1 },
    { question: "Specialization?", options: ["New component using base component", "Class extends", "HOC only", "Redux"], correctAnswer: 0 }
  ],

  codeExamples: []
};