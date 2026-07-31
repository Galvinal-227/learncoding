import { chapter as behavioral_patterns } from './behavioral-patterns.js';
import { chapter as creational_patterns } from './creational-patterns.js';
import { chapter as factory_pattern } from './factory-pattern.js';
import { chapter as introduction } from './introduction.js';
import { chapter as javascript_patterns } from './javascript-patterns.js';
import { chapter as module_pattern } from './module-pattern.js';
import { chapter as observer_pattern } from './observer-pattern.js';
import { chapter as quiz } from './quiz.js';
import { chapter as react_patterns } from './react-patterns.js';
import { chapter as singleton_pattern } from './singleton-pattern.js';
import { chapter as solid_principles } from './solid-principles.js';
import { chapter as structural_patterns } from './structural-patterns.js';

export const category = {
  slug: "design-patterns",
  title: "Design Patterns",
  description: "Kuasai 23 Gang of Four design patterns dan pola modern untuk kode yang reusable dan maintainable.",
  icon: "SiPattern",
  color: "#FF6B6B",
  totalChapters: 12,
  difficulty: "Advanced",
  order: 64,
  isPublished: true,
  chapters: [
    behavioral_patterns,
    creational_patterns,
    factory_pattern,
    introduction,
    javascript_patterns,
    module_pattern,
    observer_pattern,
    quiz,
    react_patterns,
    singleton_pattern,
    solid_principles,
    structural_patterns
  ]
};
