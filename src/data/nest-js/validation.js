export const chapter = {
  slug: "nestjs-validation",
  title: "Validation & DTO",
  description: "Validasi lanjutan dengan class-validator, custom decorators, dan mapped types.",
  icon: "SiNestjs",
  color: "#E0234E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["nestjs-pipes"],
  tags: ["nestjs", "validation", "dto", "class-validator"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Global Validation Setup

\`\`\`typescript
// main.ts
app.useGlobalPipes(new ValidationPipe({
    whitelist: true,              // Strip unknown properties
    forbidNonWhitelisted: true,   // Throw error on unknown
    transform: true,              // Auto-transform types
    transformOptions: {
        enableImplicitConversion: true  // "1" → 1 (number)
    },
    validationError: {
        target: false,             // Don't expose DTO class
        value: false               // Don't expose invalid value
    }
}));
\`\`\`

## Mapped Types (Partial, Pick, Omit)

\`\`\`bash
npm install @nestjs/mapped-types
\`\`\`

\`\`\`typescript
import { PartialType, PickType, OmitType, IntersectionType } from '@nestjs/mapped-types';

// Base DTO
export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    age: number;
    role: string;
}

// Partial: semua field optional (untuk UPDATE)
export class UpdateUserDto extends PartialType(CreateUserDto) {}

// Pick: hanya field tertentu
export class UserLoginDto extends PickType(CreateUserDto, ['email', 'password'] as const) {}

// Omit: semua kecuali field tertentu
export class UserPublicDto extends OmitType(CreateUserDto, ['password'] as const) {}
\`\`\`

## Custom Validation Decorator

\`\`\`typescript
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

// Custom validator
@ValidatorConstraint({ name: 'isAdult', async: false })
export class IsAdultConstraint implements ValidatorConstraintInterface {
    validate(age: number) {
        return age >= 18;
    }
    
    defaultMessage() {
        return 'User must be at least 18 years old';
    }
}

// Custom decorator
export function IsAdult(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsAdultConstraint
        });
    };
}

// Usage
export class CreateUserDto {
    @IsAdult({ message: 'Umur minimal 18 tahun' })
    age: number;
}
\`\`\`

## Conditional Validation

\`\`\`typescript
import { ValidateIf } from 'class-validator';

export class PaymentDto {
    method: 'credit_card' | 'bank_transfer' | 'gopay';
    
    @ValidateIf(o => o.method === 'credit_card')
    @IsString()
    cardNumber?: string;
    
    @ValidateIf(o => o.method === 'bank_transfer')
    @IsString()
    bankAccount?: string;
}
\`\`\`

## Validation Groups

\`\`\`typescript
export class CreateUserDto {
    @IsString({ groups: ['create', 'update'] })
    name: string;
    
    @IsString({ groups: ['create'] })  // Only required on create
    password: string;
}

// Use groups
@Post()
create(@Body(new ValidationPipe({ groups: ['create'] })) dto: CreateUserDto) {}

@Put(':id')
update(@Body(new ValidationPipe({ groups: ['update'] })) dto: UpdateUserDto) {}
\`\`\`
  `,

  quiz: [
    { question: "PartialType?", options: ["Copy", "Buat semua field optional", "Pick fields", "Omit fields"], correctAnswer: 1 },
    { question: "whitelist: true?", options: ["Allow all", "Strip unknown properties (hanya field di DTO)", "Block all", "Transform"], correctAnswer: 1 }
  ],

  codeExamples: []
};