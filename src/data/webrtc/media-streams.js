export const chapter = {
  slug: "webrtc-media-streams",
  title: "Media Streams (getUserMedia)",
  description: "Akses kamera dan microphone dengan getUserMedia API.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["webrtc-introduction"],
  tags: ["webrtc", "getUserMedia", "camera", "microphone"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## getUserMedia

\`\`\`javascript
// Basic camera access
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
        
        const video = document.querySelector('video');
        video.srcObject = stream;
        video.play();
    } catch (error) {
        console.error('Error accessing media:', error);
    }
}
\`\`\`

## Video Constraints

\`\`\`javascript
const stream = await navigator.mediaDevices.getUserMedia({
    video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30 },
        facingMode: 'user'  // 'user' (front) | 'environment' (back)
    },
    audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100
    }
});
\`\`\`

## List Devices

\`\`\`javascript
const devices = await navigator.mediaDevices.enumerateDevices();
devices.forEach(device => {
    console.log(device.kind, device.label, device.deviceId);
    // kind: 'videoinput' | 'audioinput' | 'audiooutput'
});
\`\`\`

## Switch Camera

\`\`\`javascript
async function switchCamera(currentStream) {
    // Stop current tracks
    currentStream.getTracks().forEach(track => track.stop());
    
    // Toggle facing mode
    facingMode = facingMode === 'user' ? 'environment' : 'user';
    
    return await navigator.mediaDevices.getUserMedia({
        video: { facingMode }
    });
}
\`\`\`

## Stop Stream

\`\`\`javascript
function stopStream(stream) {
    stream.getTracks().forEach(track => {
        track.stop();
    });
}
\`\`\`

## Mute/Unmute

\`\`\`javascript
const videoTrack = stream.getVideoTracks()[0];
const audioTrack = stream.getAudioTracks()[0];

// Mute video
videoTrack.enabled = false;

// Mute audio
audioTrack.enabled = false;
\`\`\`

## Record Media

\`\`\`javascript
const mediaRecorder = new MediaRecorder(stream);
const chunks = [];

mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    // Download or upload
};

mediaRecorder.start();
// ... later
mediaRecorder.stop();
\`\`\`
  `,

  quiz: [
    { question: "getUserMedia?", options: ["Screen share", "Access camera/microphone", "Peer connection", "Data channel"], correctAnswer: 1 },
    { question: "facingMode: 'user'?", options: ["Back camera", "Front camera (selfie)", "Both", "None"], correctAnswer: 1 }
  ],

  codeExamples: []
};