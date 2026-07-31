export const chapter = {
  slug: "graphql-schema",
  title: "Schema & Type System",
  description: "Definisikan schema GraphQL dengan type, query, mutation, input, enum, dan interface.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["graphql-introduction"],
  tags: ["graphql", "schema", "types", "sdl"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Schema Definition Language (SDL)

Schema adalah **kontrak** antara client dan server. Ditulis dalam SDL.

## Scalar Types

\`\`\`graphql
String     # "Hello"
Int        # 42
Float      # 3.14
Boolean    # true
ID         # Unique identifier
\`\`\`

## Object Types

\`\`\`graphql
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
  posts: [Post!]!
  createdAt: String
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
}
\`\`\`

- \`!\` = Non-nullable (tidak boleh null)
- \`[Type]\` = Array
- \`[Type!]!\` = Array tidak null, isi tidak null

## Query Type (Entry Point)

\`\`\`graphql
type Query {
  users: [User!]!
  user(id: ID!): User
  posts(limit: Int = 10, offset: Int = 0): [Post!]!
  searchPosts(query: String!): [Post!]!
}
\`\`\`

## Mutation Type

\`\`\`graphql
type Mutation {
  createUser(name: String!, email: String!, password: String!): User!
  updateUser(id: ID!, name: String, email: String): User!
  deleteUser(id: ID!): Boolean!
  login(email: String!, password: String!): AuthPayload!
}
\`\`\`

## Input Types

\`\`\`graphql
input CreateUserInput {
  name: String!
  email: String!
  password: String!
  age: Int
}

type Mutation {
  createUser(input: CreateUserInput!): User!
}
\`\`\`

## Enum

\`\`\`graphql
enum Role {
  ADMIN
  EDITOR
  USER
}

type User {
  role: Role!
}
\`\`\`

## Interface

\`\`\`graphql
interface Node {
  id: ID!
}

type User implements Node {
  id: ID!
  name: String!
}

type Post implements Node {
  id: ID!
  title: String!
}
\`\`\`

## Custom Scalar

\`\`\`graphql
scalar DateTime
scalar JSON
scalar Upload
\`\`\`
  `,

  quiz: [
    { question: "ID! artinya?", options: ["Optional", "Non-nullable (wajib, tidak boleh null)", "Array", "Deprecated"], correctAnswer: 1 },
    { question: "Input type?", options: ["Query", "Object untuk arguments kompleks di mutation", "Response", "Scalar"], correctAnswer: 1 }
  ],

  codeExamples: []
};