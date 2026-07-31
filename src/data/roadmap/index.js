import { chapter as backend_roadmap } from './backend-roadmap.js';
import { chapter as devops_roadmap } from './devops-roadmap.js';
import { chapter as frontend_roadmap } from './frontend-roadmap.js';
import { chapter as fullstack_roadmap } from './fullstack-roadmap.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as resources } from './resources.js';

export const category = {
  slug: "roadmap",
  title: "Learning Roadmaps",
  description: "Panduan belajar lengkap untuk menjadi developer profesional di berbagai bidang: Frontend, Backend, DevOps, dan Fullstack.",
  icon: "SiRoadmapdotcom",
  color: "#4285F4",
  totalChapters: 7,
  difficulty: "Beginner to Advanced",
  order: 5,
  isPublished: true,
  chapters: [
    backend_roadmap,
    devops_roadmap,
    frontend_roadmap,
    fullstack_roadmap,
    introduction,
    quiz,
    resources
  ]
};
