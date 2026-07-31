export const chapter = {
  slug: "graphql-apollo-server",
  title: "Apollo Server",
  description: "Setup Apollo Server dengan Express, typeDefs, resolvers, dan production best practices.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["graphql-resolvers"],
  tags: ["graphql", "apollo", "server", "setup"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install @apollo/server graphql express cors
\`\`\`

## Setup Apollo Server v4

\`\`\`javascript
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';

const app = express();

const typeDefs = \`#graphql
  type User { id: ID!; name: String!; email: String! }
  type Query { users: [User!]!; user(id: ID!): User }
\`;

const resolvers = {
    Query: {
        users: () => db.users.findAll(),
        user: (_, { id }) => db.users.findById(id)
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

app.use('/graphql', cors(), express.json(), expressMiddleware(server));

app.listen(4000, () => console.log('Server ready at http://localhost:4000/graphql'));
\`\`\`

## Production: Caching

\`\`\`javascript
const server = new ApolloServer({
    typeDefs,
    resolvers,
    cache: 'bounded', // Production: batasi cache
    plugins: [
        ApolloServerPluginCacheControl({ defaultMaxAge: 5 })
    ]
});
\`\`\`

## Error Handling

\`\`\`javascript
const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        console.error(error);
        return {
            message: error.message,
            extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' }
        };
    }
});
\`\`\`

## Apollo Studio (Sandbox)

\`\`\`
GraphiQL → Apollo Studio Explorer
- Query builder GUI
- Schema reference
- Operation history
\`\`\`
  `,

  quiz: [
    { question: "Apollo Server: start()?", options: ["Opsional", "Wajib dipanggil sebelum middleware (v4)", "Debug", "Production only"], correctAnswer: 1 }
  ],

  codeExamples: []
};