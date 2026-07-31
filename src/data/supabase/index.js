import { chapter as auth } from './auth.js';
import { chapter as database } from './database.js';
import { chapter as edge_functions } from './edge-functions.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as realtime } from './realtime.js';
import { chapter as row_level_security } from './row-level-security.js';
import { chapter as storage } from './storage.js';

export const category = {
  slug: "supabase",
  title: "Supabase",
  description: "Pelajari Supabase sebagai backend-as-a-service: database, authentication, storage, realtime, dan edge functions.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 11,
  isPublished: true,
  chapters: [
    auth,
    database,
    edge_functions,
    introduction,
    quiz,
    realtime,
    row_level_security,
    storage
  ]
};
