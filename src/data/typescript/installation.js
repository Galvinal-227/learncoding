export const chapter = {
  slug: "installation",
  title: "Instalasi & Setup",
  description: "Menginstal dan mengkonfigurasi TypeScript untuk berbagai project.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["typescript-introduction"],
  tags: ["typescript", "installation", "setup", "tsconfig"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Instalasi TypeScript

### Global Install
\`\`\`bash
npm install -g typescript
tsc --version
\`\`\`

### Project Local
\`\`\`bash
npm init -y
npm install --save-dev typescript
npx tsc --version
\`\`\`

## tsconfig.json

### Initialize
\`\`\`bash
npx tsc --init
\`\`\`

### Basic Config
\`\`\`json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
\`\`\`

### Advanced Config
\`\`\`json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ES2020",
        "lib": ["ES2020", "DOM"],
        "jsx": "react-jsx",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "allowSyntheticDefaultImports": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@components/*": ["src/components/*"],
            "@utils/*": ["src/utils/*"]
        }
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist", "coverage"]
}
\`\`\`

## Setup dengan Build Tools

### Node.js
\`\`\`json
// package.json
{
    "scripts": {
        "build": "tsc",
        "start": "node dist/index.js",
        "dev": "ts-node src/index.ts",
        "watch": "tsc --watch"
    },
    "devDependencies": {
        "typescript": "^5.0.0",
        "ts-node": "^10.0.0",
        "@types/node": "^20.0.0"
    }
}
\`\`\`

### React (Create React App)
\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

### Next.js
\`\`\`bash
npx create-next-app@latest my-app --typescript
\`\`\`

### Vite
\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

### Webpack
\`\`\`javascript
// webpack.config.js
module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
\`\`\`

## ESLint dengan TypeScript

\`\`\`bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
\`\`\`

\`\`\`javascript
// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': 'error'
    }
};
\`\`\`

## Node Types

\`\`\`bash
npm install --save-dev @types/node
\`\`\`

## Jest dengan TypeScript

\`\`\`bash
npm install --save-dev @types/jest ts-jest
\`\`\`

\`\`\`javascript
// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts']
};
\`\`\`

## Best Practices

1. **Use strict mode** - strict: true
2. **Use ES modules** - module: ES2020
3. **Use path aliases** - untuk clean imports
4. **Use ts-node** untuk development
5. **Use @types** untuk third-party libraries
6. **Use ESLint** untuk code quality
7. **Use Jest** untuk testing
8. **Use watch mode** untuk development
  `,
  quiz: [
    {
      question: "Perintah untuk init tsconfig.json adalah?",
      options: ["tsc --init", "ts init", "typescript init", "tsc init"],
      correctAnswer: 0
    },
    {
      question: "Property untuk strict mode di tsconfig adalah?",
      options: ["strict", "strictMode", "noImplicitAny", "allStrict"],
      correctAnswer: 0
    },
    {
      question: "Template React dengan TypeScript adalah?",
      options: ["react-ts", "react-typescript", "typescript-react", "react-ts-template"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete TypeScript Setup",
      code: `// ============================================
// 1. package.json
// ============================================
{
    "name": "typescript-project",
    "version": "1.0.0",
    "scripts": {
        "build": "tsc",
        "start": "node dist/index.js",
        "dev": "ts-node src/index.ts",
        "watch": "tsc --watch",
        "lint": "eslint src/**/*.ts",
        "test": "jest",
        "format": "prettier --write src/**/*.ts"
    },
    "devDependencies": {
        "@types/jest": "^29.0.0",
        "@types/node": "^20.0.0",
        "@typescript-eslint/eslint-plugin": "^6.0.0",
        "@typescript-eslint/parser": "^6.0.0",
        "eslint": "^8.0.0",
        "jest": "^29.0.0",
        "prettier": "^3.0.0",
        "ts-jest": "^29.0.0",
        "ts-node": "^10.0.0",
        "typescript": "^5.0.0"
    }
}

// ============================================
// 2. tsconfig.json
// ============================================
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
        "declarationMap": true,
        "sourceMap": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@components/*": ["src/components/*"],
            "@utils/*": ["src/utils/*"],
            "@types/*": ["src/types/*"]
        }
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist", "coverage", "**/*.test.ts"]
}

// ============================================
// 3. .eslintrc.js
// ============================================
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn'
    }
};

// ============================================
// 4. .prettierrc
// ============================================
{
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 100,
    "tabWidth": 4,
    "useTabs": false
}

// ============================================
// 5. jest.config.js
// ============================================
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.d.ts',
        '!src/index.ts'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};

// ============================================
// 6. src/index.ts
// ============================================
import { config } from './config';
import { logger } from './utils/logger';

const app = {
    start() {
        logger.info(\`Server running on port \${config.port}\`);
    }
};

app.start();

// ============================================
// 7. src/config/index.ts
// ============================================
import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: parseInt(process.env.PORT || '3000'),
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        url: process.env.DATABASE_URL || 'postgresql://localhost:5432/db'
    }
};

// ============================================
// 8. src/utils/logger.ts
// ============================================
export const logger = {
    info: (message: string, ...args: unknown[]): void => {
        console.log(\`[INFO] \${message}\`, ...args);
    },
    error: (message: string, ...args: unknown[]): void => {
        console.error(\`[ERROR] \${message}\`, ...args);
    },
    warn: (message: string, ...args: unknown[]): void => {
        console.warn(\`[WARN] \${message}\`, ...args);
    },
    debug: (message: string, ...args: unknown[]): void => {
        if (process.env.NODE_ENV === 'development') {
            console.debug(\`[DEBUG] \${message}\`, ...args);
        }
    }
};

// ============================================
// 9. src/types/index.d.ts
// ============================================
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string;
            NODE_ENV: 'development' | 'production' | 'test';
            DATABASE_URL: string;
        }
    }
}

export {};

// ============================================
// 10. VS Code Settings
// ============================================
// .vscode/settings.json
{
    "typescript.preferences.importModuleSpecifier": "relative",
    "typescript.suggest.autoImports": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}`,
      language: "json"
    }
  ]
};