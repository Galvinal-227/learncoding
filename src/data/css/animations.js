export const chapter = {
  slug: "css-animations",
  title: "Animation & Keyframes",
  description: "Pelajari cara membuat animasi kompleks dengan CSS Keyframes dan Animation.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-transitions"],
  tags: ["css", "animasi", "keyframes", "gerak"],
  order: 24,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CSS Animations

Animations memungkinkan perubahan properti CSS dalam beberapa **tahap (keyframes)**, lebih powerful daripada Transitions.

## @keyframes

\`\`\`css
@keyframes namaAnimasi {
    from { /* State awal */ }
    to   { /* State akhir */ }
}

/* Atau dengan persentase */
@keyframes namaAnimasi {
    0%   { /* State awal */ }
    50%  { /* State tengah */ }
    100% { /* State akhir */ }
}
\`\`\`

## Properti Animation

### animation-name
\`\`\`css
animation-name: slideIn;
\`\`\`

### animation-duration
\`\`\`css
animation-duration: 1s;
animation-duration: 500ms;
\`\`\`

### animation-timing-function
\`\`\`css
animation-timing-function: ease;
animation-timing-function: linear;
animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
\`\`\`

### animation-delay
\`\`\`css
animation-delay: 0.5s;
animation-delay: -0.2s; /* Mulai dari tengah */
\`\`\`

### animation-iteration-count
\`\`\`css
animation-iteration-count: 1;
animation-iteration-count: 3;
animation-iteration-count: infinite;
\`\`\`

### animation-direction
\`\`\`css
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;       /* Bolak-balik */
animation-direction: alternate-reverse;
\`\`\`

### animation-fill-mode
\`\`\`css
animation-fill-mode: none;        /* Default */
animation-fill-mode: forwards;    /* Simpan state akhir */
animation-fill-mode: backwards;   /* Terapkan state awal sebelum mulai */
animation-fill-mode: both;        /* forwards + backwards */
\`\`\`

### animation-play-state
\`\`\`css
animation-play-state: running;
animation-play-state: paused;
\`\`\`

## Shorthand

\`\`\`css
animation: name duration timing-function delay iteration-count direction fill-mode;
animation: slideIn 1s ease 0.2s 1 normal forwards;
animation: pulse 2s ease-in-out infinite;
\`\`\`

## Contoh Animasi

### Fade In
\`\`\`css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}
.element { animation: fadeIn 0.5s ease forwards; }
\`\`\`

### Pulse
\`\`\`css
@keyframes pulse {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.1); }
    100% { transform: scale(1); }
}
.element { animation: pulse 2s ease-in-out infinite; }
\`\`\`

### Spinner/Loader
\`\`\`css
@keyframes spin {
    to { transform: rotate(360deg); }
}
.loader {
    width: 40px; height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #1572B6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
\`\`\`

### Shake
\`\`\`css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25%      { transform: translateX(-5px); }
    75%      { transform: translateX(5px); }
}
.error { animation: shake 0.5s ease; }
\`\`\`

### Skeleton Loading
\`\`\`css
@keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}
\`\`\`

## Performa Animasi

✅ Properti yang aman (hanya composite):
- \`transform\`
- \`opacity\`

⚠️ Hindari animasi properti ini (trigger layout):
- \`width\`, \`height\`
- \`top\`, \`left\`
- \`margin\`, \`padding\`
  `,

  quiz: [
    {
      question: "Apa perbedaan Transitions dan Animations?",
      options: [
        "Tidak ada perbedaan",
        "Transitions: 2 state (A→B); Animations: multi-state (keyframes)",
        "Animations lebih cepat",
        "Transitions hanya untuk warna"
      ],
      correctAnswer: 1,
      explanation: "Transitions hanya dari state A ke B (butuh trigger). Animations bisa memiliki banyak keyframes dan bisa berjalan otomatis."
    },
    {
      question: "Properti mana yang aman untuk animasi tanpa trigger layout?",
      options: ["width dan height", "transform dan opacity", "margin dan padding", "Semua properti"],
      correctAnswer: 1,
      explanation: "transform dan opacity hanya trigger composite, bukan layout atau paint, sehingga performanya paling baik."
    }
  ],

  codeExamples: [
    {
      title: "Koleksi Animasi CSS",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 40px; background: #f5f5f5; display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
        
        /* Spinner */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
            width: 50px; height: 50px;
            border: 5px solid #e0e0e0;
            border-top-color: #1572B6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }
        
        /* Pulse */
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        .pulse {
            width: 60px; height: 60px; background: #e74c3c; border-radius: 50%;
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        /* Bounce */
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
        .bounce {
            width: 50px; height: 50px; background: #2ecc71; border-radius: 50%;
            animation: bounce 1s ease infinite;
        }
        
        /* Shimmer */
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .skeleton {
            width: 300px; height: 20px; border-radius: 4px;
            background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        
        /* Fade In Up */
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in {
            padding: 20px; background: white; border-radius: 8px;
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
        }
        
        /* Demo section */
        .demo { text-align: center; }
        .demo p { margin-top: 10px; color: #666; }
    </style>
</head>
<body>
    <div class="demo">
        <div class="spinner"></div>
        <p>Spinner</p>
    </div>
    <div class="demo">
        <div class="pulse"></div>
        <p>Pulse</p>
    </div>
    <div class="demo">
        <div class="bounce"></div>
        <p>Bounce</p>
    </div>
    <div class="demo">
        <div class="skeleton" style="margin-bottom:10px;"></div>
        <div class="skeleton" style="width:200px;"></div>
        <p>Skeleton Loading</p>
    </div>
    <div class="demo">
        <div class="fade-in">
            <h3>Fade In Up</h3>
            <p>Animasi muncul</p>
        </div>
    </div>
</body>
</html>`
    }
  ]
};