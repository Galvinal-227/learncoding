export const chapter = {
  slug: "nestjs-testing",
  title: "Testing NestJS",
  description: "Unit testing dan E2E testing dengan Jest dan Supertest.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-providers"],
  tags: ["nestjs", "testing", "jest", "supertest"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Unit Testing (Service)

\`\`\`typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
    let service: UsersService;
    
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService]
        }).compile();
        
        service = module.get<UsersService>(UsersService);
    });
    
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    
    it('should create user', () => {
        const user = service.create({ name: 'Budi', email: 'budi@email.com' });
        expect(user.name).toBe('Budi');
        expect(user.email).toBe('budi@email.com');
    });
    
    it('should find all users', () => {
        service.create({ name: 'Budi', email: 'budi@email.com' });
        const users = service.findAll();
        expect(users.length).toBeGreaterThan(0);
    });
});
\`\`\`

## Mock Dependencies

\`\`\`typescript
const mockUsersService = {
    findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Test' }]),
    findOne: jest.fn().mockResolvedValue({ id: 1, name: 'Test' }),
    create: jest.fn().mockReturnValue({ id: 1, name: 'Test' })
};

const module = await Test.createTestingModule({
    controllers: [UsersController],
    providers: [
        { provide: UsersService, useValue: mockUsersService }
    ]
}).compile();
\`\`\`

## E2E Testing

\`\`\`typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UsersController (e2e)', () => {
    let app: INestApplication;
    
    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();
        
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    
    it('GET /users', () => {
        return request(app.getHttpServer())
            .get('/users')
            .expect(200)
            .expect(res => {
                expect(Array.isArray(res.body)).toBe(true);
            });
    });
    
    it('POST /users', () => {
        return request(app.getHttpServer())
            .post('/users')
            .send({ name: 'Budi', email: 'budi@test.com' })
            .expect(201)
            .expect(res => {
                expect(res.body.name).toBe('Budi');
            });
    });
    
    it('GET /users/999', () => {
        return request(app.getHttpServer())
            .get('/users/999')
            .expect(404);
    });
    
    afterAll(async () => {
        await app.close();
    });
});
\`\`\`

## Testing Guards

\`\`\`typescript
const mockJwtGuard = {
    canActivate: jest.fn(() => true)
};

const module = await Test.createTestingModule({
    controllers: [UsersController],
    providers: [UsersService]
})
    .overrideGuard(JwtAuthGuard)
    .useValue(mockJwtGuard)
    .compile();
\`\`\`

## Testing Pipes

\`\`\`typescript
it('should validate DTO', async () => {
    const pipe = new ValidationPipe({ transform: true });
    const dto = { name: 'Budi', email: 'invalid-email' };
    
    await expect(
        pipe.transform(dto, { type: 'body', metatype: CreateUserDto } as any)
    ).rejects.toThrow();
});
\`\`\`
  `,

  quiz: [
    { question: "Test.createTestingModule()?", options: ["Production", "Buat test module (isolated)", "Deploy", "Start server"], correctAnswer: 1 },
    { question: "E2E testing tool?", options: ["Jest only", "Supertest (HTTP assertions)", "Cypress", "Selenium"], correctAnswer: 1 }
  ],

  codeExamples: []
};