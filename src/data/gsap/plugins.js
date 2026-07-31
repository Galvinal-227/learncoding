export const chapter = {
  slug: "gsap-plugins",
  title: "Plugins (ScrollTrigger, TextPlugin, MotionPath)",
  description: "Jelajahi plugin GSAP premium dan free untuk efek spesial.",
  icon: "SiGreensock",
  color: "#88CE02",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["gsap-timelines"],
  tags: ["gsap", "plugins", "scrolltrigger", "motionpath"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Plugin Free

### ScrollTrigger (Sudah dibahas)

### TextPlugin
\`\`\`javascript
gsap.to('.text', {
    text: 'New text content',
    duration: 2,
    ease: 'none'
});
\`\`\`

### Draggable
\`\`\`javascript
import Draggable from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

Draggable.create('.box', {
    bounds: '.container',
    inertia: true
});
\`\`\`

## Plugin Premium (Club GSAP)

### SplitText
\`\`\`javascript
const split = new SplitText('.title', { type: 'chars,words,lines' });

gsap.from(split.chars, {
    opacity: 0,
    y: 50,
    stagger: 0.02,
    duration: 0.5
});
\`\`\`

### MotionPath
\`\`\`javascript
gsap.to('.rocket', {
    motionPath: {
        path: '#path',
        align: '#path',
        autoRotate: true
    },
    duration: 5,
    repeat: -1
});
\`\`\`

### MorphSVG
\`\`\`javascript
gsap.to('#circle', {
    morphSVG: '#star',
    duration: 1
});
\`\`\`

### Flip
\`\`\`javascript
const state = Flip.getState('.cards');

// Update layout...

Flip.from(state, {
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.inOut'
});
\`\`\`
  `,

  quiz: [
    { question: "SplitText?", options: ["CSS", "Animasikan per karakter/kata (premium)", "Free", "Font"], correctAnswer: 1 },
    { question: "MotionPath?", options: ["Scroll", "Animasikan element ikuti path SVG", "Text", "Drag"], correctAnswer: 1 }
  ],

  codeExamples: []
};