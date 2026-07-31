import { chapter as case_studies } from './case-studies.js';
import { chapter as design } from './design.js';
import { chapter as domain } from './domain.js';
import { chapter as github_pages } from './github-pages.js';
import { chapter as hosting } from './hosting.js';
import { chapter as introduction } from './introduction.js';
import { chapter as projects } from './projects.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "portfolio",
  title: "Portfolio",
  description: "Bangun portfolio developer yang standout untuk menarik recruiter, klien, dan kesempatan karir.",
  icon: "SiGithub",
  color: "#181717",
  totalChapters: 8,
  difficulty: "Beginner",
  order: 93,
  isPublished: true,
  chapters: [
    case_studies,
    design,
    domain,
    github_pages,
    hosting,
    introduction,
    projects,
    quiz
  ]
};
