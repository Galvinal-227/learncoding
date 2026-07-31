export const chapter = {
  slug: "nestjs-pipes",
  title: "Pipes & Validation",
  description: "Validasi dan transformasi data dengan Pipes, class-validator, class-transformer.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-controllers"],
  tags: ["nestjs", "pipes", "validation", "dto"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Built-in Pipes

| Pipe | Fungsi |
|------|--------|
| **ValidationPipe** | Validasi DTO dengan class-validator |
| **ParseIntPipe** | Transform string ke integer |
| **ParseBoolPipe** | Transform string ke boolean |
| **ParseUUIDPipe** | Validasi UUID format |
| **DefaultValuePipe** | Set default value |
| **ParseEnumPipe** | Validasi enum values |

## ValidationPipe Setup

\`\`\`bash
npm install class-validator class-transformer
\`\`\`

\`\`\`typescript
// main.ts
app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Hapus field yang tidak didefinisikan di DTO
    forbidNonWhitelisted: true, // Error jika ada unknown field
    transform: true,        // Auto-transform types
    transformOptions: {
        enableImplicitConversion: true
    }
}));
\`\`\`

## DTO dengan Validation

\`\`\`typescript
import { IsString, IsEmail, IsInt, Min, Max, IsOptional, IsEnum } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email: string;
    
    @IsInt()
    @Min(0)
    @Max(150)
    @IsOptional()
    age?: number;
    
    @IsEnum(['user', 'admin'])
    @IsOptional()
    role?: string;
}
\`\`\`

## Use Pipes

\`\`\`typescript
// Controller-level
@Controller('users')
@UsePipes(new ValidationPipe())
export class UsersController {}

// Method-level
@Post()
@UsePipes(new ValidationPipe())
create(@Body() dto: CreateUserDto) {}

// Parameter-level
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {}  // Auto-transform to number!
\`\`\`

## Custom Pipe

\`\`\`typescript
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform {
    transform(value: string) {
        const num = parseInt(value, 10);
        if (isNaN(num) || num <= 0) {
            throw new BadRequestException('Must be a positive integer');
        }
        return num;
    }
}
\`\`\`
  `,

  quiz: [
    { question: "ValidationPipe?", options: ["Routing", "Validasi DTO + transform", "Auth", "Logging"], correctAnswer: 1 },
    { question: "class-validator?", options: ["Testing", "Decorator validation (@IsEmail, @Min)", "ORM", "Logging"], correctAnswer: 1 }
  ],

  codeExamples: []
};