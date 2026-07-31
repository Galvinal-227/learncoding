import { chapter as advanced_log } from './advanced-log.js';
import { chapter as basic_commands } from './basic-commands.js';
import { chapter as bisect } from './bisect.js';
import { chapter as branches } from './branches.js';
import { chapter as collaboration } from './collaboration.js';
import { chapter as commits } from './commits.js';
import { chapter as configuration } from './configuration.js';
import { chapter as gitignore } from './gitignore.js';
import { chapter as hooks } from './hooks.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as merging } from './merging.js';
import { chapter as quiz } from './quiz.js';
import { chapter as rebasing } from './rebasing.js';
import { chapter as remote_repos } from './remote-repos.js';
import { chapter as staging } from './staging.js';
import { chapter as stash } from './stash.js';
import { chapter as submodules } from './submodules.js';
import { chapter as tags } from './tags.js';

export const category = {
  slug: "git",
  title: "Git",
  description: "Kuasai Git - version control system wajib untuk setiap developer.",
  icon: "SiGit",
  color: "#F05032",
  totalChapters: 19,
  difficulty: "Beginner",
  order: 1,
  isPublished: true,
  chapters: [
    advanced_log,
    basic_commands,
    bisect,
    branches,
    collaboration,
    commits,
    configuration,
    gitignore,
    hooks,
    installation,
    introduction,
    merging,
    quiz,
    rebasing,
    remote_repos,
    staging,
    stash,
    submodules,
    tags
  ]
};
