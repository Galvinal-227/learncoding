import { chapter as cache_api } from './cache-api.js';
import { chapter as cookies } from './cookies.js';
import { chapter as indexed_db } from './indexed-db.js';
import { chapter as introduction } from './introduction.js';
import { chapter as local_storage } from './local-storage.js';
import { chapter as quiz } from './quiz.js';
import { chapter as session_storage } from './session-storage.js';
import { chapter as storage_quotas } from './storage-quotas.js';

export const category = {
  slug: "web-storage",
  title: "Web Storage",
  description: "Pelajari localStorage, sessionStorage, cookies, IndexedDB untuk menyimpan data di browser.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 84,
  isPublished: true,
  chapters: [
    cache_api,
    cookies,
    indexed_db,
    introduction,
    local_storage,
    quiz,
    session_storage,
    storage_quotas
  ]
};
