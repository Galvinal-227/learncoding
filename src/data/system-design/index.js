import { chapter as caching } from './caching.js';
import { chapter as capacity_estimation } from './capacity-estimation.js';
import { chapter as database_design } from './database-design.js';
import { chapter as introduction } from './introduction.js';
import { chapter as load_balancing } from './load-balancing.js';
import { chapter as message_queues } from './message-queues.js';
import { chapter as microservices } from './microservices.js';
import { chapter as quiz } from './quiz.js';
import { chapter as real_world_examples } from './real-world-examples.js';
import { chapter as requirements } from './requirements.js';

export const category = {
  slug: "system-design",
  title: "System Design",
  description: "Pelajari dasar-dasar system design untuk membangun aplikasi yang scalable, reliable, dan maintainable.",
  icon: "SiSystem",
  color: "#6C63FF",
  totalChapters: 10,
  difficulty: "Advanced",
  order: 13,
  isPublished: true,
  chapters: [
    caching,
    capacity_estimation,
    database_design,
    introduction,
    load_balancing,
    message_queues,
    microservices,
    quiz,
    real_world_examples,
    requirements
  ]
};
