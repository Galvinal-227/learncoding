import { chapter as commands } from './commands.js';
import { chapter as filtering } from './filtering.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as strict_mode } from './strict-mode.js';
import { chapter as workspaces } from './workspaces.js';

export const category = {
  slug: "pnpm",
  title: "PNPM",
  description: "Pelajari PNPM - package manager modern yang cepat dan hemat disk space.",
  icon: "SiPnpm",
  color: "#F69220",
  totalChapters: 7,
  difficulty: "Beginner",
  order: 24,
  isPublished: true,
  chapters: [
    commands,
    filtering,
    installation,
    introduction,
    quiz,
    strict_mode,
    workspaces
  ]
};
