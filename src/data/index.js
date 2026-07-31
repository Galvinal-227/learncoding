// ============================================
// ROOT DATA - Import dari SEMUA folder (100 folder)
// ============================================

import { category as accessibility } from './accessibility/index.js';
import { category as agileScrum } from './agile-scrum/index.js';
import { category as aiIntegration } from './ai-integration/index.js';
import { category as algorithms } from './algorithms/index.js';
import { category as analytics } from './analytics/index.js';
import { category as astro } from './astro/index.js';
import { category as asyncJavascript } from './async-javascript/index.js';
import { category as authentication } from './authentication/index.js';
import { category as babel } from './babel/index.js';
import { category as bootstrap } from './bootstrap/index.js';
import { category as browser } from './browser/index.js';
import { category as canvas } from './canvas/index.js';
import { category as career } from './career/index.js';
import { category as chartJs } from './chart-js/index.js';
import { category as ciCd } from './ci-cd/index.js';
import { category as cleanCode } from './clean-code/index.js';
import { category as css } from './css/index.js';
import { category as cssAnimations } from './css-animations/index.js';
import { category as cypress } from './cypress/index.js';
import { category as d3Js } from './d3-js/index.js';
import { category as dataStructures } from './data-structures/index.js';
import { category as deployment } from './deployment/index.js';
import { category as designPatterns } from './design-patterns/index.js';
import { category as docker } from './docker/index.js';
import { category as dom } from './dom/index.js';
import { category as electron } from './electron/index.js';
import { category as errorMonitoring } from './error-monitoring/index.js';
import { category as eslint } from './eslint/index.js';
import { category as expressJs } from './express-js/index.js';
import { category as figma } from './figma/index.js';
import { category as firebase } from './firebase/index.js';
import { category as framerMotion } from './framer-motion/index.js';
import { category as freelance } from './freelance/index.js';
import { category as git } from './git/index.js';
import { category as github } from './github/index.js';
import { category as graphql } from './graphql/index.js';
import { category as gsap } from './gsap/index.js';
import { category as headlessCms } from './headless-cms/index.js';
import { category as html } from './html/index.js';
import { category as internet } from './internet/index.js';
import { category as interview } from './interview/index.js';
import { category as jamstack } from './jamstack/index.js';
import { category as javascript } from './javascript/index.js';
import { category as kubernetes } from './kubernetes/index.js';
import { category as linux } from './linux/index.js';
import { category as markdown } from './markdown/index.js';
import { category as microservices } from './microservices/index.js';
import { category as mongodb } from './mongodb/index.js';
import { category as monorepo } from './monorepo/index.js';
import { category as mysql } from './mysql/index.js';
import { category as nestJs } from './nest-js/index.js';
import { category as nextJs } from './next-js/index.js';
import { category as nginx } from './nginx/index.js';
import { category as nodeJs } from './node-js/index.js';
import { category as npm } from './npm/index.js';
import { category as openSource } from './open-source/index.js';
import { category as openaiApi } from './openai-api/index.js';
import { category as parcel } from './parcel/index.js';
import { category as paymentIntegration } from './payment-integration/index.js';
import { category as performance } from './performance/index.js';
import { category as pnpm } from './pnpm/index.js';
import { category as portfolio } from './portfolio/index.js';
import { category as postgresql } from './postgresql/index.js';
import { category as prettier } from './prettier/index.js';
import { category as prisma } from './prisma/index.js';
import { category as promptEngineering } from './prompt-engineering/index.js';
import { category as pwa } from './pwa/index.js';
import { category as react } from './react/index.js';
import { category as reactNative } from './react-native/index.js';
import { category as redis } from './redis/index.js';
import { category as responsiveDesign } from './responsive-design/index.js';
import { category as restApi } from './rest-api/index.js';
import { category as roadmap } from './roadmap/index.js';
import { category as sass } from './sass/index.js';
import { category as security } from './security/index.js';
import { category as seo } from './seo/index.js';
import { category as sequelize } from './sequelize/index.js';
import { category as serverless } from './serverless/index.js';
import { category as serviceWorkers } from './service-workers/index.js';
import { category as softwareArchitecture } from './software-architecture/index.js';
import { category as storybook } from './storybook/index.js';
import { category as supabase } from './supabase/index.js';
import { category as svelte } from './svelte/index.js';
import { category as svg } from './svg/index.js';
import { category as systemDesign } from './system-design/index.js';
import { category as tailwindCss } from './tailwind-css/index.js';
import { category as technicalWriting } from './technical-writing/index.js';
import { category as terminal } from './terminal/index.js';
import { category as testing } from './testing/index.js';
import { category as threeJs } from './three-js/index.js';
import { category as typescript } from './typescript/index.js';
import { category as uiDesign } from './ui-design/index.js';
import { category as uxDesign } from './ux-design/index.js';
import { category as vite } from './vite/index.js';
import { category as vscode } from './vscode/index.js';
import { category as webComponents } from './web-components/index.js';
import { category as webSecurity } from './web-security/index.js';
import { category as webStorage } from './web-storage/index.js';
import { category as webassembly } from './webassembly/index.js';
import { category as webpack } from './webpack/index.js';
import { category as webrtc } from './webrtc/index.js';
import { category as websocket } from './websocket/index.js';
import { category as yarn } from './yarn/index.js';
import { category as zustand } from './zustand/index.js';

// ============================================
// KUMPULKAN SEMUA KATEGORI
// ============================================

const allCategories = [
  accessibility,
  agileScrum,
  aiIntegration,
  algorithms,
  analytics,
  astro,
  asyncJavascript,
  authentication,
  babel,
  bootstrap,
  browser,
  canvas,
  career,
  chartJs,
  ciCd,
  cleanCode,
  css,
  cssAnimations,
  cypress,
  d3Js,
  dataStructures,
  deployment,
  designPatterns,
  docker,
  dom,
  electron,
  errorMonitoring,
  eslint,
  expressJs,
  figma,
  firebase,
  framerMotion,
  freelance,
  git,
  github,
  graphql,
  gsap,
  headlessCms,
  html,
  internet,
  interview,
  jamstack,
  javascript,
  kubernetes,
  linux,
  markdown,
  microservices,
  mongodb,
  monorepo,
  mysql,
  nestJs,
  nextJs,
  nginx,
  nodeJs,
  npm,
  openSource,
  openaiApi,
  parcel,
  paymentIntegration,
  performance,
  pnpm,
  portfolio,
  postgresql,
  prettier,
  prisma,
  promptEngineering,
  pwa,
  react,
  reactNative,
  redis,
  responsiveDesign,
  restApi,
  roadmap,
  sass,
  security,
  seo,
  sequelize,
  serverless,
  serviceWorkers,
  softwareArchitecture,
  storybook,
  supabase,
  svelte,
  svg,
  systemDesign,
  tailwindCss,
  technicalWriting,
  terminal,
  testing,
  threeJs,
  typescript,
  uiDesign,
  uxDesign,
  vite,
  vscode,
  webComponents,
  webSecurity,
  webStorage,
  webassembly,
  webpack,
  webrtc,
  websocket,
  yarn,
  zustand,
];

// ============================================
// ROOT CATEGORIES (untuk UI Learn)
// ============================================

const rootCategories = allCategories.map((cat) => ({
  slug: cat.slug,
  title: cat.title,
  description: cat.description,
  icon: cat.icon,
  color: cat.color,
  totalChapters: cat.totalChapters,
  difficulty: cat.difficulty,
  order: cat.order,
  isPublished: cat.isPublished,
}));

// ============================================
// UTILITY EXPORTS
// ============================================

const publishedCategories = allCategories.filter((cat) => cat.isPublished === true);
const beginnerCategories = allCategories.filter((cat) => cat.difficulty === "Beginner" && cat.isPublished === true);
const intermediateCategories = allCategories.filter((cat) => cat.difficulty === "Intermediate" && cat.isPublished === true);
const advancedCategories = allCategories.filter((cat) => cat.difficulty === "Advanced" && cat.isPublished === true);

const categoriesBySlug = allCategories.reduce((acc, cat) => {
  acc[cat.slug] = cat;
  return acc;
}, {});

// ============================================
// EXPORTS (SEMUA DI EXPORT)
// ============================================

export {
  allCategories,
  rootCategories,
  publishedCategories,
  beginnerCategories,
  intermediateCategories,
  advancedCategories,
  categoriesBySlug,
};

// ============================================
// DEFAULT EXPORT
// ============================================

export default allCategories;