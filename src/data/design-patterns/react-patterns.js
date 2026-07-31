export const chapter = {
  slug: "design-patterns-react-patterns",
  title: "React Patterns",
  description: "Kumpulan design patterns khusus React: Compound Components, Render Props, HOC, Custom Hooks, dan lainnya.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Advanced",
  estimatedReadingTime: 30,
  prerequisites: ["design-patterns-introduction", "react-introduction"],
  tags: ["react", "design-patterns", "hooks", "components"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## React Design Patterns

React punya patterns spesifik yang memanfaatkan **komposisi komponen**, **hooks**, dan **declarative nature** React.

## 1. Compound Components

Komponen yang bekerja bersama seperti \`<select>\` + \`<option>\` di HTML native.

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="tabs">{children}</div>
        </TabsContext.Provider>
    );
}

function TabList({ children }) {
    return <div className="tab-list">{children}</div>;
}

function Tab({ tabId, children }) {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    return (
        <button 
            className={\`tab \${activeTab === tabId ? 'active' : ''}\`}
            onClick={() => setActiveTab(tabId)}
        >
            {children}
        </button>
    );
}

function TabPanels({ children }) {
    return <div className="tab-panels">{children}</div>;
}

function TabPanel({ tabId, children }) {
    const { activeTab } = useContext(TabsContext);
    if (activeTab !== tabId) return null;
    return <div className="tab-panel">{children}</div>;
}

// Usage - Declarative & Flexible!
<Tabs defaultTab="profile">
    <TabList>
        <Tab tabId="profile">Profile</Tab>
        <Tab tabId="settings">Settings</Tab>
        <Tab tabId="billing">Billing</Tab>
    </TabList>
    <TabPanels>
        <TabPanel tabId="profile"><h2>Profile Content</h2></TabPanel>
        <TabPanel tabId="settings"><h2>Settings Content</h2></TabPanel>
        <TabPanel tabId="billing"><h2>Billing Content</h2></TabPanel>
    </TabPanels>
</Tabs>
\`\`\`

## 2. Render Props

Share logic antar komponen via **prop yang berupa function**.

\`\`\`jsx
class MouseTracker extends React.Component {
    state = { x: 0, y: 0 };
    
    handleMouseMove = (e) => {
        this.setState({ x: e.clientX, y: e.clientY });
    };
    
    render() {
        return (
            <div onMouseMove={this.handleMouseMove} style={{ height: '100vh' }}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

// Usage
<MouseTracker render={({ x, y }) => (
    <h1>Mouse position: {x}, {y}</h1>
)} />
\`\`\`

### Modern Alternative: Custom Hooks
\`\`\`jsx
function useMouse() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);
    
    return position;
}

function MouseDisplay() {
    const { x, y } = useMouse();
    return <h1>Mouse position: {x}, {y}</h1>;
}
\`\`\`

## 3. Higher-Order Components (HOC)

Fungsi yang menerima komponen dan mengembalikan komponen baru.

\`\`\`jsx
// HOC
function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        const { user, loading } = useAuth();
        
        if (loading) return <Spinner />;
        if (!user) return <Redirect to="/login" />;
        
        return <Component {...props} user={user} />;
    };
}

// Usage
function Dashboard({ user }) {
    return <h1>Welcome, {user.name}!</h1>;
}

const ProtectedDashboard = withAuth(Dashboard);
\`\`\`

### HOC vs Hooks
\`\`\`jsx
// ✅ Modern: Custom Hook (lebih simple)
function useAuth() {
    const { user, loading } = useContext(AuthContext);
    return { user, loading, isAuthenticated: !!user };
}

function Dashboard() {
    const { user, loading, isAuthenticated } = useAuth();
    
    if (loading) return <Spinner />;
    if (!isAuthenticated) return <Redirect to="/login" />;
    
    return <h1>Welcome, {user.name}!</h1>;
}
\`\`\`

## 4. Custom Hooks Pattern

Ekstrak logic reusable ke custom hook.

\`\`\`jsx
// useDebounce
function useDebounce(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);
    
    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    
    return debounced;
}

// useLocalStorage
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}

// useFetch
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const controller = new AbortController();
        
        fetch(url, { signal: controller.signal })
            .then(res => res.json())
            .then(setData)
            .catch(err => err.name !== 'AbortError' && setError(err))
            .finally(() => setLoading(false));
        
        return () => controller.abort();
    }, [url]);
    
    return { data, loading, error };
}
\`\`\`

## 5. Container/Presentational Pattern

Pisahkan **logic** (container) dari **UI** (presentational).

\`\`\`jsx
// Presentational (UI only, no logic)
function UserList({ users, onUserClick, loading }) {
    if (loading) return <div>Loading...</div>;
    if (!users.length) return <div>No users found</div>;
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id} onClick={() => onUserClick(user)}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

// Container (logic only, no UI)
function UserListContainer() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchUsers().then(data => {
            setUsers(data);
            setLoading(false);
        });
    }, []);
    
    const handleUserClick = (user) => {
        router.push(\`/users/\${user.id}\`);
    };
    
    return <UserList users={users} loading={loading} onUserClick={handleUserClick} />;
}
\`\`\`

## 6. State Reducer Pattern

\`\`\`jsx
function useReducerState(reducer, initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const actions = useMemo(() => {
        const actionTypes = Object.keys(reducer.actions || {});
        return actionTypes.reduce((acc, type) => ({
            ...acc,
            [type]: (payload) => dispatch({ type, payload })
        }), {});
    }, [reducer]);
    
    return [state, actions];
}

// Usage
const counterReducer = {
    initialState: { count: 0 },
    
    increment: (state) => ({ count: state.count + 1 }),
    decrement: (state) => ({ count: state.count - 1 }),
    reset: () => ({ count: 0 }),
    setCount: (state, payload) => ({ count: payload })
};

function Counter() {
    const [state, actions] = useReducerState(counterReducer);
    
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={actions.increment}>+</button>
            <button onClick={actions.decrement}>-</button>
            <button onClick={actions.reset}>Reset</button>
            <button onClick={() => actions.setCount(100)}>Set 100</button>
        </div>
    );
}
\`\`\`

## 7. Provider Pattern (Context)

\`\`\`jsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

// Usage
function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <Main />
        </ThemeProvider>
    );
}
\`\`\`

## 8. Slots Pattern (Composition)

\`\`\`jsx
function Card({ header, children, footer }) {
    return (
        <div className="card">
            {header && <div className="card-header">{header}</div>}
            <div className="card-body">{children}</div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}

// Usage
<Card 
    header={<h3>Title</h3>}
    footer={<button>Save</button>}
>
    <p>Main content goes here...</p>
    <p>Can be anything!</p>
</Card>
\`\`\`

## 9. Polymorphic Components

\`\`\`jsx
function Button({ as: Component = 'button', children, ...props }) {
    return <Component {...props}>{children}</Component>;
}

// Usage
<Button>Default button</Button>
<Button as="a" href="/page">Link button</Button>
<Button as={Link} to="/page">Router link</Button>
\`\`\`

## 10. Error Boundary Pattern

\`\`\`jsx
class ErrorBoundary extends React.Component {
    state = { error: null };
    
    static getDerivedStateFromError(error) {
        return { error };
    }
    
    componentDidCatch(error, info) {
        console.error('Error caught:', error, info);
    }
    
    render() {
        if (this.state.error) {
            return this.props.fallback || <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
}

// Usage
<ErrorBoundary fallback={<p>Failed to load</p>}>
    <SuspiciousComponent />
</ErrorBoundary>
\`\`\`

## Pattern Selection Guide

| Pattern | Kapan Pakai |
|---------|-------------|
| **Compound Components** | Komponen yang butuh koordinasi (\`<Tabs>\`, \`<Select>\`) |
| **Render Props** | Share logic antar komponen (sekarang lebih baik pakai hooks) |
| **HOC** | Cross-cutting concerns (auth, logging) |
| **Custom Hooks** | Logic reusable (useFetch, useLocalStorage) |
| **Container/Presentational** | Pisah logic & UI, testing lebih mudah |
| **Provider/Context** | Global state (theme, auth, language) |
| **State Reducer** | Complex state logic |
| **Slots** | Komponen yang flexible layout-nya |
| **Polymorphic** | Komponen yang bisa ganti tag HTML |
| **Error Boundary** | Tangkap error di production |
  `,

  quiz: [
    {
      question: "Compound Components pattern?",
      options: [
        "Komponen tunggal",
        "Komponen yang bekerja bersama (seperti <select>+<option>)",
        "HOC pattern",
        "Render props"
      ],
      correctAnswer: 1,
      explanation: "Compound Components adalah sekelompok komponen yang berbagi state dan bekerja bersama secara deklaratif."
    },
    {
      question: "Modern alternative Render Props?",
      options: ["HOC", "Custom Hooks", "Context only", "Redux"],
      correctAnswer: 1,
      explanation: "Custom Hooks menggantikan Render Props untuk sharing logic. Lebih simple, tidak bikin nested component."
    },
    {
      question: "Container/Presentational pattern manfaat?",
      options: [
        "Lebih cepat",
        "Pisah logic & UI (testing, reusability)",
        "Hanya untuk styling",
        "Wajib di React"
      ],
      correctAnswer: 1,
      explanation: "Memisahkan logic (container) dari UI (presentational) membuat testing lebih mudah dan komponen lebih reusable."
    },
    {
      question: "Polymorphic component?",
      options: [
        "Komponen dengan banyak state",
        "Komponen yang bisa render sebagai tag HTML berbeda",
        "HOC",
        "Error boundary"
      ],
      correctAnswer: 1,
      explanation: "Polymorphic component bisa di-render sebagai elemen HTML yang berbeda via prop 'as' atau 'component'."
    },
    {
      question: "Kapan pakai Error Boundary?",
      options: [
        "Setiap komponen",
        "Di production untuk tangkap error & tampilkan fallback UI",
        "Hanya development",
        "Tidak perlu"
      ],
      correctAnswer: 1,
      explanation: "Error Boundary menangkap error di production dan menampilkan fallback UI, mencegah seluruh app crash."
    }
  ],

  codeExamples: [
    {
      title: "Compound Tabs Component Lengkap",
      language: "jsx",
      code: `import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="tabs-container">{children}</div>
        </TabsContext.Provider>
    );
}

Tabs.List = function TabList({ children }) {
    return <div className="tab-list">{children}</div>;
};

Tabs.Tab = function Tab({ tabId, children }) {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    const isActive = activeTab === tabId;
    return (
        <button 
            className={\`tab \${isActive ? 'active' : ''}\`}
            onClick={() => setActiveTab(tabId)}
            role="tab"
            aria-selected={isActive}
        >
            {children}
        </button>
    );
};

Tabs.Panels = function TabPanels({ children }) {
    return <div className="tab-panels">{children}</div>;
};

Tabs.Panel = function TabPanel({ tabId, children }) {
    const { activeTab } = useContext(TabsContext);
    if (activeTab !== tabId) return null;
    return (
        <div className="tab-panel" role="tabpanel">
            {children}
        </div>
    );
};

// Usage
function App() {
    return (
        <Tabs defaultTab="tab1">
            <Tabs.List>
                <Tabs.Tab tabId="tab1">First Tab</Tabs.Tab>
                <Tabs.Tab tabId="tab2">Second Tab</Tabs.Tab>
                <Tabs.Tab tabId="tab3">Third Tab</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
                <Tabs.Panel tabId="tab1">Content 1</Tabs.Panel>
                <Tabs.Panel tabId="tab2">Content 2</Tabs.Panel>
                <Tabs.Panel tabId="tab3">Content 3</Tabs.Panel>
            </Tabs.Panels>
        </Tabs>
    );
}`,
      output: "Compound Tabs component yang fully accessible dan declarative."
    }
  ]
};