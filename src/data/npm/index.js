import { chapter as audit } from './audit.js';
import { chapter as dependencies } from './dependencies.js';
import { chapter as introduction } from './introduction.js';
import { chapter as npx } from './npx.js';
import { chapter as package_json } from './package-json.js';
import { chapter as publishing } from './publishing.js';
import { chapter as quiz } from './quiz.js';
import { chapter as scripts } from './scripts.js';
import { chapter as versioning } from './versioning.js';
import { chapter as workspaces } from './workspaces.js';

export const category = {
  slug: "npm",
  title: "NPM",
  description: "Kuasai NPM - package manager untuk JavaScript dan Node.js. Dependency management, publishing, dan auditing.",
  icon: "SiNpm",
  color: "#CB3837",
  totalChapters: 10,
  difficulty: "Beginner",
  order: 22,
  isPublished: true,
  chapters: [
    audit,
    dependencies,
    introduction,
    npx,
    package_json,
    publishing,
    quiz,
    scripts,
    versioning,
    workspaces
  ]
};
