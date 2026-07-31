export const chapter = {
  slug: "webrtc-data-channels",
  title: "Data Channels",
  description: "Kirim data arbitrary via RTCDataChannel: text, files, gaming.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["webrtc-peer-connection"],
  tags: ["webrtc", "datachannel", "p2p", "file-transfer"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Create Data Channel

\`\`\`javascript
// Sender creates channel
const dataChannel = peerConnection.createDataChannel('chat', {
    ordered: true,        // Guaranteed order
    maxRetransmits: 3     // or maxPacketLifeTime
});

dataChannel.onopen = () => console.log('Channel open');
dataChannel.onclose = () => console.log('Channel closed');
dataChannel.onmessage = (event) => console.log('Message:', event.data);
dataChannel.onerror = (error) => console.error('Error:', error);

// Send data
dataChannel.send('Hello P2P!');
dataChannel.send(JSON.stringify({ type: 'message', text: 'Hi' }));
\`\`\`

## Receiver

\`\`\`javascript
peerConnection.ondatachannel = (event) => {
    const receiveChannel = event.channel;
    
    receiveChannel.onmessage = (event) => {
        console.log('Received:', event.data);
    };
};
\`\`\`

## Chat via Data Channel

\`\`\`javascript
// Simple P2P chat
const chat = peerConnection.createDataChannel('chat');

chat.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    displayMessage(msg.user, msg.text);
};

function sendChat(text) {
    chat.send(JSON.stringify({
        user: 'Budi',
        text: text,
        timestamp: Date.now()
    }));
}
\`\`\`

## File Transfer

\`\`\`javascript
// Sender
async function sendFile(file) {
    const chunkSize = 16384; // 16KB
    const fileReader = new FileReader();
    let offset = 0;
    
    fileReader.onload = (e) => {
        dataChannel.send(e.target.result);
        offset += e.target.result.byteLength;
        
        if (offset < file.size) {
            readChunk(offset);
        } else {
            dataChannel.send(JSON.stringify({ done: true, name: file.name }));
        }
    };
    
    function readChunk(offset) {
        const slice = file.slice(offset, offset + chunkSize);
        fileReader.readAsArrayBuffer(slice);
    }
    
    readChunk(0);
}

// Receiver
const receivedChunks = [];
let fileName = '';

receiveChannel.onmessage = (e) => {
    if (typeof e.data === 'string') {
        const msg = JSON.parse(e.data);
        if (msg.done) {
            fileName = msg.name;
            const blob = new Blob(receivedChunks);
            downloadBlob(blob, fileName);
        }
    } else {
        receivedChunks.push(e.data);
    }
};
\`\`\`
  `,

  quiz: [
    { question: "RTCDataChannel?", options: ["Media", "Send arbitrary data P2P", "Video only", "Audio only"], correctAnswer: 1 },
    { question: "createDataChannel()?", options: ["Receiver", "Sender creates channel", "Both", "Server"], correctAnswer: 1 }
  ],

  codeExamples: []
};