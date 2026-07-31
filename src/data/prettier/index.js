import { chapter as configuration } from './configuration.js';
import { chapter as eslint_prettier } from './eslint-prettier.js';
import { chapter as ignore } from './ignore.js';
import { chapter as integration } from './integration.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "prettier",
  title: "Prettier",
  description: "Gunakan Prettier untuk formatting kode otomatis dan konsisten di seluruh project.",
  icon: "SiPrettier",
  color: "#F7B93E",
  totalChapters: 6,
  difficulty: "Beginner",
  order: 30,
  isPublished: true,
  chapters: [
    configuration,
    eslint_prettier,
    ignore,
    integration,
    introduction,
    quiz
  ]
};
