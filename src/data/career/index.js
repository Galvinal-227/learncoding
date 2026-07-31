import { chapter as career_paths } from './career-paths.js';
import { chapter as introduction } from './introduction.js';
import { chapter as job_boards } from './job-boards.js';
import { chapter as linkedin } from './linkedin.js';
import { chapter as networking } from './networking.js';
import { chapter as personal_branding } from './personal-branding.js';
import { chapter as quiz } from './quiz.js';
import { chapter as resume } from './resume.js';
import { chapter as salary_negotiation } from './salary-negotiation.js';

export const category = {
  slug: "career",
  title: "Career",
  description: "Panduan lengkap membangun karir di tech: resume, LinkedIn, networking, negosiasi gaji, dan career path.",
  icon: "SiLinkedin",
  color: "#0A66C2",
  totalChapters: 9,
  difficulty: "Beginner",
  order: 90,
  isPublished: true,
  chapters: [
    career_paths,
    introduction,
    job_boards,
    linkedin,
    networking,
    personal_branding,
    quiz,
    resume,
    salary_negotiation
  ]
};
