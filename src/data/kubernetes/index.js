import { chapter as architecture } from './architecture.js';
import { chapter as configmaps_secrets } from './configmaps-secrets.js';
import { chapter as deployments } from './deployments.js';
import { chapter as helm } from './helm.js';
import { chapter as introduction } from './introduction.js';
import { chapter as monitoring } from './monitoring.js';
import { chapter as pods } from './pods.js';
import { chapter as quiz } from './quiz.js';
import { chapter as services } from './services.js';
import { chapter as storage } from './storage.js';

export const category = {
  slug: "kubernetes",
  title: "Kubernetes",
  description: "Pelajari Kubernetes - container orchestration untuk deployment, scaling, dan management aplikasi.",
  icon: "SiKubernetes",
  color: "#326CE5",
  totalChapters: 10,
  difficulty: "Advanced",
  order: 103,
  isPublished: true,
  chapters: [
    architecture,
    configmaps_secrets,
    deployments,
    helm,
    introduction,
    monitoring,
    pods,
    quiz,
    services,
    storage
  ]
};
