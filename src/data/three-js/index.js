import { chapter as animation } from './animation.js';
import { chapter as camera } from './camera.js';
import { chapter as controls } from './controls.js';
import { chapter as geometries } from './geometries.js';
import { chapter as introduction } from './introduction.js';
import { chapter as lights } from './lights.js';
import { chapter as loading_models } from './loading-models.js';
import { chapter as materials } from './materials.js';
import { chapter as post_processing } from './post-processing.js';
import { chapter as quiz } from './quiz.js';
import { chapter as renderer } from './renderer.js';
import { chapter as scene } from './scene.js';

export const category = {
  slug: "three-js",
  title: "Three.js",
  description: "Pelajari Three.js untuk membuat grafik 3D interaktif di web menggunakan WebGL.",
  icon: "SiThreedotjs",
  color: "#000000",
  totalChapters: 12,
  difficulty: "Intermediate to Advanced",
  order: 18,
  isPublished: true,
  chapters: [
    animation,
    camera,
    controls,
    geometries,
    introduction,
    lights,
    loading_models,
    materials,
    post_processing,
    quiz,
    renderer,
    scene
  ]
};
