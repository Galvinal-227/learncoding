export const chapter = {
  slug: "nestjs-middleware",
  title: "Middleware",
  description: "Implementasi middleware di NestJS untuk request preprocessing.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["nestjs-modules"],
  tags: ["nestjs", "middleware", "request", "express"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Middleware?

Middleware adalah fungsi yang dipanggil **sebelum** route handler. Bisa:
- Modifikasi request/response
- Logging
- CORS
- Rate limiting
- Body parsing

## Custom Middleware

\`\`\`typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
        next();
    }
}
\`\`\`

## Apply Middleware

\`\`\`typescript
// app.module.ts
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('*');  // All routes
        
        // Specific routes
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('users', 'products');
        
        // Exclude
        consumer
            .apply(LoggerMiddleware)
            .exclude(
                { path: 'health', method: RequestMethod.GET },
                { path: 'metrics', method: RequestMethod.ALL }
            )
            .forRoutes('*');
    }
}
\`\`\`

## Functional Middleware

\`\`\`typescript
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(\`\${req.method} \${req.url}\`);
    next();
}

// Apply
consumer.apply(logger).forRoutes('*');
\`\`\`

## Third-Party Middleware

\`\`\`typescript
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';

// main.ts
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Atau via consumer
consumer.apply(cors(), helmet()).forRoutes('*');
\`\`\`

## Middleware vs Interceptor vs Guard

| | Middleware | Guard | Interceptor |
|---|----------|-------|-------------|
| Dipanggil | Paling awal | Setelah middleware | Sebelum/sesudah handler |
| Akses request | ✅ | ✅ | ✅ |
| Akses response | ❌ | ❌ | ✅ |
| DI support | ✅ | ✅ | ✅ |
| Use case | Logging, CORS, parsing | Auth, roles | Transform, cache |
  `,

  quiz: [
    { question: "Middleware vs Guard?", options: ["Sama", "Middleware: pre-processing; Guard: authorization", "Guard lebih awal", "Middleware deprecated"], correctAnswer: 1 },
    { question: "forRoutes('*')?", options: ["Specific route", "All routes", "Exclude", "None"], correctAnswer: 1 }
  ],

  codeExamples: []
};