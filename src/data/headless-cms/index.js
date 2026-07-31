import { chapter as api } from './api.js';
import { chapter as contentful } from './contentful.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as sanity } from './sanity.js';
import { chapter as strapi } from './strapi.js';
import { chapter as usage } from './usage.js';

export const category = {
  slug: "headless-cms",
  title: "Headless CMS",
  description: "Kuasai Headless CMS modern: Strapi, Contentful, Sanity untuk content management yang fleksibel.",
  icon: "SiStrapi",
  color: "#4945FF",
  totalChapters: 7,
  difficulty: "Intermediate",
  order: 41,
  isPublished: true,
  chapters: [
    api,
    contentful,
    introduction,
    quiz,
    sanity,
    strapi,
    usage
  ]
};
