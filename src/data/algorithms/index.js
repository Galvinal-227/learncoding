import { chapter as complexity_analysis } from './complexity-analysis.js';
import { chapter as divide_conquer } from './divide-conquer.js';
import { chapter as dynamic_programming } from './dynamic-programming.js';
import { chapter as greedy_algorithms } from './greedy-algorithms.js';
import { chapter as introduction } from './introduction.js';
import { chapter as practice } from './practice.js';
import { chapter as quiz } from './quiz.js';
import { chapter as recursion } from './recursion.js';
import { chapter as searching } from './searching.js';
import { chapter as sorting } from './sorting.js';

export const category = {
  slug: "algorithms",
  title: "Algorithms",
  description: "Kuasai algoritma dasar hingga lanjutan untuk problem solving dan interview coding.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  totalChapters: 10,
  difficulty: "Intermediate",
  order: 62,
  isPublished: true,
  chapters: [
    complexity_analysis,
    divide_conquer,
    dynamic_programming,
    greedy_algorithms,
    introduction,
    practice,
    quiz,
    recursion,
    searching,
    sorting
  ]
};
