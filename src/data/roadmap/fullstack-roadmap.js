export const chapter = {
  slug: "fullstack-roadmap",
  title: "Fullstack Developer Roadmap",
  description: "Panduan lengkap menjadi Fullstack Developer dari nol hingga mahir.",
  icon: "SiFullstack",
  color: "#6C63FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 35,
  prerequisites: ["roadmap-introduction", "roadmap-frontend-roadmap", "roadmap-backend-roadmap"],
  tags: ["fullstack", "frontend", "backend", "database", "devops"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Fullstack Developer Roadmap 2024

## Phase 1: Fundamentals (3-4 Bulan)

### Frontend Basics
\`\`\`html
<!-- HTML Structure -->
<!DOCTYPE html>
<html>
<head>
    <title>Fullstack App</title>
</head>
<body>
    <div id="app"></div>
    <script src="app.js"></script>
</body>
</html>
\`\`\`

\`\`\`css
/* CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
\`\`\`

### Backend Basics
\`\`\`javascript
// Node.js Server
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

app.listen(3000);
\`\`\`

## Phase 2: Frontend Framework (3-4 Bulan)

### React + TypeScript
\`\`\`typescript
// Types
interface User {
    id: number;
    name: string;
    email: string;
}

// Component with TypeScript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserListProps {
    limit?: number;
}

const UserList: React.FC<UserListProps> = ({ limit = 10 }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users', {
                params: { limit }
            });
            setUsers(response.data);
        } catch (err) {
            setError('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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

## Phase 3: Backend Framework (3-4 Bulan)

### Node.js + Express + TypeScript
\`\`\`typescript
// types/user.ts
export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    createdAt: Date;
}

// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model<IUser>('User', UserSchema);

// controllers/userController.ts
import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {
    async getUsers(req: Request, res: Response) {
        try {
            const users = await User.find().select('-password');
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            const user = await User.create({
                name,
                email,
                password: hashedPassword
            });
            
            const token = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET!,
                { expiresIn: '1h' }
            );
            
            res.status(201).json({
                user: { id: user._id, name: user.name, email: user.email },
                token
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

// routes/userRoutes.ts
import express from 'express';
import { UserController } from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const userController = new UserController();

router.get('/', authenticate, userController.getUsers);
router.post('/', userController.createUser);

export default router;
\`\`\`

## Phase 4: Database (2-3 Bulan)

### PostgreSQL
\`\`\`sql
-- Schema
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Queries
SELECT 
    u.name,
    p.title,
    p.content,
    COUNT(c.id) as comment_count
FROM posts p
JOIN users u ON p.user_id = u.id
LEFT JOIN comments c ON c.post_id = p.id
WHERE p.created_at > '2024-01-01'
GROUP BY p.id, u.name
ORDER BY comment_count DESC
LIMIT 10;
\`\`\`

### MongoDB (Alternative)
\`\`\`javascript
// MongoDB Models
const PostSchema = new Schema({
    title: String,
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        content: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Aggregation Pipeline
const postsWithStats = await Post.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'author'
        }
    },
    { $unwind: '$author' },
    {
        $project: {
            title: 1,
            content: 1,
            'author.name': 1,
            commentCount: { $size: '$comments' },
            createdAt: 1
        }
    },
    { $sort: { createdAt: -1 } },
    { $limit: 10 }
]);
\`\`\`

## Phase 5: API & Integration (2-3 Bulan)

### REST API with Pagination & Filtering
\`\`\`typescript
// Complete API with filtering, pagination, sorting
interface QueryOptions {
    page?: number;
    limit?: number;
    sort?: string;
    filter?: Record<string, any>;
}

class APIService {
    async getPosts(options: QueryOptions) {
        const {
            page = 1,
            limit = 10,
            sort = '-createdAt',
            filter = {}
        } = options;

        const query = Post.find(filter);
        const total = await Post.countDocuments(filter);
        
        const posts = await query
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit)
            .populate('author', 'name email');

        return {
            data: posts,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            },
            links: {
                self: \`/api/posts?page=\${page}&limit=\${limit}\`,
                next: page < Math.ceil(total / limit) 
                    ? \`/api/posts?page=\${page + 1}&limit=\${limit}\`
                    : null,
                prev: page > 1
                    ? \`/api/posts?page=\${page - 1}&limit=\${limit}\`
                    : null
            }
        };
    }
}
\`\`\`

### GraphQL API
\`\`\`graphql
# schema.graphql
type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
    comments: [Comment!]!
    createdAt: String!
}

type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
    tags: [String!]!
    createdAt: String!
}

type Comment {
    id: ID!
    content: String!
    author: User!
    post: Post!
    createdAt: String!
}

type Query {
    users: [User!]!
    user(id: ID!): User
    posts(
        page: Int,
        limit: Int,
        sort: String,
        filter: PostFilterInput
    ): PostPaginated!
    post(id: ID!): Post
    search(query: String!): SearchResult!
}

type Mutation {
    createUser(input: CreateUserInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload!
    createPost(input: CreatePostInput!): Post!
    updatePost(id: ID!, input: UpdatePostInput!): Post!
    deletePost(id: ID!): Boolean!
    createComment(input: CreateCommentInput!): Comment!
}

# Implementation
const resolvers = {
    Query: {
        posts: async (_, { page = 1, limit = 10, sort, filter }) => {
            const posts = await Post.find()
                .skip((page - 1) * limit)
                .limit(limit)
                .sort(sort || '-createdAt');
            const total = await Post.countDocuments();
            
            return {
                data: posts,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            };
        }
    }
};
\`\`\`

## Phase 6: Authentication & Authorization (2-3 Bulan)

### JWT with Refresh Tokens
\`\`\`typescript
// auth.service.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

export class AuthService {
    async register(input: RegisterInput) {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        
        const user = await User.create({
            ...input,
            password: hashedPassword
        });
        
        return this.generateTokens(user);
    }
    
    async login(input: LoginInput) {
        const user = await User.findOne({ email: input.email });
        if (!user) {
            throw new Error('User not found');
        }
        
        const isValid = await bcrypt.compare(input.password, user.password);
        if (!isValid) {
            throw new Error('Invalid password');
        }
        
        return this.generateTokens(user);
    }
    
    async refreshToken(refreshToken: string) {
        try {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET!);
            const user = await User.findById(decoded.id);
            if (!user) {
                throw new Error('User not found');
            }
            
            return this.generateTokens(user);
        } catch (error) {
            throw new Error('Invalid refresh token');
        }
    }
    
    private generateTokens(user: any) {
        const accessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '15m' }
        );
        
        const refreshToken = jwt.sign(
            { id: user._id },
            process.env.REFRESH_SECRET!,
            { expiresIn: '7d' }
        );
        
        return {
            accessToken,
            refreshToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        };
    }
}

// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// RBAC
export const authorize = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        
        next();
    };
};
\`\`\`

## Phase 7: Real-time Features (1-2 Bulan)

### WebSocket with Socket.io
\`\`\`javascript
// Server
const io = require('socket.io')(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST']
    }
});

io.use((socket, next) => {
    // Authentication middleware
    const token = socket.handshake.auth.token;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        socket.userId = decoded.id;
        next();
    } catch (err) {
        next(new Error('Authentication error'));
    }
});

io.on('connection', (socket) => {
    console.log(\`User \${socket.userId} connected\`);
    
    // Join user room
    socket.join(\`user:\${socket.userId}\`);
    
    // Handle messages
    socket.on('message', async (data) => {
        const message = await Message.create({
            sender: socket.userId,
            receiver: data.receiverId,
            content: data.content
        });
        
        // Send to receiver if online
        io.to(\`user:\${data.receiverId}\`).emit('message', message);
    });
    
    // Handle typing indicator
    socket.on('typing', (data) => {
        socket.to(\`user:\${data.receiverId}\`).emit('typing', {
            from: socket.userId
        });
    });
    
    // Handle disconnect
    socket.on('disconnect', () => {
        console.log(\`User \${socket.userId} disconnected\`);
    });
});

// Client - React
import io from 'socket.io-client';

const useSocket = () => {
    const [socket, setSocket] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        const socket = io(process.env.API_URL, {
            auth: { token }
        });
        
        socket.on('connect', () => {
            console.log('Connected to server');
        });
        
        socket.on('message', (data) => {
            // Handle incoming message
            storeMessage(data);
        });
        
        setSocket(socket);
        
        return () => {
            socket.disconnect();
        };
    }, []);
    
    const sendMessage = (receiverId, content) => {
        socket.emit('message', { receiverId, content });
    };
    
    return { socket, sendMessage };
};
\`\`\`

## Phase 8: Testing (2-3 Bulan)

### Unit Tests
\`\`\`javascript
// tests/userController.test.js
const request = require('supertest');
const app = require('../app');
const { User } = require('../models');

describe('User Controller', () => {
    test('GET /api/users - should return users', async () => {
        const response = await request(app)
            .get('/api/users')
            .set('Authorization', \`Bearer \${testToken}\`);
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
    
    test('POST /api/users - should create user', async () => {
        const userData = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123'
        };
        
        const response = await request(app)
            .post('/api/users')
            .send(userData);
        
        expect(response.status).toBe(201);
        expect(response.body.user).toHaveProperty('id');
        expect(response.body.user.email).toBe(userData.email);
    });
});

// React Component Test
import { render, screen, fireEvent } from '@testing-library/react';
import UserList from './UserList';

test('renders user list', async () => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];
    
    render(<UserList users={users} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
});
\`\`\`

### E2E Tests
\`\`\`javascript
// tests/e2e/app.spec.js
describe('Fullstack App E2E', () => {
    it('should login and create a post', () => {
        cy.visit('/login');
        
        // Login
        cy.get('[data-testid="email"]').type('test@example.com');
        cy.get('[data-testid="password"]').type('password123');
        cy.get('[data-testid="login-btn"]').click();
        
        // Create post
        cy.get('[data-testid="create-post"]').click();
        cy.get('[data-testid="title"]').type('My First Post');
        cy.get('[data-testid="content"]').type('This is my first post');
        cy.get('[data-testid="submit"]').click();
        
        // Verify
        cy.contains('My First Post').should('exist');
    });
});
\`\`\`

## Phase 9: Deployment & DevOps (2-3 Bulan)

### Docker & Kubernetes
\`\`\`yaml
# docker-compose.fullstack.yml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://api:5000
    depends_on:
      - api
    networks:
      - app-network

  api:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://postgres:secret@db:5432/app
      - JWT_SECRET=secret
      - PORT=5000
    depends_on:
      - db
    networks:
      - app-network

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=app
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=secret
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - frontend
      - api
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  pgdata:
\`\`\`

## Project Ideas (Fullstack)

1. **Blog Platform** - Posts, comments, user profiles
2. **E-commerce** - Products, cart, orders, payments
3. **Task Management** - Projects, tasks, teams
4. **Social Media** - Posts, likes, followers, messaging
5. **Job Board** - Jobs, applications, companies
6. **Learning Platform** - Courses, lessons, quizzes
7. **Real-time Chat** - Rooms, messages, notifications
8. **Analytics Dashboard** - Charts, reports, data

## Technology Stack Options

### MERN Stack
- MongoDB, Express, React, Node.js

### MEAN Stack
- MongoDB, Express, Angular, Node.js

### MEVN Stack
- MongoDB, Express, Vue.js, Node.js

### JAMstack
- JavaScript, APIs, Markup (Next.js, Gatsby)

## Timeline Summary

| Phase | Duration | Focus |
|-------|----------|-------|
| Phase 1 | 3-4 months | Fundamentals |
| Phase 2 | 3-4 months | Frontend Framework |
| Phase 3 | 3-4 months | Backend Framework |
| Phase 4 | 2-3 months | Database |
| Phase 5 | 2-3 months | API & Integration |
| Phase 6 | 2-3 months | Authentication |
| Phase 7 | 1-2 months | Real-time Features |
| Phase 8 | 2-3 months | Testing |
| Phase 9 | 2-3 months | Deployment |
| **Total** | **20-30 months** | **Fullstack Expert** |
  `,
  quiz: [
    {
      question: "Fullstack developer menguasai?",
      options: [
        "Frontend saja",
        "Backend saja",
        "Frontend dan Backend",
        "Database saja"
      ],
      correctAnswer: 2
    },
    {
      question: "MERN stack terdiri dari?",
      options: [
        "MySQL, Express, React, Node.js",
        "MongoDB, Express, React, Node.js",
        "MongoDB, Express, Ruby, Node.js",
        "MySQL, Express, Ruby, Node.js"
      ],
      correctAnswer: 1
    },
    {
      question: "Tools untuk real-time communication adalah?",
      options: [
        "Socket.io",
        "Axios",
        "Fetch API",
        "Express.js"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Fullstack Project Structure",
      code: `// Project Structure
my-fullstack-app/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   └── Card/
│   │   │   ├── features/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   ├── Register.jsx
│   │   │   │   │   └── AuthContext.js
│   │   │   │   └── posts/
│   │   │   │       ├── PostList.jsx
│   │   │   │       ├── PostForm.jsx
│   │   │   │       └── PostDetail.jsx
│   │   │   └── layout/
│   │   │       ├── Header.jsx
│   │   │       └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Profile.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Post.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── postController.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── postRoutes.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── validation.js
│   │   ├── services/
│   │   │   ├── emailService.js
│   │   │   └── authService.js
│   │   ├── utils/
│   │   │   └── logger.js
│   │   └── app.js
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   └── package.json
│
├── docker-compose.yml
├── nginx.conf
└── README.md

// Environment Variables
// .env.frontend
VITE_API_URL=http://localhost:5000/api
VITE_WEBSOCKET_URL=ws://localhost:5000

// .env.backend
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://postgres:secret@localhost:5432/app
JWT_SECRET=your-secret-key
REFRESH_SECRET=your-refresh-key
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-password
REDIS_URL=redis://localhost:6379
CLIENT_URL=http://localhost:3000
`,
      language: "javascript"
    }
  ]
};