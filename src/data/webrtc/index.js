import { chapter as data_channels } from './data-channels.js';
import { chapter as introduction } from './introduction.js';
import { chapter as media_streams } from './media-streams.js';
import { chapter as peer_connection } from './peer-connection.js';
import { chapter as quiz } from './quiz.js';
import { chapter as screen_sharing } from './screen-sharing.js';
import { chapter as security } from './security.js';
import { chapter as signaling } from './signaling.js';

export const category = {
  slug: "webrtc",
  title: "WebRTC",
  description: "Pelajari WebRTC untuk real-time communication: video call, screen sharing, peer-to-peer data.",
  icon: "SiWebrtc",
  color: "#333333",
  totalChapters: 8,
  difficulty: "Advanced",
  order: 89,
  isPublished: true,
  chapters: [
    data_channels,
    introduction,
    media_streams,
    peer_connection,
    quiz,
    screen_sharing,
    security,
    signaling
  ]
};
