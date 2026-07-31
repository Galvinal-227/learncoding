export const chapter = {
  slug: "html-audio",
  title: "Audio",
  description: "Pelajari cara menyematkan dan mengontrol audio di halaman web menggunakan HTML5.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["html-elements"],
  tags: ["html", "audio", "multimedia", "html5"],
  order: 21,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Elemen Audio HTML5

Elemen \`<audio>\` digunakan untuk menyematkan file suara ke halaman web.

## Sintaks Dasar

\`\`\`html
<audio controls>
    <source src="lagu.mp3" type="audio/mpeg">
    <source src="lagu.ogg" type="audio/ogg">
    Browser kamu tidak mendukung elemen audio.
</audio>
\`\`\`

## Atribut Audio

### controls
Menampilkan kontrol pemutaran (play, pause, volume):
\`\`\`html
<audio controls src="lagu.mp3"></audio>
\`\`\`

### autoplay
Memulai pemutaran otomatis (dibatasi browser):
\`\`\`html
<audio autoplay muted>
    <source src="backsound.mp3" type="audio/mpeg">
</audio>
\`\`\`
⚠️ Browser modern memblokir autoplay tanpa muted.

### loop
Mengulang audio:
\`\`\`html
<audio controls loop>
    <source src="backsound.mp3" type="audio/mpeg">
</audio>
\`\`\`

### muted
Mematikan suara:
\`\`\`html
<audio controls muted>
    <source src="lagu.mp3" type="audio/mpeg">
</audio>
\`\`\`

### preload
Petunjuk loading:
\`\`\`html
<!-- Tidak preload -->
<audio controls preload="none" src="lagu.mp3"></audio>

<!-- Preload metadata saja -->
<audio controls preload="metadata" src="lagu.mp3"></audio>

<!-- Preload full (default) -->
<audio controls preload="auto" src="lagu.mp3"></audio>
\`\`\`

## Format Audio yang Didukung

| Format | Tipe MIME | Browser |
|--------|-----------|---------|
| MP3 | audio/mpeg | Semua browser |
| WAV | audio/wav | Semua browser |
| OGG | audio/ogg | Chrome, Firefox |
| AAC | audio/aac | Chrome, Safari |
| FLAC | audio/flac | Chrome, Firefox |

## Multiple Sources

Sediakan beberapa format untuk kompatibilitas:
\`\`\`html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.wav" type="audio/wav">
    <p>Browser kamu tidak mendukung audio HTML5.</p>
</audio>
\`\`\`

## JavaScript Audio API

\`\`\`javascript
const audio = document.querySelector('audio');

// Kontrol dasar
audio.play();
audio.pause();
audio.currentTime = 30; // Mulai dari detik 30
audio.volume = 0.5;     // Volume 50%

// Event
audio.addEventListener('play', () => {
    console.log('Audio dimulai');
});

audio.addEventListener('ended', () => {
    console.log('Audio selesai');
});
\`\`\`

## Track dan Subtitles untuk Audio

\`\`\`html
<audio controls>
    <source src="podcast.mp3" type="audio/mpeg">
    <track kind="captions" src="podcast.vtt" srclang="id" label="Indonesia">
</audio>
\`\`\`
  `,

  quiz: [
    {
      question: "Atribut apa yang menampilkan tombol play/pause pada elemen audio?",
      options: ["show", "display", "controls", "visible"],
      correctAnswer: 2,
      explanation: "Atribut 'controls' menampilkan kontrol pemutaran standar browser seperti play, pause, dan volume."
    },
    {
      question: "Kenapa autoplay sering tidak berfungsi tanpa muted?",
      options: [
        "Bug browser",
        "Kebijakan browser memblokir autoplay bersuara",
        "Format file salah",
        "Perlu JavaScript"
      ],
      correctAnswer: 1,
      explanation: "Browser modern memblokir autoplay dengan suara untuk mencegah pengalaman yang mengganggu pengguna."
    },
    {
      question: "Kenapa perlu menyediakan multiple source?",
      options: [
        "Agar lebih cepat",
        "Untuk kompatibilitas browser yang berbeda",
        "Untuk kualitas lebih baik",
        "Agar bisa diputar bersamaan"
      ],
      correctAnswer: 1,
      explanation: "Browser berbeda mendukung format audio berbeda. Multiple source memastikan audio bisa diputar di semua browser."
    }
  ],

  codeExamples: [
    {
      title: "Pemutar Audio Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Pemutar Audio</title>
</head>
<body>
    <h1>Pemutar Audio HTML5</h1>
    
    <!-- Audio Player Dasar -->
    <h2>1. Pemutar Dasar</h2>
    <audio controls>
        <source src="lagu.mp3" type="audio/mpeg">
        <source src="lagu.ogg" type="audio/ogg">
        Browser kamu tidak mendukung elemen audio.
    </audio>
    
    <!-- Audio dengan Loop -->
    <h2>2. Background Music (Loop)</h2>
    <audio controls loop>
        <source src="backsound.mp3" type="audio/mpeg">
    </audio>
    
    <!-- Audio dengan Preload -->
    <h2>3. Preload Metadata</h2>
    <audio controls preload="metadata">
        <source src="podcast.mp3" type="audio/mpeg">
    </audio>
    
    <!-- Multiple Sources -->
    <h2>4. Format Lengkap</h2>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        <source src="audio.ogg" type="audio/ogg">
        <source src="audio.wav" type="audio/wav">
        <p>Tidak dapat memutar audio. 
           <a href="audio.mp3">Download MP3</a>
        </p>
    </audio>
    
    <!-- Audio dengan JavaScript -->
    <h2>5. Kontrol Kustom</h2>
    <audio id="audioKustom">
        <source src="lagu.mp3" type="audio/mpeg">
    </audio>
    <div>
        <button onclick="document.getElementById('audioKustom').play()">
            ▶ Play
        </button>
        <button onclick="document.getElementById('audioKustom').pause()">
            ⏸ Pause
        </button>
        <button onclick="document.getElementById('audioKustom').currentTime = 0">
            ⏹ Stop
        </button>
        <input type="range" min="0" max="1" step="0.1" value="1"
               onchange="document.getElementById('audioKustom').volume = this.value">
    </div>
</body>
</html>`,
      output: "Berbagai implementasi pemutar audio HTML5."
    }
  ]
};