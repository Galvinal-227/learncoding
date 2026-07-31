import { chapter as animation_properties } from './animation-properties.js';
import { chapter as easing } from './easing.js';
import { chapter as introduction } from './introduction.js';
import { chapter as keyframes } from './keyframes.js';
import { chapter as libraries } from './libraries.js';
import { chapter as performance } from './performance.js';
import { chapter as quiz } from './quiz.js';
import { chapter as transitions } from './transitions.js';

export const category = {
  slug: "css-animations",
  title: "CSS Animations",
  description: "Kuasai seni animasi web dengan CSS: transitions, keyframes, transforms, dan efek visual yang memukau.",
  icon: "SiCss3",
  color: "#1572B6",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 13,
  isPublished: true,
  chapters: [
    animation_properties,
    easing,
    introduction,
    keyframes,
    libraries,
    performance,
    quiz,
    transitions
  ]
};
