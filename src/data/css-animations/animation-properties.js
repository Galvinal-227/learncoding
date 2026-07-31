export const chapter = {
  slug: "css-animations-animation-properties",
  title: "Animation Properties",
  description: "Kuasai semua properti animation: duration, delay, iteration-count, direction, fill-mode.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-animations-keyframes"],
  tags: ["css", "animation", "properti", "control"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Properti Animation Lengkap

### animation-name
\`\`\`css
animation-name: slideIn;
animation-name: none;  /* Tidak ada animasi */
\`\`\`

### animation-duration
\`\`\`css
animation-duration: 1s;
animation-duration: 500ms;
animation-duration: 0.3s;
\`\`\`

### animation-timing-function
\`\`\`css
animation-timing-function: ease;
animation-timing-function: linear;
animation-timing-function: ease-in-out;
animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
animation-timing-function: steps(5);  /* Patah-patah */
\`\`\`

### animation-delay
\`\`\`css
animation-delay: 0s;
animation-delay: 1s;
animation-delay: -0.5s;  /* Mulai dari tengah! */
\`\`\`

### animation-iteration-count
\`\`\`css
animation-iteration-count: 1;        /* Sekali */
animation-iteration-count: 3;        /* 3 kali */
animation-iteration-count: infinite; /* Selamanya */
\`\`\`

### animation-direction
\`\`\`css
animation-direction: normal;           /* Maju terus */
animation-direction: reverse;          /* Mundur */
animation-direction: alternate;        /* Maju-mundur */
animation-direction: alternate-reverse; /* Mundur-maju */
\`\`\`

### animation-fill-mode
\`\`\`css
animation-fill-mode: none;       /* Default - kembali ke awal */
animation-fill-mode: forwards;   /* Simpan state akhir */
animation-fill-mode: backwards;  /* Terapkan state awal sebelum delay */
animation-fill-mode: both;       /* forwards + backwards */
\`\`\`

### animation-play-state
\`\`\`css
animation-play-state: running;  /* Default */
animation-play-state: paused;   /* Pause */
\`\`\`

## Shorthand

\`\`\`css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;

/* Contoh */
animation: slideIn 0.5s ease 0.2s 1 normal forwards;
animation: pulse 2s ease-in-out infinite;
animation: spin 1s linear infinite;
\`\`\`

## Fill-Mode Visual

\`\`\`
none:      [awal]──animasi──▶[akhir]──kembali ke [awal]
forwards:  [awal]──animasi──▶[akhir]──tetap di [akhir]
backwards: [state awal diterapkan selama delay]──animasi──▶[akhir]
both:      [backwards + forwards]
\`\`\`

## Pause on Hover

\`\`\`css
.animating {
    animation: spin 2s linear infinite;
}
.animating:hover {
    animation-play-state: paused;
}
\`\`\`
  `,

  quiz: [
    { question: "animation-fill-mode: forwards?", options: ["Kembali awal", "Simpan state akhir", "Ulang terus", "Mundur"], correctAnswer: 1 },
    { question: "animation-play-state untuk?", options: ["Durasi", "Pause/resume animasi", "Jumlah ulang", "Delay"], correctAnswer: 1 },
    { question: "animation-direction: alternate?", options: ["Maju terus", "Maju-mundur (bolak-balik)", "Mundur saja", "Acak"], correctAnswer: 1 }
  ],

  codeExamples: []
};