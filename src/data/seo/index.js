import { chapter as backlinks } from './backlinks.js';
import { chapter as introduction } from './introduction.js';
import { chapter as meta_tags } from './meta-tags.js';
import { chapter as mobile_friendly } from './mobile-friendly.js';
import { chapter as performance } from './performance.js';
import { chapter as quiz } from './quiz.js';
import { chapter as robots_txt } from './robots-txt.js';
import { chapter as sitemap } from './sitemap.js';
import { chapter as structured_data } from './structured-data.js';
import { chapter as tools } from './tools.js';

export const category = {
  slug: "seo",
  title: "SEO (Search Engine Optimization)",
  description: "Pelajari teknik SEO untuk meningkatkan visibilitas website di mesin pencari seperti Google.",
  icon: "SiGoogle",
  color: "#4285F4",
  totalChapters: 10,
  difficulty: "Beginner to Intermediate",
  order: 8,
  isPublished: true,
  chapters: [
    backlinks,
    introduction,
    meta_tags,
    mobile_friendly,
    performance,
    quiz,
    robots_txt,
    sitemap,
    structured_data,
    tools
  ]
};
