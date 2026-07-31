export const chapter = {
  slug: "graphql-subscriptions",
  title: "Subscriptions (Real-time)",
  description: "Implementasi real-time data dengan GraphQL Subscriptions via WebSocket.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["graphql-apollo-server"],
  tags: ["graphql", "subscriptions", "websocket", "realtime"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Subscriptions

Subscriptions = **real-time updates** dari server ke client via WebSocket.

## Schema

\`\`\`graphql
type Subscription {
  userCreated: User!
  postLiked(postId: ID!): Int!
  messageReceived(roomId: ID!): Message!
}
\`\`\`

## Server Setup

\`\`\`javascript
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'http';

const httpServer = createServer(app);
const wsServer = new WebSocketServer({ server: httpServer, path: '/graphql' });

useServer({ schema, context }, wsServer);
\`\`\`

## Trigger dari Mutation

\`\`\`javascript
Mutation: {
    createUser: async (_, { input }, { pubsub }) => {
        const user = await db.createUser(input);
        pubsub.publish('USER_CREATED', { userCreated: user });
        return user;
    }
}
\`\`\`

## Client Subscribe

\`\`\`jsx
const { data } = useSubscription(ON_USER_CREATED);
\`\`\`
  `,

  quiz: [
    { question: "Subscriptions transport?", options: ["HTTP", "WebSocket", "TCP", "UDP"], correctAnswer: 1 }
  ],

  codeExamples: []
};