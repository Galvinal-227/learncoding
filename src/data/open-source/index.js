import { chapter as community } from './community.js';
import { chapter as contributing } from './contributing.js';
import { chapter as finding_projects } from './finding-projects.js';
import { chapter as introduction } from './introduction.js';
import { chapter as issues } from './issues.js';
import { chapter as licensing } from './licensing.js';
import { chapter as pull_requests } from './pull-requests.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "open-source",
  title: "Open Source",
  description: "Pelajari cara berkontribusi ke open source: finding projects, PR, issues, dan komunitas.",
  icon: "SiOpensourceinitiative",
  color: "#3DA639",
  totalChapters: 8,
  difficulty: "Beginner",
  order: 94,
  isPublished: true,
  chapters: [
    community,
    contributing,
    finding_projects,
    introduction,
    issues,
    licensing,
    pull_requests,
    quiz
  ]
};
