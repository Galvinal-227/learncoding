export const chapter = {
  slug: "frontend-roadmap",
  title: "Frontend Developer Roadmap",
  description: "Panduan lengkap menjadi Frontend Developer dari nol hingga mahir.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 30,
  prerequisites: ["roadmap-introduction"],
  tags: ["frontend", "html", "css", "javascript", "react", "vue"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Frontend Developer Roadmap 2024

## Phase 1: Fundamentals (2-3 Bulan)

### HTML & CSS
\`\`\`html
<!-- Basic HTML Structure -->
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome</h1>
    </header>
    <main>
        <section>
            <p>Content</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024</p>
    </footer>
</body>
</html>
\`\`\`

**Topics:**
- Semantic HTML
- CSS Flexbox & Grid
- Responsive Design
- CSS Variables
- Sass/SCSS

### JavaScript Fundamentals
\`\`\`javascript
// ES6+ JavaScript
const greet = (name) => {
    return \`Hello, \${name}!\`;
};

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

// Async/Await
const fetchData = async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};
\`\`\`

**Topics:**
- ES6+ (let/const, arrow functions, destructuring)
- DOM Manipulation
- Events
- Async/Await & Promises
- Fetch API
- Error Handling

## Phase 2: Version Control (1 Bulan)

### Git & GitHub
\`\`\`bash
# Basic Git Commands
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/repo.git
git push -u origin main

# Branching
git branch feature
git checkout feature
git merge feature
\`\`\`

## Phase 3: Frameworks (3-4 Bulan)

### React (Recommended)
\`\`\`jsx
// React Component
import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="user-list">
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
\`\`\`

**React Topics:**
- Components & Props
- State & Lifecycle
- Hooks (useState, useEffect, useContext)
- Context API
- React Router
- State Management (Redux, Zustand)

### Or Vue.js
\`\`\`vue
<!-- Vue 3 Component -->
<template>
    <div class="user-list">
        <div v-if="loading">Loading...</div>
        <UserCard 
            v-for="user in users" 
            :key="user.id" 
            :user="user"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserCard from './UserCard.vue';

const users = ref([]);
const loading = ref(true);

const fetchUsers = async () => {
    try {
        const response = await fetch('/api/users');
        users.value = await response.json();
    } catch (error) {
        console.error('Error:', error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchUsers();
});
</script>
\`\`\`

## Phase 4: Advanced Topics (2-3 Bulan)

### Performance
- Code Splitting
- Lazy Loading
- Memoization
- Virtual DOM Optimization

### Testing
\`\`\`javascript
// Jest + React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import UserList from './UserList';

test('renders user list', async () => {
    render(<UserList />);
    const userElements = await screen.findAllByText(/User/i);
    expect(userElements.length).toBeGreaterThan(0);
});
\`\`\`

### State Management
- Redux Toolkit
- Zustand
- React Query

### Build Tools
- Vite
- Webpack
- Babel

## Phase 5: Production Ready (1-2 Bulan)

### Deployment
- Netlify
- Vercel
- AWS S3 + CloudFront

### Monitoring
- Error Tracking (Sentry)
- Analytics
- Performance Monitoring

## Resource Recommendations

### Books
- "Eloquent JavaScript" - Marijn Haverbeke
- "You Don't Know JS" - Kyle Simpson
- "JavaScript: The Good Parts" - Douglas Crockford

### Courses
- The Odin Project (Free)
- FreeCodeCamp (Free)
- Frontend Masters (Paid)
- Udemy Courses

### Practice Platforms
- LeetCode
- CodeWars
- Frontend Mentor
- Codepen

## Project Ideas

1. **Portfolio Website** - Personal branding
2. **Todo App** - CRUD operations
3. **Weather App** - API integration
4. **E-commerce** - Shopping cart, filters
5. **Blog** - CMS, Markdown
6. **Dashboard** - Charts, data visualization
7. **Social Media App** - Real-time features
8. **Task Management** - Drag and drop

## Job Preparation

### Technical Skills
- Data Structures & Algorithms
- System Design
- Problem Solving

### Soft Skills
- Communication
- Teamwork
- Problem-solving
- Time Management

### Interview Prep
- Practice coding challenges
- System design questions
- Behavioral questions
- Portfolio presentation

## Timeline Summary

| Phase | Duration | Focus |
|-------|----------|-------|
| Phase 1 | 2-3 months | HTML, CSS, JavaScript |
| Phase 2 | 1 month | Git, GitHub |
| Phase 3 | 3-4 months | Framework (React/Vue) |
| Phase 4 | 2-3 months | Advanced topics |
| Phase 5 | 1-2 months | Production ready |
| **Total** | **9-13 months** | **Job Ready** |
  `,
  quiz: [
    {
      question: "Skill pertama yang harus dipelajari untuk Frontend Developer adalah?",
      options: [
        "React",
        "HTML & CSS",
        "Node.js",
        "TypeScript"
      ],
      correctAnswer: 1
    },
    {
      question: "Library JavaScript yang paling populer untuk Frontend adalah?",
      options: [
        "Angular",
        "Vue.js",
        "React",
        "Svelte"
      ],
      correctAnswer: 2
    },
    {
      question: "Tools untuk deployment Frontend aplikasi adalah?",
      options: [
        "Docker",
        "Vercel",
        "Kubernetes",
        "AWS EC2"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Modern React App Structure",
      code: `// Project Structure
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── index.jsx
│   │   │   └── Button.module.css
│   │   └── Card/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   └── users/
│   │       ├── UserList.jsx
│   │       └── UserCard.jsx
│   └── layouts/
│       ├── Header.jsx
│       └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── hooks/
│   ├── useAuth.js
│   └── useFetch.js
├── context/
│   └── AuthContext.js
├── services/
│   └── api.js
├── utils/
│   └── helpers.js
├── styles/
│   └── global.css
├── App.jsx
├── main.jsx
└── index.html

// Component Example
// Button/index.jsx
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick }) => {
    return (
        <button 
            className={\`\${styles.button} \${styles[variant]}\`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

// Custom Hook - useFetch
// hooks/useFetch.js
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};`,
      language: "javascript"
    }
  ]
};