import { chapter as bundle_analyzer } from './bundle-analyzer.js';
import { chapter as caching } from './caching.js';
import { chapter as code_splitting } from './code-splitting.js';
import { chapter as compression } from './compression.js';
import { chapter as core_web_vitals } from './core-web-vitals.js';
import { chapter as font_optimization } from './font-optimization.js';
import { chapter as image_optimization } from './image-optimization.js';
import { chapter as introduction } from './introduction.js';
import { chapter as lazy_loading } from './lazy-loading.js';
import { chapter as metrics } from './metrics.js';
import { chapter as quiz } from './quiz.js';
import { chapter as server_side_optimization } from './server-side-optimization.js';

export const category = {
  slug: "performance",
  title: "Performance Optimization",
  description: "Optimasi performa web: Core Web Vitals, lazy loading, caching, image optimization, bundle analysis.",
  icon: "SiLighthouse",
  color: "#F44B21",
  totalChapters: 12,
  difficulty: "Advanced",
  order: 63,
  isPublished: true,
  chapters: [
    bundle_analyzer,
    caching,
    code_splitting,
    compression,
    core_web_vitals,
    font_optimization,
    image_optimization,
    introduction,
    lazy_loading,
    metrics,
    quiz,
    server_side_optimization
  ]
};
