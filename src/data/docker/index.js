import { chapter as best_practices } from './best-practices.js';
import { chapter as containers } from './containers.js';
import { chapter as docker_compose } from './docker-compose.js';
import { chapter as images } from './images.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as networks } from './networks.js';
import { chapter as quiz } from './quiz.js';
import { chapter as volumes } from './volumes.js';

export const category = {
  slug: "docker",
  title: "Docker",
  description: "Kuasai Docker untuk containerization: Dockerfile, docker-compose, networking, dan deployment.",
  icon: "SiDocker",
  color: "#2496ED",
  totalChapters: 9,
  difficulty: "Advanced",
  order: 42,
  isPublished: true,
  chapters: [
    best_practices,
    containers,
    docker_compose,
    images,
    installation,
    introduction,
    networks,
    quiz,
    volumes
  ]
};
