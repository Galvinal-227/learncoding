import { chapter as actions } from './actions.js';
import { chapter as addons } from './addons.js';
import { chapter as controls } from './controls.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as setup } from './setup.js';
import { chapter as stories } from './stories.js';
import { chapter as testing } from './testing.js';

export const category = {
  slug: "storybook",
  title: "Storybook",
  description: "Pelajari Storybook untuk membangun UI components secara terisolasi dan dokumentasi komponen yang interaktif.",
  icon: "SiStorybook",
  color: "#FF4785",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 10,
  isPublished: true,
  chapters: [
    actions,
    addons,
    controls,
    introduction,
    quiz,
    setup,
    stories,
    testing
  ]
};
