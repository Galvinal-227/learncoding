import { chapter as benefits } from './benefits.js';
import { chapter as headless_cms } from './headless-cms.js';
import { chapter as introduction } from './introduction.js';
import { chapter as netlify } from './netlify.js';
import { chapter as quiz } from './quiz.js';
import { chapter as static_site_generators } from './static-site-generators.js';
import { chapter as vercel } from './vercel.js';

export const category = {
  slug: "jamstack",
  title: "JAMStack",
  description: "Pelajari arsitektur JAMStack: JavaScript, APIs, Markup untuk website modern yang cepat dan aman.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  totalChapters: 7,
  difficulty: "Intermediate",
  order: 82,
  isPublished: true,
  chapters: [
    benefits,
    headless_cms,
    introduction,
    netlify,
    quiz,
    static_site_generators,
    vercel
  ]
};
