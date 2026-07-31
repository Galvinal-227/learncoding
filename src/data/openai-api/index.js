import { chapter as chat } from './chat.js';
import { chapter as completion } from './completion.js';
import { chapter as embeddings } from './embeddings.js';
import { chapter as fine_tuning } from './fine-tuning.js';
import { chapter as function_calling } from './function-calling.js';
import { chapter as image_generation } from './image-generation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as pricing } from './pricing.js';
import { chapter as quiz } from './quiz.js';
import { chapter as setup } from './setup.js';

export const category = {
  slug: "openai-api",
  title: "OpenAI API",
  description: "Kuasai OpenAI API: GPT-4, DALL-E, Whisper, embeddings, function calling, dan fine-tuning.",
  icon: "SiOpenai",
  color: "#10A37F",
  totalChapters: 10,
  difficulty: "Advanced",
  order: 71,
  isPublished: true,
  chapters: [
    chat,
    completion,
    embeddings,
    fine_tuning,
    function_calling,
    image_generation,
    introduction,
    pricing,
    quiz,
    setup
  ]
};
