export const chapter = {
  slug: "html-video",
  title: "Video",
  description: "Pelajari cara menyematkan dan mengontrol video di HTML5.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["html-elements"],
  tags: ["html", "video", "multimedia", "html5"],
  order: 22,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Elemen Video HTML5

Elemen \`<video>\` digunakan untuk menyematkan video ke halaman web tanpa plugin.

## Sintaks Dasar

\`\`\`html
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Browser kamu tidak mendukung elemen video.
</video>
\`\`\`

## Atribut Video

### controls
\`\`\`html
<video controls src="video.mp4"></video>
\`\`\`

### autoplay
\`\`\`html
<video autoplay muted loop playsinline>
    <source src="hero.mp4" type="video/mp4">
</video>
\`\`\`

### poster
Gambar thumbnail sebelum video diputar:
\`\`\`html
<video controls poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

### playsinline
Video diputar inline di mobile (tidak fullscreen):
\`\`\`html
<video controls playsinline>
    <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

### preload
\`\`\`html
<video controls preload="metadata" src="video.mp4"></video>
\`\`\`

## Format Video

| Format | Tipe MIME | Catatan |
|--------|-----------|---------|
| MP4 (H.264) | video/mp4 | Dukungan terluas |
| WebM | video/webm | Chrome, Firefox |
| OGG | video/ogg | Chrome, Firefox |

## Video dengan Subtitles

\`\`\`html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track kind="subtitles" src="subtitle-id.vtt" srclang="id" label="Indonesia" default>
    <track kind="subtitles" src="subtitle-en.vtt" srclang="en" label="English">
</video>
\`\`\`

## JavaScript Video API

\`\`\`javascript
const video = document.querySelector('video');

video.play();
video.pause();
video.currentTime = 60;
video.volume = 0.7;
video.playbackRate = 1.5; // 1.5x speed

// Event
video.addEventListener('timeupdate', () => {
    console.log(video.currentTime);
});
\`\`\`
  `,

  quiz: [
    {
      question: "Atribut apa yang menampilkan thumbnail sebelum video diputar?",
      options: ["thumbnail", "poster", "preview", "cover"],
      correctAnswer: 1,
      explanation: "Atribut 'poster' menentukan gambar yang ditampilkan sebagai thumbnail sebelum video diputar."
    },
    {
      question: "Format video apa yang memiliki dukungan browser terluas?",
      options: ["WebM", "OGG", "MP4 (H.264)", "AVI"],
      correctAnswer: 2,
      explanation: "MP4 dengan codec H.264 memiliki dukungan paling luas di semua browser modern."
    }
  ],

  codeExamples: [
    {
      title: "Pemutar Video Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Pemutar Video</title>
    <style>
        video { max-width: 100%; height: auto; background: #000; border-radius: 8px; }
        .video-container { position: relative; max-width: 800px; margin: 0 auto; }
    </style>
</head>
<body>
    <h1>Pemutar Video HTML5</h1>
    
    <!-- Video Dasar -->
    <h2>1. Video Dasar</h2>
    <div class="video-container">
        <video controls poster="thumbnail.jpg" width="800" height="450">
            <source src="video.mp4" type="video/mp4">
            <source src="video.webm" type="video/webm">
            <p>Browser tidak mendukung video. 
               <a href="video.mp4">Download MP4</a>
            </p>
        </video>
    </div>
    
    <!-- Video dengan Subtitles -->
    <h2>2. Video dengan Subtitles</h2>
    <video controls>
        <source src="tutorial.mp4" type="video/mp4">
        <track kind="subtitles" src="sub-id.vtt" srclang="id" label="Indonesia" default>
        <track kind="subtitles" src="sub-en.vtt" srclang="en" label="English">
    </video>
    
    <!-- Background Video -->
    <h2>3. Background Video</h2>
    <video autoplay muted loop playsinline style="width:100%; max-height:400px; object-fit:cover;">
        <source src="background.mp4" type="video/mp4">
    </video>
</body>
</html>`,
      output: "Berbagai implementasi pemutar video HTML5."
    }
  ]
};