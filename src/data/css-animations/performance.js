export const chapter = {
  slug: "css-animations-easing",
  title: "Easing Functions",
  description: "Pahami easing functions untuk animasi yang terasa natural.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["css-animations-transitions"],
  tags: ["css", "easing", "cubic-bezier", "natural"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Easing?

Easing mengontrol **kurva kecepatan** animasi. Animasi natural tidak bergerak linear (konstan), tapi ada akselerasi dan deselerasi.

## Built-in Easing

\`\`\`css
/* Default - lambat di tengah */
transition-timing-function: ease;

/* Konstan - terasa robotik */
transition-timing-function: linear;

/* Mulai lambat */
transition-timing-function: ease-in;

/* Akhiri lambat */
transition-timing-function: ease-out;

/* Lambat di awal & akhir (paling natural) */
transition-timing-function: ease-in-out;
\`\`\`

## Cubic Bezier (Kustom!)

\`\`\`css
transition-timing-function: cubic-bezier(x1, y1, x2, y2);

/* Standard ease */
cubic-bezier(0.25, 0.1, 0.25, 1)

/* Bounce */
cubic-bezier(0.68, -0.55, 0.27, 1.55)

/* Snap */
cubic-bezier(0.34, 1.56, 0.64, 1)
\`\`\`

## Easing Curves Collection

\`\`\`css
:root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    
    --ease-in-back: cubic-bezier(0.6, -0.28, 0.735, 0.045);
    --ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    --ease-out-bounce: cubic-bezier(0.19, 1, 0.22, 1);
}
\`\`\`

## Steps (Patah-patah)

\`\`\`css
/* Typewriter effect */
animation: typing 3s steps(30) forwards;

/* Blinking cursor */
animation: blink 0.5s step-end infinite;
\`\`\`

## Tools

- [cubic-bezier.com](https://cubic-bezier.com) - Visual editor
- [easings.net](https://easings.net) - Koleksi easing
\`\`\`
  `,

  quiz: [
    { question: "Easing paling natural?", options: ["linear", "ease", "ease-in-out", "steps"], correctAnswer: 2 },
    { question: "cubic-bezier untuk bounce?", options: ["(0,0,1,1)", "(0.68,-0.55,0.27,1.55)", "(0.25,0.1,0.25,1)", "(0,0,0,0)"], correctAnswer: 1 }
  ],

  codeExamples: []
};