import { chapter as fluid_grids } from './fluid-grids.js';
import { chapter as framework_usage } from './framework-usage.js';
import { chapter as introduction } from './introduction.js';
import { chapter as media_queries } from './media-queries.js';
import { chapter as mobile_first } from './mobile-first.js';
import { chapter as quiz } from './quiz.js';
import { chapter as responsive_images } from './responsive-images.js';
import { chapter as viewport } from './viewport.js';

export const category = {
  slug: "responsive-design",
  title: "Responsive Design",
  description: "Pelajari teknik responsive design untuk membuat website yang optimal di semua perangkat: dari mobile hingga desktop.",
  icon: "SiCss3",
  color: "#2965F1",
  totalChapters: 8,
  difficulty: "Beginner to Intermediate",
  order: 3,
  isPublished: true,
  chapters: [
    fluid_grids,
    framework_usage,
    introduction,
    media_queries,
    mobile_first,
    quiz,
    responsive_images,
    viewport
  ]
};
