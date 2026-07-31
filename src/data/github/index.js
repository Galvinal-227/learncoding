import { chapter as actions } from './actions.js';
import { chapter as gists } from './gists.js';
import { chapter as introduction } from './introduction.js';
import { chapter as issues } from './issues.js';
import { chapter as pages } from './pages.js';
import { chapter as projects } from './projects.js';
import { chapter as pull_requests } from './pull-requests.js';
import { chapter as quiz } from './quiz.js';
import { chapter as repository } from './repository.js';
import { chapter as security } from './security.js';
import { chapter as wiki } from './wiki.js';

export const category = {
  slug: "github",
  title: "GitHub",
  description: "Kuasai GitHub untuk kolaborasi, project management, CI/CD, dan portfolio developer.",
  icon: "SiGithub",
  color: "#181717",
  totalChapters: 11,
  difficulty: "Beginner",
  order: 2,
  isPublished: true,
  chapters: [
    actions,
    gists,
    introduction,
    issues,
    pages,
    projects,
    pull_requests,
    quiz,
    repository,
    security,
    wiki
  ]
};
