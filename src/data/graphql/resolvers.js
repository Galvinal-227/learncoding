export const chapter = {
  slug: "graphql-resolvers",
  title: "Resolvers",
  description: "Implementasi resolvers: query, mutation, nested resolvers, dan data sources.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["graphql-schema"],
  tags: ["graphql", "resolvers", "implementation", "backend"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Resolver?

Resolver adalah **fungsi yang mengembalikan data** untuk field di schema.

## Struktur Resolver

\`\`\`javascript
const resolvers = {
    Query: {
        users: () => { /* return data */ },
        user: (parent, args, context, info) => {
            const { id } = args;
            return db.findUser(id);
        }
    },
    Mutation: {
        createUser: (parent, { input }, context) => {
            return db.createUser(input);
        }
    }
};
\`\`\`

## Resolver Arguments

| Arg | Deskripsi |
|-----|-----------|
| **parent** | Hasil resolver parent (untuk nested) |
| **args** | Arguments dari query |
| **context** | Shared context (auth, DB connection) |
| **info** | AST info (jarang dipakai) |

## Nested Resolvers

\`\`\`javascript
const resolvers = {
    Query: {
        user: (_, { id }) => db.findUser(id)
    },
    User: {
        // posts tidak perlu di-resolve di Query.user
        // GraphQL panggil resolver ini HANYA jika field 'posts' diminta
        posts: (parent) => db.findPostsByUserId(parent.id),
        
        // Parent = user object dari resolver di atas
        fullName: (parent) => \`\${parent.firstName} \${parent.lastName}\`
    }
};
\`\`\`

## DataLoader (N+1 Problem)

\`\`\`bash
npm install dataloader
\`\`\`

\`\`\`javascript
import DataLoader from 'dataloader';

const userLoader = new DataLoader(async (ids) => {
    const users = await db.findUsersByIds(ids);
    return ids.map(id => users.find(u => u.id === id));
});

// Di resolver
User: {
    posts: (parent) => postLoader.load(parent.id)
}
\`\`\`

## Context

\`\`\`javascript
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || '';
        const user = verifyToken(token);
        return { user, db, userLoader };
    }
});
\`\`\`
  `,

  quiz: [
    { question: "Resolver arguments?", options: ["req, res", "parent, args, context, info", "query, mutation", "input, output"], correctAnswer: 1 },
    { question: "DataLoader?", options: ["Cache", "Batch & cache request (solve N+1 problem)", "Query builder", "Logger"], correctAnswer: 1 }
  ],

  codeExamples: []
};