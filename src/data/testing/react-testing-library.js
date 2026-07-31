export const chapter = {
  slug: "react-testing-library",
  title: "React Testing Library",
  description: "Menguji komponen React dengan React Testing Library.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["testing-introduction", "testing-jest"],
  tags: ["testing", "react", "rtl", "components"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu React Testing Library?

React Testing Library adalah library untuk menguji komponen React dengan fokus pada user behavior.

## Instalasi

\`\`\`bash
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
\`\`\`

## Basic Test

\`\`\`jsx
// Button.jsx
function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}

// Button.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('handles click event', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

## Queries

### getBy
\`\`\`jsx
// getBy - finds element, throws if not found
screen.getByText('Hello');
screen.getByRole('button');
screen.getByTestId('my-element');
screen.getByLabelText('Email');
screen.getByPlaceholderText('Enter name');
screen.getByDisplayValue('John');
\`\`\`

### queryBy
\`\`\`jsx
// queryBy - finds element, returns null if not found
screen.queryByText('Not Found');
\`\`\`

### findBy
\`\`\`jsx
// findBy - finds element async
const element = await screen.findByText('Loading...');
\`\`\`

## User Events

\`\`\`jsx
import userEvent from '@testing-library/user-event';

// Click
await userEvent.click(button);

// Type
await userEvent.type(input, 'hello');

// Select
await userEvent.selectOptions(select, 'option-value');

// Hover
await userEvent.hover(element);
await userEvent.unhover(element);
\`\`\`

## Async Testing

\`\`\`jsx
import { waitFor } from '@testing-library/react';

test('shows loading then data', async () => {
    render(<DataComponent />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
        expect(screen.getByText('Data loaded')).toBeInTheDocument();
    });
});
\`\`\`

## Mocking API

\`\`\`jsx
// api.js
export const fetchUsers = () => {
    return fetch('/api/users').then(res => res.json());
};

// Component.test.jsx
jest.mock('./api');

test('fetches and displays users', async () => {
    const users = [{ id: 1, name: 'John' }];
    fetchUsers.mockResolvedValue(users);
    
    render(<UserList />);
    await waitFor(() => {
        expect(screen.getByText('John')).toBeInTheDocument();
    });
});
\`\`\`

## Best Practices

1. **Test behavior, not implementation**
2. **Use screen queries**
3. **Use userEvent over fireEvent**
4. **Use findBy for async**
5. **Mock API calls**
6. **Test user interactions**
7. **Avoid testing implementation details**
8. **Keep tests simple**
  `,
  quiz: [
    {
      question: "Library untuk testing React adalah?",
      options: ["React Testing Library", "Enzyme", "Cypress", "Playwright"],
      correctAnswer: 0
    },
    {
      question: "Query yang throws error jika elemen tidak ditemukan adalah?",
      options: ["queryBy", "getBy", "findBy", "allBy"],
      correctAnswer: 1
    },
    {
      question: "Method untuk mengetik di input adalah?",
      options: ["type", "fill", "keyboard", "change"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete React Testing Examples",
      code: `// ============================================
// 1. Button Component
// ============================================
// Button.jsx
import { useState } from 'react';

export function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}

// Button.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
    test('renders with children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });
    
    test('handles click', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click</Button>);
        await userEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

// ============================================
// 2. Form Component
// ============================================
// Form.jsx
import { useState } from 'react';

export function Form({ onSubmit }) {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                data-testid="email-input"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

// Form.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Form', () => {
    test('submits with email', async () => {
        const handleSubmit = jest.fn();
        render(<Form onSubmit={handleSubmit} />);
        
        const input = screen.getByTestId('email-input');
        await userEvent.type(input, 'test@example.com');
        await userEvent.click(screen.getByText('Submit'));
        
        expect(handleSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
    });
});

// ============================================
// 3. Counter Component
// ============================================
// Counter.jsx
import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p data-testid="count">Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

// Counter.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
    test('increments count', async () => {
        render(<Counter />);
        const count = screen.getByTestId('count');
        
        expect(count).toHaveTextContent('Count: 0');
        await userEvent.click(screen.getByText('Increment'));
        expect(count).toHaveTextContent('Count: 1');
    });
    
    test('decrements count', async () => {
        render(<Counter />);
        const count = screen.getByTestId('count');
        
        await userEvent.click(screen.getByText('Decrement'));
        expect(count).toHaveTextContent('Count: -1');
    });
});

// ============================================
// 4. Async Component
// ============================================
// UserList.jsx
import { useState, useEffect } from 'react';

export function UserList({ fetchUsers }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchUsers()
            .then(setUsers)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [fetchUsers]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

// UserList.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { UserList } from './UserList';

describe('UserList', () => {
    test('shows loading then users', async () => {
        const mockUsers = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
        const fetchUsers = jest.fn().mockResolvedValue(mockUsers);
        
        render(<UserList fetchUsers={fetchUsers} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(screen.getByText('John')).toBeInTheDocument();
            expect(screen.getByText('Jane')).toBeInTheDocument();
        });
    });
    
    test('shows error when fetch fails', async () => {
        const fetchUsers = jest.fn().mockRejectedValue(new Error('Failed'));
        
        render(<UserList fetchUsers={fetchUsers} />);
        await waitFor(() => {
            expect(screen.getByText('Error: Failed')).toBeInTheDocument();
        });
    });
});`,
      language: "jsx"
    }
  ]
};