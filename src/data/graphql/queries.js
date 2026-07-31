export const chapter = {
  slug: "graphql-queries",
  title: "Queries",
  description: "Tulis query GraphQL dengan arguments, variables, aliases, fragments, dan directives.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["graphql-schema"],
  tags: ["graphql", "query", "fragments", "variables"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Query

\`\`\`graphql
query {
  users {
    id
    name
  }
}
\`\`\`

## Query dengan Arguments

\`\`\`graphql
query {
  user(id: 1) {
    name
    email
  }
}
\`\`\`

## Variables

\`\`\`graphql
query GetUser($userId: ID!) {
  user(id: $userId) {
    name
    email
  }
}
\`\`\`

\`\`\`json
// Variables (dikirim terpisah)
{ "userId": 1 }
\`\`\`

## Nested Queries

\`\`\`graphql
query {
  user(id: 1) {
    name
    posts(limit: 5) {
      title
      comments {
        text
        author {
          name
        }
      }
    }
  }
}
\`\`\`

## Aliases (Duplicate Fields)

\`\`\`graphql
query {
  admin: user(id: 1) {
    name
  }
  moderator: user(id: 2) {
    name
  }
}
\`\`\`

## Fragments (Reusable Fields)

\`\`\`graphql
fragment UserFields on User {
  id
  name
  email
  createdAt
}

query {
  user(id: 1) {
    ...UserFields
  }
  users {
    ...UserFields
  }
}
\`\`\`

## Directives

\`\`\`graphql
query GetUser($includeEmail: Boolean!) {
  user(id: 1) {
    name
    email @include(if: $includeEmail)
    avatar @skip(if: $includeEmail)
  }
}
\`\`\`
  `,

  quiz: [
    { question: "Variables?", options: ["Hardcode values", "Dynamic values (dikirim terpisah dari query)", "Aliases", "Fragments"], correctAnswer: 1 },
    { question: "Fragments?", options: ["Error", "Reusable field sets", "Variables", "Directives"], correctAnswer: 1 }
  ],

  codeExamples: []
};