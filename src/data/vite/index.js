import { chapter as build } from './build.js';
import { chapter as dev_server } from './dev-server.js';
import { chapter as env_variables } from './env-variables.js';
import { chapter as introduction } from './introduction.js';
import { chapter as library_mode } from './library-mode.js';
import { chapter as plugins } from './plugins.js';
import { chapter as project_setup } from './project-setup.js';
import { chapter as quiz } from './quiz.js';
import { chapter as react_vite } from './react-vite.js';

export const category = {
  slug: "vite",
  title: "Vite",
  description: "Kuasai Vite - build tool modern yang super cepat untuk development web.",
  icon: "SiVite",
  color: "#646CFF",
  totalChapters: 9,
  difficulty: "Intermediate",
  order: 25,
  isPublished: true,
  chapters: [
    build,
    dev_server,
    env_variables,
    introduction,
    library_mode,
    plugins,
    project_setup,
    quiz,
    react_vite
  ]
};
