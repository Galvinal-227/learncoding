export const chapter = {
  slug: "websocket-native-websocket",
  title: "Native WebSocket API",
  description: "Gunakan WebSocket API bawaan browser tanpa library tambahan.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["websocket-handshake"],
  tags: ["websocket", "native", "browser", "ws"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Browser Client

\`\`\`javascript
const ws = new WebSocket('wss://example.com/socket');

ws.onopen = () => {
    console.log('Connected');
    ws.send('Hello Server!');
    ws.send(JSON.stringify({ type: 'message', text: 'Hello' }));
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received:', data);
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

ws.onclose = (event) => {
    console.log('Disconnected:', event.code, event.reason);
};

// Send binary data
const buffer = new ArrayBuffer(8);
ws.send(buffer);
\`\`\`

## Node.js Server (ws library)

\`\`\`bash
npm install ws
\`\`\`

\`\`\`javascript
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log('Client connected from', ip);
    
    ws.on('message', (data, isBinary) => {
        const message = isBinary ? data : data.toString();
        console.log('Received:', message);
        
        // Broadcast to all clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    
    ws.on('close', () => console.log('Client disconnected'));
    
    ws.send(JSON.stringify({ type: 'welcome', message: 'Connected!' }));
});

console.log('WebSocket server running on ws://localhost:8080');
\`\`\`

## WebSocket vs Socket.io

| | Native WebSocket | Socket.io |
|---|-----------------|-----------|
| Fallback | ❌ | ✅ (HTTP long polling) |
| Auto-reconnect | ❌ Manual | ✅ Built-in |
| Rooms | ❌ Manual | ✅ Built-in |
| Binary | ✅ | ✅ |
| Browser support | 97%+ | 97%+ (with fallback) |
| Size | 0 (built-in) | ~10KB |
| Complexity | Low | Medium |
  `,

  quiz: [
    { question: "ws.readyState: OPEN?", options: ["0", "1", "2", "3"], correctAnswer: 1 },
    { question: "ws.send()?", options: ["Receive", "Send data (text/binary)", "Connect", "Close"], correctAnswer: 1 }
  ],

  codeExamples: []
};