export const chapter = {
  slug: "tsconfig",
  title: "tsconfig.json",
  description: "Mengkonfigurasi TypeScript dengan tsconfig.json untuk berbagai project.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["typescript-introduction", "typescript-installation"],
  tags: ["typescript", "tsconfig", "configuration", "compiler"],
  order: 17,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu tsconfig.json?

tsconfig.json adalah file konfigurasi utama untuk TypeScript compiler.

## Basic Configuration

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

## Compiler Options

### Target
\`\`\`json
{
    "compilerOptions": {
        "target": "ES5",      // ES5
        "target": "ES2015",   // ES6
        "target": "ES2020",   // ES2020
        "target": "ESNext"    // Latest
    }
}
\`\`\`

### Module System
\`\`\`json
{
    "compilerOptions": {
        "module": "commonjs",    // Node.js
        "module": "ES2020",      // ES Modules
        "module": "ESNext",      // Latest ES
        "module": "AMD",         // AMD
        "module": "UMD"          // UMD
    }
}
\`\`\`

### Strict Options
\`\`\`json
{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "strictBindCallApply": true,
        "strictPropertyInitialization": true,
        "noImplicitThis": true,
        "alwaysStrict": true
    }
}
\`\`\`

### Output Options
\`\`\`json
{
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src",
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "removeComments": true,
        "noEmit": false,
        "noEmitOnError": true
    }
}
\`\`\`

### Module Resolution
\`\`\`json
{
    "compilerOptions": {
        "moduleResolution": "node",
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@components/*": ["src/components/*"],
            "@utils/*": ["src/utils/*"]
        },
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true
    }
}
\`\`\`

## Project Types

### Node.js Project
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
    "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
\`\`\`

### React Project
\`\`\`json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ES2020",
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "jsx": "react-jsx",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist", "**/*.test.tsx"]
}
\`\`\`

### Next.js Project
\`\`\`json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "jsx": "preserve",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "incremental": true,
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"]
        },
        "plugins": [
            {
                "name": "next"
            }
        ]
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
}
\`\`\`

### Library Project
\`\`\`json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ES2020",
        "lib": ["ES2020"],
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "moduleResolution": "node"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
\`\`\`

## Files Include/Exclude

\`\`\`json
{
    "include": [
        "src/**/*",
        "tests/**/*",
        "scripts/**/*"
    ],
    "exclude": [
        "node_modules",
        "dist",
        "coverage",
        "**/*.test.ts",
        "**/*.spec.ts"
    ],
    "files": [
        "src/index.ts",
        "src/types.d.ts"
    ]
}
\`\`\`

## Extends

\`\`\`json
{
    "extends": "@tsconfig/node18/tsconfig.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    }
}
\`\`\`

## Best Practices

1. **Use strict mode** - strict: true
2. **Use appropriate target** - based on environment
3. **Use source maps** - for debugging
4. **Use declaration** - for libraries
5. **Use path aliases** - for clean imports
6. **Use extends** - for base configs
7. **Use noEmit** - for type-check only
8. **Use incremental** - for faster builds
  `,
  quiz: [
    {
      question: "Property untuk strict mode di tsconfig adalah?",
      options: ["strict", "strictMode", "noImplicitAny", "allStrict"],
      correctAnswer: 0
    },
    {
      question: "Property untuk output directory adalah?",
      options: ["outDir", "outputDir", "dist", "build"],
      correctAnswer: 0
    },
    {
      question: "Property untuk path aliases adalah?",
      options: ["paths", "aliases", "resolutions", "modules"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete tsconfig Examples",
      code: `// ============================================
// 1. Base tsconfig.json
// ============================================
{
    "compilerOptions": {
        // Language and Environment
        "target": "ES2020",
        "lib": ["ES2020"],
        "jsx": "react-jsx",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        
        // Modules
        "module": "commonjs",
        "moduleResolution": "node",
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@components/*": ["src/components/*"],
            "@utils/*": ["src/utils/*"],
            "@types/*": ["src/types/*"]
        },
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        
        // Type Checking
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "strictBindCallApply": true,
        "strictPropertyInitialization": true,
        "noImplicitThis": true,
        "alwaysStrict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        
        // Output
        "outDir": "./dist",
        "rootDir": "./src",
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "removeComments": true,
        "noEmit": false,
        "noEmitOnError": true,
        
        // Interop Constraints
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "forceConsistentCasingInFileNames": true,
        
        // Advanced
        "skipLibCheck": true,
        "resolveJsonModule": true,
        "incremental": true,
        "tsBuildInfoFile": ".tsbuildinfo"
    },
    "include": ["src/**/*", "tests/**/*"],
    "exclude": ["node_modules", "dist", "coverage", "**/*.test.ts"]
}

// ============================================
// 2. Node.js Specific
// ============================================
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "lib": ["ES2020"],
        "outDir": "./dist",
        "rootDir": "./src",
        "types": ["node"],
        "esModuleInterop": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}

// ============================================
// 3. React Specific
// ============================================
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
        "target": "ES2020",
        "module": "ES2020",
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "jsx": "react-jsx",
        "moduleResolution": "node",
        "isolatedModules": true,
        "noEmit": true,
        "types": ["react", "react-dom", "jest", "node"]
    },
    "include": ["src/**/*", "src/**/*.d.ts"],
    "exclude": ["node_modules", "dist", "**/*.test.tsx"]
}

// ============================================
// 4. Next.js Specific
// ============================================
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "jsx": "preserve",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "incremental": true,
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"],
            "@/components/*": ["./src/components/*"],
            "@/lib/*": ["./src/lib/*"],
            "@/styles/*": ["./src/styles/*"]
        },
        "plugins": [
            {
                "name": "next"
            }
        ]
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
}

// ============================================
// 5. Library Specific
// ============================================
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
        "target": "ES2020",
        "module": "ES2020",
        "lib": ["ES2020"],
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "moduleResolution": "node",
        "types": ["node"]
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist", "**/*.test.ts"]
}

// ============================================
// 6. Monorepo Setup
// ============================================
// tsconfig.base.json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "composite": true,
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true
    }
}

// packages/api/tsconfig.json
{
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src",
        "types": ["node"]
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}

// packages/web/tsconfig.json
{
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
        "jsx": "react-jsx",
        "lib": ["DOM", "ES2020"],
        "outDir": "./dist",
        "rootDir": "./src",
        "types": ["react", "react-dom"]
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}

// ============================================
// 7. Testing Configuration
// ============================================
// tsconfig.test.json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "types": ["jest", "node"]
    },
    "include": ["src/**/*.test.ts", "src/**/*.spec.ts", "tests/**/*"]
}

// ============================================
// 8. Build Configuration
// ============================================
// tsconfig.build.json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "noEmit": false,
        "sourceMap": false,
        "removeComments": true
    },
    "exclude": ["**/*.test.ts", "**/*.spec.ts", "tests/**/*"]
}`,
      language: "json"
    }
  ]
};