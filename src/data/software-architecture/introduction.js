export const chapter = {
  slug: "software-architecture-introduction",
  title: "Pengenalan Software Architecture",
  description: "Pahami apa itu software architecture, kenapa penting, dan pola-pola utamanya.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["architecture", "design", "patterns", "system"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Apa Itu Software Architecture?

Software Architecture adalah **blueprint struktur sistem** yang mendefinisikan komponen, hubungan, dan prinsip desain. Fondasi sebelum coding dimulai.

## Kenapa Penting?

- 🏗️ **Scalability** - Sistem bisa berkembang
- 🔧 **Maintainability** - Mudah diubah dan diperbaiki
- 👥 **Team coordination** - Semua paham struktur
- 💰 **Cost efficiency** - Hindari rewrite mahal
- 📋 **Decision making** - Panduan untuk tech choices

## Popular Architecture Patterns

| Pattern | Deskripsi | Use Case |
|---------|-----------|----------|
| **MVC** | Model-View-Controller | Web apps, frameworks |
| **Microservices** | Small independent services | Large systems, Netflix |
| **Event-Driven** | Async events between services | Real-time, IoT |
| **Serverless** | Functions on cloud | APIs, automation |
| **Hexagonal** | Ports & Adapters | Domain-centric apps |
| **Clean Architecture** | Layered, dependency rule | Enterprise apps |
| **CQRS** | Separate read & write | Complex domains |
| **Event Sourcing** | Store events, not state | Audit, banking |

## Architecture vs Design Patterns

| Architecture | Design Patterns |
|-------------|----------------|
| High-level structure | Code-level solutions |
| System components | Object/class patterns |
| "Apa dan di mana" | "Bagaimana" |
| MVC, Microservices | Singleton, Factory |

## How to Choose?

\`\`\`
1. Understand requirements (functional + non-functional)
2. Consider constraints (budget, team, timeline)
3. Evaluate trade-offs (consistency vs availability)
4. Start simple, evolve complex
5. Document decisions (ADR - Architecture Decision Records)
\`\`\`
  `,
  quiz: [
    { question: "Architecture vs Design?", options: ["Same", "Arch: high-level; Design: code-level", "Design: high-level", "No difference"], correctAnswer: 1 },
    { question: "ADR?", options: ["Bug report", "Architecture Decision Record", "API doc", "Test case"], correctAnswer: 1 }
  ],
  codeExamples: []
};