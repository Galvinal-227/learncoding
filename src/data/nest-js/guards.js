export const chapter = {
  slug: "nestjs-guards",
  title: "Guards (Authentication)",
  description: "Implementasi authentication & authorization dengan Guards dan JWT.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-providers"],
  tags: ["nestjs", "guards", "authentication", "jwt"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Guard = Authorization

Guard menentukan apakah request **diizinkan** atau tidak (authentication, roles).

## JWT Auth Guard

\`\`\`bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/passport-jwt
\`\`\`

\`\`\`typescript
// jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
\`\`\`

\`\`\`typescript
// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }
    
    async validate(payload: any) {
        return { userId: payload.sub, email: payload.email, role: payload.role };
    }
}
\`\`\`

## Use Guard

\`\`\`typescript
// Controller-level (semua endpoints)
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {}

// Method-level
@Get('profile')
@UseGuards(JwtAuthGuard)
getProfile(@Request() req) {
    return req.user;
}

// Global (main.ts)
app.useGlobalGuards(new JwtAuthGuard());
\`\`\`

## Roles Guard

\`\`\`typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!requiredRoles) return true;
        
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.includes(user.role);
    }
}

// Usage
@SetMetadata('roles', ['admin'])
@Get('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
getAdminData() { ... }
\`\`\`
  `,

  quiz: [
    { question: "Guard?", options: ["Validation", "Authorization (allow/deny request)", "Transformation", "Logging"], correctAnswer: 1 },
    { question: "JWT strategy?", options: ["Database", "Passport JWT (validate token)", "Cache", "Queue"], correctAnswer: 1 }
  ],

  codeExamples: []
};