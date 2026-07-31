import { chapter as ci_integration } from './ci-integration.js';
import { chapter as e2e_testing } from './e2e-testing.js';
import { chapter as integration_testing } from './integration-testing.js';
import { chapter as introduction } from './introduction.js';
import { chapter as jest } from './jest.js';
import { chapter as mocha } from './mocha.js';
import { chapter as quiz } from './quiz.js';
import { chapter as react_testing_library } from './react-testing-library.js';
import { chapter as test_driven_development } from './test-driven-development.js';
import { chapter as unit_testing } from './unit-testing.js';

export const category = {
  slug: "testing",
  title: "Testing",
  description: "Pelajari berbagai jenis testing dan tools untuk menguji aplikasi JavaScript.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  totalChapters: 10,
  difficulty: "Intermediate",
  order: 17,
  isPublished: true,
  chapters: [
    ci_integration,
    e2e_testing,
    integration_testing,
    introduction,
    jest,
    mocha,
    quiz,
    react_testing_library,
    test_driven_development,
    unit_testing
  ]
};
