import { chapter as accessibility } from './accessibility.js';
import { chapter as information_architecture } from './information-architecture.js';
import { chapter as introduction } from './introduction.js';
import { chapter as personas } from './personas.js';
import { chapter as quiz } from './quiz.js';
import { chapter as usability_testing } from './usability-testing.js';
import { chapter as user_journey } from './user-journey.js';
import { chapter as user_research } from './user-research.js';
import { chapter as wireframing } from './wireframing.js';

export const category = {
  slug: "ux-design",
  title: "UX Design",
  description: "Pelajari prinsip UX: user research, wireframing, usability testing, dan information architecture.",
  icon: "SiFigma",
  color: "#F24E1E",
  totalChapters: 9,
  difficulty: "Beginner",
  order: 76,
  isPublished: true,
  chapters: [
    accessibility,
    information_architecture,
    introduction,
    personas,
    quiz,
    usability_testing,
    user_journey,
    user_research,
    wireframing
  ]
};
