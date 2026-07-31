import { chapter as ci_cd_pipeline } from './ci-cd-pipeline.js';
import { chapter as cloud_providers } from './cloud-providers.js';
import { chapter as docker_deployment } from './docker-deployment.js';
import { chapter as domain_ssl } from './domain-ssl.js';
import { chapter as heroku } from './heroku.js';
import { chapter as introduction } from './introduction.js';
import { chapter as monitoring } from './monitoring.js';
import { chapter as netlify } from './netlify.js';
import { chapter as quiz } from './quiz.js';
import { chapter as shared_hosting } from './shared-hosting.js';
import { chapter as static_hosting } from './static-hosting.js';
import { chapter as vercel } from './vercel.js';
import { chapter as vps } from './vps.js';

export const category = {
  slug: "deployment",
  title: "Deployment",
  description: "Kuasai cara mendeploy aplikasi web ke production: VPS, cloud, static hosting, dan Docker.",
  icon: "SiVercel",
  color: "#000000",
  totalChapters: 13,
  difficulty: "Advanced",
  order: 48,
  isPublished: true,
  chapters: [
    ci_cd_pipeline,
    cloud_providers,
    docker_deployment,
    domain_ssl,
    heroku,
    introduction,
    monitoring,
    netlify,
    quiz,
    shared_hosting,
    static_hosting,
    vercel,
    vps
  ]
};
