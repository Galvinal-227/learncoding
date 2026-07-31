import { chapter as behavioral } from './behavioral.js';
import { chapter as coding_challenges } from './coding-challenges.js';
import { chapter as introduction } from './introduction.js';
import { chapter as mock_interviews } from './mock-interviews.js';
import { chapter as quiz } from './quiz.js';
import { chapter as system_design_interviews } from './system-design-interviews.js';
import { chapter as technical_interviews } from './technical-interviews.js';
import { chapter as whiteboarding } from './whiteboarding.js';

export const category = {
  slug: "interview",
  title: "Interview",
  description: "Persiapan lengkap coding interview: technical, behavioral, system design, dan negosiasi.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  totalChapters: 8,
  difficulty: "Intermediate",
  order: 93,
  isPublished: true,
  chapters: [
    behavioral,
    coding_challenges,
    introduction,
    mock_interviews,
    quiz,
    system_design_interviews,
    technical_interviews,
    whiteboarding
  ]
};
