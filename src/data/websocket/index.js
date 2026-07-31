import { chapter as handshake } from './handshake.js';
import { chapter as introduction } from './introduction.js';
import { chapter as native_websocket } from './native-websocket.js';
import { chapter as quiz } from './quiz.js';
import { chapter as realtime_apps } from './realtime-apps.js';
import { chapter as scaling } from './scaling.js';
import { chapter as security } from './security.js';
import { chapter as socket_io } from './socket-io.js';

export const category = {
  slug: "websocket",
  title: "WebSocket",
  description: "Pelajari WebSocket untuk komunikasi real-time bidirectional antara client dan server.",
  icon: "SiSocketdotio",
  color: "#010101",
  totalChapters: 8,
  difficulty: "Advanced",
  order: 48,
  isPublished: true,
  chapters: [
    handshake,
    introduction,
    native_websocket,
    quiz,
    realtime_apps,
    scaling,
    security,
    socket_io
  ]
};
