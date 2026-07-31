import { chapter as authentication } from './authentication.js';
import { chapter as best_practices } from './best-practices.js';
import { chapter as documentation } from './documentation.js';
import { chapter as hateoas } from './hateoas.js';
import { chapter as headers } from './headers.js';
import { chapter as http_methods } from './http-methods.js';
import { chapter as introduction } from './introduction.js';
import { chapter as pagination } from './pagination.js';
import { chapter as quiz } from './quiz.js';
import { chapter as status_codes } from './status-codes.js';
import { chapter as versioning } from './versioning.js';

export const category = {
  slug: "rest-api",
  title: "REST API Design",
  description: "Pelajari cara mendesain REST API yang baik, mulai dari HTTP methods, status codes, authentication, hingga best practices.",
  icon: "SiApi",
  color: "#FF6C37",
  totalChapters: 11,
  difficulty: "Intermediate",
  order: 4,
  isPublished: true,
  chapters: [
    authentication,
    best_practices,
    documentation,
    hateoas,
    headers,
    http_methods,
    introduction,
    pagination,
    quiz,
    status_codes,
    versioning
  ]
};
