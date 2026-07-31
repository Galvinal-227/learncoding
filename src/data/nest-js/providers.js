export const chapter = {
  slug: "nestjs-providers",
  title: "Providers & Services",
  description: "Dependency Injection, Services, dan Provider patterns di NestJS.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["nestjs-modules"],
  tags: ["nestjs", "providers", "services", "dependency-injection"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Provider?

Provider adalah class yang bisa di-**inject** sebagai dependency. Biasanya **Services**, tapi bisa juga Repository, Factory, Helper.

## Service

\`\`\`typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: User[] = [];
    
    findAll(): User[] {
        return this.users;
    }
    
    findOne(id: number): User {
        return this.users.find(user => user.id === id);
    }
    
    create(data: CreateUserDto): User {
        const user = { id: Date.now(), ...data };
        this.users.push(user);
        return user;
    }
    
    remove(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}
\`\`\`

## Dependency Injection

\`\`\`typescript
@Controller('users')
export class UsersController {
    // NestJS auto-inject UsersService
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll() {
        return this.usersService.findAll();
    }
}
\`\`\`

## Custom Provider

\`\`\`typescript
// Value provider
@Module({
    providers: [
        { provide: 'API_KEY', useValue: 'secret-key-123' }
    ]
})

// Use in service
@Injectable()
export class AppService {
    constructor(@Inject('API_KEY') private apiKey: string) {}
}

// Factory provider
@Module({
    providers: [
        {
            provide: 'DATABASE_CONNECTION',
            useFactory: async (config: ConfigService) => {
                return await createConnection(config.db);
            },
            inject: [ConfigService]
        }
    ]
})
\`\`\`

## Provider Scopes

\`\`\`typescript
// DEFAULT (Singleton)
@Injectable()
export class AppService {}

// Request-scoped (new instance per request)
@Injectable({ scope: Scope.REQUEST })
export class RequestService {}

// Transient (new instance per injection)
@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {}
\`\`\`

## Optional Providers

\`\`\`typescript
@Injectable()
export class HttpService<T> {
    constructor(@Optional() @Inject('HTTP_OPTIONS') private options: T) {}
}
\`\`\`
  `,

  quiz: [
    { question: "@Injectable()?", options: ["Controller", "Service/Provider (bisa di-inject)", "Module", "Guard"], correctAnswer: 1 },
    { question: "Singleton scope?", options: ["New per request", "Satu instance untuk seluruh app (default)", "New per injection", "Tidak ada"], correctAnswer: 1 }
  ],

  codeExamples: []
};