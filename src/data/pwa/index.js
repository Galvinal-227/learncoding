import { chapter as caching_strategies } from './caching-strategies.js';
import { chapter as installable } from './installable.js';
import { chapter as introduction } from './introduction.js';
import { chapter as lighthouse } from './lighthouse.js';
import { chapter as manifest } from './manifest.js';
import { chapter as offline_support } from './offline-support.js';
import { chapter as push_notifications } from './push-notifications.js';
import { chapter as quiz } from './quiz.js';
import { chapter as service_workers } from './service-workers.js';

export const category = {
  slug: "pwa",
  title: "Progressive Web App",
  description: "Bangun PWA: installable, offline-ready, push notifications, dan native-like experience.",
  icon: "SiPwa",
  color: "#5A0FC8",
  totalChapters: 9,
  difficulty: "Advanced",
  order: 86,
  isPublished: true,
  chapters: [
    caching_strategies,
    installable,
    introduction,
    lighthouse,
    manifest,
    offline_support,
    push_notifications,
    quiz,
    service_workers
  ]
};
