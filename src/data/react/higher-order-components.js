export const chapter = {
  slug: "react-higher-order-components",
  title: "Higher-Order Components",
  description: "Pattern HOC untuk reuse logic - fungsi yang menerima komponen dan mengembalikan komponen.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["react-components"],
  tags: ["react", "hoc", "pattern", "reuse"],
  order: 25,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## HOC Pattern

\`\`\`jsx
// HOC: withAuth
function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        const { user, loading } = useAuth();
        if (loading) return <Spinner />;
        if (!user) return <Redirect to="/login" />;
        return <Component {...props} user={user} />;
    };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
<ProtectedDashboard />
\`\`\`

## HOC vs Hooks (Modern)

| HOC | Hooks |
|-----|-------|
| Wrapper component | Inside component |
| Props manipulation | Logic extraction |
| Legacy pattern | Modern pattern |
| Can be complex | Simpler |
\`\`\`
  `,

  quiz: [
    { question: "HOC?", options: ["Hook", "Function: component → component", "State", "Context"], correctAnswer: 1 },
    { question: "HOC vs Hooks?", options: ["Same", "Hooks: modern alternative", "HOC newer", "Both deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};