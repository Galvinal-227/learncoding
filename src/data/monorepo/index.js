import { chapter as benefits } from './benefits.js';
import { chapter as ci_cd } from './ci-cd.js';
import { chapter as introduction } from './introduction.js';
import { chapter as lerna } from './lerna.js';
import { chapter as nx } from './nx.js';
import { chapter as pnpm_workspaces } from './pnpm-workspaces.js';
import { chapter as quiz } from './quiz.js';
import { chapter as turborepo } from './turborepo.js';

export const category = {
  slug: "monorepo",
  title: "Monorepo",
  description: "Pelajari strategi monorepo dengan Turborepo, Nx, Lerna, dan PNPM workspaces untuk mengelola multiple projects.",
  icon: "SiTurborepo",
  color: "#EF4444",
  totalChapters: 8,
  difficulty: "Advanced",
  order: 81,
  isPublished: true,
  chapters: [
    benefits,
    ci_cd,
    introduction,
    lerna,
    nx,
    pnpm_workspaces,
    quiz,
    turborepo
  ]
};
