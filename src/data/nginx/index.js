import { chapter as configuration } from './configuration.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as load_balancing } from './load-balancing.js';
import { chapter as performance } from './performance.js';
import { chapter as quiz } from './quiz.js';
import { chapter as reverse_proxy } from './reverse-proxy.js';
import { chapter as security } from './security.js';
import { chapter as ssl } from './ssl.js';

export const category = {
  slug: "nginx",
  title: "Nginx",
  description: "Kuasai Nginx - web server performa tinggi, reverse proxy, load balancer, dan SSL termination.",
  icon: "SiNginx",
  color: "#009639",
  totalChapters: 9,
  difficulty: "Intermediate",
  order: 60,
  isPublished: true,
  chapters: [
    configuration,
    installation,
    introduction,
    load_balancing,
    performance,
    quiz,
    reverse_proxy,
    security,
    ssl
  ]
};
