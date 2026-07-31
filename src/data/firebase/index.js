import { chapter as analytics } from './analytics.js';
import { chapter as auth } from './auth.js';
import { chapter as cloud_functions } from './cloud-functions.js';
import { chapter as firestore } from './firestore.js';
import { chapter as hosting } from './hosting.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as realtime_database } from './realtime-database.js';
import { chapter as storage } from './storage.js';

export const category = {
  slug: "firebase",
  title: "Firebase",
  description: "Kuasai Firebase - Backend-as-a-Service Google untuk autentikasi, database realtime, storage, dan hosting.",
  icon: "SiFirebase",
  color: "#DD2C00",
  totalChapters: 9,
  difficulty: "Intermediate",
  order: 40,
  isPublished: true,
  chapters: [
    analytics,
    auth,
    cloud_functions,
    firestore,
    hosting,
    introduction,
    quiz,
    realtime_database,
    storage
  ]
};
