import { chapter as custom_events } from './custom-events.js';
import { chapter as google_analytics } from './google-analytics.js';
import { chapter as introduction } from './introduction.js';
import { chapter as mixpanel } from './mixpanel.js';
import { chapter as privacy } from './privacy.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "analytics",
  title: "Web Analytics",
  description: "Pelajari cara melacak dan menganalisis traffic website untuk pengambilan keputusan berbasis data.",
  icon: "SiGoogleanalytics",
  color: "#E37400",
  totalChapters: 6,
  difficulty: "Intermediate",
  order: 83,
  isPublished: true,
  chapters: [
    custom_events,
    google_analytics,
    introduction,
    mixpanel,
    privacy,
    quiz
  ]
};
