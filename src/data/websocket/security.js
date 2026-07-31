export const chapter = {
  slug: "websocket-security",
  title: "Security",
  description: "Amankan WebSocket: authentication, rate limiting, CORS, dan best practices.",
  icon: "SiSocketdotio",
  color: "#010101",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["websocket-socket-io"],
  tags: ["websocket", "security", "authentication", "wss"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Authentication

\`\`\`javascript
// Socket.io middleware
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        socket.user = user;
        next();
    } catch (err) {
        next(new Error('Authentication error'));
    }
});

// Client
const socket = io({
    auth: { token: 'jwt-token-here' }
});
\`\`\`

## Rate Limiting

\`\`\`javascript
const rateLimit = new Map();

io.use((socket, next) => {
    const ip = socket.handshake.address;
    const now = Date.now();
    const windowMs = 60000; // 1 minute
    const max = 30;
    
    const record = rateLimit.get(ip) || { count: 0, resetTime: now + windowMs };
    if (now > record.resetTime) {
        record.count = 0;
        record.resetTime = now + windowMs;
    }
    
    record.count++;
    rateLimit.set(ip, record);
    
    if (record.count > max) {
        return next(new Error('Rate limit exceeded'));
    }
    next();
});
\`\`\`

## Security Checklist

\`\`\`
✅ Gunakan WSS (WebSocket over TLS)
✅ Authenticate setiap koneksi
✅ Rate limiting
✅ Validate input data
✅ CORS configuration
✅ Session management
✅ Payload size limits
✅ Close idle connections
\`\`\`
  `,

  quiz: [
    { question: "WSS?", options: ["HTTP", "WebSocket Secure (TLS)", "TCP", "UDP"], correctAnswer: 1 },
    { question: "Socket.io auth?", options: ["URL only", "socket.handshake.auth.token", "Cookie only", "No auth"], correctAnswer: 1 }
  ],

  codeExamples: []
};