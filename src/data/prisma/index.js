import { chapter as best_practices } from './best-practices.js';
import { chapter as client } from './client.js';
import { chapter as filtering_sorting } from './filtering-sorting.js';
import { chapter as introduction } from './introduction.js';
import { chapter as migrations } from './migrations.js';
import { chapter as quiz } from './quiz.js';
import { chapter as realtime } from './realtime.js';
import { chapter as relations } from './relations.js';
import { chapter as schema } from './schema.js';
import { chapter as transactions } from './transactions.js';

export const category = {
  slug: "prisma",
  title: "Prisma",
  description: "Kuasai Prisma - ORM modern untuk Node.js dan TypeScript dengan type-safety.",
  icon: "SiPrisma",
  color: "#2D3748",
  totalChapters: 10,
  difficulty: "Intermediate",
  order: 53,
  isPublished: true,
  chapters: [
    best_practices,
    client,
    filtering_sorting,
    introduction,
    migrations,
    quiz,
    realtime,
    relations,
    schema,
    transactions
  ]
};
