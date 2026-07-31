import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as package_json } from './package-json.js';
import { chapter as plugins } from './plugins.js';
import { chapter as quiz } from './quiz.js';
import { chapter as scripts } from './scripts.js';
import { chapter as workspaces } from './workspaces.js';
import { chapter as zero_installs } from './zero-installs.js';

export const category = {
  slug: "yarn",
  title: "Yarn",
  description: "Pelajari Yarn - package manager alternatif yang cepat, aman, dan reliable.",
  icon: "SiYarn",
  color: "#2C8EBB",
  totalChapters: 8,
  difficulty: "Beginner",
  order: 23,
  isPublished: true,
  chapters: [
    installation,
    introduction,
    package_json,
    plugins,
    quiz,
    scripts,
    workspaces,
    zero_installs
  ]
};
