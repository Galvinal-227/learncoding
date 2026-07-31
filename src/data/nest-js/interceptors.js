export const chapter = {
  slug: "nestjs-interceptors",
  title: "Interceptors",
  description: "Transform response, logging, caching dengan Interceptors.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-controllers"],
  tags: ["nestjs", "interceptors", "transform", "logging"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Interceptor?

Interceptor membungkus request/response. Bisa:
- Transform response
- Logging
- Caching
- Timing
- Exception mapping

## Logging Interceptor

\`\`\`typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const { method, url } = request;
        const now = Date.now();
        
        return next.handle().pipe(
            tap(() => console.log(\`\${method} \${url} - \${Date.now() - now}ms\`))
        );
    }
}
\`\`\`

## Transform Interceptor

\`\`\`typescript
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(data => ({
                success: true,
                data,
                timestamp: new Date().toISOString()
            }))
        );
    }
}
\`\`\`

## Use Interceptors

\`\`\`typescript
// Controller-level
@Controller('users')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class UsersController {}

// Global
app.useGlobalInterceptors(new TransformInterceptor());
\`\`\`

## Cache Interceptor

\`\`\`typescript
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class UsersController {}

// Auto-cache GET responses!
\`\`\`
  `,

  quiz: [
    { question: "Interceptor?", options: ["Auth", "Wrap request/response (transform, log, cache)", "Validation", "Routing"], correctAnswer: 1 },
    { question: "CacheInterceptor?", options: ["Manual", "Auto-cache GET responses", "Database", "Queue"], correctAnswer: 1 }
  ],

  codeExamples: []
};