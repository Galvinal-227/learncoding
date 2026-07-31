import { chapter as actions } from './actions.js';
import { chapter as devtools } from './devtools.js';
import { chapter as introduction } from './introduction.js';
import { chapter as middleware } from './middleware.js';
import { chapter as persist } from './persist.js';
import { chapter as quiz } from './quiz.js';
import { chapter as selectors } from './selectors.js';
import { chapter as store_creation } from './store-creation.js';

export const category = {
  slug: "zustand",
  title: "Zustand",
  description: "Pelajari Zustand - state management modern yang simpel, cepat, dan powerful untuk React.",
  icon: "SiZustand",
  color: "#F36D38",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 35,
  isPublished: true,
  chapters: [
    actions,
    devtools,
    introduction,
    middleware,
    persist,
    quiz,
    selectors,
    store_creation
  ]
};
