export const chapter = {
  slug: "graphql-federation",
  title: "Federation & Microservices",
  description: "Bangun distributed GraphQL dengan Apollo Federation untuk microservices.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["graphql-apollo-server"],
  tags: ["graphql", "federation", "microservices", "distributed"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apollo Federation

Satu unified graph dari **multiple microservices**.

## Arsitektur

\`\`\`
┌──────────────┐
│   Gateway    │ ← Single endpoint
│  (Router)    │
└──────────────┘
      │
      ├── Users Service (port 4001)
      ├── Posts Service (port 4002)
      └── Comments Service (port 4003)
\`\`\`

## Key Directives

\`\`\`graphql
# Users Service
type User @key(fields: "id") {
  id: ID!
  name: String!
}

# Posts Service
type Post @key(fields: "id") {
  id: ID!
  title: String!
  author: User!
}

extend type User @key(fields: "id") {
  id: ID! @external
  posts: [Post!]!
}
\`\`\`
  `,

  quiz: [
    { question: "Federation?", options: ["Single server", "Unified graph dari multiple services", "REST", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};