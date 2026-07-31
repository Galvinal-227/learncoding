export const chapter = {
  slug: "websocket-scaling",
  title: "Scaling WebSocket",
  description: "Scale WebSocket dengan Redis Adapter, load balancing, dan horizontal scaling.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["websocket-socket-io"],
  tags: ["websocket", "scaling", "redis", "adapter"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Masalah: Multiple Servers

\`\`\`
Tanpa adapter:
Server A ← Client 1 (join room 'chat')
Server B ← Client 2 (join room 'chat')
Client 1 kirim pesan → Server A
Client 2 tidak terima pesan! (berbeda server)
\`\`\`

## Redis Adapter

\`\`\`bash
npm install @socket.io/redis-adapter redis
\`\`\`

\`\`\`javascript
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

await Promise.all([pubClient.connect(), subClient.connect()]);

const io = new Server({
    adapter: createAdapter(pubClient, subClient)
});

// Sekarang semua server share state via Redis!
// Client 1 di Server A → emit ke room 'chat'
// Client 2 di Server B → terima pesan!
\`\`\`

## Nginx Load Balancing

\`\`\`nginx
upstream socket_nodes {
    ip_hash;  # Sticky sessions
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    
    location /socket.io/ {
        proxy_pass http://socket_nodes;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
\`\`\`

## Horizontal Scaling Checklist

\`\`\`
✅ Redis adapter untuk share state
✅ Sticky sessions (ip_hash)
✅ Nginx load balancing
✅ Health checks
✅ Graceful shutdown
✅ Monitoring connections
\`\`\`
  `,

  quiz: [
    { question: "Redis adapter?", options: ["Cache", "Share WebSocket state across servers", "Auth", "Logging"], correctAnswer: 1 },
    { question: "Sticky sessions?", options: ["Random", "Same client → same server (ip_hash)", "Round robin", "Least conn"], correctAnswer: 1 }
  ],

  codeExamples: []
};