import { chapter as associations } from './associations.js';
import { chapter as hooks } from './hooks.js';
import { chapter as introduction } from './introduction.js';
import { chapter as migrations } from './migrations.js';
import { chapter as models } from './models.js';
import { chapter as queries } from './queries.js';
import { chapter as quiz } from './quiz.js';
import { chapter as transactions } from './transactions.js';

export const category = {
  slug: "sequelize",
  title: "Sequelize ORM",
  description: "Pelajari Sequelize ORM untuk Node.js: model, association, query, migration, dan transaction.",
  icon: "SiSequelize",
  color: "#52B0E7",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 9,
  isPublished: true,
  chapters: [
    associations,
    hooks,
    introduction,
    migrations,
    models,
    queries,
    quiz,
    transactions
  ]
};
