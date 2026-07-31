import { chapter as clean_architecture } from './clean-architecture.js';
import { chapter as cqrs } from './cqrs.js';
import { chapter as event_driven } from './event-driven.js';
import { chapter as event_sourcing } from './event-sourcing.js';
import { chapter as hexagonal } from './hexagonal.js';
import { chapter as introduction } from './introduction.js';
import { chapter as microservices } from './microservices.js';
import { chapter as mitroservices } from './mitroservices.js';
import { chapter as mvc } from './mvc.js';
import { chapter as quiz } from './quiz.js';
import { chapter as serverless_file } from './serverless-file.js';

export const category = {
  slug: "software-architecture",
  title: "Software Architecture",
  description: "Pelajari arsitektur software: MVC, microservices, event-driven, serverless, hexagonal.",
  icon: "SiPattern",
  color: "#FF6B6B",
  totalChapters: 11,
  difficulty: "Advanced",
  order: 78,
  isPublished: true,
  chapters: [
    clean_architecture,
    cqrs,
    event_driven,
    event_sourcing,
    hexagonal,
    introduction,
    microservices,
    mitroservices,
    mvc,
    quiz,
    serverless_file
  ]
};
