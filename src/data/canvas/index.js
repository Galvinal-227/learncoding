import { chapter as animations } from './animations.js';
import { chapter as drawing_basics } from './drawing-basics.js';
import { chapter as images } from './images.js';
import { chapter as introduction } from './introduction.js';
import { chapter as paths } from './paths.js';
import { chapter as performance } from './performance.js';
import { chapter as pixel_manipulation } from './pixel-manipulation.js';
import { chapter as quiz } from './quiz.js';
import { chapter as shapes } from './shapes.js';
import { chapter as text } from './text.js';
import { chapter as transformations } from './transformations.js';

export const category = {
  slug: "canvas",
  title: "Canvas",
  description: "Kuasai HTML5 Canvas API untuk membuat grafik, game, animasi, dan visualisasi data 2D.",
  icon: "SiHtml5",
  color: "#E34F26",
  totalChapters: 11,
  difficulty: "Advanced",
  order: 25,
  isPublished: true,
  chapters: [
    animations,
    drawing_basics,
    images,
    introduction,
    paths,
    performance,
    pixel_manipulation,
    quiz,
    shapes,
    text,
    transformations
  ]
};
