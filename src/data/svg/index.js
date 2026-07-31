import { chapter as animation } from './animation.js';
import { chapter as basic_shapes } from './basic-shapes.js';
import { chapter as gradients } from './gradients.js';
import { chapter as interactivity } from './interactivity.js';
import { chapter as introduction } from './introduction.js';
import { chapter as paths } from './paths.js';
import { chapter as patterns } from './patterns.js';
import { chapter as quiz } from './quiz.js';
import { chapter as sprites } from './sprites.js';
import { chapter as text } from './text.js';

export const category = {
  slug: "svg",
  title: "SVG (Scalable Vector Graphics)",
  description: "Pelajari SVG untuk membuat grafik vektor yang scalable dan interaktif untuk web.",
  icon: "SiSvg",
  color: "#FFB13B",
  totalChapters: 10,
  difficulty: "Beginner to Intermediate",
  order: 12,
  isPublished: true,
  chapters: [
    animation,
    basic_shapes,
    gradients,
    interactivity,
    introduction,
    paths,
    patterns,
    quiz,
    sprites,
    text
  ]
};
