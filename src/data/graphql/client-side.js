export const chapter = {
  slug: "graphql-client-side",
  title: "Apollo Client (React)",
  description: "Integrasikan GraphQL di frontend React dengan Apollo Client.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["graphql-queries", "react-introduction"],
  tags: ["graphql", "apollo-client", "react", "frontend"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install @apollo/client graphql
\`\`\`

## Setup

\`\`\`jsx
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Users />
        </ApolloProvider>
    );
}
\`\`\`

## useQuery

\`\`\`jsx
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql\`
    query GetUsers {
        users { id name email }
    }
\`;

function Users() {
    const { loading, error, data } = useQuery(GET_USERS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return data.users.map(user => <div key={user.id}>{user.name}</div>);
}
\`\`\`

## useMutation

\`\`\`jsx
const CREATE_USER = gql\`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) { id name }
    }
\`;

function AddUser() {
    const [createUser, { loading }] = useMutation(CREATE_USER, {
        refetchQueries: [{ query: GET_USERS }]
    });
    
    return (
        <button onClick={() => createUser({ variables: { input: { name: 'Budi', email: 'budi@email.com' } } })}>
            Add User
        </button>
    );
}
\`\`\`

## Cache Update

\`\`\`jsx
const [createUser] = useMutation(CREATE_USER, {
    update(cache, { data: { createUser } }) {
        const { users } = cache.readQuery({ query: GET_USERS });
        cache.writeQuery({
            query: GET_USERS,
            data: { users: [...users, createUser] }
        });
    }
});
\`\`\`
  `,

  quiz: [
    { question: "useQuery return?", options: ["data", "{ loading, error, data }", "refetch", "mutation function"], correctAnswer: 1 },
    { question: "refetchQueries?", options: ["Debug", "Auto-refetch query setelah mutation", "Cache", "Error handling"], correctAnswer: 1 }
  ],

  codeExamples: []
};