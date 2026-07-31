export const chapter = {
  slug: "websocket-realtime-apps",
  title: "Real-time Applications",
  description: "Bangun aplikasi real-time: chat, live notifications, collaborative editing.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["websocket-socket-io"],
  tags: ["websocket", "realtime", "chat", "notifications"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Chat Application

### Client
\`\`\`javascript
const socket = io();
const room = 'general';

socket.emit('join', { room, username: 'Budi' });

socket.on('message', (msg) => {
    displayMessage(msg);
});

function sendMessage(text) {
    socket.emit('message', { room, text });
}
\`\`\`

### Server
\`\`\`javascript
const users = new Map();

io.on('connection', (socket) => {
    socket.on('join', ({ room, username }) => {
        socket.join(room);
        users.set(socket.id, { username, room });
        io.to(room).emit('message', {
            system: true,
            text: username + ' joined the room'
        });
    });
    
    socket.on('message', ({ room, text }) => {
        const user = users.get(socket.id);
        io.to(room).emit('message', {
            user: user.username,
            text,
            timestamp: Date.now()
        });
    });
    
    socket.on('disconnect', () => {
        const user = users.get(socket.id);
        if (user) {
            io.to(user.room).emit('message', {
                system: true,
                text: user.username + ' left'
            });
        }
    });
});
\`\`\`

## 2. Live Notifications

\`\`\`javascript
// Server
function sendNotification(userId, notification) {
    io.to('user:' + userId).emit('notification', notification);
}

// Client
const socket = io();
socket.emit('register', userId);
socket.on('notification', (notif) => {
    showToast(notif.title, notif.body);
});
\`\`\`

## 3. Collaborative Editing (Like Google Docs)

\`\`\`javascript
// Client
socket.emit('join-doc', documentId);

editor.on('change', (delta) => {
    socket.emit('text-change', { docId: documentId, delta });
});

socket.on('text-change', (delta) => {
    editor.applyChanges(delta);
});
\`\`\`

## 4. Live Dashboard

\`\`\`javascript
// Server - push data every second
setInterval(async () => {
    const stats = await getRealtimeStats();
    io.to('dashboard').emit('stats-update', stats);
}, 1000);

// Client
socket.on('stats-update', (stats) => {
    updateDashboard(stats);
});
\`\`\`
  `,

  quiz: [
    { question: "Chat: join room?", options: ["socket.connect()", "socket.join(room)", "socket.enter(room)", "io.join(room)"], correctAnswer: 1 },
    { question: "Broadcast to all?", options: ["socket.emit()", "io.emit()", "socket.send()", "io.send()"], correctAnswer: 1 }
  ],

  codeExamples: []
};