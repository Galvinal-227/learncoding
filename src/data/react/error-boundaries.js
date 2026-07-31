export const chapter = {
  slug: "react-error-boundaries",
  title: "Error Boundaries",
  description: "Tangkap error di production dengan Error Boundaries.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["react-components"],
  tags: ["react", "error", "boundary", "production"],
  order: 23,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Class Component (Required)

\`\`\`jsx
class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        console.error('Error caught:', error, errorInfo);
        // Sentry.captureException(error);
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
\`\`\`

## Usage

\`\`\`jsx
<ErrorBoundary>
    <SuspiciousComponent />
</ErrorBoundary>
\`\`\`

## react-error-boundary (Library)

\`\`\`bash
npm install react-error-boundary
\`\`\`

\`\`\`jsx
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
    <App />
</ErrorBoundary>
\`\`\`
  `,

  quiz: [
    { question: "Error Boundary?", options: ["Try/catch", "Class component with componentDidCatch", "Hook", "Function"], correctAnswer: 1 },
    { question: "Error Boundary: functional?", options: ["Ya", "Tidak (harus class)", "Dengan hook", "Library only"], correctAnswer: 1 }
  ],

  codeExamples: []
};