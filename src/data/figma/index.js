import { chapter as auto_layout } from './auto-layout.js';
import { chapter as collaboration } from './collaboration.js';
import { chapter as components } from './components.js';
import { chapter as design_tokens } from './design-tokens.js';
import { chapter as frames } from './frames.js';
import { chapter as interfaceDesign } from './interface.js';
import { chapter as introduction } from './introduction.js';
import { chapter as plugins } from './plugins.js';
import { chapter as prototyping } from './prototyping.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "figma",
  title: "Figma",
  description: "Kuasai Figma untuk UI/UX design: dari wireframe sampai prototype interaktif.",
  icon: "SiFigma",
  color: "#F24E1E",
  totalChapters: 10,
  difficulty: "Beginner",
  order: 75,
  isPublished: true,
  chapters: [
    auto_layout,
    collaboration,
    components,
    design_tokens,
    frames,
    interfaceDesign,
    introduction,
    plugins,
    prototyping,
    quiz
  ]
};