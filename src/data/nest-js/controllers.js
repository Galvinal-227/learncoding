export const chapter = {
  slug: "nestjs-controllers",
  title: "Controllers",
  description: "Handle HTTP requests dengan Controllers, routing, dan decorators.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-modules"],
  tags: ["nestjs", "controllers", "routing", "http"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Controller

\`\`\`typescript
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';

@Controller('users')  // Prefix: /users
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    // GET /users
    @Get()
    findAll(@Query('page') page: number, @Query('limit') limit: number) {
        return this.usersService.findAll({ page, limit });
    }
    
    // GET /users/:id
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }
    
    // POST /users
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
    
    // PUT /users/:id
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    
    // DELETE /users/:id
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
\`\`\`

## Request Decorators

| Decorator | Extract |
|-----------|---------|
| @Param('id') | Route parameter |
| @Query('page') | Query string |
| @Body() | Request body |
| @Headers('auth') | Header |
| @Req() | Full request object |
| @Res() | Full response object (hindari) |
| @HttpCode(204) | Set status code |
| @Header('key', 'value') | Set response header |

## Route Wildcards

\`\`\`typescript
@Get('ab*cd')  // Matches: abcd, abxcd, ab123cd
findAll() { ... }
\`\`\`

## Async

\`\`\`typescript
@Get()
async findAll(): Promise<User[]> {
    return this.usersService.findAll();  // NestJS auto-handle async
}
\`\`\`

## DTO (Data Transfer Object)

\`\`\`typescript
// dto/create-user.dto.ts
export class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly age?: number;
}

@Post()
create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
}
\`\`\`
  `,

  quiz: [
    { question: "@Param('id')?", options: ["Query string", "Route parameter /users/:id", "Request body", "Header"], correctAnswer: 1 },
    { question: "@Query()?", options: ["Route param", "Query string ?page=1", "Body", "Header"], correctAnswer: 1 }
  ],

  codeExamples: []
};