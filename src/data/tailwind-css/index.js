import { chapter as best_practices } from './best-practices.js';
import { chapter as components } from './components.js';
import { chapter as customization } from './customization.js';
import { chapter as dark_mode } from './dark-mode.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as plugins } from './plugins.js';
import { chapter as quiz } from './quiz.js';
import { chapter as responsive_design } from './responsive-design.js';
import { chapter as utility_first } from './utility-first.js';

export const category = {
  slug: "tailwind-css",
  title: "Tailwind CSS",
  description: "Pelajari Tailwind CSS framework utility-first untuk styling website modern dan responsif.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  totalChapters: 10,
  difficulty: "Beginner to Intermediate",
  order: 14,
  isPublished: true,
  chapters: [
    best_practices,
    components,
    customization,
    dark_mode,
    installation,
    introduction,
    plugins,
    quiz,
    responsive_design,
    utility_first
  ]
};
