import { chapter as circleci } from './circleci.js';
import { chapter as deployment_strategies } from './deployment-strategies.js';
import { chapter as github_actions } from './github-actions.js';
import { chapter as gitlab_ci } from './gitlab-ci.js';
import { chapter as introduction } from './introduction.js';
import { chapter as jenkins } from './jenkins.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "ci-cd",
  title: "CI/CD",
  description: "Kuasai Continuous Integration dan Continuous Deployment untuk otomatisasi workflow development.",
  icon: "SiGithubactions",
  color: "#2088FF",
  totalChapters: 7,
  difficulty: "Advanced",
  order: 50,
  isPublished: true,
  chapters: [
    circleci,
    deployment_strategies,
    github_actions,
    gitlab_ci,
    introduction,
    jenkins,
    quiz
  ]
};
