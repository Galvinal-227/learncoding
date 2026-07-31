import { chapter as caching } from './caching.js';
import { chapter as code_splitting } from './code-splitting.js';
import { chapter as dev_server } from './dev-server.js';
import { chapter as entry_output } from './entry-output.js';
import { chapter as introduction } from './introduction.js';
import { chapter as loaders } from './loaders.js';
import { chapter as plugins } from './plugins.js';
import { chapter as production_build } from './production-build.js';
import { chapter as quiz } from './quiz.js';
import { chapter as tree_shaking } from './tree-shaking.js';

export const category = {
  slug: "webpack",
  title: "Webpack",
  description: "Pelajari Webpack - module bundler untuk aplikasi JavaScript modern.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  totalChapters: 10,
  difficulty: "Advanced",
  order: 26,
  isPublished: true,
  chapters: [
    caching,
    code_splitting,
    dev_server,
    entry_output,
    introduction,
    loaders,
    plugins,
    production_build,
    quiz,
    tree_shaking
  ]
};
