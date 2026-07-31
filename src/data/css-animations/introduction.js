export const chapter = {
  slug: "css-animations-introduction",
  title: "Pengenalan CSS Animations",
  description: "Pahami dasar animasi web dengan CSS dan kapan menggunakannya.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["css-transitions"],
  tags: ["css", "animasi", "pengenalan", "ux"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Animasi?

Animasi membuat website terasa **hidup, responsif, dan profesional**. Bukan cuma hiasan, animasi berfungsi untuk:

- 🧭 **Memberi petunjuk** - User paham apa yang terjadi (feedback)
- 🎯 **Mengarahkan fokus** - Arahkan perhatian ke elemen penting
- 🔄 **Transisi halus** - Perubahan state tidak mengejutkan
- 😊 **Delight user** - Pengalaman yang menyenangkan
- 📱 **Feel native** - Website terasa seperti aplikasi native

## CSS vs JavaScript Animations

| | CSS Animations | JavaScript Animations |
|---|---------------|----------------------|
| Performa | Sangat baik (GPU accelerated) | Tergantung library |
| Kompleksitas | Sederhana-sedang | Kompleks (kontrol penuh) |
| Use Case | UI transitions, hover, loading | Game, physics, complex timelines |
| Kurva belajar | Rendah | Sedang-Tinggi |
| Main thread | Tidak block (compositor) | Bisa block |

## Dua Cara Animasi di CSS

### 1. Transitions
**Dari state A ke state B** - Butuh trigger (hover, click, class change).

\`\`\`css
.button {
    background: blue;
    transition: background 0.3s ease;
}
.button:hover {
    background: red; /* Transisi halus! */
}
\`\`\`

### 2. Keyframe Animations
**Multi-step, bisa jalan sendiri** - Tidak perlu trigger.

\`\`\`css
@keyframes pulse {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.1); }
    100% { transform: scale(1); }
}
.icon {
    animation: pulse 2s infinite;
}
\`\`\`

## Kapan Pakai yang Mana?

| Transitions | Keyframe Animations |
|-------------|-------------------|
| Hover effects | Loading spinners |
| Toggle state | Auto-playing animations |
| Simple A→B | Multi-step sequences |
| Butuh trigger | Loop / auto-start |

## Prinsip Animasi yang Baik

1. **🎯 Purposeful** - Ada tujuan, bukan asal gerak
2. **⏱️ Cepat** - 200-500ms (jangan buat user nunggu)
3. **🔄 Natural** - Ikuti hukum fisika (ease, bukan linear)
4. **♿ Accessible** - Hormati \`prefers-reduced-motion\`
5. **⚡ Performant** - Animasikan transform & opacity saja
  `,

  quiz: [
    { question: "Transitions vs Keyframe animations?", options: ["Sama", "Transitions: A→B butuh trigger; Keyframes: multi-step bisa auto", "Keyframes lebih cepat", "Transitions deprecated"], correctAnswer: 1 },
    { question: "Durasi animasi UI yang baik?", options: ["1-2 detik", "200-500ms", "5 detik", "Tidak terbatas"], correctAnswer: 1, explanation: "200-500ms cukup untuk feedback tanpa bikin user nunggu." },
    { question: "Properti apa yang aman untuk animasi?", options: ["width, height", "transform, opacity", "margin, padding", "Semua aman"], correctAnswer: 1, explanation: "Hanya transform dan opacity yang GPU-accelerated, tidak trigger layout/reflow." }
  ],

  codeExamples: [
    {
      title: "Transitions vs Keyframes Demo",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Animasi CSS Demo</title>
    <style>
        body { font-family: Arial; display: flex; gap: 40px; justify-content: center; padding: 60px; background: #f5f5f5; }
        
        .box { width: 150px; height: 150px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
        
        /* Transition */
        .transition-box { background: #3498db; transition: all 0.3s ease; cursor: pointer; }
        .transition-box:hover { background: #e74c3c; transform: scale(1.1) rotate(5deg); }
        
        /* Keyframe */
        .keyframe-box { background: #2ecc71; animation: bounce 2s ease-in-out infinite; }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }
        
        .label { text-align: center; margin-top: 15px; font-size: 14px; color: #666; }
    </style>
</head>
<body>
    <div>
        <div class="box transition-box">Hover Me</div>
        <p class="label">Transition (butuh trigger)</p>
    </div>
    <div>
        <div class="box keyframe-box">Auto</div>
        <p class="label">Keyframe (jalan sendiri)</p>
    </div>
</body>
</html>`
    }
  ]
};