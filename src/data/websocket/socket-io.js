export const chapter = {
  slug: "websocket-socket-io",
  title: "Socket.io",
  description: "Gunakan Socket.io untuk WebSocket dengan fallback, rooms, dan auto-reconnect.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["websocket-handshake"],
  tags: ["websocket", "socket.io", "rooms", "realtime"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Socket.io?

Socket.io adalah **library** yang menyediakan **real-time, bidirectional communication** dengan **auto-reconnect, fallback, rooms, dan broadcasting**.

## Setup Server (Node.js + Express)

\`\`\`bash
npm install socket.io express
\`\`\`

\`\`\`javascript
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // Listen for events
    socket.on('message', (data) => {
        console.log('Message received:', data);
        io.emit('message', data); // Broadcast to all
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

## Setup Client

\`\`\`html
<script src="/socket.io/socket.io.js"></script>
<script>
    const socket = io('http://localhost:3000');
    
    socket.on('connect', () => {
        console.log('Connected:', socket.id);
        socket.emit('message', 'Hello Server!');
    });
    
    socket.on('message', (data) => {
        console.log('Server says:', data);
    });
</script>
\`\`\`

## Rooms

\`\`\`javascript
// Join room
socket.join('room-123');
socket.join(['room-1', 'room-2']);

// Leave room
socket.leave('room-123');

// Emit to room
io.to('room-123').emit('message', 'Hello room!');

// Emit to all EXCEPT sender
socket.broadcast.emit('user-joined', { userId: socket.id });

// Private message
socket.to(socketId).emit('private', 'Hello!');

// Check rooms
console.log(socket.rooms);
\`\`\`

## Chat App Example

\`\`\`javascript
// Server
io.on('connection', (socket) => {
    socket.on('join-room', (room) => {
        socket.join(room);
        socket.to(room).emit('user-joined', socket.id);
    });
    
    socket.on('chat-message', ({ room, message, user }) => {
        io.to(room).emit('chat-message', {
            user,
            message,
            timestamp: new Date(),
            senderId: socket.id
        });
    });
    
    socket.on('typing', (room) => {
        socket.to(room).emit('typing', socket.id);
    });
});
\`\`\`

## Namespaces

\`\`\`javascript
// Server
const chat = io.of('/chat');
const admin = io.of('/admin');

chat.on('connection', (socket) => { ... });
admin.on('connection', (socket) => { ... });

// Client
const chatSocket = io('/chat');
const adminSocket = io('/admin');
\`\`\`

## Middleware (Auth)

\`\`\`javascript
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (token === 'secret') {
        return next();
    }
    next(new Error('Authentication error'));
});

// Client
const socket = io('http://localhost:3000', {
    auth: { token: 'secret' }
});
\`\`\`
  `,

  quiz: [
    { question: "Socket.io: room?", options: ["Namespace", "Group socket for broadcasting", "Auth", "Middleware"], correctAnswer: 1 },
    { question: "io.to().emit()?", options: ["All clients", "Only clients in specific room", "Server only", "One client"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Simple Chat Server",
      language: "javascript",
      code: `import { Server } from 'socket.io';
const io = new Server(3000);

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', { user: socket.id, text: msg });
    });
});`
    }
  ]
};