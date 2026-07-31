import { chapter as indexes } from './indexes.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as joins } from './joins.js';
import { chapter as normalization } from './normalization.js';
import { chapter as quiz } from './quiz.js';
import { chapter as security } from './security.js';
import { chapter as sql_basics } from './sql-basics.js';
import { chapter as stored_procedures } from './stored-procedures.js';
import { chapter as transactions } from './transactions.js';
import { chapter as views } from './views.js';

export const category = {
  slug: "mysql",
  title: "MySQL",
  description: "Pelajari MySQL - database relasional paling populer untuk aplikasi web.",
  icon: "SiMysql",
  color: "#4479A1",
  totalChapters: 11,
  difficulty: "Intermediate",
  order: 51,
  isPublished: true,
  chapters: [
    indexes,
    installation,
    introduction,
    joins,
    normalization,
    quiz,
    security,
    sql_basics,
    stored_procedures,
    transactions,
    views
  ]
};
