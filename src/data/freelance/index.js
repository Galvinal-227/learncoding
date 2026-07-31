import { chapter as client_communication } from './client-communication.js';
import { chapter as contracts } from './contracts.js';
import { chapter as finding_clients } from './finding-clients.js';
import { chapter as introduction } from './introduction.js';
import { chapter as invoicing } from './invoicing.js';
import { chapter as pricing } from './pricing.js';
import { chapter as project_management } from './project-management.js';
import { chapter as proposals } from './proposals.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "freelance",
  title: "Freelance",
  description: "Panduan lengkap memulai dan mengembangkan karir freelance sebagai developer.",
  icon: "SiUpwork",
  color: "#14A800",
  totalChapters: 9,
  difficulty: "Beginner",
  order: 92,
  isPublished: true,
  chapters: [
    client_communication,
    contracts,
    finding_clients,
    introduction,
    invoicing,
    pricing,
    project_management,
    proposals,
    quiz
  ]
};
