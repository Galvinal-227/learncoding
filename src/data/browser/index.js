import { chapter as browser_compatibility } from './browser-compatibility.js';
import { chapter as console_api } from './console-api.js';
import { chapter as devtools } from './devtools.js';
import { chapter as how_browsers_work } from './how-browsers-work.js';
import { chapter as introduction } from './introduction.js';
import { chapter as network_panel } from './network-panel.js';
import { chapter as performance_profiling } from './performance-profiling.js';
import { chapter as quiz } from './quiz.js';
import { chapter as rendering_engine } from './rendering-engine.js';
import { chapter as security_tools } from './security-tools.js';
import { chapter as storage_inspection } from './storage-inspection.js';

export const category = {
  slug: "browser",
  title: "Browser",
  description: "Pahami cara kerja browser, rendering engine, DevTools, dan optimasi browser.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  totalChapters: 11,
  difficulty: "Intermediate",
  order: 3,
  isPublished: true,
  chapters: [
    browser_compatibility,
    console_api,
    devtools,
    how_browsers_work,
    introduction,
    network_panel,
    performance_profiling,
    quiz,
    rendering_engine,
    security_tools,
    storage_inspection
  ]
};
