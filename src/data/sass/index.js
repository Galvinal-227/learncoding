import { chapter as best_practices } from './best-practices.js';
import { chapter as built_in_modules } from './built-in-modules.js';
import { chapter as functions } from './functions.js';
import { chapter as inheritance } from './inheritance.js';
import { chapter as introduction } from './introduction.js';
import { chapter as mixins } from './mixins.js';
import { chapter as nesting } from './nesting.js';
import { chapter as operators } from './operators.js';
import { chapter as partials } from './partials.js';
import { chapter as quiz } from './quiz.js';
import { chapter as variables } from './variables.js';

export const category = {
  slug: "sass",
  title: "Sass (Syntactically Awesome Style Sheets)",
  description: "Pelajari Sass dari dasar hingga mahir: variabel, nesting, mixins, functions, dan best practices untuk CSS yang lebih powerful.",
  icon: "SiSass",
  color: "#CC6699",
  totalChapters: 11,
  difficulty: "Beginner to Intermediate",
  order: 6,
  isPublished: true,
  chapters: [
    best_practices,
    built_in_modules,
    functions,
    inheritance,
    introduction,
    mixins,
    nesting,
    operators,
    partials,
    quiz,
    variables
  ]
};
