import { chapter as api_routes } from './api-routes.js';
import { chapter as app_router } from './app-router.js';
import { chapter as deployment } from './deployment.js';
import { chapter as image_optimization } from './image-optimization.js';
import { chapter as introduction } from './introduction.js';
import { chapter as middleware } from './middleware.js';
import { chapter as next_auth } from './next-auth.js';
import { chapter as pages_routing } from './pages-routing.js';
import { chapter as quiz } from './quiz.js';
import { chapter as server_components } from './server-components.js';
import { chapter as server_side_rendering } from './server-side-rendering.js';
import { chapter as static_generation } from './static-generation.js';

export const category = {
  slug: "next-js",
  title: "Next.js",
  description: "Kuasai Next.js - framework React untuk production dengan SSR, SSG, API routes, dan App Router.",
  icon: "SiNextdotjs",
  color: "#000000",
  totalChapters: 12,
  difficulty: "Intermediate",
  order: 33,
  isPublished: true,
  chapters: [
    api_routes,
    app_router,
    deployment,
    image_optimization,
    introduction,
    middleware,
    next_auth,
    pages_routing,
    quiz,
    server_components,
    server_side_rendering,
    static_generation
  ]
};
