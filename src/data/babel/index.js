import { chapter as configuration } from './configuration.js';
import { chapter as integration } from './integration.js';
import { chapter as introduction } from './introduction.js';
import { chapter as plugins } from './plugins.js';
import { chapter as polyfills } from './polyfills.js';
import { chapter as presets } from './presets.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "babel",
  title: "Babel",
  description: "Pelajari Babel - JavaScript compiler untuk menggunakan fitur modern di browser lama.",
  icon: "SiBabel",
  color: "#F9DC3E",
  totalChapters: 7,
  difficulty: "Intermediate",
  order: 16,
  isPublished: true,
  chapters: [
    configuration,
    integration,
    introduction,
    plugins,
    polyfills,
    presets,
    quiz
  ]
};
