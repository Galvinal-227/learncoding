import { chapter as assertions } from './assertions.js';
import { chapter as ci_integration } from './ci-integration.js';
import { chapter as commands } from './commands.js';
import { chapter as custom_commands } from './custom-commands.js';
import { chapter as fixtures } from './fixtures.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as writing_tests } from './writing-tests.js';

export const category = {
  slug: "cypress",
  title: "Cypress",
  description: "Kuasai Cypress untuk end-to-end testing modern yang cepat, reliable, dan developer-friendly.",
  icon: "SiCypress",
  color: "#69D3A7",
  totalChapters: 9,
  difficulty: "Intermediate",
  order: 38,
  isPublished: true,
  chapters: [
    assertions,
    ci_integration,
    commands,
    custom_commands,
    fixtures,
    installation,
    introduction,
    quiz,
    writing_tests
  ]
};
