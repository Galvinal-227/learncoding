import { chapter as controllers } from './controllers.js';
import { chapter as guards } from './guards.js';
import { chapter as interceptors } from './interceptors.js';
import { chapter as introduction } from './introduction.js';
import { chapter as middleware } from './middleware.js';
import { chapter as modules } from './modules.js';
import { chapter as openapi } from './openapi.js';
import { chapter as pipes } from './pipes.js';
import { chapter as providers } from './providers.js';
import { chapter as quiz } from './quiz.js';
import { chapter as testing } from './testing.js';
import { chapter as validation } from './validation.js';

export const category = {
  slug: "nest-js",
  title: "NestJS",
  description: "Kuasai NestJS - framework Node.js progresif untuk aplikasi server-side yang scalable dan maintainable.",
  icon: "SiNestjs",
  color: "#E0234E",
  totalChapters: 12,
  difficulty: "Advanced",
  order: 45,
  isPublished: true,
  chapters: [
    controllers,
    guards,
    interceptors,
    introduction,
    middleware,
    modules,
    openapi,
    pipes,
    providers,
    quiz,
    testing,
    validation
  ]
};
