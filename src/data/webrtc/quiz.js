export const chapter = {
  slug: "webrtc-quiz",
  title: "Quiz Akhir WebRTC",
  description: "Uji pemahamanmu tentang real-time communication dengan WebRTC.",
  icon: "SiWebrtc",
  color: "#333333",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["webrtc-security"],
  tags: ["webrtc", "quiz"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir WebRTC\n\n10 soal.`,
  quiz: [
    { question: "WebRTC vs WebSocket?", options: ["Same", "WebRTC: P2P video; WS: client-server data", "WS P2P", "WebRTC needs server"], correctAnswer: 1 },
    { question: "getUserMedia?", options: ["Screen", "Camera/microphone access", "Peer", "Data"], correctAnswer: 1 },
    { question: "STUN?", options: ["Relay", "Get public IP (NAT traversal)", "Signaling", "Encrypt"], correctAnswer: 1 },
    { question: "createOffer()?", options: ["Callee", "Caller initiates", "Both", "None"], correctAnswer: 1 },
    { question: "Signaling: WebRTC part?", options: ["Yes", "No (separate spec)", "Optional", "Built-in"], correctAnswer: 1 },
    { question: "RTCDataChannel?", options: ["Media", "Send data P2P", "Video only", "Audio only"], correctAnswer: 1 },
    { question: "getDisplayMedia?", options: ["Camera", "Screen sharing", "Microphone", "Speaker"], correctAnswer: 1 },
    { question: "WebRTC encryption?", options: ["Optional", "Mandatory (DTLS-SRTP)", "Not needed", "Custom"], correctAnswer: 1 },
    { question: "TURN?", options: ["Public IP", "Relay if P2P fails", "Signaling", "Codec"], correctAnswer: 1 },
    { question: "replaceTrack()?", options: ["Add", "Switch source (camera↔screen)", "Remove", "Mute"], correctAnswer: 1 }
  ]
};