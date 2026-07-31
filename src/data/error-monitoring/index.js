import { chapter as alerting } from './alerting.js';
import { chapter as error_tracking } from './error-tracking.js';
import { chapter as introduction } from './introduction.js';
import { chapter as logrocket } from './logrocket.js';
import { chapter as quiz } from './quiz.js';
import { chapter as sentry } from './sentry.js';
import { chapter as source_maps } from './source-maps.js';

export const category = {
  slug: "error-monitoring",
  title: "Error Monitoring",
  description: "Pantau error production dengan Sentry, LogRocket, dan tools monitoring modern.",
  icon: "SiSentry",
  color: "#362D59",
  totalChapters: 7,
  difficulty: "Advanced",
  order: 84,
  isPublished: true,
  chapters: [
    alerting,
    error_tracking,
    introduction,
    logrocket,
    quiz,
    sentry,
    source_maps
  ]
};
