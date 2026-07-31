export const chapter = {
  slug: "nestjs-introduction",
  title: "Pengenalan NestJS",
  description: "Pahami apa itu NestJS, arsitekturnya, dan kenapa jadi pilihan enterprise.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["node-js-introduction", "typescript-introduction"],
  tags: ["nestjs", "nodejs", "typescript", "backend"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu NestJS?

NestJS adalah **framework Node.js progresif** untuk membangun aplikasi server-side yang **scalable, maintainable, dan testable**. Terinspirasi Angular (decorators, modules, DI). Dibangun di atas **Express** (default) atau **Fastify**.

## Kenapa NestJS?

- 🏗️ **Opinionated structure** - Modules, Controllers, Services (rapih!)
- 📦 **Dependency Injection** - Built-in, powerful
- 🧩 **Decorators** - @Module, @Controller, @Injectable (declarative)
- 🔒 **TypeScript-first** - Tapi support JavaScript
- 🚀 **Fastify support** - 2x lebih cepat dari Express
- 🧪 **Testable** - Unit, E2E testing built-in
- 📚 **Documentation** - Sangat lengkap
- 🌍 **Ecosystem** - Guards, Pipes, Interceptors, Filters

## NestJS vs Express vs Fastify

| | NestJS | Express | Fastify |
|---|--------|---------|---------|
| Struktur | Opinionated (MVC) | Unopinionated | Unopinionated |
| TypeScript | First-class | Manual | Manual |
| DI | Built-in | Tidak ada | Tidak ada |
| Learning curve | Tinggi | Rendah | Rendah |
| Performance | Good (Express/Fastify) | Good | Excellent |
| Cocok | Enterprise, tim besar | API simpel, prototype | High-performance |

## Instalasi

\`\`\`bash
npm install -g @nestjs/cli
nest new my-project
cd my-project
npm run start:dev
\`\`\`

## Struktur Project

\`\`\`
src/
├── main.ts              # Entry point (bootstrap)
├── app.module.ts        # Root module
├── app.controller.ts    # Root controller
├── app.service.ts       # Root service
├── users/
│   ├── users.module.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── dto/
│   │   └── create-user.dto.ts
│   └── entities/
│       └── user.entity.ts
└── common/
    ├── guards/
    ├── pipes/
    ├── interceptors/
    └── filters/
\`\`\`

## Decorators

| Decorator | Fungsi |
|-----------|--------|
| @Module() | Define module |
| @Controller() | Define controller |
| @Injectable() | Define service/provider |
| @Get(), @Post() | HTTP methods |
| @Param(), @Query(), @Body() | Extract request data |
| @UseGuards() | Apply guards |
| @UsePipes() | Apply pipes |
| @UseInterceptors() | Apply interceptors |

## First Endpoint

\`\`\`typescript
// app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getHello(): string {
        return 'Hello NestJS!';
    }
    
    @Get('health')
    health() {
        return { status: 'ok', timestamp: new Date() };
    }
}
\`\`\`
  `,

  quiz: [
    { question: "NestJS terinspirasi?", options: ["React", "Angular", "Vue", "Svelte"], correctAnswer: 1 },
    { question: "NestJS vs Express?", options: ["Sama", "NestJS: opinionated, DI, decorators; Express: minimalis", "NestJS lebih kecil", "Express lebih terstruktur"], correctAnswer: 1 },
    { question: "@Injectable()?", options: ["Controller", "Service/Provider (Dependency Injection)", "Module", "Guard"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "NestJS CLI Commands",
      language: "bash",
      code: `# Install CLI
npm install -g @nestjs/cli

# Create project
nest new my-project

# Generate module
nest g module users

# Generate controller
nest g controller users

# Generate service
nest g service users

# Generate full CRUD resource
nest g resource products

# Run development
npm run start:dev

# Build production
npm run build
npm run start:prod`
    }
  ]
};