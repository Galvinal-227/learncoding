import { chapter as configuration } from './configuration.js';
import { chapter as custom_rules } from './custom-rules.js';
import { chapter as introduction } from './introduction.js';
import { chapter as plugins } from './plugins.js';
import { chapter as prettier_integration } from './prettier-integration.js';
import { chapter as quiz } from './quiz.js';
import { chapter as rules } from './rules.js';

export const category = {
  slug: "eslint",
  title: "ESLint",
  description: "Kuasai ESLint untuk menjaga kualitas dan konsistensi kode JavaScript/TypeScript.",
  icon: "SiEslint",
  color: "#4B32C3",
  totalChapters: 7,
  difficulty: "Intermediate",
  order: 17,
  isPublished: true,
  chapters: [
    configuration,
    custom_rules,
    introduction,
    plugins,
    prettier_integration,
    quiz,
    rules
  ]
};
