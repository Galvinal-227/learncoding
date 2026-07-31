import { chapter as background_sync } from './background-sync.js';
import { chapter as caching_strategies } from './caching-strategies.js';
import { chapter as introduction } from './introduction.js';
import { chapter as lifecycle } from './lifecycle.js';
import { chapter as offline_support } from './offline-support.js';
import { chapter as push_notifications } from './push-notifications.js';
import { chapter as quiz } from './quiz.js';
import { chapter as workbox } from './workbox.js';

export const category = {
  slug: "service-workers",
  title: "Service Workers",
  description: "Kuasai Service Workers untuk offline support, caching, background sync, dan Progressive Web Apps.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  totalChapters: 8,
  difficulty: "Advanced",
  order: 85,
  isPublished: true,
  chapters: [
    background_sync,
    caching_strategies,
    introduction,
    lifecycle,
    offline_support,
    push_notifications,
    quiz,
    workbox
  ]
};
