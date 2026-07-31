import { chapter as extensions } from './extensions.js';
import { chapter as full_text_search } from './full-text-search.js';
import { chapter as indexes } from './indexes.js';
import { chapter as introduction } from './introduction.js';
import { chapter as json_support } from './json-support.js';
import { chapter as nodejs } from './nodejs.js';
import { chapter as performance } from './performance.js';
import { chapter as quiz } from './quiz.js';
import { chapter as setup } from './setup.js';
import { chapter as sql_basics } from './sql-basics.js';

export const category = {
  slug: "postgresql",
  title: "PostgreSQL",
  description: "Pelajari PostgreSQL - database relasional open-source paling advanced di dunia.",
  icon: "SiPostgresql",
  color: "#4169E1",
  totalChapters: 10,
  difficulty: "Intermediate",
  order: 52,
  isPublished: true,
  chapters: [
    extensions,
    full_text_search,
    indexes,
    introduction,
    json_support,
    nodejs,
    performance,
    quiz,
    setup,
    sql_basics
  ]
};
