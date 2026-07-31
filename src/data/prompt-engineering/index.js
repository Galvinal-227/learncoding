import { chapter as advanced_techniques } from './advanced-techniques.js';
import { chapter as basic_prompts } from './basic-prompts.js';
import { chapter as chain_of_thought } from './chain-of-thought.js';
import { chapter as few_shot } from './few-shot.js';
import { chapter as introduction } from './introduction.js';
import { chapter as quiz } from './quiz.js';
import { chapter as role_prompting } from './role-prompting.js';
import { chapter as system_prompts } from './system-prompts.js';
import { chapter as tools } from './tools.js';

export const category = {
  slug: "prompt-engineering",
  title: "Prompt Engineering",
  description: "Pelajari seni menulis prompt yang efektif untuk LLM dan AI: teknik, patterns, dan best practices.",
  icon: "SiOpenai",
  color: "#10A37F",
  totalChapters: 9,
  difficulty: "Intermediate",
  order: 72,
  isPublished: true,
  chapters: [
    advanced_techniques,
    basic_prompts,
    chain_of_thought,
    few_shot,
    introduction,
    quiz,
    role_prompting,
    system_prompts,
    tools
  ]
};
