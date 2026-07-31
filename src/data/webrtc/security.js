export const chapter = {
  slug: "webrtc-security",
  title: "Security",
  description: "Keamanan WebRTC: enkripsi, permissions, dan best practices.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["webrtc-peer-connection"],
  tags: ["webrtc", "security", "encryption", "dtls"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## WebRTC Security (Built-in!)

| Feature | Protocol | Status |
|---------|----------|--------|
| **Encryption** | DTLS-SRTP | ✅ Mandatory |
| **Signaling encryption** | HTTPS/WSS | ✅ Recommended |
| **Permission** | getUserMedia prompt | ✅ Browser enforced |
| **Origin isolation** | Same-origin policy | ✅ Browser enforced |
| **ICE consent** | Freshness check | ✅ Built-in |

## Secure Signaling

\`\`\`javascript
// ✅ WSS (WebSocket Secure)
const socket = io('wss://signaling.example.com');

// ✅ HTTPS for HTTP requests
const response = await fetch('https://api.example.com/rooms');
\`\`\`

## Permission Handling

\`\`\`javascript
// Always check permission
async function checkPermissions() {
    const cameraPermission = await navigator.permissions.query({
        name: 'camera'
    });
    const micPermission = await navigator.permissions.query({
        name: 'microphone'
    });
    
    console.log('Camera:', cameraPermission.state);
    console.log('Mic:', micPermission.state);
}

cameraPermission.onchange = () => {
    console.log('Camera permission changed:', cameraPermission.state);
};
\`\`\`

## Security Checklist

\`\`\`
✅ HTTPS/WSS for signaling
✅ Validate signaling messages
✅ Authenticate users before connecting
✅ Rate limiting connections
✅ Monitor for abuse
✅ ICE consent freshness
✅ Regular security updates
\`\`\`
  `,

  quiz: [
    { question: "WebRTC encryption?", options: ["Optional", "Mandatory (DTLS-SRTP)", "Not needed", "Custom"], correctAnswer: 1 },
    { question: "getUserMedia?", options: ["Auto", "Browser permission prompt", "No permission", "Root only"], correctAnswer: 1 }
  ],

  codeExamples: []
};