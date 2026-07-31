import { chapter as aria } from './aria.js';
import { chapter as color_contrast } from './color-contrast.js';
import { chapter as introduction } from './introduction.js';
import { chapter as keyboard_navigation } from './keyboard-navigation.js';
import { chapter as quiz } from './quiz.js';
import { chapter as screen_readers } from './screen-readers.js';
import { chapter as semantic_html } from './semantic-html.js';
import { chapter as testing } from './testing.js';
import { chapter as wcag } from './wcag.js';

export const category = {
  slug: "accessibility",
  title: "Aksesibilitas (A11Y)",
  description: "Pelajari cara membuat website yang bisa diakses semua orang, termasuk penyandang disabilitas.",
  icon: "SiAccessibility",
  color: "#0066CC",
  totalChapters: 9,
  difficulty: "Intermediate",
  order: 70,
  isPublished: true,
  chapters: [
    aria,
    color_contrast,
    introduction,
    keyboard_navigation,
    quiz,
    screen_readers,
    semantic_html,
    testing,
    wcag
  ]
};
