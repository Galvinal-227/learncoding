import { chapter as apis } from './apis.js';
import { chapter as best_practices } from './best-practices.js';
import { chapter as chatbots } from './chatbots.js';
import { chapter as embeddings } from './embeddings.js';
import { chapter as image_generation } from './image-generation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as models } from './models.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "ai-integration",
  title: "AI Integration",
  description: "Pelajari cara mengintegrasikan AI dan LLM ke dalam aplikasi web modern.",
  icon: "SiOpenaigym",
  color: "#10A37F",
  totalChapters: 8,
  difficulty: "Advanced",
  order: 80,
  isPublished: true,
  chapters: [
    apis,
    best_practices,
    chatbots,
    embeddings,
    image_generation,
    introduction,
    models,
    quiz
  ]
};
