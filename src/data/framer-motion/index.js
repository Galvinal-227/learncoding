import { chapter as animations } from './animations.js';
import { chapter as gestures } from './gestures.js';
import { chapter as introduction } from './introduction.js';
import { chapter as layout_animations } from './layout-animations.js';
import { chapter as quiz } from './quiz.js';
import { chapter as react_integration } from './react-integration.js';
import { chapter as scroll_based } from './scroll-based.js';
import { chapter as variants } from './variants.js';

export const category = {
  slug: "framer-motion",
  title: "Framer Motion",
  description: "Kuasai Framer Motion untuk animasi React yang deklaratif, powerful, dan mudah.",
  icon: "SiFramer",
  color: "#0055FF",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 54,
  isPublished: true,
  chapters: [
    animations,
    gestures,
    introduction,
    layout_animations,
    quiz,
    react_integration,
    scroll_based,
    variants
  ]
};
