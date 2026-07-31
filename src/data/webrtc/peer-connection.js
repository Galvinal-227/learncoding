export const chapter = {
  slug: "webrtc-peer-connection",
  title: "Peer Connection",
  description: "Bangun koneksi P2P dengan RTCPeerConnection untuk video call.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["webrtc-media-streams"],
  tags: ["webrtc", "peer-connection", "p2p", "video-call"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## RTCPeerConnection

\`\`\`javascript
const configuration = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },  // STUN (public IP)
        {
            urls: 'turn:turn.example.com',
            username: 'user',
            credential: 'pass'
        }  // TURN (relay if P2P fails)
    ]
};

const peerConnection = new RTCPeerConnection(configuration);
\`\`\`

## Add Local Stream

\`\`\`javascript
const localStream = await navigator.mediaDevices.getUserMedia({
    video: true, audio: true
});

localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
});
\`\`\`

## Handle Remote Stream

\`\`\`javascript
peerConnection.ontrack = (event) => {
    const remoteVideo = document.querySelector('#remoteVideo');
    remoteVideo.srcObject = event.streams[0];
};
\`\`\`

## ICE Candidate

\`\`\`javascript
peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
        // Send candidate to remote peer via signaling
        signaling.send({
            type: 'candidate',
            candidate: event.candidate
        });
    }
};
\`\`\`

## Create Offer (Caller)

\`\`\`javascript
async function createOffer() {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    
    // Send offer to remote peer
    signaling.send({ type: 'offer', sdp: offer });
}
\`\`\`

## Handle Offer (Callee)

\`\`\`javascript
async function handleOffer(offer) {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    
    // Send answer back
    signaling.send({ type: 'answer', sdp: answer });
}
\`\`\`

## Handle Answer (Caller)

\`\`\`javascript
async function handleAnswer(answer) {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
}
\`\`\`

## Add ICE Candidate

\`\`\`javascript
async function handleCandidate(candidate) {
    await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
}
\`\`\`

## Connection States

\`\`\`javascript
peerConnection.onconnectionstatechange = () => {
    console.log('State:', peerConnection.connectionState);
    // 'new' | 'connecting' | 'connected' | 'disconnected' | 'failed' | 'closed'
};

peerConnection.oniceconnectionstatechange = () => {
    console.log('ICE State:', peerConnection.iceConnectionState);
};
\`\`\`

## STUN vs TURN

| STUN | TURN |
|------|------|
| Dapatkan public IP | Relay media jika P2P gagal |
| Gratis (Google STUN) | Berbayar (bandwidth) |
| 90% koneksi berhasil | Backup untuk 10% |
| stun:stun.l.google.com:19302 | Perlu server TURN |
  `,

  quiz: [
    { question: "STUN?", options: ["Relay", "Get public IP (NAT traversal)", "Signaling", "Encryption"], correctAnswer: 1 },
    { question: "createOffer()?", options: ["Callee", "Caller initiates connection", "Both", "None"], correctAnswer: 1 }
  ],

  codeExamples: []
};