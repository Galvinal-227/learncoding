import { chapter as authentication_jwt } from './authentication-jwt.js';
import { chapter as error_handling } from './error-handling.js';
import { chapter as introduction } from './introduction.js';
import { chapter as middleware } from './middleware.js';
import { chapter as quiz } from './quiz.js';
import { chapter as request_response } from './request-response.js';
import { chapter as rest_api_express } from './rest-api-express.js';
import { chapter as routing } from './routing.js';
import { chapter as static_files } from './static-files.js';
import { chapter as template_engines } from './template-engines.js';
import { chapter as testing } from './testing.js';
import { chapter as validation } from './validation.js';

export const category = {
  slug: "express-js",
  title: "Express.js",
  description: "Kuasai Express.js - framework Node.js paling populer untuk membangun REST API dan aplikasi web.",
  icon: "SiExpress",
  color: "#000000",
  totalChapters: 12,
  difficulty: "Intermediate",
  order: 30,
  isPublished: true,
  chapters: [
    authentication_jwt,
    error_handling,
    introduction,
    middleware,
    quiz,
    request_response,
    rest_api_express,
    routing,
    static_files,
    template_engines,
    testing,
    validation
  ]
};
