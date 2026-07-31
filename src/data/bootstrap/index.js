import { chapter as components } from './components.js';
import { chapter as customization } from './customization.js';
import { chapter as forms } from './forms.js';
import { chapter as grid_system } from './grid-system.js';
import { chapter as introduction } from './introduction.js';
import { chapter as javascript_plugins } from './javascript-plugins.js';
import { chapter as quiz } from './quiz.js';
import { chapter as rtl } from './rtl.js';
import { chapter as utilities } from './utilities.js';

export const category = {
  slug: "bootstrap",
  title: "Bootstrap",
  description: "Kuasai Bootstrap 5 - framework CSS paling populer untuk membangun website responsif dengan cepat.",
  icon: "SiBootstrap",
  color: "#7952B3",
  totalChapters: 9,
  difficulty: "Beginner",
  order: 12,
  isPublished: true,
  chapters: [
    components,
    customization,
    forms,
    grid_system,
    introduction,
    javascript_plugins,
    quiz,
    rtl,
    utilities
  ]
};
