import { chapter as color_theory } from './color-theory.js';
import { chapter as design_systems } from './design-systems.js';
import { chapter as icons } from './icons.js';
import { chapter as introduction } from './introduction.js';
import { chapter as layout } from './layout.js';
import { chapter as prototyping } from './prototyping.js';
import { chapter as quiz } from './quiz.js';
import { chapter as spacing } from './spacing.js';
import { chapter as typography } from './typography.js';

export const category = {
  slug: "ui-design",
  title: "UI Design",
  description: "Pelajari prinsip UI design: warna, tipografi, spacing, visual hierarchy, dan design systems.",
  icon: "SiFigma",
  color: "#F24E1E",
  totalChapters: 9,
  difficulty: "Beginner",
  order: 75,
  isPublished: true,
  chapters: [
    color_theory,
    design_systems,
    icons,
    introduction,
    layout,
    prototyping,
    quiz,
    spacing,
    typography
  ]
};
