import { chapter as api_gateway } from './api-gateway.js';
import { chapter as communication } from './communication.js';
import { chapter as data_management } from './data-management.js';
import { chapter as deployment } from './deployment.js';
import { chapter as design } from './design.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as service_discovery } from './service-discovery.js';
import { chapter as testing } from './testing.js';

export const category = {
  slug: "microservices",
  title: "Microservices",
  description: "Pelajari arsitektur microservices: design, komunikasi, deployment, dan best practices.",
  icon: "SiKubernetes",
  color: "#326CE5",
  totalChapters: 9,
  difficulty: "Advanced",
  order: 79,
  isPublished: true,
  chapters: [
    api_gateway,
    communication,
    data_management,
    deployment,
    design,
    introduction,
    quiz,
    service_discovery,
    testing
  ]
};
