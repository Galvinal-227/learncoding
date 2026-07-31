import { chapter as arrays } from './arrays.js';
import { chapter as graphs } from './graphs.js';
import { chapter as hash_tables } from './hash-tables.js';
import { chapter as heaps } from './heaps.js';
import { chapter as introduction } from './introduction.js';
import { chapter as linked_lists } from './linked-lists.js';
import { chapter as queues } from './queues.js';
import { chapter as quiz } from './quiz.js';
import { chapter as sets_maps } from './sets-maps.js';
import { chapter as stacks } from './stacks.js';
import { chapter as trees } from './trees.js';

export const category = {
  slug: "data-structures",
  title: "Data Structures",
  description: "Kuasai struktur data fundamental untuk problem solving dan coding interview.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  totalChapters: 11,
  difficulty: "Intermediate",
  order: 61,
  isPublished: true,
  chapters: [
    arrays,
    graphs,
    hash_tables,
    heaps,
    introduction,
    linked_lists,
    queues,
    quiz,
    sets_maps,
    stacks,
    trees
  ]
};
