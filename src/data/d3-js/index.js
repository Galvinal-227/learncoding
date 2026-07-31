import { chapter as axes } from './axes.js';
import { chapter as data_binding } from './data-binding.js';
import { chapter as interactivity } from './interactivity.js';
import { chapter as introduction } from './introduction.js';
import { chapter as layouts } from './layouts.js';
import { chapter as maps } from './maps.js';
import { chapter as quiz } from './quiz.js';
import { chapter as scales } from './scales.js';
import { chapter as selections } from './selections.js';
import { chapter as svg } from './svg.js';
import { chapter as transitions } from './transitions.js';

export const category = {
  slug: "d3-js",
  title: "D3.js",
  description: "Kuasai D3.js untuk visualisasi data kustom yang powerful dan interaktif di web.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  totalChapters: 11,
  difficulty: "Advanced",
  order: 56,
  isPublished: true,
  chapters: [
    axes,
    data_binding,
    interactivity,
    introduction,
    layouts,
    maps,
    quiz,
    scales,
    selections,
    svg,
    transitions
  ]
};
