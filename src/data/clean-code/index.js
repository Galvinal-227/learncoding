import { chapter as comments } from './comments.js';
import { chapter as error_handling } from './error-handling.js';
import { chapter as formatting } from './formatting.js';
import { chapter as functions } from './functions.js';
import { chapter as introduction } from './introduction.js';
import { chapter as naming } from './naming.js';
import { chapter as quiz } from './quiz.js';
import { chapter as refactoring } from './refactoring.js';
import { chapter as testing } from './testing.js';

export const category = {
  slug: "clean-code",
  title: "Clean Code",
  description: "Tulis kode yang bersih, readable, dan maintainable dengan prinsip Clean Code.",
  icon: "SiCleanode",
  color: "#3178C6",
  totalChapters: 9,
  difficulty: "Intermediate",
  order: 63,
  isPublished: true,
  chapters: [
    comments,
    error_handling,
    formatting,
    functions,
    introduction,
    naming,
    quiz,
    refactoring,
    testing
  ]
};
