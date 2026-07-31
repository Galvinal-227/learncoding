import { chapter as best_practices } from './best-practices.js';
import { chapter as custom_elements } from './custom-elements.js';
import { chapter as html_templates } from './html-templates.js';
import { chapter as introduction } from './introduction.js';
import { chapter as lifecycle_callbacks } from './lifecycle-callbacks.js';
import { chapter as quiz } from './quiz.js';
import { chapter as shadow_dom } from './shadow-dom.js';
import { chapter as slots } from './slots.js';
import { chapter as styling } from './styling.js';

export const category = {
  slug: "web-components",
  title: "Web Components",
  description: "Pelajari cara membuat elemen HTML kustom yang reusable dengan Web Components.",
  icon: "SiHtml5",
  color: "#E34F26",
  totalChapters: 9,
  difficulty: "Advanced",
  order: 87,
  isPublished: true,
  chapters: [
    best_practices,
    custom_elements,
    html_templates,
    introduction,
    lifecycle_callbacks,
    quiz,
    shadow_dom,
    slots,
    styling
  ]
};
