export const chapter = {
  slug: "react-testing-react",
  title: "Testing React",
  description: "Test komponen React dengan React Testing Library dan Vitest.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-components"],
  tags: ["react", "testing", "rtl", "vitest"],
  order: 31,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Setup

\`\`\`bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
\`\`\`

## Basic Test

\`\`\`jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders greeting', () => {
    render(<Greeting name="Budi" />);
    expect(screen.getByText('Hello, Budi!')).toBeInTheDocument();
});

test('button click increments count', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
\`\`\`

## Testing Hooks

\`\`\`jsx
import { renderHook, act } from '@testing-library/react';

test('useCounter hook', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
});
\`\`\`

## Common Queries

\`\`\`jsx
screen.getByText('Submit')          // Exact text
screen.getByRole('button')          // By role
screen.getByLabelText('Email')      // By label
screen.getByPlaceholderText('...')  // By placeholder
screen.getByTestId('submit-btn')    // By data-testid
\`\`\`
  `,

  quiz: [
    { question: "RTL: render?", options: ["String", "Render component for testing", "DOM only", "Server"], correctAnswer: 1 },
    { question: "userEvent vs fireEvent?", options: ["Same", "userEvent: simulates real user", "fireEvent better", "Both deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};