import { chapter as aws_lambda } from './aws-lambda.js';
import { chapter as benefits } from './benefits.js';
import { chapter as cloud_functions } from './cloud-functions.js';
import { chapter as frameworks } from './frameworks.js';
import { chapter as introduction } from './introduction.js';
import { chapter as limitations } from './limitations.js';
import { chapter as quiz } from './quiz.js';
import { chapter as vercel_functions } from './vercel-functions.js';

export const category = {
  slug: "serverless",
  title: "Serverless",
  description: "Pelajari arsitektur serverless dengan AWS Lambda, Cloud Functions, dan Vercel Functions.",
  icon: "SiAwslambda",
  color: "#FF9900",
  totalChapters: 8,
  difficulty: "Advanced",
  order: 80,
  isPublished: true,
  chapters: [
    aws_lambda,
    benefits,
    cloud_functions,
    frameworks,
    introduction,
    limitations,
    quiz,
    vercel_functions
  ]
};
