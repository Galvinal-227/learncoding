export const chapter = {
  slug: "prisma-realtime",
  title: "Realtime dengan Prisma",
  description: "Implementasi real-time subscriptions dengan Prisma + WebSocket/Server-Sent Events.",
  icon: "SiPrisma",
  color: "#2D3748",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["prisma-client"],
  tags: ["prisma", "realtime", "subscriptions", "websocket"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Prisma Pulse (Preview)

Prisma Pulse adalah **real-time database subscriptions**. Masih dalam tahap preview.

\`\`\`typescript
import { PrismaClient } from '@prisma/client';
import { withPulse } from '@prisma/extension-pulse';

const prisma = new PrismaClient().$extends(withPulse());

const subscription = await prisma.user.stream();

for await (const event of subscription) {
    console.log(event.action);  // 'create' | 'update' | 'delete'
    console.log(event.after);   // New data
}

// Stop subscription
subscription.stop();
\`\`\`

## Server-Sent Events (SSE)

\`\`\`javascript
// Express SSE endpoint
app.get('/api/users/stream', async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    let lastId = 0;
    const interval = setInterval(async () => {
        const users = await prisma.user.findMany({
            where: { id: { gt: lastId } },
            orderBy: { id: 'asc' }
        });
        
        if (users.length > 0) {
            res.write('data: ' + JSON.stringify(users) + '\n\n');
            lastId = users[users.length - 1].id;
        }
    }, 2000);
    
    req.on('close', () => clearInterval(interval));
});
\`\`\`

## WebSocket (Socket.io)

\`\`\`javascript
import { Server } from 'socket.io';

io.on('connection', (socket) => {
    console.log('Client connected');
    
    const interval = setInterval(async () => {
        const recentUsers = await prisma.user.findMany({
            where: {
                createdAt: { gte: new Date(Date.now() - 5000) }
            },
            take: 10
        });
        
        if (recentUsers.length > 0) {
            socket.emit('users:new', recentUsers);
        }
    }, 2000);
    
    socket.on('disconnect', () => clearInterval(interval));
});
\`\`\`

## Redis Pub/Sub Pattern

\`\`\`javascript
import Redis from 'ioredis';

const redis = new Redis();
const subscriber = new Redis();

// Publisher (after Prisma write)
async function createUser(data) {
    const user = await prisma.user.create({ data });
    await redis.publish('user:created', JSON.stringify(user));
    return user;
}

// Subscriber (WebSocket broadcast)
subscriber.subscribe('user:created');

subscriber.on('message', (channel, message) => {
    const user = JSON.parse(message);
    io.emit('user:created', user);
});
\`\`\`
  `,

  quiz: [
    { question: "Prisma Pulse?", options: ["Production", "Real-time database subscriptions (preview)", "Migration", "Studio"], correctAnswer: 1 },
    { question: "SSE?", options: ["WebSocket", "Server-Sent Events (one-way stream)", "Polling", "GraphQL"], correctAnswer: 1 }
  ],

  codeExamples: []
};