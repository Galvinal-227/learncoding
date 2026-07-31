import { chapter as agile_principles } from './agile-principles.js';
import { chapter as artifacts } from './artifacts.js';
import { chapter as ceremonies } from './ceremonies.js';
import { chapter as introduction } from './introduction.js';
import { chapter as kanban } from './kanban.js';
import { chapter as quiz } from './quiz.js';
import { chapter as scrum_roles } from './scrum-roles.js';
import { chapter as tools } from './tools.js';

export const category = {
  slug: "agile-scrum",
  title: "Agile & Scrum",
  description: "Pahami metodologi pengembangan software Agile dan framework Scrum untuk bekerja di tim profesional.",
  icon: "SiScrumalliance",
  color: "#6DB33F",
  totalChapters: 8,
  difficulty: "Beginner",
  order: 85,
  isPublished: true,
  chapters: [
    agile_principles,
    artifacts,
    ceremonies,
    introduction,
    kanban,
    quiz,
    scrum_roles,
    tools
  ]
};
