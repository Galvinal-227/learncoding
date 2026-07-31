export const chapter = {
  slug: "nestjs-openapi",
  title: "OpenAPI (Swagger)",
  description: "Generate dokumentasi API otomatis dengan Swagger/OpenAPI.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["nestjs-controllers"],
  tags: ["nestjs", "swagger", "openapi", "documentation"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`bash
npm install @nestjs/swagger
\`\`\`

\`\`\`typescript
// main.ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for My App')
    .setVersion('1.0')
    .addBearerAuth()  // JWT auth
    .addTag('users')
    .addTag('products')
    .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, document);
// Akses: http://localhost:3000/api/docs
\`\`\`

## Decorators

\`\`\`typescript
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    
    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiResponse({ status: 200, description: 'List of users', type: [UserDto] })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    findAll(@Query('page') page: number) {
        return this.usersService.findAll(page);
    }
    
    @Get(':id')
    @ApiParam({ name: 'id', type: String })
    @ApiResponse({ status: 200, type: UserDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }
    
    @Post()
    @ApiOperation({ summary: 'Create new user' })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'User created', type: UserDto })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    create(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }
}
\`\`\`

## DTO with Swagger

\`\`\`typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'Budi', description: 'User full name' })
    name: string;
    
    @ApiProperty({ example: 'budi@email.com', format: 'email' })
    email: string;
    
    @ApiPropertyOptional({ example: 25, minimum: 0, maximum: 150 })
    age?: number;
    
    @ApiProperty({ enum: ['user', 'admin'], default: 'user' })
    role: string;
}
\`\`\`

## CLI Plugin (Auto-generate)

\`\`\`json
// nest-cli.json
{
    "collection": "@nestjs/schematics",
    "compilerOptions": {
        "plugins": ["@nestjs/swagger"]
    }
}
\`\`\`
  `,

  quiz: [
    { question: "SwaggerModule.setup()?", options: ["Database", "Generate Swagger UI di endpoint", "Auth", "Logger"], correctAnswer: 1 },
    { question: "@ApiProperty()?", options: ["Routing", "Dokumentasi field DTO di Swagger", "Validation", "Auth"], correctAnswer: 1 }
  ],

  codeExamples: []
};