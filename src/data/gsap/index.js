import { chapter as introduction } from './introduction.js';
import { chapter as plugins } from './plugins.js';
import { chapter as quiz } from './quiz.js';
import { chapter as react_gsap } from './react-gsap.js';
import { chapter as scrolltrigger } from './scrolltrigger.js';
import { chapter as timelines } from './timelines.js';
import { chapter as tweens } from './tweens.js';

export const category = {
  slug: "gsap",
  title: "GSAP",
  description: "Kuasai GSAP (GreenSock Animation Platform) - library animasi JavaScript paling powerful untuk web.",
  icon: "SiGreensock",
  color: "#88CE02",
  totalChapters: 7,
  difficulty: "Intermediate",
  order: 53,
  isPublished: true,
  chapters: [
    introduction,
    plugins,
    quiz,
    react_gsap,
    scrolltrigger,
    timelines,
    tweens
  ]
};
