export const chapter = {
  slug: "webrtc-signaling",
  title: "Signaling",
  description: "Implementasi signaling server dengan WebSocket untuk WebRTC.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["webrtc-peer-connection"],
  tags: ["webrtc", "signaling", "websocket", "socket.io"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Signaling Flow

\`\`\`
Peer A                    Server                   Peer B
  │── connect ──────────────▶│◀── connect ───────────│
  │                          │                       │
  │── createOffer ──────────▶│─── offer ────────────▶│
  │                          │                       │
  │◀──────── answer ────────│◀─── createAnswer ──────│
  │                          │                       │
  │── ICE candidate ────────▶│─── ICE candidate ─────▶│
  │◀─── ICE candidate ──────│◀─── ICE candidate ────│
  │                          │                       │
  │◀══════ P2P Media ═══════════════════════════════▶│
\`\`\`

## Signaling Server (Socket.io)

\`\`\`javascript
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // Join room
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', socket.id);
    });
    
    // Forward offer
    socket.on('offer', ({ target, offer }) => {
        io.to(target).emit('offer', { sender: socket.id, offer });
    });
    
    // Forward answer
    socket.on('answer', ({ target, answer }) => {
        io.to(target).emit('answer', { sender: socket.id, answer });
    });
    
    // Forward ICE candidates
    socket.on('ice-candidate', ({ target, candidate }) => {
        io.to(target).emit('ice-candidate', { sender: socket.id, candidate });
    });
    
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', socket.id);
    });
});
\`\`\`

## Signaling Client

\`\`\`javascript
const socket = io('/');

// Create room
const roomId = 'room-123';
socket.emit('join-room', roomId);

// Handle new user
socket.on('user-connected', (userId) => {
    console.log('User joined:', userId);
    createOffer(userId);
});

// Handle offer
socket.on('offer', async ({ sender, offer }) => {
    await peerConnection.setRemoteDescription(offer);
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    socket.emit('answer', { target: sender, answer });
});

// Handle answer
socket.on('answer', async ({ answer }) => {
    await peerConnection.setRemoteDescription(answer);
});

// Handle ICE
socket.on('ice-candidate', async ({ candidate }) => {
    await peerConnection.addIceCandidate(candidate);
});

// Send ICE candidates
peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
        socket.emit('ice-candidate', {
            target: remoteUserId,
            candidate: event.candidate
        });
    }
};
\`\`\`
  `,

  quiz: [
    { question: "Signaling: WebRTC part?", options: ["Yes", "No (separate, not part of WebRTC spec)", "Optional", "Built-in"], correctAnswer: 1 },
    { question: "ICE candidate?", options: ["Media", "Network info for P2P connection", "Encryption", "Codec"], correctAnswer: 1 }
  ],

  codeExamples: []
};