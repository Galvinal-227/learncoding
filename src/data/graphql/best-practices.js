export const chapter = {
  slug: "graphql-best-practices",
  title: "Best Practices",
  description: "Praktik terbaik GraphQL: security, pagination, error handling, caching.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["graphql-apollo-server"],
  tags: ["graphql", "best-practices", "security", "performance"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Pagination (Cursor-based)

\`\`\`graphql
type Query {
  users(first: Int = 10, after: String): UserConnection!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
}

type PageInfo {
  hasNextPage: Boolean!
  endCursor: String
}
\`\`\`

## 2. Rate Limiting

\`\`\`javascript
import { createRateLimitRule } from 'graphql-rate-limit';

const rateLimitRule = createRateLimitRule({
    identifyContext: (ctx) => ctx.user?.id || ctx.req.ip
});

const server = new ApolloServer({
    schema: applyMiddleware(schema, rateLimitRule({
        max: 100, window: '1m'
    }))
});
\`\`\`

## 3. Depth Limiting

\`\`\`javascript
import depthLimit from 'graphql-depth-limit';

const server = new ApolloServer({
    validationRules: [depthLimit(7)] // Max 7 level nesting
});
\`\`\`

## 4. Persisted Queries

\`\`\`
Client kirim hash, bukan full query → hemat bandwidth + security
\`\`\`
  `,

  quiz: [
    { question: "Cursor pagination?", options: ["Page number", "Cursor-based (first/after)", "Offset", "Limit"], correctAnswer: 1 },
    { question: "Depth limiting?", options: ["Debug", "Cegah query terlalu nested (DoS)", "Cache", "Formatting"], correctAnswer: 1 }
  ],

  codeExamples: []
};