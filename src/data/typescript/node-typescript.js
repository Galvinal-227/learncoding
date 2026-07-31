export const chapter = {
  slug: "node-typescript",
  title: "Node.js with TypeScript",
  description: "Mengembangkan aplikasi Node.js dengan TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-installation"],
  tags: ["typescript", "nodejs", "express", "backend"],
  order: 15,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Setup Node.js dengan TypeScript

### Install Dependencies
\`\`\`bash
npm init -y
npm install --save-dev typescript @types/node ts-node nodemon
npm install express
npm install --save-dev @types/express
\`\`\`

### tsconfig.json
\`\`\`json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "lib": ["ES2020"],
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "declaration": true,
        "sourceMap": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
\`\`\`

### package.json Scripts
\`\`\`json
{
    "scripts": {
        "build": "tsc",
        "start": "node dist/index.js",
        "dev": "nodemon --exec ts-node src/index.ts",
        "watch": "tsc --watch"
    }
}
\`\`\`

## Express dengan TypeScript

### Basic Server
\`\`\`typescript
// src/index.ts
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello TypeScript!' });
});

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});
\`\`\`

## Typed Controllers

\`\`\`typescript
// src/controllers/userController.ts
import { Request, Response } from 'express';

interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [
    { id: 1, name: 'John', email: 'john@example.com' }
];

export const getUsers = (req: Request, res: Response): void => {
    res.json(users);
};

export const getUser = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
    }
    res.json(user);
};

export const createUser = (req: Request, res: Response): void => {
    const { name, email } = req.body;
    const newUser: User = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
};
\`\`\`

## Typed Routes

\`\`\`typescript
// src/routes/userRoutes.ts
import { Router } from 'express';
import { getUsers, getUser, createUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);

export default router;
\`\`\`

## Type Safety with Database

\`\`\`typescript
// src/models/User.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'users'
});

export default User;
\`\`\`

## Error Handling

\`\`\`typescript
// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
    public statusCode: number;
    
    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const statusCode = (err as AppError).statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(statusCode).json({
        error: {
            message,
            status: statusCode,
            timestamp: new Date().toISOString()
        }
    });
};
\`\`\`

## Environment Variables

\`\`\`typescript
// src/config/env.ts
import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
    database: {
        url: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
}

const config: Config = {
    port: parseInt(process.env.PORT || '3000'),
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        url: process.env.DATABASE_URL || 'postgresql://localhost:5432/db'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    }
};

export default config;
\`\`\`

## Best Practices

1. **Use strict mode** in tsconfig
2. **Use interfaces** for DTOs
3. **Use generics** for reusable functions
4. **Use async/await** for async code
5. **Use error handling** middleware
6. **Use environment variables** for config
7. **Use type guards** for validation
8. **Use @types** for third-party libs
  `,
  quiz: [
    {
      question: "Package untuk Node.js types adalah?",
      options: ["@types/node", "node-types", "types-node", "node-typings"],
      correctAnswer: 0
    },
    {
      question: "Package untuk Express types adalah?",
      options: ["@types/express", "express-types", "types-express", "express-typings"],
      correctAnswer: 0
    },
    {
      question: "Tool untuk development dengan TypeScript adalah?",
      options: ["ts-node", "tsc", "ts-loader", "typescript"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Node.js TypeScript Example",
      code: `// ============================================
// 1. package.json
// ============================================
{
    "name": "node-ts-api",
    "version": "1.0.0",
    "scripts": {
        "build": "tsc",
        "start": "node dist/index.js",
        "dev": "nodemon --exec ts-node src/index.ts",
        "lint": "eslint src/**/*.ts",
        "test": "jest",
        "watch": "tsc --watch"
    },
    "dependencies": {
        "express": "^4.18.0",
        "dotenv": "^16.0.0",
        "cors": "^2.8.5",
        "helmet": "^7.0.0"
    },
    "devDependencies": {
        "@types/express": "^4.17.0",
        "@types/node": "^20.0.0",
        "@types/cors": "^2.8.0",
        "typescript": "^5.0.0",
        "ts-node": "^10.0.0",
        "nodemon": "^3.0.0",
        "eslint": "^8.0.0",
        "@typescript-eslint/eslint-plugin": "^6.0.0",
        "@typescript-eslint/parser": "^6.0.0"
    }
}

// ============================================
// 2. src/index.ts
// ============================================
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/env';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
    logger.info(\`\${req.method} \${req.path}\`);
    next();
});

// Routes
app.use('/api/users', userRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Error handling
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
    logger.info(\`Server running on port \${PORT}\`);
    logger.info(\`Environment: \${config.nodeEnv}\`);
});

// ============================================
// 3. src/config/env.ts
// ============================================
import dotenv from 'dotenv';

dotenv.config();

export interface Config {
    port: number;
    nodeEnv: string;
    apiUrl: string;
    database: {
        url: string;
        pool: {
            min: number;
            max: number;
        };
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
}

const config: Config = {
    port: parseInt(process.env.PORT || '3000'),
    nodeEnv: process.env.NODE_ENV || 'development',
    apiUrl: process.env.API_URL || 'http://localhost:3000',
    database: {
        url: process.env.DATABASE_URL || 'postgresql://localhost:5432/db',
        pool: {
            min: parseInt(process.env.DB_POOL_MIN || '0'),
            max: parseInt(process.env.DB_POOL_MAX || '10')
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'default-secret-key',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    }
};

export default config;

// ============================================
// 4. src/models/User.ts
// ============================================
export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserDto {
    name: string;
    email: string;
}

export interface UpdateUserDto {
    name?: string;
    email?: string;
}

// In-memory database
let users: User[] = [];
let nextId = 1;

export const userModel = {
    findAll: (): User[] => users,
    
    findById: (id: number): User | undefined => {
        return users.find(u => u.id === id);
    },
    
    create: (data: CreateUserDto): User => {
        const newUser: User = {
            id: nextId++,
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        users.push(newUser);
        return newUser;
    },
    
    update: (id: number, data: UpdateUserDto): User | undefined => {
        const user = users.find(u => u.id === id);
        if (!user) return undefined;
        
        Object.assign(user, data);
        user.updatedAt = new Date();
        return user;
    },
    
    delete: (id: number): boolean => {
        const index = users.findIndex(u => u.id === id);
        if (index === -1) return false;
        users.splice(index, 1);
        return true;
    }
};

// ============================================
// 5. src/services/userService.ts
// ============================================
import { User, CreateUserDto, UpdateUserDto, userModel } from '../models/User';
import { AppError } from '../middleware/errorHandler';
import { logger } from '../utils/logger';

export class UserService {
    async getAllUsers(): Promise<User[]> {
        try {
            return userModel.findAll();
        } catch (error) {
            logger.error('Error fetching users:', error);
            throw new AppError('Failed to fetch users', 500);
        }
    }
    
    async getUserById(id: number): Promise<User> {
        const user = userModel.findById(id);
        if (!user) {
            throw new AppError(\`User with id \${id} not found\`, 404);
        }
        return user;
    }
    
    async createUser(data: CreateUserDto): Promise<User> {
        // Validate email
        if (!data.email.includes('@')) {
            throw new AppError('Invalid email format', 400);
        }
        
        // Check if email exists
        const existing = userModel.findAll().find(u => u.email === data.email);
        if (existing) {
            throw new AppError('Email already exists', 409);
        }
        
        return userModel.create(data);
    }
    
    async updateUser(id: number, data: UpdateUserDto): Promise<User> {
        const user = userModel.findById(id);
        if (!user) {
            throw new AppError(\`User with id \${id} not found\`, 404);
        }
        
        // Validate email if provided
        if (data.email && !data.email.includes('@')) {
            throw new AppError('Invalid email format', 400);
        }
        
        const updated = userModel.update(id, data);
        if (!updated) {
            throw new AppError('Failed to update user', 500);
        }
        return updated;
    }
    
    async deleteUser(id: number): Promise<void> {
        const user = userModel.findById(id);
        if (!user) {
            throw new AppError(\`User with id \${id} not found\`, 404);
        }
        
        const deleted = userModel.delete(id);
        if (!deleted) {
            throw new AppError('Failed to delete user', 500);
        }
    }
}

export const userService = new UserService();

// ============================================
// 6. src/controllers/userController.ts
// ============================================
import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/userService';
import { CreateUserDto, UpdateUserDto } from '../models/User';

export class UserController {
    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.getAllUsers();
            res.json({
                success: true,
                data: users,
                count: users.length
            });
        } catch (error) {
            next(error);
        }
    }
    
    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const user = await userService.getUserById(id);
            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            next(error);
        }
    }
    
    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const data: CreateUserDto = req.body;
            const user = await userService.createUser(data);
            res.status(201).json({
                success: true,
                data: user
            });
        } catch (error) {
            next(error);
        }
    }
    
    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const data: UpdateUserDto = req.body;
            const user = await userService.updateUser(id, data);
            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            next(error);
        }
    }
    
    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            await userService.deleteUser(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

export const userController = new UserController();

// ============================================
// 7. src/routes/userRoutes.ts
// ============================================
import { Router } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

router.get('/', userController.getUsers.bind(userController));
router.get('/:id', userController.getUser.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));

export default router;

// ============================================
// 8. src/middleware/errorHandler.ts
// ============================================
import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;
    
    constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const statusCode = (err as AppError).statusCode || 500;
    const message = err.message || 'Internal Server Error';
    const isOperational = (err as AppError).isOperational || false;
    
    console.error(\`[ERROR] \${message}\`);
    console.error(err.stack);
    
    res.status(statusCode).json({
        error: {
            message,
            status: statusCode,
            timestamp: new Date().toISOString(),
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

// ============================================
// 9. src/utils/logger.ts
// ============================================
export const logger = {
    info: (message: string, ...args: any[]): void => {
        console.log(\`[INFO] \${message}\`, ...args);
    },
    error: (message: string, ...args: any[]): void => {
        console.error(\`[ERROR] \${message}\`, ...args);
    },
    warn: (message: string, ...args: any[]): void => {
        console.warn(\`[WARN] \${message}\`, ...args);
    },
    debug: (message: string, ...args: any[]): void => {
        if (process.env.NODE_ENV === 'development') {
            console.debug(\`[DEBUG] \${message}\`, ...args);
        }
    }
};

// ============================================
// 10. nodemon.json
// ============================================
{
    "watch": ["src"],
    "ext": "ts",
    "ignore": ["src/**/*.spec.ts"],
    "exec": "ts-node src/index.ts"
}`,
      language: "typescript"
    }
  ]
};