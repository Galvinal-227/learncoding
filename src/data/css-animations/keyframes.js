export const chapter = {
  slug: "css-animations-keyframes",
  title: "Keyframes & Animation",
  description: "Buat animasi kompleks dengan @keyframes dan properti animation.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["css-animations-transitions"],
  tags: ["css", "keyframes", "animation", "multi-step"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## @keyframes

Keyframes mendefinisikan **tahapan animasi** dari awal sampai akhir.

## Sintaks

### from / to (2 langkah)
\`\`\`css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}
\`\`\`

### Persentase (multi-langkah)
\`\`\`css
@keyframes bounceIn {
    0%   { transform: scale(0); opacity: 0; }
    50%  { transform: scale(1.2); }
    70%  { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
}
\`\`\`

## Menggunakan Keyframes

\`\`\`css
.element {
    animation: bounceIn 0.8s ease forwards;
}
\`\`\`

## Koleksi Animasi Keren

### 1. Fade In Up
\`\`\`css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
}
\`\`\`

### 2. Slide In Left
\`\`\`css
@keyframes slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
}
\`\`\`

### 3. Pulse
\`\`\`css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.1); }
}
\`\`\`

### 4. Shake
\`\`\`css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
.error { animation: shake 0.6s ease; }
\`\`\`

### 5. Spin / Rotate
\`\`\`css
@keyframes spin {
    to { transform: rotate(360deg); }
}
.loader {
    width: 40px; height: 40px;
    border: 4px solid #f3f3f3;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}
\`\`\`

### 6. Skeleton Loading
\`\`\`css
@keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
}
\`\`\`

### 7. Typewriter
\`\`\`css
@keyframes typing {
    from { width: 0; }
    to   { width: 100%; }
}
@keyframes blink {
    50% { border-color: transparent; }
}
.typewriter {
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #333;
    animation: typing 3s steps(30) forwards, blink 0.5s step-end infinite;
}
\`\`\`
  `,

  quiz: [
    { question: "from/to di keyframes sama dengan?", options: ["0%/50%", "0%/100%", "50%/100%", "start/end"], correctAnswer: 1 },
    { question: "Loader spinner pakai animasi apa?", options: ["pulse", "spin (rotate 360deg)", "shake", "fade"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Koleksi Animasi Keyframe",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><title>Keyframes Demo</title>
<style>
    body { font-family: Arial; padding: 40px; display: flex; flex-wrap: wrap; gap: 40px; justify-content: center; background: #1a1a2e; }
    .item { text-align: center; }
    .item p { color: #fff; margin-top: 10px; }
    
    @keyframes spin { to { transform: rotate(360deg); } }
    .spinner { width: 50px; height: 50px; border: 4px solid #333; border-top-color: #3498db; border-radius: 50%; animation: spin 0.8s linear infinite; }
    
    @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.2); } }
    .pulse { width: 50px; height: 50px; background: #e74c3c; border-radius: 50%; animation: pulse 1.5s ease-in-out infinite; }
    
    @keyframes bounce2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
    .bounce { width: 50px; height: 50px; background: #2ecc71; border-radius: 50%; animation: bounce2 1s ease infinite; }
    
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    .skeleton { width: 200px; height: 15px; background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%); background-size: 200% 100%; border-radius: 4px; animation: shimmer 1.5s infinite; }
</style>
</head>
<body>
    <div class="item"><div class="spinner"></div><p>Spinner</p></div>
    <div class="item"><div class="pulse"></div><p>Pulse</p></div>
    <div class="item"><div class="bounce"></div><p>Bounce</p></div>
    <div class="item"><div class="skeleton" style="margin-top:15px;"></div><p>Skeleton</p></div>
</body>
</html>`
    }
  ]
};