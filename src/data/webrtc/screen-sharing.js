export const chapter = {
  slug: "webrtc-screen-sharing",
  title: "Screen Sharing",
  description: "Implementasi screen sharing dengan getDisplayMedia.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["webrtc-media-streams"],
  tags: ["webrtc", "screen-sharing", "getDisplayMedia", "desktop"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## getDisplayMedia

\`\`\`javascript
async function startScreenShare() {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                cursor: 'always',       // 'always' | 'motion' | 'never'
                displaySurface: 'monitor' // 'monitor' | 'window' | 'tab'
            },
            audio: false
        });
        
        const video = document.querySelector('video');
        video.srcObject = stream;
        
        // Handle user stopping share
        stream.getVideoTracks()[0].onended = () => {
            console.log('Screen sharing stopped');
            // Switch back to camera
        };
        
        return stream;
    } catch (error) {
        console.error('Screen share error:', error);
    }
}
\`\`\`

## Screen Share + Camera (Picture-in-Picture)

\`\`\`javascript
async function startWithPiP() {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true, audio: true
    });
    const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true, audio: false
    });
    
    // Add both to peer connection
    screenStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, screenStream);
    });
    cameraStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, cameraStream);
    });
}
\`\`\`

## Replace Track (Switch Source)

\`\`\`javascript
async function switchToScreen() {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true
    });
    
    const screenTrack = screenStream.getVideoTracks()[0];
    const sender = peerConnection.getSenders().find(
        s => s.track.kind === 'video'
    );
    
    sender.replaceTrack(screenTrack);
}
\`\`\`
  `,

  quiz: [
    { question: "getDisplayMedia?", options: ["Camera", "Screen sharing", "Microphone", "Speaker"], correctAnswer: 1 },
    { question: "replaceTrack()?", options: ["Add track", "Switch video source (camera ↔ screen)", "Remove", "Mute"], correctAnswer: 1 }
  ],

  codeExamples: []
};