export const chapter = {
  slug: "react-conditional-rendering",
  title: "Conditional Rendering",
  description: "Tampilkan UI berbeda berdasarkan kondisi: if, ternary, &&, switch.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["react-jsx"],
  tags: ["react", "conditional", "ternary", "rendering"],
  order: 16,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Ternary Operator

\`\`\`jsx
function Greeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? 'Welcome back!' : 'Please login'}</h1>;
}
\`\`\`

## && Operator

\`\`\`jsx
{unreadMessages.length > 0 && <Badge count={unreadMessages.length} />}
{isLoading && <Spinner />}
\`\`\`

## if/else (Outside JSX)

\`\`\`jsx
function Status({ status }) {
    if (status === 'loading') return <Spinner />;
    if (status === 'error') return <Error />;
    return <Content />;
}
\`\`\`

## Switch Case

\`\`\`jsx
function PaymentMethod({ method }) {
    switch (method) {
        case 'credit': return <CreditCardForm />;
        case 'gopay': return <GopayForm />;
        default: return <BankTransfer />;
    }
}
\`\`\`
  `,

  quiz: [
    { question: "Ternary?", options: ["if/else", "condition ? true : false", "switch", "&&"], correctAnswer: 1 },
    { question: "&& operator?", options: ["Always true", "Render if left side truthy", "AND", "Error"], correctAnswer: 1 }
  ],

  codeExamples: []
};