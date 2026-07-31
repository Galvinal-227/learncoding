export const chapter = {
  slug: "graphql-mutations",
  title: "Mutations",
  description: "Tulis mutation untuk create, update, delete data dengan GraphQL.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["graphql-queries"],
  tags: ["graphql", "mutation", "create", "update"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Mutation vs Query

| Query | Mutation |
|-------|----------|
| Read data | Modify data |
| Parallel execution | Sequential execution |
| GET (REST analogy) | POST/PUT/DELETE |

## Create

\`\`\`graphql
mutation {
  createUser(name: "Budi", email: "budi@email.com", password: "secret") {
    id
    name
  }
}
\`\`\`

## Update

\`\`\`graphql
mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
  }
}
\`\`\`

## Delete

\`\`\`graphql
mutation {
  deleteUser(id: 1)
}
\`\`\`

## Mutation dengan Input

\`\`\`graphql
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    author { name }
  }
}
\`\`\`
  `,

  quiz: [
    { question: "Mutation vs Query?", options: ["Sama", "Query: read; Mutation: write", "Mutation: read", "Query: write"], correctAnswer: 1 }
  ],

  codeExamples: []
};