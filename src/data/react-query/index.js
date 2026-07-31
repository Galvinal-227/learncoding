import { chapter as caching } from './caching.js';
import { chapter as infinite_queries } from './infinite-queries.js';
import { chapter as introduction } from './introduction.js';
import { chapter as mutations } from './mutations.js';
import { chapter as pagination } from './pagination.js';
import { chapter as queries } from './queries.js';
import { chapter as query_keys } from './query-keys.js';
import { chapter as quiz } from './quiz.js';
import { chapter as suspense_mode } from './suspense-mode.js';
import { chapter as testing } from './testing.js';

export const category = {
  slug: "react-query",
  title: "react query",
  description: "Deskripsi untuk react-query",
  icon: "FiBookOpen",
  color: "#FFFFFF",
  totalChapters: 10,
  difficulty: "Beginner",
  order: 0,
  isPublished: true,
  chapters: [
    caching,
    infinite_queries,
    introduction,
    mutations,
    pagination,
    queries,
    query_keys,
    quiz,
    suspense_mode,
    testing
  ]
};
