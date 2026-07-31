export const chapter = {
  slug: "react-typescript",
  title: "React with TypeScript",
  description: "Mengembangkan aplikasi React dengan TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["typescript-introduction", "typescript-installation"],
  tags: ["typescript", "react", "components", "hooks"],
  order: 16,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Setup React dengan TypeScript

### Create React App
\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

### Vite
\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

### Next.js
\`\`\`bash
npx create-next-app@latest my-app --typescript
\`\`\`

## Component Types

### Functional Component
\`\`\`typescript
// components/Button.tsx
import React from 'react';

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false
}) => {
    const className = \`btn btn-\${variant} btn-\${size}\`;
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
\`\`\`

## Props Types

### Basic Props
\`\`\`typescript
interface Props {
    name: string;
    age: number;
    isActive: boolean;
    children?: React.ReactNode;
}
\`\`\`

### Event Handlers
\`\`\`typescript
interface Props {
    onChange: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
}
\`\`\`

### Style Props
\`\`\`typescript
interface Props {
    style?: React.CSSProperties;
    className?: string;
}
\`\`\`

## Hooks with TypeScript

### useState
\`\`\`typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);
\`\`\`

### useEffect
\`\`\`typescript
useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/api/data');
        const data: Data = await response.json();
        setData(data);
    };
    fetchData();
}, []);
\`\`\`

### useRef
\`\`\`typescript
const inputRef = useRef<HTMLInputElement>(null);
const divRef = useRef<HTMLDivElement>(null);
\`\`\`

### useReducer
\`\`\`typescript
type State = { count: number };
type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        default: return state;
    }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
\`\`\`

### Custom Hooks
\`\`\`typescript
// hooks/useFetch.ts
import { useState, useEffect } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setState({ data, loading: false, error: null }))
            .catch(error => setState({ data: null, loading: false, error }));
    }, [url]);
    
    return state;
}
\`\`\`

## Context with TypeScript

\`\`\`typescript
// contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
\`\`\`

## API Integration

\`\`\`typescript
// services/api.ts
interface User {
    id: number;
    name: string;
    email: string;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

const api = {
    getUsers: async (): Promise<ApiResponse<User[]>> => {
        const response = await fetch('/api/users');
        return response.json();
    },
    
    getUser: async (id: number): Promise<ApiResponse<User>> => {
        const response = await fetch(\`/api/users/\${id}\`);
        return response.json();
    },
    
    createUser: async (user: Omit<User, 'id'>): Promise<ApiResponse<User>> => {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user)
        });
        return response.json();
    }
};
\`\`\`

## Best Practices

1. **Use interfaces** for props
2. **Use React.FC** for components
3. **Use type inference** when possible
4. **Use generics** for hooks
5. **Use union types** for variants
6. **Use optional props** with ?
7. **Use children prop** with React.ReactNode
8. **Use event types** properly
9. **Use Context** for global state
10. **Use custom hooks** for logic
  `,
  quiz: [
    {
      question: "Type untuk props children adalah?",
      options: ["React.ReactNode", "React.Children", "JSX.Element", "React.ReactElement"],
      correctAnswer: 0
    },
    {
      question: "Type untuk event form adalah?",
      options: ["React.FormEvent", "React.ChangeEvent", "React.SyntheticEvent", "React.Event"],
      correctAnswer: 0
    },
    {
      question: "Template Create React App dengan TypeScript adalah?",
      options: ["--typescript", "--ts", "--type-script", "--template typescript"],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "Complete React TypeScript Example",
      code: `// ============================================
// 1. components/Button.tsx
// ============================================
import React from 'react';

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    label,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    loading = false,
    type = 'button',
    className = '',
    children
}) => {
    const classes = [
        'btn',
        \`btn-\${variant}\`,
        \`btn-\${size}\`,
        disabled && 'btn-disabled',
        loading && 'btn-loading',
        className
    ].filter(Boolean).join(' ');
    
    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading && <span className="spinner" />}
            {label || children}
        </button>
    );
};

export default Button;

// ============================================
// 2. components/Input.tsx
// ============================================
import React from 'react';

interface InputProps {
    label?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    placeholder?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    value,
    onChange,
    type = 'text',
    placeholder,
    error,
    required = false,
    disabled = false,
    className = ''
}) => {
    const inputClasses = [
        'input',
        error && 'input-error',
        className
    ].filter(Boolean).join(' ');
    
    return (
        <div className="input-group">
            {label && (
                <label htmlFor={name} className="input-label">
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                className={inputClasses}
            />
            {error && <span className="input-error-text">{error}</span>}
        </div>
    );
};

export default Input;

// ============================================
// 3. components/UserList.tsx
// ============================================
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { UserService, User } from '../services/userService';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        fetchUsers();
    }, []);
    
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await UserService.getUsers();
            setUsers(data);
        } catch (err) {
            setError('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };
    
    const handleDelete = async (id: number) => {
        try {
            await UserService.deleteUser(id);
            setUsers(users.filter(u => u.id !== id));
        } catch (err) {
            setError('Failed to delete user');
        }
    };
    
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    
    return (
        <div className="user-list">
            <h2>Users ({users.length})</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        <span>{user.name} ({user.email})</span>
                        <Button
                            label="Delete"
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(user.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

// ============================================
// 4. components/UserForm.tsx
// ============================================
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { UserService, CreateUserDto } from '../services/userService';

interface UserFormProps {
    onSuccess?: () => void;
    onCancel?: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSuccess, onCancel }) => {
    const [form, setForm] = useState<CreateUserDto>({
        name: '',
        email: ''
    });
    const [errors, setErrors] = useState<Partial<Record<keyof CreateUserDto, string>>>({});
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        // Clear error for field
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };
    
    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof CreateUserDto, string>> = {};
        
        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!form.email.includes('@')) {
            newErrors.email = 'Invalid email format';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        
        try {
            setLoading(true);
            await UserService.createUser(form);
            setForm({ name: '', email: '' });
            onSuccess?.();
        } catch (err) {
            setErrors({ submit: 'Failed to create user' });
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <Input
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                required
            />
            
            <Input
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
            />
            
            {errors.submit && (
                <div className="form-error">{errors.submit}</div>
            )}
            
            <div className="form-actions">
                <Button
                    label="Cancel"
                    variant="secondary"
                    onClick={onCancel}
                    disabled={loading}
                />
                <Button
                    label="Create"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                />
            </div>
        </form>
    );
};

export default UserForm;

// ============================================
// 5. services/userService.ts
// ============================================
export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateUserDto {
    name: string;
    email: string;
}

export interface UpdateUserDto {
    name?: string;
    email?: string;
}

// Simulated API
const API_URL = '/api/users';
let users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
];
let nextId = 3;

export const UserService = {
    async getUsers(): Promise<User[]> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return [...users];
    },
    
    async getUser(id: number): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 300));
        const user = users.find(u => u.id === id);
        if (!user) throw new Error('User not found');
        return user;
    },
    
    async createUser(data: CreateUserDto): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 500));
        const newUser: User = {
            id: nextId++,
            ...data,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        users.push(newUser);
        return newUser;
    },
    
    async updateUser(id: number, data: UpdateUserDto): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 500));
        const user = users.find(u => u.id === id);
        if (!user) throw new Error('User not found');
        
        Object.assign(user, data, { updatedAt: new Date().toISOString() });
        return user;
    },
    
    async deleteUser(id: number): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 300));
        const index = users.findIndex(u => u.id === id);
        if (index === -1) throw new Error('User not found');
        users.splice(index, 1);
    }
};

// ============================================
// 6. contexts/UserContext.tsx
// ============================================
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../services/userService';

interface UserContextType {
    users: User[];
    setUsers: (users: User[]) => void;
    addUser: (user: User) => void;
    removeUser: (id: number) => void;
    updateUser: (id: number, user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    
    const addUser = (user: User) => {
        setUsers(prev => [...prev, user]);
    };
    
    const removeUser = (id: number) => {
        setUsers(prev => prev.filter(u => u.id !== id));
    };
    
    const updateUser = (id: number, user: User) => {
        setUsers(prev => prev.map(u => u.id === id ? user : u));
    };
    
    return (
        <UserContext.Provider value={{ users, setUsers, addUser, removeUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUsers must be used within a UserProvider');
    }
    return context;
};

// ============================================
// 7. App.tsx
// ============================================
import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { UserProvider } from './contexts/UserContext';
import './styles/App.css';

const App: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    
    return (
        <UserProvider>
            <div className="app">
                <header>
                    <h1>User Management</h1>
                    <Button
                        label={showForm ? 'Hide Form' : 'Add User'}
                        variant="primary"
                        onClick={() => setShowForm(!showForm)}
                    />
                </header>
                
                {showForm && (
                    <section className="form-section">
                        <UserForm
                            onSuccess={() => setShowForm(false)}
                            onCancel={() => setShowForm(false)}
                        />
                    </section>
                )}
                
                <section className="list-section">
                    <UserList />
                </section>
            </div>
        </UserProvider>
    );
};

export default App;

// ============================================
// 8. types/index.ts
// ============================================
export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export type SortOrder = 'asc' | 'desc';
export type FilterOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'in';

export interface Filter {
    field: string;
    operator: FilterOperator;
    value: unknown;
}`,
      language: "typescript"
    }
  ]
};