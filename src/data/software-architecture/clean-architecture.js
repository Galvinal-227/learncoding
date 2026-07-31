export const chapter = {
  slug: "software-architecture-clean-architecture",
  title: "Clean Architecture",
  description: "Pahami Clean Architecture dengan dependency rule dan layered design.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["software-architecture-hexagonal"],
  tags: ["architecture", "clean", "layers", "dependency"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Clean Architecture Layers

\`\`\`
┌──────────────────────────────┐
│      Frameworks & Drivers    │ ← Web, DB, UI
│  ┌────────────────────────┐  │
│  │   Interface Adapters   │  │ ← Controllers, Gateways
│  │  ┌──────────────────┐  │  │
│  │  │  Application     │  │  │ ← Use Cases
│  │  │  ┌────────────┐  │  │  │
│  │  │  │  Domain     │  │  │  │ ← Entities (core)
│  │  │  └────────────┘  │  │  │
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
\`\`\`

## Dependency Rule

**Dependencies only point inward.** Outer layers depend on inner layers, never the opposite.

## Example Structure

\`\`\`
src/
├── domain/          # Entities (core)
│   └── User.ts
├── application/     # Use cases
│   └── CreateUser.ts
├── infrastructure/  # DB, external services
│   └── UserRepository.ts
└── presentation/    # HTTP, CLI
    └── UserController.ts
\`\`\`

## Clean vs Hexagonal

| Clean Architecture | Hexagonal |
|-------------------|-----------|
| Layered circles | Ports & Adapters |
| Focus on layers | Focus on boundaries |
| Uncle Bob | Alistair Cockburn |
  `,

  quiz: [
    { question: "Clean Architecture: dependency rule?", options: ["Outward", "Inward (outer → inner)", "Both ways", "No rule"], correctAnswer: 1 },
    { question: "Domain layer?", options: ["Framework", "Core business logic (entities)", "Database", "UI"], correctAnswer: 1 }
  ],

  codeExamples: []
};