import { chapter as api_docs } from './api-docs.js';
import { chapter as documentation } from './documentation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as style_guides } from './style-guides.js';
import { chapter as tools } from './tools.js';
import { chapter as tutorials } from './tutorials.js';

export const category = {
  slug: "technical-writing",
  title: "Technical Writing",
  description: "Pelajari teknik menulis dokumentasi teknis yang jelas, efektif, dan profesional untuk developer dan pengguna.",
  icon: "SiReadthedocs",
  color: "#4CAF50",
  totalChapters: 7,
  difficulty: "Beginner to Intermediate",
  order: 15,
  isPublished: true,
  chapters: [
    api_docs,
    documentation,
    introduction,
    quiz,
    style_guides,
    tools,
    tutorials
  ]
};
