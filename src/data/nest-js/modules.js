export const chapter = {
  slug: "nestjs-modules",
  title: "Modules",
  description: "Organisasi kode dengan Modules - fondasi arsitektur NestJS.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-introduction"],
  tags: ["nestjs", "modules", "architecture", "di"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Module?

Module adalah class dengan **@Module()** decorator yang mengorganisir komponen terkait (controllers, services). Setiap aplikasi NestJS minimal punya **root module**.

## Module Structure

\`\`\`typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],           // Import module lain
    controllers: [UsersController],    // Controllers
    providers: [UsersService],         // Services/Providers
    exports: [UsersService]            // Export untuk module lain
})
export class UsersModule {}
\`\`\`

## Module Properties

| Property | Deskripsi |
|----------|-----------|
| **imports** | Module lain yang dibutuhkan |
| **controllers** | Controllers yang di-handle |
| **providers** | Services/providers yang di-inject |
| **exports** | Providers yang bisa dipakai module lain |

## Feature Modules

\`\`\`typescript
// users.module.ts
@Module({
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]  // Export agar bisa dipakai AuthModule
})
export class UsersModule {}

// auth.module.ts
@Module({
    imports: [UsersModule],  // Import untuk pakai UsersService
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
\`\`\`

## Shared Modules

\`\`\`typescript
// prisma.module.ts
@Global()  // Bisa dipakai semua module tanpa import!
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}
\`\`\`

## Dynamic Modules

\`\`\`typescript
@Module({})
export class DatabaseModule {
    static register(options: DatabaseOptions): DynamicModule {
        return {
            module: DatabaseModule,
            providers: [
                { provide: 'CONFIG', useValue: options },
                DatabaseService
            ],
            exports: [DatabaseService]
        };
    }
}

// Usage
@Module({
    imports: [DatabaseModule.register({ host: 'localhost', port: 5432 })]
})
export class AppModule {}
\`\`\`
  `,

  quiz: [
    { question: "@Module() imports?", options: ["Controllers", "Module lain yang di-import", "Services", "Routes"], correctAnswer: 1 },
    { question: "@Global()?", options: ["Private", "Module tersedia di semua module tanpa import", "Deprecated", "Controller"], correctAnswer: 1 }
  ],

  codeExamples: []
};